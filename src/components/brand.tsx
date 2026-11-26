/** Brand mark and the shared arrow icon. The mark is drawn from the logo pack; never recolour it. */

const MARK_COLORS = {
  /** On dark surfaces (the hero header): white slabs, light-indigo crossbar. */
  light: { slab: "#FFFFFF", bar: "#A5B4FC" },
  /** On light surfaces (footer, open mega menu): ink slabs, indigo crossbar. */
  dark: { slab: "#0B1020", bar: "#6366F1" },
} as const;

export function LogoMark({ variant, className }: { variant: keyof typeof MARK_COLORS; className?: string }) {
  const { slab, bar } = MARK_COLORS[variant];
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M5.5 42 L20 6 H28.6 L14.1 42 Z" fill={slab} />
      <path d="M30.4 15 L42.5 42 H34 L26.4 24.3 Z" fill={slab} />
      <path d="M18.83 30 H28.65 L30.88 35 H16.82 Z" fill={bar} />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
    </svg>
  );
}
