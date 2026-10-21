/** Site-wide constants and navigation. Routes mirror docs/blueprint section 2. */
export const SITE_URL = "https://ansaristudio.com"; // placeholder until the domain is bought
export const SITE_NAME = "Ansari Studio";
/** Shown on the contact page in the design. */
export const CONTACT_EMAIL = "wahabansari.dev@gmail.com";

/** Cal.com event types. The private "secret" event is deliberately not linked from the public site. */
export const BOOKING_URL = "https://cal.com/wahabansari/30min";
export const BOOKING_URL_SHORT = "https://cal.com/wahabansari/15min";
/** Where every "Book a 30-minute call" button points: the contact page, which opens the calendar. */
export const BOOKING_HREF = "/contact#book";

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
