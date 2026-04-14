import type { PortfolioProject } from '@/data/portfolio'

type CaseStudyVisualProps = {
  project: PortfolioProject
}

export function CaseStudyVisual({ project }: CaseStudyVisualProps) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(142,227,213,0.18),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)] opacity-30" />
      <div className="relative">
        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div className="rounded-[1.6rem] border border-white/10 bg-[rgba(7,16,21,0.65)] p-5">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">
              System map
            </p>
            <div className="mt-6 space-y-4">
              {project.visualLayers.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-white">{layer.name}</span>
                    <span className="text-[0.7rem] tracking-[0.18em] text-[color:var(--text-dim)] uppercase">
                      {layer.tag}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/8 px-3 py-1 text-xs tracking-[0.15em] text-white/80 uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {project.snapshot.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.35rem] border border-white/10 bg-[rgba(7,16,21,0.72)] px-5 py-4"
              >
                <p className="text-xs tracking-[0.22em] text-[color:var(--text-dim)] uppercase">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/86">{item.value}</p>
              </div>
            ))}
            <div className="rounded-[1.35rem] border border-dashed border-white/12 bg-white/[0.02] px-5 py-4 text-sm leading-7 text-[color:var(--text-dim)]">
              Resume source did not include product screenshots, so this case study uses an architecture-style visual placeholder instead of inventing UI media.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
