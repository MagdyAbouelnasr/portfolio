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
          description="The emphasis here is ownership, delivery scope, and the kinds of environments these products lived in rather than a copied resume timeline."
          eyebrow="Experience"
          title="Experience across Saudi, Swiss, and Egyptian product environments."
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
