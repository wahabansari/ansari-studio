import Link from "next/link";
import type { ReactNode } from "react";
import { Up } from "@/components/motion";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  crumbs?: Crumb[];
  /** Buttons shown under the lead. */
  actions?: ReactNode;
  /** Narrow single-column hero (used by detail and utility pages). */
  className?: string;
};

/** The dark hero used by pages that are not one of the fifteen designed pages. */
export function PageHero({ eyebrow, title, lead, crumbs, actions, className = "hero c" }: Props) {
  return (
    <section className={className}>
      <div className="hbg dk2" aria-hidden="true">
        <div className="sg">
          <i className="g1" />
          <i className="g2" />
          <i className="g3" />
          <i className="g4" />
          <i className="g5" />
        </div>
        <div className="gr" />
      </div>
      <div className="wrap">
        <div style={{ maxWidth: 760 }}>
          {crumbs && (
            <Up as="div" k={0}>
              <ol className="crumb" aria-label="Breadcrumb">
                {crumbs.map((crumb) => (
                  <li key={crumb.label}>
                    {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
                  </li>
                ))}
              </ol>
            </Up>
          )}
          <Up className="eyebrow" as="span" k={1}>
            {eyebrow}
          </Up>
          <Up className="h1" as="h1" k={2}>
            {title}
          </Up>
          {lead && (
            <Up className="lead" as="p" k={3}>
              {lead}
            </Up>
          )}
          {actions && (
            <Up className="row" k={4}>
              {actions}
            </Up>
          )}
        </div>
      </div>
    </section>
  );
}
