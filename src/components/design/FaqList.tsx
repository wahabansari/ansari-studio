import Link from "next/link";
import type { ServiceFaq } from "@/data/services";

/** Question list with native <details> accordions (first one open). Answers are plain text, also used for FAQPage markup. */
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
    <section className="px-[24px] py-[112px]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-[56px]">
        <div className="flex-[1_1_320px]">
          <div className="text-[14px] font-semibold text-brand">{eyebrow}</div>
          <h2 className="mt-[14px] text-[length:clamp(32px,4vw,50px)] leading-[1.06] font-bold tracking-[-0.026em]">
            {title}
          </h2>
          <p className="mt-[16px] text-[16px] leading-[1.6] text-muted">
            Something else?{" "}
            <Link className="font-semibold text-brand underline-offset-4 hover:underline" href="/contact">
              Ask us directly.
            </Link>
          </p>
        </div>
        <div className="flex-[1.4_1_480px] border-t border-t-line">
          {items.map((item, index) => (
            <details key={item.q} className="group border-b border-b-line py-[22px]" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[17px] font-[650] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-subtle [transition:transform_180ms_ease-out] group-open:[transform:rotate(45deg)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-[12px] text-[16px] leading-[1.7] text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
