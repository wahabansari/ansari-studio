import Image from "next/image";
import { ViewTransition } from "react";
import { CASES, type CaseSlug } from "@/data/cases";

/**
 * Project screenshot in a 16:10 frame (design component "ProjectThumb").
 * In the design the hand-built mock-up sits under a real screenshot that covers it completely,
 * so only the screenshot is rendered here, over the project's brand backdrop.
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
      <Image
        src={`/work/${slug}.webp`}
        alt={project.thumb.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );

  if (!morph) return frame;
  return (
    <ViewTransition name={`project-${slug}`} share="morph" default="none">
      {frame}
    </ViewTransition>
  );
}
