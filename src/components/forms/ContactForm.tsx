"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowIcon } from "@/components/brand";
import { EASE } from "@/components/motion";
import { SERVICES } from "@/data/services";
import { useLeadForm } from "./useLeadForm";

const CHOICES = [...SERVICES.map((service) => service.name), "Not sure yet"];

export function ContactForm() {
  const { handleSubmit, isSending, errorMessage } = useLeadForm("/api/contact");

  return (
    <form className="form" onSubmit={handleSubmit} noValidate aria-busy={isSending}>
      <div className="f2">
        <div className="fld">
          <label htmlFor="c-name">Name</label>
          <input
            id="c-name"
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
          <label htmlFor="c-email">Email</label>
          <input
            id="c-email"
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
        <label htmlFor="c-company">Company</label>
        <input
          id="c-company"
          name="company"
          type="text"
          placeholder="Company name"
          autoComplete="organization"
          maxLength={160}
          required
          disabled={isSending}
        />
      </div>
      <fieldset className="lbl-set">
        <legend className="lbl">What do you need?</legend>
        <div className="chips">
          {CHOICES.map((choice, index) => (
            <span key={choice} className="chip">
              <input type="radio" name="service" id={`s${index}`} value={choice} disabled={isSending} />
              <label htmlFor={`s${index}`}>{choice}</label>
            </span>
          ))}
        </div>
      </fieldset>
      <div className="fld">
        <label htmlFor="c-message">Project description</label>
        <textarea
          id="c-message"
          name="message"
          placeholder="What are you trying to build, improve or connect?"
          maxLength={4000}
          required
          disabled={isSending}
        />
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="c-site">Company website</label>
        <input id="c-site" name="company_website_check" type="text" tabIndex={-1} autoComplete="off" />
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
          {isSending ? "Sending…" : "Send message"} <ArrowIcon />
        </button>
      </div>
    </form>
  );
}
