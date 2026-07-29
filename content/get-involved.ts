import type { GetInvolvedAction, PartnerCategory } from "./types";

export const getInvolvedActions: GetInvolvedAction[] = [
  {
    title: "Give",
    description: "Donate once or monthly to fund protection, education, and empowerment programmes.",
    cta: { label: "Donate", href: "/#get-involved", variant: "primary" },
    icon: "heart-handshake",
  },
  {
    title: "Volunteer",
    description: "Share your skills and time, from a few hours of mentoring to professional expertise.",
    cta: { label: "Volunteer With Us", href: "/#get-involved", variant: "secondary" },
    icon: "users",
  },
  {
    title: "Partner",
    description: "CSR, sponsorship, skills-based volunteering, and fundraising partnerships.",
    cta: { label: "Explore Partnership", href: "/#get-involved", variant: "secondary" },
    icon: "briefcase",
  },
  {
    title: "Ambassador",
    description: "Share our story and advocate for the rights of girls and young mothers.",
    cta: { label: "Become an Ambassador", href: "/#get-involved", variant: "secondary" },
    icon: "megaphone",
  },
];

export const partnerCategories: PartnerCategory[] = [
  { label: "Communities" },
  { label: "Schools" },
  { label: "Healthcare providers" },
  { label: "Government agencies" },
  { label: "Development partners" },
];
