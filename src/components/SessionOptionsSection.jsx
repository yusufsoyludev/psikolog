import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Monitor, MapPin, Calendar, Clock, Shield, Video, ArrowRight } from 'lucide-react'

const SessionOptionsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const options = [
    {
      icon: Monitor,
      title: "Online Görüşme",
      description: "Ev konforunda, zaman ve mekân sınırlaması olmadan terapi hizmeti alabilirsiniz. Online görüşmeler, yüz yüze seanslar kadar etkili ve güvenlidir.",
      features: [
        { icon: Video, text: "Güvenli video bağlantı" },
        { icon: Clock, text: "Esnek randevu saatleri" },
        { icon: Shield, text: "Gizlilik garantisi" },
        { icon: Monitor, text: "Ev konforunda terapi" }
      ],
      process: [
        "Randevu oluşturun",
        "Onay e-postası alın",
        "Güvenli bağlantıya katılın"
      ],
      color: "sage"
    },
    {
      icon: MapPin,
      title: "Yüz Yüze Görüşme",
      description: "Sıcak ve davetkar terapi odamda, birebir görüşmelerle daha derin bir terapötik deneyim yaşayabilirsiniz.",
      features: [
        { icon: MapPin, text: "Sıcak terapi ortamı" },
        { icon: Shield, text: "Birebir etkileşim" },
        { icon: Clock, text: "Daha derin bağlantı" },
        { icon: Calendar, text: "Tüm tekniklerin uygulanması" }
      ],
      process: [
        "Randevu oluşturun",
        "Onay ve adres bilgisi alın",
        "Ofise gelin"
      ],
      color: "blush"
    }
  ]

  return (
    <section ref={ref} className="relative bg-ivory overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <ellipse cx="350" cy="100" rx="180" ry="150" fill="#C5D5C0" />
          <ellipse cx="300" cy="250" rx="120" ry="100" fill="#D4A5A5" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="section-padding premium-spacing">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-16 h-[1px] bg-gradient-to-r from-transparent via-deep-botanical to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-dark mb-6">
              Görüşme{" "}
              <span className="text-deep-botanical italic">Seçenekleri</span>
            </h2>
            <p className="font-sans text-lg text-text-soft max-w-2xl mx-auto leading-relaxed">
              Size en uygun görüşme formatını seçin. Her iki seçenek de profesyonel ve etkili terapi deneyimi sunar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {options.map((option, index) => (
              <motion.div
                key={option.title}
                className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm border border-soft-sage/20 hover:bg-white hover:shadow-gentle transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              >
                {/* Top visual area */}
                <div className={`relative h-48 overflow-hidden ${
                  option.color === 'sage' 
                    ? 'bg-gradient-to-br from-soft-sage/20 to-cream' 
                    : 'bg-gradient-to-br from-dusty-blush/15 to-cream'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                      option.color === 'sage' ? 'bg-soft-sage/40' : 'bg-dusty-blush/30'
                    }`}>
                      <option.icon className="w-10 h-10 text-deep-botanical/60" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Decorative flowers */}
                  <div className="absolute top-4 right-4 w-12 h-12 opacity-40">
                    <svg viewBox="0 0 100 100" className="animate-bloom">
                      <ellipse cx="50" cy="50" rx="40" ry="35" fill={option.color === 'sage' ? '#C5D5C0' : '#D4A5A5'} />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 opacity-30">
                    <svg viewBox="0 0 100 100" className="animate-bloom animation-delay-400">
                      <ellipse cx="50" cy="50" rx="35" ry="30" fill={option.color === 'sage' ? '#8BA888' : '#C5D5C0'} />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <h3 className="font-display text-2xl lg:text-3xl text-text-dark mb-4 group-hover:text-deep-botanical transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="font-sans text-text-soft leading-relaxed mb-8 text-sm lg:text-base">
                    {option.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {option.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <feature.icon className="w-4 h-4 text-deep-botanical/60 flex-shrink-0" strokeWidth={1.5} />
                        <span className="font-sans text-xs text-text-soft">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Process */}
                  <div className="mb-8 p-4 rounded-xl bg-cream/50">
                    <p className="font-sans text-xs text-text-light uppercase tracking-wider mb-3">Süreç</p>
                    <ol className="space-y-2">
                      {option.process.map((step, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-deep-botanical/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-sans text-[10px] text-deep-botanical">{i + 1}</span>
                          </span>
                          <span className="font-sans text-sm text-text-soft">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-3 px-8 py-4 bg-deep-botanical text-white font-sans text-sm tracking-wide rounded-full hover:bg-botanical-green transition-all duration-500 hover:shadow-premium group"
            >
              <Calendar size={18} strokeWidth={1.5} />
              Randevu Al
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SessionOptionsSection