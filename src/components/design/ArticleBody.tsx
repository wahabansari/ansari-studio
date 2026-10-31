import type { ArticleBlock } from "@/data/articles";

/** Renders typed article blocks with consistent Inter Variable-based typography. */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-[19px] font-medium leading-[1.75] text-ink"
                    : "mt-4 text-[17px] leading-[1.8] text-prose"
                }
              >
                {block.text}
              </p>
            );

          case "h2":
            return (
              <h2
                key={index}
                id={block.id}
                className="mt-12 scroll-mt-28 text-[26px] font-bold leading-[1.18] tracking-[-0.02em] text-ink"
              >
                {block.text}
              </h2>
            );

          case "ul":
            return (
              <ul key={index} className="mt-4 space-y-2 pl-5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-3 text-[17px] leading-[1.8] text-prose before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={index} className="mt-4 space-y-2 pl-5 list-decimal marker:text-brand marker:font-semibold">
                {block.items.map((item) => (
                  <li key={item} className="pl-1 text-[17px] leading-[1.8] text-prose">
                    {item}
                  </li>
                ))}
              </ol>
            );

          case "callout":
            return (
              <aside
                key={index}
                className="mt-7 rounded-[18px] border-l-4 border-teal bg-teal-50 px-6 py-5"
              >
                <div className="text-[14px] font-bold text-teal-deep">{block.title}</div>
                <p className="mt-1.5 text-[15px] leading-[1.75] text-prose">{block.text}</p>
              </aside>
            );

          case "code":
            return (
              <figure key={index} className="mt-6">
                <pre className="overflow-x-auto rounded-[16px] bg-ink px-5 py-5 font-mono text-[13px] leading-[1.75] text-haze">
                  {block.text}
                </pre>
                {block.caption && (
                  <figcaption className="mt-2 text-[12px] text-faint">{block.caption}</figcaption>
                )}
              </figure>
            );
        }
      })}
    </div>
  );
}
