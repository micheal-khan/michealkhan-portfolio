# Micheal Khan — Portfolio

Next.js 15 (App Router) · Tailwind CSS 3 · Framer Motion · TypeScript

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

Almost everything lives in **`src/data/portfolio.ts`**:

| What | Where in `portfolio.ts` |
| --- | --- |
| Name, email, phone, links, bio | `profile` |
| Skill groups (incl. Shopify) | `skillGroups` |
| Jobs | `experiences` (add `stat` for a big number on the row) |
| Shopify numbers | `shopify.stats`: update as your store count grows |
| Projects | `projects` (first 4 show, rest behind "Load More") |
| Project filter categories | `projectCategories`, plus `categories: [...]` on each project |
| Scrolling logo strip | `techStack` |
| Live domain (used for SEO) | `siteUrl` |

- **Images:** `public/images` (headshot) and `public/projects` (screenshots).
- **Résumé:** `public/micheal-khan-resume.pdf`. Replace the file and keep the name.
- **Logos:** `public/tech/*.svg`. To add one, drop in an SVG and reference its file name in `techStack`.
  Good sources: https://devicon.dev and https://simpleicons.org.

## Project filters

- **Categories:** chips show a live count, and a project can sit in several categories.
  To add a category, add `{ id, label }` to `projectCategories`, then put that `id` in the relevant projects' `categories`.
- **Search:** matches name, description and tech tags. Every word typed must match, and Esc clears it.
- **Shareable links:** the current view is kept in the URL, e.g. `/?category=web-apps#projects` or `/?q=flutter#projects`.
  Handy for sending a client only the relevant work.
- **Load More** applies only to the unfiltered list. Filtered results always show in full.

## Animations

- `LazyMotion` + `m.*` components (see `src/components/MotionProvider.tsx`) keep Framer Motion small.
- Shared easing and variants are in `src/components/motion.ts`. Use `<Reveal>` to fade any block in on scroll.
- Visitors with "reduce motion" turned on in their OS get no transform animations.
- **Gotcha:** for "slide up from behind a mask" effects, put `whileInView` on the *visible parent*
  and animate children with variants. An element translated out of its clipping box never
  counts as "in view", so it would stay hidden forever.

## SEO (already set up)

- Title, description, keywords, canonical, Open Graph and Twitter tags: `src/app/layout.tsx`
- JSON-LD structured data (Person, WebSite, ProfilePage, project list): `src/app/layout.tsx`
- `sitemap.xml`, `robots.txt`, web manifest: `src/app/sitemap.ts`, `robots.ts`, `manifest.ts`
- Auto-generated share image and favicons: `src/app/opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`
- One `<h1>`, a heading per section, alt text, skip link, visible keyboard focus

Lighthouse (production build, local): **Desktop 100 / 100 / 100 / 100 · Mobile 96–98 / 100 / 100 / 100**
(Performance / Accessibility / Best Practices / SEO).

### After deploying

1. Set `siteUrl` in `portfolio.ts` if the domain isn't `https://michealkhan.com`.
2. Add the site to [Google Search Console](https://search.google.com/search-console) and submit `/sitemap.xml`.
3. Check the share card with LinkedIn's [Post Inspector](https://www.linkedin.com/post-inspector/).
4. Link the site from your GitHub and LinkedIn profiles. Those backlinks help ranking.

Deploys to Vercel with no configuration.
