"use client";

import { m } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto w-11/12 max-w-7xl scroll-mt-24 py-20">
      <h2 id="about-title" className="sr-only">
        About {profile.name}
      </h2>

      <div className="flex flex-col gap-8 sm:flex-row">
        <Reveal className="max-w-3xl">
          <p className="text-xl font-light leading-snug sm:text-2xl md:text-3xl lg:text-4xl">{profile.about}</p>
        </Reveal>
        <div className="flex-grow" />
        <Reveal delay={0.1} className="max-w-xs text-sm sm:pl-10">
          <p>// {profile.highlights[1].title}</p>
          <p className="mt-2 text-primarytext/70">{profile.highlights[1].sub}</p>
          <a href={`mailto:${profile.email}`} className="mt-4 block break-all text-accentb hover:underline">
            {profile.email}
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-12 text-2xl font-medium leading-tight text-accentg sm:text-3xl md:text-4xl">
          {profile.highlights[0].title}
          <br />
          {profile.highlights[0].sub}
        </p>
      </Reveal>

      <div className="relative my-10 flex items-center">
        <m.div
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-full origin-left bg-bline"
        />
        <m.div
          aria-hidden
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          whileHover={{ rotate: 20, scale: 1.08 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
          className="absolute right-6 flex h-16 w-16 items-center justify-center rounded-full bg-primarytext text-bg sm:right-16 sm:h-20 sm:w-20"
        >
          <Zap size={28} strokeWidth={1.75} />
        </m.div>
      </div>

      <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
        <Reveal className="max-w-md">
          <p className="text-lg sm:text-xl">
            {profile.highlights[2].title}. {profile.highlights[2].sub}.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <m.a
            href={profile.resume}
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 rounded-full border border-bline px-7 py-4 text-lg transition-colors hover:border-accentv hover:bg-accentv hover:text-bg sm:text-xl"
          >
            Download Resume
            <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />
          </m.a>
        </Reveal>
      </div>
    </section>
  );
}
