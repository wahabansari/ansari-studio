import type { Metadata } from "next";
import { SITE_NAME } from "./site";

interface PageMetadataInput {
  /** Page title. A plain string gets the site name appended for Open Graph, matching the title template. */
  title: Metadata["title"];
  /** Meta description and Open Graph description. Keep it under ~160 characters. */
  description: string;
  /** Root-relative route, used for both the canonical and og:url. */
  path: string;
  /** Set for pages that must never be indexed. */
  noindex?: boolean;
  /** OG image URL (absolute). */
  ogImage?: string;
}

/**
 * Builds the metadata every public page needs: title, description, canonical, and a complete
 * Open Graph object. Keeping og:url, site name and locale here means they cannot drift apart
 * from the canonical, which is what share previews and search engines both read.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
  ogImage = "/opengraph-image",
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      title: socialTitle(title),
      description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

function socialTitle(title: Metadata["title"]): string {
  if (typeof title === "string") {
    return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  }
  if (title && typeof title === "object" && "absolute" in title) return title.absolute;
  return SITE_NAME;
}