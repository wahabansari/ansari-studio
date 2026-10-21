import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main id="main" className="relative flex min-h-[900px] flex-col overflow-hidden bg-night text-white">
        <div
          className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,#000_30%,transparent_100%)] bg-size-[56px_56px]"
          aria-hidden="true"
        />
        <div
          className="absolute top-[40%] left-[50%] h-[640px] w-[1000px] [transform:translate(-50%,-50%)] bg-[radial-gradient(closest-side,rgba(46,79,227,0.38),rgba(46,79,227,0))]"
          aria-hidden="true"
        />
        <div aria-hidden="true" className="h-[84px]" />
        <main className="relative flex flex-1 flex-col items-center justify-center px-[24px] pt-[40px] pb-[96px] text-center">
          <div className="text-[length:clamp(120px,18vw,220px)] leading-[0.9] font-extrabold tracking-[-0.045em] text-white">
            4<span className="text-mint">0</span>4
          </div>
          <h1 className="mt-[24px] text-[length:clamp(28px,3.4vw,44px)] leading-[1.1] font-bold tracking-[-0.024em]">
            This page is not connected to anything.
          </h1>
          <p className="mt-[14px] max-w-[460px] text-[18px] leading-[1.6] text-mist">
            The link may be old or mistyped. These will get you back on track.
          </p>
          <div className="mt-[32px] flex flex-wrap justify-center gap-[12px]">
            <Link
              className="inline-flex h-[50px] items-center gap-[8px] rounded-[12px] bg-brand px-[24px] text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(46,79,227,0.8)]"
              href="/"
            >
              Back to home
            </Link>
            <Link
              className="inline-flex h-[50px] items-center rounded-[12px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-[22px] text-[15px] font-semibold"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="inline-flex h-[50px] items-center rounded-[12px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-[22px] text-[15px] font-semibold"
              href="/work"
            >
              Work
            </Link>
            <Link
              className="inline-flex h-[50px] items-center rounded-[12px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-[22px] text-[15px] font-semibold"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </main>
      </main>
    </>
  );
}
