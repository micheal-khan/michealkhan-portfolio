import type { MetadataRoute } from "next";
import { siteUrl } from "../data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/images/micheal-khan-headshot.jpg`],
    },
    {
      url: `${siteUrl}/micheal-khan-resume.pdf`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
