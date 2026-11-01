import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { ArrowUpRight, Check } from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, personJsonLd } from "@/lib/seo";
import { FOUNDER, SITE_NAME } from "@/lib/site";

export const metadata = pageMetadata({
  title: { absolute: "About Ansari Product Engineering" },
  description:
    "A product engineering company helping growing businesses build, modernize and integrate the software they run on. Meet the founder and how we work.",
  path: "/about",
});

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
    text: "Working times overlap US, UK, European and Middle Eastern business hours.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <main id="main">
        <PageHero
          active="about"
          parent=""
          crumb="About"
          eyebrow="About us"
          title="We build software that makes businesses"
          titleAccent="more capable, not more complicated."
          lead="Ansari Product Engineering helps startups and growing businesses build new products, modernize existing software and connect the tools they run on."
          primary="Book a discovery call"
          primaryHref="/contact#book"
          secondary="Discuss your project"
          secondaryHref="/contact"
          points=""
        />

        {/* ── Founder card ────────────────────────────────────────────── */}
        <section className="px-6 pt-20 pb-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-[auto_1fr] items-start gap-8 rounded-[24px] border border-line bg-subtle p-8 max-[640px]:grid-cols-1 max-[480px]:p-6">
              {/* Avatar */}
              <div
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-ink text-[28px] font-bold tracking-[-0.02em] text-mint"
                aria-hidden="true"
              >
                WA
              </div>
              <div>
                <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                  Who you work with
                </div>
                <h2 className="mt-2.5 text-[24px] font-bold tracking-[-0.018em]">
                  {FOUNDER.name}
                </h2>
                <p className="mt-1 text-[14px] font-medium text-faint">
                  {FOUNDER.role}, {SITE_NAME}
                </p>
                <p className="mt-4 max-w-[660px] text-[15px] leading-[1.75] text-prose">
                  Muhammad works directly with clients on scoping, engineering and handover. The aim is
                  simple: a clear written scope, visible weekly progress and a codebase you can hand to
                  any good developer.
                </p>
                <Link
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand underline-offset-4 hover:underline"
                  href={FOUNDER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                  <ArrowUpRight size={14} />
                  <span className="sr-only">(opens in a new tab)</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Beliefs ─────────────────────────────────────────────────── */}
        <section className="bg-ink px-6 py-24 text-white">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[580px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-mint uppercase">
                What we believe
              </div>
              <h2 className="mt-4 text-[clamp(25px,3.4vw,42px)] font-semibold leading-[1.1] tracking-[-0.026em]">
                Four principles behind every project.
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1">
              {BELIEFS.map((belief, i) => (
                <div key={belief.title} className="rounded-[20px] border border-edge bg-raised p-7">
                  <span className="font-mono text-[12px] font-medium text-mint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold tracking-[-0.01em]">{belief.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-mist">{belief.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ways of working ─────────────────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[580px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                How we work with you
              </div>
              <h2 className="mt-4 text-[clamp(25px,3.4vw,42px)] font-semibold leading-[1.1] tracking-[-0.026em]">
                Simple to work with, easy to hand over.
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
              {WAYS_OF_WORKING.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-[20px] border border-line bg-subtle p-7"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal">
                    <Check size={14} />
                  </span>
                  <span>
                    <span className="block text-[17px] font-bold tracking-[-0.01em]">{item.title}</span>
                    <span className="mt-1.5 block text-[14px] leading-[1.65] text-muted">{item.text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Where we work ───────────────────────────────────────────── */}
        <section className="border-t border-line-soft bg-subtle px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[680px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                Where we work
              </div>
              <h2 className="mt-4 text-[clamp(25px,3.4vw,42px)] font-semibold leading-[1.1] tracking-[-0.026em]">
                Worldwide, mainly the US, UK, Europe and the Middle East.
              </h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-prose">
                We work with startups and growing businesses wherever they are, with most clients in the
                US, the UK, Europe and the Middle East. Everything runs remotely, with working hours that overlap yours.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Have a project in mind?"
        text="Tell us what you need. You get a reply within one business day."
      />
    </>
  );
}
