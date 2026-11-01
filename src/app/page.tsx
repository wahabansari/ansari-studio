import Link from "next/link";
import { CaseCard } from "@/components/design/CaseCard";
import { FaqList } from "@/components/design/FaqList";
import { SiteFooter } from "@/components/design/SiteFooter";
import { ArrowRight, Check, SERVICE_ICONS } from "@/components/icons";
import { SERVICES } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, faqJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: {
    absolute: "Software Modernization & Automation | Ansari Product Engineering",
  },
  description:
    "We modernize ageing software, automate manual operations and build custom web products for growing businesses in the US, UK, Europe and the Middle East.",
  path: "/",
});

const HERO_POINTS = [
  "Written scope before work starts",
  "Weekly progress you can see",
  "You own everything we build",
];

const PROBLEMS = [
  {
    title: "Your software is slowing the business down",
    text: "Pages are slow, small changes take weeks, and the roadmap keeps waiting for the platform.",
    href: "/services/modernization",
    link: "Modernize what you have",
  },
  {
    title: "Your team is buried in manual work",
    text: "Enquiries are copied between tools, reports are rebuilt by hand, and follow-up depends on memory.",
    href: "/services/automation-ai",
    link: "Automate the repeatable work",
  },
  {
    title: "Your systems do not talk to each other",
    text: "The same customer data lives in three places, and a failed sync is discovered days later.",
    href: "/services/api-integrations",
    link: "Connect your systems",
  },
];

const WHY = [
  {
    title: "Senior engineering",
    text: "Experienced engineers do the work, not juniors learning on your project.",
  },
  {
    title: "Clear communication",
    text: "A reply within one business day, with working hours that overlap the US, UK, Europe and the Middle East.",
  },
  {
    title: "Built to last",
    text: "Documented, readable code that you own, so any good developer can pick it up.",
  },
  {
    title: "Measured, not promised",
    text: "We record the problem before we start and report what changed afterwards.",
  },
];

const INDUSTRIES = [
  {
    title: "SaaS and software products",
    text: "Live products that need modernizing, extending or a steadier engineering team.",
  },
  {
    title: "Professional services",
    text: "Firms whose client work runs on spreadsheets, email and disconnected tools.",
  },
  {
    title: "Healthcare practices",
    text: "Patient-facing websites and secure portals that make booking and access simple.",
  },
  {
    title: "E-commerce and retail",
    text: "Storefronts that need fast browsing, reliable checkout and clean system integrations.",
  },
  {
    title: "Real estate",
    text: "Listings and internal tools that staff can update without calling a developer.",
  },
  {
    title: "Agencies and studios",
    text: "White-label delivery capacity for work you would otherwise turn away.",
  },
];

const PROCESS = [
  {
    title: "Discovery",
    text: "A call to understand the problem, the constraints and what success looks like.",
  },
  {
    title: "Written scope",
    text: "Deliverables, milestones and an estimate, agreed before anything is built.",
  },
  { title: "Build", text: "Small steps, with something you can review every week." },
  { title: "Handover", text: "The code, accounts and documentation move to you." },
];

const CAPABILITIES = [
  {
    title: "Frontend and product",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Core Web Vitals"],
  },
  {
    title: "Backend and data",
    items: ["Node.js", "REST APIs", "Role-based access", "Reporting dashboards", "WordPress"],
  },
  {
    title: "Automation and integration",
    items: ["n8n", "Make", "Zapier", "Webhooks", "OAuth", "AI model APIs"],
  },
];

