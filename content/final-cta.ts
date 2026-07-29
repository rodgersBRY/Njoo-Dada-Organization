import type { Cta, ImageAsset } from "./types";

export const finalCtaContent = {
  headline: "Help create a different future.",
  body: "Give, volunteer, partner, shop, or share our story. Each one helps a girl or young mother take her next step toward dignity, opportunity, and independence.",
  ctas: [
    { label: "Support Our Work", href: "/#get-involved", variant: "primary" },
    { label: "Get Involved", href: "/#get-involved", variant: "secondary" },
  ] satisfies Cta[],
};

export const finalCtaImage: ImageAsset = {
  src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80",
  alt: "A group of young people sitting together outdoors, smiling and supporting one another.",
  isPlaceholder: true,
};
