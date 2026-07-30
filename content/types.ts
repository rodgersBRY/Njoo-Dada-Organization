export type ImageAsset = {
  src: string;
  alt: string;
  /** Set when the asset is a placeholder awaiting approved organisation photography. */
  isPlaceholder?: boolean;
  focalPoint?: string;
};

export type CtaVariant = "primary" | "secondary" | "outline" | "ghost";

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

export type ProgrammeVisualKey =
  | "shelter"
  | "book"
  | "connection"
  | "pathway"
  | "community";

export type Programme = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  visual: ProgrammeVisualKey;
};

export type ImpactStat = {
  value: number;
  suffix?: string;
  label: string;
};

export type BeneficiaryStory = {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  summary: string;
  journey: string[];
  image: ImageAsset | null;
  href: string;
  ctaLabel: string;
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
