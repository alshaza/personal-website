import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/header/header'
import { AppContainer } from './App.styles'
import { AboutMePage } from './pages/about-me-page'
import { CollaboratePage } from './pages/collaborate-page'
import { CareerFinderPage } from './pages/career-finder-page'
import { HomePage } from './pages/home-page'
import { trackPageView } from './lib/analytics'

export function App() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname)
    if (location.hash === '#contact') {
      const timer = window.setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => { window.clearTimeout(timer); }
    } 
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/collaborate" element={<CollaboratePage />} />
        <Route path="/find-your-path" element={<CareerFinderPage />} />
        <Route path="/contact" element={<Navigate to="/about-me#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppContainer>
  )
}
