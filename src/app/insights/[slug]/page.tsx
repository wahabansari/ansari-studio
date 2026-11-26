import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, LogoMark } from "@/components/brand";
import { CtaBand } from "@/components/CtaBand";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
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
import { FOUNDER } from "@/lib/site";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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
      authors: [FOUNDER.name],
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
  const sections = article.blocks.flatMap((block) => (block.type === "h2" ? [block] : []));

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
          crumbs={[{ label: "Insights", href: "/insights" }, { label: article.category }]}
          eyebrow={`${article.category} · ${article.readMinutes} min read`}
          title={
            <>
              {article.headline} <em>{article.accent}</em>
            </>
          }
          lead={article.description}
        />

        <section className="sec">
          <div className="wrap">
            <div className="art-layout">
              <aside className="toc">
                <div className="who" style={{ marginTop: 0 }}>
                  <span className="logo" style={{ gap: 0 }}>
                    <LogoMark variant="dark" />
                  </span>
                  <span className="by">
                    <b>{FOUNDER.name}</b>
                    Published {formatArticleDate(article.datePublished)}
                  </span>
                </div>
                {sections.length > 0 && (
                  <nav aria-label="On this page">
                    <h4>On this page</h4>
                    {sections.map((section) => (
                      <a key={section.id} href={`#${section.id}`}>
                        {section.text}
                      </a>
                    ))}
                  </nav>
                )}
              </aside>
              <article className="doc wide">
                <div className="meta-row">
                  <span className="tag">{article.category}</span>
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
                <Link className="cell dk" href={service.href} style={{ marginTop: 40, borderRadius: 20 }}>
                  <span className="fig">Related service</span>
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                  <span className="more">
                    See how this service works <ArrowIcon />
                  </span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="sec t">
            <div className="wrap">
              <div className="head r">
                <div>
                  <span className="eyebrow">Keep reading</span>
                  <h2 className="h2">Related insights</h2>
                </div>
                <Link className="btn btn-g btn-s" href="/insights">
                  All insights <ArrowIcon />
                </Link>
              </div>
              <Reveal className="mb">
                {related.map((item) => (
                  <Link key={item.slug} className="cell c4" href={articleHref(item.slug)}>
                    <span className="fig">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="more">
                      Read guide <ArrowIcon />
                    </span>
                  </Link>
                ))}
              </Reveal>
            </div>
          </section>
        )}

        <CtaBand title="Want help applying this?" text="Tell us what you are trying to fix. You get a reply within one business day." />
      </main>
    </>
  );
}
