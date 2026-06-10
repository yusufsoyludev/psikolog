import { useEffect, useState } from 'react'
import images from '../assets/images'

const createPetal = () => {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`
  return {
    id,
    left: `${Math.random() * 100}%`,
    color: Math.random() > 0.5 ? '#ffdadc' : '#f0e0cd',
    scale: 0.3 + Math.random() * 0.7,
  }
}

export default function Intro({ onFinish, isFading }) {
  const [flowerActive, setFlowerActive] = useState(false)
  const [showWord1, setShowWord1] = useState(false)
  const [showWord2, setShowWord2] = useState(false)
  const [petals, setPetals] = useState([])

  useEffect(() => {
    const timers = []

    const spawnPetal = () => {
      const petal = createPetal()
      setPetals((current) => [...current, petal])
      timers.push(
        setTimeout(() => {
          setPetals((current) => current.filter((item) => item.id !== petal.id))
        }, 7000)
      )
    }

    timers.push(setTimeout(() => setShowWord1(true), 600))
    timers.push(setTimeout(() => setFlowerActive(true), 1000))
    timers.push(setTimeout(() => setShowWord2(true), 1600))

    for (let i = 0; i < 8; i += 1) {
      timers.push(setTimeout(spawnPetal, Math.random() * 2000))
    }

    const petalInterval = setInterval(spawnPetal, 600)
    timers.push(setTimeout(() => clearInterval(petalInterval), 6000))
    timers.push(setTimeout(() => onFinish(), 5500))

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
      clearInterval(petalInterval)
    }
  }, [onFinish])

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[100] intro-screen flex items-center justify-center overflow-hidden px-4 py-6 ${
        isFading ? 'fade-out' : ''
      }`}
    >
      <div className="relative w-full max-w-2xl h-[26rem] md:h-96 flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <img
            src={images.introFlower}
            alt="Blooming watercolor flower"
            className={`intro-flower-bloom w-[350px] sm:w-[450px] md:w-[600px] h-auto object-contain pointer-events-none ${flowerActive ? 'active' : ''}`}
          />
        </div>
        <div className="relative z-10 space-y-4">
          <h1
            className={`intro-heading opacity-0 transition-all duration-1000 ${
              showWord1 ? 'opacity-100' : ''
            }`}
          >
            Ruhunuzda
          </h1>
          <div className="h-12 flex items-center justify-center">
            <p
              className={`intro-subheading opacity-0 transition-all duration-1000 ${
                showWord2 ? 'opacity-100' : ''
              }`}
            >
              çiçekler açsın
            </p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {petals.map((petal) => (
            <div
              key={petal.id}
              className="petal animate-petal"
              style={{
                left: petal.left,
                bottom: '-10%',
                transform: `scale(${petal.scale})`,
                background: petal.color,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
