import type { Metadata } from "next";
import Link from "next/link";
import { CaseCard } from "@/components/design/CaseCard";
import { SiteFooter } from "@/components/design/SiteFooter";
import { ArrowRight, Check, SERVICE_ICONS } from "@/components/icons";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: { absolute: "Product Engineering, Modernization & Automation | Ansari Product Engineering" },
  description:
    "We build web products, modernize ageing software and connect business tools for growing companies in the US, UK and Europe.",
  alternates: { canonical: "/" },
};

const HERO_POINTS = [
  "Written scope before work starts",
  "Weekly progress you can see",
  "You own everything we build",
];

const PROCESS = [
  { title: "Discovery", text: "A call to understand the problem and what success looks like." },
  {
    title: "Written scope",
    text: "Deliverables, milestones and an estimate, agreed before anything is built.",
  },
  { title: "Build", text: "Small steps, with a review every week." },
  { title: "Handover", text: "The code, accounts and documentation move to you." },
];

const WHY = [
  {
    title: "Senior engineering",
    text: "Experienced engineers do the work, not juniors learning on your project.",
  },
  {
    title: "Clear communication",
    text: "A reply within one business day, and working hours that overlap the US, UK and Europe.",
  },
  {
    title: "Built to last",
    text: "Documented, readable code that you own, so any good developer can pick it up.",
  },
];

