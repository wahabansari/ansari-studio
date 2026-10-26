import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { ProjectThumb } from "@/components/design/ProjectThumb";
import { SiteFooter } from "@/components/design/SiteFooter";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

const SERVICE_DESCRIPTION =
  "Ongoing development, updates, monitoring and fixes from one senior engineer who knows your codebase. Predictable monthly hours and a clear report every month.";

export const metadata: Metadata = {
  title: { absolute: "Website Maintenance & Development Retainer | Ansari Product Engineering" },
  description: SERVICE_DESCRIPTION,
  alternates: { canonical: "/services/maintenance-retainer" },
};

export default function MaintenancePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Maintenance & retainer",
          description: SERVICE_DESCRIPTION,
          path: "/services/maintenance-retainer",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Maintenance & retainer", path: "/services/maintenance-retainer" },
        ])}
      />
      <main id="main">
        <PageHero
          active="services"
          parent="Services"
          parentHref="/services"
          crumb="Maintenance &amp; retainer"
          eyebrow="Improve · Maintenance &amp; retainer"
          title="A development retainer with"
          titleAccent="one engineer who knows your code."
          lead="Ongoing development, updates, monitoring and fixes. Predictable monthly hours, and no re-explaining your product every time."
          primary="Discuss a retainer"
          primaryHref="/contact"
          secondary="See how we work"
          secondaryHref="/process"
          points="Predictable monthly hours|Priorities you set|A monthly report"
          glow="mint"
        />
        <section className="px-[24px] pt-[72px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-[20px] rounded-[24px] border border-brand-100 bg-brand-50 px-[32px] py-[28px]">
            <span className="flex-none rounded-full bg-brand px-[12px] py-[6px] text-[13px] font-[650] text-white">
              In short
            </span>
            <p className="flex-[1_1_520px] text-[19px] leading-[1.6] font-medium text-ink">
              A development retainer gives you a set number of engineering hours each month for updates,
              fixes, monitoring and small features — from one senior engineer who already knows your code,
              with a clear report at the end of every month.
            </p>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[680px]">
              <div className="text-[14px] font-semibold text-brand">What&apos;s included</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Your software stays healthy while you run the business.
              </h2>
            </div>
            <div className="mt-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="rounded-[20px] border border-line bg-white p-[26px]">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-line-strong bg-white text-brand">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[17px] font-[650]">Updates &amp; security</h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  Dependencies and patches kept current.
                </p>
              </div>
              <div className="rounded-[20px] border border-line bg-white p-[26px]">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-line-strong bg-white text-brand">
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
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[17px] font-[650]">Monitoring</h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  Problems spotted before customers report them.
                </p>
              </div>
              <div className="rounded-[20px] border border-line bg-white p-[26px]">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-line-strong bg-white text-brand">
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
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[17px] font-[650]">Small features</h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  Improvements shipped every month.
                </p>
              </div>
              <div className="rounded-[20px] border border-line bg-white p-[26px]">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-line-strong bg-white text-teal">
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
                    <rect width="8" height="8" x="3" y="3" rx="2" />
                    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                    <rect width="8" height="8" x="13" y="13" rx="2" />
                  </svg>
                </span>
                <h3 className="mt-[18px] text-[17px] font-[650]">Automation upkeep</h3>
                <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">
                  Workflows adjusted as your tools change.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-b border-t-line-soft border-b-line-soft bg-subtle px-[24px] py-[112px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(2,minmax(0,1fr))] items-center gap-[56px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <div>
              <div className="text-[14px] font-semibold text-brand">How a month works</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                You set the priorities. We do the work.
              </h2>
              <ol className="mt-[32px] flex list-none flex-col gap-[18px]">
                <li className="flex gap-[16px]">
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-brand text-[14px] font-[650] text-white">
                    1
                  </span>
                  <span>
                    <span className="block text-[17px] font-[650]">Agree the month&apos;s list</span>
                    <span className="mt-[2px] block text-[15px] text-muted">
                      A short call to rank what matters most.
                    </span>
                  </span>
                </li>
                <li className="flex gap-[16px]">
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-brand text-[14px] font-[650] text-white">
                    2
                  </span>
                  <span>
                    <span className="block text-[17px] font-[650]">Work through it in order</span>
                    <span className="mt-[2px] block text-[15px] text-muted">
                      Urgent fixes jump the queue when needed.
                    </span>
                  </span>
                </li>
                <li className="flex gap-[16px]">
                  <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-brand text-[14px] font-[650] text-white">
                    3
                  </span>
                  <span>
                    <span className="block text-[17px] font-[650]">Report at month end</span>
                    <span className="mt-[2px] block text-[15px] text-muted">
                      What shipped, hours used and what is next.
                    </span>
                  </span>
                </li>
              </ol>
            </div>
            <div className="rounded-[26px] bg-[linear-gradient(180deg,#E6EAF0,#FFFFFF)] p-[8px]">
              <div className="rounded-[20px] border border-line bg-white p-[28px] shadow-[0_30px_60px_-40px_rgba(10,16,34,0.35)]">
                <div className="flex items-center justify-between gap-[16px]">
                  <span className="text-[18px] font-[680] tracking-[-0.01em]">Monthly report · October</span>
                  <span className="rounded-full bg-brand-50 px-[10px] py-[4px] text-[12px] font-semibold text-brand">
                    Retainer
                  </span>
                </div>
                <div className="mt-[22px] text-[13px] font-semibold tracking-[0.04em] text-faint uppercase">
                  Shipped
                </div>
                <ul className="mt-[12px] flex list-none flex-col gap-[10px] text-[15px]">
                  <li className="flex gap-[10px]">
                    <svg
                      className="mt-[2px] flex-none"
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
                    Faster product search page
                  </li>
                  <li className="flex gap-[10px]">
                    <svg
                      className="mt-[2px] flex-none"
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
                    Dependencies updated
                  </li>
                  <li className="flex gap-[10px]">
                    <svg
                      className="mt-[2px] flex-none"
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
                    Automation adjusted for a tool change
                  </li>
                </ul>
                <div className="mt-[22px] text-[13px] font-semibold tracking-[0.04em] text-faint uppercase">
                  Hours
                </div>
                <div
                  className="mt-[12px] h-[10px] overflow-hidden rounded-full bg-line-soft"
                  aria-hidden="true"
                >
                  <div className="h-full w-[70%] rounded-full bg-brand" />
                </div>
                <div className="mt-[8px] flex justify-between text-[13px] text-faint">
                  <span>Hours used this month</span>
                  <span>Included in your plan</span>
                </div>
                <div className="mt-[20px] border-t border-t-line-soft pt-[16px] text-[12px] text-faint">
                  Sample report
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[26px] font-bold tracking-[-0.016em]">A good fit if you</h2>
            <div className="mt-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              <div className="rounded-[20px] border border-line p-[26px] text-[16px] leading-[1.5] font-semibold">
                Have a live product but no in-house developer
              </div>
              <div className="rounded-[20px] border border-line p-[26px] text-[16px] leading-[1.5] font-semibold">
                Just finished a build and want it looked after
              </div>
              <div className="rounded-[20px] border border-line p-[26px] text-[16px] leading-[1.5] font-semibold">
                Rely on automations that must keep running
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] pt-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-end justify-between gap-[20px]">
              <div>
                <div className="text-[14px] font-semibold text-brand">Proof</div>
                <h2 className="mt-[14px] text-[length:clamp(30px,3.6vw,44px)] leading-[1.08] font-bold tracking-[-0.024em]">
                  Long-term work we support
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
                    Ongoing delivery on a live marketplace
                  </h3>
                </div>
              </Link>
              <Link className="group flex flex-col gap-[18px]" href="/work/talhaestate">
                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-[3px] motion-reduce:transform-none">
                  <ProjectThumb slug="talhaestate" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-faint">Talha Estate · Real estate</div>
                  <h3 className="mt-[8px] text-[21px] leading-[1.3] font-[680] tracking-[-0.01em]">
                    A website the team keeps up to date
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
                Questions about retainers.
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
                  What does a development retainer include?
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
                  Security and dependency updates, monitoring, bug fixes, small features and upkeep for your
                  automations — within a set number of hours each month that you prioritize.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  What happens to unused hours?
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
                  Unused hours and how they carry over are agreed in writing before the retainer starts, so
                  there are no surprises on either side.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  How fast do you respond to urgent problems?
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
                  Urgent issues jump the queue. You get a reply within one business day for anything, and
                  critical problems are handled as soon as they are reported.
                </p>
              </details>
              <details className="group border-b border-b-line py-[22px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                  Can we stop the retainer?
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
                  Yes. Retainers run month to month after an agreed notice period, and you keep all code,
                  documentation and accounts.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Want one engineer on call?"
        text="Tell us about your product and what needs looking after. You get a reply within one business day."
        cta="Discuss a retainer"
        ctaHref="/contact"
      />
    </>
  );
}
