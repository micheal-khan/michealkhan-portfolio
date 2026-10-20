import type { MetadataRoute } from "next";
import { lastUpdated, projects, siteUrl } from "../data/portfolio";

// This is a single-page site: every section lives on "/" (Google ignores #fragments, so they are not listed).
// <lastmod> is a fixed date that only changes when content changes — Google distrusts sitemaps whose lastmod is "now" on every build.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(lastUpdated);
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/micheal-khan-headshot.jpg`,
        ...projects.filter((p) => p.image).map((p) => `${siteUrl}${p.image}`),
      ],
    },
    {
      url: `${siteUrl}/micheal-khan-resume.pdf`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
