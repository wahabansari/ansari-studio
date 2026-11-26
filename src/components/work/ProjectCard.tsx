import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { CASES, type CaseSlug, type DraftCaseSlug } from "@/data/cases";
import { PROJECTS, gridSpans, type Project } from "@/data/projects";
import { ARROW } from "./WorkIcons";

function thumbFor(project: Project) {
  const slug = (project.href.startsWith("/work/") ? project.href.slice(6) : project.name.toLowerCase()) as
    CaseSlug | DraftCaseSlug;
  return CASES[slug]?.thumb;
}

/** Card content shared by the Work grid, the home page and the service-page proof sections. */
export function CardBody({ project, wide = false }: { project: Project; wide?: boolean }) {
  const thumb = thumbFor(project);
  return (
    <>
      <div className="top">
        <span className="fig">{project.category}</span>
        <span className="go">{ARROW}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.line}</p>
      <div className="meta">
        <span className="pill">{project.service}</span>
      </div>
      <div className={`bleed wkm${wide ? " wide" : ""}`}>
        <div className="thumb" style={{ background: thumb?.background }}>
          {thumb?.image ? (
            <Image src={thumb.image} alt={thumb.alt} fill sizes="(max-width: 900px) 100vw, 380px" />
          ) : (
            <div className="fb" aria-hidden="true">
              <b>{project.name}</b>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/** A balanced grid of project cards, picked by name, in the order given. */
export function ProjectCards({ names }: { names: readonly string[] }) {
  const projects = names
    .map((name) => PROJECTS.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project));
  const spans = gridSpans(projects.length);

  return (
    <Reveal className="mb">
      {projects.map((project, index) => {
        const className = `cell wk ${spans[index]} k-${project.kind}`;
        const body = <CardBody project={project} wide={spans[index] === "c12"} />;
        return project.external ? (
          <a
            key={project.name}
            className={className}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {body}
          </a>
        ) : (
          <Link key={project.name} className={className} href={project.href}>
            {body}
          </Link>
        );
      })}
    </Reveal>
  );
}
