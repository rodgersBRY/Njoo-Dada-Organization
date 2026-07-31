import type { ImageAsset } from "./types";

/**
 * Consented, org-owned photography for the Programmes section. Not attached to
 * the `Programme` type — each layout pattern branch decides how to use these.
 *
 * `graduation.jpeg` has had the faces of three minors in frame blurred (sharp
 * gaussian blur, composited over the original at native resolution) — owner
 * consent covers the organisation's use of the photo, but not the children.
 */
export const programmeSpotlightCaption =
  "From safety to certificates in hand — five programmes, one path forward.";

export const programmeImages = {
  graduation: {
    src: "/images/programmes/graduation.jpeg",
    alt: "Njoo Dada participants celebrating with their Street Business School graduation certificates.",
  },
  skillsTraining: {
    src: "/images/programmes/skills-training.jpeg",
    alt: "Young mothers taking part in a Street Business School training session.",
    focalPoint: "50% 35%",
  },
  beneficiary: {
    src: "/images/programmes/beneficiary.jpeg",
    alt: "A young woman preparing bottles for the perfume business she runs.",
    focalPoint: "50% 30%",
  },
  beneficiary1: {
    src: "/images/programmes/beneficiary1.jpeg",
    alt: "A Njoo Dada participant in cap and gown on her graduation day.",
    focalPoint: "50% 30%",
  },
} satisfies Record<string, ImageAsset>;
