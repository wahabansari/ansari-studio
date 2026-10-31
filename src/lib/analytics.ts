"use client";

/**
 * Consent-aware analytics helpers.
 *
 * Nothing is loaded until the visitor accepts analytics, and Do Not Track always wins.
 * IDs come from public environment variables, so a deployment without them renders no scripts.
 */
export const ANALYTICS_CONSENT_KEY = "ape-analytics-consent";
export const ANALYTICS_CONSENT_EVENT = "ape:consent-change";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();

export type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function analyticsConfigured(): boolean {
  return Boolean(GTM_ID || GA_MEASUREMENT_ID || CLARITY_ID);
}

export function dntEnabled(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    navigator.doNotTrack === "1" ||
    // Older implementations expose the flag on window.
    (window as unknown as { doNotTrack?: string }).doNotTrack === "1"
  );
}

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, choice);
  } catch {
    // Storage can be blocked; the session still respects the choice through the event below.
  }
  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail: choice }));
}

export function analyticsAllowed(): boolean {
  return analyticsConfigured() && !dntEnabled() && readConsent() === "granted";
}

/** Sends one event to the data layer (and gtag when GA4 is loaded directly). */
export function track(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined" || !analyticsAllowed()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
}
