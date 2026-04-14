import { useEffect } from 'react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
import { AboutSection } from '@/sections/AboutSection'
import { CapabilitySection } from '@/sections/CapabilitySection'
import { ContactSection } from '@/sections/ContactSection'
import { CredentialsSection } from '@/sections/CredentialsSection'
import { ExperienceSection } from '@/sections/ExperienceSection'
import { HeroSection } from '@/sections/HeroSection'
import { SelectedWorkSection } from '@/sections/SelectedWorkSection'
import { Seo } from '@/components/Seo'
import { portfolioData } from '@/data/portfolio'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function HomePage() {
  const location = useLocation()
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    }
  }, [location.hash])

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const element = document.getElementById('top')

    if (!element) {
      return
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        element.querySelectorAll('[data-reveal]'),
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
        },
      )
    }, element)

    return () => context.revert()
  }, [prefersReducedMotion])

  return (
    <div>
      <Seo
        description="Portfolio for Mohamed Abouelnasr, a senior frontend engineer focused on workflow-heavy products, state architecture, bilingual interfaces, and polished production delivery."
        title="Mohamed Abouelnasr | Senior Frontend Engineer"
      />
      <HeroSection data={portfolioData} />
      <SelectedWorkSection projects={portfolioData.projects} />
      <AboutSection data={portfolioData} />
      <CapabilitySection groups={portfolioData.capabilities} />
      <ExperienceSection experience={portfolioData.experience} />
      <CredentialsSection data={portfolioData} />
      <ContactSection data={portfolioData} />
    </div>
  )
}
