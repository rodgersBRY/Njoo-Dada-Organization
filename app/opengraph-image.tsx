import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt =
  "Njoo Dada — Empowering Teenage Girls & Young Mothers in Kenya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#f6f1e8",
        color: "#211f1a",
      }}
    >
      <div
        style={{
          fontSize: 28,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#a8502e",
          display: "flex",
        }}
      >
        Njoo Dada · Kenya · Est. {siteConfig.foundedYear}
      </div>
      <div
        style={{
          marginTop: 32,
          fontSize: 72,
          lineHeight: 1.1,
          maxWidth: 980,
          display: "flex",
        }}
      >
        {siteConfig.tagline}
      </div>
      <div
        style={{
          marginTop: 32,
          fontSize: 28,
          color: "#6b6558",
          maxWidth: 900,
          display: "flex",
        }}
      >
        Protection, education, and economic empowerment for vulnerable teenage
        girls and young mothers.
      </div>
    </div>,
    { ...size },
  );
}
