import "server-only";
import { deliver, readSubmission, type Submission } from "./forms";
import { CONTACT_EMAIL } from "./site";

const plain = (body: string, status: number, headers: Record<string, string> = {}) =>
  new Response(body, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      ...headers,
    },
  });

const THANK_YOU = "/contact/thank-you";

/**
 * Best-effort in-memory rate limit, per client IP. Serverless instances each keep their own map,
 * so this slows casual abuse rather than providing a hard guarantee. A shared store (Redis/KV) is
 * the production-grade upgrade; the form never claims a limit it cannot enforce.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function tooMany(key: string): boolean {
  const now = Date.now();
  const record = hits.get(key);
  if (!record || record.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  record.count += 1;
  return record.count > MAX_SUBMISSIONS;
}

/** Shared POST handler for /api/contact and /api/audit: validate, deliver, then 303 to the thank-you page. */
export async function handleForm(request: Request, form: Submission["form"]) {
  const { submission, errors, spam } = await readSubmission(request, form);

  // Silently accept honeypot submissions so bots see the same result as a person.
  if (spam) {
    return new Response(null, { status: 303, headers: { Location: THANK_YOU, "Cache-Control": "no-store" } });
  }

  if (errors.length) return plain(`Please go back and fix the form:\n- ${errors.join("\n- ")}`, 400);

  if (tooMany(clientKey(request))) {
    return plain(
      `Too many messages from this connection. Please try again later, or email ${CONTACT_EMAIL}.`,
      429,
      { "Retry-After": String(Math.ceil(WINDOW_MS / 1000)) },
    );
  }

  let sent = false;
  try {
    sent = await deliver(submission);
  } catch (error) {
    console.error(error);
    return plain(`Your message could not be sent. Please email ${CONTACT_EMAIL} instead.`, 502);
  }

  if (!sent) {
    if (process.env.NODE_ENV !== "production") {
      // Local development: show the payload instead of sending it.
      console.info(`[${form} form] delivery not configured; submission:`, submission.fields);
    } else {
      return plain(`Online forms are not connected yet. Please email ${CONTACT_EMAIL}.`, 503);
    }
  }

  return new Response(null, {
    status: 303,
    headers: { Location: THANK_YOU, "Cache-Control": "no-store" },
  });
}
