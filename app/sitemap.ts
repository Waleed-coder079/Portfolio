import type { MetadataRoute } from "next";
import { getAllProjects } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/experience", "/projects", "/skills", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    }),
  );

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
