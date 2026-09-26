import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sanchithaprasad.dev";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/experience`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/projects/aromapos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects/rental-erp`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects/evolve`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/notes`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
