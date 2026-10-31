import { BookingCard } from "@/components/contact/BookingCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { Check } from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, FOUNDER } from "@/lib/site";

export const metadata = pageMetadata({
  title: { absolute: "Contact Ansari Product Engineering" },
  description:
    "Tell us what you need to build, improve or connect. Book a discovery call or send a message; you get a reply within one business day.",
  path: "/contact",
});

const NEXT_STEPS = [
  {
    title: "Reply within one business day",
    text: "You will hear back from the engineer, not a sales team.",
  },
  {
    title: "30-minute discovery call",
    text: "A focused conversation about the problem, your tools and what success looks like.",
  },
  {
    title: "Written scope and estimate",
    text: "Clear deliverables and a price, agreed before any work starts.",
  },
];

const REASSURANCES = [
  "No sales sequence or follow-up pressure",
  "NDA available before you share sensitive details",
  "No obligation after the discovery call",
  "You own all code and accounts at handover",
];

export default function ContactPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="none"
          parent=""
          crumb="Contact"
          eyebrow="Get in touch"
          title="Tell us what you need to build,"
          titleAccent="improve or connect."
          lead="Send a message or book a 30-minute discovery call. You get a reply within one business day."
          primary="Book a discovery call"
          primaryHref="#book"
          secondary="Send a message"
          secondaryHref="#message"
          points="Reply within one business day|No sales sequence|NDA on request"
        />

        {/* ── Main layout ────────────────────────────────────────────────── */}
        <section className="bg-[linear-gradient(180deg,#070B16_0,#070B16_80px,#f6f8fb_80px)] px-6 pb-24">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[1.1fr_0.9fr] items-start gap-6 max-[900px]:grid-cols-1">

            {/* Left: reactive contact form */}
            <ContactForm />

            {/* Right: booking + trust */}
            <div className="flex flex-col gap-4">

              {/* Booking card */}
              <BookingCard />

              {/* Direct email */}
              <div className="flex items-center gap-4 rounded-[20px] border border-line bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-white text-brand">
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold tracking-widest text-faint uppercase">
                    Email directly
                  </span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="break-all text-[15px] font-bold text-ink transition-colors hover:text-brand"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </span>
              </div>

              {/* What happens next */}
              <div className="rounded-[20px] border border-line bg-white p-6">
                <div className="font-mono text-[11px] font-semibold tracking-widest text-brand uppercase">
                  What happens next
                </div>
                <ol className="mt-4 flex flex-col gap-5">
                  {NEXT_STEPS.map((step, i) => (
                    <li key={step.title} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block text-[14px] font-semibold leading-[1.3]">
                          {step.title}
                        </span>
                        <span className="mt-0.5 block text-[13px] leading-[1.55] text-muted">
                          {step.text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Reassurances */}
              <div className="rounded-[20px] border border-line-soft bg-subtle p-5">
                <div className="font-mono text-[11px] font-semibold tracking-widest text-faint uppercase">
                  Good to know
                </div>
                <ul className="mt-3 flex flex-col gap-2">
                  {REASSURANCES.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-[13px] leading-[1.5] text-muted">
                      <Check size={13} className="mt-[2px] shrink-0 text-teal" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* LinkedIn */}
              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[20px] border border-line bg-white p-4 transition-colors hover:border-brand-200"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-ink">
                    {FOUNDER.name}
                  </span>
                  <span className="text-[12px] text-muted">
                    Connect on LinkedIn
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Prefer to talk it through?"
        text="Book a discovery call, or send a message above. You get a reply within one business day."
        secondary=""
      />
    </>
  );
}
