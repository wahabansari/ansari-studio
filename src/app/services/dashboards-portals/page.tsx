import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { ProjectThumb } from "@/components/design/ProjectThumb";
import { SiteFooter } from "@/components/design/SiteFooter";

export const metadata: Metadata = {
  title: { absolute: "Custom Dashboard & Client Portal Development | Ansari Studio" },
  description:
    "Admin panels, client portals and internal tools built around how your team works — connected to your data, fast to load and easy to maintain.",
  alternates: { canonical: "/services/dashboards-portals" },
};

export default function DashboardsPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="services"
          parent="Services"
          parentHref="/services"
          crumb="Dashboards &amp; portals"
          eyebrow="Build · Dashboards &amp; portals"
          title="Dashboards, client portals and internal tools"
          titleAccent="your team will actually use."
          lead="Built around how your team works, connected to the data you already have, fast to load and easy to maintain."
          primary="Discuss your project"
          primaryHref="/contact"
          secondary="See how we work"
          secondaryHref="/process"
          points="Connected to your data|Designed with your team|Easy to maintain"
        />
        <section className="px-[24px] pt-[72px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-[20px] rounded-[24px] border border-brand-100 bg-brand-50 px-[32px] py-[28px]">
            <span className="flex-none rounded-full bg-brand px-[12px] py-[6px] text-[13px] font-[650] text-white">
              In short
            </span>
            <p className="flex-[1_1_520px] text-[19px] leading-[1.6] font-medium text-ink">
              A custom dashboard or client portal brings the data your team and clients need into one fast,
              secure place. Ansari Studio designs it around the questions people ask every day and connects it
              to the systems you already use.
            </p>
          </div>
        </section>
        <section className="px-[24px] pt-[112px] pb-[56px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[680px]">
              <div className="text-[14px] font-semibold text-brand">What changes</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Everyone works from the same numbers.
              </h2>
            </div>
            <div className="mt-[48px] rounded-[26px] bg-[linear-gradient(180deg,#E6EAF0,#F6F8FB)] p-[8px]">
              <div className="grid grid-cols-[216px_minmax(0,1fr)] overflow-hidden rounded-[20px] border border-line bg-white max-[900px]:grid-cols-[minmax(0,1fr)]">
                <div className="flex flex-col gap-[4px] bg-ink px-[14px] py-[22px] text-[14px] text-mist max-[900px]:hidden!">
                  <div className="flex items-center gap-[10px] px-[8px] pb-[20px] font-[650] text-white">
                    <span className="h-[26px] w-[26px] rounded-[8px] bg-[linear-gradient(135deg,#2E4FE3,#62DCCB)]" />
                    Northbeam Studio
                  </div>
                  <div className="flex items-center gap-[10px] rounded-[9px] bg-[rgba(255,255,255,0.08)] px-[10px] py-[9px] font-semibold text-white">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="7" height="9" rx="1" />
                      <rect x="14" y="3" width="7" height="5" rx="1" />
                      <rect x="14" y="12" width="7" height="9" rx="1" />
                      <rect x="3" y="16" width="7" height="5" rx="1" />
                    </svg>
                    <span className="flex-1">Overview</span>
                  </div>
                  <div className="flex items-center gap-[10px] rounded-[9px] px-[10px] py-[9px]">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    </svg>
                    <span className="flex-1">Clients</span>
                    <span className="rounded-full bg-[rgba(255,255,255,0.08)] px-[7px] py-[1px] text-[11px] text-haze">
                      36
                    </span>
                  </div>
                  <div className="flex items-center gap-[10px] rounded-[9px] px-[10px] py-[9px]">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 7h18v13H3z" />
                      <path d="M8 7V4h8v3" />
                    </svg>
                    <span className="flex-1">Projects</span>
                    <span className="rounded-full bg-[rgba(255,255,255,0.08)] px-[7px] py-[1px] text-[11px] text-haze">
                      14
                    </span>
                  </div>
                  <div className="flex items-center gap-[10px] rounded-[9px] px-[10px] py-[9px]">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 2h12v20l-3-2-3 2-3-2-3 2z" />
                      <path d="M9 7h6M9 11h6" />
                    </svg>
                    <span className="flex-1">Invoices</span>
                    <span className="rounded-full bg-[rgba(255,255,255,0.08)] px-[7px] py-[1px] text-[11px] text-haze">
                      5
                    </span>
                  </div>
                  <div className="flex items-center gap-[10px] rounded-[9px] px-[10px] py-[9px]">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m7 15 4-4 3 3 5-6" />
                    </svg>
                    <span className="flex-1">Reports</span>
                  </div>
                  <div className="flex items-center gap-[10px] rounded-[9px] px-[10px] py-[9px]">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                    </svg>
                    <span className="flex-1">Settings</span>
                  </div>
                  <div className="mt-auto flex items-center gap-[10px] border-t border-t-[rgba(255,255,255,0.08)] px-[10px] pt-[14px] text-[13px]">
                    <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-edge text-[11px] font-[650] text-white">
                      SM
                    </span>
                    <span>
                      <span className="block font-semibold text-white">Sara Malik</span>Operations lead
                    </span>
                  </div>
                </div>
                <div className="bg-[#F9FAFC] p-[24px]">
                  <div className="flex flex-wrap items-center justify-between gap-[16px]">
                    <div>
                      <div className="text-[12.5px] text-faint">Good morning, Sara</div>
                      <div className="mt-[2px] text-[21px] font-bold tracking-[-0.01em]">
                        Business overview
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-[8px]">
                      <span className="inline-flex w-[180px] items-center gap-[8px] rounded-[9px] border border-line bg-white px-[12px] py-[8px] text-[13px] text-faint max-[900px]:hidden!">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="11" cy="11" r="7" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                        Search clients…
                      </span>
                      <span className="inline-flex items-center gap-[6px] rounded-[9px] border border-line bg-white px-[12px] py-[8px] text-[13px] font-semibold">
                        1–31 Oct 2026
                      </span>
                      <span className="rounded-[9px] bg-brand px-[12px] py-[8px] text-[13px] font-semibold text-white">
                        Export report
                      </span>
                    </div>
                  </div>
                  <div className="mt-[18px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[12px] max-[900px]:grid-cols-[repeat(2,minmax(0,1fr))]">
                    <div className="rounded-[14px] border border-line bg-white p-[16px]">
                      <div className="flex items-center justify-between text-[12.5px] font-semibold text-faint">
                        Revenue
                        <span className="rounded-full bg-teal-50 px-[7px] py-[2px] text-[11px] font-[650] text-teal-deep">
                          ▲ 8.4%
                        </span>
                      </div>
                      <div className="mt-[10px] flex items-end justify-between gap-[8px]">
                        <div>
                          <div className="text-[24px] leading-[1] font-[720] tracking-[-0.016em]">
                            £48,260
                          </div>
                          <div className="mt-[6px] text-[11.5px] text-faint">vs £44,520 last month</div>
                        </div>
                        <svg width="80" height="26" viewBox="0 0 80 26" aria-hidden="true">
                          <path
                            d="M0.0 17.8 L11.4 22.0 L22.9 15.9 L34.3 12.2 L45.7 14.0 L57.1 8.2 L68.6 9.7 L80.0 4.0"
                            fill="none"
                            stroke="#2E4FE3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="rounded-[14px] border border-line bg-white p-[16px]">
                      <div className="flex items-center justify-between text-[12.5px] font-semibold text-faint">
                        Active clients
                        <span className="rounded-full bg-teal-50 px-[7px] py-[2px] text-[11px] font-[650] text-teal-deep">
                          ▲ 3
                        </span>
                      </div>
                      <div className="mt-[10px] flex items-end justify-between gap-[8px]">
                        <div>
                          <div className="text-[24px] leading-[1] font-[720] tracking-[-0.016em]">36</div>
                          <div className="mt-[6px] text-[11.5px] text-faint">2 new this month</div>
                        </div>
                        <svg width="80" height="26" viewBox="0 0 80 26" aria-hidden="true">
                          <path
                            d="M0.0 22.0 L11.4 19.0 L22.9 19.0 L34.3 13.0 L45.7 16.0 L57.1 10.0 L68.6 13.0 L80.0 4.0"
                            fill="none"
                            stroke="#2E4FE3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="rounded-[14px] border border-line bg-white p-[16px]">
                      <div className="flex items-center justify-between text-[12.5px] font-semibold text-faint">
                        Open projects
                        <span className="rounded-full bg-teal-50 px-[7px] py-[2px] text-[11px] font-[650] text-teal-deep">
                          ▲ 2
                        </span>
                      </div>
                      <div className="mt-[10px] flex items-end justify-between gap-[8px]">
                        <div>
                          <div className="text-[24px] leading-[1] font-[720] tracking-[-0.016em]">14</div>
                          <div className="mt-[6px] text-[11.5px] text-faint">9 on schedule</div>
                        </div>
                        <svg width="80" height="26" viewBox="0 0 80 26" aria-hidden="true">
                          <path
                            d="M0.0 22.0 L11.4 17.5 L22.9 13.0 L34.3 17.5 L45.7 8.5 L57.1 13.0 L68.6 13.0 L80.0 4.0"
                            fill="none"
                            stroke="#2E4FE3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="rounded-[14px] border border-line bg-white p-[16px]">
                      <div className="flex items-center justify-between text-[12.5px] font-semibold text-faint">
                        Overdue invoices
                        <span className="rounded-full bg-[#FDECEC] px-[7px] py-[2px] text-[11px] font-[650] text-[#B42318]">
                          ▲ 5
                        </span>
                      </div>
                      <div className="mt-[10px] flex items-end justify-between gap-[8px]">
                        <div>
                          <div className="text-[24px] leading-[1] font-[720] tracking-[-0.016em]">£6,940</div>
                          <div className="mt-[6px] text-[11.5px] text-faint">5 invoices · avg 18 days</div>
                        </div>
                        <svg width="80" height="26" viewBox="0 0 80 26" aria-hidden="true">
                          <path
                            d="M0.0 22.0 L11.4 17.5 L22.9 22.0 L34.3 13.0 L45.7 17.5 L57.1 8.5 L68.6 13.0 L80.0 4.0"
                            fill="none"
                            stroke="#D9483B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[12px] grid grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] gap-[12px] max-[900px]:grid-cols-[minmax(0,1fr)]">
                    <div className="rounded-[14px] border border-line bg-white p-[18px]">
                      <div className="flex flex-wrap items-start justify-between gap-[12px]">
                        <div>
                          <div className="text-[13px] font-semibold text-faint">Monthly revenue</div>
                          <div className="mt-[4px] flex items-baseline gap-[8px]">
                            <span className="text-[22px] font-[720] tracking-[-0.016em]">£464,690</span>
                            <span className="text-[12.5px] text-faint">last 12 months</span>
                            <span className="rounded-full bg-teal-50 px-[7px] py-[2px] text-[11px] font-[650] text-teal-deep">
                              ▲ 21% year on year
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-[14px] text-[12px] text-muted">
                          <span className="inline-flex items-center gap-[6px]">
                            <span className="h-[3px] w-[12px] rounded-[2px] bg-brand" />
                            This year
                          </span>
                          <span className="inline-flex items-center gap-[6px]">
                            <span className="w-[12px] border-t-[2px] border-dashed border-t-brand-200" />
                            Last year
                          </span>
                        </div>
                      </div>
                      <svg
                        className="mt-[14px] block"
                        viewBox="0 0 620 220"
                        width="100%"
                        role="img"
                        aria-label="Line chart of monthly revenue rising from £31.2k to £48.3k over twelve months, compared with the previous year"
                      >
                        <defs>
                          <linearGradient id="revA" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#2E4FE3" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#2E4FE3" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <line x1="44" y1="190.0" x2="604" y2="190.0" stroke="#EEF1F5" />
                        <text x="34" y="194.0" textAnchor="end" fontSize="11" fill="#6B7280">
                          £0k
                        </text>
                        <line x1="44" y1="146.0" x2="604" y2="146.0" stroke="#EEF1F5" />
                        <text x="34" y="150.0" textAnchor="end" fontSize="11" fill="#6B7280">
                          £15k
                        </text>
                        <line x1="44" y1="102.0" x2="604" y2="102.0" stroke="#EEF1F5" />
                        <text x="34" y="106.0" textAnchor="end" fontSize="11" fill="#6B7280">
                          £30k
                        </text>
                        <line x1="44" y1="58.0" x2="604" y2="58.0" stroke="#EEF1F5" />
                        <text x="34" y="62.0" textAnchor="end" fontSize="11" fill="#6B7280">
                          £45k
                        </text>
                        <line x1="44" y1="14.0" x2="604" y2="14.0" stroke="#EEF1F5" />
                        <text x="34" y="18.0" textAnchor="end" fontSize="11" fill="#6B7280">
                          £60k
                        </text>
                        <path
                          d="M44.0 98.5 L94.9 92.0 L145.8 101.7 L196.7 85.0 L247.6 77.9 L298.5 87.0 L349.5 73.8 L400.4 65.9 L451.3 69.7 L502.2 57.4 L553.1 59.5 L604.0 48.3 L604.0 190 L44.0 190 Z"
                          fill="url(#revA)"
                        />
                        <path
                          d="M44.0 113.7 L94.9 109.3 L145.8 110.5 L196.7 102.6 L247.6 101.4 L298.5 99.1 L349.5 95.0 L400.4 93.2 L451.3 88.5 L502.2 87.0 L553.1 82.1 L604.0 75.9"
                          fill="none"
                          stroke="#B9C8FB"
                          strokeWidth="2"
                          strokeDasharray="5 5"
                        />
                        <path
                          d="M44.0 98.5 L94.9 92.0 L145.8 101.7 L196.7 85.0 L247.6 77.9 L298.5 87.0 L349.5 73.8 L400.4 65.9 L451.3 69.7 L502.2 57.4 L553.1 59.5 L604.0 48.3"
                          fill="none"
                          stroke="#2E4FE3"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                        <line
                          x1="604.0"
                          y1="48.3"
                          x2="604.0"
                          y2="190"
                          stroke="#2E4FE3"
                          strokeDasharray="2 3"
                        />
                        <circle
                          cx="604.0"
                          cy="48.3"
                          r="5.5"
                          fill="#FFFFFF"
                          stroke="#2E4FE3"
                          strokeWidth="2.5"
                        />
                        <rect x="492.0" y="32.3" width="98" height="26" rx="7" fill="#0A1022" />
                        <text
                          x="541.0"
                          y="49.3"
                          textAnchor="middle"
                          fontSize="11.5"
                          fontWeight="600"
                          fill="#FFFFFF"
                        >
                          Oct · £48,260
                        </text>
                        <text x="44.0" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Nov
                        </text>
                        <text x="94.9" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Dec
                        </text>
                        <text x="145.8" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Jan
                        </text>
                        <text x="196.7" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Feb
                        </text>
                        <text x="247.6" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Mar
                        </text>
                        <text x="298.5" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Apr
                        </text>
                        <text x="349.5" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          May
                        </text>
                        <text x="400.4" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Jun
                        </text>
                        <text x="451.3" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Jul
                        </text>
                        <text x="502.2" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Aug
                        </text>
                        <text x="553.1" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Sep
                        </text>
                        <text x="604.0" y="212" textAnchor="middle" fontSize="11" fill="#6B7280">
                          Oct
                        </text>
                      </svg>
                    </div>
                    <div className="flex flex-col rounded-[14px] border border-line bg-white p-[18px]">
                      <div className="text-[13px] font-semibold text-faint">Revenue by type</div>
                      <div className="relative mx-auto mt-[16px] h-[150px] w-[150px]">
                        <svg
                          viewBox="0 0 120 120"
                          width="150"
                          height="150"
                          role="img"
                          aria-label="Donut chart: monthly retainers 46%, fixed-price projects 38%, support hours 16%"
                        >
                          <circle
                            cx="60"
                            cy="60"
                            r="42"
                            fill="none"
                            stroke="#2E4FE3"
                            strokeWidth="16"
                            strokeDasharray="119.4 144.5"
                            stroke-dashoffset="0.0"
                            transform="rotate(-90 60 60)"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="42"
                            fill="none"
                            stroke="#62DCCB"
                            strokeWidth="16"
                            strokeDasharray="98.3 165.6"
                            stroke-dashoffset="-121.4"
                            transform="rotate(-90 60 60)"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="42"
                            fill="none"
                            stroke="#B9C8FB"
                            strokeWidth="16"
                            strokeDasharray="40.2 223.7"
                            stroke-dashoffset="-221.7"
                            transform="rotate(-90 60 60)"
                          />
                        </svg>
                        <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center">
                          <span className="text-[20px] font-[720] tracking-[-0.016em]">£48.3k</span>
                          <span className="text-[11px] text-faint">October</span>
                        </div>
                      </div>
                      <div className="mt-auto flex flex-col gap-[10px] pt-[16px]">
                        <div className="flex items-center justify-between text-[13px]">
                          <span className="flex items-center gap-[8px] text-muted">
                            <span className="h-[9px] w-[9px] rounded-[3px] bg-brand" />
                            Monthly retainers
                          </span>
                          <span className="font-[650]">46%</span>
                        </div>
                        <div className="flex items-center justify-between text-[13px]">
                          <span className="flex items-center gap-[8px] text-muted">
                            <span className="h-[9px] w-[9px] rounded-[3px] bg-mint" />
                            Fixed-price projects
                          </span>
                          <span className="font-[650]">38%</span>
                        </div>
                        <div className="flex items-center justify-between text-[13px]">
                          <span className="flex items-center gap-[8px] text-muted">
                            <span className="h-[9px] w-[9px] rounded-[3px] bg-brand-200" />
                            Support hours
                          </span>
                          <span className="font-[650]">16%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[12px] rounded-[14px] border border-line bg-white p-[18px]">
                    <div className="flex items-center justify-between pb-[10px]">
                      <span className="text-[13px] font-semibold text-faint">Recent invoices</span>
                      <span className="text-[13px] font-semibold text-brand">View all</span>
                    </div>
                    <div className="grid grid-cols-[90px_minmax(0,1.6fr)_minmax(0,1fr)_90px_84px] items-center gap-[12px] pb-[8px] text-[11.5px] font-semibold tracking-[0.04em] text-faint uppercase">
                      <span>Invoice</span>
                      <span>Client</span>
                      <span className="max-[900px]:hidden!">Work</span>
                      <span>Amount</span>
                      <span>Status</span>
                    </div>
                    <div className="grid grid-cols-[90px_minmax(0,1.6fr)_minmax(0,1fr)_90px_84px] items-center gap-[12px] border-t border-t-line-soft py-[11px] text-[13px]">
                      <span className="font-mono text-[12px] text-faint">INV-1042</span>
                      <span className="font-semibold">Northwind Dental</span>
                      <span className="text-muted max-[900px]:hidden!">Retainer · Oct</span>
                      <span className="font-[650]">£2,400</span>
                      <span>
                        <span className="rounded-full bg-teal-50 px-[8px] py-[3px] text-[11.5px] font-[650] whitespace-nowrap text-teal-deep">
                          Paid
                        </span>
                      </span>
                    </div>
                    <div className="grid grid-cols-[90px_minmax(0,1.6fr)_minmax(0,1fr)_90px_84px] items-center gap-[12px] border-t border-t-line-soft py-[11px] text-[13px]">
                      <span className="font-mono text-[12px] text-faint">INV-1041</span>
                      <span className="font-semibold">Harbor & Pine Legal</span>
                      <span className="text-muted max-[900px]:hidden!">Client portal</span>
                      <span className="font-[650]">£6,800</span>
                      <span>
                        <span className="rounded-full bg-teal-50 px-[8px] py-[3px] text-[11.5px] font-[650] whitespace-nowrap text-teal-deep">
                          Paid
                        </span>
                      </span>
                    </div>
                    <div className="grid grid-cols-[90px_minmax(0,1.6fr)_minmax(0,1fr)_90px_84px] items-center gap-[12px] border-t border-t-line-soft py-[11px] text-[13px]">
                      <span className="font-mono text-[12px] text-faint">INV-1039</span>
                      <span className="font-semibold">Brightline Fitness</span>
                      <span className="text-muted max-[900px]:hidden!">Booking flow</span>
                      <span className="font-[650]">£3,150</span>
                      <span>
                        <span className="rounded-full bg-[#FFF4E0] px-[8px] py-[3px] text-[11.5px] font-[650] whitespace-nowrap text-[#8A5300]">
                          Due 3 Nov
                        </span>
                      </span>
                    </div>
                    <div className="grid grid-cols-[90px_minmax(0,1.6fr)_minmax(0,1fr)_90px_84px] items-center gap-[12px] border-t border-t-line-soft py-[11px] text-[13px]">
                      <span className="font-mono text-[12px] text-faint">INV-1036</span>
                      <span className="font-semibold">Copperleaf Realty</span>
                      <span className="text-muted max-[900px]:hidden!">Support hours</span>
                      <span className="font-[650]">£1,240</span>
                      <span>
                        <span className="rounded-full bg-[#FDECEC] px-[8px] py-[3px] text-[11.5px] font-[650] whitespace-nowrap text-[#B42318]">
                          Overdue
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="mt-[12px] text-[12px] text-faint">
                    Example dashboard for a fictional company. Your version shows your own live data.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] pt-[56px] pb-[112px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div className="rounded-[24px] border border-line bg-subtle p-[32px]">
              <h3 className="text-[22px] font-[680] tracking-[-0.016em]">Admin panels</h3>
              <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                Manage users, content and orders without touching the database.
              </p>
              <div className="mt-[18px] inline-flex items-center gap-[8px] rounded-full bg-teal-50 px-[12px] py-[6px] text-[13px] font-semibold text-teal-deep">
                You get: fewer support requests to developers
              </div>
            </div>
            <div className="rounded-[24px] border border-line bg-subtle p-[32px]">
              <h3 className="text-[22px] font-[680] tracking-[-0.016em]">Client portals</h3>
              <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                Clients see their projects, files and invoices in one place.
              </p>
              <div className="mt-[18px] inline-flex items-center gap-[8px] rounded-full bg-teal-50 px-[12px] py-[6px] text-[13px] font-semibold text-teal-deep">
                You get: fewer status-update emails
              </div>
            </div>
            <div className="rounded-[24px] border border-line bg-subtle p-[32px]">
              <h3 className="text-[22px] font-[680] tracking-[-0.016em]">Reporting dashboards</h3>
              <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                The numbers you check every week, updated on their own.
              </p>
              <div className="mt-[18px] inline-flex items-center gap-[8px] rounded-full bg-teal-50 px-[12px] py-[6px] text-[13px] font-semibold text-teal-deep">
                You get: decisions from current data
              </div>
            </div>
            <div className="rounded-[24px] border border-line bg-subtle p-[32px]">
              <h3 className="text-[22px] font-[680] tracking-[-0.016em]">Lightweight ERP modules</h3>
              <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                Inventory, scheduling or approvals built for how you actually work.
              </p>
              <div className="mt-[18px] inline-flex items-center gap-[8px] rounded-full bg-teal-50 px-[12px] py-[6px] text-[13px] font-semibold text-teal-deep">
                You get: one system instead of five sheets
              </div>
            </div>
          </div>
        </section>
        <section className="bg-ink px-[24px] py-[112px] text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] items-center gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <div className="text-[14px] font-semibold text-mint">Already have a dashboard?</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                We redesign the one nobody wants to open.
              </h2>
              <p className="mt-[18px] max-w-[480px] text-[17px] leading-[1.6] text-mist">
                We start with the questions your team asks every day, then rebuild the screens around those
                answers.
              </p>
            </div>
            <ol className="flex list-none flex-col gap-[12px]">
              <li className="flex gap-[16px] rounded-[16px] border border-edge bg-raised p-[20px]">
                <span className="font-mono text-[13px] text-mint">01</span>
                <span>
                  <span className="block text-[16px] font-[650]">List the daily questions</span>
                  <span className="mt-[4px] block text-[14px] text-mist">
                    What each role needs to see first.
                  </span>
                </span>
              </li>
              <li className="flex gap-[16px] rounded-[16px] border border-edge bg-raised p-[20px]">
                <span className="font-mono text-[13px] text-mint">02</span>
                <span>
                  <span className="block text-[16px] font-[650]">Connect the right data</span>
                  <span className="mt-[4px] block text-[14px] text-mist">
                    From the tools and databases you already use.
                  </span>
                </span>
              </li>
              <li className="flex gap-[16px] rounded-[16px] border border-edge bg-raised p-[20px]">
                <span className="font-mono text-[13px] text-mint">03</span>
                <span>
                  <span className="block text-[16px] font-[650]">Rebuild and test with your team</span>
                  <span className="mt-[4px] block text-[14px] text-mist">
                    Screens your people try before launch.
                  </span>
                </span>
              </li>
            </ol>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[26px] font-bold tracking-[-0.016em]">Related services</h2>
            <div className="mt-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <Link
                className="flex items-center justify-between gap-[16px] rounded-[20px] border border-line p-[26px]"
                href="/services/automation-ai"
              >
                <span>
                  <span className="block text-[17px] font-[650]">Automation &amp; AI</span>
                  <span className="mt-[4px] block text-[14px] text-muted">
                    Fill your dashboard with data automatically.
                  </span>
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E4FE3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
              <Link
                className="flex items-center justify-between gap-[16px] rounded-[20px] border border-line p-[26px]"
                href="/services/modernization"
              >
                <span>
                  <span className="block text-[17px] font-[650]">Modernization</span>
                  <span className="mt-[4px] block text-[14px] text-muted">
                    Move an ageing admin panel to a modern stack.
                  </span>
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E4FE3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        <section className="px-[24px] pt-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-[20px]">
              <div>
                <div className="text-[14px] font-semibold text-brand">Proof</div>
                <h2 className="mt-[14px] text-[length:clamp(30px,3.6vw,44px)] leading-[1.08] font-bold tracking-[-0.024em]">
                  Portals and platforms we have built
                </h2>
              </div>
              <Link className="text-[15px] font-semibold text-brand" href="/work">
                All case studies →
              </Link>
            </div>
            <div className="mt-[40px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[24px]">
              <Link className="flex flex-col gap-[18px]" href="/work/digestivecare">
                <ProjectThumb slug="digestivecare" />
                <div>
                  <div className="text-[13px] font-semibold text-faint">
                    Digestive Care · Healthcare, Florida US
                  </div>
                  <h3 className="mt-[8px] text-[21px] leading-[1.3] font-[680] tracking-[-0.01em]">
                    A website with an integrated patient portal
                  </h3>
                </div>
              </Link>
              <Link className="flex flex-col gap-[18px]" href="/work/verdira">
                <ProjectThumb slug="verdira" />
                <div>
                  <div className="text-[13px] font-semibold text-faint">Verdira · Practice partner, US</div>
                  <h3 className="mt-[8px] text-[21px] leading-[1.3] font-[680] tracking-[-0.01em]">
                    Secure, password-protected client areas
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-[56px]">
            <div className="flex-[1_1_320px]">
              <div className="text-[14px] font-semibold text-brand">FAQ</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.06] font-bold tracking-[-0.026em]">
                Questions about dashboards and portals.
              </h2>
              <p className="mt-[16px] text-[16px] leading-[1.6] text-muted">
                Something else?{" "}
                <Link className="font-semibold text-brand" href="/contact">
                  Ask us directly.
                </Link>
              </p>
            </div>
            <div className="flex-[1.4_1_480px] border-t border-t-line">
              <details className="group border-b border-b-line py-[22px]" open>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  What is a client portal?
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
                  A client portal is a secure area of your website where each client signs in to see their own
                  projects, files, invoices or messages — instead of asking your team by email.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Can you connect a dashboard to our existing data?
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
                  Yes. Dashboards read from the tools and databases you already use, so numbers update on
                  their own rather than being copied into spreadsheets.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Can you redesign a dashboard we already have?
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
                  Yes. We start with the questions each role needs answered, then rebuild the screens around
                  those answers and test them with your team before launch.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Is client data secure?
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
                  Access is checked on the server for every request, each user only sees their own data, and
                  sign-in follows current security practice. A hidden link alone never protects content.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Need one place for your data?"
        text="Tell us what your team checks every day. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
