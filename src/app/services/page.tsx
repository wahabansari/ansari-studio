import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { ArrowRight, Check, SERVICE_ICONS } from "@/components/icons";
import { SERVICE_BY_SLUG, SERVICES, type ServiceSlug } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Services",
  description:
    "Six services to modernize, automate, build and connect the software your business runs on — with a written scope before work starts.",
  path: "/services",
});

const GUIDE: { need: string; slug: ServiceSlug }[] = [
  { need: "We need something new built.", slug: "product-engineering" },
  { need: "Our website or app is slow, or hard to change.", slug: "modernization" },
  { need: "We lose hours to copy-and-paste work.", slug: "automation-ai" },
  { need: "Our data is stuck in spreadsheets and emails.", slug: "dashboards-portals" },
  { need: "Our systems do not talk to each other.", slug: "api-integrations" },
  { need: "We have a live product but no in-house developer.", slug: "maintenance-retainer" },
];

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
          title="Six services to modernize, automate"
          titleAccent="and build your software."
          lead="Each service matches a clear business need. Not sure which fits? Tell us the problem and we will recommend where to start."
          primary="Book a discovery call"
          primaryHref="/contact#book"
          secondary="Discuss your project"
          secondaryHref="/contact"
          points=""
        />

        {/* ── Service cards ───────────────────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[680px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                Six services
              </div>
              <h2 className="mt-4 text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.1] tracking-[-0.026em]">
                Modernize what you have. Build what you need.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-muted">
                Most engagements combine two or three of these. Start with the one that matches the problem
                you need to solve first.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1 max-[1100px]:grid-cols-2">
              {SERVICES.map((service) => {
                const Icon = SERVICE_ICONS[service.icon];
                const isAuto = service.slug === "automation-ai";
                return (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className="flex flex-col gap-5 rounded-[20px] border border-line bg-white p-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(10,16,34,0.18)] motion-reduce:hover:translate-y-0"
                  >
                    {/* Icon + badge row */}
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          isAuto ? "bg-teal-50 text-teal-deep" : "bg-brand-50 text-brand"
                        }`}
                      >
                        Service
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line-strong ${
                          isAuto ? "text-teal" : "text-brand"
                        }`}
                        aria-hidden="true"
                      >
                        <Icon size={19} />
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-[21px] font-bold leading-[1.2] tracking-[-0.016em]">
                      {service.name}
                    </h3>

                    {/* Outcome headline */}
                    <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.01em] text-ink">
                      {service.outcome}
                    </p>

                    {/* Summary */}
                    <p className="text-[14px] leading-[1.65] text-muted">{service.summary}</p>

                    {/* Key points */}
                    <ul className="flex flex-col gap-2.5 text-[13px] text-muted">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <Check size={13} className="mt-0.5 shrink-0 text-teal" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <span className="mt-auto inline-flex items-center gap-2 pt-1 text-[14px] font-semibold text-brand">
                      {service.cta} <ArrowRight size={14} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Which service do I need? ─────────────────────────────────── */}
        <section className="border-y border-line-soft bg-subtle px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[580px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                A quick guide
              </div>
              <h2 className="mt-4 text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.1] tracking-[-0.026em]">
                Which service do I need?
              </h2>
            </div>

            <ul className="mt-12 divide-y divide-line border-t border-line">
              {GUIDE.map(({ need, slug }) => {
                const service = SERVICE_BY_SLUG[slug];
                return (
                  <li
                    key={slug}
                    className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5"
                  >
                    <span className="text-[17px] font-semibold tracking-[-0.01em]">{need}</span>
                    <span className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[14px]">
                      <Link
                        href={service.href}
                        className="font-semibold text-brand underline-offset-4 hover:underline"
                      >
                        {service.name} →
                      </Link>
                      {slug === "automation-ai" && (
                        <Link
                          href="/automation-audit"
                          className="font-semibold text-teal-deep underline-offset-4 hover:underline"
                        >
                          Request an automation audit →
                        </Link>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-8 text-[15px] leading-[1.7] text-muted">
              Still unsure?{" "}
              <Link
                href="/contact"
                className="font-semibold text-brand underline-offset-4 hover:underline"
              >
                Tell us the problem
              </Link>{" "}
              and we will point you to the right place — even if it is not us.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Not sure where to start?"
        text="Tell us what is slowing you down. You get a reply within one business day."
      />
    </>
  );
}
