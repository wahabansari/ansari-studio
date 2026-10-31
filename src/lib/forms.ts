import "server-only";

import { SERVICES } from "@/data/services";

export interface Submission {
  form: "contact" | "audit";
  fields: Record<string, string>;
}

export interface ReadResult {
  submission: Submission;
  errors: string[];
  /** Honeypot filled: accept silently, deliver nothing. */
  spam: boolean;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const HONEYPOT_FIELD = "company_website_check";

const ALLOWED_SERVICES = new Set([...SERVICES.map((service) => service.name), "Not sure yet"]);
const ALLOWED_ENGAGEMENTS = new Set([
  "Fixed-scope project",
  "Monthly development",
  "Automation audit",
  "Not sure yet",
]);
const ALLOWED_TEAM_SIZES = new Set(["1–5", "6–20", "21–50", "50+"]);

const LIMITS = {
  name: 120,
  email: 200,
  company: 160,
  website: 300,
  message: 4000,
  task: 2000,
  service: 120,
  engagement: 80,
  team_size: 20,
} as const;

/** Trims, normalizes line endings and caps each value before validation. */
function clean(value: string, max: number): string {
  return value.trim().replace(/\r\n/g, "\n").slice(0, max);
}

/** Accepts "example.com" and full URLs; rejects anything that is not http(s). */
function normalizeWebsite(raw: string): string | null {
  if (!raw) return "";
  const candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (!url.hostname.includes(".") || url.hostname.endsWith(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

/** Reads a form POST, trims values, and validates the fields each form requires. */
export async function readSubmission(request: Request, form: Submission["form"]): Promise<ReadResult> {
  const data = await request.formData();
  const raw: Record<string, string> = {};
  for (const [key, value] of data.entries()) {
    if (typeof value === "string") raw[key] = value;
  }

  const fields: Record<string, string> = {};
  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    fields[key] = clean(raw[key] ?? "", LIMITS[key]);
  }

  // Bots fill every field they can see. Accept silently and deliver nothing.
  if (raw[HONEYPOT_FIELD]?.trim()) {
    return { submission: { form, fields: {} }, errors: [], spam: true };
  }

  const errors: string[] = [];

  if (fields.name.length < 2) errors.push("Enter your name.");

  if (!fields.email || !EMAIL_RE.test(fields.email)) {
    errors.push("Enter a valid work email, like you@company.com.");
  }

  if (form === "contact") {
    if (!fields.company) errors.push("Enter your company name.");
    if (fields.service && !ALLOWED_SERVICES.has(fields.service)) {
      errors.push("Choose one of the listed services.");
    }
    if (fields.engagement && !ALLOWED_ENGAGEMENTS.has(fields.engagement)) {
      errors.push("Choose one of the listed engagement types.");
    }
    if (fields.message.length < 20) {
      errors.push("Tell us a little more about what you are trying to achieve (at least 20 characters).");
    }
  }

  if (form === "audit") {
    if (!fields.company) errors.push("Enter your company name.");
    if (fields.task.length < 10) {
      errors.push("Tell us which task takes the most time (at least 10 characters).");
    }
    if (fields.team_size && !ALLOWED_TEAM_SIZES.has(fields.team_size)) {
      errors.push("Choose one of the listed team sizes.");
    }
  }

  if (fields.website) {
    const website = normalizeWebsite(fields.website);
    if (website === null) errors.push("Enter a valid website address, like https://example.com.");
    else fields.website = website;
  }

  return { submission: { form, fields }, errors, spam: false };
}

/**
 * Sends the submission by email through Resend when RESEND_API_KEY and CONTACT_TO_EMAIL are set.
 * Returns false when delivery is not configured, so callers never pretend a message was sent.
 */
export async function deliver({ form, fields }: Submission): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Ansari Product Engineering <onboarding@resend.dev>";
  if (!apiKey || !to) return false;

  const subject =
    form === "audit"
      ? `Audit request from ${fields.name}${fields.company ? ` (${fields.company})` : ""}`
      : `New enquiry from ${fields.name}${fields.company ? ` (${fields.company})` : ""}`;
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
