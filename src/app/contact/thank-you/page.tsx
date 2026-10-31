import Link from "next/link";
import { BookingCard } from "@/components/contact/BookingCard";
import { LeadConfirmation } from "@/components/LeadConfirmation";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Thanks — Your Message Was Received",
  description:
    "Your message reached Ansari Product Engineering. Here is what happens next, and a few projects to look at while you wait.",
  path: "/contact/thank-you",
  noindex: true,
});

const LINKS = [
  {
    label: "Process",
    href: "/process",
    title: "What happens on the discovery call",
    cta: "Read →",
    dark: false,
  },
  {
    label: "Work",
    href: "/work",
    title: "Selected project experience",
    cta: "Browse →",
    dark: false,
  },
  {
    label: "Insights",
    href: "/insights/automate-lead-follow-up",
    title: "How to automate lead follow-up between your website, CRM and inbox",
    cta: "Read →",
    dark: true,
  },
];

export default function ThankYouPage() {
  return (
    <>
      <LeadConfirmation />
      <main id="main">
        <PageHero
          active="none"
          parent="Contact"
          parentHref="/contact"
          crumb="Thank you"
          eyebrow="Message received"
          title="Thanks — your message"
          titleAccent="has been received."
          lead="While you wait, here is how we work and what we have built."
          primary="See how we work"
          primaryHref="/process"
          secondary="Back to home"
          secondaryHref="/"
          points=""
          glow="mint"
        />

        {/* ── Next step: book a call ─────────────────────────────────── */}
        <section className="px-6 pt-4 pb-24">
          <div className="mx-auto max-w-[1200px]">
            <BookingCard />
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[26px] font-bold tracking-[-0.018em]">While you wait</h2>
            <div className="mt-6 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              {LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col rounded-[20px] p-7 transition-colors duration-150 ${
                    item.dark
                      ? "bg-ink text-white hover:bg-[#121a33]"
                      : "border border-line bg-subtle hover:border-brand-200"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] font-semibold tracking-widest uppercase ${
                      item.dark ? "text-mint" : "text-brand"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="mt-3 text-[18px] font-bold leading-[1.3] tracking-[-0.012em]">
                    {item.title}
                  </span>
                  <span
                    className={`mt-auto pt-6 text-[13px] font-semibold ${
                      item.dark ? "text-brand-300" : "text-brand"
                    }`}
                  >
                    {item.cta}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Know someone who needs this?"
        text="Share Ansari Product Engineering with anyone who is losing hours to manual work."
        cta="Back to home"
        ctaHref="/"
        secondary=""
      />
    </>
  );
}
