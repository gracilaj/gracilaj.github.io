/**
 * Core profile — edit here to update headline, objective, contact, and education.
 */
export const profile = {
  name: 'Jake Gracila',
  firstName: 'Jake',
  title: 'Full-Stack Web Developer',
  tagline: '6+ years building web applications, APIs, and integrations.',
  heroBio: `Full-Stack Web Developer with 6 years of experience building web applications, APIs, and integrations. Collaborative, solution-driven, and focused on shipping reliable software.`,
  /** Swap this file in /public for your own photo */
  heroImage: '/profile.jpg',
  heroImageAlt: 'Jake Gracila',
  objective: `Full-Stack Web Developer with 6 years of experience developing and integrating multi-faceted applications to facilitate smooth business operations. Solution-driven Full-Stack Web Developer adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction.`,
  /** Portfolio source on GitHub */
  githubRepo: 'https://github.com/gracilaj/gracilaj.github.io',
  /**
   * PDF in /public → /gracila.pdf. Replace the file in public/ (or rerun
   * `node scripts/write-placeholder-resume.mjs` for a tiny placeholder). Commit the PDF so deploy includes it.
   */
  resume: {
    url: '/gracila.pdf',
    fileName: 'Jake-Gracila-Resume.pdf',
  },
  contact: {
    location: 'Dasmariñas, Cavite',
    email: 'gracilaj@gmail.com',
    phone: '09265901105',
  },
  education: {
    degree: 'Bachelor of Science in Information Technology',
    school: 'STI Dasmariñas College',
    years: '2016 – 2020',
  },
  internship: {
    organization: 'De La Salle Medical and Health Sciences Institute',
    location: 'Dasmariñas, Cavite',
    period: 'Dec 2019 – Mar 2020',
  },
}
