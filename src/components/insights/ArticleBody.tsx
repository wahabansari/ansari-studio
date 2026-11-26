import type { ArticleBlock } from "@/data/articles";

/** Renders the typed article blocks inside the `.doc` prose styles. */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p key={index} className={index === 0 ? "lede" : undefined}>
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={index} id={block.id}>
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside key={index} className="callout">
                <b>{block.title}</b>
                <p>{block.text}</p>
              </aside>
            );
          case "code":
            return (
              <figure key={index}>
                <pre>{block.text}</pre>
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
        }
      })}
    </>
  );
}
