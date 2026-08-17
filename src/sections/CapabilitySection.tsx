import { CapabilityCluster } from '@/components/CapabilityCluster'
import { SectionHeading } from '@/components/SectionHeading'
import type { CapabilityGroup } from '@/data/portfolio'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useRef } from 'react'

type CapabilitySectionProps = {
  groups: CapabilityGroup[]
}

export function CapabilitySection({ groups }: CapabilitySectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  useSectionReveal(ref)

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22" id="capabilities" ref={ref}>
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading
          description="The areas where I can add value from day one."
          eyebrow="Expertise"
          title="Built for product complexity, not just polished screens."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {groups.map((group) => (
            <CapabilityCluster
              items={group.items}
              key={group.title}
              summary={group.summary}
              title={group.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
