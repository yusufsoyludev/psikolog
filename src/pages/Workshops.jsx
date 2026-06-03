import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Clock, Calendar, Heart, Sparkles, BookOpen } from 'lucide-react'
import kintsugiImage from '../assets/img/kintsugi.png'
import yasamAgaciImage from '../assets/img/yasamagaci.png'

const Workshops = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const workshops = [
    {
      icon: Heart,
      title: "Kintsugi Atölyesi",
      subtitle: "Kırıklarımızı Altınla Tamir Etmek",
      description: "Kintsugi, Japon sanatında kırık seramik parçalarının altın tozuyla tamir edilmesi sanatıdır. Bu atölyede, kendi kırıklarımızı ve yaralanmalarımızı kabul etmeyi, onları güzellik ve güç kaynağı olarak görmeyi öğreniyoruz. Her çatlak, hikayemizin bir parçasıdır ve bizi biz yapan şeydir.",
      benefits: [
        "Travma ve kayıplarla başa çıkma becerileri",
        "Öz-şefkat ve öz-compasyon geliştirme",
        "Kırılganlığın gücünü keşfetme",
        "Duygusal dayanıklılık ve esneklik",
        "Kendi hikayenizi yeniden yazma",
        "Grup desteği ve paylaşım"
      ],
      info: [
        { icon: Users, label: "Katılımcı Sayısı", value: "8-12 kişi" },
        { icon: Clock, label: "Süre", value: "4 saat" },
        { icon: Calendar, label: "Sıklık", value: "Aylık" },
        { icon: BookOpen, label: "Materyal", value: "Tüm materyaller dahil" }
      ],
      color: "sage",
      image: kintsugiImage
    },
    {
      icon: Sparkles,
      title: "Yaşam Ağacı Atölyesi",
      subtitle: "Köklerimizden Dallarımıza Yolculuk",
      description: "Yaşam Ağacı atölyesinde, kendi yaşam ağacınızı oluşturarak köklerinizi, gövdenizi ve dallarınızı keşfediyorsunuz. Geçmiş deneyimlerinizden güç alarak, gelecekteki hedeflerinize ve hayallerinize yönleniyorsunuz. Bu yaratıcı ve terapötik süreç, öz-farkındalığınızı derinleştirir.",
      benefits: [
        "Öz-farkındalık ve içsel keşif",
        "Geçmiş deneyimlerden güç alma",
        "Gelecek hedeflerini netleştirme",
        "Yaratıcı ifade ve sanatsal terapi",
        "Grup dinamiği ve destek",
        "Kişisel büyüme ve dönüşüm"
      ],
      info: [
        { icon: Users, label: "Katılımcı Sayısı", value: "6-10 kişi" },
        { icon: Clock, label: "Süre", value: "3 saat" },
        { icon: Calendar, label: "Sıklık", value: "İki ayda bir" },
        { icon: BookOpen, label: "Materyal", value: "Tüm materyaller dahil" }
      ],
      color: "blush",
      image: yasamAgaciImage
    }
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-ivory overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 opacity-25 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-bloom">
            <ellipse cx="100" cy="100" rx="80" ry="70" fill="#D4A5A5" fillOpacity="0.5" />
            <ellipse cx="100" cy="100" rx="50" ry="60" fill="#C5D5C0" fillOpacity="0.3" transform="rotate(25 100 100)" />
          </svg>
        </div>

        <div className="section-padding w-full pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-deep-botanical to-transparent mx-auto mb-8" />
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-text-dark mb-6">
                Atölye{" "}
                <span className="text-deep-botanical italic">Çalışmaları</span>
              </h1>
              <p className="font-sans text-lg text-text-soft max-w-2xl mx-auto leading-relaxed">
                Grup çalışmalarıyla birlikte büyümek, paylaşmak ve keşfetmek için özel olarak tasarlanmış atölyeler.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section ref={ref} className="relative bg-cream overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <ellipse cx="100" cy="300" rx="180" ry="150" fill="#8BA888" />
            <ellipse cx="50" cy="200" rx="120" ry="100" fill="#C5D5C0" fillOpacity="0.6" />
          </svg>
        </div>

        <div className="section-padding premium-spacing">
          <div className="max-w-6xl mx-auto space-y-20 lg:space-y-32">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual */}
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                    workshop.color === 'sage' 
                      ? 'bg-gradient-to-br from-soft-sage/20 to-cream' 
                      : 'bg-gradient-to-br from-dusty-blush/15 to-cream'
                  } shadow-gentle ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                   {workshop.image ? (
  <img
    src={workshop.image}
    alt={workshop.title}
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />
) : (
  <div className="absolute inset-0 flex items-center justify-center">
    <div
      className={`w-28 h-28 rounded-full flex items-center justify-center ${
        workshop.color === 'sage'
          ? 'bg-soft-sage/40'
          : 'bg-dusty-blush/30'
      }`}
    >
      <workshop.icon
        className="w-14 h-14 text-deep-botanical/50"
        strokeWidth={1.5}
      />
    </div>
  </div>
)}

                    <div className="absolute top-6 right-6 w-16 h-16">
                      <svg viewBox="0 0 100 100" className="animate-bloom">
                        <ellipse cx="50" cy="50" rx="40" ry="35" fill="#C5D5C0" fillOpacity="0.5" />
                        <circle cx="50" cy="50" r="8" fill="#8BA888" fillOpacity="0.6" />
                      </svg>
                    </div>
                    <div className="absolute bottom-8 left-6 w-12 h-12">
                      <svg viewBox="0 0 100 100" className="animate-bloom animation-delay-400">
                        <ellipse cx="50" cy="50" rx="35" ry="30" fill="#D4A5A5" fillOpacity="0.35" />
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

                    <h2 className="font-display text-3xl lg:text-4xl text-text-dark mb-2">
                      {workshop.title}
                    </h2>
                    <p className="font-serif text-lg text-text-soft italic mb-6">
                      {workshop.subtitle}
                    </p>

                    <p className="font-sans text-text-soft leading-relaxed mb-8 text-base lg:text-lg">
                      {workshop.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="font-serif text-lg text-text-dark mb-3">Kazanımlar</h4>
                      <ul className="space-y-2">
                        {workshop.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-deep-botanical mt-2 flex-shrink-0" />
                            <span className="font-sans text-sm text-text-soft">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8 p-6 rounded-xl bg-cream/50">
                      {workshop.info.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <item.icon className="w-4 h-4 text-deep-botanical mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                          <div>
                            <p className="font-sans text-xs text-text-light">{item.label}</p>
                            <p className="font-sans text-sm text-text-dark">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/iletisim"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-deep-botanical text-white font-sans text-sm tracking-wide rounded-full hover:bg-botanical-green transition-all duration-500 hover:shadow-premium group"
                    >
                      Kayıt Ol
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Workshops