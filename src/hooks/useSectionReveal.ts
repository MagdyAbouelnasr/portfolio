import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function useSectionReveal(ref: RefObject<HTMLElement | null>) {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const targets = element.querySelectorAll<HTMLElement>('[data-reveal]')

    if (!targets.length) {
      return
    }

    if (prefersReducedMotion) {
      gsap.set(targets, { autoAlpha: 1, y: 0 })
      return
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          autoAlpha: 0,
          y: 28,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.88,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            once: true,
          },
        },
      )
    }, element)

    return () => context.revert()
  }, [prefersReducedMotion, ref])
}
