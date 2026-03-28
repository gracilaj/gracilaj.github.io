import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (import.meta.env.PROD && !window.location.hash) {
  window.history.replaceState(
    null,
    '',
    `${window.location.pathname}${window.location.search}#/`,
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
