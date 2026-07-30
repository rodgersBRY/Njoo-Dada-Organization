import type { BeneficiaryStory } from "./types";

export const storiesIntro = {
  eyebrow: "Stories of Change",
  headline: "Real stories. Real pathways forward.",
  supporting: "Behind every number is a young woman rebuilding her future.",
};

// SOURCE NOTE: Yvonne, Peninah, and Serah are drawn from third-party material
// published by KCDF, used here as research/source material only. Njoo Dada
// and each individual must approve the final wording, photograph, and any
// identifying detail before this content goes live.
// CLIENT APPROVAL REQUIRED
// BENEFICIARY CONSENT REQUIRED
export const featuredStory: BeneficiaryStory = {
  slug: "yvonne",
  name: "Yvonne",
  headline: "Yvonne's Journey",
  subheadline: "From finding safety to building a career in beauty.",
  summary:
    "After finding safety and support through Njoo Dada, Yvonne pursued education and developed skills in hairdressing and beauty. Today, she is building her experience, serving clients and working toward creating a business of her own.",
  journey: ["Safe House", "Education", "Skills", "Enterprise"],
  image: {
    src: "/images/yvonne-whitney-salon.webp",
    alt: "Yvonne at work in a hair and beauty salon, building the career she trained for.",
  },
  href: "https://kcdf.or.ke/njoo-dada-safe-house/",
  ctaLabel: "Read Yvonne's story",
  requiresApproval: true,
};

export const supportingStories: BeneficiaryStory[] = [
  {
    slug: "peninah",
    name: "Peninah",
    headline: "From skill to livelihood",
    subheadline: "Baking and catering skills turned into income.",
    summary:
      "After developing her baking and catering skills, Peninah began turning her craft into income while working toward further education.",
    journey: ["Skills", "Business", "Income"],
    image: {
      src: "/images/peninah-cakes.webp",
      alt: "Peninah with baked goods from the catering business built on her baking skills.",
    },
    href: "https://kcdf.or.ke/njoo-dada-safe-house/",
    ctaLabel: "Read Peninah's story",
    requiresApproval: true,
  },
  {
    slug: "serah",
    name: "Serah",
    headline: "A skill that supports a family",
    subheadline: "Tailoring as a path to steady income.",
    summary:
      "Through tailoring, Serah found a new way to generate income and support her family's everyday needs.",
    journey: ["Training", "Work", "Family"],
    image: {
      src: "/images/serah-nyambura-tailor.webp",
      alt: "Serah working as a tailor, the skill that now supports her and her family.",
    },
    href: "https://kcdf.or.ke/njoo-dada-safe-house/",
    ctaLabel: "Read Serah's story",
    requiresApproval: true,
  },
];
