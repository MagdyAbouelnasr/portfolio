import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type CommonProps = {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  icon?: 'arrow' | 'download'
}

type AnchorButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>
type RouterButtonProps = CommonProps & LinkProps

function iconForType(icon?: CommonProps['icon']) {
  if (icon === 'download') {
    return <Download className="size-4" />
  }

  if (icon === 'arrow') {
    return <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
  }

  return null
}

function sharedClassName(variant: ButtonVariant, className?: string) {
  return cn(
    'group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-[0.18em] uppercase transition duration-300',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]',
    variant === 'primary' &&
      'bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-slate-950 shadow-[0_18px_55px_-30px_rgba(142,227,213,0.95)] hover:-translate-y-0.5 hover:shadow-[0_24px_65px_-28px_rgba(142,227,213,0.85)]',
    variant === 'secondary' &&
      'border border-white/14 bg-white/5 text-white hover:border-white/30 hover:bg-white/8',
    variant === 'ghost' &&
      'text-[color:var(--text-muted)] hover:bg-white/[0.04] hover:text-white',
    className,
  )
}

export function ButtonLink({
  children,
  variant = 'primary',
  className,
  icon,
  ...props
}: RouterButtonProps) {
  return (
    <Link className={sharedClassName(variant, className)} {...props}>
      <span>{children}</span>
      {iconForType(icon)}
    </Link>
  )
}

export function ButtonAnchor({
  children,
  variant = 'primary',
  className,
  icon,
  ...props
}: AnchorButtonProps) {
  return (
    <a className={sharedClassName(variant, className)} {...props}>
      <span>{children}</span>
      {iconForType(icon)}
    </a>
  )
}
