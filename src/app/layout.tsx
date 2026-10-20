import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import MotionProvider from "../components/MotionProvider";
import {
  certifications,
  education,
  experiences,
  languages,
  lastUpdated,
  profile,
  projects,
  skillGroups,
  siteUrl,
} from "../data/portfolio";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const title = "Micheal Khan | Full Stack Software & AI Automation Developer";
const description =
  "Micheal Khan is a Full Stack Software and AI Automation Developer in Jaipur, India. Flutter, Next.js, PHP, SQL, Shopify and AI tools. Open to freelance work.";

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
    "Full Stack Software and AI Automation Developer",
    "Software Developer Jaipur",
    "Full Stack Developer",
    "AI Automation Developer",
    "AI Automation Developer Jaipur",
    "Flutter Developer Jaipur",
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
  // Paste your Search Console "HTML tag" token into NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (Vercel env) to verify ownership.
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
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
      name: title,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      dateModified: lastUpdated,
      description,
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
