import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How We Work: Scope, Build and Handover",
  description:
    "Discovery, a written scope, weekly progress and a documented handover — how a software project runs with Ansari Product Engineering.",
  path: "/process",
});

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    body: "A call to understand the problem, the people involved and what success looks like. We ask about your tools, your customers and your deadlines.",
    outcome: "A clear problem statement and success measures",
  },
  {
    num: "02",
    title: "Written scope",
    body: "Deliverables, assumptions, exclusions, milestones and an estimate. Nothing is built until you have read and agreed it.",
    outcome: "A fixed scope and estimate you can plan around",
  },
  {
    num: "03",
    title: "Build",
    body: "Work happens in small steps. You get a review every week and a reply within one business day, so you can change direction early, when it is still cheap.",
    outcome: "Working software to review every week",
  },
  {
    num: "04",
    title: "Handover",
    body: "The code, accounts and documentation move to you, with a recorded walkthrough so your team can run it.",
    outcome: "A product your team owns and can run",
    dark: true,
  },
];

const WAYS = [
  {
    badge: "Start here",
    badgeColor: "bg-teal-50 text-teal-deep",
    title: "Automation audit",
    body: "A structured review of your tools and workflows, ending in a prioritized shortlist.",
    best: "Knowing where to start",
    href: "/automation-audit",
    cta: "Request an audit →",
    ctaColor: "text-brand",
  },
  {
    badge: "Most projects",
    badgeColor: "bg-brand-50 text-brand",
    title: "Fixed-scope project",
    body: "A defined outcome, a written scope and an agreed estimate.",
    best: "MVPs, migrations, new workflows",
    href: "/contact",
    cta: "Discuss a project →",
    ctaColor: "text-brand-300",
    dark: true,
  },
  {
    badge: "Ongoing",
    badgeColor: "bg-brand-50 text-brand",
    title: "Monthly development",
    body: "Regular monthly work on updates, fixes and new features, with priorities you set.",
    best: "Live products and workflows",
    href: "/services/maintenance-retainer",
    cta: "See ongoing development →",
    ctaColor: "text-brand",
  },
];

export default function ProcessPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="process"
          parent=""
          crumb="Process"
          eyebrow="How we work"
          title="From first call"
          titleAccent="to handover."
          lead="Four steps, each ending with something you can see, check and keep. No surprises in the scope, the bill or the code."
          primary="Book a discovery call"
          primaryHref="/contact#book"
          secondary="Discuss your project"
          secondaryHref="/contact"
          points="Written scope|Weekly progress|Documented handover"
        />

        {/* ── Steps ───────────────────────────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className={`grid grid-cols-[100px_1fr_0.9fr] items-center gap-10 rounded-[24px] p-10 max-[900px]:grid-cols-1 max-[480px]:p-7 ${
                  step.dark ? "bg-ink text-white" : "border border-line bg-white"
                }`}
              >
                {/* Step number */}
                <div
                  className={`font-mono text-[64px] font-bold leading-none tracking-[-0.04em] ${
                    step.dark ? "text-mint" : "text-brand-100"
                  }`}
                  aria-hidden="true"
                >
                  {step.num}
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-[26px] font-bold tracking-[-0.02em]">{step.title}</h2>
                  <p className={`mt-3 text-[15px] leading-[1.7] ${step.dark ? "text-mist" : "text-muted"}`}>
                    {step.body}
                  </p>
                </div>

                {/* You get */}
                <div
                  className={`rounded-[18px] p-5 ${
                    step.dark
                      ? "border border-mint/20 bg-mint/[0.08]"
                      : "border border-teal-100 bg-teal-50"
                  }`}
                >
                  <div
                    className={`font-mono text-[11px] font-semibold tracking-widest uppercase ${
                      step.dark ? "text-mint" : "text-teal-deep"
                    }`}
                  >
                    You get
                  </div>
                  <div
                    className={`mt-2 text-[16px] font-bold leading-[1.35] ${
                      step.dark ? "text-white" : "text-ink"
                    }`}
                  >
                    {step.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Ways to work together ───────────────────────────────────── */}
        <section className="border-y border-line-soft bg-subtle px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[580px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                Ways to work together
              </div>
              <h2 className="mt-4 text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.1] tracking-[-0.026em]">
                Pick the way that fits the work.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              {WAYS.map((way) => (
                <div
                  key={way.title}
                  className={`flex flex-col rounded-[20px] p-8 ${
                    way.dark ? "bg-ink text-white" : "border border-line bg-white"
                  }`}
                >
                  <span
                    className={`self-start rounded-full px-3 py-1 text-[11px] font-semibold ${
                      way.dark
                        ? "bg-white/10 text-brand-200"
                        : way.badgeColor
                    }`}
                  >
                    {way.badge}
                  </span>
                  <h3 className="mt-5 text-[22px] font-bold tracking-[-0.016em]">{way.title}</h3>
                  <p className={`mt-2.5 text-[14px] leading-[1.65] ${way.dark ? "text-mist" : "text-muted"}`}>
                    {way.body}
                  </p>
                  <div className={`mt-5 text-[13px] ${way.dark ? "text-haze" : "text-ink"}`}>
                    <span className="font-semibold">Best for:</span> {way.best}
                  </div>
                  <Link
                    href={way.href}
                    className={`mt-auto pt-6 text-[14px] font-semibold underline-offset-4 hover:underline ${
                      way.dark ? "text-brand-300" : "text-brand"
                    }`}
                  >
                    {way.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Ready for step one?"
        text="Tell us about your project. You get a reply within one business day."
      />
    </>
  );
}
