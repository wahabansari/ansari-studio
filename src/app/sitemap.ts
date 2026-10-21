import type { MetadataRoute } from "next";
import { CASE_ORDER } from "@/data/cases";
import { SITE_URL } from "@/lib/site";

// Priorities follow docs/blueprint section 2. Noindex pages (thank-you, 404) and /api are left out.
const PAGES: [path: string, priority: number][] = [
  ["/", 1.0],
  ["/services", 0.9],
  ["/services/automation-ai", 0.9],
  ["/services/product-engineering", 0.9],
  ["/services/dashboards-portals", 0.8],
  ["/services/modernization", 0.8],
  ["/services/maintenance-retainer", 0.7],
  ["/automation-audit", 0.9],
  ["/work", 0.8],
  ["/process", 0.6],
  ["/about", 0.6],
  ["/partners", 0.5],
  ["/insights", 0.7],
  ["/insights/automate-lead-follow-up", 0.6],
  ["/contact", 0.8],
  ["/privacy", 0.2],
  ["/terms", 0.2],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map(([path, priority]) => ({ url: `${SITE_URL}${path === "/" ? "" : path}`, priority })),
    ...CASE_ORDER.map((slug) => ({ url: `${SITE_URL}/work/${slug}`, priority: 0.7 })),
  ];
}
