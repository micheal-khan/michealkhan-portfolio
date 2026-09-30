import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import MotionProvider from "../components/MotionProvider";
import { experiences, profile, projects, skillGroups, siteUrl } from "../data/portfolio";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const title = "Micheal Khan — Full-Stack Software Developer in Jaipur";
const description =
  "Micheal Khan is a full-stack software developer in Jaipur, India building clean, scalable apps with Flutter, Next.js, PHP, SQL and Shopify. 5+ years, open to collabs.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Micheal Khan" },
  description,
  applicationName: "Micheal Khan Portfolio",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    "Micheal Khan",
    "Software Developer Jaipur",
    "Full-Stack Developer",
    "AI Automation Developer",
    "Flutter Developer",
    "Next.js Developer",
    "PHP Developer",
    "Shopify Developer",
    "Freelance Developer India",
    "React Developer",
    "Web Developer Rajasthan",
  ],
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Micheal Khan",
    title,
    description,
    locale: "en_IN",
    firstName: "Micheal",
    lastName: "Khan",
    username: profile.handle,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#0e100f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// Structured data so Google understands who this page is about (Person / ProfilePage rich results).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      image: `${siteUrl}${profile.headshot}`,
      jobTitle: profile.roles,
      description: profile.about,
      email: `mailto:${profile.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      worksFor: { "@type": "Organization", name: "BIMQP", url: "https://bimqp.com/" },
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
      name: title,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-IN",
    },
    {
      "@type": "ItemList",
      name: "Featured Projects",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.name,
          description: p.description,
          url: p.url,
          ...(p.image ? { image: `${siteUrl}${p.image}` } : {}),
          creator: { "@id": `${siteUrl}/#person` },
        },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={hanken.variable}>
      <body className="bg-bg font-sans text-primarytext">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primarytext focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
