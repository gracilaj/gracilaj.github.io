import { useState, useEffect } from 'react'

const HERO_SCROLL_MAX = 72
const SECTION_LINE_PX = 108

/**
 * Which `#sectionId` is active while on `/` (scroll-spy for sticky header).
 * Returns null on other routes or when scrolled within the hero band.
 * @param {string[]} sectionIds — stable array reference (e.g. module constant).
 */
export function useActiveSection(sectionIds, pathname) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (pathname !== '/') {
      setActiveId(null)
      return
    }

    const compute = () => {
      if (typeof window === 'undefined') return
      if (!sectionIds.length) {
        setActiveId(null)
        return
      }
      if (window.scrollY < HERO_SCROLL_MAX) {
        setActiveId(null)
        return
      }
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= SECTION_LINE_PX) current = id
      }
      setActiveId(current)
    }

    compute()

    let ticking = false
    const onScrollOrResize = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        compute()
      })
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    const ro = new ResizeObserver(onScrollOrResize)
    ro.observe(document.documentElement)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      ro.disconnect()
    }
  }, [pathname, sectionIds])

  return activeId
}
