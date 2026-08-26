import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type SquiggleProps = {
  children: ReactNode
  className?: string
}

export function Squiggle({ children, className }: SquiggleProps) {
  return (
    <span className={cn('relative inline-block', className)}>
      {children}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-1 h-[0.3em] w-full text-[color:var(--accent)] sm:-bottom-2"
        preserveAspectRatio="none"
        viewBox="0 0 120 14"
      >
        <path
          d="M2 9C13 3 22 3 32 8.5S52 14 63 8S84 2 95 7.5 116 12 118 7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3.4"
        />
      </svg>
    </span>
  )
}

type HighlightProps = {
  children: ReactNode
  className?: string
}

export function Highlight({ children, className }: HighlightProps) {
  return (
    <span
      className={cn(
        'relative inline whitespace-nowrap bg-[linear-gradient(180deg,transparent_58%,rgba(128,247,230,0.34)_58%,rgba(128,247,230,0.34)_92%,transparent_92%)] px-0.5',
        className,
      )}
    >
      {children}
    </span>
  )
}

type StickyNoteProps = {
  children: ReactNode
  rotate?: number
  className?: string
}

export function StickyNote({ children, rotate = -4, className }: StickyNoteProps) {
  const style: CSSProperties = { transform: `rotate(${rotate}deg)` }

  return (
    <div
      className={cn(
        'w-44 rounded-[0.35rem] bg-[#f6e79c] px-3.5 py-3 font-hand text-base leading-[1.15] text-[#3a3320] shadow-[0_20px_34px_-18px_rgba(0,0,0,0.65)]',
        className,
      )}
      style={style}
    >
      <span
        aria-hidden
        className="absolute -top-2.5 left-1/2 h-5 w-12 -translate-x-1/2 -rotate-2 bg-white/35"
      />
      {children}
    </div>
  )
}
