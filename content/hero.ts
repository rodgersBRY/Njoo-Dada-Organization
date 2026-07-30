import type { Cta, ImageAsset } from "./types";

export const heroContent = {
  eyebrow: "Njoo Dada · Kenya · Est. 2014",
  headline: "Every girl deserves the chance to build a future.",
  subhead:
    "We support vulnerable teenage girls and young mothers to move beyond crisis, regain opportunity, and build independent lives with dignity.",
  ctas: [
    { label: "Support Our Work", href: "/#get-involved", variant: "primary" },
    { label: "Explore Our Programmes", href: "/#programmes", variant: "secondary" },
  ] satisfies Cta[],
};

export const heroImages: ImageAsset[] = [
  {
    src: "/images/women.avif",
    alt: "A young Kenyan woman looks directly at the camera with a calm, confident expression.",
  },
  {
    src: "/images/school-children.avif",
    alt: "Schoolchildren in a classroom, representing a return to learning.",
  },
];
