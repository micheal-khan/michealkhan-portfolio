import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import MotionProvider from "../components/MotionProvider";
import { profile, siteUrl } from "../data/portfolio";
import { siteDescription, siteTitle } from "../lib/seo";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const title = siteTitle;
const description = siteDescription;

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={hanken.variable}>
      <body className="bg-bg font-sans text-primarytext">
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
