import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Allow search and AI-answer crawlers everywhere except the form endpoints (docs/blueprint section 3).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
