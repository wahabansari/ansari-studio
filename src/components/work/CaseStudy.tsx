import Link from "next/link";
import { ArrowIcon } from "@/components/brand";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { CASES, nextCase, type CaseSlug } from "@/data/cases";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { ProjectThumb } from "./ProjectThumb";

export function CaseStudy({ slug }: { slug: CaseSlug }) {
  const project = CASES[slug];
  const next = CASES[nextCase(slug)];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.name, path: `/work/${slug}` },
        ])}
      />
      <main id="main">
        <PageHero
          crumbs={[{ label: "Work", href: "/work" }, { label: project.name }]}
          eyebrow={project.eyebrow}
          title={
            <>
              {project.titleA} <em>{project.titleB}</em>
            </>
          }
          lead={project.lead}
          actions={
            <>
              <Link className="btn btn-p" href="/contact">
                Discuss a similar project <ArrowIcon />
              </Link>
              {project.link && (
                <a className="btn btn-d" href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.linkLabel}
                </a>
              )}
            </>
          }
        />

        <section className="sec" style={{ paddingBottom: 0, paddingTop: 40 }}>
          <div className="wrap">
            <Reveal className="cover">
              <ProjectThumb slug={slug} priority />
            </Reveal>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <Reveal className="mb">
              <div className="cell c4">
                <dl className="facts">
                  <div>
                    <dt>Client</dt>
                    <dd>{project.name}</dd>
                    <dd style={{ fontWeight: 450, color: "var(--mut)" }}>{project.client}</dd>
                  </div>
                  <div>
                    <dt>Service</dt>
                    <dd>
                      <Link href={project.serviceHref}>{project.service} →</Link>
                    </dd>
                  </div>
                  <div>
                    <dt>Our role</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{project.status}</dd>
                  </div>
                </dl>
              </div>
              <div className="cell c8">
                <span className="fig">In short</span>
                <p style={{ maxWidth: "none", fontSize: "1.05rem", color: "var(--ink)", fontWeight: 500 }}>
                  {project.short}
                </p>
                {project.results.length > 0 && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
                      gap: 20,
                      marginTop: 26,
                    }}
                  >
                    {project.results.map(([value, label]) => (
                      <div className="stat" key={value}>
                        <b>{value}</b>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="sec t">
          <div className="wrap">
            <Reveal className="doc wide">
              <h2>What was the challenge?</h2>
              <p>{project.challenge}</p>
              <h2>How did we solve it?</h2>
              <ol className="steps">
                {project.approach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <h2>What changed for the business?</h2>
              <p>{project.outcome}</p>
            </Reveal>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <Reveal className="mb">
              <Link className="cell c6" href={project.serviceHref}>
                <span className="fig">Related service</span>
                <h3>{project.service}</h3>
                <span className="more">
                  See the service <ArrowIcon />
                </span>
              </Link>
              <Link className="cell dk c6" href={`/work/${nextCase(slug)}`}>
                <span className="fig">Next project</span>
                <h3>{next.name}</h3>
                <p>{next.short}</p>
                <span className="more">
                  View case study <ArrowIcon />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>

        <CtaBand
          title="Want a result like this?"
          text="Tell us what you need to build, improve or connect. You get a reply within one business day."
        />
      </main>
    </>
  );
}
