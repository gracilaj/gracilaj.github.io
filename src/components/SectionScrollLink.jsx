import { useNavigate, useLocation } from 'react-router-dom'

export function SectionScrollLink({ sectionId, className, children, onActivate }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <a
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault()
        if (location.pathname === '/') {
          document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          navigate('/', { state: { scrollTo: sectionId } })
        }
        onActivate?.()
      }}
    >
      {children}
    </a>
  )
}
