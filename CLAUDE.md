# Adhyapak Connect — Website

Next.js 16 (App Router, Cache Components) + React 19 + TypeScript. Tailwind v4,
shadcn/ui on **Base UI** (`base-vega` style). Static marketing site for
adhyapakconnect.in — the Phase 0 go-live of the approved home-page demo.

@AGENTS.md

## Project structure

Mirrors BookYaar-Frontend, adapted to the App Router. Routes in `src/app` stay
thin: they set metadata and render a page component from `src/static-pages`.

```
src/
  app/                    # routes only — layout, page.tsx files, sitemap/robots/manifest, icons, OG image
  static-pages/<page>/    # marketing/static pages (home, about, pricing, tutors, contact, legal, grievance, not-found)
    <page>.tsx            # the page component
    components/           # sections used only by that page
    data.ts               # list-shaped copy for that page
  components/
    ui/                   # shadcn components (base-vega). Registry is the source; keep edits minimal
    common/               # shared building blocks: Section, Container, Heading, Eyebrow, BrandLogo, JsonLd, ReviewCheck, WhatsAppIcon
    marketing/            # site chrome: header, mobile menu, footer, WhatsApp button, analytics,
                          # plus page chrome shared by pages: PageHero, CredStrip, FinalCta
  config/site.ts          # brand, contacts, links, areas, env-driven switches — single source of truth
  lib/                    # cn(), analytics (track)
  assets/fonts/           # self-hosted brand fonts (next/font/local)
```

When the full product (FE + BE + Admin) lands, feature code goes in
`src/modules/<module>/{components,pages,hooks,services,types}` exactly as in
BookYaar-Frontend. Nothing reaches across modules; shared code is promoted to
`src/components`, `src/hooks` or `src/lib`.

### Rules

- **Copy is approved and frozen.** Page wording is word for word from the
  client's demo in `Web-Demo/` (`adhyapak-connect-demo.html` for home,
  `about.html`, `tutors.html`, `contact.html`). Pricing follows the client's
  revenue-model slide (`static-pages/pricing/data.ts`). Change layout and styling freely; change words
  only when the client asks.
- **Contacts and links come from `@/config/site`**, never hard-coded. Parent and
  tutor leads stay separate: parent number for Call / WhatsApp / floating button,
  tutor number (72660 19278) only on "Apply on WhatsApp".
- **Every "Book Free Demo" renders through `<DemoLink>`** so its destination is
  one env var (`NEXT_PUBLIC_DEMO_FORM_URL`) and the click is tracked.
- **Conversions:** add `data-track={TRACK_EVENTS.x}` to a link/button; the
  delegated listener in `components/marketing/analytics.tsx` sends it to GA4
  and the Meta Pixel. No onClick needed in server components.
- **Server components by default.** Client code today: mobile menu (lazy-loaded
  sheet), tutor carousel buttons, analytics, and the Motion wrappers in
  `components/motion/reveal.tsx`. Keep it that way.
- **Import via `@/`**, not long relative paths, once you leave a page's folder.
- **Env vars** are `NEXT_PUBLIC_`-prefixed (see `.env.example`). `.env*` is
  gitignored; `.env.example` is committed.

## Design system

Colours from the brand pack (`AC_brand-pack-v2.0/README.txt`), mapped as
tokens in `src/app/globals.css`. Sizing uses Tailwind's stock scales.

- Fonts: `font-serif` Fraunces (headlines), `font-sans` Hanken Grotesk (body),
  `font-deva` Noto Serif Devanagari (the अ mark). All self-hosted.
- Light grounds: `ivory`, `khadi`, text `ink`/`stone`. Dark grounds: `night`,
  text `paper`/`mist`. Accent `saffron`; **`amber-text`** is saffron for text on
  light grounds (raw saffron on ivory is ~2:1 and fails AA).
- Ambient: `.mesh` (drifting gradient), `.text-gold-move` (via `<Accent>`),
  `.band-gold-move`.
- Entrances: above the fold uses CSS (`animate-rise` cascade with
  `[animation-delay:80ms]` steps, `animate-arch-in`, `animate-float`) so the
  LCP isn't held back by JS. Below the fold uses Motion: wrap blocks in
  `<Reveal>`, lists in `<Stagger>` + `<StaggerItem>`, numbers in `<CountUp>`.
  One curve everywhere: `--ease-out` (`cubic-bezier(0.23, 1, 0.32, 1)`).
- Everything respects `prefers-reduced-motion` (CSS media rule +
  `MotionConfig reducedMotion="user"`, which keeps the fade, drops the rise).
- Contrast checked ≥ 4.5:1 for every text/ground pair in use. Re-check after
  changing a colour token.

## SEO

- Metadata + Open Graph/Twitter in `app/layout.tsx`; per-page overrides in each route.
- JSON-LD: `EducationalOrganization`/`LocalBusiness` + `WebSite` (layout),
  `Service` (home), `FAQPage` (contact). Placeholder reviews are deliberately **not**
  marked up as `Review`.
- `sitemap.ts`, `robots.ts`, `manifest.ts`, `icon.png`, `apple-icon.png`,
  `opengraph-image.png` live in `src/app`.
- Legal + grievance pages are `noindex` until their final text arrives.
- `.com` serves the same site as `.in` (canonicals point to `.in`); the
  `www.adhyapakconnect.in` → apex redirect is in `next.config.ts`.

## Commands

```
npm run dev     # local dev
npm run build   # production build (also type-checks)
npm run lint    # eslint
```
