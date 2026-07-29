export type ImageAsset = {
  src: string;
  alt: string;
  /** Set when the asset is a placeholder awaiting approved organisation photography. */
  isPlaceholder?: boolean;
};

export type CtaVariant = "primary" | "secondary" | "ghost";

export type Cta = {
  label: string;
  href: string;
  variant?: CtaVariant;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ApproachStage = {
  number: string;
  title: string;
  description: string;
};

export type Programme = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  image: ImageAsset | null;
  secondaryImage?: ImageAsset;
  layout: "feature" | "split" | "collage" | "full";
};

export type ImpactStat = {
  value: number;
  suffix?: string;
  label: string;
};

export type Story = {
  narrative: string;
  quote: string;
  image: ImageAsset;
  cta: Cta;
};

export type GetInvolvedAction = {
  title: string;
  description: string;
  cta: Cta;
  icon: "heart-handshake" | "users" | "briefcase" | "megaphone";
};

export type PartnerCategory = {
  label: string;
};

export type OrgContactField = {
  label: string;
  value: string;
  href?: string;
  isPlaceholder?: boolean;
};
