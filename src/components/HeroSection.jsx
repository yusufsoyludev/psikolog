import React from 'react'
import heroPortrait from '../assets/img/hero-portre.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react'


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ivory">
      {/* Background watercolor flowers */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-[5%] w-64 h-64 opacity-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full animate-bloom">
            <defs>
              <radialGradient id="hero-grad-1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C5D5C0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#C5D5C0" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <ellipse cx="100" cy="100" rx="80" ry="70" fill="url(#hero-grad-1)" />
            <ellipse cx="100" cy="100" rx="50" ry="60" fill="#C5D5C0" fillOpacity="0.3" transform="rotate(25 100 100)" />
            <ellipse cx="100" cy="100" rx="40" ry="55" fill="#8BA888" fillOpacity="0.2" transform="rotate(-15 100 100)" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-[3%] w-48 h-48 opacity-30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.8 }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full animate-bloom animation-delay-400">
            <defs>
              <radialGradient id="hero-grad-2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4A5A5" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D4A5A5" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <ellipse cx="100" cy="100" rx="75" ry="65" fill="url(#hero-grad-2)" />
            <ellipse cx="100" cy="100" rx="45" ry="55" fill="#D4A5A5" fillOpacity="0.25" transform="rotate(20 100 100)" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-[15%] w-32 h-32 opacity-25"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 2, delay: 1.2 }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full animate-bloom animation-delay-600">
            <ellipse cx="100" cy="100" rx="70" ry="60" fill="#8BA888" fillOpacity="0.3" />
            <ellipse cx="100" cy="100" rx="40" ry="50" fill="#6B8F71" fillOpacity="0.2" transform="rotate(30 100 100)" />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="section-padding w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="w-16 h-[1px] bg-gradient-to-r from-deep-botanical to-transparent mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            <motion.p
              className="font-sans text-sm tracking-[0.3em] uppercase text-deep-botanical mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Klinik Psikolog
            </motion.p>

            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-text-dark leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Bensu
              <br />
              <span className="text-deep-botanical">Donat</span>
            </motion.h1>

            <motion.div
              className="mt-8 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-soft italic leading-relaxed">
                "Ruhunuzda Çiçekler Açsın"
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-deep-botanical text-white font-sans text-sm tracking-wide rounded-full hover:bg-botanical-green transition-all duration-500 hover:shadow-premium group"
              >
                <Calendar size={18} strokeWidth={1.5} />
                Online Randevu
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-deep-botanical/30 text-text-dark font-sans text-sm tracking-wide rounded-full hover:bg-soft-sage/20 transition-all duration-500"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                İletişime Geç
              </Link>
            </motion.div>
          </motion.div>

          {/* Portrait Area */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-soft-sage/40 rounded-3xl" />
              <div className="absolute -inset-8 border border-dusty-blush/20 rounded-3xl" />

              {/* Portrait image with floral atmosphere */}
<div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden bg-gradient-to-br from-warm-cream via-cream to-soft-sage/30 shadow-premium">
  <img
    src={heroPortrait}
    alt="Klinik Psikolog Bensu Donat"
    className="absolute inset-0 w-full h-full object-cover z-0"
    loading="eager"
  />

  {/* Floating floral elements */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 100 100">
                    <ellipse cx="50" cy="50" rx="40" ry="35" fill="#C5D5C0" fillOpacity="0.5" />
                    <circle cx="50" cy="50" r="12" fill="#8BA888" fillOpacity="0.6" />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-4 w-12 h-12"
                  animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <svg viewBox="0 0 100 100">
                    <ellipse cx="50" cy="50" rx="35" ry="30" fill="#D4A5A5" fillOpacity="0.4" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  )
}

export default HeroSection