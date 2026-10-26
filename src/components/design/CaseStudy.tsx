import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { CASES, nextCase, type CaseSlug } from "@/data/cases";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "./PageHero";
import { ProjectThumb } from "./ProjectThumb";
import { SiteFooter } from "./SiteFooter";

/** Case-study page template (design component "CaseStudy"). */
export function CaseStudy({ slug }: { slug: CaseSlug }) {
  const p = CASES[slug];
  const next = nextCase(slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: p.name, path: `/work/${slug}` },
        ])}
      />
      <main id="main">
        <PageHero
          active="work"
          parent="Work"
          parentHref="/work"
          crumb={p.name}
          eyebrow={p.eyebrow}
          title={p.titleA}
          titleAccent={p.titleB}
          lead={p.lead}
          primary="Discuss a similar project"
          primaryHref="/contact"
          secondary={p.linkLabel}
          secondaryHref={p.link}
          points=""
        />

        {/* cover */}
        <section className="bg-[linear-gradient(180deg,#070B16_0,#070B16_180px,#FFFFFF_180px)] px-[24px]">
          <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),#E6EAF0)] p-[8px]">
            <ProjectThumb slug={slug} morph priority sizes="(max-width: 1240px) 100vw, 1184px" />
          </div>
        </section>

        {/* in short (answer first) */}
        <section className="bg-white px-[24px] pt-[72px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-[20px] rounded-[24px] border border-brand-100 bg-brand-50 px-[32px] py-[28px]">
            <span className="flex-none rounded-full bg-brand px-[12px] py-[6px] text-[13px] font-[650] text-white">
              In short
            </span>
            <p className="flex-[1_1_520px] text-[19px] leading-[1.6] font-medium text-ink">{p.short}</p>
          </div>
        </section>

        <section className="bg-white px-[24px] pt-[64px] pb-[112px]">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-[64px]">
            <aside className="sticky top-[24px] max-w-[320px] flex-[1_1_260px] rounded-[22px] border border-line bg-subtle p-[26px] max-[900px]:static max-[900px]:max-w-none">
              <dl className="flex flex-col gap-[18px] text-[15px]">
                <div>
                  <dt className="text-[12px] font-semibold tracking-[0.05em] text-faint uppercase">Client</dt>
                  <dd className="mt-[4px] font-[650]">{p.name}</dd>
                  <dd className="mt-[2px] text-muted">{p.client}</dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold tracking-[0.05em] text-faint uppercase">
                    Service
                  </dt>
                  <dd className="mt-[4px]">
                    <Link href={p.serviceHref} className="font-[650] text-brand hover:underline">
                      {p.service} →
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold tracking-[0.05em] text-faint uppercase">
                    Our role
                  </dt>
                  <dd className="mt-[4px] leading-[1.45] font-semibold">{p.role}</dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold tracking-[0.05em] text-faint uppercase">Status</dt>
                  <dd className="mt-[6px]">
                    <span className="inline-flex items-center gap-[6px] rounded-full bg-teal-50 px-[10px] py-[4px] text-[13px] font-[650] text-teal-deep">
                      <span className="h-[6px] w-[6px] rounded-full bg-teal" />
                      {p.status}
                    </span>
                  </dd>
                </div>
              </dl>
              <Link
                href="/contact"
                className="mt-[24px] flex h-[46px] items-center justify-center rounded-[12px] bg-brand text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#2643c9]"
              >
                Discuss a similar project
              </Link>
            </aside>

            <article className="max-w-[740px] min-w-0 flex-[999_1_560px]">
              <div className="text-[14px] font-semibold text-brand">The result</div>
              <div className="mt-[16px] grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[14px]">
                {p.results.map(([value, label], i) => (
                  <div
                    key={value}
                    className={
                      i === 0
                        ? "rounded-[20px] bg-ink p-[22px] text-white"
                        : "rounded-[20px] border border-line bg-subtle p-[22px]"
                    }
                  >
                    <div
                      className={`text-[30px] font-bold tracking-[-0.02em] ${i === 0 ? "text-mint" : "text-brand"}`}
                    >
                      {value}
                    </div>
                    <div
                      className={`mt-[6px] text-[14px] leading-[1.5] ${i === 0 ? "text-mist" : "text-muted"}`}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="mt-[56px] text-[32px] leading-[1.15] font-bold tracking-[-0.02em]">
                What was the challenge?
              </h2>
              <p className="mt-[16px] text-[18px] leading-[1.75] text-prose">{p.challenge}</p>

              <h2 className="mt-[48px] text-[32px] leading-[1.15] font-bold tracking-[-0.02em]">
                How did we solve it?
              </h2>
              <ol className="mt-[20px] flex flex-col gap-[12px]">
                {p.approach.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-[16px] rounded-[16px] border border-line px-[20px] py-[18px]"
                  >
                    <span className="flex h-[28px] w-[28px] flex-none items-center justify-center rounded-full bg-ink text-[13px] font-[650] text-white">
                      {i + 1}
                    </span>
                    <span className="text-[17px] leading-[1.6] text-ink">{step}</span>
                  </li>
                ))}
              </ol>

              <h2 className="mt-[48px] text-[32px] leading-[1.15] font-bold tracking-[-0.02em]">
                What changed for the business?
              </h2>
              <p className="mt-[16px] text-[18px] leading-[1.75] text-prose">{p.outcome}</p>

              <div className="mt-[48px] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[14px]">
                <Link
                  href={p.serviceHref}
                  className="flex items-center justify-between gap-[16px] rounded-[20px] border border-line p-[24px] transition-colors duration-150 hover:border-brand-200"
                >
                  <span>
                    <span className="block text-[13px] font-semibold text-faint">Related service</span>
                    <span className="mt-[4px] block text-[18px] font-[650]">{p.service}</span>
                  </span>
                  <ArrowUpRight size={20} className="text-brand" />
                </Link>
                <Link
                  href={`/work/${next}`}
                  className="flex items-center justify-between gap-[16px] rounded-[20px] bg-ink p-[24px] text-white transition-colors duration-150 hover:bg-[#121a33]"
                >
                  <span>
                    <span className="block text-[13px] font-semibold text-mint">Next project</span>
                    <span className="mt-[4px] block text-[18px] font-[650]">{CASES[next].name}</span>
                  </span>
                  <ArrowRight size={20} className="text-brand-300" />
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Want a result like this?"
        text="Tell us what you need to build, improve or connect. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
