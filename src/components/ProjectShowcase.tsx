import { useState } from 'react'
import { ArrowUpRight, Check, Layers3 } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import type { PortfolioProject } from '@/data/portfolio'
import { cn } from '@/utils/cn'

type ProjectShowcaseProps = { projects: PortfolioProject[] }

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug)
  const project = projects.find((item) => item.slug === activeSlug) ?? projects[0]

  if (!project) return null

  return (
    <div data-reveal className="mt-10 min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] sm:rounded-[2rem]">
      <div aria-label="Choose a project" className="no-scrollbar flex snap-x snap-mandatory scroll-px-2 overflow-x-auto overscroll-x-contain border-b border-white/10 p-2" role="tablist">
        {projects.map((item, index) => (
          <button
            aria-selected={item.slug === project.slug}
            className={cn(
              'min-w-[78%] flex-1 snap-start rounded-[1.1rem] px-4 py-4 text-left transition sm:min-w-fit sm:rounded-[1.25rem] sm:px-6',
              item.slug === project.slug ? 'bg-white/[0.09] text-white' : 'text-[color:var(--text-dim)] hover:bg-white/[0.04] hover:text-white',
            )}
            key={item.slug}
            onClick={() => setActiveSlug(item.slug)}
            role="tab"
            type="button"
          >
            <span className="text-xs text-[color:var(--accent)]">0{index + 1}</span>
            <span className="ml-3 font-medium">{item.name}</span>
          </button>
        ))}
      </div>

      <article className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.18em] uppercase text-[color:var(--text-dim)]">
            <span className="rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-3 py-1 text-[color:var(--accent)]">{project.status}</span>
            <span>{project.role}</span>
          </div>
          <h3 className="mt-6 break-words text-3xl font-semibold text-white sm:text-5xl">{project.name}</h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-muted)] sm:text-lg">{project.summary}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((item) => <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70" key={item}>{item}</span>)}
          </div>
          <ButtonLink className="mt-8 w-full justify-center sm:w-auto" icon="arrow" to={`/projects/${project.slug}`}>Explore case study</ButtonLink>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-[rgba(7,16,21,0.55)] p-5 sm:p-6">
          <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-[color:var(--accent)] uppercase"><Layers3 className="size-4" /> What changed</p>
          <p className="mt-4 text-lg leading-8 text-white">{project.outcome}</p>
          <ul className="mt-6 space-y-3">
            {project.built.slice(0, 3).map((item) => (
              <li className="flex gap-3 text-sm leading-6 text-[color:var(--text-muted)]" key={item}><Check className="mt-1 size-4 shrink-0 text-[color:var(--accent)]" />{item}</li>
            ))}
          </ul>
          <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm text-white/70">
            <span>Full decisions + architecture</span><ArrowUpRight className="size-4 text-[color:var(--accent)]" />
          </div>
        </div>
      </article>
    </div>
  )
}
