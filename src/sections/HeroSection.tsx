import { ArrowDownRight, Boxes, CheckCircle2, MapPin, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import { ButtonAnchor } from '@/components/Button'
import type { PortfolioData } from '@/data/portfolio'

type HeroSectionProps = { data: PortfolioData }

const deliverySteps = [
  { icon: Workflow, label: 'Clarify', detail: 'Turn requirements into a coherent user flow.' },
  { icon: Boxes, label: 'Architect', detail: 'Build reusable UI and predictable state.' },
  { icon: ShieldCheck, label: 'Ship', detail: 'Test critical paths and deliver with confidence.' },
]

function DeliveryPanel({ email }: { email: string }) {
  return (
    <aside className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(12,14,27,0.88)] p-5 shadow-[0_32px_90px_-48px_rgba(0,0,0,0.9)] sm:rounded-[2rem] sm:p-7">
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/70 to-transparent" />
      <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <p className="text-xs tracking-[0.2em] text-[color:var(--accent)] uppercase">How I create value</p>
          <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">From unclear requirements to reliable UI.</h2>
        </div>
        <span className="mt-1 flex size-3 shrink-0"><span className="absolute inline-flex size-3 animate-ping rounded-full bg-[color:var(--accent)] opacity-40" /><span className="relative inline-flex size-3 rounded-full bg-[color:var(--accent)]" /></span>
      </div>

      <div className="mt-5 space-y-3">
        {deliverySteps.map((step, index) => {
          const Icon = step.icon
          return (
            <div className="group grid grid-cols-[2.5rem_1fr] gap-3 rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-4 transition hover:border-[color:var(--accent)]/25 hover:bg-white/[0.05]" key={step.label}>
              <span className="grid size-10 place-items-center rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent)]"><Icon className="size-5" /></span>
              <div><p className="font-medium text-white"><span className="mr-2 text-xs text-white/35">0{index + 1}</span>{step.label}</p><p className="mt-1 text-sm leading-6 text-[color:var(--text-muted)]">{step.detail}</p></div>
            </div>
          )
        })}
      </div>

      <div className="mt-5 rounded-[1.2rem] border border-[color:var(--accent)]/20 bg-[color:var(--accent)]/[0.06] p-4">
        <p className="flex items-center gap-2 text-sm font-medium text-white"><CheckCircle2 className="size-4 text-[color:var(--accent)]" />Strongest fit</p>
        <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">Complex Angular products, workflow-heavy interfaces, and bilingual platforms.</p>
      </div>

      <a className="mt-5 flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white transition hover:border-[color:var(--accent)]/35 hover:bg-white/[0.07]" href={`mailto:${email}?subject=Frontend opportunity`}>Tell me what you’re building →</a>
    </aside>
  )
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 pt-40 pb-14 sm:px-6 sm:pt-36 sm:pb-16 lg:px-10 lg:pt-32 lg:pb-20" id="top">
      <div className="hero-noise pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(128,247,230,0.1),transparent_62%)]" />
      <div className="mx-auto grid max-w-[1320px] gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:items-center xl:gap-16">
        <div className="relative z-10 max-w-3xl">
          <p data-reveal className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[0.68rem] tracking-[0.18em] text-[color:var(--accent)] uppercase sm:px-4 sm:text-xs"><Sparkles className="size-4" />Available for senior frontend opportunities</p>
          <div data-reveal className="mt-8">
            <p className="flex items-center gap-2 text-sm tracking-[0.16em] text-[color:var(--text-dim)] uppercase"><MapPin className="size-4" />{data.hero.location}</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.75rem,13vw,4.6rem)] leading-[0.94] font-semibold tracking-[-0.055em] text-white lg:text-[6rem]">Complex frontend. <span className="font-serif font-normal italic text-[color:var(--accent)]">Made clear.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--accent-soft)] sm:text-2xl sm:leading-9">{data.hero.role}</p>
          </div>
          <p data-reveal className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">{data.hero.valueStatement}</p>
          <div data-reveal className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap">
            <ButtonAnchor className="w-full justify-center sm:w-auto" href="#work" icon="arrow">See my work</ButtonAnchor>
            <ButtonAnchor className="w-full justify-center sm:w-auto" href={`mailto:${data.contact.email}?subject=Frontend opportunity`} variant="secondary">Discuss a role</ButtonAnchor>
            <ButtonAnchor className="w-full justify-center sm:w-auto" download href={data.resume.downloadHref} icon="download" variant="ghost">Resume</ButtonAnchor>
          </div>
          <div data-reveal className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
            {data.hero.signals.map((signal) => <div className="border-l border-white/12 pl-3 sm:pl-4" key={signal.label}><p className="text-[0.62rem] tracking-[0.13em] text-[color:var(--text-dim)] uppercase sm:text-xs">{signal.label}</p><p className="mt-2 text-lg font-semibold text-white sm:text-2xl">{signal.value}</p></div>)}
          </div>
          <a data-reveal className="mt-8 hidden items-center gap-2 text-sm tracking-[0.18em] text-[color:var(--text-dim)] uppercase transition hover:text-white sm:inline-flex" href="#work">See proof, not promises<ArrowDownRight className="size-4" /></a>
        </div>
        <div data-reveal><DeliveryPanel email={data.contact.email} /></div>
      </div>
    </section>
  )
}
