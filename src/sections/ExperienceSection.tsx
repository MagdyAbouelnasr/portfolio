import { ExperienceRail } from '@/components/ExperienceRail'
import { SectionHeading } from '@/components/SectionHeading'
import type { ExperienceEntry } from '@/data/portfolio'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useRef } from 'react'

type ExperienceSectionProps = {
  experience: ExperienceEntry[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  useSectionReveal(ref)

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22" id="experience" ref={ref}>
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading
          description="Open a role for the details. The first scan stays focused on trajectory and scope."
          eyebrow="Experience"
          title="Four years. Three markets. Production work throughout."
        />
        <div className="mt-12 space-y-5">
          {experience.map((entry) => (
            <ExperienceRail entry={entry} key={entry.company} />
          ))}
        </div>
      </div>
    </section>
  )
}
