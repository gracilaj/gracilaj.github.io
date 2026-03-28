import { useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Scroll to a section after navigating home with { state: { scrollTo: 'section-id' } }.
 */
export function ScrollToHash() {
  const location = useLocation()
  const navigate = useNavigate()
  const scrollTo = location.state?.scrollTo

  useLayoutEffect(() => {
    if (!scrollTo) return
    const el = document.getElementById(scrollTo)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    navigate(
      { pathname: location.pathname, hash: location.hash, search: location.search },
      { replace: true, state: {} },
    )
  }, [scrollTo, location.pathname, location.hash, location.search, navigate])

  return null
}
