import "server-only";

export interface Submission {
  form: "contact" | "audit";
  fields: Record<string, string>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Reads a form POST, trims values, and checks the fields every form requires. */
export async function readSubmission(request: Request, form: Submission["form"]) {
  const data = await request.formData();
  const fields: Record<string, string> = {};
  for (const [key, value] of data.entries()) {
    if (typeof value === "string") fields[key] = value.trim().slice(0, 5000);
  }
  const errors: string[] = [];
  if (!fields.name) errors.push("Enter your name.");
  if (!fields.email || !EMAIL_RE.test(fields.email))
    errors.push("Enter a valid work email, like you@company.com.");
  return { submission: { form, fields } satisfies Submission, errors };
}

/**
 * Sends the submission by email through Resend when RESEND_API_KEY and CONTACT_TO_EMAIL are set.
 * Returns false when delivery is not configured, so callers never pretend a message was sent.
 */
export async function deliver({ form, fields }: Submission): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Ansari Studio <onboarding@resend.dev>";
  if (!apiKey || !to) return false;

  const subject = form === "audit" ? `Audit request from ${fields.name}` : `New enquiry from ${fields.name}`;
  const text = Object.entries(fields)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: fields.email, subject, text }),
  });
  if (!response.ok) throw new Error(`Email delivery failed (${response.status})`);
  return true;
}
