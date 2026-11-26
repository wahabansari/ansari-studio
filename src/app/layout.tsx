import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { MotionProvider, ScrollProgress } from "@/components/motion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, SLOGAN, isPreviewDeployment } from "@/lib/site";
import "./globals.css";

// Inter: the only typeface, for headings, body copy and UI text.
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

// Preview deployments (and local dev) are never indexed; production pages stay indexable.
const previewRobots = isPreviewDeployment() ? { index: false, follow: false } : undefined;

const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION?.trim() || "T8_DkVEVl9u0RlU-zH6YWRQpyfT1GSUxbDXRxtI-lHQ";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SLOGAN}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  ...(previewRobots ? { robots: previewRobots } : {}),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_US" },
  twitter: { card: "summary_large_image" },
  ...(googleSiteVerification ? { verification: { google: googleSiteVerification } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#07080D",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.variable}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <MotionProvider>
          <div className="site">
            <a href="#main" className="skip">
              Skip to content
            </a>
            <ScrollProgress />
            <div className="shell">
              <SiteHeader />
              {children}
            </div>
            <SiteFooter />
          </div>
          <ConsentBanner />
        </MotionProvider>
        <VercelAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
