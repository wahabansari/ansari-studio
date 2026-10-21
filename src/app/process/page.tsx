import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";

export const metadata: Metadata = {
  title: { absolute: "How We Work: Scope, Build, Hand Over | Ansari Studio" },
  description:
    "Discovery, a written scope, weekly demos and a documented handover. See our process and engagement models before you book a discovery call.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="process"
          parent=""
          crumb="Process"
          eyebrow="How we work"
          title="How a project runs, from first call"
          titleAccent="to handover."
          lead="Four steps, each ending with something you can see, check and keep. No surprises in the scope, the bill or the code."
          primary="Discuss your project"
          primaryHref="/contact"
          secondary="Get a free automation audit"
          secondaryHref="/automation-audit"
          points="Written scope|Weekly demos|Documented handover"
        />
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-[16px]">
            <div className="grid grid-cols-[120px_minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-[40px] rounded-[28px] border border-line bg-subtle p-[36px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="text-[72px] leading-[1] font-bold tracking-[-0.04em] text-brand">01</div>
              <div>
                <h2 className="text-[30px] font-bold tracking-[-0.02em]">Discovery</h2>
                <p className="mt-[10px] text-[16px] leading-[1.6] text-muted">
                  A call to understand the problem, the people involved and what success looks like. We ask
                  about your tools, your customers and your deadlines.
                </p>
              </div>
              <div className="rounded-[18px] border border-teal-100 bg-teal-50 p-[20px]">
                <div className="text-[12px] font-semibold tracking-[0.06em] text-teal-deep uppercase">
                  You get
                </div>
                <div className="mt-[6px] text-[17px] leading-[1.4] font-[650]">
                  A clear problem statement and success measures
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[120px_minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-[40px] rounded-[28px] border border-line bg-subtle p-[36px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="text-[72px] leading-[1] font-bold tracking-[-0.04em] text-brand">02</div>
              <div>
                <h2 className="text-[30px] font-bold tracking-[-0.02em]">Written scope</h2>
                <p className="mt-[10px] text-[16px] leading-[1.6] text-muted">
                  Deliverables, assumptions, exclusions, milestones and an estimate. Nothing is built until
                  you have read and agreed it.
                </p>
              </div>
              <div className="rounded-[18px] border border-teal-100 bg-teal-50 p-[20px]">
                <div className="text-[12px] font-semibold tracking-[0.06em] text-teal-deep uppercase">
                  You get
                </div>
                <div className="mt-[6px] text-[17px] leading-[1.4] font-[650]">
                  A fixed scope and estimate you can plan around
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[120px_minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-[40px] rounded-[28px] border border-line bg-subtle p-[36px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="text-[72px] leading-[1] font-bold tracking-[-0.04em] text-brand">03</div>
              <div>
                <h2 className="text-[30px] font-bold tracking-[-0.02em]">Build with weekly demos</h2>
                <p className="mt-[10px] text-[16px] leading-[1.6] text-muted">
                  Work happens in small steps. Every week you see working software and can change direction
                  early, when it is still cheap.
                </p>
              </div>
              <div className="rounded-[18px] border border-teal-100 bg-teal-50 p-[20px]">
                <div className="text-[12px] font-semibold tracking-[0.06em] text-teal-deep uppercase">
                  You get
                </div>
                <div className="mt-[6px] text-[17px] leading-[1.4] font-[650]">
                  Working software to try every week
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[120px_minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-[40px] rounded-[28px] bg-ink p-[36px] text-white max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="text-[72px] leading-[1] font-bold tracking-[-0.04em] text-mint">04</div>
              <div>
                <h2 className="text-[30px] font-bold tracking-[-0.02em]">Handover</h2>
                <p className="mt-[10px] text-[16px] leading-[1.6] text-mist">
                  The code, accounts and documentation move to you, with a recorded walkthrough so your team
                  can run it.
                </p>
              </div>
              <div className="rounded-[18px] border border-[rgba(98,220,203,0.25)] bg-[rgba(98,220,203,0.1)] p-[20px]">
                <div className="text-[12px] font-semibold tracking-[0.06em] text-mint uppercase">You get</div>
                <div className="mt-[6px] text-[17px] leading-[1.4] font-[650]">
                  A product your team owns and can run
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-b border-t-line-soft border-b-line-soft bg-subtle px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="text-[14px] font-semibold text-brand">Ways to work together</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Pick the model that fits the work.
              </h2>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="flex flex-col rounded-[24px] border border-line bg-white p-[32px]">
                <span className="self-start rounded-full bg-teal-50 px-[11px] py-[5px] text-[12px] font-semibold text-teal-deep">
                  Start here
                </span>
                <h3 className="mt-[18px] text-[24px] font-bold tracking-[-0.016em]">Free audit</h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  A 30-minute review that ends with the three automations worth building first.
                </p>
                <div className="mt-[20px] text-[14px] text-ink">
                  <b className="font-[650]">Best for:</b> knowing where to start
                </div>
                <Link
                  className="mt-auto pt-[24px] text-[15px] font-semibold text-brand"
                  href="/automation-audit"
                >
                  Request an audit →
                </Link>
              </div>
              <div className="flex flex-col rounded-[24px] bg-ink p-[32px] text-white">
                <span className="self-start rounded-full bg-[rgba(143,163,255,0.14)] px-[11px] py-[5px] text-[12px] font-semibold text-brand-200">
                  Most projects
                </span>
                <h3 className="mt-[18px] text-[24px] font-bold tracking-[-0.016em]">Fixed-scope project</h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-mist">
                  A defined outcome, a written scope and an agreed estimate.
                </p>
                <div className="mt-[20px] text-[14px] text-[#E2E8F2]">
                  <b className="font-[650]">Best for:</b> MVPs, migrations, new automations
                </div>
                <Link className="mt-auto pt-[24px] text-[15px] font-semibold text-brand-300" href="/contact">
                  Discuss a project →
                </Link>
              </div>
              <div className="flex flex-col rounded-[24px] border border-line bg-white p-[32px]">
                <span className="self-start rounded-full bg-brand-50 px-[11px] py-[5px] text-[12px] font-semibold text-brand">
                  Ongoing
                </span>
                <h3 className="mt-[18px] text-[24px] font-bold tracking-[-0.016em]">Monthly retainer</h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  Predictable monthly hours for updates, fixes and small features.
                </p>
                <div className="mt-[20px] text-[14px] text-ink">
                  <b className="font-[650]">Best for:</b> live products and automations
                </div>
                <Link
                  className="mt-auto pt-[24px] text-[15px] font-semibold text-brand"
                  href="/services/maintenance-retainer"
                >
                  See the retainer →
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[28px] font-bold tracking-[-0.016em]">How we keep you in the loop</h2>
            <div className="mt-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="rounded-[20px] border border-line p-[26px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E4FE3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
                <h3 className="mt-[16px] text-[17px] font-[650]">Weekly demo call</h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  See progress and decide what comes next.
                </p>
              </div>
              <div className="rounded-[20px] border border-line p-[26px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E4FE3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 7v7" />
                  <path d="M12 7v4" />
                  <path d="M16 7v9" />
                </svg>
                <h3 className="mt-[16px] text-[17px] font-[650]">Shared task board</h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  Every task and its status, visible any time.
                </p>
              </div>
              <div className="rounded-[20px] border border-line p-[26px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E4FE3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <h3 className="mt-[16px] text-[17px] font-[650]">Written updates</h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  Short notes between calls, replies within one business day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Ready for step one?"
        text="Book a discovery call and leave with a clear view of the problem. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
