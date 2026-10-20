import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { lastUpdated, profile, projectCategories, projectSlug, projects, siteUrl } from "../../../data/portfolio";

// Every project gets its own static, indexable page: /projects/<slug>.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: projectSlug(p) }));
}

const findProject = (slug: string) => projects.find((p) => projectSlug(p) === slug);
const labelOf = Object.fromEntries(projectCategories.map((c) => [c.id, c.label]));

// Keep meta descriptions inside Google's ~160-character display window, cutting on a word boundary.
function clip(text: string, max = 158) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = findProject(slug);
  if (!p) return {};
  const title = `${p.name} — ${p.tags.slice(0, 2).join(" & ")} Project`;
  const description = clip(`${p.description} Built by ${profile.name}, ${profile.title}.`);
  const images = p.image
    ? [{ url: p.image, alt: `${p.name} screenshot` }]
    : [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${p.name} by ${profile.name}` }];
  return {
    title,
    description,
    keywords: [p.name, ...p.tags, `${p.name} developer`, "Micheal Khan", "Jaipur"],
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${slug}`,
      siteName: "Micheal Khan",
      locale: "en_IN",
      title: `${title} | Micheal Khan`,
      description,
      images,
      authors: [profile.name],
    },
    twitter: { card: "summary_large_image", title: `${title} | Micheal Khan`, description, images },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = findProject(slug);
  if (!p) notFound();

  const pageUrl = `${siteUrl}/projects/${slug}`;
  const image = p.image ? `${siteUrl}${p.image}` : `${siteUrl}/opengraph-image`;
  const categories = p.categories.map((c) => labelOf[c]);
  const related = projects.filter((o) => o !== p && o.categories.some((c) => p.categories.includes(c))).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: p.name, item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${p.name} — ${p.tags.slice(0, 2).join(" & ")} Project`,
        description: p.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${pageUrl}#project` },
        primaryImageOfPage: { "@type": "ImageObject", url: image },
        dateModified: lastUpdated,
        inLanguage: "en-IN",
      },
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#project`,
        name: p.name,
        description: p.description,
        url: p.url,
        image,
        keywords: p.tags.join(", "),
        genre: categories,
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      },
    ],
  };

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <header className="border-b border-bline/60">
        <nav aria-label="Main" className="mx-auto flex w-11/12 max-w-5xl items-center justify-between py-5">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-bline px-4 py-2 text-sm font-medium transition-colors hover:border-accentv"
          >
            <span className="h-3 w-3 rounded-full bg-primarytext" />
            {profile.handle}
          </Link>
          <Link href="/#projects" className="flex items-center gap-2 text-sm text-primarytext/80 hover:text-accentb">
            <ArrowLeft size={16} aria-hidden /> All projects
          </Link>
        </nav>
      </header>

      <main id="main" className="mx-auto w-11/12 max-w-5xl py-12 sm:py-16">
        <p className="text-sm text-accentc">{categories.join(" · ")}</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-6xl">{p.name}</h1>
        <p className="mt-5 max-w-2xl text-lg text-primarytext/85 sm:text-xl">{p.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies and topics">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-bline px-3 py-1 text-xs text-primarytext/85">
              {t}
            </li>
          ))}
        </ul>

        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primarytext px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
        >
          Visit {p.name} <ArrowUpRight size={16} aria-hidden />
          <span className="sr-only">(opens in a new tab)</span>
        </a>

        {p.image && (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-bline">
            <Image
              src={p.image}
              alt={`${p.name} — screenshot of the ${p.tags[0]} project built by ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 1024px"
              className="object-cover object-top"
            />
          </div>
        )}

        <section aria-labelledby="about-project" className="mt-12 max-w-2xl">
          <h2 id="about-project" className="text-2xl font-medium text-accenty">
            About this project
          </h2>
          <p className="mt-3 text-primarytext/85">
            {p.name} is a {categories.join(" / ").toLowerCase()} project designed and built by {profile.name}, a{" "}
            {profile.title} based in {profile.location}. It uses {p.tags.join(", ")}. {p.description}
          </p>
          <p className="mt-3 text-primarytext/85">
            Have something similar in mind? I build clean, scalable web, mobile and AI-automation projects — get in
            touch to talk about yours.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-bline px-5 py-2.5 text-sm transition-colors hover:border-accentg hover:text-accentg"
          >
            <Mail size={16} aria-hidden /> {profile.email}
          </a>
        </section>

        {related.length > 0 && (
          <section aria-labelledby="related-projects" className="mt-14">
            <h2 id="related-projects" className="text-2xl font-medium text-accentv">
              More projects
            </h2>
            <ul className="mt-4 border-t border-bline">
              {related.map((r) => (
                <li key={r.name} className="border-b border-bline">
                  <Link
                    href={`/projects/${projectSlug(r)}`}
                    className="flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-accentb"
                  >
                    <span className="text-lg font-medium">{r.name}</span>
                    <span className="text-xs text-primarytext/60">{r.tags.slice(0, 2).join(", ")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <footer className="mx-auto flex w-11/12 max-w-5xl items-center justify-between border-t border-bline py-6 text-sm text-primarytext/70">
        <Link href="/" className="hover:text-accentb">
          {profile.name} — {profile.title}
        </Link>
        <span>{profile.location}</span>
      </footer>
    </div>
  );
}
