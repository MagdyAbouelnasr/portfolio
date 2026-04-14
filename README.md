# Mohamed Abouelnasr Portfolio

Production-grade personal portfolio built with React, Vite, TypeScript, Tailwind CSS, React Three Fiber, Three.js, and GSAP.

## Concept

The site is built around the idea of `systems, motion, and craft`.

Instead of treating 3D as a separate spectacle, the portfolio uses one lightweight "signal architecture" scene in the hero to represent layered product systems, routed flows, and engineered motion. The rest of the site stays editorial, readable, and fast to skim so the effect supports credibility rather than competing with it.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- GSAP
- React Three Fiber / Three.js
- React Router

## Resume Mapping

The source of truth is the PDF resume in the project root:

- `cv-mohamed-abouelnasr-general-2026-04-14.pdf`

Its contents were extracted and mapped into typed portfolio data in:

- [`src/data/portfolio.ts`](./src/data/portfolio.ts)

That file contains:

- hero copy
- about summary
- grouped capabilities
- work history
- featured projects
- credentials and contact links

Where the resume did not include screenshots, product metrics, or public media, the portfolio intentionally uses architecture-style placeholders and avoids inventing unsupported claims.

## Project Structure

```text
projects/      static HTML entrypoints for direct case-study URLs and route-specific metadata
src/
  components/   reusable UI pieces
  data/         typed resume and portfolio content
  hooks/        reduced motion, scroll reveal, active section helpers
  layouts/      shared app shell
  pages/        home and case study pages
  scenes/       React Three Fiber hero scene
  sections/     page sections
  utils/        small helpers
```

## Local Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Hosting

Best default host for this project: Netlify.

Why:

- the site is static
- case studies already build as separate HTML entrypoints
- the app still uses `BrowserRouter` for in-app navigation
- Netlify and Vercel both make rewrite handling easier than GitHub Pages for this setup

Included deployment readiness:

- Netlify redirect fallback: `public/_redirects`
- Vercel rewrite fallback: `vercel.json`
- GitHub Pages workflow: `.github/workflows/deploy.yml`
- Automatic GitHub Pages base-path handling in `vite.config.ts`

### Netlify

1. Put this folder in a GitHub repository.
2. Push it to GitHub.
3. Import the repo in Netlify.
4. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel

1. Import the repo in Vercel.
2. Framework preset should detect as Vite.
3. The included `vercel.json` handles SPA fallback routing.

### GitHub Pages

GitHub Pages is viable, but less forgiving for this app than Netlify or Vercel.

1. Put this folder in a GitHub repository.
2. Push the default branch as `main`.
3. In GitHub, open `Settings -> Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push again or run the `Deploy portfolio to GitHub Pages` workflow manually.

The current blocker from this environment is simple: this folder is not in a git repository yet, there is no remote configured, and GitHub CLI is not installed here, so I can prepare deployment but I cannot actually publish it from this workspace yet.

## Editing Content

The main content file is:

- [`src/data/portfolio.ts`](./src/data/portfolio.ts)

Update that file to:

- replace copy
- add or remove projects
- revise contact details
- adjust capabilities or experience entries

## Routing Notes

The portfolio includes dedicated HTML entrypoints for:

- `/`
- `/projects/tagdeer-platform/`
- `/projects/tahkeem-case-lifecycle/`
- `/projects/ngx-hyperpay/`

That keeps direct case-study links working on static hosting and gives each project page the correct title and description on first load.

## Design Notes

- One 3D idea only: the hero carries the signature spatial effect.
- Motion is layered: micro-interactions, section reveals, and a few stronger transitions.
- Reduced-motion users receive a static fallback instead of the animated WebGL scene.
- The layout is optimized to scan quickly on desktop while keeping mobile readable and premium.

## Post-Render Refinement

After the first build, the design was tuned around these checks:

- make the first screen readable before it is flashy
- keep selected work outcome-first and easy to enter
- add mobile section navigation so the site stays easy to skim on smaller screens
- add anchor offsets and a skip link so sticky navigation does not hide section headings
- add static case-study entry pages so direct links and route-level metadata work better in production
- avoid generic timeline treatment in experience
- keep credentials and contact high-trust and low-friction
- ensure the portfolio still feels strong if animation is toned down
