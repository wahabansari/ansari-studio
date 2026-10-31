import { SERVICES } from "@/data/services";
import {
  CONTACT_EMAIL,
  FOUNDER,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  absoluteUrl,
} from "./site";

/**
 * Structured data helpers. Organization, WebSite, Service, BreadcrumbList, FAQPage, Person and
 * BlogPosting — all describing things that are true and visible on the page. No review or rating markup.
 */

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PERSON_ID = `${SITE_URL}/about#founder`;
const LOGO_URL = absoluteUrl("/brand/ansari-pe-symbol-color-dark.svg");

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

/** The business as schema.org sees it: one company, six services, clients worldwide. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: "Ansari Product Engineering",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    description: SITE_TAGLINE,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    image: LOGO_URL,
    founder: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: FOUNDER.name,
      url: absoluteUrl("/about"),
      sameAs: [FOUNDER.linkedin],
    },
    sameAs: [FOUNDER.linkedin],
    areaServed: [
      { "@type": "Place", name: "Worldwide" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Place", name: "Europe" },
      { "@type": "Place", name: "Middle East" },
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

/** The site itself, so search engines can associate pages with one named site. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/** The founder, as a Person. Only facts supported by the repository are included. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: FOUNDER.name,
    jobTitle: FOUNDER.role,
    url: absoluteUrl("/about"),
    sameAs: [FOUNDER.linkedin],
    worksFor: { "@type": "Organization", "@id": ORGANIZATION_ID, name: SITE_NAME },
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
      "@id": ORGANIZATION_ID,
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
  /** ISO date of the last edit. */
  dateModified: string;
  path: string;
  /** Absolute or root-relative image URL for the article. */
  image?: string;
}

export function articleJsonLd({
  headline,
  description,
  datePublished,
  dateModified,
  path,
  image = "/opengraph-image",
}: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    dateModified,
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
    image: absoluteUrl(image),
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: FOUNDER.name,
      url: absoluteUrl("/about"),
      sameAs: [FOUNDER.linkedin],
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
  };
}
