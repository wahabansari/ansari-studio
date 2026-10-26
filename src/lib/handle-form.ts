import "server-only";
import { deliver, readSubmission, type Submission } from "./forms";
import { CONTACT_EMAIL } from "./site";

const plain = (body: string, status: number) =>
  new Response(body, {
    status,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });

/** Shared POST handler for /api/contact and /api/audit: validate, deliver, then 303 to the thank-you page. */
export async function handleForm(request: Request, form: Submission["form"]) {
  const { submission, errors } = await readSubmission(request, form);
  if (errors.length) return plain(`Please go back and fix the form:\n- ${errors.join("\n- ")}`, 400);

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
    headers: { Location: "/contact/thank-you", "Cache-Control": "no-store" },
  });
}
