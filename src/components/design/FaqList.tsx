import Link from "next/link";
import type { ServiceFaq } from "@/data/services";

/**
 * FAQ accordion section. Native <details> for zero-JS expand/collapse.
 * First item starts open. Plus rotates to X when open.
 */
export function FaqList({
  title,
  items,
  eyebrow = "FAQ",
}: {
  title: string;
  items: ServiceFaq[];
  eyebrow?: string;
}) {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-14">
        {/* Left column */}
        <div className="flex-[1_1_300px]">
          <div className="font-mono text-[12px] font-semibold tracking-widest text-brand uppercase">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-[clamp(28px,3.8vw,44px)] font-bold leading-[1.1] tracking-[-0.025em]">
            {title}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted">
            Something else on your mind?{" "}
            <Link
              className="font-semibold text-brand underline-offset-4 hover:underline"
              href="/contact"
            >
              Ask us directly.
            </Link>
          </p>
        </div>

        {/* Right column — accordion */}
        <div className="flex-[1.5_1_440px] divide-y divide-line">
          {items.map((item, index) => (
            <details
              key={item.q}
              className="group py-5"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[16px] font-semibold leading-[1.4] [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                {/* Plus → X indicator */}
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-subtle transition-transform duration-200 group-open:rotate-45"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-[1.75] text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
