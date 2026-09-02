# Resume and Portfolio Rules

## Source hierarchy

1. `career/EXPERIENCE_FACTS.md` is the authority for publishable claims.
2. This file defines how verified facts should be presented.
3. `ROADMAP.md` is future-only planning and cannot support a current claim.
4. `resume-source.html`, generated PDFs, `src/data/portfolio.ts`, and SEO copy
   are derived publishing surfaces and must remain consistent.

## Accuracy

The resume and portfolio must describe current demonstrated ability. Never
turn a planned skill, intended certification, or learning goal into claimed
experience.

Never invent or infer unsupported:

- percentages or performance improvements
- user, traffic, revenue, adoption, or project counts
- dates, team sizes, responsibilities, or ownership scope
- technologies, certifications, or proficiency levels
- reliability, quality, or business outcomes

If a metric would materially strengthen a bullet but is unknown, use
`[METRIC NEEDED]` only in an internal working draft. Remove the placeholder and
omit the metric before publishing unless it is verified in the facts file.

## Positioning

- Target Senior Frontend Engineer and Frontend Software Engineer roles.
- Keep Angular, TypeScript, RxJS, and NgRx as the strongest signals.
- Preserve verified official employment titles.
- Mention backend only as verified .NET API exposure; do not imply backend
  specialization or senior full-stack ownership.
- Do not publish roadmap technologies or unearned certifications as current
  skills, development-focus sections, or progress badges.

## Resume requirements

- Maximum two A4 pages.
- ATS-friendly structure and selectable text.
- Clear fit for international and remote roles.
- Functional email, LinkedIn, GitHub, portfolio, npm, and project links when
  included.
- No clipping, overlap, excessive compression, or decorative elements that
  weaken scanning.

## Writing guidance

Avoid:

- passionate
- hardworking
- quick learner
- responsible for
- technology keyword stuffing
- absolute claims that cannot be demonstrated

Prefer verified examples of:

- ownership scope
- product scale
- architecture
- difficult workflows
- measurable impact
- engineering decisions

## Publication checklist

1. Verify every changed claim against `career/EXPERIENCE_FACTS.md`.
2. Update both the editable resume and portfolio data where the claim appears.
3. Update affected page titles, descriptions, and case-study metadata.
4. Regenerate both resume PDFs from `resume-source.html`.
5. Confirm the PDFs are identical, selectable, linked, readable, and no more
   than two pages.
6. Run lint, typecheck, build, stale-claim scans, and a final diff review.
