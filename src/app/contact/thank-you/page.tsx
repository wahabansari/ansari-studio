import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";

export const metadata: Metadata = {
  title: { absolute: "Thanks — We'll Reply Within One Business Day | Ansari Studio" },
  description:
    "Your message reached Ansari Studio. Here is what happens next, and a few projects to look at while you wait for our reply.",
  alternates: { canonical: "/contact/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="none"
          parent="Contact"
          parentHref="/contact"
          crumb="Thank you"
          eyebrow="Message sent"
          title="Thanks — we will reply"
          titleAccent="within one business day."
          lead="Your message is with the engineer who will answer it. Check your inbox for a confirmation, and look at our process while you wait."
          primary="See how we work"
          primaryHref="/process"
          secondary="Back to home"
          secondaryHref="/"
          points=""
          glow="mint"
        />
        <section className="px-[24px] pt-[96px] pb-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[28px] font-bold tracking-[-0.016em]">While you wait</h2>
            <div className="mt-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <Link
                className="flex flex-col rounded-[24px] border border-line bg-subtle p-[28px]"
                href="/process"
              >
                <span className="text-[13px] font-semibold text-brand">Process</span>
                <span className="mt-[10px] text-[20px] leading-[1.25] font-[680] tracking-[-0.012em]">
                  What happens on the discovery call
                </span>
                <span className="mt-auto pt-[24px] text-[14px] font-semibold text-brand">Read →</span>
              </Link>
              <Link
                className="flex flex-col rounded-[24px] border border-line bg-subtle p-[28px]"
                href="/work"
              >
                <span className="text-[13px] font-semibold text-brand">Work</span>
                <span className="mt-[10px] text-[20px] leading-[1.25] font-[680] tracking-[-0.012em]">
                  See projects like yours
                </span>
                <span className="mt-auto pt-[24px] text-[14px] font-semibold text-brand">Browse →</span>
              </Link>
              <Link
                className="flex flex-col rounded-[24px] bg-ink p-[28px] text-white"
                href="/insights/automate-lead-follow-up"
              >
                <span className="text-[13px] font-semibold text-mint">Insights</span>
                <span className="mt-[10px] text-[20px] leading-[1.25] font-[680] tracking-[-0.012em]">
                  How to automate lead follow-up between your website, CRM and inbox
                </span>
                <span className="mt-auto pt-[24px] text-[14px] font-semibold text-brand-300">Read →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Know someone who needs this?"
        text="Share Ansari Studio with a founder or ops lead who is losing hours to manual work."
        cta="Back to home"
        ctaHref="/"
      />
    </>
  );
}
