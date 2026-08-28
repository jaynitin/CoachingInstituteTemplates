import { createContext, useContext, useEffect } from 'react'
import institute from '../config/institute.json'

const InstituteContext = createContext(institute)

// Maps every key in institute.theme -> a CSS custom property.
// Add a new theme key to institute.json and it's automatically
// available as var(--color-xxx) / var(--font-xxx) with zero code changes.
const THEME_KEY_MAP = {
  colorPrimary: '--color-primary',
  colorPrimaryDark: '--color-primary-dark',
  colorAccent: '--color-accent',
  colorHighlight: '--color-highlight',
  colorInk: '--color-ink',
  colorPaper: '--color-paper',
  colorMuted: '--color-muted',
  fontDisplay: '--font-display',
  fontBody: '--font-body',
  fontMono: '--font-mono'
}

export function InstituteProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement
    Object.entries(institute.theme || {}).forEach(([key, value]) => {
      const cssVar = THEME_KEY_MAP[key]
      if (cssVar) root.style.setProperty(cssVar, value)
    })
    document.title = `${institute.instituteName} — ${institute.tagline}`
  }, [])

  return (
    <InstituteContext.Provider value={institute}>
      {children}
    </InstituteContext.Provider>
  )
}

export const useInstitute = () => useContext(InstituteContext)
