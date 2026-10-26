import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { ProjectThumb } from "@/components/design/ProjectThumb";
import { SiteFooter } from "@/components/design/SiteFooter";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

const SERVICE_DESCRIPTION =
  "Migrate ageing software to a modern stack and fix slow pages. We measure first, then modernize in low-risk steps while the live site keeps running.";

export const metadata: Metadata = {
  title: { absolute: "Legacy App Modernization & Performance | Ansari Product Engineering" },
  description: SERVICE_DESCRIPTION,
  alternates: { canonical: "/services/modernization" },
};

export default function ModernizationPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Modernization & performance",
          description: SERVICE_DESCRIPTION,
          path: "/services/modernization",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Modernization", path: "/services/modernization" },
        ])}
      />
      <main id="main">
        <PageHero
          active="services"
          parent="Services"
          parentHref="/services"
          crumb="Modernization"
          eyebrow="Improve · Modernization &amp; performance"
          title="Modernize legacy software"
          titleAccent="without stopping the business."
          lead="Move ageing websites and web apps to a modern platform and fix slow pages. We measure first, then modernize in low-risk steps."
          primary="Get a modernization plan"
          primaryHref="/contact"
          secondary="See how we work"
          secondaryHref="/process"
          points="Measured before and after|No big-bang rewrite|Live site keeps running"
        />
        <section className="px-[24px] pt-[72px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-[20px] rounded-[24px] border border-brand-100 bg-brand-50 px-[32px] py-[28px]">
            <span className="flex-none rounded-full bg-brand px-[12px] py-[6px] text-[13px] font-[650] text-white">
              In short
            </span>
            <p className="flex-[1_1_520px] text-[19px] leading-[1.6] font-medium text-ink">
              Software modernization means moving an ageing website or web app to a modern platform and fixing
              what makes it slow — in small, measured steps while the live site keeps running. On the Sunhub
              marketplace this approach made the site measurably faster without a rewrite.
            </p>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[680px]">
              <div className="text-[14px] font-semibold text-brand">Is it time?</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                When to modernize — and when not to.
              </h2>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="rounded-[24px] border border-teal-100 bg-teal-50 p-[32px]">
                <div className="text-[13px] font-semibold tracking-[0.04em] text-teal-deep uppercase">
                  Modernize when
                </div>
                <ul className="mt-[18px] flex list-none flex-col gap-[14px] text-[16px]">
                  <li className="flex gap-[12px]">
                    <svg
                      className="mt-[3px] flex-none"
                      width="18"
                      height="18"
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
                    Small changes take weeks and break other things
                  </li>
                  <li className="flex gap-[12px]">
                    <svg
                      className="mt-[3px] flex-none"
                      width="18"
                      height="18"
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
                    Pages are slow and customers notice
                  </li>
                  <li className="flex gap-[12px]">
                    <svg
                      className="mt-[3px] flex-none"
                      width="18"
                      height="18"
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
                    Hiring developers for the old stack is hard
                  </li>
                </ul>
              </div>
              <div className="rounded-[24px] border border-line bg-subtle p-[32px]">
                <div className="text-[13px] font-semibold tracking-[0.04em] text-faint uppercase">
                  Wait when
                </div>
                <ul className="mt-[18px] flex list-none flex-col gap-[14px] text-[16px] text-muted">
                  <li className="flex gap-[12px]">
                    <svg
                      className="mt-[3px] flex-none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#98A2B3"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    The software works and rarely needs changes
                  </li>
                  <li className="flex gap-[12px]">
                    <svg
                      className="mt-[3px] flex-none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#98A2B3"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    A few targeted fixes would solve the real problem
                  </li>
                  <li className="flex gap-[12px]">
                    <svg
                      className="mt-[3px] flex-none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#98A2B3"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    The product itself is about to change direction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-ink px-[24px] py-[112px] text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] items-center gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <div className="text-[14px] font-semibold text-mint">Measure first</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                We fix what the numbers point to.
              </h2>
              <p className="mt-[18px] max-w-[470px] text-[17px] leading-[1.6] text-mist">
                A performance audit shows where users wait and why. You see the before numbers, the plan, and
                the after numbers.
              </p>
            </div>
            <div className="rounded-[24px] border border-edge bg-raised p-[28px]">
              <div className="flex justify-between text-[13px] text-steel">
                <span className="font-semibold tracking-[0.04em] uppercase">Core Web Vitals targets</span>
                <span>Google, 75th percentile</span>
              </div>
              <div className="mt-[20px] flex flex-col gap-[12px]">
                <div className="flex items-center justify-between gap-[16px] rounded-[14px] border border-edge bg-panel px-[18px] py-[16px]">
                  <span>
                    <span className="block text-[16px] font-[650]">LCP · loading</span>
                    <span className="block text-[13px] text-dim">Main content visible</span>
                  </span>
                  <span className="rounded-full bg-[rgba(98,220,203,0.12)] px-[12px] py-[6px] text-[14px] font-[650] text-mint">
                    ≤ 2.5 s
                  </span>
                </div>
                <div className="flex items-center justify-between gap-[16px] rounded-[14px] border border-edge bg-panel px-[18px] py-[16px]">
                  <span>
                    <span className="block text-[16px] font-[650]">INP · responsiveness</span>
                    <span className="block text-[13px] text-dim">Taps and clicks respond</span>
                  </span>
                  <span className="rounded-full bg-[rgba(98,220,203,0.12)] px-[12px] py-[6px] text-[14px] font-[650] text-mint">
                    ≤ 200 ms
                  </span>
                </div>
                <div className="flex items-center justify-between gap-[16px] rounded-[14px] border border-edge bg-panel px-[18px] py-[16px]">
                  <span>
                    <span className="block text-[16px] font-[650]">CLS · stability</span>
                    <span className="block text-[13px] text-dim">Nothing jumps while loading</span>
                  </span>
                  <span className="rounded-full bg-[rgba(98,220,203,0.12)] px-[12px] py-[6px] text-[14px] font-[650] text-mint">
                    ≤ 0.1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[680px]">
              <div className="text-[14px] font-semibold text-brand">Migration path</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Small steps. The live site keeps running.
              </h2>
            </div>
            <ol className="mt-[48px] grid list-none grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <li className="flex flex-col rounded-[24px] border border-line p-[28px]">
                <span className="font-mono text-[13px] text-brand">Step 01</span>
                <h3 className="mt-[18px] text-[19px] font-[680] tracking-[-0.012em]">Audit</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  Measure speed and map the risky parts of the code.
                </p>
                <div className="mt-auto pt-[20px] text-[14px] font-semibold text-teal-deep">
                  You get: a written plan
                </div>
              </li>
              <li className="flex flex-col rounded-[24px] border border-line p-[28px]">
                <span className="font-mono text-[13px] text-brand">Step 02</span>
                <h3 className="mt-[18px] text-[19px] font-[680] tracking-[-0.012em]">Stabilize</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  Add tests and monitoring around what matters most.
                </p>
                <div className="mt-auto pt-[20px] text-[14px] font-semibold text-teal-deep">
                  You get: changes that feel safe
                </div>
              </li>
              <li className="flex flex-col rounded-[24px] border border-line p-[28px]">
                <span className="font-mono text-[13px] text-brand">Step 03</span>
                <h3 className="mt-[18px] text-[19px] font-[680] tracking-[-0.012em]">Migrate in slices</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-muted">
                  Move one page or feature at a time to the new stack.
                </p>
                <div className="mt-auto pt-[20px] text-[14px] font-semibold text-teal-deep">
                  You get: progress every release
                </div>
              </li>
              <li className="flex flex-col rounded-[24px] bg-ink p-[28px] text-white">
                <span className="font-mono text-[13px] text-mint">Step 04</span>
                <h3 className="mt-[18px] text-[19px] font-[680] tracking-[-0.012em]">Hand over</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-mist">
                  Documentation and a walkthrough for your team.
                </p>
                <div className="mt-auto pt-[20px] text-[14px] font-semibold text-mint">
                  You get: a codebase you can hire for
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="px-[24px] pb-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[26px] font-bold tracking-[-0.016em]">Related services</h2>
            <div className="mt-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <Link
                className="flex items-center justify-between gap-[16px] rounded-[20px] border border-line p-[26px]"
                href="/services/maintenance-retainer"
              >
                <span>
                  <span className="block text-[17px] font-[650]">Maintenance &amp; retainer</span>
                  <span className="mt-[4px] block text-[14px] text-muted">
                    Keep the new stack healthy after the migration.
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
                href="/services/product-engineering"
              >
                <span>
                  <span className="block text-[17px] font-[650]">Product engineering</span>
                  <span className="mt-[4px] block text-[14px] text-muted">
                    Build the new features you postponed.
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
                  Modernization results
                </h2>
              </div>
              <Link className="text-[15px] font-semibold text-brand underline-offset-4 hover:underline" href="/work">
                Selected project experience →
              </Link>
            </div>
            <div className="mt-[40px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[24px]">
              <Link className="group flex flex-col gap-[18px]" href="/work/sunhub">
                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-[3px] motion-reduce:transform-none">
                  <ProjectThumb slug="sunhub" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-faint">Sunhub · Solar marketplace, US</div>
                  <h3 className="mt-[8px] text-[21px] leading-[1.3] font-[680] tracking-[-0.01em]">
                    Faster, without a rewrite
                  </h3>
                </div>
              </Link>
              <Link className="group flex flex-col gap-[18px]" href="/work/aussiemotor">
                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-[3px] motion-reduce:transform-none">
                  <ProjectThumb slug="aussiemotor" />
                </div>
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
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-[56px]">
            <div className="flex-[1_1_320px]">
              <div className="text-[14px] font-semibold text-brand">FAQ</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.06] font-bold tracking-[-0.026em]">
                Questions about modernization.
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
                  Do we need a full rewrite?
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
                  Usually not. Most gains come from measuring first and fixing the real causes. We move the
                  rest in slices, one page or feature at a time, so the business never stops.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Will the website go offline?
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
                  No. Changes are released in small steps on the live site. On the Sunhub marketplace every
                  improvement shipped without a maintenance window.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  What are Core Web Vitals?
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
                  Core Web Vitals are Google’s measures of real user experience: how fast the main content
                  loads, how quickly the page responds to taps and clicks, and how stable the layout is while
                  loading.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  How do you prove the improvement?
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
                  We measure before the work starts and again after each release, and report the difference.
                  No number is claimed without a measurement behind it.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Is old software slowing you down?"
        text="Tell us what feels slow or risky today. We will reply with a first view of the plan."
        cta="Get a modernization plan"
        ctaHref="/contact"
      />
    </>
  );
}
