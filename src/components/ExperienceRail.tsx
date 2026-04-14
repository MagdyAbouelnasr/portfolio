import type { ExperienceEntry } from '@/data/portfolio'

type ExperienceRailProps = {
  entry: ExperienceEntry
}

export function ExperienceRail({ entry }: ExperienceRailProps) {
  return (
    <article
      data-reveal
      className="grid gap-5 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[220px_1fr]"
    >
      <div>
        <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">{entry.period}</p>
        <h3 className="mt-4 text-2xl font-semibold text-white">{entry.company}</h3>
        <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">{entry.role}</p>
        <p className="mt-4 text-sm leading-7 text-white/80">{entry.context}</p>
      </div>
      <div className="space-y-4">
        {entry.highlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-[1.3rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm leading-7 text-white/84"
          >
            {highlight}
          </div>
        ))}
      </div>
    </article>
  )
}
