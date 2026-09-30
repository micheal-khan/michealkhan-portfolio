"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { skillGroups, skillsIntro } from "../data/portfolio";
import Reveal from "./Reveal";
import { EASE, inView, pop, stagger } from "./motion";

// Skill name → logo file in /public/tech (only where an official logo exists).
const logo: Record<string, string> = {
  HTML5: "html5",
  CSS3: "css3",
  JavaScript: "javascript",
  React: "react",
  "Next.js": "nextjs",
  Tailwind: "tailwind",
  "Material UI": "materialui",
  Bootstrap: "bootstrap",
  HTMX: "htmx",
  "PHP 8": "php",
  "Node.js": "nodejs",
  Express: "express",
  Flutter: "flutter",
  Dart: "dart",
  "Electron.js": "electron",
  "Tauri 2.0": "tauri",
  MySQL: "mysql",
  MongoDB: "mongodb",
  PostgreSQL: "postgresql",
  Supabase: "supabase",
  "Git/GitHub": "git",
  Netlify: "netlify",
  Vercel: "vercel",
  Firebase: "firebase",
  "Linux CLI": "linux",
  Postman: "postman",
  Figma: "figma",
  TypeScript: "typescript",
  Prisma: "prisma",
  Shopify: "shopify",
  "Shopify Dev Dashboard": "shopify",
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto w-11/12 max-w-7xl scroll-mt-24 py-16">
      <Reveal>
        <h2 id="skills-title" className="mb-3 text-2xl font-medium text-accenty sm:text-3xl">
          Skills &amp; Technologies
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-primarytext/70">{skillsIntro}</p>
      </Reveal>

      <div className="divide-y divide-bline border-t border-bline">
        {skillGroups.map((g, i) => (
          <div
            key={g.name}
            className="grid grid-cols-1 items-start gap-5 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-10"
          >
            <div className="flex items-baseline gap-4 overflow-hidden">
              <span className="text-xs text-primarytext/50">{String(i + 1).padStart(2, "0")}</span>
              <m.h3
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={inView}
                transition={{ duration: 0.7, ease: EASE }}
                className={`text-4xl font-medium leading-none tracking-tight sm:text-5xl lg:text-6xl ${g.color}`}
              >
                {g.name}
              </m.h3>
            </div>
            <m.ul
              variants={stagger(0.03, 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="flex flex-wrap justify-start gap-2 md:justify-end"
            >
              {g.items.map((item) => (
                <m.li
                  key={item}
                  variants={pop}
                  className="flex items-center gap-1.5 rounded-full border border-bline px-3 py-1.5 text-xs transition-colors hover:border-accentv hover:text-accentv"
                >
                  {logo[item] && (
                    <Image src={`/tech/${logo[item]}.svg`} alt="" width={14} height={14} className="h-3.5 w-3.5" unoptimized />
                  )}
                  {item}
                </m.li>
              ))}
            </m.ul>
          </div>
        ))}
      </div>
    </section>
  );
}
