import Image from "next/image";
import { CASES, type CaseSlug } from "@/data/cases";

/**
 * Project screenshot in a 16:10 frame. Projects without a screenshot (Vapestore) show the project
 * name on its own backdrop instead of a broken image.
 */
export function ProjectThumb({
  slug,
  priority = false,
  sizes = "(max-width: 1240px) 100vw, 1160px",
}: {
  slug: CaseSlug;
  priority?: boolean;
  sizes?: string;
}) {
  const project = CASES[slug];
  return (
    <div className="thumb" style={{ background: project.thumb.background }}>
      {project.thumb.image ? (
        <Image src={project.thumb.image} alt={project.thumb.alt} fill sizes={sizes} priority={priority} />
      ) : (
        <div className="fb" aria-hidden="true">
          <b>{project.name}</b>
        </div>
      )}
    </div>
  );
}
