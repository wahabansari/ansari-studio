/** Site-wide constants and navigation. Routes mirror docs/blueprint section 2. */
export const SITE_URL = "https://ansaristudio.com"; // placeholder until the domain is bought
export const SITE_NAME = "Ansari Studio";
/** Shown on the contact page in the design. */
export const CONTACT_EMAIL = "wahabansari.dev@gmail.com";

export const MAIN_NAV = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

/** A nav item is current on its own page and on every page below it (e.g. /services/automation-ai). */
export function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
