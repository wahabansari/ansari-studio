import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectThumb } from "@/components/design/ProjectThumb";

export const metadata: Metadata = {
  title: { absolute: "Ansari Studio | Engineering & Automation for Growing Teams" },
  description:
    "Founder-led studio that builds web products, modernizes slow software and automates repetitive work with n8n and AI. Book a free automation audit.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <main id="main">
        <section className="relative overflow-hidden bg-night pb-[104px] text-white">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_35%,transparent_100%)] bg-size-[56px_56px]"
            aria-hidden="true"
          />
          <div
            className="absolute top-[-320px] left-[50%] h-[700px] w-[1200px] [transform:translateX(-50%)] bg-[radial-gradient(closest-side,rgba(46,79,227,0.42),rgba(46,79,227,0))]"
            aria-hidden="true"
          />
          <div aria-hidden="true" className="h-[84px]" />
          <div className="relative z-[2] mx-auto max-w-[1200px] px-[24px] pt-[88px] text-center">
            <a
              className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] py-[5px] pr-[14px] pl-[5px] text-[13px] font-medium text-haze"
              href="#audit"
            >
              <span className="rounded-full bg-mint px-[10px] py-[3px] text-[12px] font-[650] text-[#05221F]">
                Free
              </span>
              Automation audit for our first clients
              <svg
                width="14"
                height="14"
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
            </a>
            <h1 className="mx-auto mt-[28px] max-w-[1000px] text-[length:clamp(46px,6.6vw,88px)] leading-[0.98] font-bold tracking-[-0.03em] text-white">
              Build better products.
              <br />
              <span className="text-brand-300">Run smarter businesses.</span>
            </h1>
            <p className="mx-auto mt-[28px] max-w-[640px] text-[19px] leading-[1.6] tracking-normal text-mist">
              Ansari Studio is a founder-led software and automation studio. We build web products, modernize
              slow software and automate repetitive work with AI — for founders and growing teams in the UK
              and US.
            </p>
            <div className="mt-[36px] flex flex-wrap justify-center gap-[12px]">
              <Link
                className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] bg-brand px-[24px] text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(46,79,227,0.8)]"
                href="/contact"
              >
                Discuss your project{" "}
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
              <a
                className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-[24px] text-[15px] font-semibold text-white"
                href="#audit"
              >
                Get a free automation audit
              </a>
            </div>
            <div className="mt-[28px] flex flex-wrap justify-center gap-[24px] text-[14px] text-mist">
              <span className="inline-flex items-center gap-[8px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#62DCCB"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Clear scope
              </span>
              <span className="inline-flex items-center gap-[8px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#62DCCB"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Thoughtful engineering
              </span>
              <span className="inline-flex items-center gap-[8px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#62DCCB"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Transparent delivery
              </span>
            </div>
          </div>
          {/* product visual */}
          <div className="relative z-[2] mx-auto mt-[80px] max-w-[1120px] px-[24px]">
            <div className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] p-[8px] shadow-[0_40px_120px_-40px_rgba(46,79,227,0.55)]">
              <div className="overflow-hidden rounded-[15px] border border-[rgba(255,255,255,0.07)] bg-panel text-left">
                <div className="flex h-[46px] items-center justify-between border-b border-b-[rgba(255,255,255,0.06)] px-[16px]">
                  <div className="flex gap-[7px]">
                    <span className="h-[10px] w-[10px] rounded-full bg-[#2B364A]" />
                    <span className="h-[10px] w-[10px] rounded-full bg-[#2B364A]" />
                    <span className="h-[10px] w-[10px] rounded-full bg-[#2B364A]" />
                  </div>
                  <div className="font-mono text-[12px] text-steel">lead-follow-up.workflow</div>
                  <div className="inline-flex items-center gap-[7px] rounded-full bg-[rgba(98,220,203,0.1)] px-[10px] py-[4px] text-[12px] font-semibold text-mint">
                    <span className="h-[6px] w-[6px] rounded-full bg-mint" />
                    Active
                  </div>
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_300px] max-[900px]:grid-cols-[minmax(0,1fr)]">
                  <div className="overflow-x-auto bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[20px_20px] px-[36px] py-[48px]">
                    <div className="flex min-w-[660px] items-center">
                      <div className="w-[190px] flex-none rounded-[14px] border border-edge bg-raised p-[14px]">
                        <div className="flex items-center gap-[10px]">
                          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[rgba(143,163,255,0.12)] text-brand-300">
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
                              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              <path d="M16 13H8" />
                              <path d="M16 17H8" />
                            </svg>
                          </span>
                          <span className="text-[11px] font-semibold tracking-[0.06em] text-[#7D89A3] uppercase">
                            Trigger
                          </span>
                        </div>
                        <div className="mt-[12px] text-[14px] font-semibold text-white">Form submitted</div>
                        <div className="mt-[3px] text-[12px] text-[#8B96AD]">Website contact form</div>
                      </div>
                      <div
                        className="h-0 min-w-[28px] flex-1 border-t-[1.5px] border-dashed border-t-[#3B4A6B]"
                        aria-hidden="true"
                      />
                      <div className="w-[200px] flex-none rounded-[14px] border border-brand bg-raised p-[14px] shadow-[0_0_0_4px_rgba(46,79,227,0.18)]">
                        <div className="flex items-center gap-[10px]">
                          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[rgba(98,220,203,0.12)] text-mint">
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
                              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                            </svg>
                          </span>
                          <span className="text-[11px] font-semibold tracking-[0.06em] text-[#7D89A3] uppercase">
                            Process · AI
                          </span>
                        </div>
                        <div className="mt-[12px] text-[14px] font-semibold text-white">
                          Qualify and summarise
                        </div>
                        <div className="mt-[3px] text-[12px] text-[#8B96AD]">
                          Workflow + AI picks the owner
                        </div>
                      </div>
                      <div
                        className="h-0 min-w-[28px] flex-1 border-t-[1.5px] border-dashed border-t-[#3B4A6B]"
                        aria-hidden="true"
                      />
                      <div className="flex flex-none flex-col gap-[14px]">
                        <div className="w-[190px] rounded-[14px] border border-edge bg-raised p-[14px]">
                          <div className="flex items-center gap-[10px]">
                            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[rgba(143,163,255,0.12)] text-brand-300">
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
                                <ellipse cx="12" cy="5" rx="9" ry="3" />
                                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                                <path d="M3 12A9 3 0 0 0 21 12" />
                              </svg>
                            </span>
                            <span className="text-[11px] font-semibold tracking-[0.06em] text-[#7D89A3] uppercase">
                              Outcome
                            </span>
                          </div>
                          <div className="mt-[12px] text-[14px] font-semibold text-white">
                            CRM record updated
                          </div>
                        </div>
                        <div className="w-[190px] rounded-[14px] border border-edge bg-raised p-[14px]">
                          <div className="flex items-center gap-[10px]">
                            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[rgba(143,163,255,0.12)] text-brand-300">
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
                                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                              </svg>
                            </span>
                            <span className="text-[11px] font-semibold tracking-[0.06em] text-[#7D89A3] uppercase">
                              Outcome
                            </span>
                          </div>
                          <div className="mt-[12px] text-[14px] font-semibold text-white">Owner notified</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] border-l border-l-[rgba(255,255,255,0.06)] p-[24px]">
                    <div className="text-[12px] font-semibold tracking-[0.06em] text-steel uppercase">
                      Run log
                    </div>
                    <div className="flex items-start gap-[10px] text-[13px] text-haze">
                      <svg
                        className="mt-[1px] flex-none"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#62DCCB"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      New enquiry received
                    </div>
                    <div className="flex items-start gap-[10px] text-[13px] text-haze">
                      <svg
                        className="mt-[1px] flex-none"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#62DCCB"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Lead summarised by AI
                    </div>
                    <div className="flex items-start gap-[10px] text-[13px] text-haze">
                      <svg
                        className="mt-[1px] flex-none"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#62DCCB"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Contact created in the CRM
                    </div>
                    <div className="flex items-start gap-[10px] text-[13px] text-haze">
                      <span
                        className="flex h-[16px] w-[16px] flex-none items-center justify-center"
                        aria-hidden="true"
                      >
                        <span className="h-[8px] w-[8px] rounded-full bg-brand-300 shadow-[0_0_0_4px_rgba(143,163,255,0.18)]" />
                      </span>
                      Notifying the owner…
                    </div>
                    <div className="mt-auto border-t border-t-[rgba(255,255,255,0.06)] pt-[16px] text-[12px] text-steel">
                      Illustrative workflow, not client work.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-b border-b-line-soft py-[56px]">
          <p className="px-[24px] text-center text-[13px] font-medium text-faint">
            We connect the tools your team already uses
          </p>
          <div className="group mt-[26px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-[none]">
              <ul className="flex list-none items-center gap-[14px] px-[7px]">
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
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
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </span>
                  Web forms
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
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
                      <circle cx="12" cy="12" r="1" />
                      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                    </svg>
                  </span>
                  Spreadsheets
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
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
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M9 13h6" />
                      <path d="M12 13v5" />
                    </svg>
                  </span>
                  Documents
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-teal">
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
                      <rect width="8" height="8" x="3" y="3" rx="2" />
                      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                      <rect width="8" height="8" x="13" y="13" rx="2" />
                    </svg>
                  </span>
                  Workflows
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-teal">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  CRM
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-teal">
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
                      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                    </svg>
                  </span>
                  Sales pipeline
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-teal">
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
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  Team chat
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
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
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </span>
                  Cloud storage
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
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
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    </svg>
                  </span>
                  AI models
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
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
                      <path d="M12 8V4H8" />
                      <rect width="16" height="12" x="4" y="8" rx="2" />
                      <path d="M2 14h2" />
                      <path d="M20 14h2" />
                      <path d="M15 13v2" />
                      <path d="M9 13v2" />
                    </svg>
                  </span>
                  Chatbots
                </li>
              </ul>
              <ul className="flex list-none items-center gap-[14px] px-[7px]" aria-hidden="true">
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </span>
                  Web forms
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                    </svg>
                  </span>
                  Spreadsheets
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M9 13h6" />
                      <path d="M12 13v5" />
                    </svg>
                  </span>
                  Documents
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-teal">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="8" height="8" x="3" y="3" rx="2" />
                      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                      <rect width="8" height="8" x="13" y="13" rx="2" />
                    </svg>
                  </span>
                  Workflows
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-teal">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  CRM
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-teal">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                    </svg>
                  </span>
                  Sales pipeline
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-teal">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  Team chat
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </span>
                  Cloud storage
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    </svg>
                  </span>
                  AI models
                </li>
                <li className="inline-flex items-center gap-[10px] rounded-full border border-line bg-subtle py-[10px] pr-[18px] pl-[10px] text-[16px] font-semibold tracking-normal whitespace-nowrap text-ink">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line bg-white text-brand">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 8V4H8" />
                      <rect width="16" height="12" x="4" y="8" rx="2" />
                      <path d="M2 14h2" />
                      <path d="M20 14h2" />
                      <path d="M15 13v2" />
                      <path d="M9 13v2" />
                    </svg>
                  </span>
                  Chatbots
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-[24px]">
              <div className="max-w-[640px]">
                <div className="text-[14px] font-semibold text-brand">Services</div>
                <h2 className="mt-[14px] text-[length:clamp(34px,4.2vw,54px)] leading-[1.04] font-bold tracking-[-0.026em] text-ink">
                  Build, improve and connect the software you rely on.
                </h2>
              </div>
              <Link
                className="inline-flex h-[44px] items-center gap-[8px] rounded-[12px] border border-line-strong px-[18px] text-[14px] font-semibold text-ink"
                href="/services"
              >
                All services{" "}
                <svg
                  width="15"
                  height="15"
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
            </div>
            <div className="mt-[56px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              {/* Connect (lead) */}
              <Link
                className="col-span-2 flex min-h-[380px] flex-col justify-between gap-[36px] overflow-hidden rounded-[24px] border border-line bg-subtle p-[32px] max-[900px]:col-auto"
                href="/services/automation-ai"
              >
                <div>
                  <div className="inline-flex items-center gap-[8px] rounded-full bg-teal-50 px-[11px] py-[5px] text-[12px] font-semibold text-teal-deep">
                    Connect · Automation &amp; AI
                  </div>
                  <h3 className="mt-[18px] text-[28px] leading-[1.15] font-[680] tracking-[-0.016em] text-ink">
                    Your team stops doing the repetitive work.
                  </h3>
                  <p className="mt-[10px] max-w-[480px] text-[16px] leading-[1.6] text-muted">
                    Enquiries get answered, records stay current and reports arrive on their own — nobody
                    copy-pastes between tools.
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-[10px]">
                    <div className="rounded-[14px] border border-line-strong bg-white p-[16px] shadow-[0_1px_2px_rgba(10,16,34,0.05)]">
                      <span className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <div className="mt-[12px] text-[15px] font-[650] tracking-normal text-ink">
                        Every enquiry gets a reply
                      </div>
                      <div className="mt-[3px] text-[13px] text-muted">Nothing waits in an inbox.</div>
                    </div>
                    <div className="rounded-[14px] border border-line-strong bg-white p-[16px] shadow-[0_1px_2px_rgba(10,16,34,0.05)]">
                      <span className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <div className="mt-[12px] text-[15px] font-[650] tracking-normal text-ink">
                        Records stay up to date
                      </div>
                      <div className="mt-[3px] text-[13px] text-muted">The right owner, every time.</div>
                    </div>
                    <div className="rounded-[14px] border border-line-strong bg-white p-[16px] shadow-[0_1px_2px_rgba(10,16,34,0.05)]">
                      <span className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <div className="mt-[12px] text-[15px] font-[650] tracking-normal text-ink">
                        Reports build themselves
                      </div>
                      <div className="mt-[3px] text-[13px] text-muted">
                        Ready before Monday&apos;s meeting.
                      </div>
                    </div>
                  </div>
                  <span className="mt-[18px] inline-flex items-center gap-[6px] text-[14px] font-semibold text-brand">
                    See what we automate{" "}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </div>
              </Link>
              {/* Build */}
              <Link
                className="flex min-h-[380px] flex-col gap-[24px] overflow-hidden rounded-[24px] border border-ink bg-ink p-[32px] text-white"
                href="/services/product-engineering"
              >
                <div>
                  <div className="inline-flex items-center gap-[8px] rounded-full bg-[rgba(143,163,255,0.14)] px-[11px] py-[5px] text-[12px] font-semibold text-brand-200">
                    Build · Product engineering
                  </div>
                  <h3 className="mt-[18px] text-[24px] leading-[1.2] font-[680] tracking-[-0.016em] text-white">
                    Ship the product your business needs.
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.6] text-mist">
                    MVPs, SaaS features and web apps — scoped clearly, built to last.
                  </p>
                </div>
                <div
                  className="mt-auto rounded-[14px] border border-edge bg-raised px-[18px] py-[16px] font-mono text-[12.5px] leading-[1.75] text-haze"
                  aria-hidden="true"
                >
                  <div>
                    <span className="text-brand-300">export default</span>{" "}
                    <span className="text-mint">async function</span> Page() {"{"}
                  </div>
                  <div className="pl-[16px]">
                    <span className="text-brand-300">const</span> data ={" "}
                    <span className="text-mint">await</span> getProjects();
                  </div>
                  <div className="pl-[16px]">
                    <span className="text-brand-300">return</span> &lt;Dashboard data={"{"}data{"}"} /&gt;;
                  </div>
                  <div>{"}"}</div>
                </div>
              </Link>
              {/* Improve */}
              <Link
                className="flex min-h-[360px] flex-col gap-[24px] rounded-[24px] border border-line bg-subtle p-[32px]"
                href="/services/modernization"
              >
                <div>
                  <div className="inline-flex items-center gap-[8px] rounded-full bg-brand-50 px-[11px] py-[5px] text-[12px] font-semibold text-brand">
                    Improve · Modernization
                  </div>
                  <h3 className="mt-[18px] text-[22px] leading-[1.2] font-[680] tracking-[-0.016em] text-ink">
                    Make existing software faster.
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.6] text-muted">
                    Measure first, then move ageing software to a modern platform in low-risk steps.
                  </p>
                </div>
                <div className="mt-auto rounded-[16px] border border-line-strong bg-white p-[18px] shadow-[0_1px_2px_rgba(10,16,34,0.04)]">
                  <div className="flex items-end justify-between gap-[12px] border-b border-b-line-soft pb-[14px]">
                    <div>
                      <div className="text-[12px] font-semibold text-faint">Sunhub marketplace</div>
                      <div className="mt-[4px] text-[34px] leading-[1] font-[750] tracking-[-0.02em] text-ink">
                        +30%
                      </div>
                      <div className="mt-[4px] text-[12.5px] text-muted">
                        faster, measured before vs after
                      </div>
                    </div>
                    <svg width="72" height="40" viewBox="0 0 72 40" aria-hidden="true">
                      <path
                        d="M2 34 L16 30 L28 31 L40 22 L52 18 L70 6"
                        fill="none"
                        stroke="#2E4FE3"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="70" cy="6" r="3.5" fill="#2E4FE3" />
                    </svg>
                  </div>
                  <div className="mt-[14px] flex flex-col gap-[12px]">
                    <div>
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="font-semibold text-ink">Page load speed</span>
                        <span className="inline-flex items-center gap-[5px] rounded-full bg-teal-50 px-[8px] py-[2px] text-[11.5px] font-[650] text-teal-deep">
                          <span className="h-[5px] w-[5px] rounded-full bg-teal" />
                          Good
                        </span>
                      </div>
                      <div
                        className="mt-[7px] h-[6px] overflow-hidden rounded-full bg-line-soft"
                        aria-hidden="true"
                      >
                        <div className="h-full w-[88%] rounded-full bg-[linear-gradient(90deg,#087F73,#62DCCB)]" />
                      </div>
                      <div className="mt-[4px] text-[11.5px] text-faint">Main content appears quickly</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="font-semibold text-ink">Response to taps</span>
                        <span className="inline-flex items-center gap-[5px] rounded-full bg-teal-50 px-[8px] py-[2px] text-[11.5px] font-[650] text-teal-deep">
                          <span className="h-[5px] w-[5px] rounded-full bg-teal" />
                          Good
                        </span>
                      </div>
                      <div
                        className="mt-[7px] h-[6px] overflow-hidden rounded-full bg-line-soft"
                        aria-hidden="true"
                      >
                        <div className="h-full w-[82%] rounded-full bg-[linear-gradient(90deg,#087F73,#62DCCB)]" />
                      </div>
                      <div className="mt-[4px] text-[11.5px] text-faint">Clicks react without delay</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="font-semibold text-ink">Layout stability</span>
                        <span className="inline-flex items-center gap-[5px] rounded-full bg-teal-50 px-[8px] py-[2px] text-[11.5px] font-[650] text-teal-deep">
                          <span className="h-[5px] w-[5px] rounded-full bg-teal" />
                          Good
                        </span>
                      </div>
                      <div
                        className="mt-[7px] h-[6px] overflow-hidden rounded-full bg-line-soft"
                        aria-hidden="true"
                      >
                        <div className="h-full w-[94%] rounded-full bg-[linear-gradient(90deg,#087F73,#62DCCB)]" />
                      </div>
                      <div className="mt-[4px] text-[11.5px] text-faint">Nothing jumps while loading</div>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Dashboards */}
              <Link
                className="flex min-h-[360px] flex-col gap-[24px] rounded-[24px] border border-line bg-subtle p-[32px]"
                href="/services/dashboards-portals"
              >
                <div>
                  <div className="inline-flex items-center gap-[8px] rounded-full bg-brand-50 px-[11px] py-[5px] text-[12px] font-semibold text-brand">
                    Dashboards &amp; portals
                  </div>
                  <h3 className="mt-[18px] text-[22px] leading-[1.2] font-[680] tracking-[-0.016em] text-ink">
                    Tools your team will actually use.
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.6] text-muted">
                    Admin panels, client portals and internal dashboards connected to your data.
                  </p>
                </div>
                <div className="mt-auto rounded-[16px] border border-line-strong bg-white p-[18px] shadow-[0_1px_2px_rgba(10,16,34,0.04)]">
                  <div className="flex items-start justify-between gap-[12px]">
                    <div>
                      <div className="text-[12px] font-semibold text-faint">Orders this quarter</div>
                      <div className="mt-[4px] flex items-baseline gap-[8px]">
                        <span className="text-[26px] leading-[1] font-[750] tracking-[-0.02em] text-ink">
                          1,284
                        </span>
                        <span className="rounded-full bg-teal-50 px-[8px] py-[2px] text-[11.5px] font-[650] text-teal-deep">
                          ▲ 12%
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex rounded-[8px] border border-line bg-subtle p-[3px] text-[11px] font-semibold">
                      <span className="rounded-[6px] bg-white px-[8px] py-[3px] text-ink shadow-[0_1px_2px_rgba(10,16,34,0.08)]">
                        Week
                      </span>
                      <span className="px-[8px] py-[3px] text-faint">Month</span>
                    </div>
                  </div>
                  <svg
                    className="mt-[12px] block"
                    viewBox="0 0 300 110"
                    width="100%"
                    height="110"
                    role="img"
                    aria-label="Sample line chart of orders rising over six weeks"
                  >
                    <defs>
                      <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#2E4FE3" stopOpacity="0.22" />
                        <stop offset="1" stopColor="#2E4FE3" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <g stroke="#EEF1F5" strokeWidth="1">
                      <line x1="0" y1="10" x2="300" y2="10" />
                      <line x1="0" y1="40" x2="300" y2="40" />
                      <line x1="0" y1="70" x2="300" y2="70" />
                      <line x1="0" y1="96" x2="300" y2="96" />
                    </g>
                    <path
                      d="M0 82 L50 74 L100 78 L150 56 L200 50 L250 34 L300 20 L300 96 L0 96 Z"
                      fill="url(#dashArea)"
                    />
                    <path
                      d="M0 88 L50 84 L100 86 L150 76 L200 72 L250 66 L300 58"
                      fill="none"
                      stroke="#B9C8FB"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M0 82 L50 74 L100 78 L150 56 L200 50 L250 34 L300 20"
                      fill="none"
                      stroke="#2E4FE3"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <line
                      x1="250"
                      y1="34"
                      x2="250"
                      y2="96"
                      stroke="#2E4FE3"
                      strokeWidth="1"
                      strokeDasharray="2 3"
                    />
                    <circle cx="250" cy="34" r="5" fill="#FFFFFF" stroke="#2E4FE3" strokeWidth="2.5" />
                    <rect x="196" y="2" width="72" height="22" rx="6" fill="#0A1022" />
                    <text x="232" y="17" textAnchor="middle" fontSize="11" fontWeight="600" fill="#FFFFFF">
                      Week 6 · 248
                    </text>
                  </svg>
                  <div className="mt-[6px] flex justify-between text-[11px] text-faint">
                    <span>W1</span>
                    <span>W2</span>
                    <span>W3</span>
                    <span>W4</span>
                    <span>W5</span>
                    <span>W6</span>
                    <span>W7</span>
                  </div>
                  <div className="mt-[10px] flex gap-[14px] text-[11.5px] text-muted">
                    <span className="inline-flex items-center gap-[6px]">
                      <span className="h-[3px] w-[10px] rounded-[2px] bg-brand" />
                      This quarter
                    </span>
                    <span className="inline-flex items-center gap-[6px]">
                      <span className="h-0 w-[10px] border-t-[2px] border-dashed border-t-brand-200" />
                      Last quarter
                    </span>
                    <span className="ml-auto text-faint">Sample data</span>
                  </div>
                </div>
              </Link>
              {/* Retainer */}
              <Link
                className="flex min-h-[360px] flex-col gap-[24px] rounded-[24px] border border-line bg-subtle p-[32px]"
                href="/services/maintenance-retainer"
              >
                <div>
                  <div className="inline-flex items-center gap-[8px] rounded-full bg-brand-50 px-[11px] py-[5px] text-[12px] font-semibold text-brand">
                    Maintenance &amp; retainer
                  </div>
                  <h3 className="mt-[18px] text-[22px] leading-[1.2] font-[680] tracking-[-0.016em] text-ink">
                    One engineer who knows your code.
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.6] text-muted">
                    Predictable monthly hours for updates, fixes and small features.
                  </p>
                </div>
                <div className="mt-auto rounded-[16px] border border-line-strong bg-white p-[18px] shadow-[0_1px_2px_rgba(10,16,34,0.04)]">
                  <div className="flex items-center justify-between pb-[12px]">
                    <span className="text-[12px] font-semibold text-faint">This month</span>
                    <span className="text-[12px] font-[650] text-ink">14 of 20 hours</span>
                  </div>
                  <div
                    className="mb-[6px] h-[6px] overflow-hidden rounded-full bg-line-soft"
                    aria-hidden="true"
                  >
                    <div className="h-full w-[70%] rounded-full bg-brand" />
                  </div>
                  <div className="flex items-center justify-between gap-[10px] border-t border-t-line-soft py-[10px] text-[13px]">
                    <span className="flex items-center gap-[9px] font-[550] text-ink">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#087F73"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Security updates
                    </span>
                    <span className="rounded-full bg-teal-50 px-[8px] py-[2px] text-[11.5px] font-[650] text-teal-deep">
                      Done
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-[10px] border-t border-t-line-soft py-[10px] text-[13px]">
                    <span className="flex items-center gap-[9px] font-[550] text-ink">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#087F73"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Uptime monitoring
                    </span>
                    <span className="rounded-full bg-teal-50 px-[8px] py-[2px] text-[11.5px] font-[650] text-teal-deep">
                      Live
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-[10px] border-t border-t-line-soft py-[10px] text-[13px]">
                    <span className="flex items-center gap-[9px] font-[550] text-ink">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#087F73"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Faster search page
                    </span>
                    <span className="rounded-full bg-brand-50 px-[8px] py-[2px] text-[11.5px] font-[650] text-brand">
                      Shipped
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="px-[24px] pb-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-[24px]">
              <div className="max-w-[640px]">
                <div className="text-[14px] font-semibold text-brand">Recent work</div>
                <h2 className="mt-[14px] text-[length:clamp(34px,4.2vw,54px)] leading-[1.06] font-bold tracking-[-0.026em] text-ink">
                  Results we can show you.
                </h2>
                <p className="mt-[14px] text-[17px] leading-[1.6] text-muted">
                  Marketplaces, client platforms and healthcare websites for businesses in the United States,
                  the United Kingdom and Australia.
                </p>
              </div>
              <Link
                className="inline-flex h-[44px] items-center gap-[8px] rounded-[12px] border border-line-strong px-[18px] text-[14px] font-semibold text-ink"
                href="/work"
              >
                All case studies{" "}
                <svg
                  width="15"
                  height="15"
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
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[24px]">
              <Link className="flex flex-col gap-[18px]" href="/work/sunhub">
                <ProjectThumb slug="sunhub" />
                <div>
                  <div className="text-[13px] font-semibold text-faint">Sunhub · Solar marketplace, US</div>
                  <h3 className="mt-[8px] text-[21px] leading-[1.3] font-[680] tracking-[-0.01em]">
                    30% faster marketplace, without a rewrite
                  </h3>
                </div>
              </Link>
              <Link className="flex flex-col gap-[18px]" href="/work/verdira">
                <ProjectThumb slug="verdira" />
                <div>
                  <div className="text-[13px] font-semibold text-faint">Verdira · Practice partner, US</div>
                  <h3 className="mt-[8px] text-[21px] leading-[1.3] font-[680] tracking-[-0.01em]">
                    From brochure site to secure client platform
                  </h3>
                </div>
              </Link>
              <Link className="flex flex-col gap-[18px]" href="/work/aussiemotor">
                <ProjectThumb slug="aussiemotor" />
                <div>
                  <div className="text-[13px] font-semibold text-faint">
                    AussieMotor · Car marketplace, Australia
                  </div>
                  <h3 className="mt-[8px] text-[21px] leading-[1.3] font-[680] tracking-[-0.01em]">
                    A large marketplace moved to a modern platform
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="border-t border-b border-t-line-soft border-b-line-soft bg-subtle px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-[24px]">
              <div className="max-w-[620px]">
                <div className="text-[14px] font-semibold text-brand">Process</div>
                <h2 className="mt-[14px] text-[length:clamp(34px,4.2vw,54px)] leading-[1.04] font-bold tracking-[-0.026em] text-ink">
                  From first call to clean handover.
                </h2>
                <p className="mt-[16px] text-[17px] leading-[1.6] text-muted">
                  Every step ends with something you can see, check and keep.
                </p>
              </div>
              <Link
                className="inline-flex items-center gap-[8px] text-[15px] font-semibold text-brand"
                href="/process"
              >
                See how we work{" "}
                <svg
                  width="15"
                  height="15"
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
            </div>
            <div
              className="mt-[56px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:hidden! max-[900px]:grid-cols-[minmax(0,1fr)]"
              aria-hidden="true"
            >
              <div className="flex items-center gap-[12px]">
                <span className="h-[12px] w-[12px] flex-none rounded-full bg-brand shadow-[0_0_0_5px_rgba(46,79,227,0.15)]" />
                <span className="h-[2px] flex-1 rounded-[2px] bg-[linear-gradient(90deg,#2E4FE3,#B9C8FB)]" />
              </div>
              <div className="flex items-center gap-[12px]">
                <span className="h-[12px] w-[12px] flex-none rounded-full bg-brand shadow-[0_0_0_5px_rgba(46,79,227,0.15)]" />
                <span className="h-[2px] flex-1 rounded-[2px] bg-[linear-gradient(90deg,#2E4FE3,#B9C8FB)]" />
              </div>
              <div className="flex items-center gap-[12px]">
                <span className="h-[12px] w-[12px] flex-none rounded-full bg-brand shadow-[0_0_0_5px_rgba(46,79,227,0.15)]" />
                <span className="h-[2px] flex-1 rounded-[2px] bg-[linear-gradient(90deg,#2E4FE3,#B9C8FB)]" />
              </div>
              <div className="flex items-center gap-[12px]">
                <span className="h-[12px] w-[12px] flex-none rounded-full bg-mint shadow-[0_0_0_5px_rgba(98,220,203,0.2)]" />
                <span className="h-[2px] flex-1 rounded-[2px] bg-transparent" />
              </div>
            </div>
            <ol className="mt-[20px] grid list-none grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <li className="flex flex-col rounded-[24px] border border-line bg-white p-[28px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-medium text-brand">Step 01</span>
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-brand-50 text-brand">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-[24px] text-[20px] font-[680] tracking-[-0.012em] text-ink">Discovery</h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  We learn the problem, the people involved and what success looks like.
                </p>
                <div className="mt-auto pt-[24px]">
                  <div className="rounded-[14px] border border-teal-100 bg-teal-50 px-[16px] py-[14px]">
                    <div className="text-[12px] font-semibold tracking-[0.06em] text-teal-deep uppercase">
                      You get
                    </div>
                    <div className="mt-[6px] text-[15px] leading-[1.4] font-[650] tracking-normal text-ink">
                      A clear problem statement and success measures
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex flex-col rounded-[24px] border border-line bg-white p-[28px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-medium text-brand">Step 02</span>
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-brand-50 text-brand">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="m9 15 2 2 4-4" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-[24px] text-[20px] font-[680] tracking-[-0.012em] text-ink">
                  Written scope
                </h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  Deliverables, assumptions and exclusions — agreed before we build.
                </p>
                <div className="mt-auto pt-[24px]">
                  <div className="rounded-[14px] border border-teal-100 bg-teal-50 px-[16px] py-[14px]">
                    <div className="text-[12px] font-semibold tracking-[0.06em] text-teal-deep uppercase">
                      You get
                    </div>
                    <div className="mt-[6px] text-[15px] leading-[1.4] font-[650] tracking-normal text-ink">
                      A fixed scope and estimate, with no surprises
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex flex-col rounded-[24px] border border-line bg-white p-[28px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-medium text-brand">Step 03</span>
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-brand-50 text-brand">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-[24px] text-[20px] font-[680] tracking-[-0.012em] text-ink">
                  Build with weekly demos
                </h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  Small steps you can see and test, so feedback lands early.
                </p>
                <div className="mt-auto pt-[24px]">
                  <div className="rounded-[14px] border border-teal-100 bg-teal-50 px-[16px] py-[14px]">
                    <div className="text-[12px] font-semibold tracking-[0.06em] text-teal-deep uppercase">
                      You get
                    </div>
                    <div className="mt-[6px] text-[15px] leading-[1.4] font-[650] tracking-normal text-ink">
                      Working software to try every week
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex flex-col rounded-[24px] border border-ink bg-ink p-[28px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-medium text-mint">Step 04</span>
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[rgba(98,220,203,0.12)] text-mint">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-[24px] text-[20px] font-[680] tracking-[-0.012em] text-white">Handover</h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-mist">
                  Code, documentation and a walkthrough for your team.
                </p>
                <div className="mt-auto pt-[24px]">
                  <div className="rounded-[14px] border border-[rgba(98,220,203,0.25)] bg-[rgba(98,220,203,0.1)] px-[16px] py-[14px]">
                    <div className="text-[12px] font-semibold tracking-[0.06em] text-mint uppercase">
                      You get
                    </div>
                    <div className="mt-[6px] text-[15px] leading-[1.4] font-[650] tracking-normal text-white">
                      A product your team owns and can run
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="px-[24px] py-[112px]" id="audit">
          <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-brand p-[56px] text-white">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_80%_at_100%_0%,#000_20%,transparent_75%)] bg-size-[44px_44px]"
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-[repeat(2,minmax(0,1fr))] items-center gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div>
                <div className="text-[14px] font-semibold text-brand-ice">Free automation audit</div>
                <h2 className="mt-[14px] text-[length:clamp(32px,3.8vw,48px)] leading-[1.06] font-bold tracking-[-0.024em] text-white">
                  Find the hours your team loses to manual work.
                </h2>
                <p className="mt-[18px] max-w-[480px] text-[17px] leading-[1.6] text-brand-ice">
                  A free 30-minute review of your tools and workflows. You leave with the three automations
                  worth building first.
                </p>
                <Link
                  className="mt-[32px] inline-flex h-[50px] items-center gap-[8px] rounded-[12px] bg-white px-[24px] text-[15px] font-semibold text-ink"
                  href="/automation-audit"
                >
                  Request your free audit{" "}
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
              </div>
              <div className="rounded-[20px] bg-white p-[28px] text-ink shadow-[0_30px_60px_-30px_rgba(7,11,22,0.6)]">
                <div className="text-[13px] font-semibold tracking-[0.04em] text-faint uppercase">
                  What you receive
                </div>
                <div className="mt-[20px] flex flex-col gap-[16px]">
                  <div className="flex items-start gap-[14px]">
                    <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[16px] font-semibold">A written report</div>
                      <div className="mt-[2px] text-[14px] text-muted">
                        Where time is lost across your tools today.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[14px]">
                    <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[16px] font-semibold">Your top 3 automations</div>
                      <div className="mt-[2px] text-[14px] text-muted">
                        Ranked by how much manual work they remove.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[14px]">
                    <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[16px] font-semibold">Effort and payback estimate</div>
                      <div className="mt-[2px] text-[14px] text-muted">
                        So you can decide what to build first.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[24px] border-t border-t-line-soft pt-[18px] text-[13px] text-faint">
                  30-minute call · Free for our first clients
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] pb-[112px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] items-stretch gap-[16px] rounded-[32px] border border-line bg-subtle p-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div className="relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-[24px] bg-ink p-[28px] text-white">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_30%,transparent_100%)] bg-size-[40px_40px]"
                aria-hidden="true"
              />
              <div
                className="absolute top-[42%] left-[50%] h-[420px] w-[520px] [transform:translate(-50%,-50%)] bg-[radial-gradient(closest-side,rgba(46,79,227,0.45),rgba(46,79,227,0))]"
                aria-hidden="true"
              />
              <div className="relative inline-flex items-center gap-[8px] self-start rounded-full border border-[rgba(98,220,203,0.25)] bg-[rgba(98,220,203,0.1)] px-[12px] py-[6px] text-[13px] font-semibold text-mint">
                <span className="h-[6px] w-[6px] rounded-full bg-mint" />
                Founder-led studio
              </div>
              <div className="relative flex flex-col items-center gap-[12px]">
                <Image
                  className="block h-[240px] w-[240px] rounded-full object-cover shadow-[0_0_0_6px_rgba(255,255,255,0.08),0_0_0_14px_rgba(255,255,255,0.03),0_30px_60px_-20px_rgba(0,0,0,0.6)]"
                  src="/images/founder.webp"
                  alt="Muhammad Wahab Ansari, founder of Ansari Studio"
                  width={560}
                  height={560}
                  sizes="280px"
                />
              </div>
              <div className="relative flex items-end justify-between gap-[16px]">
                <div>
                  <div className="text-[18px] font-[650] tracking-[-0.01em]">Muhammad Wahab Ansari</div>
                  <div className="mt-[3px] text-[14px] text-mist">Founder · Senior full-stack engineer</div>
                </div>
                <a
                  className="flex h-[40px] w-[40px] flex-none items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.14)] text-white"
                  href="https://www.linkedin.com/in/wahabansari/"
                  target="_blank"
                  rel="noopener me"
                  aria-label="Muhammad Wahab Ansari on LinkedIn"
                >
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
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center py-[32px] pr-[32px] pl-[40px]">
              <div className="text-[14px] font-semibold text-brand">Who you work with</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,3.8vw,48px)] leading-[1.06] font-bold tracking-[-0.026em] text-ink">
                The person you talk to is the person who <span className="text-brand">builds it.</span>
              </h2>
              <p className="mt-[18px] max-w-[500px] text-[17px] leading-[1.6] text-muted">
                No account managers and no hand-offs to juniors. A senior engineer with 5+ years of building
                production web applications scopes, builds and supports your project personally.
              </p>
              <ul className="mt-[28px] flex list-none flex-col gap-[16px]">
                <li className="flex items-start gap-[14px]">
                  <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[16px] font-[650] tracking-normal text-ink">
                      A reply within one business day
                    </span>
                    <span className="mt-[2px] block text-[14px] leading-[1.5] text-muted">
                      Questions never sit in a queue.
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-[14px]">
                  <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[16px] font-[650] tracking-normal text-ink">
                      Decisions made with you, not for you
                    </span>
                    <span className="mt-[2px] block text-[14px] leading-[1.5] text-muted">
                      You see trade-offs before they become costs.
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-[14px]">
                  <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-[8px] bg-teal-50 text-teal">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[16px] font-[650] tracking-normal text-ink">
                      Working hours that overlap the UK and US
                    </span>
                    <span className="mt-[2px] block text-[14px] leading-[1.5] text-muted">
                      Calls and demos at times that suit your team.
                    </span>
                  </span>
                </li>
              </ul>
              <div className="mt-[32px] flex flex-wrap gap-[12px]">
                <Link
                  className="inline-flex h-[48px] items-center gap-[8px] rounded-[12px] bg-ink px-[22px] text-[15px] font-semibold text-white"
                  href="/about"
                >
                  Meet the founder{" "}
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
                <Link
                  className="inline-flex h-[48px] items-center gap-[8px] rounded-[12px] border border-line-strong bg-white px-[22px] text-[15px] font-semibold text-ink"
                  href="/contact#book"
                >
                  Book a 30-minute call
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-t-line-soft bg-subtle px-[24px] py-[112px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] items-start gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <div className="text-[14px] font-semibold text-brand">FAQ</div>
              <h2 className="mt-[14px] text-[length:clamp(34px,4.2vw,54px)] leading-[1.06] font-bold tracking-[-0.026em] text-ink">
                Questions businesses ask before working with us.
              </h2>
              <p className="mt-[16px] text-[17px] leading-[1.6] text-muted">
                Straight answers. If yours is not here,{" "}
                <Link className="font-semibold text-brand" href="/contact">
                  ask us directly
                </Link>
                .
              </p>
            </div>
            <div className="border-t border-t-line-strong">
              <details className="group border-b border-b-line-strong py-[22px]" open>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[18px] font-[650] text-ink [&::-webkit-details-marker]:hidden">
                  What does Ansari Studio do?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full border border-line-strong bg-white [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
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
                  Ansari Studio is a founder-led software and automation studio. We build web applications,
                  dashboards and client portals, modernize slow or ageing software, and automate repetitive
                  business work with AI — for founders and growing teams in the UK and US.
                </p>
              </details>
              <details className="group border-b border-b-line-strong py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[18px] font-[650] text-ink [&::-webkit-details-marker]:hidden">
                  Who will actually work on my project?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full border border-line-strong bg-white [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
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
                  Muhammad Wahab Ansari, the founder — a senior engineer with more than five years of
                  production experience. The person you speak to is the person who scopes, builds and supports
                  your project.
                </p>
              </details>
              <details className="group border-b border-b-line-strong py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[18px] font-[650] text-ink [&::-webkit-details-marker]:hidden">
                  How much does a project cost?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full border border-line-strong bg-white [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
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
                  Every project is quoted as a fixed price after a short discovery call and a written scope,
                  so you know the cost before any work starts. Ongoing support is available as a predictable
                  monthly retainer.
                </p>
              </details>
              <details className="group border-b border-b-line-strong py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[18px] font-[650] text-ink [&::-webkit-details-marker]:hidden">
                  How long does a typical project take?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full border border-line-strong bg-white [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
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
                  It depends on scope, so the written scope includes a timeline with milestones. You see
                  working progress in a demo every week, which keeps the timeline honest.
                </p>
              </details>
              <details className="group border-b border-b-line-strong py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[18px] font-[650] text-ink [&::-webkit-details-marker]:hidden">
                  Do you work with clients in the UK and US?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full border border-line-strong bg-white [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
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
                  Yes. We work remotely from Lahore, Pakistan. Our projects so far have been for clients in
                  the United States, the United Kingdom and Australia, and we keep working hours that overlap
                  UK and US business time.
                </p>
              </details>
              <details className="group border-b border-b-line-strong py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[18px] font-[650] text-ink [&::-webkit-details-marker]:hidden">
                  What is the free automation audit?
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full border border-line-strong bg-white [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
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
                  A free 30-minute review of your tools and workflows, offered to our first clients. You
                  receive a written list of the three automations worth building first, with an effort
                  estimate for each.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <section className="relative overflow-hidden bg-night px-[24px] pt-[128px] text-white">
        <div
          className="absolute bottom-[-360px] left-[50%] h-[720px] w-[1200px] [transform:translateX(-50%)] bg-[radial-gradient(closest-side,rgba(46,79,227,0.35),rgba(46,79,227,0))]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[820px] text-center">
          <h2 className="text-[length:clamp(40px,5.6vw,72px)] leading-[1.0] font-bold tracking-[-0.03em] text-white">
            Tell us what you need to build.
          </h2>
          <p className="mx-auto mt-[24px] max-w-[560px] text-[18px] leading-[1.6] text-mist">
            Share what you want to build, improve or connect. You get a reply within one business day.
          </p>
          <div className="mt-[36px] flex flex-wrap justify-center gap-[12px]">
            <Link
              className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] bg-brand px-[24px] text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(46,79,227,0.8)]"
              href="/contact"
            >
              Discuss your project{" "}
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
            <Link
              className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-[24px] text-[15px] font-semibold text-white"
              href="/contact#book"
            >
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
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h18" />
              </svg>
              Book a 30-minute call
            </Link>
          </div>
        </div>
        <footer className="relative mx-auto mt-[128px] max-w-[1200px] border-t border-t-[rgba(255,255,255,0.08)] pt-[56px] pb-[32px]">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[40px] max-[900px]:grid-cols-[1fr_1fr]">
            <div>
              <Image
                className="block h-[24px] w-auto"
                src="/brand/logo-white.svg"
                alt="Ansari Studio"
                width={142}
                height={24}
              />
              <p className="mt-[18px] max-w-[300px] text-[14px] leading-[1.6] text-mist">
                We help growing businesses build, improve and connect the software they rely on.
              </p>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-white">Services</div>
              <div className="mt-[16px] flex flex-col gap-[11px] text-[14px] text-mist">
                <Link href="/services/automation-ai">Automation &amp; AI</Link>
                <Link href="/services/product-engineering">Product engineering</Link>
                <Link href="/services/dashboards-portals">Dashboards &amp; portals</Link>
                <Link href="/services/modernization">Modernization</Link>
                <Link href="/services/maintenance-retainer">Maintenance &amp; retainer</Link>
              </div>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-white">Studio</div>
              <div className="mt-[16px] flex flex-col gap-[11px] text-[14px] text-mist">
                <Link href="/work">Work</Link>
                <Link href="/process">Process</Link>
                <Link href="/about">About</Link>
                <Link href="/partners">Partners</Link>
                <Link href="/insights">Insights</Link>
              </div>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-white">Get started</div>
              <div className="mt-[16px] flex flex-col gap-[11px] text-[14px] text-mist">
                <Link href="/contact">Discuss your project</Link>
                <Link href="/automation-audit">Free automation audit</Link>
              </div>
            </div>
          </div>
          <div className="mt-[56px] flex flex-wrap justify-between gap-[16px] border-t border-t-[rgba(255,255,255,0.08)] pt-[24px] text-[13px] text-dim">
            <span>© 2026 Ansari Studio · Build. Improve. Connect.</span>
            <span className="flex gap-[24px]">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </span>
          </div>
        </footer>
      </section>
    </>
  );
}
