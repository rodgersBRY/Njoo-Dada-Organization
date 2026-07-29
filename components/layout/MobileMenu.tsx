"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import type { Cta, NavItem } from "@/content/types";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  cta: Cta;
};

export function MobileMenu({ open, onClose, navItems, cta }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={`fixed inset-0 top-[72px] z-40 bg-background transition-transform duration-300 ease-out md:hidden ${
        open ? "translate-x-0" : "pointer-events-none translate-x-full"
      }`}
    >
      <nav className="flex h-full flex-col justify-between px-6 py-10">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
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
  );
}
