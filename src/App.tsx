import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './HomePage'
import ProvidersPage from './ProvidersPage'
import ContactPage from './ContactPage'

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
        <Route path="/providers" element={<ProvidersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}
