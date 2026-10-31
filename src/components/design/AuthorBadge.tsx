import Image from "next/image";
import { FOUNDER, SITE_NAME } from "@/lib/site";

/** Round avatar showing the company symbol, used wherever an Insights article shows its author. */
export function AuthorAvatar({ size }: { size: number }) {
  return (
    <span
      className="flex flex-none items-center justify-center rounded-full bg-ink"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src="/brand/ansari-pe-symbol-color-dark.svg"
        alt=""
        width={Math.round(size * 0.55)}
        height={Math.round(size * 0.55)}
      />
    </span>
  );
}

export const AUTHOR_NAME = FOUNDER.name;
export const AUTHOR_LABEL = `${FOUNDER.name}, ${FOUNDER.role}, ${SITE_NAME}`;
