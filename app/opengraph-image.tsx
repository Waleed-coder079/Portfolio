import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const photo = readFileSync(join(process.cwd(), "public", siteConfig.profileImage)).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "80px",
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          src={`data:image/png;base64,${photo}`}
          width={280}
          height={280}
          style={{ borderRadius: "50%", objectFit: "cover", border: "4px solid #3f3f46" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 64, fontWeight: 600 }}>{siteConfig.name}</span>
          <span style={{ fontSize: 32, color: "#a1a1aa" }}>{siteConfig.title}</span>
          <span style={{ fontSize: 24, color: "#71717a" }}>{siteConfig.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
