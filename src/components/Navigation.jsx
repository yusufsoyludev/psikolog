import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Flower2 } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/hakkimda', label: 'Hakkımda' },
    { path: '/terapiler', label: 'Terapiler' },
    { path: '/atolyeler', label: 'Atölyeler' },
    { path: '/iletisim', label: 'İletişim' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          isScrolled 
            ? 'bg-ivory/90 backdrop-blur-xl shadow-soft py-4' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-padding flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Flower2 className={`w-7 h-7 transition-colors duration-500 ${
              isScrolled ? 'text-deep-botanical' : 'text-deep-botanical'
            }`} strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className={`font-serif text-xl tracking-wide transition-colors duration-500 ${
                isScrolled ? 'text-text-dark' : 'text-text-dark'
              }`}>
                Bensu Donat
              </span>
              <span className={`font-sans text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                isScrolled ? 'text-text-light' : 'text-text-light'
              }`}>
                Klinik Psikolog
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-sans text-sm tracking-wide transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-deep-botanical' 
                    : 'text-text-soft hover:text-text-dark'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-deep-botanical"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 bg-deep-botanical text-white font-sans text-sm tracking-wide rounded-full hover:bg-botanical-green transition-all duration-500 hover:shadow-premium"
            >
              Randevu Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-dark"
            aria-label="Menüyü Aç/Kapat"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-ivory/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`font-display text-3xl ${
                      isActive(link.path) ? 'text-deep-botanical' : 'text-text-dark'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/iletisim"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-deep-botanical text-white font-sans text-lg tracking-wide rounded-full mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Randevu Al
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation