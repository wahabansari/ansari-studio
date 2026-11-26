"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { EASE } from "@/components/motion";
import { PROJECT_FILTERS, PROJECTS, gridSpans, type Project } from "@/data/projects";
import { ARROW, ICONS } from "./WorkIcons";

const MotionLink = motion.create(Link);

const CARD_MOTION = {
  layout: true,
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.45, ease: EASE },
} as const;

function CardBody({ project }: { project: Project }) {
  return (
    <>
      <div className="top">
        <span className="fig">{project.category}</span>
        <span className="go">{ARROW}</span>
      </div>
      <span className="gl">{ICONS[project.kind]}</span>
      <h3>{project.name}</h3>
      <p>{project.line}</p>
      <div className="meta">
        <span className="pill">{project.service}</span>
      </div>
    </>
  );
}

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");
  const items = PROJECTS.filter((project) => filter === "All" || project.category === filter);
  const spans = gridSpans(items.length);

  return (
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
                {name}
              </button>
            ))}
          </div>
          <span className="cnt" aria-live="polite">
            {items.length} {items.length === 1 ? "project" : "projects"}
          </span>
        </div>
        <motion.div className="mb" layout>
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((project, index) => {
              const className = `cell wk ${spans[index]} k-${project.kind}`;
              return project.external ? (
                <motion.a
                  key={project.name}
                  className={className}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...CARD_MOTION}
                >
                  <CardBody project={project} />
                </motion.a>
              ) : (
                <MotionLink key={project.name} className={className} href={project.href} {...CARD_MOTION}>
                  <CardBody project={project} />
                </MotionLink>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
