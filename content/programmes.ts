import type { ApproachStage, Programme } from "./types";

export const programmes: Programme[] = [
  {
    slug: "safe-house",
    title: "Safe House",
    tagline: "A safe place to begin again.",
    description:
      "When a girl arrives in crisis, the first need is safety. Our safe house provides emergency shelter, basic needs, and a calm environment where healing can begin, away from the abuse, abandonment, or exploitation she has faced.",
    services: [
      "Emergency shelter and basic needs",
      "Medical referral and support",
      "Safety planning and case management",
      "A calm, structured daily routine",
    ],
    image: null,
    layout: "full",
  },
  {
    slug: "education",
    title: "Education",
    tagline: "Opening pathways to learning and opportunity.",
    description:
      "Interrupted schooling is one of the most common consequences of crisis. We support girls to re-enrol in school, catch up on missed learning, and pursue technical and vocational training that fits their circumstances.",
    services: [
      "School re-enrolment support",
      "Remedial and bridging classes",
      "TVET and vocational scholarships",
      "Mentorship for academic goals",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
      alt: "A teacher leads a classroom discussion with a group of secondary school students.",
      isPlaceholder: true,
    },
    secondaryImage: {
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
      alt: "A stack of textbooks, representing renewed access to schooling.",
      isPlaceholder: true,
    },
    layout: "collage",
  },
  {
    slug: "psychosocial-support",
    title: "Psychosocial Support",
    tagline: "Helping young women heal and rebuild.",
    description:
      "Trauma from abuse, abandonment, or stigma does not resolve on its own. Trained counsellors work with each girl individually and in group settings, building the emotional foundation she needs to trust, hope, and move forward.",
    services: [
      "One-on-one counselling",
      "Peer support groups",
      "Trauma-informed care",
      "Family mediation where appropriate",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80",
      alt: "A counsellor listens attentively during a one-on-one support conversation.",
      isPlaceholder: true,
    },
    layout: "feature",
  },
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    tagline: "Building skills that create independence.",
    description:
      "Independence takes more than good intentions. It takes income. Young mothers learn tailoring, crafts, and small-business skills, and are supported to start enterprises that can sustain themselves and their children.",
    services: [
      "Vocational and craft training",
      "Financial literacy",
      "Business start-up support",
      "Access to markets for finished goods",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80",
      alt: "A finished handcrafted garment held up on a hanger, representing income-generating craft work.",
      isPlaceholder: true,
    },
    layout: "split",
  },
  {
    slug: "community-engagement",
    title: "Community Engagement",
    tagline: "Creating communities where girls can thrive.",
    description:
      "Lasting change reaches beyond any one girl. We work with families, schools, healthcare providers, and local leaders to shift attitudes, strengthen referral pathways, and build communities that protect rather than exclude.",
    services: [
      "Community awareness and dialogue",
      "School and health-provider partnerships",
      "Family reintegration support",
      "Local leader and volunteer engagement",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1200&q=80",
      alt: "Three women in conversation and laughter around a table, representing peer and community support.",
      isPlaceholder: true,
    },
    secondaryImage: {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
      alt: "A small group of young people in conversation, representing community dialogue.",
      isPlaceholder: true,
    },
    layout: "collage",
  },
];

export const approachStages: ApproachStage[] = [
  {
    number: "01",
    title: "Protect",
    description: "Emergency safety, shelter, and stabilisation for girls in crisis.",
  },
  {
    number: "02",
    title: "Restore",
    description: "Counselling and psychosocial care to begin healing from trauma.",
  },
  {
    number: "03",
    title: "Educate",
    description: "Re-entry into school and access to vocational training.",
  },
  {
    number: "04",
    title: "Empower",
    description: "Skills, income, and enterprise for lasting independence.",
  },
  {
    number: "05",
    title: "Reconnect",
    description: "Family reintegration and community belonging.",
  },
];
