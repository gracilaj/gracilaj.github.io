import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import { getExperienceById } from '../data/experience'
import { getSystemsByExperienceId } from '../data/systems'

export function ExperienceDetail() {
  const navigate = useNavigate()
  const { experienceId } = useParams()
  const job = getExperienceById(experienceId)
  const related = job ? getSystemsByExperienceId(job.id) : []

  if (!job) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="experience-detail">
      <div className="container narrow">
        <button
          type="button"
          className="back-link"
          onClick={() => navigate('/', { state: { scrollTo: 'experience' } })}
        >
          ← Back to experience
        </button>
        <header className="experience-detail-header">
          <div className="experience-detail-brand">
            <img
              className="experience-detail-logo"
              src={job.logo}
              alt=""
              width={72}
              height={72}
              decoding="async"
            />
            <div className="experience-detail-brand-text">
              <span className="experience-tag">{job.tag}</span>
              <h1 className="experience-detail-title">{job.company}</h1>
            </div>
          </div>
          <p className="experience-detail-role">{job.role}</p>
          <p className="experience-detail-meta">
            {job.period} · {job.location} · {job.arrangement}
          </p>
          <p className="prose experience-detail-summary">{job.summary}</p>
        </header>
        <section className="experience-detail-section" aria-labelledby="resp-heading">
          <h2 id="resp-heading" className="detail-h2">
            Responsibilities
          </h2>
          <ul className="bullet-list">
            {job.responsibilities.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
        {related.length > 0 && (
          <section className="experience-detail-section" aria-labelledby="sys-heading">
            <h2 id="sys-heading" className="detail-h2">
              Related systems
            </h2>
            <ul className="related-systems">
              {related.map((s) => (
                <li key={s.id}>
                  <span className="related-title">{s.title}</span>
                  <p className="related-desc">{s.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  )
}
