import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-[900px] flex-col overflow-hidden bg-night text-white"
    >
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_45%,#000_30%,transparent_100%)]"
      />
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(46,79,227,0.36),transparent)]"
      />

      <div aria-hidden="true" className="h-[84px]" />

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 pt-10 pb-24 text-center">
        {/* Large 404 */}
        <div
          className="text-[clamp(100px,18vw,210px)] font-extrabold leading-[0.9] tracking-[-0.045em] text-white/10 select-none"
          aria-hidden="true"
        >
          4<span className="text-mint/30">0</span>4
        </div>

        <h1 className="mt-6 text-[clamp(26px,3.2vw,42px)] font-bold leading-[1.12] tracking-[-0.024em]">
          This page is not connected to anything.
        </h1>
        <p className="mt-4 max-w-[440px] text-[17px] leading-[1.7] text-mist">
          The link may be old or mistyped. These will get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-6 text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_28px_-8px_rgba(46,79,227,0.75)] transition-colors duration-150 hover:bg-[#2440c4]"
          >
            Back to home
          </Link>
          {[
            { label: "Services", href: "/services" },
            { label: "Work", href: "/work" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex h-12 items-center rounded-xl border border-white/[0.14] bg-white/[0.05] px-5 text-[15px] font-semibold transition-colors duration-150 hover:border-white/25 hover:bg-white/[0.09]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
