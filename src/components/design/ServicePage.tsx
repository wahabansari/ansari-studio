import Link from "next/link";
import { CaseCard } from "@/components/design/CaseCard";
import { FaqList } from "@/components/design/FaqList";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { ArrowRight, Check } from "@/components/icons";
import { SERVICE_BY_SLUG, type ServiceSlug } from "@/data/services";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

/**
 * The shared template behind all five service pages. Six sections, always in this order:
 * hero, problems we solve, what we deliver, how it works, proof, FAQ — then the closing call to action.
 * Everything that differs between services lives in src/data/services.ts.
 */
export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = SERVICE_BY_SLUG[slug];
  const { hero, offer } = service;

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.meta.description,
          path: service.href,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: service.href },
        ])}
      />
      <JsonLd data={faqJsonLd(service.faq)} />
      <main id="main">
        <PageHero
          active="services"
          glow={slug === "automation-ai" ? "mint" : "blue"}
          parent="Services"
          parentHref="/services"
          crumb={service.name}
          eyebrow={service.name}
          title={hero.title}
          titleAccent={hero.accent}
          lead={hero.lead}
          primary="Discuss your project"
          primaryHref="/contact"
          secondary=""
          points=""
        />

        {/* 1. problems we solve */}
        <section className="px-[24px] pt-[112px] pb-[56px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-[14px] font-semibold text-brand">Problems we solve</div>
            <h2 className="mt-[14px] max-w-[720px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
              Does this sound familiar?
            </h2>
            <div className="mt-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              {service.problems.map((problem, i) => (
                <div
                  key={problem}
                  className={
                    i === 0
                      ? "rounded-[24px] bg-ink p-[32px] text-white"
                      : "rounded-[24px] border border-line bg-subtle p-[32px]"
                  }
                >
                  <div
                    className={`text-[44px] font-bold tracking-[-0.032em] ${i === 0 ? "text-mint" : "text-brand"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-[20px] text-[20px] leading-[1.35] font-[650] tracking-[-0.012em]">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. what we deliver */}
        <section className="px-[24px] pt-[56px] pb-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[28px] font-bold tracking-[-0.016em]">What we deliver</h2>
            <div className="mt-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              {service.deliver.map((item) => (
                <div key={item.title} className="rounded-[20px] border border-line p-[26px]">
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-brand-50 text-brand">
                    <Check size={19} />
                  </span>
                  <h3 className="mt-[18px] text-[17px] font-[650] tracking-[-0.01em]">{item.title}</h3>
                  <p className="mt-[6px] text-[14px] leading-[1.6] text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. how it works */}
        <section className="border-t border-b border-t-line-soft border-b-line-soft bg-subtle px-[24px] py-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-[14px] font-semibold text-brand">How it works</div>
            <h2 className="mt-[14px] max-w-[720px] text-[length:clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.026em]">
              Three steps, each ending with something you can see.
            </h2>
            <ol className="mt-[48px] grid list-none grid-cols-[repeat(3,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
              {service.steps.map((step, i) => (
                <li key={step} className="rounded-[24px] border border-line bg-white p-[28px]">
                  <span className="font-mono text-[13px] font-medium text-brand">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-[16px] text-[22px] leading-[1.25] font-[680] tracking-[-0.016em]">
                    {step}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. proof (or, for a service without a case study yet, its one offer) */}
        <section className="px-[24px] pt-[112px]">
          <div className="mx-auto max-w-[1200px]">
            {service.proof.length > 0 ? (
              <>
                <div className="flex flex-wrap items-end justify-between gap-[20px]">
                  <div>
                    <div className="text-[14px] font-semibold text-brand">Proof</div>
                    <h2 className="mt-[14px] text-[length:clamp(30px,3.6vw,44px)] leading-[1.08] font-bold tracking-[-0.024em]">
                      Work we have delivered
                    </h2>
                  </div>
                  <Link
                    className="text-[15px] font-semibold text-brand underline-offset-4 hover:underline"
                    href="/work"
                  >
                    See all work →
                  </Link>
                </div>
                <div className="mt-[40px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[24px]">
                  {service.proof.map((caseSlug) => (
                    <CaseCard key={caseSlug} slug={caseSlug} />
                  ))}
                </div>
              </>
            ) : offer ? (
              <div className="relative grid grid-cols-[repeat(2,minmax(0,1fr))] items-center gap-[56px] overflow-hidden rounded-[32px] bg-brand p-[56px] text-white max-[900px]:grid-cols-[minmax(0,1fr)]">
                <div>
                  <div className="text-[14px] font-semibold text-brand-ice">{offer.label}</div>
                  <h2 className="mt-[14px] text-[length:clamp(30px,3.6vw,46px)] leading-[1.06] font-bold tracking-[-0.024em]">
                    {offer.title}
                  </h2>
                  <p className="mt-[16px] max-w-[460px] text-[17px] leading-[1.6] text-brand-ice">
                    {offer.text}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-[16px]">
                  <Link
                    className="inline-flex h-[52px] items-center gap-[8px] rounded-[12px] bg-white px-[26px] text-[15px] font-semibold text-ink"
                    href={offer.href}
                  >
                    {offer.cta} <ArrowRight />
                  </Link>
                  <span className="text-[14px] text-brand-ice">No obligation to build</span>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* 5. FAQ */}
        <FaqList title="Questions we are asked." items={service.faq} />
      </main>
      <SiteFooter
        title={service.closing.title}
        text={service.closing.text}
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
