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
    src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1000&q=80",
    alt: "A finished handcrafted garment held up on a hanger, representing a piece ready for sale.",
    isPlaceholder: true,
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1000&q=80",
    alt: "A young woman wearing a handmade printed garment, representing pride in craftsmanship.",
    isPlaceholder: true,
  },
];
