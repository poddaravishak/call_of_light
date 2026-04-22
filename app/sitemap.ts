import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly" },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily" },
    { url: `${base}/authors`, lastModified: now, changeFrequency: "weekly" },
    { url: `${base}/contact`, lastModified: now },
    { url: `${base}/subscribe`, lastModified: now },
  ];
}
