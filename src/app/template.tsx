"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/components/motion";

/** Re-runs on every navigation, so each page eases in instead of snapping into place. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
