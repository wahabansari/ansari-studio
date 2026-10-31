"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Close, Menu } from "@/components/icons";
import { MAIN_NAV, SITE_NAME, isActive } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a[href], button:not([disabled])")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-3 [view-transition-name:site-header]"
      role="banner"
    >
      <div className="relative mx-auto max-w-[1200px]">
        {/* Capsule bar */}
        <div
          className={`pointer-events-auto grid h-[64px] grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl border px-6 pr-2.5 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none max-lg:grid-cols-[1fr_auto] max-[480px]:px-4 ${
            scrolled
              ? "border-white/[0.14] bg-night/95 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)]"
              : "border-white/[0.08] bg-night/60 shadow-[0_10px_32px_-16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label={`${SITE_NAME} — home`}
            className="flex items-center justify-self-start"
          >
            <Image
              src="/brand/ansari-pe-horizontal-color-dark.svg"
              alt={SITE_NAME}
              width={148}
              height={33}
              priority
              className="h-[33px] w-auto max-[480px]:h-[28px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-0.5 text-[14px] font-medium text-mist max-lg:hidden"
          >
            {MAIN_NAV.map((item) => {
              const current = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`rounded-xl px-3.5 py-2 transition-colors duration-150 hover:text-white ${
                    current
                      ? "bg-white/[0.10] font-semibold text-white"
                      : "hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-2 justify-self-end">
            <Link
              href="/contact#book"
              className="inline-flex h-10 items-center rounded-xl bg-white px-5 text-[13px] font-semibold text-night transition-colors duration-150 hover:bg-brand-50 max-[640px]:hidden"
            >
              Book a call
            </Link>
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 text-white transition-colors duration-150 hover:border-white/25 hover:bg-white/[0.08] max-lg:flex"
            >
              {open ? <Close size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            className="pointer-events-auto absolute inset-x-0 top-[calc(100%+8px)] rounded-2xl border border-edge bg-panel p-2.5 shadow-[0_28px_56px_-16px_rgba(0,0,0,0.75)] motion-safe:animate-[menu-in_200ms_ease-out]"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-0.5">
              {MAIN_NAV.map((item) => {
                const current = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`rounded-xl px-4 py-3 text-[15px] font-medium transition-colors duration-150 ${
                      current
                        ? "bg-white/[0.08] font-semibold text-white"
                        : "text-haze hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-2 border-t border-white/[0.06] pt-2">
              <Link
                href="/contact#book"
                className="flex h-12 items-center justify-center rounded-xl bg-brand text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#2440c4]"
              >
                Book a discovery call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
