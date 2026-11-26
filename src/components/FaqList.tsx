import type { Faq } from "@/data/faqs";

/** The accordion used inside the FAQ cell of the service pages (native details/summary). */
export function FaqList({ items }: { items: readonly Faq[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