export default function HomePage() {
  return (
    <>
      <main id="main">
        {/* 1. hero */}
        <section className="relative overflow-hidden bg-night pb-[104px] text-white">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_35%,transparent_100%)] bg-size-[56px_56px]"
            aria-hidden="true"
          />
          <div
            className="absolute top-[-320px] left-[50%] h-[700px] w-[1200px] [transform:translateX(-50%)] bg-[radial-gradient(closest-side,rgba(46,79,227,0.42),rgba(46,79,227,0))]"
            aria-hidden="true"
          />
          <div aria-hidden="true" className="h-[84px]" />
          <div className="relative z-[2] mx-auto max-w-[1200px] px-[24px] pt-[88px] text-center">
            <div className="inline-flex items-center gap-[8px] rounded-full border border-[rgba(143,163,255,0.25)] bg-[rgba(143,163,255,0.1)] px-[12px] py-[5px] text-[13px] font-semibold text-brand-200">
              <span className="h-[6px] w-[6px] rounded-full bg-brand-300" />
              Product engineering for growing businesses
            </div>
            <h1 className="mx-auto mt-[28px] max-w-[1000px] text-[length:clamp(46px,6.6vw,88px)] leading-[0.98] font-bold tracking-[-0.03em] text-white">
              Build better products.
              <br />
              <span className="text-brand-300">Run smarter businesses.</span>
            </h1>
            <p className="mx-auto mt-[28px] max-w-[640px] text-[19px] leading-[1.6] tracking-normal text-mist">
              Ansari Product Engineering builds web products, modernizes ageing software and connects the
              tools your business runs on — for startups and growing companies worldwide, mainly in the US, UK
              and Europe.
            </p>
            <div className="mt-[36px] flex flex-wrap justify-center gap-[12px]">
              <Link
                className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] bg-brand px-[24px] text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(46,79,227,0.8)] transition-colors duration-150 hover:bg-[#2643c9]"
                href="/contact"
              >
                Discuss your project <ArrowRight />
              </Link>
              <Link
                className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-[24px] text-[15px] font-semibold text-white transition-colors duration-150 hover:border-[rgba(255,255,255,0.28)] hover:bg-[rgba(255,255,255,0.09)]"
                href="/work"
              >
                See our work
              </Link>
            </div>
            <div className="mt-[28px] flex flex-wrap justify-center gap-[24px] text-[14px] text-mist">
              {HERO_POINTS.map((point) => (
                <span key={point} className="inline-flex items-center gap-[8px]">
                  <Check className="text-mint" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 2. what we do */}
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="text-[14px] font-semibold text-brand">Services</div>
              <h2 className="mt-[14px] text-[length:clamp(34px,4.2vw,54px)] leading-[1.04] font-bold tracking-[-0.026em] text-ink">
                What we do
              </h2>
            </div>
            <div className="mt-[56px] grid grid-cols-[repeat(6,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              {SERVICES.map((service, index) => {
                const Icon = SERVICE_ICONS[service.icon];
                const automation = service.slug === "automation-ai";
                return (
                  <Link
                    key={service.slug}
                    className={`flex flex-col gap-[18px] rounded-[24px] border border-line bg-white p-[32px] [transition:transform_.2s_ease,box-shadow_.2s_ease] hover:[transform:translateY(-3px)] hover:shadow-[0_18px_40px_-20px_rgba(10,16,34,0.25)] motion-reduce:[transition:none] motion-reduce:hover:[transform:none] max-[900px]:col-auto ${index < 3 ? "col-span-2" : "col-span-3"}`}
                    href={service.href}
                  >
                    <span
                      className={`flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-line-strong bg-white ${automation ? "text-teal" : "text-brand"}`}
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </span>
                    <h3 className="text-[24px] leading-[1.2] font-[680] tracking-[-0.016em]">
                      {service.name}
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-muted">{service.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-[8px] text-[15px] font-semibold text-brand">
                      Learn more <ArrowRight />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. work */}
        <section className="px-[24px] pb-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-[24px]">
              <div className="max-w-[640px]">
                <div className="text-[14px] font-semibold text-brand">Recent work</div>
                <h2 className="mt-[14px] text-[length:clamp(34px,4.2vw,54px)] leading-[1.06] font-bold tracking-[-0.026em] text-ink">
                  Work we have delivered
                </h2>
              </div>
              <Link
                className="inline-flex h-[44px] items-center gap-[8px] rounded-[12px] border border-line-strong px-[18px] text-[14px] font-semibold text-ink transition-colors duration-150 hover:border-brand hover:text-brand"
                href="/work"
              >
                See all work <ArrowRight size={15} />
              </Link>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[24px]">
              <CaseCard slug="sunhub" />
              <CaseCard slug="verdira" />
              <CaseCard slug="aussiemotor" />
            </div>
          </div>
        </section>

        {/* 4. process */}
        <section className="border-t border-b border-t-line-soft border-b-line-soft bg-subtle px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-[24px]">
              <div className="max-w-[620px]">
                <div className="text-[14px] font-semibold text-brand">Process</div>
                <h2 className="mt-[14px] text-[length:clamp(34px,4.2vw,54px)] leading-[1.04] font-bold tracking-[-0.026em] text-ink">
                  A clear process, from first call to handover.
                </h2>
              </div>
              <Link
                className="inline-flex items-center gap-[8px] text-[15px] font-semibold text-brand underline-offset-4 hover:underline"
                href="/process"
              >
                See how we work <ArrowRight size={15} />
              </Link>
            </div>
            <ol className="mt-[56px] grid list-none grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              {PROCESS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex flex-col rounded-[24px] border border-line bg-white p-[28px]"
                >
                  <span className="font-mono text-[13px] font-medium text-brand">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-[16px] text-[22px] leading-[1.25] font-[680] tracking-[-0.016em]">
                    {step.title}
                  </h3>
                  <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. why us */}
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] items-start gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <div className="text-[14px] font-semibold text-brand">Why Ansari Product Engineering</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,3.8vw,48px)] leading-[1.06] font-bold tracking-[-0.026em] text-ink">
                Software that makes your business more capable, not more complicated.
              </h2>
            </div>
            <ul className="flex list-none flex-col gap-[20px]">
              {WHY.map((item) => (
                <li key={item.title} className="flex items-start gap-[14px]">
                  <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                    <Check size={15} />
                  </span>
                  <span>
                    <span className="block text-[18px] font-[650] tracking-normal text-ink">
                      {item.title}
                    </span>
                    <span className="mt-[4px] block text-[15px] leading-[1.6] text-muted">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* 6. closing call to action */}
      <SiteFooter
        title="Have a product to build or improve?"
        text="Tell us what you need. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
