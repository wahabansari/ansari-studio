import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { AUTHOR_LABEL, AuthorAvatar } from "@/components/design/AuthorBadge";
import { SiteFooter } from "@/components/design/SiteFooter";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical guides on building, modernizing and automating business software.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="insights"
          parent=""
          crumb="Insights"
          eyebrow="Insights"
          title="Insights on building, modernizing"
          titleAccent="and automating software."
          lead="Practical guides for founders and teams, from the engineers at Ansari Product Engineering."
          primary="Discuss your project"
          primaryHref="/contact"
          secondary=""
          points=""
        />
        <section className="px-[24px] pt-[96px] pb-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <Link
              className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] overflow-hidden rounded-[28px] border border-line transition-colors duration-150 hover:border-brand-200 max-[900px]:grid-cols-[minmax(0,1fr)]"
              href="/insights/automate-lead-follow-up"
            >
              <div className="relative flex min-h-[340px] items-center justify-center bg-ink bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[32px_32px] p-[32px]">
                <div className="flex flex-wrap items-center justify-center gap-[10px]" aria-hidden="true">
                  <span className="rounded-[12px] border border-edge bg-raised px-[16px] py-[12px] text-[14px] font-semibold text-white">
                    New lead
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3B4A6B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <span className="rounded-[12px] border border-brand bg-raised px-[16px] py-[12px] text-[14px] font-semibold text-white shadow-[0_0_0_4px_rgba(46,79,227,0.18)]">
                    Workflow
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3B4A6B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <span className="rounded-[12px] border border-[rgba(98,220,203,0.3)] bg-[rgba(98,220,203,0.12)] px-[16px] py-[12px] text-[14px] font-semibold text-mint">
                    Follow-up sent
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-white p-[40px]">
                <div className="flex items-center gap-[10px] text-[13px] text-faint">
                  <span className="rounded-full bg-teal-50 px-[10px] py-[4px] font-semibold text-teal-deep">
                    Automation
                  </span>
                  <span>Featured</span>
                </div>
                <h2 className="mt-[18px] text-[length:clamp(26px,3vw,36px)] leading-[1.12] font-bold tracking-[-0.02em]">
                  How to automate lead follow-up between your website, CRM and inbox
                </h2>
                <p className="mt-[12px] text-[16px] leading-[1.6] text-muted">
                  A step-by-step workflow that replies to every new enquiry and assigns the right owner.
                </p>
                <div className="mt-[24px] flex items-center gap-[12px] text-[14px] text-muted">
                  <AuthorAvatar size={32} />
                  {AUTHOR_LABEL} · 7 min read
                </div>
              </div>
            </Link>
            <div className="mt-[20px] flex flex-col justify-center rounded-[24px] bg-ink p-[28px] text-white max-[900px]:mt-[16px]">
              <div className="flex flex-wrap items-center justify-between gap-[16px]">
                <div className="max-w-[560px]">
                  <h3 className="text-[20px] leading-[1.25] font-[680] tracking-[-0.012em]">
                    Have a topic you want covered?
                  </h3>
                  <p className="mt-[8px] text-[14px] leading-[1.6] text-mist">
                    Send a question and it may become the next article.
                  </p>
                </div>
                <Link
                  className="inline-flex h-[44px] items-center rounded-[12px] border border-edge bg-raised px-[20px] text-[15px] font-semibold text-brand-300 transition-colors duration-150 hover:border-[rgba(143,163,255,0.4)] hover:text-white"
                  href="/contact"
                >
                  Suggest a topic →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Rather talk it through?"
        text="Tell us what you are trying to build, improve or connect. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
