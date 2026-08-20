import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CapabilitySection } from '@/sections/CapabilitySection'
import { ContactSection } from '@/sections/ContactSection'
import { ExperienceSection } from '@/sections/ExperienceSection'
import { HeroSection } from '@/sections/HeroSection'
import { SelectedWorkSection } from '@/sections/SelectedWorkSection'
import { Seo } from '@/components/Seo'
import { portfolioData } from '@/data/portfolio'

export function HomePage() {
  const location = useLocation()

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

  return (
    <div className="relative isolate">
      <Seo
        description="Portfolio for Mohamed Abouelnasr, a senior frontend engineer focused on workflow-heavy products, state architecture, bilingual interfaces, and polished production delivery."
        title="Mohamed Abouelnasr | Senior Frontend Engineer"
      />
      <div className="relative z-10">
        <HeroSection data={portfolioData} />
        <SelectedWorkSection projects={portfolioData.projects} />
        <CapabilitySection groups={portfolioData.capabilities} />
        <ExperienceSection experience={portfolioData.experience} />
        <ContactSection data={portfolioData} />
      </div>
    </div>
  )
}
