import type { MetadataRoute } from "next";
import { lastUpdated, projectSlug, projects, siteUrl } from "../data/portfolio";

// Home page + one page per project (/projects/<slug>) + the résumé PDF. Google ignores #fragments, so sections are not listed.
// <lastmod> is a fixed date that only changes when content changes — Google distrusts sitemaps whose lastmod is "now" on every build.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(lastUpdated);
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/images/micheal-khan-headshot.jpg`],
    },
    ...projects.map((p) => ({
      url: `${siteUrl}/projects/${projectSlug(p)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      ...(p.image ? { images: [`${siteUrl}${p.image}`] } : {}),
    })),
    {
      url: `${siteUrl}/micheal-khan-resume.pdf`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
