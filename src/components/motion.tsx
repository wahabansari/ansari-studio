"use client";

import { MotionConfig, motion, useScroll, useSpring, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** The easing curve of the design (`--e`). Every motion in the site uses it. */
export const EASE = [0.2, 0.7, 0.2, 1] as const;

const MotionLink = motion.create(Link);

type Tag = "div" | "section" | "ul" | "span" | "h1" | "p";
const TAGS = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  span: motion.span,
  h1: motion.h1,
  p: motion.p,
} as const;

/** Respects the visitor's reduced-motion setting for every animation below. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Thin gradient bar along the top edge that fills as the page is scrolled. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.25 });
  return <motion.div className="prog" style={{ scaleX }} aria-hidden="true" />;
}

const REVEAL = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

type RevealProps = {
  as?: Tag;
  delay?: number;
  children?: ReactNode;
} & Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport">;

/** Fades and lifts a block into place the first time it scrolls into view. */
export function Reveal({ as = "div", delay = 0, children, ...rest }: RevealProps) {
  const shared = {
    variants: REVEAL,
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.12, margin: "0px 0px -6% 0px" },
    transition: { duration: 0.75, ease: EASE, delay },
  } as const;

  const Component = TAGS[as] as typeof motion.div;
  return (
    <Component {...shared} {...rest}>
      {children}
    </Component>
  );
}

type RevealLinkProps = { delay?: number } & Omit<
  ComponentProps<typeof MotionLink>,
  "variants" | "initial" | "whileInView" | "viewport"
>;

/** Same reveal, for a block that is itself a link. */
export function RevealLink({ delay = 0, children, ...rest }: RevealLinkProps) {
  return (
    <MotionLink
      variants={REVEAL}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.75, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionLink>
  );
}

type UpProps = {
  as?: Tag;
  /** Position in the hero's entrance sequence; each step adds a short delay. */
  k?: number;
  children?: ReactNode;
} & Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition">;

/** Hero entrance: rises into view on load, one step after the previous element. */
export function Up({ as = "div", k = 0, children, ...rest }: UpProps) {
  const Component = TAGS[as] as typeof motion.div;
  return (
    <Component
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: k * 0.09 }}
      {...rest}
    >
      {children}
    </Component>
  );
}
