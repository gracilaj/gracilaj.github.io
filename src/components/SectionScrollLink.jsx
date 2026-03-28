import { useNavigate, useLocation } from 'react-router-dom'

export function SectionScrollLink({
  sectionId,
  className = '',
  children,
  onActivate,
  isActive = false,
  'aria-label': ariaLabel,
}) {
  const navigate = useNavigate()
  const location = useLocation()
  const cls = [className, isActive && 'is-active'].filter(Boolean).join(' ')

  return (
    <a
      href="#"
      className={cls}
      aria-label={ariaLabel}
      aria-current={isActive ? 'location' : undefined}
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
