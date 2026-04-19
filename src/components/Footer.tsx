import { Github, Linkedin, Mail } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6 text-sm text-[color:var(--text-dim)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium tracking-[0.16em] text-white uppercase">Mohamed Abouelnasr</p>
          <p className="mt-2 max-w-xl">
            Senior frontend engineer with 4+ years building portals, admin dashboards, and workflow-heavy applications.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/24 hover:text-white"
            href={`mailto:${portfolioData.contact.email}`}
          >
            <Mail className="size-4" />
            Email
          </a>
          <a
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/24 hover:text-white"
            href={portfolioData.contact.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github className="size-4" />
            GitHub
          </a>
          <a
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/24 hover:text-white"
            href={portfolioData.contact.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
