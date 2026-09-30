"use client";

import { useMemo } from "react";
import { m } from "framer-motion";
import { CalendarClock, Layers, MapPin, Handshake } from "lucide-react";
import { profile } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import { fadeUp, inView, stagger } from "./motion";

const cards = [
  { ...profile.highlights[0], icon: CalendarClock, color: "text-accentv" },
  { ...profile.highlights[1], icon: Layers, color: "text-accentb" },
  { ...profile.highlights[2], icon: MapPin, color: "text-accentp" },
  { title: profile.availability[0], sub: profile.availability[1], icon: Handshake, color: "text-accenty" },
];

// Deterministic pseudo-random so server and client render the same dots.
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function DotField({ seed }: { seed: number }) {
  const dots = useMemo(() => {
    const rnd = seeded(seed);
    return Array.from({ length: 32 }, (_, i) => ({
      x: (i % 8) * 12.5 + 5,
      y: Math.floor(i / 8) * 24 + 10,
      delay: rnd() * 3,
      bright: rnd() > 0.82,
    }));
  }, [seed]);

  return (
    <div aria-hidden className="relative h-32 w-full sm:h-40">
      {dots.map((d, i) => (
        <span
          key={i}
          className={`absolute h-[3px] w-[3px] rounded-full ${d.bright ? "animate-twinkle bg-accentv" : "bg-bline"}`}
          style={{ left: `${d.x}%`, top: `${d.y}%`, animationDelay: `${d.delay}s` }}
        />
      ))}
    </div>
  );
}

export default function WhatIDo() {
  return (
    <section aria-labelledby="glance-title" className="mx-auto w-11/12 max-w-7xl py-16">
      <SectionTitle id="glance-title">AT A GLANCE</SectionTitle>
      <m.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {cards.map((g, i) => {
          const Icon = g.icon;
          return (
            <m.article
              key={g.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group h-full rounded-xl border border-bline bg-[#141614] p-5 transition-colors hover:border-accentv/60"
            >
              <DotField seed={i + 3} />
              <Icon
                className={`mb-3 transition-transform duration-300 group-hover:scale-110 ${g.color}`}
                size={30}
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className={`mb-3 text-lg font-medium ${g.color}`}>{g.title}</h3>
              <p className="text-sm leading-relaxed text-primarytext/85">{g.sub}</p>
            </m.article>
          );
        })}
      </m.div>
    </section>
  );
}
