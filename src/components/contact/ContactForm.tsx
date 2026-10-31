"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { ServiceChips } from "@/components/contact/ServiceChips";
import { ArrowRight } from "@/components/icons";

const FIELD =
  "h-12 w-full rounded-xl border border-field bg-white px-4 text-[15px] text-ink transition-colors duration-150 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15 disabled:opacity-50";

type Status = "idle" | "sending" | "error";

export function ContactForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const body = new FormData(e.currentTarget);
      const res = await fetch("/api/contact", { method: "POST", body });

      if (res.ok || res.status === 303) {
        router.push("/contact/thank-you");
        return;
      }

      if (res.status === 429) {
        setErrorMsg(
          "Too many messages from this connection. Please try again later, or email us directly.",
        );
      } else if (res.status === 400) {
        const text = await res.text();
        // Strip the preamble from the server's plain-text list
        const lines = text.replace("Please go back and fix the form:", "").trim();
        setErrorMsg(lines || "Please check the form and try again.");
      } else {
        setErrorMsg(
          "Something went wrong sending your message. You can also email us directly.",
        );
      }
    } catch {
      setErrorMsg("Could not reach the server. Check your connection and try again.");
    }

    setStatus("error");
  }

  const busy = status === "sending";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      id="message"
      noValidate
      className="relative scroll-mt-8 rounded-[24px] border border-line bg-white p-8 shadow-[0_32px_64px_-32px_rgba(10,16,34,0.22)] max-[480px]:p-6"
    >
      <h2 className="text-[22px] font-bold tracking-[-0.018em]">Send a message</h2>
      <p className="mt-1 text-[14px] text-muted">
        Tell us about your project — we reply within one business day.
      </p>

      {/* Service chips */}
      <ServiceChips />

      {/* Name + email */}
      <div className="mt-5 grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-[13px] font-semibold">
            Name <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="c-name" name="name" type="text"
            placeholder="Your name" autoComplete="name" maxLength={120}
            required aria-required="true" disabled={busy} className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1.5 block text-[13px] font-semibold">
            Work email <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="c-email" name="email" type="email"
            placeholder="you@company.com" autoComplete="email" maxLength={200}
            required aria-required="true" disabled={busy} className={FIELD}
          />
        </div>
      </div>

      {/* Company + website */}
      <div className="mt-4 grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
        <div>
          <label htmlFor="c-company" className="mb-1.5 block text-[13px] font-semibold">
            Company <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="c-company" name="company" type="text"
            placeholder="Company name" autoComplete="organization" maxLength={160}
            required aria-required="true" disabled={busy} className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="c-website" className="mb-1.5 block text-[13px] font-semibold">
            Website <span className="font-normal text-faint">(optional)</span>
          </label>
          <input
            id="c-website" name="website" type="text" inputMode="url"
            placeholder="example.com" autoComplete="url" maxLength={300}
            disabled={busy} className={FIELD}
          />
        </div>
      </div>

      {/* Engagement */}
      <div className="mt-4">
        <label htmlFor="c-budget" className="mb-1.5 block text-[13px] font-semibold">
          How would you like to work?
        </label>
        <select
          id="c-budget" name="engagement" defaultValue="Not sure yet"
          disabled={busy} className={FIELD}
        >
          <option>Fixed-scope project</option>
          <option>Monthly development</option>
          <option>Automation audit</option>
          <option>Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div className="mt-4">
        <label htmlFor="c-msg" className="mb-1.5 block text-[13px] font-semibold">
          What are you trying to achieve?{" "}
          <span className="text-brand" aria-hidden="true">*</span>
        </label>
        <textarea
          id="c-msg" name="message"
          placeholder="The problem, who it affects and any deadline"
          maxLength={4000} required aria-required="true" disabled={busy}
          className={`${FIELD} h-32 min-h-[100px] resize-y py-3`}
        />
      </div>

      {/* Honeypot — visually hidden */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="c-company-site">Company website</label>
        <input
          id="c-company-site" name="company_website_check"
          type="text" tabIndex={-1} autoComplete="off"
        />
      </div>

      {/* Error message */}
      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] leading-[1.6] text-red-700"
        >
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={busy}
        aria-busy={busy}
        className="mt-6 inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl bg-brand px-6 text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_-8px_rgba(46,79,227,0.7)] transition-colors duration-150 hover:bg-[#2440c4] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {busy ? (
          <>
            <Spinner /> Sending…
          </>
        ) : (
          <>
            Send message <ArrowRight size={15} />
          </>
        )}
      </button>

      {/* Trust line */}
      <p className="mt-4 text-[12px] leading-[1.6] text-faint">
        No sales sequence. NDA on request.{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-ink">
          Privacy policy
        </Link>
      </p>
    </form>
  );
}

function Spinner() {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      className="animate-spin"
      aria-hidden="true"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
