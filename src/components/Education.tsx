"use client";

import { m } from "framer-motion";
import { Award, ExternalLink, GraduationCap, Languages } from "lucide-react";
import { certifications, education, educationIntro, languages } from "../data/portfolio";
import Reveal from "./Reveal";
import { fadeUp, inView, stagger } from "./motion";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="mx-auto w-11/12 max-w-7xl scroll-mt-24 py-16">
      <Reveal>
        <h2 id="education-title" className="mb-3 text-2xl font-medium text-accentb sm:text-3xl">
          Education &amp; Certifications
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-primarytext/70">{educationIntro}</p>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-medium text-accenty">
            <GraduationCap size={20} aria-hidden /> Education
          </h3>
          <m.ol
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="border-t border-bline"
          >
            {education.map((e) => (
              <m.li key={e.school} variants={fadeUp} className="border-b border-bline py-5">
                <h4 className="text-lg font-medium">{e.credential}</h4>
                <p className="mt-1 text-sm text-accentv">
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {e.school}
                  </a>
                </p>
                <p className="mt-1 text-xs text-primarytext/70">
                  {e.period}
                  {e.grade ? ` · ${e.grade}` : ""}
                </p>
                <p className="mt-2 text-sm text-primarytext/85">{e.detail}</p>
              </m.li>
            ))}
          </m.ol>

          <h3 className="mb-4 mt-10 flex items-center gap-2 text-lg font-medium text-accentc">
            <Languages size={20} aria-hidden /> Languages
          </h3>
          <ul className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <li key={l.name} className="rounded-full border border-bline px-4 py-1.5 text-sm">
                <span lang={l.code}>{l.name}</span> <span className="text-primarytext/60">· {l.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-medium text-accentp">
            <Award size={20} aria-hidden /> Certifications
          </h3>
          <m.ul
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="border-t border-bline"
          >
            {certifications.map((c) => (
              <m.li key={c.name} variants={fadeUp} className="flex items-start justify-between gap-4 border-b border-bline py-4">
                <div className="min-w-0">
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs text-primarytext/70">
                    {c.issuer} · {c.date}
                  </p>
                </div>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${c.name} credential (opens in a new tab)`}
                    className="shrink-0 rounded-full border border-bline p-1.5 text-primarytext/70 transition-colors hover:border-accentb hover:text-accentb"
                  >
                    <ExternalLink size={14} aria-hidden />
                  </a>
                )}
              </m.li>
            ))}
          </m.ul>
        </div>
      </div>
    </section>
  );
}
