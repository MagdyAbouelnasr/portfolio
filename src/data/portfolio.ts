export type ProjectVisualLayer = {
  name: string
  tag: string
  items: string[]
}

export type PortfolioProject = {
  slug: string
  name: string
  status: string
  role: string
  summary: string
  contribution: string
  outcome: string
  proofNote: string
  stack: string[]
  caseStudyIntro: string
  challenge: string
  context: string
  built: string[]
  decisions: string[]
  constraints: string[]
  impact: string[]
  visualLayers: ProjectVisualLayer[]
  snapshot: Array<{ label: string; value: string }>
}

export type ExperienceEntry = {
  company: string
  period: string
  role: string
  context: string
  highlights: string[]
}

export type CapabilityGroup = {
  title: string
  summary: string
  items: string[]
}

function withBase(path: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}

export type PortfolioData = {
  hero: {
    name: string
    role: string
    location: string
    valueStatement: string
    summary: string
    signals: Array<{ label: string; value: string }>
  }
  about: {
    summary: string
    howIWork: string[]
    strengths: string[]
    productAreas: string[]
  }
  capabilities: CapabilityGroup[]
  experience: ExperienceEntry[]
  projects: PortfolioProject[]
  resume: {
    downloadHref: string
    cards: Array<{
      label: string
      value: string
      detail?: string
      href?: string
    }>
  }
  contact: {
    email: string
    phone: string
    linkedin: string
    github: string
    invitation: string
    preferences: string[]
  }
}

