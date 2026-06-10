import { useEffect, useState } from 'react'
import images from '../assets/images'

export default function Intro({ onFinish, isFading }) {
  const [bloomActive, setBloomActive] = useState(false)
  const [showWord1, setShowWord1] = useState(false)
  const [showWord2, setShowWord2] = useState(false)

  useEffect(() => {
    const timers = []
    timers.push(setTimeout(() => setBloomActive(true), 100))
    timers.push(setTimeout(() => setShowWord1(true), 600))
    timers.push(setTimeout(() => setShowWord2(true), 1200))
    timers.push(setTimeout(() => onFinish(), 4200))

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-[100] intro-screen flex items-center justify-center overflow-hidden px-4 py-6 ${
        isFading ? 'fade-out' : ''
      }`}
    >
      <div className="relative intro-frame flex items-center justify-center">
        <img
          src={images.introFlower}
          alt="Blooming watercolor flower"
          className={`intro-flower-bloom intro-frame-image object-contain ${bloomActive ? 'active' : ''}`}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
          <div className={`intro-text-wrap ${showWord1 || showWord2 ? 'visible' : ''}`}>
            <span className={`intro-text ${showWord1 ? 'text-fade visible' : 'text-fade'}`}>
              Ruhunuzda
            </span>
            <span className={`intro-text ${showWord2 ? 'text-fade visible' : 'text-fade'}`}>
              çiçekler açsın
            </span>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="intro-petal petal-1" />
          <div className="intro-petal petal-2" />
          <div className="intro-petal petal-3" />
          <div className="intro-petal petal-4" />
          <div className="intro-petal petal-5" />
        </div>
      </div>
    </div>
  )
}
