# Mohamed Abouelnasr Portfolio

Personal engineering portfolio built with React, Vite, TypeScript, Tailwind CSS, and React Router.

## Concept

The site is built around the idea of `systems, motion, and craft`.

The visual layer stays lightweight and CSS/canvas-driven (starfield, cursor glow, motion accents) so the effect supports credibility rather than competing with it. The rest of the site stays editorial, readable, and fast to skim.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- React Router

## Professional Content Sources

Verified professional claims are maintained in:

- [`career/EXPERIENCE_FACTS.md`](./career/EXPERIENCE_FACTS.md)

Content policy and future-only planning are maintained separately in:

- [`RESUME_RULES.md`](./RESUME_RULES.md)
- [`ROADMAP.md`](./ROADMAP.md)

The editable resume source and its generated PDF outputs are:

- [`resume-source.html`](./resume-source.html)
- `cv-mohamed-abouelnasr.pdf`
- `public/mohamed-abouelnasr-resume.pdf`

Verified professional content is published through typed portfolio data in:

- [`src/data/portfolio.ts`](./src/data/portfolio.ts)

That file contains:

- hero copy
- about summary
- grouped capabilities
- work history
- featured projects
- credentials and contact links

Where the facts file does not verify screenshots, product metrics, or public media, the portfolio intentionally uses architecture-style placeholders and avoids inventing unsupported claims.

## Project Structure

```text
projects/      static HTML entrypoints for direct case-study URLs and route-specific metadata
src/
  components/   reusable UI pieces
  data/         typed resume and portfolio content
  hooks/        reduced motion, scroll reveal, active section helpers
  layouts/      shared app shell
  pages/        home and case study pages
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

The project is configured for Vercel and GitHub Pages. Both support this site
well because:

- the site is static
- case studies already build as separate HTML entrypoints
- the app still uses `BrowserRouter` for in-app navigation
- Vercel can apply the included rewrite fallback, while the GitHub Pages build
  resolves the repository base path automatically

Included deployment readiness:

- Vercel rewrite fallback: `vercel.json`
- GitHub Pages workflow: `.github/workflows/deploy.yml`
- Automatic GitHub Pages base-path handling in `vite.config.ts`
- `public/_redirects` (Netlify-style SPA fallback, also read by Cloudflare Pages)

### Vercel

1. Import the repo in Vercel.
2. Framework preset should detect as Vite.
3. The included `vercel.json` handles SPA fallback routing.

The current Vercel project and published address use the spelling
`portifolio`. Renaming the Vercel project or adding a correctly spelled domain
is an external dashboard action. Update the URLs in `src/data/portfolio.ts` and
`resume-source.html` only after the new address is active.

### GitHub Pages

GitHub Pages is viable, but less forgiving for this app than Vercel.

1. Put this folder in a GitHub repository.
2. Push the default branch as `main`.
3. In GitHub, open `Settings -> Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push again or run the `Deploy portfolio to GitHub Pages` workflow manually.

## Editing Content

The main content file is:

- [`src/data/portfolio.ts`](./src/data/portfolio.ts)

Before changing professional content, follow [`AGENTS.md`](./AGENTS.md) and
verify the claim in
[`career/EXPERIENCE_FACTS.md`](./career/EXPERIENCE_FACTS.md).

Update that file to:

- replace copy
- add or remove projects
- revise contact details
- adjust capabilities or experience entries

## Routing Notes

The portfolio includes dedicated HTML entrypoints for:

- `/`
- `/projects/commerce-platform/`
- `/projects/workflow-operations-platform/`
- `/projects/ngx-hyperpay/`

That keeps direct case-study links working on static hosting and gives each project page the correct title and description on first load.

## Design Notes

- Motion stays lightweight: CSS/canvas micro-interactions, no heavy animation or 3D runtime.
- Reduced-motion users get the static layout automatically via `prefers-reduced-motion`.
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
