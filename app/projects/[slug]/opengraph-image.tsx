import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 28, color: "#a1a1aa" }}>{project?.tagline ?? siteConfig.title}</span>
          <span style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
            {project?.title ?? siteConfig.name}
          </span>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {(project?.stack ?? []).slice(0, 5).map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                fontSize: 22,
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid #3f3f46",
                color: "#d4d4d8",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
