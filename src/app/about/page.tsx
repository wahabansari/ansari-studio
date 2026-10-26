import type { Metadata } from "next";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A product engineering company helping growing businesses build, modernize and integrate software.",
  alternates: { canonical: "/about" },
};

const BELIEFS = [
  { title: "Practical over flashy", text: "A real business outcome before any buzzword." },
  { title: "Clear over clever", text: "Services, scope and next steps that are easy to understand." },
  { title: "Evidence over claims", text: "We show the work, the method and measured results." },
  { title: "Built for the long term", text: "Software made to be maintained, handed over and extended." },
];

const WAYS_OF_WORKING = [
  {
    title: "Senior engineers and trusted specialists",
    text: "Experienced engineers do the work, with specialists brought in when a project needs deeper expertise.",
  },
  {
    title: "One point of contact",
    text: "You always know who to talk to, however many people are involved behind the scenes.",
  },
  {
    title: "You own everything",
    text: "The code, documentation and accounts are yours after every handover.",
  },
  {
    title: "Remote-first, overlapping your hours",
    text: "Working times overlap US, UK and European business hours.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="about"
          parent=""
          crumb="About"
          eyebrow="About us"
          title="We build software that makes businesses"
          titleAccent="more capable, not more complicated."
          lead="Ansari Product Engineering is a product engineering company. We help startups and growing businesses build new products, modernize existing software and connect the tools they run on."
          primary="Discuss your project"
          primaryHref="/contact"
          secondary=""
          points=""
        />

        <section className="bg-ink px-[24px] py-[112px] text-white">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="text-[14px] font-semibold text-mint">What we believe</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Four principles behind every project.
              </h2>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              {BELIEFS.map((belief, i) => (
                <div key={belief.title} className="rounded-[22px] border border-edge bg-raised p-[28px]">
                  <span className="font-mono text-[13px] text-mint">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-[18px] text-[19px] font-[680] tracking-[-0.01em]">{belief.title}</h3>
                  <p className="mt-[8px] text-[14px] leading-[1.6] text-mist">{belief.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="text-[14px] font-semibold text-brand">How we work with you</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Simple to work with, easy to hand over.
              </h2>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              {WAYS_OF_WORKING.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-[16px] rounded-[24px] border border-line bg-subtle p-[28px]"
                >
                  <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                    <Check size={15} />
                  </span>
                  <span>
                    <span className="block text-[19px] font-[680] tracking-[-0.01em]">{item.title}</span>
                    <span className="mt-[6px] block text-[15px] leading-[1.6] text-muted">{item.text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-t-line-soft bg-subtle px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[720px]">
              <div className="text-[14px] font-semibold text-brand">Where we work</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Worldwide, mainly the US, UK and Europe.
              </h2>
              <p className="mt-[18px] text-[18px] leading-[1.7] text-prose">
                We work with startups and growing businesses wherever they are, with most clients in the US,
                the UK and Europe. Everything runs remotely, with working hours that overlap yours.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Have a project in mind?"
        text="Tell us what you need. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
