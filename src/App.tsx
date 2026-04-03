import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/header/header'
import { AppContainer } from './App.styles'
import { AboutMePage } from './pages/about-me-page'
import { CollaboratePage } from './pages/collaborate-page'
import { ContactPage } from './pages/contact-page'
import { HomePage } from './pages/home-page'
import { trackPageView } from './lib/analytics'

export function App() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/collaborate" element={<CollaboratePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppContainer>
  )
}
