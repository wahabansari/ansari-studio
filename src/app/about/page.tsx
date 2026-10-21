import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";

export const metadata: Metadata = {
  title: { absolute: "About Muhammad Wahab Ansari, Founder | Ansari Studio" },
  description:
    "Senior full-stack engineer with 5+ years building React and Next.js products and n8n automations. Meet the founder behind Ansari Studio.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="about"
          parent=""
          crumb="About"
          eyebrow="Founder-led studio"
          title="A founder-led studio, with a senior engineer"
          titleAccent="on every project."
          lead="Ansari Studio is a software and automation studio run by Muhammad Wahab Ansari, a senior engineer in Lahore, Pakistan, who builds web products and business automations for founders and growing teams in the UK and US."
          primary="Book a 30-minute call"
          primaryHref="/contact"
          secondary="See our process"
          secondaryHref="/process"
          points=""
        />
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div className="sticky top-[24px] flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[28px] bg-ink p-[28px] text-white">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_30%,transparent_100%)] bg-size-[40px_40px]"
                aria-hidden="true"
              />
              <div
                className="absolute top-[42%] left-[50%] h-[420px] w-[520px] [transform:translate(-50%,-50%)] bg-[radial-gradient(closest-side,rgba(46,79,227,0.45),rgba(46,79,227,0))]"
                aria-hidden="true"
              />
              <span className="relative inline-flex items-center gap-[8px] self-start rounded-full border border-[rgba(98,220,203,0.25)] bg-[rgba(98,220,203,0.1)] px-[12px] py-[6px] text-[13px] font-semibold text-mint">
                <span className="h-[6px] w-[6px] rounded-full bg-mint" />
                Founder
              </span>
              <div className="relative flex justify-center">
                <Image
                  className="block aspect-[1] w-[280px] max-w-[80%] rounded-full object-cover shadow-[0_0_0_6px_rgba(255,255,255,0.08),0_0_0_14px_rgba(255,255,255,0.03),0_30px_60px_-20px_rgba(0,0,0,0.6)]"
                  src="/images/founder.webp"
                  alt="Muhammad Wahab Ansari, founder of Ansari Studio"
                  width={560}
                  height={560}
                  sizes="280px"
                />
              </div>
              <div className="relative">
                <div className="text-[20px] font-[680] tracking-[-0.01em]">Muhammad Wahab Ansari</div>
                <div className="mt-[4px] text-[14px] text-mist">Founder · Senior full-stack engineer</div>
                <a
                  className="mt-[16px] inline-flex h-[40px] items-center gap-[8px] rounded-[10px] border border-[rgba(255,255,255,0.14)] px-[14px] text-[14px] font-semibold"
                  href="https://www.linkedin.com/in/wahabansari/"
                  target="_blank"
                  rel="noopener me"
                >
                  LinkedIn{" "}
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
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <div className="text-[14px] font-semibold text-brand">Why Ansari Studio</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,48px)] leading-[1.06] font-bold tracking-[-0.026em]">
                Good software should make a business more capable, not more complicated.
              </h2>
              <p className="mt-[24px] text-[18px] leading-[1.75] text-prose">
                I have spent more than five years building production web applications — marketplaces, client
                platforms, online stores and healthcare websites for businesses in the United States, the
                United Kingdom and Australia. Before that, I designed interfaces and design systems, so I care
                about how software looks and feels as much as how it works.
              </p>
              <p className="mt-[16px] text-[18px] leading-[1.75] text-prose">
                Again and again I saw businesses paying for software they could not change, or losing hours
                every week to work a simple automation could do. I started Ansari Studio to fix that — with
                clear scopes, honest timelines and engineering that lasts.
              </p>
              <p className="mt-[16px] text-[18px] leading-[1.75] text-prose">
                When you work with Ansari Studio, you work with me directly. I scope your project, build it,
                show you progress every week and hand it over properly.
              </p>
              <div className="mt-[40px] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
                <div className="rounded-[20px] border border-line bg-subtle p-[24px]">
                  <div className="text-[32px] font-bold tracking-[-0.024em]">5+ yrs</div>
                  <div className="mt-[4px] text-[15px] text-muted">
                    Building production web applications since 2020
                  </div>
                </div>
                <div className="rounded-[20px] border border-line bg-subtle p-[24px]">
                  <div className="text-[32px] font-bold tracking-[-0.024em]">30%</div>
                  <div className="mt-[4px] text-[15px] text-muted">
                    Measured performance gain on a live US marketplace
                  </div>
                </div>
                <div className="rounded-[20px] border border-line bg-subtle p-[24px]">
                  <div className="text-[32px] font-bold tracking-[-0.024em]">9</div>
                  <div className="mt-[4px] text-[15px] text-muted">
                    Projects shipped for clients in the US, Australia and beyond
                  </div>
                </div>
                <div className="rounded-[20px] border border-line bg-subtle p-[24px]">
                  <div className="text-[32px] font-bold tracking-[-0.024em]">UK · US</div>
                  <div className="mt-[4px] text-[15px] text-muted">
                    Working from Lahore, Pakistan, with overlapping hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-ink px-[24px] py-[112px] text-white">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="text-[14px] font-semibold text-mint">How I work</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Four principles behind every project.
              </h2>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="rounded-[22px] border border-edge bg-raised p-[28px]">
                <span className="font-mono text-[13px] text-mint">01</span>
                <h3 className="mt-[18px] text-[19px] font-[680] tracking-[-0.01em]">Practical over flashy</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-mist">
                  A real business outcome before any buzzword.
                </p>
              </div>
              <div className="rounded-[22px] border border-edge bg-raised p-[28px]">
                <span className="font-mono text-[13px] text-mint">02</span>
                <h3 className="mt-[18px] text-[19px] font-[680] tracking-[-0.01em]">Clear over clever</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-mist">
                  Services, scope and next steps that are easy to understand.
                </p>
              </div>
              <div className="rounded-[22px] border border-edge bg-raised p-[28px]">
                <span className="font-mono text-[13px] text-mint">03</span>
                <h3 className="mt-[18px] text-[19px] font-[680] tracking-[-0.01em]">
                  Evidence over assertions
                </h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-mist">
                  Show the work, the method and measured results.
                </p>
              </div>
              <div className="rounded-[22px] border border-edge bg-raised p-[28px]">
                <span className="font-mono text-[13px] text-mint">04</span>
                <h3 className="mt-[18px] text-[19px] font-[680] tracking-[-0.01em]">
                  Partnership over transactions
                </h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-mist">
                  Built for maintainability, handover and the long term.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-[56px]">
            <div className="flex-[1_1_300px]">
              <div className="text-[14px] font-semibold text-brand">Background</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,48px)] leading-[1.06] font-bold tracking-[-0.026em]">
                Experience behind the studio.
              </h2>
              <Link className="mt-[20px] inline-block text-[15px] font-semibold text-brand" href="/work">
                See the projects →
              </Link>
            </div>
            <ol className="flex-[1.6_1_520px] list-none">
              <li className="grid grid-cols-[200px_minmax(0,1fr)] gap-[24px] border-t border-t-line py-[24px] max-[640px]:grid-cols-[minmax(0,1fr)] max-[640px]:gap-[6px]">
                <span className="text-[15px] font-semibold text-brand">2021 — present</span>
                <span>
                  <span className="block text-[19px] font-[680] tracking-[-0.01em]">
                    Senior Frontend Engineer · Oxiliry
                  </span>
                  <span className="mt-[6px] block text-[16px] leading-[1.6] text-muted">
                    Performance, platform and product work on production web applications, including a
                    measured 30% performance gain on a live marketplace.
                  </span>
                </span>
              </li>
              <li className="grid grid-cols-[200px_minmax(0,1fr)] gap-[24px] border-t border-t-line py-[24px] max-[640px]:grid-cols-[minmax(0,1fr)] max-[640px]:gap-[6px]">
                <span className="text-[15px] font-semibold text-brand">2020 — 2021</span>
                <span>
                  <span className="block text-[19px] font-[680] tracking-[-0.01em]">
                    User Interface Designer · Elite International Group
                  </span>
                  <span className="mt-[6px] block text-[16px] leading-[1.6] text-muted">
                    Led the redesign of a learning platform — student dashboards, portals and admin screens —
                    and built its design system.
                  </span>
                </span>
              </li>
              <li className="grid grid-cols-[200px_minmax(0,1fr)] gap-[24px] border-t border-t-line py-[24px] max-[640px]:grid-cols-[minmax(0,1fr)] max-[640px]:gap-[6px]">
                <span className="text-[15px] font-semibold text-brand">2020</span>
                <span>
                  <span className="block text-[19px] font-[680] tracking-[-0.01em]">
                    Certified Web Designer &amp; Developer · PSDF Pakistan
                  </span>
                  <span className="mt-[6px] block text-[16px] leading-[1.6] text-muted">
                    Professional certification in web design and development.
                  </span>
                </span>
              </li>
              <li className="grid grid-cols-[200px_minmax(0,1fr)] gap-[24px] border-t border-t-line py-[24px] max-[640px]:grid-cols-[minmax(0,1fr)] max-[640px]:gap-[6px]">
                <span className="text-[15px] font-semibold text-brand">Education</span>
                <span>
                  <span className="block text-[19px] font-[680] tracking-[-0.01em]">
                    University of the Punjab
                  </span>
                  <span className="mt-[6px] block text-[16px] leading-[1.6] text-muted">
                    Bachelor of Arts.
                  </span>
                </span>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Let's talk about your project."
        text="You will speak with me directly — the person who scopes and builds it. You get a reply within one business day."
        cta="Book a 30-minute call"
        ctaHref="/contact"
      />
    </>
  );
}
