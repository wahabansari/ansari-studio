"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { EASE, Reveal } from "@/components/motion";
import {
  CLIENT_PROJECTS,
  CONCEPT_PROJECTS,
  PROJECT_FILTERS,
  countByCategory,
  gridSpans,
  type Project,
} from "@/data/projects";
import { CardBody } from "./ProjectCard";

const MotionLink = motion.create(Link);

const CARD_MOTION = {
  layout: true,
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.45, ease: EASE },
} as const;

function Card({ project, span }: { project: Project; span: string }) {
  const className = `cell wk ${span} k-${project.kind}`;
  return project.external ? (
    <motion.a
      className={className}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      {...CARD_MOTION}
    >
      <CardBody project={project} />
    </motion.a>
  ) : (
    <MotionLink className={className} href={project.href} {...CARD_MOTION}>
      <CardBody project={project} />
    </MotionLink>
  );
}

function filterCount(name: (typeof PROJECT_FILTERS)[number]) {
  return name === "All" ? CLIENT_PROJECTS.length : countByCategory(name);
}

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");
  const items = CLIENT_PROJECTS.filter((project) => filter === "All" || project.category === filter);
  const spans = gridSpans(items.length);
  const conceptSpans = gridSpans(CONCEPT_PROJECTS.length);

  return (
    <>
      <section className="sec">
        <div className="wrap">
          <div className="tools">
            <div className="seg" role="group" aria-label="Filter projects">
              {PROJECT_FILTERS.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={`chipf${name === filter ? " on" : ""}`}
                  aria-pressed={name === filter}
                  onClick={() => setFilter(name)}
                >
                  {name} ({filterCount(name)})
                </button>
              ))}
            </div>
            <span className="cnt" aria-live="polite">
              {items.length} {items.length === 1 ? "project" : "projects"}
            </span>
          </div>
          <motion.div className="mb" layout>
            <AnimatePresence mode="popLayout" initial={false}>
              {items.map((project, index) => (
                <Card key={project.name} project={project} span={spans[index]} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="sec t" id="concepts">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">Not client work</span>
              <h2 className="h2">Concept designs</h2>
              <p className="lead">
                Design studies we created ourselves. They are concepts, not delivered client projects.
              </p>
            </div>
          </Reveal>
          <Reveal className="mb">
            {CONCEPT_PROJECTS.map((project, index) => (
              <Link
                key={project.name}
                className={`cell wk ${conceptSpans[index]} k-${project.kind}`}
                href={project.href}
              >
                <CardBody project={project} />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
