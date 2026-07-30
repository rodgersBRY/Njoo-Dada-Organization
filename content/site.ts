import type { OrgContactField } from "./types";

export const siteConfig = {
  name: "Njoo Dada",
  legalName: "Njoo Dada",
  foundedYear: 2014,
  country: "Kenya",
  tagline: "Every girl deserves the chance to build a future.",
  description:
    "Njoo Dada supports vulnerable teenage girls and young mothers in Kenya to move beyond crisis, regain opportunity, and build independent lives with dignity, through protection, education, psychosocial support, economic empowerment, and family reintegration.",
  url: "https://www.njoodada.org",
};

export const orgIdentity: {
  registrationStatus: OrgContactField;
  registrationNumber: OrgContactField;
  physicalAddress: OrgContactField;
  email: OrgContactField;
  phone: OrgContactField;
} = {
  registrationStatus: {
    label: "Registration status",
    value: "[CLIENT TO PROVIDE]",
    isPlaceholder: true,
  },
  registrationNumber: {
    label: "Registration number",
    value: "[CLIENT TO PROVIDE]",
    isPlaceholder: true,
  },
  physicalAddress: {
    label: "Office address",
    value: "[CLIENT TO PROVIDE]",
    isPlaceholder: true,
  },
  email: {
    label: "Email",
    value: "[CLIENT TO PROVIDE]",
    isPlaceholder: true,
  },
  phone: {
    label: "Phone",
    value: "+254720149568",
    isPlaceholder: false,
  },
};

export const socialLinks: { label: string; href: string; isPlaceholder: boolean }[] = [
  { label: "Facebook", href: "#", isPlaceholder: true },
  { label: "Instagram", href: "#", isPlaceholder: true },
  { label: "LinkedIn", href: "#", isPlaceholder: true },
];

export const accountabilityLinks: { label: string; href: string; isPlaceholder: boolean }[] = [
  { label: "Annual report", href: "#", isPlaceholder: true },
];

export const legalLinks: { label: string; href: string; isPlaceholder: boolean }[] = [
  { label: "Safeguarding policy", href: "#", isPlaceholder: true },
  { label: "Privacy policy", href: "#", isPlaceholder: true },
];
