import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Njoo Dada | Empowering Teenage Girls & Young Mothers in Kenya",
    template: "%s | Njoo Dada",
  },
  description:
    "Njoo Dada supports vulnerable teenage girls and young mothers in Kenya through protection, education, psychosocial support, and economic empowerment, helping them move beyond crisis and build independent futures.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Njoo Dada | Empowering Teenage Girls & Young Mothers in Kenya",
    description:
      "Supporting vulnerable teenage girls and young mothers in Kenya to move beyond crisis and build independent lives with dignity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Njoo Dada | Empowering Teenage Girls & Young Mothers in Kenya",
    description:
      "Supporting vulnerable teenage girls and young mothers in Kenya to move beyond crisis and build independent lives with dignity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#7a1e75",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  foundingDate: `${siteConfig.foundedYear}`,
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${poppins.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
