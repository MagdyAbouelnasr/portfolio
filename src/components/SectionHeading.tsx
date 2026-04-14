type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p
        data-reveal
        className="mb-5 inline-flex items-center gap-3 text-xs font-medium tracking-[0.32em] text-[color:var(--accent)] uppercase"
      >
        <span className="h-px w-8 bg-current/60" />
        {eyebrow}
      </p>
      <h2
        data-reveal
        className="text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-[3.25rem]"
      >
        {title}
      </h2>
      <p
        data-reveal
        className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--text-muted)] sm:text-lg"
      >
        {description}
      </p>
    </div>
  )
}
