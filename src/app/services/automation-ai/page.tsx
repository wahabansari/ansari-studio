import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/design/SiteFooter";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

const SERVICE_DESCRIPTION =
  "We design workflow automations that connect your CRM, forms and inbox so repetitive work runs on its own — and integrate AI where it genuinely helps.";

export const metadata: Metadata = {
  title: { absolute: "n8n Automation & AI Workflow Integration | Ansari Product Engineering" },
  description: SERVICE_DESCRIPTION,
  alternates: { canonical: "/services/automation-ai" },
};

export default function AutomationPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Automation & AI",
          description: SERVICE_DESCRIPTION,
          path: "/services/automation-ai",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Automation & AI", path: "/services/automation-ai" },
        ])}
      />
      <main id="main">
        <section className="relative overflow-hidden bg-night pb-[112px] text-white">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_70%_at_80%_20%,#000_30%,transparent_100%)] bg-size-[56px_56px]"
            aria-hidden="true"
          />
          <div
            className="absolute top-[-200px] right-[-200px] h-[700px] w-[900px] bg-[radial-gradient(closest-side,rgba(98,220,203,0.22),rgba(98,220,203,0))]"
            aria-hidden="true"
          />
          <div aria-hidden="true" className="h-[84px]" />
          <div className="relative z-[2] mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center gap-[56px] px-[24px] pt-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <nav className="flex items-center gap-[8px] text-[13px] text-dim" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/services">Services</Link>
                <span aria-hidden="true">/</span>
                <span className="text-white" aria-current="page">
                  Automation &amp; AI
                </span>
              </nav>
              <div className="mt-[28px] inline-flex items-center gap-[8px] rounded-full border border-[rgba(98,220,203,0.25)] bg-[rgba(98,220,203,0.1)] px-[12px] py-[5px] text-[13px] font-semibold text-mint">
                <span className="h-[6px] w-[6px] rounded-full bg-mint" />
                Connect · Workflow automation
              </div>
              <h1 className="mt-[22px] text-[length:clamp(40px,5.2vw,68px)] leading-[1.02] font-bold tracking-[-0.028em] text-white">
                Business process automation that gives your team{" "}
                <span className="text-mint">hours back.</span>
              </h1>
              <p className="mt-[24px] max-w-[540px] text-[18px] leading-[1.6] text-mist">
                We design workflow automations that connect your CRM, forms and inbox, and we integrate AI
                into the steps where it genuinely helps — with a person reviewing anything important.
              </p>
              <div className="mt-[36px] flex flex-wrap gap-[12px]">
                <Link
                  className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] bg-brand px-[24px] text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(46,79,227,0.8)] transition-colors duration-150 hover:bg-[#2643c9]"
                  href="/automation-audit"
                >
                  Get an automation audit{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a
                  className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-[24px] text-[15px] font-semibold text-white transition-colors duration-150 hover:border-[rgba(255,255,255,0.28)] hover:bg-[rgba(255,255,255,0.09)]"
                  href="#how"
                >
                  See how it works
                </a>
              </div>
            </div>
            <div className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] p-[8px]">
              <div className="flex flex-col gap-[12px] rounded-[15px] border border-[rgba(255,255,255,0.07)] bg-panel p-[22px]">
                <div className="flex items-center justify-between text-[12px] text-steel">
                  <span className="font-mono">new-lead.workflow</span>
                  <span className="inline-flex items-center gap-[6px] font-semibold text-mint">
                    <span className="h-[6px] w-[6px] rounded-full bg-mint" />
                    Active
                  </span>
                </div>
                <div className="flex items-center gap-[12px] rounded-[12px] border border-edge bg-raised p-[14px]">
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-[8px] bg-[rgba(143,163,255,0.12)] text-brand-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.06em] text-[#7D89A3] uppercase">
                      Trigger
                    </div>
                    <div className="mt-[2px] text-[14px] font-semibold text-white">A new enquiry arrives</div>
                  </div>
                </div>
                <div
                  className="ml-[29px] h-[14px] w-0 border-l-[1.5px] border-dashed border-l-[#3B4A6B]"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-[12px] rounded-[12px] border border-brand bg-raised p-[14px] shadow-[0_0_0_4px_rgba(46,79,227,0.18)]">
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-[8px] bg-[rgba(98,220,203,0.12)] text-mint">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="8" height="8" x="3" y="3" rx="2" />
                      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                      <rect width="8" height="8" x="13" y="13" rx="2" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.06em] text-[#7D89A3] uppercase">
                      Process
                    </div>
                    <div className="mt-[2px] text-[14px] font-semibold text-white">
                      Qualify, enrich and route
                    </div>
                  </div>
                </div>
                <div
                  className="ml-[29px] h-[14px] w-0 border-l-[1.5px] border-dashed border-l-[#3B4A6B]"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-[12px] rounded-[12px] border border-edge bg-raised p-[14px]">
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-[8px] bg-[rgba(98,220,203,0.12)] text-mint">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.06em] text-[#7D89A3] uppercase">
                      Outcome
                    </div>
                    <div className="mt-[2px] text-[14px] font-semibold text-white">
                      CRM updated, owner notified
                    </div>
                  </div>
                </div>
                <div className="mt-[6px] text-[12px] text-steel">Illustrative workflow, not client work.</div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="text-[14px] font-semibold text-brand">Is this you?</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em] text-ink">
                Signs your team needs automation.
              </h2>
              <p className="mt-[16px] text-[17px] leading-[1.6] text-muted">
                If any of these sound familiar, a small workflow can usually take the work off your team.
              </p>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="rounded-[20px] border border-line bg-white p-[26px]">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-line-strong bg-white text-brand">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </span>
                <h3 className="mt-[20px] text-[17px] font-[650] tracking-[-0.01em]">
                  Copy-pasting between tools
                </h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  The same details are typed into a form, a CRM and a spreadsheet.
                </p>
              </div>
              <div className="rounded-[20px] border border-line bg-white p-[26px]">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-line-strong bg-white text-brand">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <h3 className="mt-[20px] text-[17px] font-[650] tracking-[-0.01em]">Missed follow-ups</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  Enquiries wait in an inbox until someone remembers them.
                </p>
              </div>
              <div className="rounded-[20px] border border-line bg-white p-[26px]">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-line-strong bg-white text-brand">
                  <svg
                    width="19"
                    height="19"
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
                <h3 className="mt-[20px] text-[17px] font-[650] tracking-[-0.01em]">Manual reports</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  Someone exports data every week to build the same report.
                </p>
              </div>
              <div className="rounded-[20px] border border-line bg-white p-[26px]">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-line-strong bg-white text-brand">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <h3 className="mt-[20px] text-[17px] font-[650] tracking-[-0.01em]">Slow onboarding</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  New clients wait for accounts, documents and welcome emails.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-b border-t-line-soft border-b-line-soft bg-subtle px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="text-[14px] font-semibold text-brand">What we automate</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em] text-ink">
                Five workflows that take work off your team.
              </h2>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="[grid-row:span_2] flex flex-col rounded-[24px] bg-ink p-[32px] text-white">
                <div className="inline-flex self-start rounded-full bg-[rgba(98,220,203,0.12)] px-[11px] py-[5px] text-[12px] font-semibold text-mint">
                  Common starting point
                </div>
                <h3 className="mt-[20px] text-[26px] leading-[1.15] font-[680] tracking-[-0.016em]">
                  Lead capture &amp; CRM sync
                </h3>
                <p className="mt-[10px] text-[15px] leading-[1.6] text-mist">
                  Form submissions and enquiries land in your CRM with the right fields, owner and status.
                </p>
                <div className="mt-auto flex flex-col gap-[8px] pt-[28px]" aria-hidden="true">
                  <div className="flex justify-between rounded-[10px] border border-edge bg-raised px-[14px] py-[11px] text-[13px]">
                    <span className="text-mist">Source</span>
                    <span className="font-semibold text-white">Website form</span>
                  </div>
                  <div className="flex justify-between rounded-[10px] border border-edge bg-raised px-[14px] py-[11px] text-[13px]">
                    <span className="text-mist">Owner</span>
                    <span className="font-semibold text-white">Assigned automatically</span>
                  </div>
                  <div className="flex justify-between rounded-[10px] border border-edge bg-raised px-[14px] py-[11px] text-[13px]">
                    <span className="text-mist">Status</span>
                    <span className="font-semibold text-mint">New lead</span>
                  </div>
                </div>
              </div>
              <div className="rounded-[24px] border border-line bg-white p-[28px]">
                <span className="text-brand">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[19px] font-[650] tracking-[-0.01em]">
                  Email and follow-up sequences
                </h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  Replies, reminders and nurture emails go out on time, based on what the contact did.
                </p>
              </div>
              <div className="rounded-[24px] border border-line bg-white p-[28px]">
                <span className="text-brand">
                  <svg
                    width="22"
                    height="22"
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
                <h3 className="mt-[18px] text-[19px] font-[650] tracking-[-0.01em]">
                  Reporting &amp; dashboards
                </h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  Data from your tools is gathered into one report or dashboard on a schedule.
                </p>
              </div>
              <div className="rounded-[24px] border border-line bg-white p-[28px]">
                <span className="text-brand">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[19px] font-[650] tracking-[-0.01em]">
                  AI-assisted triage and drafting
                </h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  AI sorts incoming messages and drafts replies. A person reviews anything important.
                </p>
              </div>
              <div className="rounded-[24px] border border-line bg-white p-[28px]">
                <span className="text-brand">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[19px] font-[650] tracking-[-0.01em]">
                  App-to-app integrations
                </h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  Your tools pass data to each other directly, so nobody carries it between them.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] py-[112px]" id="how">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="text-[14px] font-semibold text-brand">How it works</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em] text-ink">
                From first call to a working automation.
              </h2>
              <p className="mt-[16px] text-[17px] leading-[1.6] text-muted">
                Every automation is a trigger, a process and an outcome. We draw yours first, then build it in
                four steps.
              </p>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-0 overflow-hidden rounded-[24px] border border-line max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="border-r border-r-line bg-subtle p-[28px]">
                <div className="text-[12px] font-semibold tracking-[0.06em] text-faint uppercase">
                  Trigger
                </div>
                <div className="mt-[10px] text-[18px] font-[650] tracking-[-0.01em]">A form is submitted</div>
                <p className="mt-[6px] text-[14px] text-muted">Something happens in one of your tools.</p>
              </div>
              <div className="border-r border-r-line bg-brand-50 p-[28px]">
                <div className="text-[12px] font-semibold tracking-[0.06em] text-brand uppercase">
                  Process
                </div>
                <div className="mt-[10px] text-[18px] font-[650] tracking-[-0.01em]">
                  The workflow checks and routes the data
                </div>
                <p className="mt-[6px] text-[14px] text-muted">
                  Validates it, fills gaps and picks the right owner.
                </p>
              </div>
              <div className="bg-teal-50 p-[28px]">
                <div className="text-[12px] font-semibold tracking-[0.06em] text-teal-deep uppercase">
                  Outcome
                </div>
                <div className="mt-[10px] text-[18px] font-[650] tracking-[-0.01em]">
                  The work is done for you
                </div>
                <p className="mt-[6px] text-[14px] text-muted">
                  The CRM is updated and the owner is notified.
                </p>
              </div>
            </div>
            <ol className="mt-[16px] grid list-none grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <li className="rounded-[20px] border border-line p-[26px]">
                <span className="font-mono text-[13px] text-brand">01</span>
                <h3 className="mt-[16px] text-[17px] font-[650] tracking-[-0.01em]">Map the workflow</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  We trace how the work moves today and where the time is lost.
                </p>
              </li>
              <li className="rounded-[20px] border border-line p-[26px]">
                <span className="font-mono text-[13px] text-brand">02</span>
                <h3 className="mt-[16px] text-[17px] font-[650] tracking-[-0.01em]">Design the automation</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  We agree the trigger, the steps and what a person should still check.
                </p>
              </li>
              <li className="rounded-[20px] border border-line p-[26px]">
                <span className="font-mono text-[13px] text-brand">03</span>
                <h3 className="mt-[16px] text-[17px] font-[650] tracking-[-0.01em]">Build and test</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  Built on a proven workflow platform and tested with real examples before it goes live.
                </p>
              </li>
              <li className="rounded-[20px] border border-line p-[26px]">
                <span className="font-mono text-[13px] text-brand">04</span>
                <h3 className="mt-[16px] text-[17px] font-[650] tracking-[-0.01em]">Hand over and support</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  Documentation, plus the option of ongoing upkeep on a retainer.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="px-[24px] pb-[112px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-[28px] rounded-[24px] border border-line bg-subtle p-[40px]">
            <div className="max-w-[380px]">
              <h2 className="text-[26px] font-bold tracking-[-0.016em]">What can we connect?</h2>
              <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                If your software can send or receive data, we can usually connect it to the rest of your
                business.
              </p>
            </div>
            <div className="flex max-w-[640px] flex-wrap gap-[10px]">
              <span className="rounded-[12px] border border-line-strong bg-white px-[16px] py-[10px] text-[14px] font-semibold">
                CRMs
              </span>
              <span className="rounded-[12px] border border-line-strong bg-white px-[16px] py-[10px] text-[14px] font-semibold">
                Sales pipelines
              </span>
              <span className="rounded-[12px] border border-line-strong bg-white px-[16px] py-[10px] text-[14px] font-semibold">
                Email &amp; calendars
              </span>
              <span className="rounded-[12px] border border-line-strong bg-white px-[16px] py-[10px] text-[14px] font-semibold">
                Team chat
              </span>
              <span className="rounded-[12px] border border-line-strong bg-white px-[16px] py-[10px] text-[14px] font-semibold">
                Spreadsheets &amp; databases
              </span>
              <span className="rounded-[12px] border border-line-strong bg-white px-[16px] py-[10px] text-[14px] font-semibold">
                Web forms
              </span>
              <span className="rounded-[12px] border border-line-strong bg-white px-[16px] py-[10px] text-[14px] font-semibold">
                Payments &amp; invoicing
              </span>
              <span className="rounded-[12px] border border-line-strong bg-white px-[16px] py-[10px] text-[14px] font-semibold">
                AI models
              </span>
            </div>
          </div>
        </section>
        <section className="px-[24px] pb-[112px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <div className="text-[14px] font-semibold text-brand">FAQ</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.06] font-bold tracking-[-0.026em]">
                Questions founders ask about automation.
              </h2>
              <p className="mt-[16px] text-[16px] leading-[1.6] text-muted">
                Something else?{" "}
                <Link className="font-semibold text-brand underline-offset-4 hover:underline" href="/contact">
                  Ask us directly.
                </Link>
              </p>
            </div>
            <div className="border-t border-t-line">
              <details className="group border-b border-b-line py-[22px]" open>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  What is business process automation?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">
                  Business process automation means letting software handle repetitive, rule-based tasks —
                  such as copying enquiries into a CRM, sending follow-up emails or building weekly reports —
                  so your team spends its time on work that needs a person.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  What is the difference between workflow automation and AI integration?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">
                  Workflow automation moves work between your tools along fixed, rule-based paths. AI
                  integration adds judgement to a step — sorting, drafting or extracting information — either
                  inside a product we build or inside one of those workflows. We use AI where it clearly helps
                  a step, not everywhere, and a person reviews anything important.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  How much does an automation cost?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">
                  Each automation is quoted as a fixed price after the audit, based on how many steps and
                  tools it involves. You see the price before anything is built.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Where do the automations run?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">
                  On a workflow platform hosted in your own cloud account or in a managed account we set up
                  for you. Either way, you own the account, the workflows and the data.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Is my data safe?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">
                  Each workflow only touches the data it needs, connection details are stored encrypted, and
                  sensitive information stays in systems you control. Important AI actions are reviewed by a
                  person before they go out.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Who maintains the automations after launch?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">
                  You receive documentation for every workflow. If you prefer, we keep them running on a
                  monthly retainer and adjust them whenever your tools change.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="px-[24px] pb-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[26px] font-bold tracking-[-0.016em]">Related services</h2>
            <div className="mt-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <Link
                className="flex flex-col gap-[10px] rounded-[20px] border border-line p-[26px] transition-colors duration-150 hover:border-brand-200"
                href="/automation-audit"
              >
                <span className="flex items-center justify-between text-[17px] font-[650] tracking-[-0.01em]">
                  Automation audit
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E4FE3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
                <span className="text-[14px] leading-[1.6] text-muted">
                  A structured review of your tools and workflows, ending in a prioritized shortlist.
                </span>
              </Link>
              <Link
                className="flex flex-col gap-[10px] rounded-[20px] border border-line p-[26px] transition-colors duration-150 hover:border-brand-200"
                href="/services/dashboards-portals"
              >
                <span className="flex items-center justify-between text-[17px] font-[650] tracking-[-0.01em]">
                  Dashboards &amp; portals
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E4FE3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
                <span className="text-[14px] leading-[1.6] text-muted">
                  Give your team one place to see and act on the data your automations collect.
                </span>
              </Link>
              <Link
                className="flex flex-col gap-[10px] rounded-[20px] border border-line p-[26px] transition-colors duration-150 hover:border-brand-200"
                href="/services/maintenance-retainer"
              >
                <span className="flex items-center justify-between text-[17px] font-[650] tracking-[-0.01em]">
                  Maintenance &amp; retainer
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E4FE3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
                <span className="text-[14px] leading-[1.6] text-muted">
                  Keep your automations running as the tools around them change.
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Start with an automation audit."
        text="Tell us how your team works today. We will show you where automation can take work off their plate."
        cta="Get an automation audit"
        ctaHref="/automation-audit"
      />
    </>
  );
}
