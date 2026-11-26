"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { EASE } from "@/components/motion";
import {
  ANALYTICS_CONSENT_EVENT,
  analyticsConfigured,
  dntEnabled,
  readConsent,
  writeConsent,
} from "@/lib/analytics";

/**
 * Consent banner for optional analytics. It renders only when at least one analytics ID is
 * configured, there is no stored choice and the visitor has not enabled Do Not Track.
 *
 * The browser state is read through useSyncExternalStore so the server renders nothing and the
 * client updates without a setState-in-effect waterfall.
 */
function subscribe(onChange: () => void) {
  window.addEventListener(ANALYTICS_CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(ANALYTICS_CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot() {
  return analyticsConfigured() && !dntEnabled() && readConsent() === null;
}

function getServerSnapshot() {
  return false;
}

export function ConsentBanner() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!visible) return null;

  return (
    <motion.section
      className="consent"
      aria-label="Analytics consent"
      aria-live="polite"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <p>
        We use optional analytics to understand which pages help visitors. Nothing loads until you choose, and
        Do Not Track is always respected. <Link href="/terms#privacy">Privacy policy</Link>
      </p>
      <div className="row">
        <button type="button" className="btn btn-w btn-s" onClick={() => writeConsent("granted")}>
          Accept analytics
        </button>
        <button type="button" className="btn btn-d btn-s" onClick={() => writeConsent("denied")}>
          Essential only
        </button>
      </div>
    </motion.section>
  );
}