export const navigationItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'capabilities', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Mohamed Abouelnasr',
    role: 'Senior Frontend Engineer | Angular, TypeScript, RxJS & NgRx',
    location: 'Alexandria, Egypt',
    valueStatement:
      'I build dependable Angular systems for complex workflows, bilingual products, and high-traffic user journeys.',
    summary:
      '4+ years delivering production frontend applications for teams in Saudi Arabia, Switzerland, and Egypt, with deep experience in reactive state, reusable UI architecture, REST integrations, and RTL/LTR delivery.',
    signals: [
      {
        label: 'Experience',
        value: '4+ years',
      },
      {
        label: 'Specialization',
        value: 'Angular + TypeScript',
      },
      {
        label: 'Engineering focus',
        value: 'Frontend systems',
      },
    ],
  },
  about: {
    summary:
      'I’m a Senior Frontend Engineer with 4+ years building production Angular applications for teams in Saudi Arabia, Switzerland, and Egypt. My strongest work combines reusable architecture, dependable reactive state, bilingual product delivery, and careful integration with backend services.',
    howIWork: [
      'Translate requirements into reusable components, scalable routing, and maintainable frontend structure.',
      'Handle loading, error, and empty states as part of the shipped user journey.',
      'Debug reactive flows and production issues in a structured way when behavior becomes complex.',
    ],
    strengths: [
      'Angular delivery across portals, dashboards, onboarding flows, and workflow-heavy products.',
      'State architecture using RxJS and NgRx for async, multi-step frontend flows.',
      'Bilingual Arabic/English interfaces with RTL support and shared translation patterns.',
      'Frontend delivery with REST API integration, production debugging, and consistent code-quality tooling.',
    ],
    productAreas: [
      'Saudi digital transformation',
      'Swiss agency products',
      'Egyptian port systems',
      'Arbitration workflows',
      'Employee-benefits platforms',
      'Admin dashboards',
      'Onboarding flows',
      'Location-based browsing',
    ],
  },
  capabilities: [
    {
      title: 'Frontend engineering',
      summary:
        'Production Angular delivery centered on typed interfaces, reusable components, routing, and maintainable application structure.',
      items: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'Reactive Forms',
        'Angular Router',
        'Angular Material',
        'PrimeNG',
        'Reusable component systems',
      ],
    },
    {
      title: 'State and workflows',
      summary:
        'Strongest where frontend reliability depends on good state design, reactive coordination, and predictable handling of async user flows.',
      items: [
        'NgRx',
        'RxJS',
        'Stores, selectors, and effects',
        'Multi-step workflows',
        'Loading and error states',
        'Frontend performance',
      ],
    },
    {
      title: 'Product UI and integration',
      summary:
        'Responsive, bilingual user experiences connected to the services and location data that drive the product.',
      items: [
        'Responsive design',
        'Arabic / English localization',
        'RTL / LTR interfaces',
        'REST APIs',
        'Google Maps API',
        'Location-based filtering',
        '.NET API exposure',
      ],
    },
    {
      title: 'Quality and delivery',
      summary:
        'Practical standards and debugging habits that make production frontend work easier to maintain and review.',
      items: [
        'Production debugging',
        'ESLint',
        'Prettier',
        'Husky',
        'Git',
      ],
    },
  ],
  experience: [
    {
      company: 'INNOSOFT (previously Solutions by 42)',
      period: 'Apr 2024 - Present',
      role: 'Frontend Engineer | Saudi digital transformation and custom software delivery',
      context:
        'Building Angular products in a small team with substantial frontend ownership across employee benefits and complex arbitration workflows.',
      highlights: [
        'Built major parts of Tagdeer’s Angular frontend from scratch for a Saudi employee-benefits platform serving approximately 150,000 users daily.',
        'Delivered onboarding, dashboards, offers, routing, reusable components, REST integrations, Google Maps discovery, and location-based filtering.',
        'Implemented responsive Arabic/English interfaces with shared localization patterns and consistent RTL/LTR behavior.',
        'Designed and maintained NgRx stores, selectors, and effects across 5+ Tahkeem business modules supporting complex asynchronous workflows.',
        'Improved frontend standards and local quality checks using ESLint, Prettier, and Husky.',
      ],
    },
    {
      company: 'MODESO',
      period: 'Aug 2023 - Apr 2024',
      role: 'Full-Stack Software Engineer — Frontend Focus | Swiss software agency',
      context:
        'Worked in a fast-paced agency setting, turning requirements into responsive Angular user flows and solving production reliability issues across multiple client products.',
      highlights: [
        'Delivered responsive Angular flows and reusable UI components across multiple client products.',
        'Implemented reactive data flows with RxJS to keep forms and screens consistent during async operations.',
        'Integrated frontend features with REST APIs while covering loading, empty, and error states.',
        'Diagnosed and resolved complex RxJS race conditions that caused intermittent data loss in production.',
      ],
    },
    {
      company: 'Integrated Solutions for Ports (ISFP)',
      period: 'Jan 2023 - Jul 2023',
      role: 'Front End Engineer | Transport automation and business process management',
      context:
        'Supported web application delivery inside a government digitalization programme, where release reliability and workflow accuracy mattered.',
      highlights: [
        'Translated requirements into production-ready workflow screens and reusable frontend components.',
        'Integrated frontend workflows with backend services.',
        'Supported validation and test execution for key flows ahead of releases in system test environments.',
      ],
    },
  ],
  projects: [
    {
      slug: 'commerce-platform',
      name: 'Tagdeer Employee Benefits Platform',
      status: 'Production',
      role: 'Frontend Engineer',
      summary:
        'Built major parts of a Saudi employee-benefits platform’s Angular frontend from scratch for approximately 150,000 users daily.',
      contribution:
        'Delivered onboarding, dashboards, offers, reusable components, routing, REST integrations, and map-driven location discovery.',
      outcome:
        'Supported a high-traffic production platform with responsive Arabic/English experiences and consistent RTL/LTR behavior.',
      proofNote: 'approximately 150,000 users daily',
      stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Google Maps API', 'i18n'],
      caseStudyIntro:
        'A production Angular system where reusable structure, bilingual delivery, and location-based discovery support a large daily user base.',
      challenge:
        'Build substantial frontend functionality from scratch while keeping onboarding, dashboards, offers, and location-based discovery coherent in two languages.',
      context:
        'Delivered in a small team for a Saudi employee-benefits product serving approximately 150,000 users daily.',
      built: [
        'Landing pages, onboarding flows, dashboard surfaces, and offer experiences.',
        'Reusable Angular components and routing across core product journeys.',
        'Map browsing connected to backend search endpoints, filters, and loading states.',
      ],
      decisions: [
        'Structured shared interface patterns around reusable components and clear routing.',
        'Handled RTL and LTR as a core product requirement, not a late-stage patch.',
        'Connected map interactions, filters, and async search states so the browsing experience stayed responsive and legible.',
      ],
      constraints: [
        'Needed to serve Arabic and English audiences with consistent quality.',
        'Had to coordinate dashboards, forms, and location-based browsing within one coherent frontend system.',
        'Needed to integrate REST data, map interactions, responsive filters, and asynchronous loading states.',
      ],
      impact: [
        'Built major production frontend functionality for a platform serving approximately 150,000 users daily.',
        'Delivered consistent Arabic/English and RTL/LTR behavior across responsive product journeys.',
        'Connected filters and Google Maps interactions to REST-backed location discovery.',
      ],
      visualLayers: [
        {
          name: 'Acquisition layer',
          tag: 'Entry',
          items: ['Landing pages', 'Onboarding', 'Offer entry points'],
        },
        {
          name: 'Product layer',
          tag: 'Flow',
          items: ['Dashboards', 'Responsive filters', 'Async loading states'],
        },
        {
          name: 'Signal layer',
          tag: 'Maps',
          items: ['Google Maps API', 'Search endpoints', 'Location browsing'],
        },
      ],
      snapshot: [
        {
          label: 'Role',
          value: 'Built major parts of the Angular frontend from scratch as part of a small team.',
        },
        {
          label: 'Scope',
          value: 'Onboarding, dashboards, maps, offers, reusable components, scalable routing.',
        },
        {
          label: 'Production reach',
          value: 'Approximately 150,000 users daily.',
        },
      ],
    },
    {
      slug: 'workflow-operations-platform',
      name: 'Tahkeem Arbitration Workflow Platform',
      status: 'Production',
      role: 'Frontend Engineer',
      summary:
        'Designed and maintained NgRx stores, selectors, and effects across 5+ business modules for a complex arbitration workflow product.',
      contribution:
        'Structured reactive state and asynchronous coordination across interconnected, multi-step business workflows.',
      outcome:
        'Created predictable state boundaries for complex workflow behavior spanning more than five business modules.',
      proofNote: 'NgRx architecture across 5+ modules',
      stack: ['Angular', 'NgRx', 'RxJS', 'TypeScript', 'REST APIs'],
      caseStudyIntro:
        'A systems-level frontend challenge: coordinate workflow state across interconnected modules with multiple asynchronous and multi-step operations.',
      challenge:
        'Model a multi-module arbitration lifecycle with asynchronous actions while keeping state transitions understandable and maintainable.',
      context:
        'Built for a complex arbitration product where business workflows span multiple frontend modules and asynchronous operations.',
      built: [
        'NgRx stores, selectors, and effects for a complex arbitration lifecycle.',
        'Frontend delivery patterns across 5+ modules with multiple async operations.',
        'Workflow handling designed to keep state predictable during user actions and server responses.',
      ],
      decisions: [
        'Used explicit NgRx architecture to make ownership of state transitions clear.',
        'Relied on selectors and effects to keep cross-module data flow predictable instead of scattering logic through components.',
        'Kept asynchronous state transitions explicit so multi-step workflows remained easier to reason about.',
      ],
      constraints: [
        'Complexity came from workflow breadth across multiple modules, not from a single isolated screen.',
        'Async operations increased the risk of race conditions and state inconsistency.',
        'Needed the UI to remain dependable through status changes, approvals, and updates.',
      ],
      impact: [
        'Delivered state architecture spanning 5+ business modules.',
        'Supported complex asynchronous and multi-step arbitration workflows.',
        'Created clearer state ownership through dedicated stores, selectors, and effects.',
      ],
      visualLayers: [
        {
          name: 'Workflow layer',
          tag: 'Work items',
          items: ['Lifecycle states', 'Module coordination', 'Async actions'],
        },
        {
          name: 'State layer',
          tag: 'NgRx',
          items: ['Store design', 'Selectors', 'Effects'],
        },
        {
          name: 'Reliability layer',
          tag: 'Trust',
          items: ['Async coordination', 'Predictable transitions', 'Explicit state ownership'],
        },
      ],
      snapshot: [
        {
          label: 'Role',
          value: 'Designed and maintained the NgRx state model supporting shipped workflow behavior.',
        },
        {
          label: 'Core problem',
          value: 'Managing complex arbitration workflow state across 5+ interconnected modules.',
        },
        {
          label: 'Architecture',
          value: 'Dedicated stores, selectors, and effects for asynchronous, multi-step flows.',
        },
      ],
    },
    {
      slug: 'ngx-hyperpay',
      name: 'ngx-hyperpay',
      status: 'Open source',
      role: 'Library Author',
      summary:
        'Published and maintain an open-source Angular library for HyperPay COPYandPAY integration, available through npm and GitHub.',
      contribution:
        'Created a configurable Angular package with typed input configuration and callback handling for resource paths and payment IDs.',
      outcome:
        'Turned a recurring integration need into an installable open-source package instead of a one-off implementation.',
      proofNote: 'public repo — go ahead, check the code',
      stack: ['Angular', 'TypeScript', 'npm', 'Open Source'],
      caseStudyIntro:
        'A different kind of proof than the rest of this page: public code you can actually go read, not just a case study I’ve written about.',
      challenge:
        'Make HyperPay integration easier for Angular developers by turning repeated integration work into a configurable package.',
      context:
        'Public package documentation separates browser integration from sensitive checkout creation and payment verification on the backend.',
      built: [
        'Published an Angular library for HyperPay payment gateway integration.',
        'Designed typed input configuration and callback handling for integration data.',
        'Maintained npm packaging, unit-test infrastructure, and automated semantic releases.',
      ],
      decisions: [
        'Treated the integration as a product for developers, not just a hidden internal utility.',
        'Used typed configuration to make the package safer and easier to adopt.',
        'Published to npm so it could provide value beyond a single codebase.',
      ],
      constraints: [
        'Needed to balance ease of adoption with the realities of payment gateway integration.',
        'Open-source packaging required cleaner abstraction than product-specific code usually allows.',
        'Resume source does not include adoption metrics, so the case study focuses on scope and intent rather than unsupported numbers.',
      ],
      impact: [
        'Provided an installable integration path for Angular developers using HyperPay.',
        'Extended frontend work beyond application UI into reusable ecosystem tooling.',
        'Demonstrated product thinking applied to developer experience.',
      ],
      visualLayers: [
        {
          name: 'Gateway layer',
          tag: 'Payments',
          items: ['COPYandPAY', 'Configuration', 'Callback handling'],
        },
        {
          name: 'Package layer',
          tag: 'DX',
          items: ['npm distribution', 'Reusable setup', 'Open source'],
        },
        {
          name: 'Community layer',
          tag: 'Reach',
          items: ['Angular teams', 'Public repository', 'Shared tooling'],
        },
      ],
      snapshot: [
        {
          label: 'Role',
          value: 'Published and maintained the package as an open-source library author.',
        },
        {
          label: 'Shape of the work',
          value: 'Library design, typed configuration, packaging, and npm availability.',
        },
        {
          label: 'Why it matters',
          value: 'Shows reusable systems thinking beyond product-specific screens.',
        },
      ],
    },
  ],
  resume: {
    downloadHref: withBase('/mohamed-abouelnasr-resume.pdf'),
    cards: [
      {
        label: 'Education',
        value: 'BSc Computer Science',
        detail: 'University of Northampton, Class A with Honours',
      },
      {
        label: 'Education',
        value: 'BSc Computer Science',
        detail: 'Arab Academy for Science, Technology & Maritime Transport, GPA 3.54 / 4 (Honours)',
      },
      {
        label: 'Selected open source',
        value: 'ngx-hyperpay',
        detail: 'Published Angular integration library available on npm and GitHub.',
        href: 'https://github.com/MagdyAbouelnasr/ngx-hyperpay',
      },
      {
        label: 'GitHub',
        value: 'github.com/MagdyAbouelnasr',
        href: 'https://github.com/MagdyAbouelnasr',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/mohamed-abouelnasr/',
        href: 'https://www.linkedin.com/in/mohamed-abouelnasr/',
      },
      {
        label: 'Portfolio',
        value: 'mmabouelnasr-portifolio.vercel.app',
        href: 'https://mmabouelnasr-portifolio.vercel.app/',
      },
    ],
  },
  contact: {
    email: 'mmabouelnasr@gmail.com',
    phone: '+20 100 421 5967',
    linkedin: 'https://www.linkedin.com/in/mohamed-abouelnasr/',
    github: 'https://github.com/MagdyAbouelnasr',
    invitation:
      'I am open to senior frontend and frontend software-engineering roles where Angular architecture, reactive state, and dependable product delivery matter.',
    preferences: [
      'Senior frontend roles with meaningful product complexity.',
      'Products with complex workflows, bilingual interfaces, or high-traffic user journeys.',
      'Projects that need clearer workflows, stronger state architecture, or more polished UX execution.',
      'Teams that value systems thinking, clear collaboration, and dependable delivery.',
    ],
  },
}
