/** Hash link to a section on the home page (respects Vite `base` on GitHub Pages). */
export function homeSectionHref(sectionId) {
  const id = sectionId.replace(/^#/, '')
  return `${import.meta.env.BASE_URL}#${id}`
}
