import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './HomePage'
import ProvidersPage from './ProvidersPage'
import ContactPage from './ContactPage'
import ResourcesPage from './ResourcesPage'
import ServicesPage from './ServicesPage'
import HormonePage from './HormonePage'
import IVPage from './IVPage'
import PeptidePage from './PeptidePage'
import AestheticsPage from './AestheticsPage'
import ChiropracticPage from './ChiropracticPage'
import PrivacyPolicyPage from './PrivacyPolicyPage'
import AccessibilityPage from './AccessibilityPage'

/** Scroll to a #hash target after the page renders (links like /#contact). */
function ScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.slice(1)
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    // wait a tick for the route's content to mount
    const t = setTimeout(scroll, 60)
    return () => clearTimeout(t)
  }, [hash, pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/hormone" element={<HormonePage />} />
        <Route path="/services/iv" element={<IVPage />} />
        <Route path="/services/peptide" element={<PeptidePage />} />
        <Route path="/services/aesthetics" element={<AestheticsPage />} />
        <Route path="/services/chiropractic" element={<ChiropracticPage />} />
        <Route path="/providers" element={<ProvidersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
      </Routes>
    </>
  )
}
