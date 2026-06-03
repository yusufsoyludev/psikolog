import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => onComplete(), 4500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  const flowerPositions = [
    { x: '10%', y: '85%', size: 120, delay: 0, type: 'sage' },
    { x: '85%', y: '80%', size: 100, delay: 0.2, type: 'blush' },
    { x: '5%', y: '20%', size: 80, delay: 0.4, type: 'botanical' },
    { x: '90%', y: '15%', size: 90, delay: 0.3, type: 'sage' },
    { x: '20%', y: '10%', size: 70, delay: 0.5, type: 'blush' },
    { x: '75%', y: '90%', size: 110, delay: 0.1, type: 'botanical' },
    { x: '50%', y: '5%', size: 60, delay: 0.6, type: 'sage' },
    { x: '95%', y: '50%', size: 85, delay: 0.35, type: 'blush' },
    { x: '3%', y: '55%', size: 75, delay: 0.45, type: 'botanical' },
  ]

  const getFlowerColor = (type) => {
    switch(type) {
      case 'sage': return '#C5D5C0'
      case 'blush': return '#D4A5A5'
      case 'botanical': return '#8BA888'
      default: return '#C5D5C0'
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ivory overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Watercolor flowers growing from edges */}
      <AnimatePresence>
        {phase >= 1 && flowerPositions.map((flower, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{ left: flower.x, top: flower.y }}
            initial={{ scale: 0, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 0.7, rotate: 0 }}
            transition={{ 
              duration: 2, 
              delay: flower.delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <svg width={flower.size} height={flower.size} viewBox="0 0 100 100" className="animate-bloom">
              <defs>
                <radialGradient id={`grad-${i}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={getFlowerColor(flower.type)} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={getFlowerColor(flower.type)} stopOpacity="0.1" />
                </radialGradient>
              </defs>
              <ellipse cx="50" cy="50" rx="40" ry="35" fill={`url(#grad-${i})`} />
              <ellipse cx="50" cy="50" rx="25" ry="30" fill={getFlowerColor(flower.type)} fillOpacity="0.4" transform="rotate(30 50 50)" />
              <ellipse cx="50" cy="50" rx="20" ry="28" fill={getFlowerColor(flower.type)} fillOpacity="0.3" transform="rotate(-20 50 50)" />
              <circle cx="50" cy="50" r="8" fill={getFlowerColor(flower.type)} fillOpacity="0.6" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Central motto */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.div
            className="relative z-10 text-center px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="w-24 h-[1px] bg-gradient-to-r from-transparent via-soft-sage to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-dark leading-tight tracking-tight"
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, letterSpacing: '0.02em' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Ruhunuzda
            </motion.h1>
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-dark leading-tight tracking-tight mt-2"
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, letterSpacing: '0.02em' }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            >
              Çiçekler Açsın
            </motion.h1>
            <motion.div
              className="w-24 h-[1px] bg-gradient-to-r from-transparent via-dusty-blush to-transparent mx-auto mt-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle brand name */}
      <AnimatePresence>
        {phase >= 3 && (
          <motion.div
            className="absolute bottom-12 left-0 right-0 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-serif text-lg text-text-light tracking-widest uppercase">Bensu Donat</p>
            <p className="font-sans text-sm text-text-light mt-1 tracking-wide">Klinik Psikolog</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default IntroAnimation