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
    src: "/images/lunar-odawa.jpeg",
    alt: "Dr. Lunar Odawa speaking into a microphone at a Njoo Dada event.",
  },
  secondary: {
    src: "/images/dr-lunar-odawa-ceo.jpeg",
    alt: "Portrait of Dr. Lunar Odawa, Chief Executive Officer of Njoo Dada.",
  },
};
