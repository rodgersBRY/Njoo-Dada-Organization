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
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1600&q=80",
    alt: "A young Kenyan woman looks directly at the camera with a calm, confident expression.",
    isPlaceholder: true,
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
    alt: "A teacher leads a classroom discussion with secondary school students.",
    isPlaceholder: true,
  },
  {
    src: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1600&q=80",
    alt: "Three women share a moment of laughter and conversation around a table.",
    isPlaceholder: true,
  },
];
