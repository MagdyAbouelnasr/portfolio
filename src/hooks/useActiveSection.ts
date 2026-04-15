import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (!sectionIds.length) {
      setActiveSection('')
      return
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return
    }

    const header = document.querySelector<HTMLElement>('[data-site-header]')
    let frame = 0

    const getTrackingLine = () => {
      const viewportHeight = window.innerHeight || 1
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0

      return Math.min(Math.max(headerBottom + 24, viewportHeight * 0.34), viewportHeight * 0.46)
    }

    const updateActiveSection = () => {
      const trackingLine = getTrackingLine()
      let nextSection = sections[0]
      let smallestDistance = Number.POSITIVE_INFINITY

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        const containsTrackingLine = rect.top <= trackingLine && rect.bottom >= trackingLine
        const distance = containsTrackingLine
          ? 0
          : Math.min(Math.abs(rect.top - trackingLine), Math.abs(rect.bottom - trackingLine))

        if (distance < smallestDistance) {
          nextSection = section
          smallestDistance = distance
        }
      }

      setActiveSection((current) => (current === nextSection.id ? current : nextSection.id))
    }

    const requestUpdate = () => {
      cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateActiveSection)
    }

    const resizeObserver = new ResizeObserver(() => {
      requestUpdate()
    })

    sections.forEach((section) => resizeObserver.observe(section))
    if (header) {
      resizeObserver.observe(header)
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [sectionIds])

  return activeSection
}
