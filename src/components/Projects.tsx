"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { projectCategories, projects, projectsIntro, type Project, type ProjectCategory } from "../data/portfolio";
import Reveal from "./Reveal";
import { EASE } from "./motion";

const INITIAL = 4;
type Filter = "all" | ProjectCategory;

const labelOf = Object.fromEntries(projectCategories.map((c) => [c.id, c.label])) as Record<ProjectCategory, string>;

// Every word typed must appear in the project's name, description or tags.
// (Categories are left out on purpose — the chips handle those.)
function matches(p: Project, query: string) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return true;
  const haystack = [p.name, p.description, ...p.tags].join(" ").toLowerCase();
  return words.every((w) => haystack.includes(w));
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Read ?category=…&q=… on load so filtered views can be shared as links.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && projectCategories.some((c) => c.id === cat)) setFilter(cat as ProjectCategory);
    const q = params.get("q");
    if (q) setQuery(q);
  }, []);

  // Keep the URL in sync (replaceState: no history spam, no scroll jump, hash preserved).
  useEffect(() => {
    const url = new URL(window.location.href);
    if (filter === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", filter);
    if (query.trim()) url.searchParams.set("q", query.trim());
    else url.searchParams.delete("q");
    if (url.href !== window.location.href) window.history.replaceState(null, "", url);
  }, [filter, query]);

  // Counts reflect the current search, so chips show what you'd get by clicking them.
  const counts = useMemo(() => {
    const searched = projects.filter((p) => matches(p, query));
    const c: Record<string, number> = { all: searched.length };
    for (const cat of projectCategories) c[cat.id] = searched.filter((p) => p.categories.includes(cat.id)).length;
    return c;
  }, [query]);

  const filtered = useMemo(
    () => projects.filter((p) => (filter === "all" || p.categories.includes(filter)) && matches(p, query)),
    [filter, query],
  );

  const isFiltering = filter !== "all" || query.trim() !== "";
  // "Load More" only applies to the unfiltered list; filtered results are always shown in full.
  const visible = isFiltering || showAll ? filtered : filtered.slice(0, INITIAL);

  const clear = () => {
    setFilter("all");
    setQuery("");
    searchRef.current?.focus();
  };

  // Floating preview that trails the cursor (desktop only; pointer devices).
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 250, damping: 28, mass: 0.5 });
  const onMove = (e: React.MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };
  const preview = hovered ? projects.find((p) => p.name === hovered) : null;

  const chips: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, ...projectCategories];

  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto w-11/12 max-w-7xl scroll-mt-24 py-16">
      <Reveal>
        <h2 id="projects-title" className="mb-3 text-2xl font-medium text-accentc sm:text-3xl">
          Featured Projects
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-primarytext/70">{projectsIntro}</p>
      </Reveal>

      {/* Toolbar: category chips + search */}
      <Reveal delay={0.05}>
        <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="-mx-[4vw] flex gap-2 overflow-x-auto px-[4vw] pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {chips.map((c) => {
              const active = filter === c.id;
              const count = counts[c.id] ?? 0;
              return (
                <m.button
                  key={c.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(c.id)}
                  disabled={!active && count === 0}
                  whileTap={{ scale: 0.95 }}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-35 ${
                    active
                      ? "border-primarytext bg-primarytext text-bg"
                      : "border-bline text-primarytext hover:border-accentv hover:text-accentv"
                  }`}
                >
                  {c.label}
                  <span
                    className={`min-w-[1.25rem] rounded-full px-1.5 text-center text-[11px] tabular-nums ${
                      active ? "bg-bg/15" : "bg-bline/70"
                    }`}
                  >
                    {count}
                  </span>
                </m.button>
              );
            })}
          </div>

          <label className="relative block w-full shrink-0 lg:w-72">
            <span className="sr-only">Search projects</span>
            <Search size={16} aria-hidden className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primarytext/50" />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && setQuery("")}
              placeholder="Search projects, tech…"
              className="w-full rounded-full border border-bline bg-transparent py-2.5 pl-10 pr-10 text-sm text-primarytext placeholder:text-primarytext/40 transition-colors focus:border-accentv focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {/* Wrapper does the centring, so Framer's scale transform can't override it */}
            <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <AnimatePresence>
                {query && (
                  <m.button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => {
                      setQuery("");
                      searchRef.current?.focus();
                    }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full text-primarytext/60 hover:bg-bline hover:text-primarytext"
                  >
                    <X size={14} />
                  </m.button>
                )}
              </AnimatePresence>
            </span>
          </label>
        </div>
      </Reveal>

      {/* Result summary (announced to screen readers) */}
      <div className="mb-2 flex min-h-[2rem] items-center justify-between gap-3 text-xs text-primarytext/60">
        <p aria-live="polite">
          {isFiltering ? (
            <>
              Showing <span className="text-primarytext">{filtered.length}</span> of {projects.length}
              {filter !== "all" && (
                <>
                  {" "}
                  in <span className="text-accentc">{labelOf[filter]}</span>
                </>
              )}
              {query.trim() && (
                <>
                  {" "}
                  matching <span className="text-accenty">“{query.trim()}”</span>
                </>
              )}
            </>
          ) : (
            <>{projects.length} projects</>
          )}
        </p>
        <AnimatePresence>
          {isFiltering && (
            <m.button
              type="button"
              onClick={clear}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="flex items-center gap-1 rounded-full px-2 py-1 text-primarytext/70 hover:text-accentv"
            >
              <X size={12} aria-hidden /> Clear filters
            </m.button>
          )}
        </AnimatePresence>
      </div>

      <ul className="border-t border-bline" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
        <AnimatePresence initial={false}>
          {visible.map((p) => (
            <m.li
              key={p.name}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="overflow-hidden border-b border-bline"
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(p.name)}
                onFocus={() => setHovered(null)}
                className="group relative flex flex-col gap-4 px-1 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10 lg:px-16"
              >
                {/* Inline thumbnail on touch / small screens */}
                {p.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-bline md:hidden">
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      fill
                      sizes="(max-width: 768px) 92vw, 1px"
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="flex items-center gap-2 text-2xl font-medium transition-colors group-hover:text-accentb sm:text-3xl lg:text-4xl">
                    <span className="transition-transform duration-300 group-hover:translate-x-2">{p.name}</span>
                    <ArrowUpRight
                      aria-hidden
                      className="shrink-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-primarytext/70">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Categories">
                    {p.categories.map((c) => (
                      <li
                        key={c}
                        className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide transition-colors ${
                          filter === c ? "border-accentc/60 text-accentc" : "border-bline text-primarytext/55"
                        }`}
                      >
                        {labelOf[c]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0 sm:max-w-[16rem] sm:text-right">
                  <p className="text-lg sm:text-xl">{p.tags[0]}</p>
                  <p className="text-xs text-primarytext/70">{p.tags.slice(1).join(", ")}</p>
                </div>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </m.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* Empty state */}
      <AnimatePresence>
        {filtered.length === 0 && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 py-16 text-center"
          >
            <p className="text-lg">No projects match that.</p>
            <p className="text-sm text-primarytext/60">Try another category or a different search.</p>
            <button
              type="button"
              onClick={clear}
              className="mt-2 rounded-full border border-bline px-5 py-2 text-sm transition-colors hover:border-accentv hover:text-accentv"
            >
              Clear filters
            </button>
          </m.div>
        )}
      </AnimatePresence>

      {/* Cursor-following preview (hidden on touch screens) */}
      <m.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block">
        <AnimatePresence>
          {preview?.image && (
            <m.div
              key={preview.name}
              initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7, rotate: 4 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative -ml-[160px] -mt-[100px] h-[200px] w-[320px] overflow-hidden rounded-xl border border-bline shadow-2xl shadow-black/60"
            >
              <Image src={preview.image} alt="" fill sizes="320px" className="object-cover object-top" />
            </m.div>
          )}
        </AnimatePresence>
      </m.div>

      {!isFiltering && projects.length > INITIAL && (
        <div className="mt-10 flex justify-center">
          <m.button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full border border-bline px-8 py-3 text-lg transition-colors hover:border-accentv hover:bg-accentv hover:text-bg"
          >
            {showAll ? "Show Less" : `Load More (${projects.length - INITIAL})`}
          </m.button>
        </div>
      )}
    </section>
  );
}
