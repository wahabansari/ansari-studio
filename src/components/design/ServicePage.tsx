import Link from "next/link";
import { ArticleCard } from "@/components/design/ArticleCard";
import { CaseCard } from "@/components/design/CaseCard";
import { FaqList } from "@/components/design/FaqList";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { ArrowRight, Check } from "@/components/icons";
import { ARTICLE_BY_SLUG } from "@/data/articles";
import { SERVICE_BY_SLUG, type ServiceSlug } from "@/data/services";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = SERVICE_BY_SLUG[slug];
  const { hero, offer } = service;
  const articles = service.articles.map((s) => ARTICLE_BY_SLUG[s]);

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: service.name, description: service.meta.description, path: service.href })} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.name, path: service.href }])} />
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
          primary="Book a discovery call"
          primaryHref="/contact#book"
          secondary="Discuss your project"
          secondaryHref="/contact"
          points=""
        />

        {/* ── 1. Who it's for + outcomes ─────────────────────────────── */}
        <section className="px-6 pt-24 pb-14">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_1fr] items-start gap-12 max-[900px]:grid-cols-1">
            {/* Audience */}
            <div>
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                Who it is for
              </div>
              <h2 className="mt-4 max-w-[520px] text-[clamp(26px,3.2vw,40px)] font-semibold leading-[1.12] tracking-[-0.024em]">
                {service.audience.lead}
              </h2>
              <ul className="mt-7 flex flex-col gap-3">
                {service.audience.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.65]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand">
                      <Check size={13} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="rounded-[24px] bg-ink p-8 text-white max-[480px]:p-6">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-mint uppercase">
                What changes
              </div>
              <h2 className="mt-3 text-[22px] font-bold leading-[1.2] tracking-[-0.018em]">
                The outcome you are buying.
              </h2>
              <ul className="mt-6 flex flex-col gap-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-[15px] leading-[1.6]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint/[0.14] text-mint">
                      <Check size={13} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 2. Problems ────────────────────────────────────────────── */}
        <section className="px-6 pt-14 pb-24">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="max-w-[680px] text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.08] tracking-[-0.026em]">
              Does this sound familiar?
            </h2>
            <div className="mt-12 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              {service.problems.map((problem, i) => (
                <div
                  key={problem}
                  className={`rounded-[20px] p-8 ${
                    i === 0 ? "bg-ink text-white" : "border border-line bg-subtle text-ink"
                  }`}
                >
                  <div
                    className={`font-mono text-[38px] font-bold leading-none tracking-[-0.03em] ${
                      i === 0 ? "text-mint" : "text-brand-200"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-5 text-[18px] font-semibold leading-[1.35] tracking-[-0.012em]">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. What we deliver ─────────────────────────────────────── */}
        <section className="border-y border-line-soft bg-subtle px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[640px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                What we deliver
              </div>
              <h2 className="mt-4 text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.08] tracking-[-0.026em]">
                The work, in plain terms.
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-4 gap-4 max-[1024px]:grid-cols-2 max-[540px]:grid-cols-1">
              {service.deliver.map((item) => (
                <div key={item.title} className="rounded-[20px] border border-line bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <Check size={18} />
                  </span>
                  <h3 className="mt-4 text-[16px] font-bold tracking-[-0.01em]">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.65] text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. How it works ────────────────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
              How it works
            </div>
            <h2 className="mt-4 max-w-[680px] text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.08] tracking-[-0.026em]">
              Three steps, each ending with something you can see.
            </h2>
            <ol className="mt-12 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              {service.steps.map((step, i) => (
                <li key={step} className="rounded-[20px] border border-line bg-white p-7">
                  <span className="font-mono text-[12px] font-medium text-brand">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[20px] font-bold leading-[1.25] tracking-[-0.016em]">
                    {step}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 5. Technologies ────────────────────────────────────────── */}
        <section className="border-y border-line-soft bg-subtle px-6 py-16">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-12 gap-y-6">
            <div className="max-w-[340px]">
              <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                Technologies
              </div>
              <p className="mt-2 text-[14px] leading-[1.65] text-muted">
                Named only where we already use them. We choose the simplest tool that solves the problem.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line-strong bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 6. Proof or offer ──────────────────────────────────────── */}
        <section className="px-6 pt-24">
          <div className="mx-auto max-w-[1200px]">
            {service.proof.length > 0 ? (
              <>
                <div className="flex flex-wrap items-end justify-between gap-5">
                  <div>
                    <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                      Proof
                    </div>
                    <h2 className="mt-4 text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.1] tracking-[-0.024em]">
                      Work we have delivered
                    </h2>
                  </div>
                  <Link className="text-[14px] font-semibold text-brand underline-offset-4 hover:underline" href="/work">
                    See all work →
                  </Link>
                </div>
                <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                  {service.proof.map((caseSlug) => (
                    <CaseCard key={caseSlug} slug={caseSlug} />
                  ))}
                </div>
              </>
            ) : offer ? (
              <div className="relative grid grid-cols-2 items-center gap-14 overflow-hidden rounded-[28px] bg-brand p-14 text-white max-[900px]:grid-cols-1 max-[480px]:p-8">
                <div>
                  <div className="font-mono text-[12px] font-semibold tracking-widest text-brand-ice uppercase">
                    {offer.label}
                  </div>
                  <h2 className="mt-4 text-[clamp(26px,3.2vw,42px)] font-bold leading-[1.08] tracking-[-0.024em]">
                    {offer.title}
                  </h2>
                  <p className="mt-4 max-w-[440px] text-[16px] leading-[1.65] text-brand-ice">
                    {offer.text}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <Link
                    className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-brand-50"
                    href={offer.href}
                  >
                    {offer.cta} <ArrowRight size={15} />
                  </Link>
                  <span className="text-[13px] text-brand-ice">No obligation to build</span>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* ── 6b. Booking nudge ───────────────────────────────────────── */}
        <section className="px-6 pt-24 pb-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap items-center justify-between gap-8 rounded-[24px] bg-ink p-8 text-white max-[900px]:p-6">
              <div className="max-w-[560px]">
                <div className="font-mono text-[12px] font-semibold tracking-widest text-mint uppercase">
                  Ready when you are
                </div>
                <h2 className="mt-3 text-[clamp(22px,2.6vw,32px)] font-bold leading-[1.1] tracking-[-0.02em]">
                  See if this is the right fit — book a discovery call.
                </h2>
                <p className="mt-3 text-[14px] leading-[1.65] text-mist">
                  Thirty minutes, a clear picture of the problem and your tools. No obligation to build.
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-4">
                <Link
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-brand-50"
                  href="/contact#book"
                >
                  Book a discovery call <ArrowRight size={15} />
                </Link>
                <span className="text-[13px] text-mist">You get a reply within one business day</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. Related reading ─────────────────────────────────────── */}
        {articles.length > 0 ? (
          <section className="px-6 pt-24">
            <div className="mx-auto max-w-[1200px]">
              <div className="flex flex-wrap items-end justify-between gap-5">
                <div>
                  <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                    Related reading
                  </div>
                  <h2 className="mt-4 text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.1] tracking-[-0.024em]">
                    Go deeper on this problem.
                  </h2>
                </div>
                <Link className="text-[14px] font-semibold text-brand underline-offset-4 hover:underline" href="/insights">
                  All insights →
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ── 8. FAQ ─────────────────────────────────────────────────── */}
        <FaqList title="Questions we are asked." items={service.faq} />
      </main>

      <SiteFooter title={service.closing.title} text={service.closing.text} />
    </>
  );
}
