import { ProjectCard } from '@/components/ProjectCard'
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
          description="These projects come directly from the resume and focus on shipped frontend work: platform delivery, workflow state architecture, and reusable tooling."
          eyebrow="Selected work"
          title="Selected work from production frontend delivery."
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
