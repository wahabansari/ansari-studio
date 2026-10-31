"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Fires once on the thank-you page, and only when analytics consent is already granted. */
export function LeadConfirmation() {
  useEffect(() => {
    track("lead_confirmation");
  }, []);
  return null;
}
