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
        description="Mohamed Abouelnasr is a senior frontend engineer expanding into Java backend and cloud engineering, with 4+ years delivering complex Angular products."
        title="Mohamed Abouelnasr | Frontend, Full-Stack & Cloud"
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
