import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { SERVICES } from "@/data/services";
import { SERVICE_AREA, SITE_NAME, SITE_TAGLINE, SLOGAN } from "@/lib/site";

export interface SiteFooterProps {
  title?: string;
  text?: string;
  cta?: string;
  ctaHref?: string;
  secondary?: string;
  secondaryHref?: string;
}

export const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: SERVICES.map((s) => ({ label: s.name, href: s.href })),
  },
  {
    title: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "Process", href: "/process" },
      { label: "About", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Discuss your project", href: "/contact" },
      { label: "Automation audit", href: "/automation-audit" },
    ],
  },
];

export function SiteFooter({
  title = "Tell us what you need to build.",
  text = "Share what you want to build, improve or connect. You get a reply within one business day.",
  cta = "Book a discovery call",
  ctaHref = "/contact#book",
  secondary = "Discuss your project",
  secondaryHref = "/contact",
}: SiteFooterProps) {
  return (
    <section className="relative overflow-hidden bg-night px-6 pt-28 text-white">
      {/* Radial glow — contained so it never overflows on narrow viewports */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-320px] left-1/2 h-[600px] w-full max-w-[900px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(46,79,227,0.30),transparent)]"
      />

      {/* CTA block */}
      <div className="relative mx-auto max-w-[760px] text-center">
        <h2 className="text-[clamp(34px,5vw,62px)] font-bold leading-[1.06] tracking-[-0.03em]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.7] text-mist">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={ctaHref}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-6 text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_28px_-8px_rgba(46,79,227,0.75)] transition-colors duration-150 hover:bg-[#2440c4]"
          >
            {cta} <ArrowRight size={15} />
          </Link>
          {secondary ? (
            <Link
              href={secondaryHref}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/[0.14] bg-white/[0.05] px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:border-white/25 hover:bg-white/[0.09]"
            >
              {secondary}
            </Link>
          ) : null}
        </div>
      </div>

      {/* Footer links */}
      <footer
        className="relative mx-auto mt-24 max-w-[1200px] border-t border-white/[0.07] pt-14 pb-8"
        aria-label="Site footer"
      >
        <div className="flex flex-wrap justify-between gap-x-16 gap-y-10">
          {/* Brand column */}
          <div className="max-w-[300px] flex-[1_1_240px]">
            <Image
              src="/brand/ansari-pe-horizontal-color-dark.svg"
              alt={SITE_NAME}
              width={130}
              height={29}
              className="h-[29px] w-auto"
            />
            <p className="mt-4 text-[14px] leading-[1.65] text-mist">{SITE_TAGLINE}</p>
            <p className="mt-2.5 text-[13px] text-dim">{SERVICE_AREA}</p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-[12px] font-semibold tracking-widest text-white/70 uppercase">
                  {col.title}
                </div>
                <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-mist">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-6 text-[13px] text-dim">
          <span>
            © 2026 {SITE_NAME} · {SLOGAN}
          </span>
          <nav aria-label="Legal links" className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </section>
  );
}
