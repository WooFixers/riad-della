import { MetadataRoute } from "next";
import { locales } from "@/lib/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com";

const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/rooms", priority: 0.9, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/spa", priority: 0.8, changeFrequency: "monthly" },
  { path: "/golf", priority: 0.8, changeFrequency: "monthly" },
  { path: "/experiences", priority: 0.8, changeFrequency: "monthly" },
  { path: "/transportation", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: {
            "x-default": `${BASE_URL}/en${path}`,
            ...Object.fromEntries(locales.map((l) => [l, `${BASE_URL}/${l}${path}`])),
          },
        },
      });
    }
  }

  return entries;
}
