import Link from "next/link";
import { ArrowIcon } from "@/components/brand";
import { LeadConfirmation } from "@/components/LeadConfirmation";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { BOOKING_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Thanks: Your Message Was Received",
  description:
    "Your message reached Ansari Product Engineering. Here is what happens next, and a few projects to look at while you wait.",
  path: "/contact/thank-you",
  noindex: true,
});

const LINKS = [
  { label: "Process", href: "/process", title: "What happens after you reach out", dark: false },
  { label: "Work", href: "/work", title: "Work we have delivered", dark: false },
  {
    label: "Insights",
    href: "/insights/automate-lead-follow-up",
    title: "How to automate lead follow-up between your website, CRM and inbox",
    dark: true,
  },
] as const;

export default function ThankYouPage() {
  return (
    <>
      <LeadConfirmation />
      <main id="main">
        <PageHero
          crumbs={[{ label: "Contact", href: "/contact" }, { label: "Thank you" }]}
          eyebrow="Message received"
          title={
            <>
              Thanks. <em>We will reply within one business day.</em>
            </>
          }
          lead="While you wait, here is how we work and what we have built."
          actions={
            <>
              <Link className="btn btn-p" href="/process">
                See how we work <ArrowIcon />
              </Link>
              <a className="btn btn-d" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a 30-minute call
              </a>
            </>
          }
        />
        <section className="sec">
          <div className="wrap">
            <div className="head">
              <h2 className="h2">While you wait</h2>
            </div>
            <Reveal className="mb">
              {LINKS.map((item) => (
                <Link key={item.href} className={`cell c4${item.dark ? " dk" : ""}`} href={item.href}>
                  <span className="fig">{item.label}</span>
                  <h3>{item.title}</h3>
                  <span className="more">
                    Open <ArrowIcon />
                  </span>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
