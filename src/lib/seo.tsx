import { SERVICES } from "@/data/services";
import { CONTACT_EMAIL, SITE_NAME, SITE_TAGLINE, SITE_URL, absoluteUrl } from "./site";

/**
 * Structured data helpers. Organization, Service, BreadcrumbList, FAQPage and BlogPosting —
 * all describing things that are true and visible on the page. No review or rating markup.
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

/** The business as schema.org sees it: one company, five services, clients worldwide. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    description: SITE_TAGLINE,
    areaServed: [
      { "@type": "Place", name: "Worldwide" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Place", name: "Europe" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.name, url: absoluteUrl(service.href) },
      })),
    },
  };
}

export interface ServiceJsonLdInput {
  /** Service name, e.g. "Product Engineering". */
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
    areaServed: "Worldwide",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/** FAQPage markup. Pass exactly the questions and answers the page shows. */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
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
  const organization = { "@type": "Organization", name: SITE_NAME, url: SITE_URL };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    inLanguage: "en",
    mainEntityOfPage: absoluteUrl(path),
    author: organization,
    publisher: organization,
  };
}
