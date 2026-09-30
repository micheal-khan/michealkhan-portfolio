"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, m, useInView } from "framer-motion";
import { shopify } from "../data/portfolio";
import Reveal from "./Reveal";
import { fadeUp, inView, stagger } from "./motion";

// Counts from 0 to `to` once, when scrolled into view. Writes to the DOM directly (no re-renders).
function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!seen || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (node.textContent = `${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [seen, to, suffix]);

  // Server-rendered with the final value so crawlers and no-JS visitors see the real number.
  return (
    <span ref={ref} className="tabular-nums">
      {to}
      {suffix}
    </span>
  );
}

export default function Shopify() {
  return (
    <section id="shopify" aria-labelledby="shopify-title" className="mx-auto w-11/12 max-w-7xl scroll-mt-24 py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-bline bg-[#121412] p-6 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#95bf47]/15 blur-[90px]"
          />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <m.div
                initial={{ rotate: -20, scale: 0.6, opacity: 0 }}
                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                viewport={inView}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#95bf47]/10 ring-1 ring-[#95bf47]/30"
              >
                <Image src="/tech/shopify.svg" alt="Shopify" width={30} height={30} unoptimized />
              </m.div>
              <div>
                <h2 id="shopify-title" className="text-2xl font-medium text-[#95bf47] sm:text-3xl">
                  Shopify Collaborations
                </h2>
                <p className="mt-1 max-w-xl text-sm text-primarytext/70">{shopify.intro}</p>
              </div>
            </div>
          </div>

          <m.dl
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="relative mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          >
            {shopify.stats.map((s) => (
              <m.div key={s.label} variants={fadeUp} className="flex flex-col-reverse rounded-xl border border-bline bg-bg/60 p-4 sm:p-5">
                <dt className="mt-2 text-sm text-primarytext/70">{s.label}</dt>
                <dd className="text-4xl font-medium tracking-tight text-primarytext sm:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </dd>
              </m.div>
            ))}
          </m.dl>
        </div>
      </Reveal>
    </section>
  );
}
