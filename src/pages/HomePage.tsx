import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AboutSection } from '@/sections/AboutSection'
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
        description="Mohamed Abouelnasr is a Senior Frontend Engineer with 4+ years delivering Angular, TypeScript, RxJS, and NgRx applications."
        title="Mohamed Abouelnasr | Senior Frontend Engineer"
      />
      <div className="relative z-10">
        <HeroSection data={portfolioData} />
        <AboutSection data={portfolioData} />
        <SelectedWorkSection projects={portfolioData.projects} />
        <CapabilitySection groups={portfolioData.capabilities} />
        <ExperienceSection experience={portfolioData.experience} />
        <ContactSection data={portfolioData} />
      </div>
    </div>
  )
}
