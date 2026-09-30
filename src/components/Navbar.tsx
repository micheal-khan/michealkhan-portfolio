"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "framer-motion";
import { Home, Briefcase, FolderGit2, UserRound, Mail, Menu, X, ShoppingBag } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#shopify", label: "Shopify", icon: ShoppingBag },
  { href: "#projects", label: "My Projects", icon: FolderGit2 },
  { href: "#about", label: "About Me", icon: UserRound },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide on scroll down, reveal on scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200 && !open);
  });

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <m.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-bline/50 bg-bg/70 backdrop-blur-md"
    >
      <nav aria-label="Main" className="mx-3 flex h-16 items-center justify-between lg:mx-4 lg:h-20">
        <a
          href="#home"
          className="flex items-center gap-2 rounded-full border border-bline px-4 py-2 text-sm font-medium transition-colors hover:border-accentv sm:text-base"
        >
          <span className="h-3 w-3 rounded-full bg-primarytext sm:h-3.5 sm:w-3.5" />
          {profile.handle}
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-bline px-2 py-1.5 lg:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={active === href ? "true" : undefined}
                className={`relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors hover:text-accentb ${
                  active === href ? "bg-bline/60 text-accentb" : "text-primarytext"
                }`}
              >
                <Icon size={15} strokeWidth={1.75} aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full border border-bline px-4 py-2 text-sm transition-colors hover:border-accentv hover:text-accentv sm:flex"
          >
            <Mail size={15} strokeWidth={1.75} aria-hidden />
            Contact Me
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bline lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </m.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-3 mb-3 flex origin-top flex-col gap-1 rounded-2xl border border-bline bg-bg p-2 lg:hidden"
          >
            {[...links, { href: "#contact", label: "Contact Me", icon: Mail }].map(({ href, label, icon: Icon }, i) => (
              <m.li
                key={href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 * i }}
              >
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-base hover:bg-bline/50 hover:text-accentb ${
                    active === href ? "text-accentb" : ""
                  }`}
                >
                  <Icon size={17} strokeWidth={1.75} aria-hidden />
                  {label}
                </a>
              </m.li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </m.header>
  );
}
