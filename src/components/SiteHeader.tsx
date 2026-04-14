import { Download, Mail, MoveLeft } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { ButtonAnchor } from '@/components/Button'
import { cn } from '@/utils/cn'

type SiteHeaderProps = {
  navItems: Array<{ id: string; label: string }>
  activeSection?: string
  resumeUrl: string
}

export function SiteHeader({ navItems, activeSection, resumeUrl }: SiteHeaderProps) {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/projects/')

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="pointer-events-auto mx-auto flex max-w-[1320px] items-center justify-between gap-3 rounded-full border border-white/10 bg-[rgba(7,16,21,0.82)] px-4 py-3 shadow-[0_12px_50px_-35px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:px-5">
        <Link
          className="flex min-w-0 items-center gap-3 text-white transition hover:text-[color:var(--accent)]"
          to="/"
        >
          <span className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-sm font-semibold tracking-[0.26em]">
            MA
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-medium tracking-[0.16em] uppercase text-white">
              Mohamed Abouelnasr
            </span>
            <span className="block truncate text-xs text-[color:var(--text-dim)]">
              Senior Frontend Engineer
            </span>
          </span>
        </Link>

        {isProjectPage ? (
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase text-white transition hover:border-white/20 hover:bg-white/[0.08]"
            to="/#work"
          >
            <MoveLeft className="size-4" />
            Back to work
          </Link>
        ) : (
          <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={cn(
                  'rounded-full px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase transition',
                  activeSection === item.id
                    ? 'border border-[color:var(--accent)] bg-[color:var(--accent)] text-slate-950'
                    : 'text-[color:var(--text-dim)] hover:text-white',
                )}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          <ButtonAnchor
            className="hidden sm:inline-flex"
            download
            href={resumeUrl}
            icon="download"
            variant="ghost"
          >
            Resume
          </ButtonAnchor>
          <a
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[color:var(--text-muted)] transition hover:border-white/24 hover:text-white"
            href={isProjectPage ? resumeUrl : 'mailto:mmabouelnasr@gmail.com'}
            aria-label={isProjectPage ? 'Download resume' : 'Email Mohamed Abouelnasr'}
          >
            {location.pathname === '/' ? <Mail className="size-4" /> : <Download className="size-4" />}
          </a>
        </div>
      </div>

      {!isProjectPage ? (
        <div className="pointer-events-auto mx-auto mt-3 max-w-[1320px] md:hidden">
          <nav className="no-scrollbar flex gap-2 overflow-x-auto rounded-full border border-white/8 bg-[rgba(7,16,21,0.72)] px-3 py-2 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.id}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={cn(
                  'shrink-0 rounded-full px-3 py-2 text-[0.68rem] font-medium tracking-[0.18em] uppercase transition',
                  activeSection === item.id
                    ? 'bg-[color:var(--accent)] text-slate-950'
                    : 'text-[color:var(--text-dim)]',
                )}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
