import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "White-Label Development Partner for Agencies",
  description:
    "Overflow web development and workflow automation for agencies. Senior engineering under your brand, clear communication, clean handover.",
  path: "/partners",
});

const WHEN = [
  {
    title: "Overflow development",
    text: "Your team is full and a client project cannot wait.",
    outcome: "Delivery capacity on demand",
  },
  {
    title: "Specialist builds",
    text: "A web application, migration or workflow automation outside your core skills.",
    outcome: "A new service line, no new hire",
  },
  {
    title: "Rescue and refactor",
    text: "A project that slipped and needs a steady senior team.",
    outcome: "A project back on track",
  },
];

const HOW = [
  {
    title: "Brief and NDA",
    text: "You share the project; we sign before seeing details.",
  },
  {
    title: "Scope and estimate",
    text: "Written, so you can price it to your client.",
  },
  {
    title: "Build in your repo and tools",
    text: "Weekly updates to you, never directly to your client unless you ask.",
  },
  {
    title: "Handover to your team",
    text: "Documentation written for whoever supports it next.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="none"
          parent=""
          crumb="Partners"
          eyebrow="For agencies"
          title="A reliable engineering partner"
          titleAccent="for agencies."
          lead="We deliver overflow web development and workflow automation under your brand — senior engineering, clear communication and a clean handover."
          primary="Book a discovery call"
          primaryHref="/contact#book"
          secondary="Discuss your project"
          secondaryHref="/contact"
          points="White-label by default|NDA ready|Your process, your tools"
        />

        {/* ── When agencies bring us in ────────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[580px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                When agencies bring us in
              </div>
              <h2 className="mt-4 text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.1] tracking-[-0.026em]">
                Say yes to more work without hiring.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              {WHEN.map((item) => (
                <div key={item.title} className="rounded-[20px] border border-line bg-white p-7">
                  <h3 className="text-[19px] font-bold tracking-[-0.014em]">{item.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-muted">{item.text}</p>
                  <div className="mt-5 text-[13px] font-semibold text-teal-deep">
                    You get: {item.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How white-label works ────────────────────────────────────── */}
        <section className="bg-ink px-6 py-24 text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-start gap-14 max-[900px]:grid-cols-1">
            <div>
              <div className="font-mono text-[12px] font-semibold tracking-widest text-mint uppercase">
                How white-label works
              </div>
              <h2 className="mt-4 text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.1] tracking-[-0.026em]">
                Your brand in front. Senior engineering behind it.
              </h2>
              <p className="mt-5 max-w-[440px] text-[16px] leading-[1.7] text-mist">
                We work inside your process and your tools. Your client sees your agency; you see every
                commit.
              </p>
            </div>

            <ol className="flex flex-col gap-3">
              {HOW.map((step, i) => (
                <li key={step.title} className="flex gap-4 rounded-[18px] border border-edge bg-raised p-5">
                  <span className="font-mono text-[12px] font-medium text-mint shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-[15px] font-bold">{step.title}</span>
                    <span className="mt-1 block text-[13px] leading-[1.65] text-mist">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Need a partner you can rely on?"
        text="Tell us about your agency and the work you are turning away. You get a reply within one business day."
      />
    </>
  );
}
