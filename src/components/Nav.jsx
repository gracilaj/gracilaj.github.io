import { useRef, useCallback } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { experiences } from '../data/experience'
import { SectionScrollLink } from './SectionScrollLink'

const sectionLinks = [
  { id: 'objective', label: 'Objective' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'systems', label: 'Systems' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const navMobileRef = useRef(null)
  const closeMobileMenu = useCallback(() => {
    navMobileRef.current?.removeAttribute('open')
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <span className="logo-mark-box" aria-hidden="true">
            <span className="logo-mark-lines">
              <span />
              <span />
              <span />
            </span>
          </span>
          <span className="logo-text">JG</span>
        </Link>
        <nav className="nav-primary" aria-label="Primary">
          {sectionLinks.map(({ id, label }) => (
            <SectionScrollLink key={id} sectionId={id} className="nav-link">
              {label}
            </SectionScrollLink>
          ))}
        </nav>
        <details className="nav-roles nav-roles-desktop">
          <summary className="nav-roles-summary">Roles</summary>
          <div className="nav-roles-panel">
            {experiences.map((job) => (
              <NavLink
                key={job.id}
                to={`/experience/${job.id}`}
                className={({ isActive }) =>
                  `nav-roles-item${isActive ? ' is-active' : ''}`
                }
              >
                <img
                  className="nav-roles-logo"
                  src={job.logo}
                  alt=""
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                />
                <span className="nav-roles-text">
                  <span className="nav-roles-company">{job.company}</span>
                  <span className="nav-roles-role">{job.role}</span>
                </span>
              </NavLink>
            ))}
          </div>
        </details>
        <details ref={navMobileRef} className="nav-mobile">
          <summary className="nav-mobile-trigger" aria-label="Open menu">
            <span className="nav-mobile-bars" aria-hidden="true" />
          </summary>
          <div className="nav-mobile-panel">
            <nav aria-label="Mobile primary">
              {sectionLinks.map(({ id, label }) => (
                <SectionScrollLink
                  key={id}
                  sectionId={id}
                  className="nav-mobile-link"
                  onActivate={closeMobileMenu}
                >
                  {label}
                </SectionScrollLink>
              ))}
            </nav>
            <p className="nav-mobile-heading">Roles</p>
            <nav aria-label="Mobile roles">
              {experiences.map((job) => (
                <NavLink
                  key={job.id}
                  to={`/experience/${job.id}`}
                  className={({ isActive }) =>
                    `nav-mobile-role${isActive ? ' is-active' : ''}`
                  }
                  onClick={closeMobileMenu}
                >
                  <img
                    className="nav-roles-logo"
                    src={job.logo}
                    alt=""
                    width={32}
                    height={32}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="nav-roles-text">
                    <span className="nav-roles-company">{job.company}</span>
                    <span className="nav-roles-role">{job.role}</span>
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  )
}
