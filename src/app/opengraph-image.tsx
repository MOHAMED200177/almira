import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { theme } from "@/config/theme";

export const alt = `${siteConfig.name} – ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social-sharing image (1200 x 630) used by pages that have no photo of their own. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: `linear-gradient(135deg, ${theme.primaryDeep} 0%, ${theme.primary} 100%)`,
          color: theme.surface,
        }}
      >
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700 }}>{siteConfig.name}</div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 44, color: theme.primarySoft }}>{siteConfig.tagline}</div>
        <div style={{ display: "flex", marginTop: 48, height: 10, width: 220, background: theme.accent, borderRadius: 5 }} />
      </div>
    ),
    size,
  );
}
