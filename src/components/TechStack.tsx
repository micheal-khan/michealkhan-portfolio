/* eslint-disable @next/next/no-img-element */
import { techStack, skillsIntro } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const half = Math.ceil(techStack.length / 2);
const rows = [techStack.slice(0, half), techStack.slice(half)];

// Pure-CSS marquee (GPU transform, zero JS). Pauses on hover and for reduced-motion users.
function Row({ items, reverse }: { items: typeof techStack; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-mask group overflow-hidden">
      <ul
        className="flex w-max animate-marquee gap-4 py-3 group-hover:[animation-play-state:paused] sm:gap-6"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((t, i) => (
          <li key={`${t.icon}-${i}`} aria-hidden={i >= items.length ? true : undefined}>
            <a
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={i >= items.length ? -1 : undefined}
              className="flex w-20 flex-col items-center gap-2 sm:w-24"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-bline bg-[#141614] transition duration-300 hover:-translate-y-1 hover:border-accentv hover:shadow-[0_8px_30px_-8px_rgba(163,116,255,0.45)] sm:h-20 sm:w-20">
                <img
                  src={`/tech/${t.icon}.svg`}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-8 sm:h-10 sm:w-10"
                />
              </span>
              <span className="text-center text-[11px] leading-tight text-primarytext/70">{t.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechStack() {
  return (
    <section aria-labelledby="stack-title" className="py-16">
      <SectionTitle id="stack-title">MY TECH STACK</SectionTitle>
      <Reveal>
        <p className="mx-auto -mt-4 mb-10 max-w-2xl px-4 text-center text-primarytext/80">{skillsIntro}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <Row items={rows[0]} />
        <Row items={rows[1]} reverse />
      </Reveal>
    </section>
  );
}
