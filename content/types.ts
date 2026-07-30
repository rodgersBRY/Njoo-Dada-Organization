export type ImageAsset = {
  src: string;
  alt: string;
  /** Set when the asset is a placeholder awaiting approved organisation photography. */
  isPlaceholder?: boolean;
  /** CSS object-position override for source photos whose subject sits off-centre. */
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

export type BeneficiaryStory = {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  summary: string;
  journey: string[];
  /** Null until an approved photograph is confirmed — renders a pending-approval placeholder. */
  image: ImageAsset | null;
  href: string;
  ctaLabel: string;
  /** Always true for stories sourced from third-party material pending Njoo Dada + subject approval. */
  requiresApproval: boolean;
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
