import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ButtonAnchor, ButtonLink } from '@/components/Button'
import { CaseStudyVisual } from '@/components/CaseStudyVisual'
import { Seo } from '@/components/Seo'
import { portfolioData } from '@/data/portfolio'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const ref = useRef<HTMLDivElement | null>(null)
  const project = portfolioData.projects.find((entry) => entry.slug === slug)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    if (prefersReducedMotion) {
      gsap.set(element.querySelectorAll('[data-project-reveal]'), { autoAlpha: 1, y: 0 })
      return
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        element.querySelectorAll('[data-project-reveal]'),
        { autoAlpha: 0, y: 22 },
        { autoAlpha: 1, y: 0, duration: 0.84, stagger: 0.08, ease: 'power3.out' },
      )
    }, element)

    return () => context.revert()
  }, [prefersReducedMotion])

  if (!project) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="px-4 pt-34 pb-18 sm:px-6 lg:px-10 lg:pt-34 lg:pb-24" id="case-study-content" ref={ref}>
      <Seo
        description={project.summary}
        title={`${project.name} | Mohamed Abouelnasr`}
      />
      <div className="mx-auto max-w-[1320px]">
        <Link
          className="inline-flex items-center gap-2 text-xs tracking-[0.24em] text-[color:var(--text-dim)] uppercase transition hover:text-white"
          to="/#work"
        >
          Case study index
          <ArrowRight className="size-4" />
        </Link>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_0.95fr] xl:items-start">
          <div>
            <p
              data-project-reveal
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase"
            >
              {project.status}
              <span className="h-1 w-1 rounded-full bg-white/30" />
              {project.role}
            </p>
            <h1
              data-project-reveal
              className="mt-8 text-[2.7rem] leading-[0.95] font-semibold text-white sm:text-5xl lg:text-[4.5rem]"
            >
              {project.name}
            </h1>
            <p
              data-project-reveal
              className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--accent-soft)] sm:text-2xl"
            >
              {project.summary}
            </p>
            <p
              data-project-reveal
              className="mt-6 max-w-3xl text-base leading-8 text-[color:var(--text-muted)] sm:text-lg"
            >
              {project.caseStudyIntro}
            </p>
            <div data-project-reveal className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-2 text-xs tracking-[0.18em] text-white/78 uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div data-project-reveal>
            <CaseStudyVisual project={project} />
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article data-project-reveal className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Challenge</p>
            <p className="mt-4 text-base leading-8 text-white/86">{project.challenge}</p>
          </article>
          <article data-project-reveal className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Context</p>
            <p className="mt-4 text-base leading-8 text-white/86">{project.context}</p>
          </article>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <article data-project-reveal className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">What I built</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/84">
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article data-project-reveal className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Technical decisions</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/84">
              {project.decisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <article data-project-reveal className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Constraints</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/84">
              {project.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article
            data-project-reveal
            className="rounded-[1.8rem] border border-[color:var(--accent)]/18 bg-[linear-gradient(180deg,rgba(142,227,213,0.08),rgba(255,255,255,0.03))] p-6"
          >
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Impact</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/86">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div data-project-reveal className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 lg:p-8">
          <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Next case study</p>
          <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-base leading-8 text-[color:var(--text-muted)]">
              The portfolio keeps projects easy to enter and easy to leave. Move back to the main selection or download the full resume for the compact version.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink to="/#work" variant="secondary">
                Back to selected work
              </ButtonLink>
              <ButtonAnchor download href={portfolioData.resume.downloadHref}>
                Download resume
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
