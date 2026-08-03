"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import type { Cta, NavItem } from "@/content/types";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  cta: Cta;
};

export function MobileMenu({ open, onClose, navItems, cta }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      inert={!open}
      className={`fixed inset-x-0 top-18 z-40 overflow-hidden md:hidden ${
        open ? "bottom-0" : "bottom-auto h-0"
      }`}
    >
      <div
        className={`h-full w-full bg-background transition-transform duration-1000 ease-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex h-full flex-col justify-between px-6 py-10">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  ref={index === 0 ? firstLinkRef : undefined}
                  className="block min-h-11 py-4 font-display text-3xl text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={cta.href} variant="primary" className="w-full justify-center" onClick={onClose}>
            {cta.label}
          </Button>
        </nav>
      </div>
    </div>
  );
}
