"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Close, Menu } from "@/components/icons";
import { MAIN_NAV, SITE_NAME, isActive } from "@/lib/site";

/**
 * The whole header is one floating capsule: logo on the left, menu in the middle, call to action on the right.
 * It is fixed to the top, so navigation is always reachable, and it becomes a little more solid once the
 * visitor scrolls. It lives in the root layout, so it stays still during page transitions
 * (view-transition-name: site-header). Below 900px the menu collapses into a button inside the same capsule.
 * Page heroes reserve 84px at the top for it.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the menu when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-[16px] pt-[12px] [view-transition-name:site-header]">
      <div className="relative mx-auto max-w-[1200px]">
        <div
          className={`pointer-events-auto grid h-[64px] grid-cols-[1fr_auto_1fr] items-center gap-[12px] rounded-full border py-[8px] pr-[10px] pl-[24px] backdrop-blur-xl [transition:background-color_.25s_ease,border-color_.25s_ease,box-shadow_.25s_ease] motion-reduce:[transition:none] max-[900px]:grid-cols-[1fr_auto] max-[480px]:pl-[18px] ${
            scrolled
              ? "border-white/[0.14] bg-night/[0.96] shadow-[0_18px_48px_-18px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.06)]"
              : "border-white/[0.1] bg-night/60 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]"
          }`}
        >
          <Link href="/" aria-label={`${SITE_NAME} home`} className="flex items-center justify-self-start">
            <Image
              src="/brand/ansari-pe-horizontal-color-dark.svg"
              alt={SITE_NAME}
              width={152}
              height={34}
              priority
              className="block h-[34px] w-auto max-[480px]:h-[30px]"
            />
          </Link>

          <nav
            aria-label="Main"
            className="flex items-center gap-[4px] text-[14px] font-medium text-mist max-[900px]:hidden"
          >
            {MAIN_NAV.map((item) => {
              const current = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`rounded-full px-[14px] py-[8px] transition-colors duration-150 hover:text-white ${current ? "bg-white/[0.1] text-white" : "hover:bg-white/[0.05]"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-[8px] justify-self-end">
            <Link
              href="/contact"
              className="inline-flex h-[44px] items-center rounded-full bg-white px-[20px] text-[14px] font-semibold text-night transition-colors duration-150 hover:bg-brand-50 max-[640px]:hidden"
            >
              Discuss your project
            </Link>
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="hidden h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-150 hover:border-white/[0.28] hover:bg-white/[0.09] max-[900px]:flex"
            >
              {open ? <Close size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div
            ref={panelRef}
            id="mobile-menu"
            className="pointer-events-auto absolute inset-x-0 top-[calc(100%+8px)] rounded-[28px] border border-edge bg-panel p-[10px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] motion-safe:animate-[menu-in_180ms_ease-out]"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {MAIN_NAV.map((item) => {
                const current = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`rounded-full px-[18px] py-[12px] text-[16px] font-medium transition-colors duration-150 ${current ? "bg-white/[0.08] text-white" : "text-haze hover:bg-white/[0.06] hover:text-white"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/contact"
              className="mt-[8px] flex h-[48px] items-center justify-center rounded-full bg-white text-[15px] font-semibold text-night transition-colors duration-150 hover:bg-brand-50"
            >
              Discuss your project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
