import type { Cta, ImageAsset } from "./types";

export const heroContent = {
  eyebrow: "Njoo Dada · Kenya · Est. 2014",
  headline: "Every girl deserves the chance to build a future.",
  subhead:
    "We support vulnerable teenage girls and young mothers to move beyond crisis, regain opportunity, and build independent lives with dignity.",
  ctas: [
    { label: "Support Our Work", href: "/#get-involved", variant: "primary" },
    {
      label: "Explore Our Programmes",
      href: "/#programmes",
      variant: "secondary",
    },
  ] satisfies Cta[],
};

export const heroImages: ImageAsset[] = [
  {
    src: "/images/collage1.jpeg",
    alt: "A collage of handmade Njoo Dada tote bags in colorful African print fabric.",
  },
  {
    src: "/images/bag1.jpeg",
    alt: "A Njoo Dada tote bag in a dotted circular African print pattern with leather handles.",
  },
  {
    src: "/images/collage2.jpeg",
    alt: "A collage of Njoo Dada tote and backpack designs in bold geometric prints.",
  },
  {
    src: "/images/bag2.jpeg",
    alt: "A Njoo Dada tote bag in a bold tribal-print fabric with leather handles.",
  },
  {
    src: "/images/bag3.jpeg",
    alt: "A dark teal Njoo Dada tote bag with a matching printed pouch.",
  },
];
