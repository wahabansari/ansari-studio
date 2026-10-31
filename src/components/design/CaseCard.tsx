import Link from "next/link";
import { CASES, type CaseSlug } from "@/data/cases";
import { ProjectThumb } from "./ProjectThumb";

/** Project thumbnail card linking to a case study. Used on Home and service pages. */
export function CaseCard({ slug }: { slug: CaseSlug }) {
  const { card } = CASES[slug];
  return (
    <Link
      className="group flex flex-col gap-4"
      href={`/work/${slug}`}
    >
      <div className="overflow-hidden rounded-[20px] transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transform-none">
        <ProjectThumb slug={slug} />
      </div>
      <div className="px-1">
        <div className="text-[12px] font-semibold tracking-wide text-faint uppercase">
          {card.label}
        </div>
        <h3 className="mt-1.5 text-[18px] font-bold leading-[1.3] tracking-[-0.012em] text-ink group-hover:text-brand transition-colors duration-150">
          {card.title}
        </h3>
      </div>
    </Link>
  );
}
