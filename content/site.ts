import type { OrgContactField } from "./types";

export const siteConfig = {
  name: "Njoo Dada",
  legalName: "Njoo Dada",
  foundedYear: 2014,
  country: "Kenya",
  tagline: "Every girl deserves the chance to build a future.",
  description:
    "Njoo Dada supports vulnerable teenage girls and young mothers in Kenya to move beyond crisis, regain opportunity, and build independent lives with dignity, through protection, education, psychosocial support, economic empowerment, and family reintegration.",
  url: "https://www.njoodada.or.ke",
};

export const orgIdentity: {
  postalAddress: OrgContactField;
  email: OrgContactField;
  phone: OrgContactField;
} = {
  postalAddress: {
    label: "Postal address",
    value: "49773-00100 Nairobi",
    isPlaceholder: false,
  },
  email: {
    label: "Email",
    value: "info@njoodada.or.ke",
    isPlaceholder: false,
  },
  phone: {
    label: "Phone",
    value: "+254733816086",
    isPlaceholder: false,
  },
};

export const socialLinks: {
  label: string;
  href: string;
  /** Visible @handle, where the platform has one worth showing (not every platform does). */
  handle?: string;
  isPlaceholder: boolean;
}[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/www.njoodada.org/",
    isPlaceholder: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/njoodadasafehouse",
    handle: "@njoodadasafehouse",
    isPlaceholder: false,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@njoo_dada",
    handle: "@njoo_dada",
    isPlaceholder: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/njoodada/",
    isPlaceholder: false,
  },
];

export const accountabilityLinks: {
  label: string;
  href: string;
  isPlaceholder: boolean;
}[] = [{ label: "Annual report", href: "#", isPlaceholder: true }];

export const legalLinks: {
  label: string;
  href: string;
  isPlaceholder: boolean;
}[] = [
  { label: "Safeguarding policy", href: "#", isPlaceholder: true },
  { label: "Privacy & Data Protection", href: "/privacy", isPlaceholder: false },
];
