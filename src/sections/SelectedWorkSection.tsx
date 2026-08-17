import { ProjectShowcase } from '@/components/ProjectShowcase'
import { ButtonAnchor } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import type { PortfolioProject } from '@/data/portfolio'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useRef } from 'react'

type SelectedWorkSectionProps = {
  projects: PortfolioProject[]
}

export function SelectedWorkSection({ projects }: SelectedWorkSectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  useSectionReveal(ref)

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22" id="work" ref={ref}>
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading
          description="Choose a project to see the problem, ownership, and outcome."
          eyebrow="Selected work"
          title="Work that shows how I think."
        />

        <ProjectShowcase projects={projects} />

        <div data-reveal className="mt-6 flex flex-col gap-5 rounded-[1.5rem] border border-[color:var(--accent)]/18 bg-[color:var(--accent)]/[0.045] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-sm font-medium text-white">Working through a similar frontend challenge?</p>
            <p className="mt-1 text-sm leading-6 text-[color:var(--text-muted)]">I’m happy to discuss the role, product, or technical problem—no formal brief needed.</p>
          </div>
          <ButtonAnchor className="shrink-0 justify-center" href="mailto:mmabouelnasr@gmail.com?subject=Frontend opportunity" variant="secondary">Start a conversation</ButtonAnchor>
        </div>
      </div>
    </section>
  )
}
