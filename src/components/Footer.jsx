import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flower2, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const navLinks = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/hakkimda', label: 'Hakkımda' },
    { path: '/terapiler', label: 'Terapiler' },
    { path: '/atolyeler', label: 'Atölyeler' },
    { path: '/iletisim', label: 'İletişim' },
  ]

  return (
    <footer className="bg-cream border-t border-soft-sage/20">
      <div className="section-padding premium-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Flower2 className="w-8 h-8 text-deep-botanical" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-2xl text-text-dark">Bensu Donat</h3>
                <p className="font-sans text-xs text-text-light tracking-[0.2em] uppercase mt-0.5">Klinik Psikolog</p>
              </div>
            </Link>
            <p className="font-display text-xl text-deep-botanical italic mt-4">
              "Ruhunuzda Çiçekler Açsın"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg text-text-dark mb-6">Navigasyon</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-text-soft hover:text-deep-botanical transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-text-dark mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-deep-botanical mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="font-sans text-sm text-text-soft">+90 555 123 45 67</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-deep-botanical mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="font-sans text-sm text-text-soft">info@bensudonat.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-deep-botanical mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="font-sans text-sm text-text-soft">Etiler, Beşiktaş / İstanbul</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg text-text-dark mb-6">Sosyal Medya</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-soft-sage/30 flex items-center justify-center hover:bg-deep-botanical hover:text-white transition-all duration-300 text-text-soft"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-soft-sage/30 flex items-center justify-center hover:bg-deep-botanical hover:text-white transition-all duration-300 text-text-soft"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-soft-sage/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-text-light">
              © 2024 Bensu Donat. Tüm hakları saklıdır.
            </p>
            <p className="font-sans text-xs text-text-light">
              Klinik Psikolog | İstanbul
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer