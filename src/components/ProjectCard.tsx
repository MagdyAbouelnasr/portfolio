import { ArrowUpRight } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import type { PortfolioProject } from '@/data/portfolio'

type ProjectCardProps = {
  project: PortfolioProject
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      data-reveal
      className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 transition duration-500 hover:border-[color:var(--accent)]/35 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] sm:rounded-[2rem] sm:p-6 lg:p-8"
    >
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-[color:var(--accent)]/0 via-[color:var(--accent)]/60 to-[color:var(--accent)]/0 opacity-60" />
      <div className="absolute right-4 bottom-4 text-[4.5rem] font-semibold leading-none text-white/[0.03] sm:right-6 sm:bottom-6 sm:text-[7rem]">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative flex h-full flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.22em] uppercase text-[color:var(--text-dim)]">
          <span>{project.status}</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>{project.role}</span>
        </div>

        <div>
          <h3 className="max-w-xl text-[1.7rem] font-semibold text-white sm:text-3xl">{project.name}</h3>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-[color:var(--text-muted)] sm:text-base">
            {project.summary}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Contribution</p>
            <p className="mt-3 text-sm leading-7 text-white/84">{project.contribution}</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Outcome</p>
            <p className="mt-3 text-sm leading-7 text-white/84">{project.outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs tracking-[0.16em] text-[color:var(--text-dim)] uppercase"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4">
          <ButtonLink icon="arrow" to={`/projects/${project.slug}`} variant="secondary">
            Open case study
          </ButtonLink>
          <ArrowUpRight className="size-5 text-[color:var(--accent)] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </article>
  )
}
