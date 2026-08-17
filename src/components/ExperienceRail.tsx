import type { ExperienceEntry } from '@/data/portfolio'

type ExperienceRailProps = {
  entry: ExperienceEntry
}

export function ExperienceRail({ entry }: ExperienceRailProps) {
  return (
    <details
      data-reveal
      className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] open:bg-white/[0.05]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 marker:hidden sm:p-6">
        <div className="grid flex-1 gap-2 lg:grid-cols-[190px_1fr] lg:items-center">
          <p className="text-xs tracking-[0.18em] text-[color:var(--accent)] uppercase">{entry.period}</p>
          <div><h3 className="text-xl font-semibold text-white">{entry.company}</h3><p className="mt-1 text-sm text-[color:var(--text-muted)]">{entry.role}</p></div>
        </div>
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-xl text-[color:var(--accent)] transition group-open:rotate-45">+</span>
      </summary>
      <div className="grid gap-5 border-t border-white/10 p-5 sm:p-6 lg:grid-cols-[190px_1fr]">
        <p className="text-sm leading-7 text-white/80">{entry.context}</p>
        <div className="space-y-3">
        {entry.highlights.map((highlight) => (
          <div
            key={highlight}
            className="border-l border-[color:var(--accent)]/40 pl-4 text-sm leading-7 text-white/84"
          >
            {highlight}
          </div>
        ))}
        </div>
      </div>
    </details>
  )
}
