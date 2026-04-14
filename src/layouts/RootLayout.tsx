import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { SiteHeader } from '@/components/SiteHeader'
import { useActiveSection } from '@/hooks/useActiveSection'
import { navigationItems, portfolioData } from '@/data/portfolio'

const sectionIds = navigationItems.map((item) => item.id)

export function RootLayout() {
  const location = useLocation()
  const activeSection = useActiveSection(location.pathname === '/' ? sectionIds : [])
  const isProjectPage = location.pathname.startsWith('/projects/')
  const skipHref = isProjectPage ? '#case-study-content' : '#work'
  const skipLabel = isProjectPage ? 'Skip to case study' : 'Skip to selected work'

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-white">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
        href={skipHref}
      >
        {skipLabel}
      </a>
      <ScrollToTop />
      <SiteHeader
        activeSection={activeSection}
        navItems={navigationItems}
        resumeUrl={portfolioData.resume.downloadHref}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
