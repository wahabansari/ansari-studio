import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy: How We Handle Your Data | Ansari Studio" },
  description:
    "How Ansari Studio collects, uses and keeps the details you send through this website, which cookieless analytics we use, and how to reach us.",
  alternates: { canonical: "/privacy" },
};

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
          lead="How Ansari Studio collects, uses and protects the information you share through this website. Last updated 20 October 2026."
          primary="Contact us about privacy"
          primaryHref="/contact"
          secondary=""
          points=""
        />
        <section className="px-[24px] pt-[72px] pb-[112px]">
          <div className="mx-auto grid max-w-[1100px] grid-cols-[240px_minmax(0,700px)] items-start justify-center gap-[72px] max-[900px]:grid-cols-[minmax(0,1fr)] [&_h2]:mt-[44px] [&_h2]:mr-0 [&_h2]:mb-0 [&_h2]:ml-0 [&_h2]:text-[24px] [&_h2]:leading-[1.2] [&_h2]:font-bold [&_h2]:tracking-[-0.016em] [&_h2]:text-ink [&_li]:text-[17px] [&_li]:leading-[1.75] [&_li]:text-prose [&_p]:mt-[12px] [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 [&_p]:text-[17px] [&_p]:leading-[1.75] [&_p]:text-prose">
            <aside className="sticky top-[24px] max-[900px]:hidden!">
              <div className="inline-flex rounded-full border border-line bg-subtle p-[4px] text-[14px] font-semibold">
                <span className="rounded-full bg-ink px-[14px] py-[7px] text-white">Privacy</span>
                <Link className="px-[14px] py-[7px] text-muted" href="/terms">
                  Terms
                </Link>
              </div>
              <nav className="mt-[24px]" aria-label="Sections">
                <ul className="flex list-none flex-col gap-[2px] text-[14px] text-muted">
                  <li>
                    <a
                      className="block rounded-[8px] bg-brand-50 px-[12px] py-[8px] font-semibold text-brand"
                      href="#who"
                    >
                      Who we are
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#collect">
                      What we collect
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#use">
                      How we use it
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#store">
                      Where it is stored
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#keep">
                      How long we keep it
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#rights">
                      Your rights
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
            <article>
              <h2 className="mt-0" id="who">
                Who we are
              </h2>
              <p>
                Ansari Studio is a software and automation studio run by Muhammad Wahab Ansari in Lahore,
                Pakistan. We are responsible for the personal information you share through this website. You
                can reach us at{" "}
                <a className="font-semibold text-brand" href="mailto:wahabansari.dev@gmail.com">
                  wahabansari.dev@gmail.com
                </a>
                .
              </p>
              <h2 id="collect">What we collect</h2>
              <ul className="mt-[12px] pl-[22px]">
                <li>
                  Details you send through our contact or audit forms: your name, work email, company website
                  and message.
                </li>
                <li>
                  Booking details when you schedule a call: the time you choose and the email address you
                  provide.
                </li>
                <li>
                  Anonymous, cookie-free statistics about page visits. We do not use advertising or tracking
                  cookies.
                </li>
              </ul>
              <h2 id="use">How we use it</h2>
              <p>
                We use your information only to reply to your enquiry, prepare a proposal, schedule calls and
                deliver work you have asked for. We never sell your information or use it for advertising.
              </p>
              <h2 id="store">Where it is stored</h2>
              <p>
                Form submissions are stored in our email inbox and our customer records system. Our website
                and its analytics are served by a reputable cloud hosting provider. Each provider stores data
                securely and only processes it on our instructions.
              </p>
              <h2 id="keep">How long we keep it</h2>
              <p>
                Enquiries that do not become projects are deleted within 12 months. Information about clients
                is kept for as long as we work together, and afterwards only as long as accounting or legal
                rules require.
              </p>
              <h2 id="rights">Your rights</h2>
              <p>
                You can ask to see, correct, export or delete your personal information at any time. Email{" "}
                <a className="font-semibold text-brand" href="mailto:wahabansari.dev@gmail.com">
                  wahabansari.dev@gmail.com
                </a>{" "}
                and we will respond within one month. If you are in the UK, you can also complain to the
                Information Commissioner’s Office.
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
      />
    </>
  );
}
