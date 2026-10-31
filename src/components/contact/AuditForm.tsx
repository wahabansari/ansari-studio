"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "@/components/icons";

const FIELD =
  "h-12 w-full rounded-xl border border-field bg-white px-4 text-[15px] text-ink transition-colors duration-150 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15 disabled:opacity-50";

type Status = "idle" | "sending" | "error";

export function AuditForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const body = new FormData(e.currentTarget);
      const res = await fetch("/api/audit", { method: "POST", body });

      if (res.ok || res.status === 303) {
        router.push("/contact/thank-you");
        return;
      }

      if (res.status === 429) {
        setErrorMsg(
          "Too many submissions from this connection. Please try again later, or email us directly.",
        );
      } else if (res.status === 400) {
        const text = await res.text();
        const lines = text.replace("Please go back and fix the form:", "").trim();
        setErrorMsg(lines || "Please check the form and try again.");
      } else {
        setErrorMsg(
          "Something went wrong. You can also email us directly.",
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
      onSubmit={handleSubmit}
      noValidate
      id="audit-form"
      className="rounded-[24px] border border-line bg-white p-8 shadow-[0_32px_64px_-32px_rgba(10,16,34,0.22)] max-[480px]:p-6"
    >
      <div className="text-[12px] font-semibold tracking-widest text-teal-deep uppercase">
        Free to scope · No obligation to build
      </div>
      <h2 className="mt-2 text-[22px] font-bold tracking-[-0.016em]">Request an audit</h2>
      <p className="mt-1.5 text-[13px] leading-[1.6] text-muted">
        We reply within one business day to agree the scope and price before any work starts.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div>
          <label className="mb-1.5 block text-[13px] font-semibold" htmlFor="a-name">
            Name <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            className={FIELD} id="a-name" name="name" type="text"
            placeholder="Your name" autoComplete="name" maxLength={120}
            required aria-required="true" disabled={busy}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-semibold" htmlFor="a-email">
            Work email <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            className={FIELD} id="a-email" name="email" type="email"
            placeholder="you@company.com" autoComplete="email" maxLength={200}
            required aria-required="true" disabled={busy}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-semibold" htmlFor="a-company">
            Company <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            className={FIELD} id="a-company" name="company" type="text"
            placeholder="Company name" autoComplete="organization" maxLength={160}
            required aria-required="true" disabled={busy}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-semibold" htmlFor="a-website">
            Company website{" "}
            <span className="font-normal text-faint">(optional)</span>
          </label>
          <input
            className={FIELD} id="a-website" name="website" type="text"
            placeholder="example.com" autoComplete="url" maxLength={300}
            disabled={busy}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-semibold" htmlFor="a-size">
            Team size
          </label>
          <select className={FIELD} id="a-size" name="team_size" disabled={busy}>
            <option>1–5</option>
            <option>6–20</option>
            <option>21–50</option>
            <option>50+</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-semibold" htmlFor="a-tools">
            Which task eats the most time?{" "}
            <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <textarea
            className={`${FIELD} h-28 min-h-[90px] resize-y py-3`}
            id="a-tools" name="task"
            placeholder="e.g. copying enquiries into our CRM after every form submission"
            maxLength={2000} required aria-required="true" disabled={busy}
          />
        </div>
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="a-company-site">Company website</label>
        <input id="a-company-site" name="company_website_check" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] leading-[1.6] text-red-700"
        >
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        aria-busy={busy}
        className="mt-6 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_-8px_rgba(46,79,227,0.7)] transition-colors duration-150 hover:bg-[#2440c4] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {busy ? (
          <>
            <Spinner /> Sending request…
          </>
        ) : (
          <>
            Request my audit <ArrowRight size={15} />
          </>
        )}
      </button>

      <p className="mt-4 text-[12px] leading-[1.6] text-faint">
        We use your details only to reply to you. No sales sequence.
      </p>
    </form>
  );
}

function Spinner() {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      className="animate-spin" aria-hidden="true"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
