import type { ImageAsset } from "./types";

export const whyContent = {
  eyebrow: "Why Njoo Dada",
  headline: "A difficult beginning shouldn't determine a girl's future.",
  body: [
    "Many teenage girls and young mothers in Kenya face abuse, abandonment, poverty, interrupted education, trauma, and stigma, often all at once. Without support, a single crisis can close off years of opportunity.",
    "Njoo Dada was founded in 2014 to create a different path: one that moves a girl from crisis toward protection, healing, education, skills, and ultimately, an independent life she builds for herself.",
  ],
  foundedYear: 2014,
};

export const whyImages: { primary: ImageAsset; secondary: ImageAsset } = {
  primary: {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
    alt: "Students engaged in a classroom lesson, representing a return to learning.",
    isPlaceholder: true,
    focalPoint: "center 25%",
  },
  secondary: {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&q=80",
    alt: "A young woman with a calm, confident expression.",
    isPlaceholder: true,
  },
};
