import type { Cta, NavItem } from "./types";

export const navItems: NavItem[] = [
  { label: "Our Story", href: "/#our-story" },
  { label: "Our Work", href: "/#programmes" },
  { label: "Impact", href: "/#impact" },
  { label: "Shop", href: "/#shop" },
  { label: "Get Involved", href: "/#get-involved" },
];

export const primaryNavCta: Cta = {
  label: "Donate",
  href: "/#get-involved",
  variant: "primary",
};
