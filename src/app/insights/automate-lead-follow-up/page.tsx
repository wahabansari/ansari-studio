import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { JsonLd, articleJsonLd } from "@/lib/seo";

const ARTICLE_HEADLINE = "How to automate lead follow-up between your website, CRM and inbox";
const ARTICLE_DESCRIPTION =
  "A step-by-step workflow that replies to every new enquiry, creates the contact in your CRM and tells the right person, so no lead waits in an inbox.";

export const metadata: Metadata = {
  title: { absolute: "How to Automate Lead Follow-Up | Ansari Product Engineering" },
  description: ARTICLE_DESCRIPTION,
  alternates: { canonical: "/insights/automate-lead-follow-up" },
};

export default function ArticlePage() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          headline: ARTICLE_HEADLINE,
          description: ARTICLE_DESCRIPTION,
          datePublished: "2026-10-20",
          path: "/insights/automate-lead-follow-up",
        })}
      />
      <main id="main">
        <PageHero
          active="insights"
          parent="Insights"
          parentHref="/insights"
          crumb="Article"
          eyebrow="Automation guide · 7 min read"
          title="How to automate lead follow-up"
          titleAccent="between your website, CRM and inbox."
          lead="A step-by-step workflow that replies to every new enquiry, creates the contact in your CRM and tells the right person — so no lead waits in an inbox."
          primary="Get an automation audit"
          primaryHref="/automation-audit"
          secondary=""
          points=""
          glow="mint"
        />
        <section className="px-[24px] pt-[80px] pb-[112px]">
          <div className="mx-auto grid max-w-[1100px] grid-cols-[240px_minmax(0,700px)] items-start justify-center gap-[72px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <aside className="sticky top-[24px] max-[900px]:hidden!">
              <div className="flex items-center gap-[12px] border-b border-b-line-soft pb-[20px]">
                <span
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-ink text-[13px] font-[650] text-white"
                  aria-hidden="true"
                >
                  WA
                </span>
                <span className="text-[14px] leading-[1.4]">
                  <b className="block font-[650]">Muhammad Wahab Ansari</b>
                  <span className="text-faint">Published 20 October 2026</span>
                </span>
              </div>
              <nav className="mt-[20px]" aria-label="On this page">
                <div className="text-[12px] font-semibold tracking-[0.06em] text-faint uppercase">
                  On this page
                </div>
                <ul className="mt-[12px] flex list-none flex-col gap-[2px] text-[14px]">
                  <li>
                    <a
                      className="block rounded-[8px] bg-brand-50 px-[12px] py-[8px] font-semibold text-brand"
                      href="#need"
                    >
                      What you need
                    </a>
                  </li>
                  <li>
                    <a className="block rounded-[8px] px-[12px] py-[8px] text-muted" href="#step1">
                      1. Catch the enquiry
                    </a>
                  </li>
                  <li>
                    <a className="block rounded-[8px] px-[12px] py-[8px] text-muted" href="#step2">
                      2. Create the contact
                    </a>
                  </li>
                  <li>
                    <a className="block rounded-[8px] px-[12px] py-[8px] text-muted" href="#step3">
                      3. Reply and notify
                    </a>
                  </li>
                  <li>
                    <a className="block rounded-[8px] px-[12px] py-[8px] text-muted" href="#test">
                      Test before going live
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
            <article className="[&_h2]:mt-[48px] [&_h2]:mr-0 [&_h2]:mb-0 [&_h2]:ml-0 [&_h2]:text-[30px] [&_h2]:leading-[1.15] [&_h2]:font-bold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_li]:mt-[8px] [&_li]:text-[18px] [&_li]:leading-[1.65] [&_li]:text-prose [&_p]:mt-[16px] [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 [&_p]:text-[18px] [&_p]:leading-[1.75] [&_p]:text-prose">
              <p className="mt-0 text-[20px] leading-[1.7] text-ink">
                If enquiries reach your inbox but follow-up depends on someone remembering, a small automated
                workflow can do the first steps for you. This guide shows the three steps that matter.
              </p>
              <h2 id="need">What you need</h2>
              <ul className="pl-[22px]">
                <li>A workflow automation platform (hosted or in your own cloud)</li>
                <li>A CRM with an access key for connecting other tools</li>
                <li>A web form that can send its entries to other tools</li>
              </ul>
              <div className="mt-[32px] flex flex-wrap items-center gap-[10px] rounded-[20px] bg-ink p-[24px]">
                <span className="rounded-[12px] border border-edge bg-raised px-[14px] py-[10px] text-[14px] font-semibold text-white">
                  Form submission
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3B4A6B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <span className="rounded-[12px] border border-brand bg-raised px-[14px] py-[10px] text-[14px] font-semibold text-white">
                  CRM · create contact
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3B4A6B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <span className="rounded-[12px] border border-[rgba(98,220,203,0.3)] bg-[rgba(98,220,203,0.12)] px-[14px] py-[10px] text-[14px] font-semibold text-mint">
                  Email + team chat
                </span>
              </div>
              <p className="mt-[10px] text-[13px] text-faint">The three-node workflow this guide builds.</p>
              <h2 id="step1">1. Catch the enquiry</h2>
              <p>
                Add a step that listens for new form submissions and paste its address into your form&apos;s
                settings. Send a test entry so the workflow can see every field your form sends.
              </p>
              <h2 id="step2">2. Create the contact</h2>
              <p>
                Add a CRM step set to create or update a contact. Map the email, name and message fields, and
                set the lead owner.
              </p>
              <pre className="mt-[20px] overflow-x-auto rounded-[14px] bg-ink px-[20px] py-[18px] font-mono text-[13.5px] leading-[1.7] text-haze">
                CRM email ← form: Email CRM first name ← form: Name CRM note ← form: Message
              </pre>
              <h2 id="step3">3. Reply and notify</h2>
              <p>
                Send a short confirmation email to the lead, then post a message in the owner&apos;s team chat
                with a link to the new contact.
              </p>
              <h2 id="test">Test before going live</h2>
              <p>
                Run three real-looking submissions, including one with a missing field, and check each one in
                your CRM and team chat before switching the workflow on.
              </p>
              <div className="mt-[48px] flex items-start gap-[18px] rounded-[24px] border border-line bg-subtle p-[28px]">
                <span
                  className="flex h-[56px] w-[56px] flex-none items-center justify-center rounded-full bg-ink text-[16px] font-[650] text-white"
                  aria-hidden="true"
                >
                  WA
                </span>
                <div>
                  <div className="text-[17px] font-[650]">Written by Muhammad Wahab Ansari</div>
                  <p className="mx-0 mt-[6px] mb-0 text-[15px] leading-[1.6] text-muted">
                    Founder of Ansari Product Engineering. Builds web products and business automations for
                    founders and growing teams.
                  </p>
                  <Link className="mt-[10px] inline-block text-[14px] font-semibold text-brand underline-offset-4 hover:underline" href="/about">
                    About the author →
                  </Link>
                </div>
              </div>
              <div className="mt-[40px]">
                <Link
                  className="flex flex-col gap-[10px] rounded-[18px] bg-ink p-[22px] text-white"
                  href="/services/automation-ai"
                >
                  <span className="text-[12px] font-semibold text-mint">Service</span>
                  <span className="block text-[17px] leading-[1.3] font-[650]">
                    Have us build this for you →
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Want this running next week?"
        text="We can build and test the workflow for you. Start with an automation audit."
        cta="Get an automation audit"
        ctaHref="/automation-audit"
      />
    </>
  );
}
