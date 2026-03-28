/**
 * Work history — each entry is its own module for routing (`/experience/:id`).
 * Add an entry here; a detail page is linked automatically from the home page.
 * `logo` — path under /public (replace SVG in public/logos/ with your employer mark if you have one).
 */
export const experiences = [
  {
    id: 'lucky8-star-quest-inc',
    logo: '/logos/lucky8-star-quest-inc.svg',
    company: 'Lucky8 Star Quest Inc.',
    tag: 'System Provider',
    location: 'Mandaluyong City',
    arrangement: 'On-site',
    period: 'Oct 2020 – Oct 2023',
    role: 'Full Stack Developer',
    summary:
      'Full-stack delivery for gaming and compliance systems, APIs, and internal tools in an on-site role.',
    responsibilities: [
      'Develop and maintain web services and user interfaces.',
      'Contribute to front-end and back-end development.',
      'Build new product features.',
      'Integrate with partner organizations through APIs.',
      'Test and troubleshoot software, and resolve defects.',
      'Collaborate with other departments on projects and sprint work.',
    ],
  },
  {
    id: 'paychat-inc',
    logo: '/logos/paychat-inc.svg',
    company: 'Paychat Inc.',
    tag: 'Financial Company',
    location: 'Pasig City',
    arrangement: 'On-site',
    period: 'Oct 2023 – Apr 2024',
    role: 'Mid Web Developer',
    summary:
      'Mid-level role with responsibility for development and deployment of a financial services product.',
    responsibilities: [
      'Develop and maintain web services and user interfaces.',
      'Contribute to front-end and back-end development.',
      'Build new product features and APIs.',
      'Test and troubleshoot software, and resolve defects.',
      'Manage application deployment, configuration, and environments.',
    ],
  },
  {
    id: 'gametime-solutions-inc',
    logo: '/logos/gametime-solutions-inc.svg',
    company: 'GameTime Solutions Inc.',
    tag: 'Game Provider',
    location: 'Mandaluyong City',
    arrangement: 'Work from home',
    period: 'Apr 2024 – Jan 2025',
    role: 'Full Stack Developer',
    summary:
      'Remote full-stack work on gaming platforms, betting flows, and reporting systems.',
    responsibilities: [
      'Develop and maintain web services and user interfaces.',
      'Contribute to front-end and back-end development.',
      'Build new product features.',
      'Integrate with partner organizations through APIs.',
      'Test and troubleshoot software, and resolve defects.',
      'Collaborate with other departments on projects and sprint work.',
    ],
  },
  {
    id: 'ae-solutions-inc',
    logo: '/logos/ae-solutions-inc.svg',
    company: 'AE Solutions Inc.',
    tag: 'Freelance',
    location: 'Metro Manila',
    arrangement: 'Work from home',
    period: 'Jan 2025 – Feb 2026',
    role: 'Full Stack Developer',
    summary:
      'Freelance full-stack work with AE Solutions Inc.—HRIS web applications, integrations, and APIs, plus gaming-platform delivery, including features and APIs for Digiluck Inc. and other operators.',
    responsibilities: [
      'Build and extend HRIS-focused web applications, integrations, and workflows.',
      'Deliver gaming features, operator-facing tools, and APIs, including for Digiluck Inc.',
      'Roll out new games and platform features; maintain existing services.',
      'Implement full-stack changes aligned with client requirements.',
      'Test, troubleshoot, and resolve defects; work with stakeholders on delivery and quality.',
    ],
  },
  {
    id: 'prople-bpo-inc',
    logo: '/logos/prople-bpo-inc.svg',
    company: 'Prople BPO Inc.',
    tag: 'BPO',
    location: 'Metro Manila',
    arrangement: 'Hybrid',
    period: 'Feb 2026 – Present',
    role: 'Full Stack Developer',
    summary:
      'Full-stack developer at a BPO, building front- and back-end features to meet system requirements for HRIS, inventory, and other internal and client-facing applications.',
    responsibilities: [
      'Design and implement front- and back-end features based on documented system requirements.',
      'Develop and maintain HRIS, inventory, and related operational systems.',
      'Support additional internal and client projects with reliable, scalable web solutions.',
      'Integrate services, APIs, and data flows as the business requires.',
      'Test, debug, and refine applications with input from stakeholders.',
    ],
  },
]

export function getExperienceById(id) {
  return experiences.find((e) => e.id === id) ?? null
}
