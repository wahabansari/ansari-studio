"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Close, Menu, Sun } from "@/components/icons";
import { MAIN_NAV, isActive } from "@/lib/site";

/**
 * The dark header that sits on top of every page's hero (design: PageHero / Home header).
 * It lives in the root layout, so it stays still during page transitions (view-transition-name: site-header).
 * Below 900px the pill nav becomes a menu button; the design hides the nav there with no fallback.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the menu when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

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
    <header className="absolute inset-x-0 top-0 z-30 [view-transition-name:site-header]">
      <div className="relative mx-auto flex h-[84px] max-w-[1200px] items-center justify-between gap-[16px] px-[24px]">
        <Link href="/" aria-label="Ansari Studio home" className="flex items-center">
          <Image
            src="/brand/logo-white.svg"
            alt="Ansari Studio"
            width={154}
            height={26}
            priority
            className="block h-[26px] w-auto"
          />
        </Link>

        <nav
          aria-label="Main"
          className="flex items-center gap-[6px] rounded-full border border-white/[0.08] bg-white/[0.03] p-[5px] text-[14px] font-medium text-mist max-[900px]:hidden"
        >
          {MAIN_NAV.map((item) => {
            const current = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`rounded-full px-[14px] py-[7px] transition-colors duration-150 hover:text-white ${current ? "bg-white/[0.08] text-white" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-[8px]">
          {/* In the design; a light theme is not designed yet, so the switch is shown but disabled. */}
          <button
            type="button"
            disabled
            aria-label="Switch to light theme"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-white/10 text-mist max-[480px]:hidden"
          >
            <Sun size={17} />
          </button>
          <Link
            href="/contact"
            className="inline-flex h-[40px] items-center rounded-[10px] bg-white px-[16px] text-[14px] font-semibold text-night transition-colors duration-150 hover:bg-brand-50 max-[640px]:hidden"
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
            className="hidden h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-white/10 text-white max-[900px]:flex"
          >
            {open ? <Close size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div
            ref={panelRef}
            id="mobile-menu"
            className="absolute inset-x-[16px] top-[76px] rounded-[20px] border border-edge bg-panel p-[10px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] motion-safe:animate-[menu-in_180ms_ease-out]"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {MAIN_NAV.map((item) => {
                const current = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`rounded-[12px] px-[14px] py-[12px] text-[16px] font-medium ${current ? "bg-white/[0.08] text-white" : "text-haze"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/contact"
              className="mt-[8px] flex h-[48px] items-center justify-center rounded-[12px] bg-white text-[15px] font-semibold text-night"
            >
              Discuss your project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
