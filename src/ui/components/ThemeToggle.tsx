import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [dark, setDark] = useState(() => document.documentElement.dataset.bsTheme === 'dark')

  useEffect(() => {
    document.documentElement.dataset.bsTheme = dark ? 'dark' : 'light'
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
    try { localStorage.setItem('exex-theme', dark ? 'dark' : 'light') } catch { /* La elección funciona aunque el navegador no permita guardarla. */ }
  }, [dark])

  return (
    <button type="button" className="theme-toggle" aria-label="Modo oscuro" aria-pressed={dark}
      title={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} onClick={() => setDark((current) => !current)}>
      <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
    </button>
  )
}
