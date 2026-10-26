import Link from "next/link";
import { CASES, type CaseSlug } from "@/data/cases";
import { ProjectThumb } from "./ProjectThumb";

/** Project thumbnail with its caption, linking to the case study (Home and service pages). */
export function CaseCard({ slug }: { slug: CaseSlug }) {
  const { card } = CASES[slug];
  return (
    <Link className="group flex flex-col gap-[18px]" href={`/work/${slug}`}>
      <div className="transition-transform duration-300 ease-out group-hover:-translate-y-[3px] motion-reduce:transform-none">
        <ProjectThumb slug={slug} />
      </div>
      <div>
        <div className="text-[13px] font-semibold text-faint">{card.label}</div>
        <h3 className="mt-[8px] text-[21px] leading-[1.3] font-[680] tracking-[-0.01em]">{card.title}</h3>
      </div>
    </Link>
  );
}
