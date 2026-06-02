import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Therapies from './pages/Therapies'
import Workshops from './pages/Workshops'
import Contact from './pages/Contact'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [introFading, setIntroFading] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  const handleIntroFinish = () => {
    setIntroFading(true)
    setContentVisible(true)
    setTimeout(() => setShowIntro(false), 700)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className={`app-fade-wrapper min-h-[calc(100vh-5rem)] bg-surface transition-opacity transition-transform duration-[800ms] ease-out ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
        }`}
      >
        <Header />
        <main className="min-h-[calc(100vh-5rem)] bg-surface">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terapiler" element={<Therapies />} />
            <Route path="/atolyeler" element={<Workshops />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {showIntro && <Intro onFinish={handleIntroFinish} isFading={introFading} />}
    </BrowserRouter>
  )
}

export default App
