import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/design/ArticleBody";
import { ArticleCard } from "@/components/design/ArticleCard";
import { AUTHOR_NAME, AuthorAvatar } from "@/components/design/AuthorBadge";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { ArrowRight } from "@/components/icons";
import {
  ARTICLE_BY_SLUG,
  ARTICLES,
  articleHref,
  formatArticleDate,
  isArticleSlug,
  relatedArticles,
} from "@/data/articles";
import { SERVICE_BY_SLUG } from "@/data/services";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isArticleSlug(slug)) notFound();
  const article = ARTICLE_BY_SLUG[slug];
  const path = articleHref(article.slug);
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: path,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [AUTHOR_NAME],
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isArticleSlug(slug)) notFound();

  const article = ARTICLE_BY_SLUG[slug];
  const path = articleHref(article.slug);
  const service = SERVICE_BY_SLUG[article.service];
  const related = relatedArticles(article.slug);
  const sections = article.blocks.filter((b) => b.type === "h2");

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          headline: article.title,
          description: article.description,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: article.category, path },
        ])}
      />

      <main id="main">
        <PageHero
          active="insights"
          parent="Insights"
          parentHref="/insights"
          crumb={article.category}
          eyebrow={`${article.category} · ${article.readMinutes} min read`}
          title={article.headline}
          titleAccent={article.accent}
          lead={article.description}
          primary="Book a discovery call"
          primaryHref="/contact#book"
          secondary=""
          points=""
          glow={article.service === "automation-ai" ? "mint" : "blue"}
        />

        <section className="px-6 pt-16 pb-24">
          <div className="mx-auto grid max-w-[1100px] grid-cols-[220px_minmax(0,680px)] items-start justify-center gap-16 max-[900px]:grid-cols-1">

            {/* ── Sidebar ─────────────────────────────────────────── */}
            <aside className="sticky top-6 max-[900px]:hidden">
              {/* Author */}
              <div className="flex items-center gap-3 border-b border-line-soft pb-5">
                <AuthorAvatar size={38} />
                <span className="text-[13px] leading-[1.45]">
                  <b className="block font-bold">{AUTHOR_NAME}</b>
                  <span className="text-faint">
                    Published {formatArticleDate(article.datePublished)}
                  </span>
                </span>
              </div>

              {/* Table of contents */}
              {sections.length > 0 && (
                <nav className="mt-5" aria-label="On this page">
                  <div className="font-mono text-[11px] font-semibold tracking-widest text-faint uppercase">
                    On this page
                  </div>
                  <ul className="mt-3 flex flex-col gap-0.5 text-[13px]">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="block rounded-lg px-3 py-2 text-muted transition-colors hover:bg-subtle hover:text-ink"
                        >
                          {s.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              <div className="mt-6 rounded-[14px] border border-line bg-subtle p-4 text-[12px] leading-[1.65] text-muted">
                Written by the engineer who would do the work.
              </div>
            </aside>

            {/* ── Article ─────────────────────────────────────────── */}
            <article>
              {/* Meta bar */}
              <div className="mb-6 flex flex-wrap items-center gap-2.5 border-b border-line-soft pb-5 text-[12px] text-faint">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand">
                  {article.category}
                </span>
                <span>{formatArticleDate(article.datePublished)}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readMinutes} min read</span>
                {article.dateModified !== article.datePublished && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Updated {formatArticleDate(article.dateModified)}</span>
                  </>
                )}
              </div>

              <ArticleBody blocks={article.blocks} />

              {/* Related service card */}
              <div className="mt-12 flex flex-col gap-2.5 rounded-[20px] bg-ink p-7 text-white">
                <span className="font-mono text-[11px] font-semibold tracking-widest text-mint uppercase">
                  Related service
                </span>
                <span className="text-[19px] font-bold leading-[1.25] tracking-[-0.014em]">
                  {service.name}
                </span>
                <span className="text-[14px] leading-[1.65] text-mist">{service.summary}</span>
                <Link
                  href={service.href}
                  className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-mint underline-offset-4 hover:underline"
                >
                  See how this service works <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ── Related articles ─────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="border-t border-line-soft bg-subtle px-6 py-20">
            <div className="mx-auto max-w-[1200px]">
              <div className="flex flex-wrap items-end justify-between gap-5">
                <div>
                  <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
                    Keep reading
                  </div>
                  <h2 className="mt-3 text-[clamp(24px,3vw,36px)] font-bold leading-[1.1] tracking-[-0.022em]">
                    Related insights.
                  </h2>
                </div>
                <Link
                  href="/insights"
                  className="text-[14px] font-semibold text-brand underline-offset-4 hover:underline"
                >
                  All insights →
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                {related.map((item) => (
                  <ArticleCard key={item.slug} article={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter
        title="Want help applying this?"
        text="Tell us what you are trying to fix. You get a reply within one business day."
      />
    </>
  );
}
