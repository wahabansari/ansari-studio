/**
 * The five services, in the order they appear everywhere on the site (header menu, footer,
 * contact chips, sitemap and structured data). Change a name here and it changes everywhere.
 * Page copy lives in `src/content/*.tsx`.
 */
export type ServiceSlug =
  | "product-engineering"
  | "modernization"
  | "dashboards-portals"
  | "maintenance-retainer"
  | "automation-ai";

export interface Service {
  slug: ServiceSlug;
  href: `/services/${string}`;
  /** Full name, as shown in menus, chips and headings. */
  name: string;
  /** One line used in the menu and in structured data. */
  summary: string;
  /** Page title (the root layout appends the site name). */
  metaTitle: string;
  /** Search and social description, kept under about 160 characters. */
  metaDescription: string;
}

export const SERVICES: readonly Service[] = [
  {
    slug: "product-engineering",
    href: "/services/product-engineering",
    name: "Product Engineering",
    summary: "MVPs, products and features",
    metaTitle: "MVP, SaaS & Web App Development",
    metaDescription:
      "We design and build web products, MVPs and new features with a written scope, weekly progress and a clean handover.",
  },
  {
    slug: "modernization",
    href: "/services/modernization",
    name: "Website & Web App Modernization",
    summary: "Faster, easier-to-change software",
    metaTitle: "Website & Web App Modernization",
    metaDescription:
      "We make slow, ageing software faster and easier to change. Measured first, then improved in small, safe steps while your site stays live.",
  },
  {
    slug: "dashboards-portals",
    href: "/services/dashboards-portals",
    name: "Dashboards & Client Portals",
    summary: "Admin panels and client portals",
    metaTitle: "Custom Dashboards & Client Portals",
    metaDescription:
      "We bring the data your team and clients need into one fast, secure place, connected to the systems you already use.",
  },
  {
    slug: "maintenance-retainer",
    href: "/services/maintenance-retainer",
    name: "Maintenance & Ongoing Development",
    summary: "Updates, fixes, monthly report",
    metaTitle: "Website Maintenance & Ongoing Development",
    metaDescription:
      "Updates, fixes, monitoring and small improvements every month, with priorities you set and a clear monthly report.",
  },
  {
    slug: "automation-ai",
    href: "/services/automation-ai",
    name: "AI Integrations & Workflow Automation",
    summary: "Workflows, and AI where it helps",
    metaTitle: "AI Integrations & Workflow Automation",
    metaDescription:
      "We connect your forms, CRM, inbox and other tools so routine work happens on its own, and add AI only where it clearly helps.",
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((service) => [service.slug, service])) as Record<
  ServiceSlug,
  Service
>;
