import type { ComponentType } from "react";
import Link from "next/link";
import { ArrowIcon, LogoMark } from "@/components/brand";
import { Reveal } from "@/components/motion";
import { InsightsArt1 } from "@/content/art/InsightsArt1";
import { InsightsArt2 } from "@/content/art/InsightsArt2";
import { InsightsArt3 } from "@/content/art/InsightsArt3";
import { InsightsArt4 } from "@/content/art/InsightsArt4";
import { InsightsArt5 } from "@/content/art/InsightsArt5";
import { InsightsArt6 } from "@/content/art/InsightsArt6";
import { InsightsArt7 } from "@/content/art/InsightsArt7";
import { ARTICLES_NEWEST_FIRST, articleHref, type Article } from "@/data/articles";
import { SERVICES } from "@/data/services";

const ARTS: ComponentType[] = [
  InsightsArt2,
  InsightsArt3,
  InsightsArt4,
  InsightsArt5,
  InsightsArt6,
  InsightsArt7,
];

function ArticleCell({ article, art: Art, span }: { article: Article; art: ComponentType; span: string }) {
  return (
    <Link className={`cell ps ${span}`} href={articleHref(article.slug)}>
      <div className="pa">
        <Art />
      </div>
      <span className="fig">
        {article.category} · {article.readMinutes} min read
      </span>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <span className="more">
        Read guide <ArrowIcon />
      </span>
    </Link>
  );
}

/** Featured article, then the rest grouped by the service each one supports. */
export function InsightsList() {
  const [featured, ...rest] = ARTICLES_NEWEST_FIRST;
  const groups = SERVICES.map((service) => ({
    service,
    articles: rest.filter((article) => article.service === service.slug),
  })).filter((group) => group.articles.length > 0);

  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="mb" style={{ marginBottom: "44px" }}>
          <Link className="cell row fe c12" href={articleHref(featured.slug)}>
            <div className="tx">
              <span className="fig">Featured · {featured.category}</span>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <div className="who">
                <span className="logo" style={{ gap: "0" }}>
                  <LogoMark variant="dark" />
                </span>
                <span className="sm">Ansari Product Engineering</span>
              </div>
              <span className="more">
                Read guide <ArrowIcon />
              </span>
            </div>
            <div className="art">
              <InsightsArt1 />
            </div>
          </Link>
        </Reveal>
        {groups.map((group, groupIndex) => (
          <div className="cat-sec" id={group.service.slug} key={group.service.slug}>
            <Reveal className="mb">
              <div className={`cell intro c4${groupIndex % 2 ? " r" : ""}`}>
                <h3>{group.service.name}</h3>
                <p>{group.service.summary}.</p>
                <span className="cnt">
                  {group.articles.length} {group.articles.length === 1 ? "guide" : "guides"}
                </span>
              </div>
              {group.articles.map((article, index) => (
                <ArticleCell
                  key={article.slug}
                  article={article}
                  art={ARTS[(groupIndex * 2 + index) % ARTS.length]}
                  span={group.articles.length === 1 ? "c8" : "c4"}
                />
              ))}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
