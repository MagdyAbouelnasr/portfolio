# Portfolio / Career Repository Instructions

## Content authority

Before editing resume or professional portfolio content, read these files in
order:

1. `career/EXPERIENCE_FACTS.md`
2. `ROADMAP.md`
3. `RESUME_RULES.md`

`career/EXPERIENCE_FACTS.md` is the authority for professional experience,
skills, metrics, education, and public-work claims.

`ROADMAP.md` contains future development plans. Never use a roadmap item as
evidence that the skill, credential, or responsibility is currently held.

`RESUME_RULES.md` defines positioning, writing, synchronization, and
publication requirements.

## Claim rules

- Check `career/EXPERIENCE_FACTS.md` before adding or strengthening a
  professional claim.
- Do not invent missing metrics, technologies, dates, team sizes,
  responsibilities, or outcomes.
- Flag unsupported claims instead of publishing them.
- Use only metrics explicitly approved in the facts file.
- Preserve Angular, TypeScript, RxJS, and NgRx as the strongest demonstrated
  specialization.
- Keep official employment titles accurate. A clarifying frontend-focus label
  may be used only when the facts file explicitly permits it.
- Keep the portfolio, editable resume, generated PDFs, and SEO metadata
  consistent.

## Modification workflow

Before modifying files:

1. Inspect the relevant source files and current git status.
2. State the proposed changes.
3. Make only the scoped changes.
4. Regenerate derived resume PDFs when `resume-source.html` changes.
5. Run applicable lint, typecheck, build, and artifact checks.
6. Review the final git diff and scan for stale or unsupported claims.
7. Report exactly what changed and identify any external manual action.

Do not modify unrelated files.
