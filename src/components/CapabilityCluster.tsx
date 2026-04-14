type CapabilityClusterProps = {
  title: string
  summary: string
  items: string[]
}

export function CapabilityCluster({ title, summary, items }: CapabilityClusterProps) {
  return (
    <article
      data-reveal
      className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs tracking-[0.16em] text-[color:var(--text-dim)] uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}
