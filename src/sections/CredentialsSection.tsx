import { ButtonAnchor } from '@/components/Button'
import { ResumeCard } from '@/components/ResumeCard'
import { SectionHeading } from '@/components/SectionHeading'
import type { PortfolioData } from '@/data/portfolio'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useRef } from 'react'

type CredentialsSectionProps = {
  data: PortfolioData
}

export function CredentialsSection({ data }: CredentialsSectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  useSectionReveal(ref)

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22" id="credentials" ref={ref}>
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading
          description="Resume, education, ongoing development, and core profiles are kept together here so recruiters and hiring managers can verify the profile quickly."
          eyebrow="Credentials"
          title="Resume access, education, and the signals behind the work."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 lg:p-8">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Resume</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">A concise view of the full profile.</h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-[color:var(--text-muted)]">
              Download the latest resume for a compact version of experience, projects, skills, education, and development focus areas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonAnchor download href={data.resume.downloadHref} icon="download">
                Download PDF
              </ButtonAnchor>
              <ButtonAnchor href={data.contact.linkedin} rel="noreferrer" target="_blank" variant="secondary">
                LinkedIn profile
              </ButtonAnchor>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {data.resume.cards.map((card) => (
              <ResumeCard
                detail={card.detail}
                href={card.href}
                key={`${card.label}-${card.value}`}
                label={card.label}
                value={card.value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
