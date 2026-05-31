import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const baseUrl = "https://masnry.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/projects",
    "/projects/website-design",
    "/projects/3d-printing",
    "/projects/python-html",
    "/projects/website-design/barber-shop-demo",
    "/projects/website-design/nxt"
  ];

  const projectRoutes = projects
    .filter((project) => project.href.startsWith("/projects/"))
    .map((project) => project.href);

  return Array.from(new Set([...staticRoutes, ...projectRoutes])).map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("website-design") ? 0.8 : 0.6
  }));
}
