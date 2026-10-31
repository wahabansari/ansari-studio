import Link from "next/link";
import { ArrowRight, Check } from "@/components/icons";

/**
 * Dark page opener used by every inner page.
 * The site header overlays the top 84px of this section.
 */
export interface PageHeroProps {
  active?: string;
  glow?: "blue" | "mint" | string;
  parent?: string;
  parentHref?: string;
  crumb?: string;
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  lead?: string;
  primary?: string;
  primaryHref?: string;
  secondary?: string;
  secondaryHref?: string;
  /** Pipe-separated list e.g. "Written scope|Weekly progress" */
  points?: string;
}

export function PageHero({
  glow = "blue",
  parent = "Services",
  parentHref = "/services",
  crumb = "Product Engineering",
  eyebrow = "Product Engineering",
  title = "Product engineering for",
  titleAccent = "startups and growing businesses.",
  lead = "We design and build web products, MVPs and new features with a written scope, weekly progress and a clean handover.",
  primary = "Book a discovery call",
  primaryHref = "/contact#book",
  secondary = "Discuss your project",
  secondaryHref = "/contact",
  points = "Written scope|Weekly progress|You own the code",
}: PageHeroProps) {
  const mint = glow === "mint";
  const pointList = points
    .split("|")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-night pb-24 text-white">
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_70%_65%_at_70%_5%,#000_30%,transparent_100%)]"
      />
      {/* Glow blob */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-72 -right-32 h-[700px] w-[1000px] ${
          mint
            ? "bg-[radial-gradient(closest-side,rgba(98,220,203,0.20),transparent)]"
            : "bg-[radial-gradient(closest-side,rgba(46,79,227,0.38),transparent)]"
        }`}
      />

      {/* Space for fixed header */}
      <div aria-hidden="true" className="h-[84px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-16 sm:pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-dim">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            {parent ? (
              <>
                <li aria-hidden="true" className="select-none">/</li>
                <li>
                  <Link href={parentHref} className="transition-colors hover:text-white">
                    {parent}
                  </Link>
                </li>
              </>
            ) : null}
            <li aria-hidden="true" className="select-none">/</li>
            <li>
              <span aria-current="page" className="text-white/80">
                {crumb}
              </span>
            </li>
          </ol>
        </nav>

        {/* Eyebrow badge */}
        <div
          className={`mt-7 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-semibold tracking-wide uppercase ${
            mint
              ? "border border-mint/20 bg-mint/10 text-mint"
              : "border border-brand-300/20 bg-brand-300/10 text-brand-200"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${mint ? "bg-mint" : "bg-brand-300"}`} />
          {eyebrow}
        </div>

        {/* Heading */}
        <h1 className="mt-5 max-w-[860px] text-[clamp(36px,5.2vw,68px)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
          {title}{" "}
          <span className={mint ? "text-mint" : "text-brand-300"}>{titleAccent}</span>
        </h1>

        {/* Lead */}
        <p className="mt-5 max-w-[580px] text-[17px] leading-[1.7] text-mist sm:text-[18px]">{lead}</p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <HeroLink
            href={primaryHref}
            className="gap-2 bg-brand text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_28px_-8px_rgba(46,79,227,0.75)] hover:bg-[#2440c4]"
          >
            {primary} <ArrowRight size={15} />
          </HeroLink>
          {secondary ? (
            <HeroLink
              href={secondaryHref}
              className="border border-white/[0.14] bg-white/[0.05] text-white hover:border-white/25 hover:bg-white/[0.09]"
            >
              {secondary}
            </HeroLink>
          ) : null}
        </div>

        {/* Trust points */}
        {pointList.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-5 text-[13px] text-mist sm:text-[14px]">
            {pointList.map((point) => (
              <li key={point} className="inline-flex items-center gap-2">
                <Check size={13} className="shrink-0 text-mint" />
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

function HeroLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const base = `inline-flex h-12 items-center rounded-xl px-6 text-[15px] font-semibold transition-colors duration-150 ${className}`;
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={base} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
