import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { CASES, nextCase, type CaseSlug } from "@/data/cases";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "./PageHero";
import { ProjectThumb } from "./ProjectThumb";
import { SiteFooter } from "./SiteFooter";

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

        {/* Cover image */}
        <section className="bg-[linear-gradient(180deg,#070B16_0,#070B16_160px,#fff_160px)] px-6">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),#e6eaf0)] p-2">
            <ProjectThumb slug={slug} morph priority sizes="(max-width: 1240px) 100vw, 1184px" />
          </div>
        </section>

        {/* In short */}
        <section className="bg-white px-6 pt-16">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-5 rounded-[20px] border border-brand-100 bg-brand-50 px-8 py-7">
            <span className="shrink-0 rounded-full bg-brand px-3 py-1.5 text-[12px] font-bold text-white">
              In short
            </span>
            <p className="flex-[1_1_480px] text-[17px] font-medium leading-[1.65] text-ink">
              {p.short}
            </p>
          </div>
        </section>

        {/* Detail */}
        <section className="bg-white px-6 pt-14 pb-24">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-16">

            {/* Sidebar */}
            <aside className="sticky top-6 max-w-[300px] flex-[1_1_240px] rounded-[20px] border border-line bg-subtle p-7 max-[900px]:static max-[900px]:max-w-none">
              <dl className="flex flex-col gap-5 text-[14px]">
                <div>
                  <dt className="font-mono text-[11px] font-semibold tracking-widest text-faint uppercase">
                    Client
                  </dt>
                  <dd className="mt-1 font-bold">{p.name}</dd>
                  <dd className="mt-0.5 text-muted">{p.client}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] font-semibold tracking-widest text-faint uppercase">
                    Service
                  </dt>
                  <dd className="mt-1">
                    <Link href={p.serviceHref} className="font-bold text-brand hover:underline underline-offset-4">
                      {p.service} →
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] font-semibold tracking-widest text-faint uppercase">
                    Our role
                  </dt>
                  <dd className="mt-1 font-semibold leading-[1.5]">{p.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] font-semibold tracking-widest text-faint uppercase">
                    Status
                  </dt>
                  <dd className="mt-1.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[12px] font-bold text-teal-deep">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                      {p.status}
                    </span>
                  </dd>
                </div>
              </dl>
              <Link
                href="/contact"
                className="mt-6 flex h-11 items-center justify-center rounded-xl bg-brand text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#2440c4]"
              >
                Discuss a similar project
              </Link>
            </aside>

            {/* Main content */}
            <article className="min-w-0 max-w-[720px] flex-[999_1_520px]">

              {/* Results */}
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                The result
              </div>
              <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3">
                {p.results.map(([value, label], i) => (
                  <div
                    key={value}
                    className={`rounded-[18px] p-5 ${
                      i === 0 ? "bg-ink text-white" : "border border-line bg-subtle"
                    }`}
                  >
                    <div className={`text-[26px] font-bold tracking-[-0.022em] ${i === 0 ? "text-mint" : "text-brand"}`}>
                      {value}
                    </div>
                    <div className={`mt-1.5 text-[13px] leading-[1.5] ${i === 0 ? "text-mist" : "text-muted"}`}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="mt-14 text-[28px] font-bold leading-[1.18] tracking-[-0.02em]">
                What was the challenge?
              </h2>
              <p className="mt-4 text-[17px] leading-[1.8] text-prose">{p.challenge}</p>

              <h2 className="mt-12 text-[28px] font-bold leading-[1.18] tracking-[-0.02em]">
                How did we solve it?
              </h2>
              <ol className="mt-5 flex flex-col gap-3">
                {p.approach.map((step, i) => (
                  <li key={step} className="flex items-start gap-4 rounded-[16px] border border-line px-5 py-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-[16px] leading-[1.65] text-ink">{step}</span>
                  </li>
                ))}
              </ol>

              <h2 className="mt-12 text-[28px] font-bold leading-[1.18] tracking-[-0.02em]">
                What changed for the business?
              </h2>
              <p className="mt-4 text-[17px] leading-[1.8] text-prose">{p.outcome}</p>

              {/* Navigation links */}
              <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
                <Link
                  href={p.serviceHref}
                  className="flex items-center justify-between gap-4 rounded-[18px] border border-line p-6 transition-colors duration-150 hover:border-brand-200"
                >
                  <span>
                    <span className="block text-[12px] font-semibold text-faint">Related service</span>
                    <span className="mt-1 block text-[17px] font-bold">{p.service}</span>
                  </span>
                  <ArrowUpRight size={18} className="shrink-0 text-brand" />
                </Link>
                <Link
                  href={`/work/${next}`}
                  className="flex items-center justify-between gap-4 rounded-[18px] bg-ink p-6 text-white transition-colors duration-150 hover:bg-[#121a33]"
                >
                  <span>
                    <span className="block text-[12px] font-semibold text-mint">Next project</span>
                    <span className="mt-1 block text-[17px] font-bold">{CASES[next].name}</span>
                  </span>
                  <ArrowRight size={18} className="shrink-0 text-brand-300" />
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Want a result like this?"
        text="Tell us what you need to build, improve or connect. You get a reply within one business day."
      />
    </>
  );
}
