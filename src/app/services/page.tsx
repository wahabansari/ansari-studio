import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { ArrowRight, Check, SERVICE_ICONS } from "@/components/icons";
import { SERVICE_BY_SLUG, SERVICES, type ServiceSlug } from "@/data/services";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Software Development Services",
  description: "Five services to build, modernize and integrate the software your business runs on.",
  alternates: { canonical: "/services" },
};

/** "Which service do I need?" — a short guide, in service order. */
const GUIDE: { need: string; slug: ServiceSlug }[] = [
  { need: "We need something new built.", slug: "product-engineering" },
  { need: "Our website or app is slow, or hard to change.", slug: "modernization" },
  { need: "Our data is stuck in spreadsheets and emails.", slug: "dashboards-portals" },
  { need: "We have a live product but no in-house developer.", slug: "maintenance-retainer" },
  { need: "We lose hours to copy-and-paste work.", slug: "automation-ai" },
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
          title="Services that build, modernize and"
          titleAccent="integrate your software."
          lead="Five services, each matched to a clear business need. Not sure which fits? Tell us the problem and we will recommend where to start."
          primary="Discuss your project"
          primaryHref="/contact"
          secondary=""
          points=""
        />

        <section className="px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-[repeat(6,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              {SERVICES.map((service, index) => {
                const Icon = SERVICE_ICONS[service.icon];
                const automation = service.slug === "automation-ai";
                return (
                  <Link
                    key={service.slug}
                    className={`flex flex-col gap-[22px] rounded-[24px] border border-line bg-white p-[32px] [transition:transform_.2s_ease,box-shadow_.2s_ease] hover:[transform:translateY(-3px)] hover:shadow-[0_18px_40px_-20px_rgba(10,16,34,0.25)] motion-reduce:[transition:none] motion-reduce:hover:[transform:none] max-[900px]:col-auto ${index < 3 ? "col-span-2" : "col-span-3"}`}
                    href={service.href}
                  >
                    <div className="flex items-center justify-between gap-[12px]">
                      <span
                        className={`rounded-full px-[11px] py-[5px] text-[12px] font-semibold ${automation ? "bg-teal-50 text-teal" : "bg-brand-50 text-brand"}`}
                      >
                        {service.name}
                      </span>
                      <span
                        className={`flex h-[44px] w-[44px] flex-none items-center justify-center rounded-[12px] border border-line-strong bg-white ${automation ? "text-teal" : "text-brand"}`}
                        aria-hidden="true"
                      >
                        <Icon size={20} />
                      </span>
                    </div>
                    <h2 className="text-[26px] leading-[1.15] font-[680] tracking-[-0.016em]">
                      {service.outcome}
                    </h2>
                    <ul className="flex list-none flex-col gap-[10px] text-[15px] text-muted">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-[10px]">
                          <Check size={16} className="flex-none text-teal" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-[8px] text-[15px] font-semibold text-brand">
                      {service.cta}
                      <ArrowRight />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-b border-t-line-soft border-b-line-soft bg-subtle px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="text-[14px] font-semibold text-brand">A quick guide</div>
              <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
                Which service do I need?
              </h2>
            </div>
            <ul className="mt-[48px] flex list-none flex-col border-t border-t-line">
              {GUIDE.map(({ need, slug }) => {
                const service = SERVICE_BY_SLUG[slug];
                return (
                  <li
                    key={slug}
                    className="flex flex-wrap items-center justify-between gap-x-[24px] gap-y-[8px] border-b border-b-line py-[22px]"
                  >
                    <span className="text-[19px] font-[650] tracking-[-0.01em]">{need}</span>
                    <span className="flex flex-wrap items-center gap-x-[20px] gap-y-[6px] text-[15px]">
                      <Link
                        className="font-semibold text-brand underline-offset-4 hover:underline"
                        href={service.href}
                      >
                        {service.name} →
                      </Link>
                      {slug === "automation-ai" ? (
                        <Link
                          className="font-semibold text-teal-deep underline-offset-4 hover:underline"
                          href="/automation-audit"
                        >
                          Free automation audit →
                        </Link>
                      ) : null}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Not sure where to start?"
        text="Tell us what is slowing you down. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
