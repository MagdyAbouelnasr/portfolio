import { SectionHeading } from '@/components/SectionHeading'
import type { PortfolioData } from '@/data/portfolio'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useRef } from 'react'

type AboutSectionProps = {
  data: PortfolioData
}

export function AboutSection({ data }: AboutSectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  useSectionReveal(ref)

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22" id="about" ref={ref}>
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <SectionHeading
          description={data.about.summary}
          eyebrow="About"
          title="Frontend delivery for products that have real operational complexity."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <article data-reveal className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">How I work</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/84">
              {data.about.howIWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article data-reveal className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Strengths</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/84">
              {data.about.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article
            data-reveal
            className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(142,227,213,0.08),rgba(255,255,255,0.03))] p-6 md:col-span-2"
          >
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Product footprint</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {data.about.productAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs tracking-[0.18em] text-white/84 uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
