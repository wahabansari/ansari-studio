import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/design/CaseStudy";
import { CASE_ORDER, CASES, isCaseSlug } from "@/data/cases";

// Every case study is prerendered (generateStaticParams). Navigation waits for that page instead of
// showing a shared shell, so the project thumbnail can morph into the cover in a single transition.
export const instant = false;

export function generateStaticParams() {
  return CASE_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!isCaseSlug(slug)) return {};
  const p = CASES[slug];
  return {
    title: `${p.name} case study`,
    description: p.short,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  if (!isCaseSlug(slug)) notFound();
  return <CaseStudy slug={slug} />;
}
