import {
  certifications,
  education,
  experiences,
  languages,
  lastUpdated,
  profile,
  projectSlug,
  projects,
  skillGroups,
  siteUrl,
} from "../data/portfolio";

export const siteTitle = "Micheal Khan | Full Stack Software & AI Automation Developer";
export const siteDescription =
  "Micheal Khan is a Full Stack Software and AI Automation Developer in Jaipur, India. Flutter, Next.js, PHP, SQL, Shopify and AI tools. Open to freelance work.";

// Structured data so Google understands who this page is about (Person / ProfilePage rich results).
export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      image: `${siteUrl}${profile.headshot}`,
      jobTitle: profile.title,
      description: profile.about,
      email: `mailto:${profile.email}`,
      telephone: profile.phone,
      knowsLanguage: languages.map((l) => l.code),
      alumniOf: education
        .filter((e) => e.school.startsWith("NIMS"))
        .map((e) => ({ "@type": "CollegeOrUniversity", name: "NIMS University", url: e.url })),
      hasCredential: certifications.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.name,
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: c.issuer },
        ...(c.url ? { url: c.url } : {}),
      })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: skillGroups.filter((g) => g.name !== "Soft Skills").flatMap((g) => g.items),
      hasOccupation: experiences.map((e) => ({
        "@type": "Occupation",
        name: e.role,
        description: `${e.company} — ${e.summary}`,
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Micheal Khan",
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      dateModified: lastUpdated,
      description: siteDescription,
      inLanguage: "en-IN",
    },
    {
      "@type": "ItemList",
      name: "Featured Projects",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${siteUrl}/projects/${projectSlug(p)}`,
      })),
    },
  ],
};

