"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Plus } from "lucide-react";
import { experiences, experienceIntro } from "../data/portfolio";
import Reveal from "./Reveal";
import { EASE, fadeUp, inView, stagger } from "./motion";

export default function ExperienceSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto w-11/12 max-w-7xl scroll-mt-24 py-16">
      <Reveal>
        <h2 id="experience-title" className="mb-3 text-2xl font-medium text-accento sm:text-3xl">
          Experience
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-primarytext/70">{experienceIntro}</p>
      </Reveal>

      <m.ol
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="border-t border-bline"
      >
        {experiences.map((exp, i) => {
          const isOpen = open === i;
          const panelId = `exp-panel-${i}`;
          return (
            <m.li key={exp.company} variants={fadeUp} className="group border-b border-bline">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-1 py-8 text-left sm:gap-6 sm:px-10 sm:py-10 lg:px-16"
                >
                  <span className="min-w-0">
                    <span className="block text-xl font-medium transition-colors group-hover:text-accentv sm:text-3xl lg:text-4xl">
                      {exp.role} — {exp.company}
                    </span>
                    <span className="mt-2 block text-xs text-primarytext/70 sm:text-sm">
                      <time>{exp.period}</time> · {exp.location}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-6">
                    {exp.stat && (
                      <span className="hidden text-right sm:block">
                        <span className="block text-3xl font-medium text-accentv lg:text-4xl">{exp.stat.value}</span>
                        <span className="block max-w-[9rem] text-xs text-primarytext/80">{exp.stat.label}</span>
                      </span>
                    )}
                    <m.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                        isOpen ? "border-accentv text-accentv" : "border-bline"
                      }`}
                    >
                      <Plus size={18} aria-hidden />
                    </m.span>
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    id={panelId}
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 px-1 pb-10 sm:px-10 md:grid-cols-2 lg:px-16">
                      <div>
                        {exp.stat && (
                          <p className="mb-3 sm:hidden">
                            <span className="text-2xl font-medium text-accentv">{exp.stat.value}</span>{" "}
                            <span className="text-xs text-primarytext/80">{exp.stat.label}</span>
                          </p>
                        )}
                        <p className="text-primarytext/90">{exp.summary}</p>
                        {exp.companyUrl && (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block text-sm text-accentb hover:underline"
                          >
                            {exp.companyUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </a>
                        )}
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-accenty">Key Achievements:</p>
                        <ul className="space-y-2 text-sm text-primarytext/85">
                          {exp.achievements.map((a, j) => (
                            <m.li
                              key={a}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + j * 0.05 }}
                              className="flex gap-2"
                            >
                              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentv" />
                              {a}
                            </m.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.li>
          );
        })}
      </m.ol>
    </section>
  );
}
