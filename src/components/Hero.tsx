"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { profile } from "../data/portfolio";
import { EASE } from "./motion";

function Cursor({
  label,
  color,
  className,
  flip,
  delay,
}: {
  label: string;
  color: string;
  className: string;
  flip?: boolean;
  delay: number;
}) {
  return (
    <m.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: EASE }}
      className={`pointer-events-none absolute z-20 hidden md:block ${className}`}
    >
      <div className={`flex animate-floaty flex-col ${flip ? "items-end" : "items-start"}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" className={flip ? "-scale-x-100" : ""} style={{ color }}>
          <path d="M3 2l18 8-8 2.5L10 21z" fill="currentColor" stroke="#0e100f" strokeWidth="1" />
        </svg>
        <span className="ml-4 rounded-full px-2.5 py-0.5 text-xs font-semibold text-bg shadow-lg" style={{ backgroundColor: color }}>
          {label}
        </span>
      </div>
    </m.div>
  );
}

// Word slides up from behind a mask. Transform-only, so the text is painted immediately (good for LCP).
function MaskWord({ children, className, delay }: { children: React.ReactNode; className: string; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <m.span
        className={`block ${className}`}
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.9, ease: EASE }}
      >
        {children}
      </m.span>
    </span>
  );
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE },
});

const word = "text-[16vw] sm:text-[12vw] lg:text-[8.25rem] font-medium leading-[0.92] tracking-tight";

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pb-16 pt-28">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
      <m.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[40vmax] w-[40vmax] -translate-x-1/2 rounded-full bg-accentv/10 blur-[120px]"
      />

      {/* Greeting */}
      <m.div {...fade(0.05)} className="relative z-40 mb-3 flex items-center justify-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primarytext/80 sm:h-16 sm:w-16">
          <Image
            src={profile.headshot}
            alt={`${profile.name}, ${profile.title} in ${profile.location}`}
            fill
            sizes="64px"
            className="object-cover"
            priority
          />
        </div>
        <p className="rounded-full border border-bline px-4 py-2.5 text-base sm:text-lg">Hello, I&apos;m {profile.firstName}</p>
      </m.div>

      <div className="relative w-full px-3">
        <Cursor label="Flutter" color="#ee46d3" className="left-[26%] top-0" delay={1.1} />
        <Cursor label="Next.js" color="#a374ff" className="right-[3%] top-[45%]" flip delay={1.25} />
        <Cursor label="Shopify" color="#18a0fb" className="left-[4%] bottom-0" delay={1.4} />

        <h1 className="flex flex-col items-center text-center">
          <span className="sr-only">
            {profile.name} — Full-Stack Software Developer &amp; AI Automation Developer in {profile.location}
          </span>

          <span aria-hidden className="flex items-center justify-center gap-4 sm:ml-10">
            <MaskWord className={`${word} text-accentv`} delay={0.1}>FULL-STACK</MaskWord>
            <m.span {...fade(0.8)} className="hidden max-w-[9rem] text-left text-sm font-normal md:block">
              // Based in
              <br />
              {profile.location}
            </m.span>
          </span>

          <span aria-hidden className="block">
            <MaskWord className={`${word} text-accenty`} delay={0.2}>SOFTWARE</MaskWord>
          </span>

          <span aria-hidden className="flex items-center justify-center gap-3">
            <MaskWord className={`${word} text-primarytext`} delay={0.3}>DEVELOPER</MaskWord>
          </span>

          <span aria-hidden className="flex items-center justify-center gap-4 sm:mr-24">
            <m.span {...fade(0.9)} className="hidden max-w-[10rem] text-left text-sm font-normal md:block">
              // {profile.availability[0]}
              <br />
              {profile.availability[1]}
            </m.span>
            <MaskWord className={`${word} text-primarytext`} delay={0.4}>
              &amp; <span className="text-accentc">AI</span>
            </MaskWord>
          </span>
        </h1>
      </div>

      <m.p
        initial={{ y: 16 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
        className="mt-8 max-w-2xl px-4 text-center text-xl sm:text-2xl">
        I build clean, scalable apps fast—
        <br className="hidden sm:block" />
        <span className="text-accentv">Flutter</span>, <span className="text-accenty">Next.js</span>,{" "}
        <span className="text-accentc">PHP</span>, <span className="text-accentb">SQL</span>.
      </m.p>

      <m.div {...fade(0.85)} className="mt-8 flex flex-wrap items-center justify-center gap-3 px-4">
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-bline bg-bg px-5 py-3 text-sm font-medium transition-colors hover:border-accentg"
        >
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-accentg/50" />
            <span className="h-3 w-3 rounded-full bg-accentg" />
          </span>
          Let&apos;s Connect
        </a>
        <a
          href="#projects"
          className="rounded-full bg-primarytext px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
        >
          View Projects
        </a>
      </m.div>
    </section>
  );
}
