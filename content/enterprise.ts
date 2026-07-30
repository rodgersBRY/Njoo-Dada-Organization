import type { ImageAsset } from "./types";

export const enterpriseContent = {
  eyebrow: "Economic Empowerment",
  headline: "Empowerment through enterprise.",
  body: "Through our economic empowerment programme, young mothers learn tailoring and craft skills, then turn them into handcrafted bags and accessories. Every purchase supports skills training, income generation, education, childcare, and a path toward financial independence.",
  cta: { label: "Shop With Purpose", href: "/#shop", variant: "primary" as const },
  steps: ["Hands", "Craft", "Product", "Income", "Independence"],
};

export const enterpriseImages: ImageAsset[] = [
  {
    src: "/images/njoo-dada-bracelets.avif",
    alt: "Handcrafted bags made through Njoo Dada's economic empowerment programme.",
  },
];
