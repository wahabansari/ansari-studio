import Link from "next/link";
import { ARTICLES_NEWEST_FIRST, articleHref, formatArticleDate } from "@/data/articles";
import { ArticleCard } from "@/components/design/ArticleCard";
import { AUTHOR_NAME, AuthorAvatar } from "@/components/design/AuthorBadge";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { ArrowRight } from "@/components/icons";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Insights on Modernization, Automation and Custom Software",
  description:
    "Practical guides on modernizing software, automating manual work and building business applications — written by the engineer who does the work.",
  path: "/insights",
});

export default function InsightsPage() {
  const [featured, ...rest] = ARTICLES_NEWEST_FIRST;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <main id="main">
        <PageHero
          active="insights"
          parent=""
          crumb="Insights"
          eyebrow="Insights"
          title="Practical guides on building, modernizing"
          titleAccent="and automating software."
          lead="No trend pieces and no invented statistics. Each guide describes work we actually do, in the order we do it."
          primary="Book a discovery call"
          primaryHref="/contact#book"
          secondary="Discuss your project"
          secondaryHref="/contact"
          points=""
        />

        <section className="px-6 pt-20 pb-24">
          <div className="mx-auto max-w-[1200px]">

            {/* Header row */}
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                  Latest
                </div>
                <h2 className="mt-3 text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.1] tracking-[-0.024em]">
                  Start here.
                </h2>
              </div>
              <span className="text-[13px] text-faint">
                {ARTICLES_NEWEST_FIRST.length} guides · Updated{" "}
                {formatArticleDate(ARTICLES_NEWEST_FIRST[0].dateModified)}
              </span>
            </div>

            {/* Featured article */}
            <Link
              href={articleHref(featured.slug)}
              className="mt-8 grid grid-cols-[1.05fr_0.95fr] overflow-hidden rounded-[24px] border border-line transition-all duration-200 hover:border-brand-200 hover:shadow-[0_16px_40px_-16px_rgba(10,16,34,0.16)] max-[900px]:grid-cols-1"
            >
              {/* Dark panel */}
              <div className="relative flex min-h-[340px] flex-col justify-end bg-ink bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] p-9 max-[480px]:p-6">
                <div className="font-mono text-[11px] font-semibold tracking-widest text-mint uppercase">
                  Featured guide
                </div>
                <div className="mt-4 text-[clamp(24px,2.8vw,36px)] font-bold leading-[1.12] tracking-[-0.022em] text-white">
                  {featured.headline}{" "}
                  <span className="text-brand-300">{featured.accent}</span>
                </div>
                <div className="mt-5 flex items-center gap-3 text-[13px] text-mist">
                  <AuthorAvatar size={28} />
                  {AUTHOR_NAME} · {featured.readMinutes} min read
                </div>
              </div>

              {/* White panel */}
              <div className="flex flex-col justify-center bg-white p-9 max-[480px]:p-6">
                <div className="flex flex-wrap items-center gap-2.5 text-[12px]">
                  <span className="rounded-full bg-teal-50 px-3 py-1 font-semibold text-teal-deep">
                    {featured.category}
                  </span>
                  <span className="text-faint">{formatArticleDate(featured.datePublished)}</span>
                </div>
                <h3 className="mt-5 text-[clamp(22px,2.6vw,32px)] font-bold leading-[1.18] tracking-[-0.018em]">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-muted">{featured.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                  Read the guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Rest of articles */}
            <div className="mt-5 grid grid-cols-3 gap-5 max-[900px]:grid-cols-1 max-[1100px]:grid-cols-2">
              {rest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            {/* Suggest a topic */}
            <div className="mt-5 flex items-center justify-between gap-5 rounded-[20px] bg-ink px-7 py-6 text-white max-[600px]:flex-col max-[600px]:items-start">
              <div>
                <h2 className="text-[18px] font-bold tracking-[-0.012em]">
                  Have a topic you want covered?
                </h2>
                <p className="mt-1 text-[13px] leading-[1.6] text-mist">
                  Send a question and it may become the next article.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex h-10 items-center rounded-xl border border-edge bg-raised px-5 text-[14px] font-semibold text-brand-300 transition-colors duration-150 hover:border-white/20 hover:text-white"
              >
                Suggest a topic →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        title="Rather talk it through?"
        text="Tell us what you are trying to build, improve or connect. You get a reply within one business day."
      />
    </>
  );
}
