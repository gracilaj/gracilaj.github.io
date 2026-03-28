import { profile } from '../data/profile'
import { SectionScrollLink } from '../components/SectionScrollLink'

const titleParts = profile.title.trim().split(/\s+/)
const titleAccent = titleParts.pop() ?? ''
const titleLead = titleParts.join(' ')

const statChips = [
  { ix: '01', value: '6+', label: 'Years Experience' },
  { ix: '02', value: 'Full-stack', label: 'Web & APIs' },
]

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg-accent" aria-hidden="true" />
      <div className="hero-grid-deco" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Portfolio</p>
          <h1 id="hero-title" className="hero-headline">
            <span className="hero-greeting">
              Hi, I&apos;m {profile.firstName}!
            </span>
            <span className="hero-title-lines">
              <span className="hero-title-line">{titleLead}</span>{' '}
              <span className="hero-title-accent">{titleAccent}</span>
            </span>
          </h1>
          <p className="hero-lead">{profile.heroBio}</p>
          <div className="hero-actions">
            <SectionScrollLink
              sectionId="contact"
              className="btn btn-primary btn-hero-action"
              aria-label="Get in touch"
            >
              <span className="btn-label-full">Get in touch</span>
              <span className="btn-label-short">Contact</span>
            </SectionScrollLink>
            <a
              href={profile.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              download={profile.resume.fileName}
              className="btn btn-ghost btn-with-icon btn-hero-action"
              aria-label="Download resume"
            >
              <span className="btn-icon-download" aria-hidden="true" />
              <span className="btn-label-full">Download resume</span>
              <span className="btn-label-short">Résumé</span>
            </a>
            <SectionScrollLink
              sectionId="experience"
              className="btn btn-ghost btn-with-icon btn-hero-action"
              aria-label="Browse experience"
            >
              <span className="btn-icon-play" aria-hidden="true" />
              <span className="btn-label-full">Browse Experience</span>
              <span className="btn-label-short">Experience</span>
            </SectionScrollLink>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-diagonal" aria-hidden="true" />
          <div className="hero-art">
            <span className="hero-deco-arc" aria-hidden="true" />
            <span className="hero-deco-dot hero-deco-dot--a" aria-hidden="true" />
            <span className="hero-deco-dot hero-deco-dot--b" aria-hidden="true" />
            <figure className="hero-figure">
              <span className="hero-photo-offset" aria-hidden="true" />
              <div className="hero-hex-frame">
                <img
                  src={profile.heroImage}
                  alt={profile.heroImageAlt}
                  className="hero-photo"
                  width={640}
                  height={760}
                  decoding="async"
                />
                <span className="hero-photo-duotone" aria-hidden="true" />
                <svg
                  className="hero-hex-svg"
                  viewBox="0 0 280 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <polygon
                    points="140,22 248,84 248,236 140,298 32,236 32,84"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    strokeDasharray="36 22"
                  />
                </svg>
              </div>
            </figure>
            <ul className="hero-stat-chips">
              {statChips.map(({ ix, value, label }) => (
                <li key={ix} className="hero-stat-chip">
                  <span className="hero-chip-ix">{ix}</span>
                  <span className="hero-chip-body">
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
