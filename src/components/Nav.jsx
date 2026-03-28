import { useRef, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { experiences } from '../data/experience'
import { SectionScrollLink } from './SectionScrollLink'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionLinks = [
  { id: 'objective', label: 'Objective' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'systems', label: 'Systems' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = sectionLinks.map((s) => s.id)

export function Nav() {
  const location = useLocation()
  const navMobileRef = useRef(null)
  const closeMobileMenu = useCallback(() => {
    navMobileRef.current?.removeAttribute('open')
  }, [])
  const activeSectionId = useActiveSection(SECTION_IDS, location.pathname)
  const onExperiencePage = location.pathname.startsWith('/experience')

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `logo${isActive ? ' is-active' : ''}`}
          onClick={closeMobileMenu}
        >
          <span className="logo-mark-box" aria-hidden="true">
            <span className="logo-mark-lines">
              <span />
              <span />
              <span />
            </span>
          </span>
          <span className="logo-text">JG</span>
        </NavLink>
        <nav className="nav-primary" aria-label="Primary">
          {sectionLinks.map(({ id, label }) => (
            <SectionScrollLink
              key={id}
              sectionId={id}
              className="nav-link"
              isActive={activeSectionId === id}
            >
              {label}
            </SectionScrollLink>
          ))}
        </nav>
        <details className="nav-roles nav-roles-desktop">
          <summary
            className={`nav-roles-summary${onExperiencePage ? ' is-active-route' : ''}`}
          >
            Roles
          </summary>
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
                  isActive={activeSectionId === id}
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
