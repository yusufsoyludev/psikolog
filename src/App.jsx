import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import IntroAnimation from './components/IntroAnimation'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Therapies from './pages/Therapies'
import Workshops from './pages/Workshops'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
    if (hasSeenIntro) {
      setShowIntro(false)
    }
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true')
    setShowIntro(false)
  }

  return (
    <div className="min-h-screen bg-ivory">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroAnimation key="intro" onComplete={handleIntroComplete} />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <ScrollToTop />
            <Navigation />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/hakkimda" element={<About />} />
                <Route path="/terapiler" element={<Therapies />} />
                <Route path="/atolyeler" element={<Workshops />} />
                <Route path="/iletisim" element={<Contact />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App