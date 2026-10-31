import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Privacy Policy: How We Handle Your Data | Ansari Product Engineering" },
  description:
    "How Ansari Product Engineering collects, uses and keeps the details you send through this website, and how to reach us about them.",
  path: "/privacy",
});

const SECTIONS = [
  { id: "who", label: "Who we are" },
  { id: "collect", label: "What we collect" },
  { id: "use", label: "How we use it" },
  { id: "analytics", label: "Analytics and cookies" },
  { id: "store", label: "Where it is stored" },
  { id: "keep", label: "How long we keep it" },
  { id: "rights", label: "Your rights" },
];

export default function PrivacyPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="none"
          parent=""
          crumb="Privacy policy"
          eyebrow="Legal"
          title="Privacy policy"
          titleAccent=""
          lead="How Ansari Product Engineering collects, uses and protects the information you share through this website. Last updated 30 October 2026."
          primary="Contact us about privacy"
          primaryHref="/contact"
          secondary=""
          points=""
        />

        <section className="px-6 pt-16 pb-24">
          <div className="mx-auto grid max-w-[1100px] grid-cols-[200px_minmax(0,680px)] items-start justify-center gap-16 max-[900px]:grid-cols-1">

            {/* ── Sidebar ─────────────────────────────────────────── */}
            <aside className="sticky top-6 max-[900px]:hidden">
              {/* Privacy / Terms toggle */}
              <div className="inline-flex overflow-hidden rounded-xl border border-line bg-subtle text-[13px] font-semibold">
                <span className="bg-ink px-4 py-2 text-white">Privacy</span>
                <Link href="/terms" className="px-4 py-2 text-muted transition-colors hover:text-ink">
                  Terms
                </Link>
              </div>

              {/* Section nav */}
              <nav className="mt-6" aria-label="Sections">
                <ul className="flex flex-col gap-0.5 text-[13px]">
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`block rounded-lg px-3 py-2 transition-colors ${
                          i === 0
                            ? "bg-brand-50 font-semibold text-brand"
                            : "text-muted hover:bg-subtle hover:text-ink"
                        }`}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* ── Content ─────────────────────────────────────────── */}
            <article className="prose-custom">
              <h2 id="who">Who we are</h2>
              <p>
                Ansari Product Engineering is a product engineering company. We are responsible for the
                personal information you share through this website. You can reach us at{" "}
                <a href="mailto:wahabansari.dev@gmail.com">wahabansari.dev@gmail.com</a>.
              </p>

              <h2 id="collect">What we collect</h2>
              <ul>
                <li>
                  Details you send through our contact or audit forms: your name, work email, company
                  website and message.
                </li>
                <li>
                  Booking details when you schedule a call: the time you choose and the email address you
                  provide.
                </li>
                <li>
                  Optional analytics, only if you accept them (see below). No advertising or tracking
                  cookies are set before you choose.
                </li>
              </ul>

              <h2 id="use">How we use it</h2>
              <p>
                We use your information only to reply to your enquiry, prepare a proposal, schedule calls
                and deliver work you have asked for. We never sell your information or use it for
                advertising.
              </p>

              <h2 id="analytics">Analytics and cookies</h2>
              <p>
                Analytics is optional and off by default. If the site is configured with an analytics
                tool — Google Analytics, Google Tag Manager or Microsoft Clarity — a banner asks for your
                consent first. Nothing is loaded until you accept, and choosing &quot;Essential only&quot;
                keeps analytics off.
              </p>
              <ul>
                <li>The site works fully without analytics.</li>
                <li>
                  When enabled, analytics helps us understand which pages are useful and which forms are
                  used. We configure IP anonymisation where the provider supports it.
                </li>
                <li>
                  We respect the browser&apos;s Do Not Track setting: if it is on, analytics stays off and
                  the banner is not shown.
                </li>
                <li>
                  You can change your choice at any time by clearing this site&apos;s storage in your browser
                  and reloading the page.
                </li>
              </ul>

              <h2 id="store">Where it is stored</h2>
              <p>
                Form submissions are delivered to our email inbox. Our website is served by a reputable
                cloud hosting provider, and your booking details are handled by the scheduling service you
                use to book a call. Each provider stores data securely and only processes it on our
                instructions.
              </p>

              <h2 id="keep">How long we keep it</h2>
              <p>
                We keep enquiry details only for as long as they are useful — to handle your enquiry and
                any work that follows from it — and we delete them when they are no longer needed.
              </p>

              <h2 id="rights">Your rights</h2>
              <p>
                You can ask to see, correct, export or delete your personal information at any time. Email{" "}
                <a href="mailto:wahabansari.dev@gmail.com">wahabansari.dev@gmail.com</a> and we will act
                on your request as soon as we reasonably can. Depending on where you live, you may also
                have the right to complain to your local data-protection authority.
              </p>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Questions about your data?"
        text="Ask us directly and you get a reply within one business day."
        cta="Contact us"
        ctaHref="/contact"
        secondary=""
      />
    </>
  );
}
