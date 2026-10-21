import Link from "next/link";
import { ArrowRight, Check } from "@/components/icons";

/**
 * Dark page opener used by every inner page (design component "PageHero").
 * The site header is rendered once in the layout and overlays the top 84px of this section.
 * Defaults match the design component, so omitted props behave as they do there;
 * pass an empty string to switch a part off (e.g. parent="" or points="").
 */
export interface PageHeroProps {
  /** Kept for parity with the design; the header works out the active item from the URL. */
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
  /** Pipe-separated list, e.g. "Clear scope|Weekly demos". */
  points?: string;
}

export function PageHero({
  glow = "blue",
  parent = "Services",
  parentHref = "/services",
  crumb = "Product engineering",
  eyebrow = "Build · Product engineering",
  title = "MVP and SaaS development with a",
  titleAccent = "senior product engineer.",
  lead = "Ship your MVP, SaaS feature or web app with clear scope, weekly demos and a clean handover.",
  primary = "Discuss your project",
  primaryHref = "/contact",
  secondary = "See how we work",
  secondaryHref = "/process",
  points = "Clear scope|Weekly demos|You own the code",
}: PageHeroProps) {
  const mint = glow === "mint";
  const pointList = points
    .split("|")
    .map((point) => point.trim())
    .filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-night pb-[104px] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_65%_70%_at_75%_10%,#000_30%,transparent_100%)] bg-size-[56px_56px]"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-[-300px] right-[-160px] h-[720px] w-[1100px] ${
          mint
            ? "bg-[radial-gradient(closest-side,rgba(98,220,203,0.22),rgba(0,0,0,0))]"
            : "bg-[radial-gradient(closest-side,rgba(46,79,227,0.42),rgba(0,0,0,0))]"
        }`}
      />

      {/* space for the site header, which the layout renders on top */}
      <div aria-hidden="true" className="h-[84px]" />

      <div className="relative z-[2] mx-auto max-w-[1200px] px-[24px] pt-[64px]">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-[8px] text-[13px] text-dim">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          {parent ? (
            <>
              <Link href={parentHref} className="hover:text-white">
                {parent}
              </Link>
              <span aria-hidden="true">/</span>
            </>
          ) : null}
          <span aria-current="page" className="text-white">
            {crumb}
          </span>
        </nav>

        <div
          className={`mt-[28px] inline-flex items-center gap-[8px] rounded-full px-[12px] py-[5px] text-[13px] font-semibold ${
            mint
              ? "border border-[rgba(98,220,203,0.25)] bg-[rgba(98,220,203,0.1)] text-mint"
              : "border border-[rgba(143,163,255,0.25)] bg-[rgba(143,163,255,0.1)] text-brand-200"
          }`}
        >
          <span className={`h-[6px] w-[6px] rounded-full ${mint ? "bg-mint" : "bg-brand-300"}`} />
          {eyebrow}
        </div>

        <h1 className="mt-[22px] max-w-[900px] text-[length:clamp(40px,5.4vw,72px)] leading-[1.0] font-bold tracking-[-0.028em] text-white">
          {title} <span className={mint ? "text-mint" : "text-brand-300"}>{titleAccent}</span>
        </h1>
        <p className="mt-[24px] max-w-[620px] text-[19px] leading-[1.6] text-mist">{lead}</p>

        <div className="mt-[36px] flex flex-wrap gap-[12px]">
          <HeroLink
            href={primaryHref}
            className="gap-[8px] bg-brand text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(46,79,227,0.8)] hover:bg-[#2643c9]"
          >
            {primary} <ArrowRight />
          </HeroLink>
          {secondary ? (
            <HeroLink
              href={secondaryHref}
              className="border border-white/[0.14] bg-white/[0.05] text-white hover:bg-white/[0.09]"
            >
              {secondary}
            </HeroLink>
          ) : null}
        </div>

        {pointList.length > 0 ? (
          <div className="mt-[28px] flex flex-wrap gap-[24px] text-[14px] text-mist">
            {pointList.map((point) => (
              <span key={point} className="inline-flex items-center gap-[8px]">
                <Check className="text-mint" />
                {point}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** Internal routes use <Link>; anchors (#form) and external URLs stay plain links. */
function HeroLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const base = `inline-flex h-[50px] items-center rounded-[12px] px-[24px] text-[15px] font-semibold transition-colors duration-150 ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a href={href} className={base} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {children}
    </a>
  );
}
