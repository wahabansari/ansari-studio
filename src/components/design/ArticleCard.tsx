import Link from "next/link";
import { articleHref, formatArticleDate, type Article } from "@/data/articles";
import { ArrowRight } from "@/components/icons";

/**
 * Article card used on the insights index, service pages and article related-reading strips.
 * `featured` renders the larger hero treatment on /insights.
 */
export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <Link
      href={articleHref(article.slug)}
      className={`group flex flex-col rounded-[20px] border border-line bg-white transition-all duration-200 hover:border-brand-200 hover:shadow-[0_12px_32px_-12px_rgba(10,16,34,0.14)] ${
        featured ? "gap-5 p-8 max-[600px]:p-6" : "gap-4 p-6"
      }`}
    >
      {/* Category + read time */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-[12px] font-semibold text-brand">
          {article.category}
        </span>
        <span className="text-[12px] text-faint">{article.readMinutes} min read</span>
      </div>

      {/* Title */}
      <h3
        className={`font-bold leading-[1.25] tracking-[-0.018em] text-ink group-hover:text-brand transition-colors duration-150 ${
          featured ? "text-[clamp(22px,2.4vw,30px)]" : "text-[19px]"
        }`}
      >
        {article.title}
      </h3>

      {/* Description */}
      <p className="text-[14px] leading-[1.7] text-muted">{article.description}</p>

      {/* Footer row */}
      <div className="mt-auto flex items-center justify-between gap-4 pt-1 text-[13px]">
        <span className="text-faint">{formatArticleDate(article.datePublished)}</span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-brand">
          Read <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
