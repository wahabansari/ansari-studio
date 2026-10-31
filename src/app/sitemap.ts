import type { MetadataRoute } from "next";
import { ARTICLES, articleHref } from "@/data/articles";
import { CASE_ORDER } from "@/data/cases";
import { SERVICES } from "@/data/services";
import { SITE_URL } from "@/lib/site";

const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

/**
 * Static pages plus every service, published case study and article.
 * Noindex pages (thank-you, 404) and /api are deliberately left out.
 */
const STATIC_PAGES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/automation-audit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
  { path: "/process", priority: 0.6, changeFrequency: "yearly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/partners", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICES.map((service) => ({
    url: url(service.href),
    priority: service.slug === "modernization" || service.slug === "automation-ai" ? 0.9 : 0.8,
    changeFrequency: "monthly" as const,
  }));

  const casePages = CASE_ORDER.map((slug) => ({
    url: url(`/work/${slug}`),
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  const articlePages = ARTICLES.map((article) => ({
    url: url(articleHref(article.slug)),
    lastModified: new Date(`${article.dateModified}T00:00:00Z`),
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

  return [
    ...STATIC_PAGES.map((page) => ({
      url: url(page.path),
      priority: page.priority,
      changeFrequency: page.changeFrequency,
    })),
    ...servicePages,
    ...casePages,
    ...articlePages,
  ];
}
