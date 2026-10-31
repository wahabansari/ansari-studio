/**
 * Site-wide constants and navigation.
 * The brand is "Ansari Product Engineering"; routes mirror docs/blueprint section 2.
 */

export const SITE_NAME = "Ansari Product Engineering";
/** Brand signature, used in the footer (never as a mechanical ticker). */
export const SLOGAN = "Build. Modernize. Integrate.";
/** The one-line description of the company, used in the footer and as the Organization description. */
export const SITE_TAGLINE = "We build, modernize and integrate the software growing businesses run on.";
/** Who we work with and where, stated the same way everywhere. */
export const SERVICE_AREA = "Working with clients worldwide, mainly in the US, UK, Europe and the Middle East.";
export const WORKING_HOURS = "Times overlap US, UK, European and Middle Eastern working hours";
export const CONTACT_EMAIL = "wahabansari.dev@gmail.com";

/**
 * The only founder identity verified in this repository (REBRAND-REPORT.md).
 * Do not add a photo, credentials or biography beyond what can be supported.
 */
export const FOUNDER = {
  name: "Muhammad Wahab Ansari",
  role: "Founder",
  linkedin: "https://www.linkedin.com/in/wahabansari/",
} as const;

/**
 * The canonical origin, resolved once at build/render time.
 *
 * 1. NEXT_PUBLIC_SITE_URL            — explicit site URL, always wins when set
 * 2. VERCEL_PROJECT_PRODUCTION_URL   — production domain on Vercel (host name, no scheme)
 * 3. VERCEL_URL                      — per-deployment domain on Vercel (host name, no scheme)
 * 4. http://localhost:3000           — local development only
 *
 * `ansaristudio.com` is deliberately never used: it belongs to an unrelated business.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return normalizeSiteUrl(explicit);

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) return normalizeSiteUrl(productionHost, "https://");

  const deploymentHost = process.env.VERCEL_URL?.trim();
  if (deploymentHost) return normalizeSiteUrl(deploymentHost, "https://");

  // Last resort. In production this means no site URL was configured — keep the build
  // working, but make the gap impossible to miss in the deploy logs.
  if (process.env.NODE_ENV === "production") {
    console.warn(
      "[site] No site URL configured. Set NEXT_PUBLIC_SITE_URL (or rely on VERCEL_PROJECT_PRODUCTION_URL on Vercel) so canonical and Open Graph URLs are correct.",
    );
  }
  return "http://localhost:3000";
}

function normalizeSiteUrl(raw: string, scheme?: string): string {
  const withScheme = scheme && !/^[a-z][a-z0-9+.-]*:\/\//i.test(raw) ? `${scheme}${raw}` : raw;
  return withScheme.replace(/\/+$/, "").toLowerCase();
}

export const SITE_URL = resolveSiteUrl();

/**
 * True on Vercel preview deployments (and local dev). Pages append noindex metadata when
 * this is set, so previews never end up in search results.
 */
export function isPreviewDeployment(): boolean {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return true;
  if (process.env.NODE_ENV === "development") return true;
  return false;
}

/** Joins a root-relative path with the canonical origin (sitemap, canonical tags, JSON-LD). */
export function absoluteUrl(path: string): string {
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(path)) return path;
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Cal.com event types. The private "secret" event is deliberately not linked from the public site. */
export const BOOKING_URL = "https://cal.com/wahabansari/30min";
export const BOOKING_URL_SHORT = "https://cal.com/wahabansari/15min";
/** Where every "Book a discovery call" button points: the contact page, which opens the calendar. */
export const BOOKING_HREF = "/contact#book";

export const MAIN_NAV = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Insights", href: "/insights" },
] as const;

/** A nav item is current on its own page and on every page below it (e.g. /services/automation-ai). */
export function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
