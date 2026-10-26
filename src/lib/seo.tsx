import { CONTACT_EMAIL, FOUNDER_NAME, LINKEDIN_URL, SITE_NAME, SITE_URL, absoluteUrl } from "./site";

/**
 * Structured data helpers. Only four schema types are used on the whole site —
 * Organization, Service, BreadcrumbList and Article/BlogPosting — all describing
 * things that are true. No FAQPage, no review or rating markup.
 */

/** Renders a JSON-LD document. Server component; safe to drop anywhere in the tree. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD payloads are generated here, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** The business as schema.org sees it: a founder-led engineering practice with one public identity. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
      jobTitle: "Founder & engineer",
      url: LINKEDIN_URL,
    },
    sameAs: [LINKEDIN_URL],
  };
}

export interface ServiceJsonLdInput {
  /** Page H1/headline, e.g. "Product engineering". */
  name: string;
  /** One- or two-sentence summary mirroring the page's meta description. */
  description: string;
  /** Root-relative path of the service page, e.g. "/services/product-engineering". */
  path: string;
}

export function serviceJsonLd({ name, description, path }: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export interface BreadcrumbJsonLdInput {
  name: string;
  /** Root-relative path; the last crumb (the current page) may use the page path itself. */
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbJsonLdInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface ArticleJsonLdInput {
  headline: string;
  description: string;
  /** ISO date, e.g. "2026-10-20". */
  datePublished: string;
  path: string;
}

export function articleJsonLd({ headline, description, datePublished, path }: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Person",
      name: FOUNDER_NAME,
      url: LINKEDIN_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
