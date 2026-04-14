import { lazy, Suspense, useMemo } from 'react'
import { ArrowDownRight, Sparkles } from 'lucide-react'
import { ButtonAnchor } from '@/components/Button'
import type { PortfolioData } from '@/data/portfolio'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { hasWebGLSupport } from '@/utils/webgl'

const SignalArchitectureScene = lazy(() =>
  import('@/scenes/SignalArchitectureScene').then((module) => ({
    default: module.SignalArchitectureScene,
  })),
)

type HeroSectionProps = {
  data: PortfolioData
}

function HeroFallback() {
  return (
    <div className="relative h-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(142,227,213,0.25),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 sm:h-[360px] sm:rounded-[2.4rem] sm:p-6 lg:h-[420px]">
      <div className="absolute inset-4 rounded-[1.6rem] border border-white/8 sm:inset-6 sm:rounded-[2rem]" />
      <div className="animate-signal-float absolute top-8 left-8 h-2 w-24 rounded-full bg-[color:var(--accent)]/80 blur-[2px] sm:top-10 sm:left-10 sm:w-32" />
      <div className="animate-signal-line absolute top-18 left-10 h-px w-[58%] bg-gradient-to-r from-[color:var(--accent)] to-transparent sm:top-24 sm:left-14" />
      <div
        className="animate-signal-line absolute top-[42%] right-8 h-px w-[46%] bg-gradient-to-r from-transparent via-white/50 to-transparent sm:right-10"
        style={{ animationDelay: '1.2s' }}
      />
      <div
        className="animate-signal-float absolute bottom-10 left-10 h-22 w-22 rounded-[1.7rem] border border-white/10 sm:bottom-16 sm:left-14 sm:h-[7.5rem] sm:w-[7.5rem] sm:rounded-[2rem]"
        style={{ animationDelay: '0.45s' }}
      />
      <div
        className="animate-signal-float absolute right-10 bottom-12 h-18 w-[45%] rounded-[1.3rem] border border-white/10 bg-white/[0.03] sm:right-14 sm:bottom-20 sm:h-24 sm:rounded-[2rem]"
        style={{ animationDelay: '0.9s' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--bg)] to-transparent" />
    </div>
  )
}

export function HeroSection({ data }: HeroSectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const shouldRenderScene = useMemo(
    () => !prefersReducedMotion && hasWebGLSupport(),
    [prefersReducedMotion],
  )

  return (
    <section
      className="relative overflow-hidden px-4 pt-34 pb-14 sm:px-6 sm:pt-38 sm:pb-16 lg:px-10 lg:pt-36 lg:pb-22"
      id="top"
    >
      <div className="hero-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(142,227,213,0.22),transparent_60%)]" />
      <div className="mx-auto grid max-w-[1320px] gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-center xl:gap-10">
        <div className="relative z-10 max-w-3xl">
          <p
            data-reveal
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[0.68rem] tracking-[0.22em] text-[color:var(--accent)] uppercase sm:px-4 sm:text-xs"
          >
            <Sparkles className="size-4" />
            Frontend delivery for complex products
          </p>

          <div data-reveal className="mt-8">
            <p className="text-sm tracking-[0.32em] text-[color:var(--text-dim)] uppercase">
              {data.hero.location}
            </p>
            <h1 className="mt-4 max-w-3xl text-[2.85rem] leading-[0.92] font-semibold tracking-[-0.05em] text-white sm:text-[4.25rem] lg:text-[5.8rem]">
              {data.hero.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--accent-soft)] sm:text-2xl sm:leading-9">
              {data.hero.role}
            </p>
          </div>

          <div data-reveal className="mt-8 max-w-2xl space-y-5">
            <p className="text-base leading-8 text-white/88 sm:text-xl">
              {data.hero.valueStatement}
            </p>
            <p className="max-w-2xl text-[0.95rem] leading-8 text-[color:var(--text-muted)] sm:text-lg">
              {data.hero.summary}
            </p>
          </div>

          <div data-reveal className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap">
            <ButtonAnchor className="justify-center sm:justify-start" href="#work" icon="arrow">
              View projects
            </ButtonAnchor>
            <ButtonAnchor
              className="justify-center sm:justify-start"
              download
              href={data.resume.downloadHref}
              icon="download"
              variant="secondary"
            >
              Download resume
            </ButtonAnchor>
            <ButtonAnchor className="justify-center sm:justify-start" href="#contact" variant="ghost">
              Contact me
            </ButtonAnchor>
          </div>

          <div data-reveal className="mt-8 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-4">
            {data.hero.signals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[1.5rem]"
              >
                <p className="text-xs tracking-[0.22em] text-[color:var(--text-dim)] uppercase">
                  {signal.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/88">{signal.value}</p>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-8 hidden sm:block">
            <a
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-[color:var(--text-dim)] uppercase transition hover:text-white"
              href="#work"
            >
              Skip into the work
              <ArrowDownRight className="size-4" />
            </a>
          </div>
        </div>

        <div data-reveal className="relative">
          <div className="absolute inset-0 rounded-[2.6rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,182,107,0.1),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(142,227,213,0.16),transparent_30%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-[rgba(255,255,255,0.03)]">
            {shouldRenderScene ? (
              <Suspense fallback={<HeroFallback />}>
                <SignalArchitectureScene />
              </Suspense>
            ) : (
              <HeroFallback />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
