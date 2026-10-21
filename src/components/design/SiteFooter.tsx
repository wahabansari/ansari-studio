import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "@/components/icons";

/** Dark closing call-to-action plus the site footer (design component "SiteFooter"). */
export interface SiteFooterProps {
  title?: string;
  text?: string;
  cta?: string;
  ctaHref?: string;
}

export const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Automation & AI", href: "/services/automation-ai" },
      { label: "Product engineering", href: "/services/product-engineering" },
      { label: "Dashboards & portals", href: "/services/dashboards-portals" },
      { label: "Modernization", href: "/services/modernization" },
      { label: "Maintenance & retainer", href: "/services/maintenance-retainer" },
    ],
  },
  {
    title: "Studio",
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
      { label: "Free automation audit", href: "/automation-audit" },
    ],
  },
];

export function SiteFooter({
  title = "Tell us what you need to build.",
  text = "Share what you want to build, improve or connect. You get a reply within one business day.",
  cta = "Discuss your project",
  ctaHref = "/contact",
}: SiteFooterProps) {
  return (
    <section className="relative overflow-hidden bg-night px-[24px] pt-[120px] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-380px] left-1/2 h-[720px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(46,79,227,0.35),rgba(46,79,227,0))]"
      />
      <div className="relative mx-auto max-w-[820px] text-center">
        <h2 className="text-[length:clamp(38px,5.2vw,68px)] leading-[1.0] font-bold tracking-[-0.03em] text-white">
          {title}
        </h2>
        <p className="mx-auto mt-[22px] max-w-[560px] text-[18px] leading-[1.6] text-mist">{text}</p>
        <div className="mt-[36px] flex flex-wrap justify-center gap-[12px]">
          <Link
            href={ctaHref}
            className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] bg-brand px-[24px] text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(46,79,227,0.8)] transition-colors duration-150 hover:bg-[#2643c9]"
          >
            {cta} <ArrowRight />
          </Link>
          <Link
            href="/contact#book"
            className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] border border-white/[0.14] bg-white/[0.05] px-[24px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/[0.09]"
          >
            <Calendar />
            Book a 30-minute call
          </Link>
        </div>
      </div>

      <footer className="relative mx-auto mt-[120px] max-w-[1200px] border-t border-white/[0.08] pt-[56px] pb-[32px]">
        <div className="flex flex-wrap justify-between gap-x-[64px] gap-y-[40px]">
          <div className="max-w-[320px] flex-[1_1_260px]">
            <Image
              src="/brand/logo-white.svg"
              alt="Ansari Studio"
              width={142}
              height={24}
              className="block h-[24px] w-auto"
            />
            <p className="mt-[18px] text-[14px] leading-[1.6] text-mist">
              We help growing businesses build, improve and connect the software they rely on.
            </p>
            <p className="mt-[10px] text-[13px] text-dim">Based in Pakistan, serving the UK and USA.</p>
          </div>
          <div className="flex flex-wrap gap-x-[72px] gap-y-[40px]">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <div className="text-[13px] font-semibold text-white">{column.title}</div>
                <ul className="mt-[16px] flex flex-col gap-[11px] text-[14px] text-mist">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition-colors duration-150 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[56px] flex flex-wrap justify-between gap-[16px] border-t border-white/[0.08] pt-[24px] text-[13px] text-dim">
          <span>© 2026 Ansari Studio · Build. Improve. Connect.</span>
          <span className="flex gap-[24px]">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </span>
        </div>
      </footer>
    </section>
  );
}
