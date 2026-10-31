import Link from "next/link";
import { AuditForm } from "@/components/contact/AuditForm";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { Check } from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Automation Audit for Business Workflows",
  description:
    "A scoped review of your tools and workflows. You get a written, prioritized shortlist of what is worth automating — and what is not.",
  path: "/automation-audit",
});

const DELIVERABLES = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4M16 13H8M16 17H8" />
      </svg>
    ),
    title: "A written report",
    text: "Where time is being lost across your tools today, in plain language.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v16a2 2 0 0 0 2 2h16M18 17V9M13 17V5M8 17v-3" />
      </svg>
    ),
    title: "A prioritized shortlist",
    text: "Each item ranked by how much manual work it removes and how complex it is to build.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "What each option involves",
    text: "Enough detail to decide what is worth building — whether you build with us or not.",
  },
];

const STEPS = [
  { b: "Fill in the form.", t: "Tell us the task that takes the most time." },
  { b: "We align on scope and price.", t: "You get a written quote before any work starts." },
  { b: "We review your tools and workflows.", t: "A call to walk through how work moves today." },
  { b: "You get your report.", t: "Act on it however you like — no obligation to continue." },
];

const TRUST = [
  "Fixed price, agreed in writing before we start",
  "No obligation to build with us afterwards",
  "Report is yours to keep and use",
  "Reply within one business day",
];

export default function AuditPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="none"
          parent="AI Integrations & Workflow Automation"
          parentHref="/services/automation-ai"
          crumb="Automation audit"
          eyebrow="Automation audit"
          title="Find the hours your team loses to manual work"
          titleAccent="— before you build anything."
          lead="A scoped review of your tools and workflows. You get a written, prioritized shortlist of what is worth automating first — and what is not."
          primary="Request an audit"
          primaryHref="#audit-form"
          secondary="Learn how it works"
          secondaryHref="#how-it-works"
          points="Written report|Prioritized shortlist|No obligation to build"
          glow="mint"
        />

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_0.85fr] items-start gap-14 max-[900px]:grid-cols-1">

            {/* ── Left: deliverables + process ────────────────────────── */}
            <div>
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                What you get
              </div>
              <h2 className="mt-3 text-[clamp(24px,3vw,38px)] font-bold leading-[1.12] tracking-[-0.024em]">
                A clear answer on what to automate first.
              </h2>

              {/* Deliverables */}
              <div className="mt-8 flex flex-col gap-3">
                {DELIVERABLES.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-[18px] border border-line bg-white p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal">
                      {item.icon}
                    </span>
                    <span>
                      <span className="block text-[15px] font-bold">{item.title}</span>
                      <span className="mt-1 block text-[13px] leading-[1.65] text-muted">{item.text}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust signals */}
              <div className="mt-6 rounded-[18px] border border-teal-100 bg-teal-50 p-5">
                <div className="font-mono text-[11px] font-semibold tracking-widest text-teal-deep uppercase">
                  How this works
                </div>
                <ul className="mt-3 flex flex-col gap-2">
                  {TRUST.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-[13px] leading-[1.5] text-teal-deep">
                      <Check size={13} className="mt-[1px] shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <h3
                id="how-it-works"
                className="mt-12 scroll-mt-24 text-[19px] font-bold tracking-[-0.014em]"
              >
                How it works
              </h3>
              <ol className="mt-5 flex flex-col gap-4">
                {STEPS.map((step, i) => (
                  <li key={step.b} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-[12px] font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-[15px] leading-[1.55]">
                      <b className="font-bold">{step.b}</b>{" "}
                      <span className="text-muted">{step.t}</span>
                    </span>
                  </li>
                ))}
              </ol>

              {/* Not sure nudge */}
              <div className="mt-10 rounded-[18px] border border-line bg-subtle p-5 text-[14px] leading-[1.65] text-muted">
                Not sure the audit is the right starting point?{" "}
                <Link href="/contact" className="font-semibold text-brand underline-offset-4 hover:underline">
                  Send us a message
                </Link>{" "}
                instead — we will point you to the right place.
              </div>
            </div>

            {/* ── Right: reactive form ─────────────────────────────────── */}
            <div className="lg:sticky lg:top-6">
              <AuditForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Prefer to talk first?"
        text="Book a discovery call instead. You get a reply within one business day."
      />
    </>
  );
}
