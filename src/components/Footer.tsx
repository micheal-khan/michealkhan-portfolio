"use client";

import { m } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio";
import { EASE, fadeUp, inView, stagger } from "./motion";

function Github({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function Linkedin({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const explore = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#shopify", label: "Shopify" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About Me" },
];

const social = [
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin, bg: "bg-[#0a66c2]" },
  { href: profile.github, label: "GitHub", icon: Github, bg: "bg-[#24292f]" },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, bg: "bg-accentp" },
  { href: profile.phoneHref, label: "Phone", icon: Phone, bg: "bg-accentg" },
];

export default function Footer() {
  const letters = profile.handle.split("");

  return (
    <footer id="contact" aria-labelledby="contact-title" className="mx-2 scroll-mt-24 pb-4 sm:mx-4">
      <div className="relative overflow-hidden rounded-xl border border-bline px-6 pb-[26vw] pt-10 sm:px-10 sm:pb-[18vw]">
        <m.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr_1fr]"
        >
          <m.div variants={fadeUp}>
            <h2 id="contact-title" className="text-2xl font-medium leading-snug">
              Let&apos;s Work <span className="text-accentv">Together</span>
            </h2>
            <p className="mt-3 max-w-xs text-sm text-primarytext/70">{profile.cta.body}</p>
          </m.div>

          <m.nav variants={fadeUp} aria-label="Footer">
            <h3 className="mb-4 font-medium text-accento">Explore</h3>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-block transition hover:translate-x-1 hover:text-accentb">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.nav>

          <m.div variants={fadeUp}>
            <h3 className="mb-4 font-medium text-accentc">Get in Touch</h3>
            <ul className="grid grid-cols-2 gap-3">
              {social.map(({ href, label, icon: Icon, bg }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer me" : undefined}
                    className="group flex items-center gap-2 py-1 transition-colors hover:text-accentb"
                  >
                    <span className={`flex h-7 w-7 items-center justify-center rounded-md text-white transition-transform group-hover:scale-110 ${bg}`}>
                      <Icon size={14} />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <address className="mt-4 not-italic">
              <a href={`mailto:${profile.email}`} className="block break-all text-sm text-primarytext/70 hover:text-accentb">
                {profile.email}
              </a>
              <a href={profile.phoneHref} className="block text-sm text-primarytext/70 hover:text-accentb">
                {profile.phone}
              </a>
            </address>
          </m.div>

          <m.div variants={fadeUp} className="space-y-6">
            <a href={`mailto:${profile.email}`} className="group flex items-start justify-between gap-3">
              <span>
                <span className="block text-lg font-medium">Let&apos;s Talk</span>
                <span className="text-xs text-primarytext/70">{profile.availability[0]}</span>
              </span>
              <span className="rounded-full border border-bline p-1.5 text-accentg transition group-hover:-rotate-45 group-hover:border-accentg">
                <ArrowRight size={16} aria-hidden />
              </span>
            </a>
            <a href={profile.resume} download className="group flex items-start justify-between gap-3">
              <span>
                <span className="block text-lg font-medium">Resume</span>
                <span className="text-xs text-primarytext/70">Download Resume</span>
              </span>
              <span className="rounded-full border border-bline p-1.5 text-accentg transition group-hover:rotate-90 group-hover:border-accentg">
                <ArrowRight size={16} aria-hidden />
              </span>
            </a>
          </m.div>
        </m.div>

        {/* Giant wordmark: letters rise in one after another */}
        {/* The clipping <p> is observed; letters follow via variants. */}
        <m.p
          aria-hidden
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.04)}
          className="pointer-events-none absolute inset-x-0 -bottom-[0.18em] flex select-none justify-center overflow-hidden whitespace-nowrap text-[15.5vw] font-semibold leading-none tracking-tight text-primarytext"
        >
          {letters.map((ch, i) => (
            <m.span
              key={i}
              variants={{ hidden: { y: "100%" }, show: { y: 0, transition: { duration: 0.8, ease: EASE } } }}
              className="inline-block"
            >
              {ch}
            </m.span>
          ))}
        </m.p>
      </div>

      <div className="flex items-center justify-between px-2 pt-3 text-sm">
        <p>
          {profile.handle} ©{new Date().getFullYear()}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
