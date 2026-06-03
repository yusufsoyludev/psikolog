import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import adultTherapyImage from '../assets/img/yetiskin-terapisi.png'
import coupleTherapyImage from '../assets/img/cift-terapisi.png'
import cocukTerapiImage from '../assets/img/cocuk-ergen.png'
import vrTherapyImage from '../assets/img/vr.png'
import moxoImage from '../assets/img/moxo.png'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "Yetişkin Terapisi",
      description: "Bireysel terapi sürecinde, kaygı, depresyon, stres, özgüven sorunları, yaşam geçişleri ve kişisel gelişim konularında destek sağlıyorum. Birlikte, içsel gücünüzü keşfediyor ve daha dengeli bir yaşam kurmanıza yardımcı oluyorum.",
      color: "sage",
      image: adultTherapyImage
    },
    {
      title: "Çift Terapisi",
      description: "İlişkinizdeki iletişim sorunlarını, çatışmaları ve duygusal mesafeyi anlamak ve çözmek için birlikte çalışıyoruz. Daha sağlıklı, daha tatmin edici bir ilişki kurmanız için size rehberlik ediyorum.",
      color: "blush",
      image: coupleTherapyImage
    },
    {
      title: "Çocuk ve Ergen",
      description: "Çocuk ve ergenlerin duygusal, davranışsal ve gelişimsel ihtiyaçlarını anlamak ve desteklemek için oyun terapisi, bilişsel davranışçı teknikler ve aile danışmanlığı yöntemlerini kullanıyorum.",
      color: "botanical",
      image: cocukTerapiImage
    },
    {
      title: "VR Terapi",
      description: "Sanal gerçeklik teknolojisini terapi sürecine entegre ederek, fobiler, sosyal kaygı, travma sonrası stres bozukluğu ve diğer durumlar için güvenli ve kontrollü bir ortamda tedavi sağlıyorum.",
      color: "sage",
      image: vrTherapyImage
    },
    {
      title: "MOXO Değerlendirme",
      description: "MOXO d-CPT testi ile dikkat, hiperaktivite ve dürtüsellik değerlendirmesi yaparak, bireyin güçlü yönlerini ve desteklenmesi gereken alanlarını objektif bir şekilde analiz ediyorum.",
      color: "blush",
      image: moxoImage
    }
  ]

  const getColorClass = (color) => {
    switch(color) {
      case 'sage': return 'from-soft-sage/20 to-cream'
      case 'blush': return 'from-dusty-blush/15 to-cream'
      case 'botanical': return 'from-botanical-green/20 to-cream'
      default: return 'from-soft-sage/20 to-cream'
    }
  }

  const getAccentColor = (color) => {
    switch(color) {
      case 'sage': return 'bg-soft-sage/40'
      case 'blush': return 'bg-dusty-blush/30'
      case 'botanical': return 'bg-botanical-green/30'
      default: return 'bg-soft-sage/40'
    }
  }

  return (
    <section ref={ref} className="relative bg-cream overflow-hidden">
      <div className="section-padding premium-spacing">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 lg:mb-24"
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
              Çalışma
              <span className="text-deep-botanical italic"> Alanlarım</span>
            </h2>
            <p className="font-sans text-lg text-text-soft max-w-2xl mx-auto leading-relaxed">
              Her bireyin ve her durumun kendine özgü olduğunu bilerek, 
              ihtiyaçlarınıza en uygun terapi yöntemini seçiyorum.
            </p>
          </motion.div>

          {/* Services */}
          <div className="space-y-8 lg:space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Area */}
                  <div
  className={`relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br ${getColorClass(service.color)} shadow-gentle group-hover:shadow-premium transition-shadow duration-500 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
>
  {service.image ? (
    <img
      src={service.image}
      alt={service.title}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
  ) : (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className={`w-24 h-24 rounded-full ${getAccentColor(service.color)} mx-auto mb-4 flex items-center justify-center`}>
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-deep-botanical/50">
            <ellipse cx="50" cy="50" rx="35" ry="30" fill="currentColor" fillOpacity="0.4" />
            <ellipse cx="50" cy="50" rx="20" ry="25" fill="currentColor" fillOpacity="0.3" transform="rotate(20 50 50)" />
            <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.5" />
          </svg>
        </div>
        <p className="font-serif text-lg text-text-light">{service.title}</p>
        <p className="font-sans text-sm text-text-light mt-1">Görsel alanı</p>
      </div>
    </div>
  )}

  {/* Decorative corner flowers */}
  <div className="absolute top-4 right-4 w-16 h-16 opacity-50">
    <svg viewBox="0 0 100 100" className="animate-bloom">
      <ellipse cx="50" cy="50" rx="40" ry="35" fill="#C5D5C0" fillOpacity="0.5" />
    </svg>
  </div>

  <div className="absolute bottom-4 left-4 w-12 h-12 opacity-40">
    <svg viewBox="0 0 100 100" className="animate-bloom animation-delay-400">
      <ellipse cx="50" cy="50" rx="35" ry="30" fill="#D4A5A5" fillOpacity="0.4" />
    </svg>
  </div>
</div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-[1px] bg-deep-botanical" />
                      <span className="font-sans text-xs tracking-[0.2em] uppercase text-deep-botanical">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl lg:text-4xl text-text-dark mb-5 group-hover:text-deep-botanical transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-sans text-text-soft leading-relaxed mb-8 text-base lg:text-lg">
                      {service.description}
                    </p>
                    <Link
                      to="/terapiler"
                      className="inline-flex items-center gap-2 font-sans text-sm text-deep-botanical hover:text-botanical-green transition-colors duration-300 group/btn"
                    >
                      Detaya Git
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection