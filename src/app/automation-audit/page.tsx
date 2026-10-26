import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";

export const metadata: Metadata = {
  title: "Free Automation Audit",
  description:
    "A free review of your tools and workflows. You get a written, prioritized shortlist of what is worth automating — and what is not.",
  alternates: { canonical: "/automation-audit" },
};

export default function AuditPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="none"
          parent="AI Integrations & Workflow Automation"
          parentHref="/services/automation-ai"
          crumb="Automation audit"
          eyebrow="Free automation audit"
          title="Find the hours your team loses to manual work"
          titleAccent="— before spending a cent."
          lead="A free review of your tools and workflows. You get a written, prioritized shortlist of what is worth automating first — and what is not."
          primary="Request your audit"
          primaryHref="#audit-form"
          secondary=""
          points="Structured review|Written report|No obligation to build"
          glow="mint"
        />
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-start gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <div className="text-[14px] font-semibold text-brand">What you get</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,48px)] leading-[1.05] font-bold tracking-[-0.026em]">
                A clear answer on what to automate first.
              </h2>
              <div className="mt-[36px] flex flex-col gap-[14px]">
                <div className="flex gap-[16px] rounded-[20px] border border-line bg-white p-[22px]">
                  <span className="flex h-[36px] w-[36px] flex-none items-center justify-center rounded-[10px] bg-teal-50 text-teal">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[17px] font-[650]">A written report</span>
                    <span className="mt-[2px] block text-[15px] text-muted">
                      Where time is lost across your tools today.
                    </span>
                  </span>
                </div>
                <div className="flex gap-[16px] rounded-[20px] border border-line bg-white p-[22px]">
                  <span className="flex h-[36px] w-[36px] flex-none items-center justify-center rounded-[10px] bg-teal-50 text-teal">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <path d="M18 17V9" />
                      <path d="M13 17V5" />
                      <path d="M8 17v-3" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[17px] font-[650]">A prioritized shortlist</span>
                    <span className="mt-[2px] block text-[15px] text-muted">
                      Ranked by the manual work they could take off your team.
                    </span>
                  </span>
                </div>
                <div className="flex gap-[16px] rounded-[20px] border border-line bg-white p-[22px]">
                  <span className="flex h-[36px] w-[36px] flex-none items-center justify-center rounded-[10px] bg-teal-50 text-teal">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[17px] font-[650]">What each option involves</span>
                    <span className="mt-[2px] block text-[15px] text-muted">
                      So you can decide what is worth building.
                    </span>
                  </span>
                </div>
              </div>
              <h3 className="mt-[48px] text-[22px] font-[680] tracking-[-0.012em]">How it works</h3>
              <ol className="mt-[18px] flex list-none flex-col gap-[16px]">
                <li className="flex items-start gap-[14px]">
                  <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-full bg-brand text-[13px] font-[650] text-white">
                    1
                  </span>
                  <span className="text-[16px] leading-[1.5]">
                    <b className="font-[650]">Send the form.</b>{" "}
                    <span className="text-muted">Tell us which tools your team uses.</span>
                  </span>
                </li>
                <li className="flex items-start gap-[14px]">
                  <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-full bg-brand text-[13px] font-[650] text-white">
                    2
                  </span>
                  <span className="text-[16px] leading-[1.5]">
                    <b className="font-[650]">Talk it through.</b>{" "}
                    <span className="text-muted">We walk through how work moves today.</span>
                  </span>
                </li>
                <li className="flex items-start gap-[14px]">
                  <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-full bg-brand text-[13px] font-[650] text-white">
                    3
                  </span>
                  <span className="text-[16px] leading-[1.5]">
                    <b className="font-[650]">Get your report.</b>{" "}
                    <span className="text-muted">Keep it, whether or not you work with us.</span>
                  </span>
                </li>
              </ol>
            </div>
            <form
              className="sticky top-[24px] rounded-[28px] border border-line bg-white p-[32px] shadow-[0_40px_80px_-40px_rgba(10,16,34,0.35)]"
              id="audit-form"
              method="post"
              action="/api/audit"
            >
              <div className="text-[22px] font-bold tracking-[-0.016em]">Request your audit</div>
              <p className="mt-[6px] text-[14px] text-muted">
                We reply within one business day to book your call.
              </p>
              <div className="mt-[24px] flex flex-col gap-[16px]">
                <div>
                  <label className="mb-[6px] block text-[14px] font-semibold" htmlFor="a-name">
                    Name
                  </label>
                  <input
                    className="h-[48px] w-full rounded-[12px] border border-field bg-white px-[14px] text-[15px] text-ink [font:inherit] focus:border-brand focus:[outline:2px_solid_#2E4FE3] focus:outline-offset-[2px]"
                    id="a-name"
                    name="name"
                    required
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="mb-[6px] block text-[14px] font-semibold" htmlFor="a-email">
                    Work email
                  </label>
                  <input
                    className="h-[48px] w-full rounded-[12px] border border-field bg-white px-[14px] text-[15px] text-ink [font:inherit] focus:border-brand focus:[outline:2px_solid_#2E4FE3] focus:outline-offset-[2px]"
                    id="a-email"
                    name="email"
                    required
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="mb-[6px] block text-[14px] font-semibold" htmlFor="a-company">
                    Company website
                  </label>
                  <input
                    className="h-[48px] w-full rounded-[12px] border border-field bg-white px-[14px] text-[15px] text-ink [font:inherit] focus:border-brand focus:[outline:2px_solid_#2E4FE3] focus:outline-offset-[2px]"
                    id="a-company"
                    name="website"
                    type="url"
                    placeholder="https://"
                  />
                </div>
                <div>
                  <label className="mb-[6px] block text-[14px] font-semibold" htmlFor="a-size">
                    Team size
                  </label>
                  <select
                    className="h-[48px] w-full rounded-[12px] border border-field bg-white px-[14px] text-[15px] text-ink [font:inherit] focus:border-brand focus:[outline:2px_solid_#2E4FE3] focus:outline-offset-[2px]"
                    id="a-size"
                    name="team_size"
                  >
                    <option>1–5</option>
                    <option>6–20</option>
                    <option>21–50</option>
                    <option>50+</option>
                  </select>
                </div>
                <div>
                  <label className="mb-[6px] block text-[14px] font-semibold" htmlFor="a-tools">
                    Which task eats the most time?
                  </label>
                  <textarea
                    className="h-[112px] w-full resize-y rounded-[12px] border border-field bg-white px-[14px] py-[12px] text-[15px] text-ink [font:inherit] focus:border-brand focus:[outline:2px_solid_#2E4FE3] focus:outline-offset-[2px]"
                    id="a-tools"
                    name="task"
                    required
                    placeholder="For example: copying enquiries into our CRM"
                  />
                </div>
              </div>
              <button
                className="mt-[22px] h-[52px] w-full cursor-pointer rounded-[12px] border-0 bg-brand text-[16px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(46,79,227,0.8)] transition-colors duration-150 [font:inherit] hover:bg-[#2643c9]"
                type="submit"
              >
                Request my audit
              </button>
              <p className="mt-[14px] text-[12px] leading-[1.5] text-faint">
                We use your details only to reply to you.{" "}
                <Link className="underline" href="/privacy">
                  Privacy policy
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Prefer to talk first?"
        text="Book a 30-minute call, or tell us about your project. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
