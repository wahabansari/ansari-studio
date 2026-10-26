"use client";

import Link from "next/link";
import { startTransition, useState, ViewTransition } from "react";
import { ProjectThumb } from "@/components/design/ProjectThumb";
import { ArrowUpRight } from "@/components/icons";

type Filter = "all" | "apps" | "market" | "sites" | "design";

/** Cards and filter tabs from the design's Work page. */
const PROJECTS: {
  slug: string;
  type: Exclude<Filter, "all">;
  name: string;
  category: string;
  region: string;
  headline: string;
  result: string;
}[] = [
  {
    slug: "sunhub",
    type: "apps",
    name: "Sunhub",
    category: "Performance",
    region: "Solar marketplace · US",
    headline: "made faster without a rewrite",
    result: "Measured what slowed a live marketplace and fixed it in small, safe releases.",
  },
  {
    slug: "verdira",
    type: "apps",
    name: "Verdira",
    category: "Web application",
    region: "Practice partner · US",
    headline: "from Framer to Next.js",
    result: "A Framer site migrated to Next.js with password-protected client areas, handed over on Vercel.",
  },
  {
    slug: "aussiemotor",
    type: "market",
    name: "AussieMotor",
    category: "Frontend",
    region: "Car marketplace · Australia",
    headline: "moved to a modern platform",
    result: "End-to-end frontend development and maintenance, in collaboration with the project's designer.",
  },
  {
    slug: "vapestore",
    type: "market",
    name: "VapePlanet",
    category: "E-commerce",
    region: "Online vape shop · UK",
    headline: "a complete online store",
    result: "Complete storefront frontend and API integration for a production UK e-commerce shop.",
  },
  {
    slug: "silcolabs",
    type: "apps",
    name: "SilcoLabs",
    category: "SaaS",
    region: "Laboratory software",
    headline: "lab work in one place",
    result: "Samples, test tracking and branded reports in one web application.",
  },
  {
    slug: "digestivecare",
    type: "sites",
    name: "Digestive Care",
    category: "Healthcare",
    region: "Gastroenterology · Florida, US",
    headline: "booking made easy",
    result: "A WordPress website with an integrated patient-portal solution and booking flow.",
  },
  {
    slug: "cennetsol",
    type: "sites",
    name: "Cennetsol",
    category: "Company website",
    region: "Software services",
    headline: "built, found and kept current",
    result: "A responsive company website with SEO and ongoing management.",
  },
  {
    slug: "talhaestate",
    type: "sites",
    name: "Talha Estate",
    category: "Real estate",
    region: "Property agency",
    headline: "listings that are easy to browse",
    result: "A WordPress property website with social media and a clean handover.",
  },
  {
    slug: "selecthealth",
    type: "design",
    name: "Select & Health",
    category: "Design",
    region: "Healthcare platform",
    headline: "one consistent system",
    result: "Landing pages and a design system for a patient-facing health platform.",
  },
];

const TABS: [Filter, string][] = [
  ["all", "All work"],
  ["apps", "Web apps"],
  ["market", "Marketplaces & stores"],
  ["sites", "Websites"],
  ["design", "Design systems"],
];

export function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const cards = PROJECTS.filter((project) => filter === "all" || project.type === filter);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-[20px]">
        <div
          role="group"
          aria-label="Filter projects"
          className="inline-flex flex-wrap gap-[6px] rounded-full border border-line bg-subtle p-[6px] max-[640px]:rounded-[22px]"
        >
          {TABS.map(([key, label]) => (
            <button
              key={key}
              type="button"
              aria-pressed={filter === key}
              // A transition, so the cards animate in and out with <ViewTransition>.
              onClick={() => startTransition(() => setFilter(key))}
              className={`h-[38px] cursor-pointer rounded-full px-[16px] text-[14px] font-semibold transition-colors duration-150 ${
                filter === key ? "bg-ink text-white" : "bg-transparent text-muted hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <span role="status" className="text-[14px] text-faint">
          {cards.length} {cards.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="mt-[40px] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[24px] max-[860px]:grid-cols-[minmax(0,1fr)]">
        {cards.map((card) => (
          <ViewTransition key={card.slug}>
            <Link href={`/work/${card.slug}`} className="group flex flex-col gap-[20px]">
              <div className="transition-transform duration-300 ease-out group-hover:-translate-y-[3px] motion-reduce:transform-none">
                <ProjectThumb slug={card.slug} morph sizes="(max-width: 860px) 100vw, 588px" />
              </div>
              <div className="flex items-start justify-between gap-[16px]">
                <div>
                  <div className="flex flex-wrap items-center gap-[8px] text-[13px] text-faint">
                    <span className="rounded-full bg-brand-50 px-[10px] py-[4px] font-semibold text-brand">
                      {card.category}
                    </span>
                    {card.region}
                  </div>
                  <h2 className="mt-[12px] text-[24px] leading-[1.25] font-bold tracking-[-0.012em]">
                    {card.name} — {card.headline}
                  </h2>
                  <p className="mt-[8px] text-[16px] leading-[1.6] text-muted">{card.result}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-[48px] w-[48px] flex-none items-center justify-center rounded-full border border-line-strong text-brand transition-colors duration-150 group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                >
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </Link>
          </ViewTransition>
        ))}
      </div>
    </>
  );
}
