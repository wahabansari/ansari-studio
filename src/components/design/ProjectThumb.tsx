import Image from "next/image";
import { ViewTransition } from "react";
import { CASES, type CaseSlug } from "@/data/cases";

/**
 * Project screenshot in a 16:10 frame (design component "ProjectThumb").
 * When the project has a screenshot, it covers the project's brand backdrop completely.
 * When it does not (Vapestore), the backdrop becomes an intentional branded panel
 * instead of a broken or missing image.
 * `morph` names the frame so it morphs into the case-study cover when the visitor opens it.
 */
export function ProjectThumb({
  slug,
  rounded = true,
  morph = false,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 400px",
}: {
  slug: CaseSlug | string;
  rounded?: boolean;
  morph?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const project = CASES[slug as CaseSlug];
  if (!project) return null;

  const frame = (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden ${rounded ? "rounded-[20px]" : ""}`}
      style={{ background: project.thumb.background }}
    >
      {project.thumb.image ? (
        <Image
          src={project.thumb.image}
          alt={project.thumb.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        // Intentional no-screenshot panel: the project's name on its own backdrop.
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_30%,transparent_100%)] bg-size-[36px_36px]" />
          <span className="relative text-[length:clamp(26px,4vw,40px)] leading-[1.05] font-bold tracking-[-0.02em] text-white">
            {project.name}
          </span>
        </div>
      )}
    </div>
  );

  if (!morph) return frame;
  return (
    <ViewTransition name={`project-${slug}`} share="morph" default="none">
      {frame}
    </ViewTransition>
  );
}
