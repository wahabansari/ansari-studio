import type { Metadata } from "next";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";

export const metadata: Metadata = {
  title: { absolute: "White-Label Development Partner for Agencies | Ansari Product Engineering" },
  description:
    "Overflow Next.js development and automation delivery for agencies. Senior engineering under your brand, clear communication, clean handover.",
  alternates: { canonical: "/partners" },
};

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
          lead="Overflow web application development and automation delivery under your brand. Senior engineering, clear communication and a clean handover."
          primary="Talk about a partnership"
          primaryHref="/contact"
          secondary=""
          points="White-label by default|NDA ready|Your process, your tools"
        />
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="text-[14px] font-semibold text-brand">When agencies bring us in</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Say yes to more work without hiring.
              </h2>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="rounded-[24px] border border-line bg-white p-[30px]">
                <h3 className="text-[21px] font-[680] tracking-[-0.012em]">Overflow development</h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  Your team is full and a client project cannot wait.
                </p>
                <div className="mt-[18px] text-[14px] font-semibold text-teal-deep">
                  You get: delivery capacity on demand
                </div>
              </div>
              <div className="rounded-[24px] border border-line bg-white p-[30px]">
                <h3 className="text-[21px] font-[680] tracking-[-0.012em]">Specialist builds</h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  A web application, a migration or an automation outside your core skills.
                </p>
                <div className="mt-[18px] text-[14px] font-semibold text-teal-deep">
                  You get: a new service line, no new hire
                </div>
              </div>
              <div className="rounded-[24px] border border-line bg-white p-[30px]">
                <h3 className="text-[21px] font-[680] tracking-[-0.012em]">Rescue and refactor</h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  A project that slipped and needs a steady senior hand.
                </p>
                <div className="mt-[18px] text-[14px] font-semibold text-teal-deep">
                  You get: a project back on track
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-ink px-[24px] py-[112px] text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] items-center gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <div className="text-[14px] font-semibold text-mint">How white-label works</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Your brand in front. Senior engineering behind it.
              </h2>
              <p className="mt-[18px] max-w-[460px] text-[17px] leading-[1.6] text-mist">
                We work inside your process and your tools. Your client sees your agency; you see every
                commit.
              </p>
            </div>
            <ol className="flex list-none flex-col gap-[12px]">
              <li className="flex gap-[16px] rounded-[16px] border border-edge bg-raised p-[20px]">
                <span className="font-mono text-[13px] text-mint">01</span>
                <span>
                  <span className="block text-[16px] font-[650]">Brief and NDA</span>
                  <span className="mt-[4px] block text-[14px] text-mist">
                    You share the project; we sign before seeing details.
                  </span>
                </span>
              </li>
              <li className="flex gap-[16px] rounded-[16px] border border-edge bg-raised p-[20px]">
                <span className="font-mono text-[13px] text-mint">02</span>
                <span>
                  <span className="block text-[16px] font-[650]">Scope and estimate</span>
                  <span className="mt-[4px] block text-[14px] text-mist">
                    Written, so you can price it to your client.
                  </span>
                </span>
              </li>
              <li className="flex gap-[16px] rounded-[16px] border border-edge bg-raised p-[20px]">
                <span className="font-mono text-[13px] text-mint">03</span>
                <span>
                  <span className="block text-[16px] font-[650]">Build in your repo and tools</span>
                  <span className="mt-[4px] block text-[14px] text-mist">
                    Weekly updates to you, never directly to your client unless you ask.
                  </span>
                </span>
              </li>
              <li className="flex gap-[16px] rounded-[16px] border border-edge bg-raised p-[20px]">
                <span className="font-mono text-[13px] text-mint">04</span>
                <span>
                  <span className="block text-[16px] font-[650]">Handover to your team</span>
                  <span className="mt-[4px] block text-[14px] text-mist">
                    Documentation written for whoever supports it next.
                  </span>
                </span>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Need a partner you can rely on?"
        text="Tell us about your agency and the kind of work you are turning away. You get a reply within one business day."
        cta="Talk about a partnership"
        ctaHref="/contact"
      />
    </>
  );
}