const FAQ = [
  {
    q: "What kind of companies do you work with?",
    a: "Startups and growing businesses, mainly in the US, UK, Europe and the Middle East. Some need a product built; others need existing software modernized, manual work automated or their systems connected. The common thread is a real business problem and a decision-maker who wants it fixed properly.",
  },
  {
    q: "Can you work on an existing codebase?",
    a: "Yes. Most of our work starts with software that is already live. We review the code, dependencies and release process first, then agree the smallest safe steps. If a rewrite is genuinely the better option, we say so and explain why.",
  },
  {
    q: "How do you price projects?",
    a: "Per project, in writing, after we understand the scope. Fixed-scope work is priced as a project; ongoing work is agreed monthly. We do not publish a price list because the right scope depends on your systems, and we would rather quote accurately than advertise a number we cannot keep.",
  },
  {
    q: "Who owns the code and accounts?",
    a: "You do. The code, documentation, repositories and service accounts are yours, and we hand them over at the end of the engagement. There is no lock-in and no proprietary platform you have to keep paying for.",
  },
  {
    q: "How quickly will I hear back?",
    a: "Within one business day. If you book a discovery call, you will speak to the person who would do the work — not a sales team.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ)} />
      <main id="main">

        {/* ── 1. Hero ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-night pb-24 text-white">
          {/* Grid texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_30%,transparent_100%)]"
          />
          {/* Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-80 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(46,79,227,0.38),transparent)]"
          />

          <div aria-hidden="true" className="h-[84px]" />

          <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-20 text-center sm:pt-24">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-300/20 bg-brand-300/10 px-3 py-1.5 text-[12px] font-semibold tracking-wide text-brand-200 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
              Product engineering for growing businesses
            </div>

            {/* Headline */}
            <h1 className="mx-auto mt-6 max-w-[960px] text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.0] tracking-[-0.028em] text-white">
              Upgrade your software.
              <br />
              <span className="text-brand-300">Automate your operations.</span>
              <br />
              Grow faster.
            </h1>

            {/* Sub */}
            <p className="mx-auto mt-6 max-w-[620px] text-[17px] leading-[1.7] text-mist sm:text-[18px]">
              Ansari Product Engineering modernizes ageing software, automates manual operations and
              builds custom web products — for startups and growing companies in the US, UK, Europe and the Middle East.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact#book"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-6 text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_28px_-8px_rgba(46,79,227,0.75)] transition-colors duration-150 hover:bg-[#2440c4]"
              >
                Book a discovery call <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/[0.14] bg-white/[0.05] px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:border-white/25 hover:bg-white/[0.09]"
              >
                Discuss your project
              </Link>
            </div>

            {/* Trust points */}
            <ul className="mt-6 flex flex-wrap justify-center gap-5 text-[13px] text-mist sm:text-[14px]">
              {HERO_POINTS.map((point) => (
                <li key={point} className="inline-flex items-center gap-2">
                  <Check size={13} className="shrink-0 text-mint" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 2. Problems ─────────────────────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[680px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                The problems we solve
              </div>
              <h2 className="mt-4 text-[clamp(26px,3.6vw,44px)] font-semibold leading-[1.06] tracking-[-0.026em]">
                Most projects start with one of these.
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              {PROBLEMS.map((p, i) => (
                <div
                  key={p.title}
                  className={`flex flex-col rounded-[20px] p-8 ${
                    i === 0 ? "bg-ink text-white" : "border border-line bg-subtle"
                  }`}
                >
                  <span className={`font-mono text-[12px] font-medium ${i === 0 ? "text-mint" : "text-brand"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[20px] font-bold leading-[1.22] tracking-[-0.016em]">
                    {p.title}
                  </h3>
                  <p className={`mt-3 text-[14px] leading-[1.65] ${i === 0 ? "text-mist" : "text-muted"}`}>
                    {p.text}
                  </p>
                  <Link
                    href={p.href}
                    className={`mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold underline-offset-4 hover:underline ${
                      i === 0 ? "text-mint" : "text-brand"
                    }`}
                  >
                    {p.link} <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Services ─────────────────────────────────────────────── */}
        <section className="border-t border-line-soft bg-subtle px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-[600px]">
                <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                  Services
                </div>
                <h2 className="mt-4 text-[clamp(26px,3.6vw,44px)] font-semibold leading-[1.06] tracking-[-0.026em]">
                  Six ways we make your business more capable.
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-line-strong bg-white px-5 text-[14px] font-semibold text-ink transition-colors duration-150 hover:border-brand hover:text-brand"
              >
                Compare all services <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1 max-[1100px]:grid-cols-2">
              {SERVICES.map((service) => {
                const Icon = SERVICE_ICONS[service.icon];
                const isAuto = service.slug === "automation-ai";
                return (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className="flex flex-col gap-4 rounded-[20px] border border-line bg-white p-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(10,16,34,0.18)] motion-reduce:hover:translate-y-0"
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong ${
                        isAuto ? "text-teal" : "text-brand"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </span>
                    <h3 className="text-[19px] font-bold leading-[1.22] tracking-[-0.014em]">
                      {service.name}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-muted">{service.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-1 text-[14px] font-semibold text-brand">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. Work ─────────────────────────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-[600px]">
                <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                  Recent work
                </div>
                <h2 className="mt-4 text-[clamp(26px,3.6vw,44px)] font-semibold leading-[1.06] tracking-[-0.026em]">
                  Work we have delivered.
                </h2>
              </div>
              <Link
                href="/work"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-line-strong px-5 text-[14px] font-semibold text-ink transition-colors duration-150 hover:border-brand hover:text-brand"
              >
                See all work <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
              <CaseCard slug="verdira" />
              <CaseCard slug="aussiemotor" />
              <CaseCard slug="vapestore" />
            </div>
          </div>
        </section>

        {/* ── 5. Why us ───────────────────────────────────────────────── */}
        <section className="border-y border-line-soft bg-subtle px-6 py-24">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-start gap-14 max-[900px]:grid-cols-1">
            <div>
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                Why Ansari Product Engineering
              </div>
              <h2 className="mt-4 text-[clamp(25px,3.3vw,40px)] font-semibold leading-[1.1] tracking-[-0.024em]">
                Software that makes your business more capable, not more complicated.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.75] text-muted">
                We are a small senior team, so you work directly with the people doing the work. The aim
                is always the same: less friction, fewer manual steps and software your team can keep using.
              </p>
            </div>
            <ul className="flex flex-col gap-5">
              {WHY.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal">
                    <Check size={14} />
                  </span>
                  <span>
                    <span className="block text-[17px] font-bold tracking-[-0.01em]">{item.title}</span>
                    <span className="mt-1 block text-[14px] leading-[1.65] text-muted">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 6. Who we work with ─────────────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                Who we work with
              </div>
              <h2 className="mt-4 text-[clamp(25px,3.4vw,42px)] font-semibold leading-[1.08] tracking-[-0.026em]">
                Teams with a real operational problem.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-muted">
                We are not a fit for every project. We do our best work with teams that have a clear problem,
                access to the people who understand it and a decision-maker involved.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1 max-[1100px]:grid-cols-2">
              {INDUSTRIES.map((ind) => (
                <div key={ind.title} className="rounded-[20px] border border-line bg-white p-6">
                  <h3 className="text-[16px] font-bold tracking-[-0.01em]">{ind.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-muted">{ind.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Process ──────────────────────────────────────────────── */}
        <section className="border-y border-line-soft bg-subtle px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-[580px]">
                <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                  Process
                </div>
                <h2 className="mt-4 text-[clamp(26px,3.6vw,44px)] font-semibold leading-[1.06] tracking-[-0.026em]">
                  A clear process, from first call to handover.
                </h2>
              </div>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand underline-offset-4 hover:underline"
              >
                See how we work <ArrowRight size={14} />
              </Link>
            </div>
            <ol className="mt-14 grid grid-cols-4 gap-4 max-[900px]:grid-cols-1 max-[1100px]:grid-cols-2">
              {PROCESS.map((step, i) => (
                <li key={step.title} className="flex flex-col rounded-[20px] border border-line bg-white p-7">
                  <span className="font-mono text-[12px] font-medium text-brand">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[20px] font-bold leading-[1.25] tracking-[-0.014em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 8. Technologies ─────────────────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                Technologies and capabilities
              </div>
              <h2 className="mt-4 text-[clamp(25px,3.4vw,42px)] font-semibold leading-[1.08] tracking-[-0.026em]">
                The right tool for the problem.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-muted">
                We name technologies only where we have used them. When a simpler tool will do, we use the
                simpler tool.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              {CAPABILITIES.map((group) => (
                <div key={group.title} className="rounded-[20px] bg-ink p-7 text-white">
                  <h3 className="text-[16px] font-bold tracking-[-0.01em] text-mint">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-edge bg-raised px-3 py-1 text-[13px] font-medium text-haze"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. Agency partnership ───────────────────────────────────── */}
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_0.8fr] items-center gap-12 overflow-hidden rounded-[28px] bg-brand p-14 text-white max-[900px]:grid-cols-1 max-[480px]:p-8">
            <div>
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand-ice uppercase">
                For agencies and studios
              </div>
              <h2 className="mt-4 text-[clamp(26px,3.2vw,42px)] font-bold leading-[1.08] tracking-[-0.024em]">
                Say yes to more work without hiring.
              </h2>
              <p className="mt-4 max-w-[480px] text-[16px] leading-[1.65] text-brand-ice">
                We deliver overflow development and automation under your brand, inside your process and
                tools. Your client sees your agency; you see every commit.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Link
                href="/partners"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-brand-50"
              >
                Explore the partner model <ArrowRight size={15} />
              </Link>
              <span className="text-[13px] text-brand-ice">White-label by default · NDA ready</span>
              <Link
                href="/contact#book"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 text-[14px] font-semibold text-white transition-colors duration-150 hover:border-white/40 hover:bg-white/10"
              >
                Or book a discovery call <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ ─────────────────────────────────────────────────── */}
        <FaqList title="Questions we are asked before the first call." items={FAQ} />
      </main>

      <SiteFooter
        title="Have a product to build or a problem to fix?"
        text="Tell us what you need. You get a reply within one business day."
      />
    </>
  );
}
