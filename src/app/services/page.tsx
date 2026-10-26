import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Software Development & Automation Services | Ansari Product Engineering" },
  description:
    "Five services: automation and AI, product engineering, dashboards and portals, modernization, and maintenance — scoped clearly and delivered by the founder, a senior engineer.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <main id="main">
        <PageHero
          active="services"
          parent=""
          crumb="Services"
          eyebrow="Services"
          title="Services that build, modernize and"
          titleAccent="integrate your software."
          lead="One service matched to one real need. Pick what fits, or start with an automation audit and we will tell you where to begin."
          primary="Discuss your project"
          primaryHref="/contact"
          secondary="Get an automation audit"
          secondaryHref="/automation-audit"
          points="One senior engineer|Written scope first|Outcomes over output"
        />
        <section className="px-[24px] pt-[72px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-[20px] rounded-[24px] border border-brand-100 bg-brand-50 px-[32px] py-[28px]">
            <span className="flex-none rounded-full bg-brand px-[12px] py-[6px] text-[13px] font-[650] text-white">
              In short
            </span>
            <p className="flex-[1_1_520px] text-[19px] leading-[1.6] font-medium text-ink">
              Ansari Product Engineering offers five services: automation and AI, product engineering,
              dashboards and client portals, modernization and performance, and ongoing maintenance. Each one
              is scoped in writing and delivered by the founder, a senior engineer.
            </p>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-[24px]">
              <div className="max-w-[620px]">
                <div className="text-[14px] font-semibold text-brand">Five services</div>
                <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                  What changes for your business.
                </h2>
              </div>
              <p className="max-w-[380px] text-[16px] leading-[1.6] text-muted">
                Each service is described by what you get at the end, not by the tools we use to get there.
              </p>
            </div>
            <div className="mt-[56px] grid grid-cols-[repeat(6,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <Link
                className="col-span-2 flex flex-col gap-[22px] rounded-[24px] border border-line bg-white p-[32px] [transition:transform_.2s_ease,box-shadow_.2s_ease] hover:[transform:translateY(-3px)] hover:shadow-[0_18px_40px_-20px_rgba(10,16,34,0.25)] motion-reduce:[transition:none] motion-reduce:hover:[transform:none] max-[900px]:col-auto"
                href="/services/automation-ai"
              >
                <div className="flex items-center justify-between gap-[12px]">
                  <span className="rounded-full bg-teal-50 px-[11px] py-[5px] text-[12px] font-semibold text-teal">
                    Connect · Automation &amp; AI
                  </span>
                  <span
                    className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-line-strong bg-white"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#087F73"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="text-[26px] leading-[1.15] font-[680] tracking-[-0.016em]">
                    Your team stops doing the repetitive work.
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.6] text-muted">
                    Workflows that connect your forms, CRM and inbox, so follow-up, records and reports
                    happen on their own.
                  </p>
                </div>
                <div className="rounded-[16px] border border-line-strong bg-white p-[16px]">
                  <div className="flex justify-between text-[12px] font-semibold text-faint">
                    <span>Lead follow-up</span>
                    <span className="text-teal-deep">Automated</span>
                  </div>
                  <div className="mt-[10px] flex flex-col gap-[6px] text-[13px]">
                    <span className="text-teal-deep">✓ New enquiry from the website form</span>
                    <span className="text-teal-deep">✓ Reply sent and CRM updated</span>
                    <span className="text-muted">○ Owner notified to follow up personally</span>
                  </div>
                </div>
                <span className="mt-auto inline-flex items-center gap-[8px] text-[15px] font-semibold text-brand">
                  Explore automation
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                className="col-span-2 flex flex-col gap-[22px] rounded-[24px] border border-line bg-white p-[32px] [transition:transform_.2s_ease,box-shadow_.2s_ease] hover:[transform:translateY(-3px)] hover:shadow-[0_18px_40px_-20px_rgba(10,16,34,0.25)] motion-reduce:[transition:none] motion-reduce:hover:[transform:none] max-[900px]:col-auto"
                href="/services/product-engineering"
              >
                <div className="flex items-center justify-between gap-[12px]">
                  <span className="rounded-full bg-brand-50 px-[11px] py-[5px] text-[12px] font-semibold text-brand">
                    Build · Product engineering
                  </span>
                  <span
                    className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-line-strong bg-white"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2E4FE3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m16 18 6-6-6-6" />
                      <path d="m8 6-6 6 6 6" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="text-[26px] leading-[1.15] font-[680] tracking-[-0.016em]">
                    Your product ships, and keeps shipping.
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.6] text-muted">
                    MVPs, SaaS features and web apps built by a senior product engineer.
                  </p>
                </div>
                <div className="rounded-[16px] border border-line-strong bg-white p-[16px]">
                  <div className="flex justify-between text-[12px] font-semibold text-faint">
                    <span>Release plan</span>
                    <span className="text-brand">Week 6 of 8</span>
                  </div>
                  <div className="mt-[10px] h-[6px] rounded-full bg-line-soft" aria-hidden="true">
                    <div className="h-full w-[75%] rounded-full bg-brand" />
                  </div>
                  <div className="mt-[10px] flex flex-col gap-[6px] text-[13px]">
                    <span className="text-teal-deep">✓ Sign-up and billing</span>
                    <span className="text-teal-deep">✓ Team workspaces</span>
                    <span className="text-muted">○ Public launch</span>
                  </div>
                </div>
                <span className="mt-auto inline-flex items-center gap-[8px] text-[15px] font-semibold text-brand">
                  Explore product engineering
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                className="col-span-2 flex flex-col gap-[22px] rounded-[24px] border border-line bg-white p-[32px] [transition:transform_.2s_ease,box-shadow_.2s_ease] hover:[transform:translateY(-3px)] hover:shadow-[0_18px_40px_-20px_rgba(10,16,34,0.25)] motion-reduce:[transition:none] motion-reduce:hover:[transform:none] max-[900px]:col-auto"
                href="/services/dashboards-portals"
              >
                <div className="flex items-center justify-between gap-[12px]">
                  <span className="rounded-full bg-brand-50 px-[11px] py-[5px] text-[12px] font-semibold text-brand">
                    Build · Dashboards &amp; portals
                  </span>
                  <span
                    className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-line-strong bg-white"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2E4FE3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="9" rx="1" />
                      <rect x="14" y="3" width="7" height="5" rx="1" />
                      <rect x="14" y="12" width="7" height="9" rx="1" />
                      <rect x="3" y="16" width="7" height="5" rx="1" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="text-[26px] leading-[1.15] font-[680] tracking-[-0.016em]">
                    Everyone sees the same numbers.
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.6] text-muted">
                    Admin panels, client portals and internal tools connected to your data.
                  </p>
                </div>
                <div className="rounded-[16px] border border-line-strong bg-white p-[16px]">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[12px] font-semibold text-faint">Revenue</span>
                    <span className="rounded-full bg-teal-50 px-[7px] py-[2px] text-[11px] font-[650] text-teal-deep">
                      ▲ 8.4%
                    </span>
                  </div>
                  <div className="mt-[4px] text-[22px] font-[720] tracking-[-0.016em]">£48,260</div>
                  <div
                    className="mt-[10px] flex h-[56px] items-end gap-[6px] border-b border-b-line-soft"
                    aria-hidden="true"
                  >
                    <span className="h-[38%] flex-1 rounded-[4px_4px_0_0] bg-brand-100" />
                    <span className="h-[52%] flex-1 rounded-[4px_4px_0_0] bg-brand-100" />
                    <span className="h-[46%] flex-1 rounded-[4px_4px_0_0] bg-brand-200" />
                    <span className="h-[64%] flex-1 rounded-[4px_4px_0_0] bg-brand-200" />
                    <span className="h-[58%] flex-1 rounded-[4px_4px_0_0] bg-brand-300" />
                    <span className="h-[80%] flex-1 rounded-[4px_4px_0_0] bg-brand" />
                  </div>
                </div>
                <span className="mt-auto inline-flex items-center gap-[8px] text-[15px] font-semibold text-brand">
                  Explore dashboards
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                className="col-span-2 flex flex-col gap-[22px] rounded-[24px] border border-line bg-white p-[32px] [transition:transform_.2s_ease,box-shadow_.2s_ease] hover:[transform:translateY(-3px)] hover:shadow-[0_18px_40px_-20px_rgba(10,16,34,0.25)] motion-reduce:[transition:none] motion-reduce:hover:[transform:none] max-[900px]:col-auto"
                href="/services/modernization"
              >
                <div className="flex items-center justify-between gap-[12px]">
                  <span className="rounded-full bg-brand-50 px-[11px] py-[5px] text-[12px] font-semibold text-brand">
                    Improve · Modernization
                  </span>
                  <span
                    className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-line-strong bg-white"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2E4FE3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12a9 9 0 1 0 9-9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="text-[26px] leading-[1.15] font-[680] tracking-[-0.016em]">
                    Old software stops holding you back.
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.6] text-muted">
                    Measured performance fixes and step-by-step moves to a modern platform.
                  </p>
                </div>
                <div className="flex items-center gap-[16px] rounded-[16px] border border-line-strong bg-white p-[16px]">
                  <div>
                    <div className="text-[32px] leading-[1] font-[750] tracking-[-0.02em]">Faster</div>
                    <div className="mt-[6px] text-[12.5px] text-faint">on Sunhub, measured before vs after</div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[8px] text-[12px] text-muted">
                    <div>
                      Before
                      <div className="mt-[3px] h-[6px] w-full rounded-full bg-[#F3C5BF]" aria-hidden="true" />
                    </div>
                    <div>
                      After
                      <div className="mt-[3px] h-[6px] w-[70%] rounded-full bg-teal" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <span className="mt-auto inline-flex items-center gap-[8px] text-[15px] font-semibold text-brand">
                  Explore modernization
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                className="col-span-2 flex flex-col gap-[22px] rounded-[24px] border border-line bg-white p-[32px] [transition:transform_.2s_ease,box-shadow_.2s_ease] hover:[transform:translateY(-3px)] hover:shadow-[0_18px_40px_-20px_rgba(10,16,34,0.25)] motion-reduce:[transition:none] motion-reduce:hover:[transform:none] max-[900px]:col-auto"
                href="/services/maintenance-retainer"
              >
                <div className="flex items-center justify-between gap-[12px]">
                  <span className="rounded-full bg-brand-50 px-[11px] py-[5px] text-[12px] font-semibold text-brand">
                    Improve · Maintenance &amp; retainer
                  </span>
                  <span
                    className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-line-strong bg-white"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2E4FE3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="text-[26px] leading-[1.15] font-[680] tracking-[-0.016em]">
                    Someone always has your back.
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.6] text-muted">
                    Predictable monthly hours from one engineer who knows your code.
                  </p>
                </div>
                <div className="rounded-[16px] border border-line-strong bg-white p-[16px]">
                  <div className="flex justify-between text-[12px] font-semibold text-faint">
                    <span>This month</span>
                    <span className="text-ink">14 of 20 hours</span>
                  </div>
                  <div className="mt-[10px] h-[6px] rounded-full bg-line-soft" aria-hidden="true">
                    <div className="h-full w-[70%] rounded-full bg-brand" />
                  </div>
                  <div className="mt-[10px] flex flex-col gap-[6px] text-[13px] text-teal-deep">
                    <span>✓ Security updates</span>
                    <span>✓ Uptime monitoring</span>
                  </div>
                </div>
                <span className="mt-auto inline-flex items-center gap-[8px] text-[15px] font-semibold text-brand">
                  Explore maintenance
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="px-[24px] pb-[112px]">
          <div className="relative mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] items-center gap-[56px] overflow-hidden rounded-[32px] bg-brand p-[56px] text-white max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <div className="text-[14px] font-semibold text-brand-ice">Not sure where to start?</div>
              <h2 className="mt-[14px] text-[length:clamp(30px,3.6vw,46px)] leading-[1.06] font-bold tracking-[-0.024em]">
                Start with an automation audit.
              </h2>
              <p className="mt-[16px] max-w-[460px] text-[17px] leading-[1.6] text-brand-ice">
                A structured review of your tools and workflows. You leave knowing which service, if any, is
                worth paying for first.
              </p>
            </div>
            <div className="flex flex-col items-start gap-[16px]">
              <Link
                className="inline-flex h-[52px] items-center gap-[8px] rounded-[12px] bg-white px-[26px] text-[15px] font-semibold text-ink"
                href="/automation-audit"
              >
                Request your audit{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <span className="text-[14px] text-brand-ice">A structured review · No obligation to build</span>
            </div>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-[56px]">
            <div className="flex-[1_1_320px]">
              <div className="text-[14px] font-semibold text-brand">FAQ</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.06] font-bold tracking-[-0.026em]">
                Which service do I need?
              </h2>
              <p className="mt-[16px] text-[16px] leading-[1.6] text-muted">
                Something else?{" "}
                <Link className="font-semibold text-brand underline-offset-4 hover:underline" href="/contact">
                  Ask us directly.
                </Link>
              </p>
            </div>
            <div className="flex-[1.4_1_480px] border-t border-t-line">
              <details className="group border-b border-b-line py-[22px]" open>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Which service should I start with?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">
                  If your team loses hours to manual work, start with automation. If you need something new
                  built, start with product engineering. If existing software is slow or hard to change, start
                  with modernization. Not sure? The automation audit tells you where to start.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Can I combine services?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">
                  Yes. Many projects start with a build or a modernization and continue as a monthly retainer,
                  so the same engineer keeps improving what was delivered.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Do you only work with startups?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">
                  No. We work with startup founders, SaaS teams, growing businesses and agencies that need
                  reliable engineering without hiring a full in-house team.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  How do projects start?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">
                  With a 30-minute discovery call, followed by a written scope and fixed-price estimate.
                  Nothing is built until you have agreed the scope.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Tell us what you need to build."
        text="Share what you want to build, improve or connect. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
