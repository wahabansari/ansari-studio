"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
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

  const choose = (choice: "granted" | "denied") => {
    writeConsent(choice);
  };

  return (
    <section
      aria-label="Analytics consent"
      aria-live="polite"
      className="fixed inset-x-[16px] bottom-[16px] z-50 mx-auto max-w-[620px] rounded-[20px] border border-edge bg-panel p-[22px] text-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]"
    >
      <p className="text-[14px] leading-[1.6] text-haze">
        We use optional analytics to understand which pages help visitors. Nothing loads until you
        choose, and Do Not Track is always respected.{" "}
        <Link href="/privacy" className="font-semibold text-brand-300 underline underline-offset-4">
          Privacy policy
        </Link>
      </p>
      <div className="mt-[16px] flex flex-wrap gap-[8px]">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="inline-flex h-[40px] cursor-pointer items-center rounded-[10px] bg-white px-[18px] text-[14px] font-semibold text-night transition-colors duration-150 hover:bg-brand-50"
        >
          Accept analytics
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="inline-flex h-[40px] cursor-pointer items-center rounded-[10px] border border-edge px-[18px] text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-white/[0.06]"
        >
          Essential only
        </button>
      </div>
    </section>
  );
}
