import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ButtonAnchor, ButtonLink } from '@/components/Button'
import { CaseStudyVisual } from '@/components/CaseStudyVisual'
import { Seo } from '@/components/Seo'
import { portfolioData } from '@/data/portfolio'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const ref = useRef<HTMLDivElement | null>(null)
  const project = portfolioData.projects.find((entry) => entry.slug === slug)

  if (!project) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="overflow-x-clip px-4 pt-28 pb-16 sm:px-6 sm:pt-34 sm:pb-18 lg:px-10 lg:pb-24" id="case-study-content" ref={ref}>
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
              className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[0.68rem] tracking-[0.16em] text-[color:var(--accent)] uppercase sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.22em]"
            >
              {project.status}
              <span className="h-1 w-1 rounded-full bg-white/30" />
              {project.role}
            </p>
            <h1
              data-project-reveal
              className="mt-7 break-words text-[clamp(2.4rem,12vw,3rem)] leading-[0.95] font-semibold text-white sm:mt-8 sm:text-5xl lg:text-[4.5rem]"
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

        <div className="mt-12 grid gap-4 sm:gap-6 lg:mt-14 lg:grid-cols-2">
          <article data-project-reveal className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[1.8rem] sm:p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Challenge</p>
            <p className="mt-4 text-base leading-8 text-white/86">{project.challenge}</p>
          </article>
          <article data-project-reveal className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[1.8rem] sm:p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Context</p>
            <p className="mt-4 text-base leading-8 text-white/86">{project.context}</p>
          </article>
        </div>

        <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <article data-project-reveal className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[1.8rem] sm:p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">What I built</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/84">
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article data-project-reveal className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[1.8rem] sm:p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Technical decisions</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/84">
              {project.decisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <article data-project-reveal className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[1.8rem] sm:p-6">
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Constraints</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/84">
              {project.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article
            data-project-reveal
            className="rounded-[1.5rem] border border-[color:var(--accent)]/18 bg-[linear-gradient(180deg,rgba(128,247,230,0.08),rgba(255,255,255,0.03))] p-5 sm:rounded-[1.8rem] sm:p-6"
          >
            <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Impact</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/86">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div data-project-reveal className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:mt-10 sm:rounded-[2rem] sm:p-6 lg:p-8">
          <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">Next case study</p>
          <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-base leading-8 text-[color:var(--text-muted)]">
              The portfolio keeps projects easy to enter and easy to leave. Move back to the main selection or download the full resume for the compact version.
            </p>
            <div className="grid w-full gap-3 sm:flex sm:w-auto sm:flex-wrap">
              <ButtonLink className="justify-center" to="/#work" variant="secondary">
                Back to selected work
              </ButtonLink>
              <ButtonAnchor className="justify-center" download href={portfolioData.resume.downloadHref}>
                Download resume
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
