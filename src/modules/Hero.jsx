import { profile } from '../data/profile'
import { SectionScrollLink } from '../components/SectionScrollLink'

const titleParts = profile.title.trim().split(/\s+/)
const titleAccent = titleParts.pop() ?? ''
const titleLead = titleParts.join(' ')

const statChips = [
  { ix: '01', value: '5+', label: 'Years Experience' },
  { ix: '02', value: 'Full-stack', label: 'Web & APIs' },
  { ix: '03', value: 'LAMP', label: 'Core stack' },
  { ix: '04', value: 'MERN', label: 'Core stack' },
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
            <SectionScrollLink sectionId="contact" className="btn btn-primary">
              Get in touch
            </SectionScrollLink>
            <SectionScrollLink sectionId="experience" className="btn btn-ghost btn-with-icon">
              <span className="btn-icon-play" aria-hidden="true" />
              Browse Experience
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
