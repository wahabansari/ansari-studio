"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowIcon } from "@/components/brand";
import { EASE } from "@/components/motion";
import { useLeadForm } from "./useLeadForm";

export function AuditForm() {
  const { handleSubmit, isSending, errorMessage } = useLeadForm("/api/audit");

  return (
    <form className="form" onSubmit={handleSubmit} noValidate aria-busy={isSending}>
      <div className="f2">
        <div className="fld">
          <label htmlFor="a-name">Name</label>
          <input
            id="a-name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            maxLength={120}
            required
            disabled={isSending}
          />
        </div>
        <div className="fld">
          <label htmlFor="a-email">Email</label>
          <input
            id="a-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            maxLength={200}
            required
            disabled={isSending}
          />
        </div>
      </div>
      <div className="fld">
        <label htmlFor="a-task">What takes the most time in your week?</label>
        <textarea
          id="a-task"
          name="task"
          placeholder="Tell us about the routine work and the tools involved."
          maxLength={2000}
          required
          disabled={isSending}
        />
      </div>
      <div className="fld">
        <label htmlFor="a-website">Company website</label>
        <input
          id="a-website"
          name="website"
          type="text"
          inputMode="url"
          placeholder="example.com"
          autoComplete="url"
          maxLength={300}
          disabled={isSending}
        />
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="a-site">Company website</label>
        <input id="a-site" name="company_website_check" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <AnimatePresence>
        {errorMessage && (
          <motion.div
            role="alert"
            className="fmsg"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <button type="submit" className="btn btn-p" disabled={isSending}>
          {isSending ? "Sending…" : "Request your audit"} <ArrowIcon />
        </button>
      </div>
      <p className="sm">No commitment.</p>
    </form>
  );
}
