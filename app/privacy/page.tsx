import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { PrivacyPolicy } from "@/components/privacy/PrivacyPolicy";

const title = "Privacy & Data Protection";
const description =
  "Learn how Njoo Dada collects, uses and protects personal information submitted through our website in accordance with our commitment to privacy and responsible data handling.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/privacy`,
  },
  twitter: {
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
