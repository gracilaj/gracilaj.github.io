import { Link } from 'react-router-dom'
import { Section } from '../components/Section'
import { experiences } from '../data/experience'

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Work history" title="Experience">
      <p className="section-lead">
        Each role links to a page with responsibilities and related systems—use the{' '}
        <strong>Roles</strong> menu or a card below.
      </p>
      <ul className="experience-grid">
        {experiences.map((job) => (
          <li key={job.id}>
            <article className="experience-card">
              <div className="experience-card-head">
                <img
                  className="experience-logo"
                  src={job.logo}
                  alt=""
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                />
                <div className="experience-card-head-main">
                  <div className="experience-card-top">
                    <span className="experience-tag">{job.tag}</span>
                    <span className="experience-period">{job.period}</span>
                  </div>
                  <h3 className="experience-company">{job.company}</h3>
                </div>
              </div>
              <p className="experience-role">{job.role}</p>
              <p className="experience-meta">
                {job.location} · {job.arrangement}
              </p>
              <p className="experience-summary">{job.summary}</p>
              <Link to={`/experience/${job.id}`} className="experience-link">
                Read job description →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
