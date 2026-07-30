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
    src: "/images/women.avif",
    alt: "A young Kenyan woman with a calm, confident expression.",
  },
  secondary: {
    src: "/images/donation1.avif",
    alt: "A community moment representing support and generosity.",
  },
};
