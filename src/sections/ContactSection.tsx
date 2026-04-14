import { ButtonAnchor } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import type { PortfolioData } from '@/data/portfolio'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useRef } from 'react'

type ContactSectionProps = {
  data: PortfolioData
}

export function ContactSection({ data }: ContactSectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  useSectionReveal(ref)

  return (
    <section className="px-4 pt-16 pb-24 sm:px-6 lg:px-10 lg:pt-22 lg:pb-28" id="contact" ref={ref}>
      <div className="mx-auto max-w-[1320px]">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(142,227,213,0.14),rgba(255,255,255,0.03)_45%,rgba(255,182,107,0.12))] p-6 sm:p-8 lg:rounded-[2.4rem] lg:p-10">
          <SectionHeading
            description={data.contact.invitation}
            eyebrow="Message me"
            title="Open to frontend roles where clarity, quality, and delivery all matter."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div data-reveal className="grid gap-5 sm:grid-cols-2">
              <a
                className="rounded-[1.6rem] border border-white/10 bg-[rgba(7,16,21,0.48)] p-5 transition hover:border-white/24"
                href={`mailto:${data.contact.email}`}
              >
                <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Email</p>
                <p className="mt-3 text-lg font-semibold text-white">{data.contact.email}</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">Best for direct conversations about frontend roles, product teams, and delivery scope.</p>
              </a>
              <a
                className="rounded-[1.6rem] border border-white/10 bg-[rgba(7,16,21,0.48)] p-5 transition hover:border-white/24"
                href={data.contact.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">LinkedIn</p>
                <p className="mt-3 text-lg font-semibold text-white">mohamed-abouelnasr</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">A good route for recruiter outreach and professional context.</p>
              </a>
            </div>
            <div data-reveal className="rounded-[1.8rem] border border-white/10 bg-[rgba(7,16,21,0.48)] p-6">
              <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Preferred conversations</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-white/84">
                {data.contact.preferences.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonAnchor href={`mailto:${data.contact.email}`}>Start a conversation</ButtonAnchor>
                <ButtonAnchor href={data.contact.github} rel="noreferrer" target="_blank" variant="secondary">
                  GitHub
                </ButtonAnchor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
