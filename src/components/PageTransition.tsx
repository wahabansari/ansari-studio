"use client";

import { usePathname } from "next/navigation";
import { ViewTransition, type ReactNode } from "react";

/**
 * Smooth page-to-page transitions. Next.js navigations are React transitions, so keying a
 * <ViewTransition> by pathname turns every route change into an exit/enter pair.
 * Animations live in globals.css (.page-exit / .page-enter) and switch off with reduced motion.
 * Browsers without the View Transitions API simply swap pages instantly.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <ViewTransition key={pathname} enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
