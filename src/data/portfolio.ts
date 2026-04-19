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
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'experience', label: 'Experience' },
  { id: 'credentials', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Mohamed Abouelnasr',
    role: 'Senior Frontend Engineer with 4+ years building portals, admin dashboards, and workflow-heavy applications.',
    location: 'Alexandria, Egypt',
    valueStatement:
      'Strong in Angular, TypeScript, RxJS, and NgRx, with end-to-end frontend delivery from Figma and requirements through production.',
    summary:
      'Experienced across Saudi, Egyptian, and Swiss client environments, including bilingual Arabic/English products with RTL support, component architecture, state management, API integration, and release quality. Currently expanding into React, Next.js, and system design.',
    signals: [
      {
        label: 'Experience',
        value: '4+ years shipping portals, dashboards, and workflow-heavy applications.',
      },
      {
        label: 'Delivery style',
        value: 'From Figma and requirements through production delivery.',
      },
      {
        label: 'Core focus',
        value: 'RTL/LTR interfaces, state architecture, API integration, and release quality.',
      },
    ],
  },
  about: {
    summary:
      'I have spent the last 4+ years building large-scale portals, admin dashboards, and workflow-heavy applications. The strongest fit for my work is frontend delivery that needs reusable structure, dependable state handling, bilingual support, and stable production behavior.',
    howIWork: [
      'Translate requirements into reusable components, scalable routing, and maintainable frontend structure.',
      'Handle loading, error, and empty states as part of the shipped user journey.',
      'Debug reactive flows and production issues in a structured way when behavior becomes complex.',
    ],
    strengths: [
      'Angular delivery across portals, dashboards, onboarding flows, and workflow-heavy products.',
      'State architecture using RxJS and NgRx for async, multi-step frontend flows.',
      'Bilingual Arabic/English interfaces with RTL support and shared translation patterns.',
      'Frontend delivery with API integration, code quality tooling, and E2E coverage.',
    ],
    productAreas: [
      'Saudi digital transformation',
      'Swiss agency products',
      'Egyptian port systems',
      'Case lifecycle workflows',
      'Commercial platforms',
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
        'Angular 13-21',
        'TypeScript',
        'JavaScript',
        'Reactive Forms',
        'Angular Router',
        'Angular Material',
        'PrimeNG',
        'Component architecture',
      ],
    },
    {
      title: 'State, async flows, and performance',
      summary:
        'Strongest where frontend reliability depends on good state design, reactive coordination, and predictable handling of async user flows.',
      items: [
        'NgRx',
        'RxJS',
        'Reactive flows',
        'Selectors and effects',
        'Loading and error states',
        'Signals',
        'Release quality',
      ],
    },
    {
      title: 'Interaction, testing, and quality',
      summary:
        'Testing, linting, and release discipline are part of the frontend work, especially for workflow-heavy products.',
      items: [
        'Playwright',
        'Jest',
        'Jasmine',
        'Karma',
        'ESLint',
        'Prettier',
        'Husky',
        'Semantic release',
      ],
    },
    {
      title: 'Collaboration and delivery',
      summary:
        'Comfortable moving from Figma and requirements into shipped UI, API integration, and stable user journeys across mixed client environments.',
      items: [
        'REST APIs',
        'JWT',
        'Swagger',
        'Google Maps API',
        'GitLab CI/CD',
        'Figma handoff',
        'Linux CLI',
        'Bilingual i18n',
      ],
    },
  ],
  experience: [
    {
      company: 'INNOSOFT (previously Solutions by 42)',
      period: 'Apr 2024 - Present',
      role: 'Frontend Engineer | Saudi digital transformation and custom software delivery',
      context:
        'Building production frontend systems for Saudi client environments, with emphasis on reusable Angular architecture, bilingual product support, and release quality.',
      highlights: [
        'Built the Tagdeer platform frontend from scratch across landing pages, onboarding flows, dashboards, offers, and routing structure.',
        'Led frontend delivery for Tahkeem end-to-end, including NgRx store design, selectors, and effects for complex case lifecycle workflows across 5+ modules.',
        'Standardized bilingual Arabic/English patterns with RTL support across shared modules, supporting GCC-ready delivery.',
        'Integrated Google Maps browsing, improved team code quality with ESLint, Prettier, and Husky, and added Playwright coverage for critical flows.',
      ],
    },
    {
      company: 'MODESO',
      period: 'Aug 2023 - Apr 2024',
      role: 'Full-Stack Software Engineer | Swiss agency shipping web and mobile products',
      context:
        'Worked in a fast-paced agency setting, turning requirements into responsive Angular user flows and solving production reliability issues across multiple client products.',
      highlights: [
        'Delivered reusable Angular screens and user flows end-to-end across multiple products.',
        'Implemented reactive data flows with RxJS to keep forms and screens consistent during async operations.',
        'Integrated frontend features with backend REST APIs while covering loading, empty, and error states for stable production journeys.',
        'Root-caused complex RxJS race conditions that caused intermittent data loss in production.',
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
        'Integrated frontend flows with backend services while maintaining stable handling for loading, empty, and error states.',
        'Supported validation and test execution for key flows ahead of releases in system test environments.',
      ],
    },
  ],
  projects: [
    {
      slug: 'tagdeer-platform',
      name: 'Tagdeer Platform',
      status: 'Production',
      role: 'Frontend Engineer',
      summary:
        'Built the full frontend of a Saudi commercial platform spanning onboarding, dashboards, maps, and offer flows with bilingual RTL/LTR support.',
      contribution:
        'Owned the frontend from zero, shaping reusable components, routing structure, onboarding flows, dashboard experiences, and map-driven browsing.',
      outcome:
        'Delivered a production frontend with bilingual support, scalable Angular structure, and location-based discovery using Google Maps.',
      stack: ['Angular 17', 'TypeScript', 'RxJS', 'Google Maps API', 'Angular Material', 'i18n'],
      caseStudyIntro:
        'This project is the clearest example of full-platform frontend ownership: not a single feature, but the UI system for how users entered, explored, and navigated the product.',
      challenge:
        'Build a large frontend from scratch for a high-traffic commercial platform while keeping onboarding, dashboards, offer flows, and map-based browsing coherent in both Arabic and English.',
      context:
        'Delivered inside a Saudi product environment where interface clarity, responsive behavior, and bilingual support were all fundamental to adoption.',
      built: [
        'Landing pages, onboarding flows, dashboard surfaces, and offer experiences.',
        'Reusable Angular components and scalable routing to support platform growth.',
        'Map browsing connected to backend search endpoints, filters, and loading states.',
      ],
      decisions: [
        'Structured the app around reusable components and scalable routing instead of page-by-page assembly.',
        'Handled RTL and LTR as a core product requirement, not a late-stage patch.',
        'Connected map interactions, filters, and async search states so the browsing experience stayed responsive and legible.',
      ],
      constraints: [
        'Needed to serve Arabic and English audiences with consistent quality.',
        'Had to coordinate dashboards, forms, and location-based browsing within one coherent frontend system.',
        'Resume source does not provide public screenshots or traffic metrics, so the case study stays grounded in implemented scope rather than invented numbers.',
      ],
      impact: [
        'Delivered the frontend foundation for a production Saudi commercial platform.',
        'Enabled bilingual market reach through RTL/LTR support and shared translation patterns.',
        'Connected responsive UI filters and Google Maps interactions into a stable browsing flow.',
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
          value: 'Built the full frontend from scratch across user-facing and dashboard experiences.',
        },
        {
          label: 'Scope',
          value: 'Onboarding, dashboards, maps, offers, reusable components, scalable routing.',
        },
        {
          label: 'Delivery note',
          value: 'Bilingual Arabic/English support was treated as core architecture, not ornament.',
        },
      ],
    },
    {
      slug: 'tahkeem-case-lifecycle',
      name: 'Tahkeem Case Lifecycle Workflow',
      status: 'Production',
      role: 'Frontend Engineer',
      summary:
        'Designed and built NgRx state architecture for a complex case management product spanning 5+ modules and multiple async operations.',
      contribution:
        'Led frontend delivery end-to-end for the workflow layer, defining store structure, selectors, effects, and optimistic updates for multi-module case handling.',
      outcome:
        'Delivered a reliable state architecture with zero state corruption in production according to the resume source.',
      stack: ['Angular', 'NgRx', 'RxJS', 'TypeScript', 'REST APIs'],
      caseStudyIntro:
        'Tahkeem is the strongest example of system-level frontend work in the resume: the key challenge was keeping complex workflow state trustworthy across modules.',
      challenge:
        'Model a multi-module case lifecycle with asynchronous operations and optimistic updates while preventing inconsistent or corrupted state.',
      context:
        'Built for a workflow-heavy case management environment where frontend state accuracy affected the reliability of the whole product experience.',
      built: [
        'NgRx store structure, selectors, and effects for a complex case lifecycle.',
        'Frontend delivery patterns across 5+ modules with multiple async operations.',
        'Workflow handling designed to keep state predictable during user actions and server responses.',
      ],
      decisions: [
        'Used explicit NgRx architecture to make ownership of state transitions clear.',
        'Relied on selectors and effects to keep cross-module data flow predictable instead of scattering logic through components.',
        'Applied optimistic update patterns carefully to preserve speed without sacrificing correctness.',
      ],
      constraints: [
        'Complexity came from workflow breadth across multiple modules, not from a single isolated screen.',
        'Async operations increased the risk of race conditions and state inconsistency.',
        'Needed the UI to feel dependable under case lifecycle changes, approvals, and updates.',
      ],
      impact: [
        'Delivered an end-to-end frontend state architecture for a real production workflow system.',
        'Maintained zero state corruption in production based on resume-provided evidence.',
        'Created a stronger foundation for complex case management flows across modules.',
      ],
      visualLayers: [
        {
          name: 'Workflow layer',
          tag: 'Cases',
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
          items: ['Optimistic updates', 'Predictable transitions', 'No corruption'],
        },
      ],
      snapshot: [
        {
          label: 'Role',
          value: 'Led the workflow-facing frontend delivery from state model to shipped behavior.',
        },
        {
          label: 'Core problem',
          value: 'Managing complex case state across 5+ modules without creating brittle or inconsistent UX.',
        },
        {
          label: 'Result',
          value: 'Zero state corruption in production, as stated in the resume.',
        },
      ],
    },
    {
      slug: 'ngx-hyperpay',
      name: 'ngx-hyperpay',
      status: 'Open source',
      role: 'Library Author',
      summary:
        'Published an Angular library for HyperPay payment gateway integration with typed configuration and npm distribution for the MENA developer community.',
      contribution:
        'Created and published a reusable Angular package that wrapped payment gateway integration into a typed, configurable developer-facing library.',
      outcome:
        'Turned a recurring integration need into an installable open-source package instead of a one-off implementation.',
      stack: ['Angular', 'TypeScript', 'npm', 'Open Source'],
      caseStudyIntro:
        'This project shows a different kind of frontend work from the resume: packaging integration complexity into something other developers can adopt and reuse.',
      challenge:
        'Make HyperPay integration easier for Angular developers by turning integration details into a typed, configurable package.',
      context:
        'Rather than solving payment integration privately inside one product, the library was framed for reuse by the broader MENA Angular community.',
      built: [
        'Published an Angular library for HyperPay payment gateway integration.',
        'Designed typed APIs and configurable setup for developer usability.',
        'Packaged the work for npm distribution as an open-source contribution.',
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
          items: ['HyperPay integration', 'Configuration', 'Typed API'],
        },
        {
          name: 'Package layer',
          tag: 'DX',
          items: ['npm distribution', 'Reusable setup', 'Open source'],
        },
        {
          name: 'Community layer',
          tag: 'Reach',
          items: ['Angular teams', 'MENA focus', 'Shared tooling'],
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
        label: 'Certification',
        value: 'CAPM - PMI',
        detail: 'Certified Associate in Project Management currently in progress.',
      },
      {
        label: 'Development focus',
        value: 'React, Next.js, system design',
        detail: 'Actively studying patterns, state, performance, SSR, web security, and broader engineering scope.',
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
        value: 'mmabouelnasr-portfolio.netlify.app',
        href: 'https://mmabouelnasr-portfolio.netlify.app/',
      },
    ],
  },
  contact: {
    email: 'mmabouelnasr@gmail.com',
    phone: '+20 100 421 5967',
    linkedin: 'https://www.linkedin.com/in/mohamed-abouelnasr/',
    github: 'https://github.com/MagdyAbouelnasr',
    invitation:
      'I am interested in frontend roles where interface quality, system clarity, and dependable delivery all matter at the same time.',
    preferences: [
      'Frontend engineering roles with meaningful product complexity.',
      'Projects that need clearer workflows, stronger state architecture, or more polished UX execution.',
      'Teams that care about shipping quality, release stability, and frontend ownership.',
    ],
  },
}
