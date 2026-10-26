import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { ProjectThumb } from "@/components/design/ProjectThumb";
import { SiteFooter } from "@/components/design/SiteFooter";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

const SERVICE_DESCRIPTION =
  "Ship your MVP, SaaS feature or web app with a senior product engineer. Written scope, weekly demos and a documented handover — you own the code.";

export const metadata: Metadata = {
  title: { absolute: "MVP, SaaS & Web App Development | Ansari Product Engineering" },
  description: SERVICE_DESCRIPTION,
  alternates: { canonical: "/services/product-engineering" },
};

export default function ProductEngineeringPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Product engineering",
          description: SERVICE_DESCRIPTION,
          path: "/services/product-engineering",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Product engineering", path: "/services/product-engineering" },
        ])}
      />
      <main id="main">
        <PageHero
          active="services"
          parent="Services"
          parentHref="/services"
          crumb="Product engineering"
          eyebrow="Build · Product engineering"
          title="MVP and SaaS development with a"
          titleAccent="senior product engineer."
          lead="Ship your MVP, SaaS feature or web app with a written scope, weekly demos and a clean handover."
          primary="Discuss your project"
          primaryHref="/contact"
          secondary="See how we work"
          secondaryHref="/process"
          points="Written scope first|Weekly demos|You own the code"
        />
        <section className="px-[24px] pt-[72px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-[20px] rounded-[24px] border border-brand-100 bg-brand-50 px-[32px] py-[28px]">
            <span className="flex-none rounded-full bg-brand px-[12px] py-[6px] text-[13px] font-[650] text-white">
              In short
            </span>
            <p className="flex-[1_1_520px] text-[19px] leading-[1.6] font-medium text-ink">
              Product engineering is designing and building web applications, MVPs and new product features.
              Ansari Product Engineering delivers them with a written scope, a demo every week and a
              documented handover — so you own a product your next hire can work on.
            </p>
          </div>
        </section>
        <section className="px-[24px] pt-[112px] pb-[56px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-[14px] font-semibold text-brand">What you get</div>
            <h2 className="mt-[14px] max-w-[720px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
              A product that ships — and stays easy to change.
            </h2>
            <div className="mt-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="rounded-[24px] bg-ink p-[32px] text-white">
                <div className="text-[44px] font-bold tracking-[-0.032em] text-mint">01</div>
                <h3 className="mt-[20px] text-[22px] font-[680] tracking-[-0.016em]">
                  A product in users&apos; hands
                </h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-mist">
                  Released in small, usable steps so real feedback arrives early.
                </p>
              </div>
              <div className="rounded-[24px] border border-line bg-subtle p-[32px]">
                <div className="text-[44px] font-bold tracking-[-0.032em] text-brand">02</div>
                <h3 className="mt-[20px] text-[22px] font-[680] tracking-[-0.016em]">Scope that holds</h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  Deliverables, assumptions and exclusions agreed in writing before code.
                </p>
              </div>
              <div className="rounded-[24px] border border-line bg-subtle p-[32px]">
                <div className="text-[44px] font-bold tracking-[-0.032em] text-brand">03</div>
                <h3 className="mt-[20px] text-[22px] font-[680] tracking-[-0.016em]">
                  Code your next hire can read
                </h3>
                <p className="mt-[8px] text-[15px] leading-[1.6] text-muted">
                  Typed, documented and handed over with a walkthrough.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] pt-[56px] pb-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[28px] font-bold tracking-[-0.016em]">What we build</h2>
            <div className="mt-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="rounded-[20px] border border-line p-[26px]">
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
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[17px] font-[650] tracking-[-0.01em]">MVPs</h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  The smallest version that proves the idea with real users.
                </p>
              </div>
              <div className="rounded-[20px] border border-line p-[26px]">
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
                    <path d="M12 2 2 7l10 5 10-5-10-5z" />
                    <path d="m2 17 10 5 10-5" />
                    <path d="m2 12 10 5 10-5" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[17px] font-[650] tracking-[-0.01em]">SaaS features</h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  New capabilities added to your product without breaking what works.
                </p>
              </div>
              <div className="rounded-[20px] border border-line p-[26px]">
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
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[17px] font-[650] tracking-[-0.01em]">Web apps</h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  Fast, accessible apps that work on every screen size.
                </p>
              </div>
              <div className="rounded-[20px] border border-line p-[26px]">
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
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[17px] font-[650] tracking-[-0.01em]">
                  APIs &amp; integrations
                </h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  Your product connected to payments, CRMs and the tools you use.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-b border-t-line-soft border-b-line-soft bg-subtle px-[24px] py-[112px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] items-center gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <div className="text-[14px] font-semibold text-brand">Scope under control</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                You know what you are paying for before we start.
              </h2>
              <p className="mt-[18px] max-w-[480px] text-[17px] leading-[1.6] text-muted">
                Every project begins with a written scope. Changes are discussed openly and added on purpose,
                never by drift.
              </p>
            </div>
            <div className="rounded-[24px] bg-[linear-gradient(180deg,#E6EAF0,#F6F8FB)] p-[8px]">
              <div className="rounded-[18px] border border-line bg-white p-[28px] shadow-[0_30px_60px_-40px_rgba(10,16,34,0.35)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] text-faint">scope-document.pdf</span>
                  <span className="rounded-full bg-teal-50 px-[10px] py-[4px] text-[12px] font-semibold text-teal-deep">
                    Agreed
                  </span>
                </div>
                <div className="mt-[18px] text-[20px] font-[680] tracking-[-0.01em]">
                  Client portal MVP — scope &amp; delivery plan
                </div>
                <ul className="mt-[20px] flex list-none flex-col gap-[12px] text-[15px]">
                  <li className="flex items-center gap-[10px]">
                    <svg
                      width="17"
                      height="17"
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
                    The problem we are solving
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <svg
                      width="17"
                      height="17"
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
                    Deliverables and milestones
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <svg
                      width="17"
                      height="17"
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
                    Assumptions and exclusions
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <svg
                      width="17"
                      height="17"
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
                    Acceptance criteria
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <svg
                      width="17"
                      height="17"
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
                    Estimate and timeline
                  </li>
                </ul>
                <div className="mt-[20px] border-t border-t-line-soft pt-[16px] text-[12px] text-faint">
                  Illustrative document
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] pt-[112px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-[28px] rounded-[24px] bg-ink p-[40px] text-white">
            <div className="max-w-[420px]">
              <h2 className="text-[26px] font-bold tracking-[-0.016em]">
                Built on proven, widely used technology
              </h2>
              <p className="mt-[8px] text-[15px] leading-[1.6] text-mist">
                Popular, well-documented tools, so any good engineer can work on your product after us.
              </p>
            </div>
            <div className="flex max-w-[560px] flex-wrap gap-[10px]">
              <span className="rounded-[12px] border border-edge bg-raised px-[16px] py-[10px] text-[14px] font-semibold">
                Modern web frameworks
              </span>
              <span className="rounded-[12px] border border-edge bg-raised px-[16px] py-[10px] text-[14px] font-semibold">
                Type-safe code
              </span>
              <span className="rounded-[12px] border border-edge bg-raised px-[16px] py-[10px] text-[14px] font-semibold">
                Secure sign-in
              </span>
              <span className="rounded-[12px] border border-edge bg-raised px-[16px] py-[10px] text-[14px] font-semibold">
                Payment integrations
              </span>
              <span className="rounded-[12px] border border-edge bg-raised px-[16px] py-[10px] text-[14px] font-semibold">
                Cloud databases
              </span>
              <span className="rounded-[12px] border border-edge bg-raised px-[16px] py-[10px] text-[14px] font-semibold">
                Global edge hosting
              </span>
            </div>
          </div>
        </section>
        <section className="px-[24px] pt-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-[20px]">
              <div>
                <div className="text-[14px] font-semibold text-brand">Proof</div>
                <h2 className="mt-[14px] text-[length:clamp(30px,3.6vw,44px)] leading-[1.08] font-bold tracking-[-0.024em]">
                  Products we have shipped
                </h2>
              </div>
              <Link className="text-[15px] font-semibold text-brand underline-offset-4 hover:underline" href="/work">
                Selected project experience →
              </Link>
            </div>
            <div className="mt-[40px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[24px]">
              <Link className="group flex flex-col gap-[18px]" href="/work/verdira">
                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-[3px] motion-reduce:transform-none">
                  <ProjectThumb slug="verdira" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-faint">Verdira · Practice partner, US</div>
                  <h3 className="mt-[8px] text-[21px] leading-[1.3] font-[680] tracking-[-0.01em]">
                    From brochure site to secure client platform
                  </h3>
                </div>
              </Link>
              <Link className="group flex flex-col gap-[18px]" href="/work/vapestore">
                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-[3px] motion-reduce:transform-none">
                  <ProjectThumb slug="vapestore" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-faint">VapePlanet · Online retail, UK</div>
                  <h3 className="mt-[8px] text-[21px] leading-[1.3] font-[680] tracking-[-0.01em]">
                    A complete online store, built for fast checkout
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
                Questions founders ask.
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
                  What is an MVP?
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
                  A minimum viable product is the smallest version of your product that real users can try. It
                  proves the idea quickly, so you invest in what users actually need.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Who owns the code?
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
                  You do. The code repository, documentation and every account are handed over at the end of
                  the project.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  How long does an MVP take?
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
                  It depends on the scope. Your written scope includes milestones, and you see working
                  software in a demo every week, so there are no surprises at the end.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Can you work on our existing product?
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
                  Yes. We start with a short review of the code, then add features or fixes without breaking
                  what already works — as we did on the Sunhub and AussieMotor marketplaces.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Do you work with our designer?
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
                  Yes. We build from your designer’s files and flag anything that will not work well on small
                  screens or for accessibility before it is built.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Have a product to build?"
        text="Tell us what you want to ship. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
