import type { ApproachStage, Programme } from "./types";

export const programmesIntro = {
  eyebrow: "Our Programmes",
  headline: "Support that creates pathways forward.",
  supporting:
    "Our programmes work together to help vulnerable teenage girls and teenage mothers move from crisis toward safety, opportunity and independence.",
};

export const programmes: Programme[] = [
  {
    slug: "safe-house",
    number: "01",
    title: "Safe House",
    tagline: "A safe place to begin again.",
    description:
      "Our transitional safe house provides emergency accommodation for girls and young mothers escaping abuse, neglect, violence, or crisis.",
    services: [
      "Protection",
      "Counselling",
      "Medical Referrals",
      "Parenting Support",
      "Legal Referrals",
      "Reintegration Planning",
    ],
    visual: "shelter",
  },
  {
    slug: "education",
    number: "02",
    title: "Education",
    tagline: "Keeping futures open.",
    description:
      "We support girls and young mothers to continue their education and develop the skills they need for their future.",
    services: [
      "Secondary Education",
      "TVET",
      "School Fees",
      "School Supplies",
      "Mentorship",
      "Career Guidance",
      "Life Skills",
    ],
    visual: "book",
  },
  {
    slug: "psychosocial-support",
    number: "03",
    title: "Psychosocial Support",
    tagline: "Healing. Resilience. Hope.",
    description:
      "We provide psychosocial support that helps girls and young mothers navigate trauma, rebuild emotional resilience and strengthen their wellbeing.",
    services: [
      "Individual Counselling",
      "Group Therapy",
      "Parenting Support",
      "Trauma Recovery",
      "Emotional Resilience",
      "Mental Health Education",
    ],
    visual: "connection",
  },
  {
    slug: "economic-empowerment",
    number: "04",
    title: "Economic Empowerment",
    tagline: "From skills to independence.",
    description:
      "We help young mothers develop practical skills, start businesses and build pathways toward financial independence.",
    services: [
      "Entrepreneurship",
      "Financial Literacy",
      "Business Coaching",
      "Product Development",
      "Market Linkages",
      "Street Business School",
    ],
    visual: "pathway",
  },
  {
    slug: "community-engagement",
    number: "05",
    title: "Community Engagement",
    tagline: "Building communities where girls can thrive.",
    description:
      "We work with families, schools and communities to create supportive environments where vulnerable girls and young mothers can rebuild their lives.",
    services: [
      "Awareness Campaigns",
      "Parent Education",
      "Community Dialogue",
      "Family Mediation",
      "Advocacy",
      "School Programmes",
    ],
    visual: "community",
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
