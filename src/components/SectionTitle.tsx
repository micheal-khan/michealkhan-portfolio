"use client";

import { m } from "framer-motion";
import { EASE, inView } from "./motion";

// Large heading with an offset outline copy behind it; slides up from a mask.
export default function SectionTitle({
  children,
  id,
  color = "text-accentv",
}: {
  children: string;
  id?: string;
  color?: string;
}) {
  return (
    <div className="mb-10 flex justify-center">
      {/* The visible h2 is observed; the clipped inner span follows via variants
          (a span translated out of its mask never intersects the viewport on its own). */}
      <m.h2
        id={id}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className={`relative overflow-hidden pb-1 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl ${color}`}
      >
        <m.span
          className="relative block"
          variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.8, ease: EASE } } }}
        >
          <span
            aria-hidden
            className="absolute inset-0 translate-x-[3px] translate-y-[3px] text-transparent"
            style={{ WebkitTextStroke: "1px currentColor", opacity: 0.35 }}
          >
            {children}
          </span>
          <span className="relative">{children}</span>
        </m.span>
      </m.h2>
    </div>
  );
}
