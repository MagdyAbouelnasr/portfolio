import { ExternalLink } from 'lucide-react'

type ResumeCardProps = {
  label: string
  value: string
  detail?: string
  href?: string
}

export function ResumeCard({ label, value, detail, href }: ResumeCardProps) {
  const content = (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]">
      <p className="text-xs tracking-[0.22em] text-[color:var(--accent)] uppercase">{label}</p>
      <h3 className="mt-3 text-lg font-semibold text-white">{value}</h3>
      {detail ? <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{detail}</p> : null}
      {href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-white uppercase">
          Open link
          <ExternalLink className="size-4" />
        </span>
      ) : null}
    </div>
  )

  if (href) {
    return (
      <a href={href} rel="noreferrer" target="_blank">
        {content}
      </a>
    )
  }

  return content
}
