import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { PageTransition } from "@/components/PageTransition";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

// Inter Variable (the design's only text face), self-hosted and preloaded by next/font.
const interVariable = localFont({
  src: "../fonts/InterVariable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter-variable",
  display: "swap",
});

// JetBrains Mono for the design's small code-style labels.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ansari Studio | Engineering & Automation for Growing Teams",
    template: "%s | Ansari Studio",
  },
  description:
    "Founder-led studio that builds web products, modernizes slow software and automates repetitive work with n8n and AI. Book a free automation audit.",
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#070B16",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${interVariable.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a
          href="#main"
          className="fixed top-[12px] left-[12px] z-50 -translate-y-[200%] rounded-[10px] bg-brand px-[16px] py-[10px] text-[14px] font-semibold text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <PageTransition>
          <div className="bg-white text-ink">{children}</div>
        </PageTransition>
      </body>
    </html>
  );
}
