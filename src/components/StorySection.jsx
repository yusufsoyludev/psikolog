import React from 'react'
import storyImage from '../assets/img/benim-yaklasımım.png'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Shield, BookOpen, Users, Sparkles } from 'lucide-react'

const StorySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Heart,
      title: "Terapi Felsefem",
      description: "Her bireyin kendine özgü bir hikayesi olduğuna inanıyorum. Terapi sürecinde, danışanlarımın kendi içsel güçlerini keşfetmelerine ve yaşamlarında anlam bulmalarına rehberlik ediyorum."
    },
    {
      icon: Shield,
      title: "Güvenli Terapötik Ortam",
      description: "Yargısız, empatik ve kabul edici bir ortamda, duygularınızı özgürce ifade edebileceğiniz bir alan yaratıyorum. Güven, terapi sürecinin temel taşıdır."
    },
    {
      icon: BookOpen,
      title: "Kanıta Dayalı Yaklaşım",
      description: "Bilişsel Davranışçı Terapi, EMDR, Şema Terapi gibi bilimsel olarak desteklenen yöntemleri kullanarak, etkili ve sürdürülebilir değişim sağlıyorum."
    },
    {
      icon: Users,
      title: "Kişiselleştirilmiş Destek",
      description: "Her danışanın ihtiyaçları farklıdır. Terapi planınızı sizin özel durumunuza, hedeflerinize ve yaşam tarzınıza göre özelleştiriyorum."
    },
    {
      icon: Sparkles,
      title: "Profesyonel Değerlerim",
      description: "Etik ilkeler, gizlilik ve profesyonel sınırlar benim için vazgeçilmezdir. Sürekli eğitim ve süpervizyon ile en yüksek kalitede hizmet sunmayı taahhüt ediyorum."
    }
  ]

  return (
    <section ref={ref} className="relative bg-ivory overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400">
          <ellipse cx="300" cy="100" rx="150" ry="120" fill="#C5D5C0" />
          <ellipse cx="350" cy="200" rx="100" ry="90" fill="#D4A5A5" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="section-padding premium-spacing">
        <div className="max-w-6xl mx-auto">
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
              Benim Hikayem ve
              <br />
              <span className="text-deep-botanical italic">Yaklaşımım</span>
            </h2>
            <p className="font-sans text-lg text-text-soft max-w-2xl mx-auto leading-relaxed">
              On yılı aşkın süredir psikoloji alanında edindiğim deneyim ve birikimle, 
              danışanlarıma en iyi şekilde hizmet vermek için çalışıyorum.
            </p>
          </motion.div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            {/* Left: Story text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="font-sans text-text-soft leading-relaxed mb-6 text-lg">
                  Psikoloji alanına olan tutkum, insan ruhunun derinliklerini keşfetme arzusuyla başladı. 
                  Yıllar içinde edindiğim klinik deneyim, bana her bireyin kendi içinde taşıdığı 
                  iyileştirici gücü fark ettirdi.
                </p>
                <p className="font-sans text-text-soft leading-relaxed mb-6 text-lg">
                  Terapi odamda, danışanlarımın kendilerini güvende hissetmelerini sağlayan 
                  bir atmosfer yaratmaya özen gösteriyorum. Burası sadece bir tedavi alanı değil, 
                  aynı zamanda büyüme, keşif ve dönüşümün gerçekleştiği kutsal bir mekandır.
                </p>
                <p className="font-sans text-text-soft leading-relaxed text-lg">
                  Her seans, birlikte yürüyeceğimiz yolculuğun bir adımıdır. Sizi anlamak, 
                  duygularınızı kabul etmek ve birlikte çözümler bulmak için buradayım.
                </p>
              </div>
            </motion.div>

            {/* Right: Visual composition */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-cream via-warm-cream to-soft-sage/20 shadow-gentle">
  <img
    src={storyImage}
    alt="Klinik psikolog terapi ortamı"
    className="absolute inset-0 z-0 w-full h-full object-cover"
    loading="lazy"
  />

  {/* Decorative elements */}
  <div className="absolute top-6 left-6 z-10 w-20 h-20">
    <svg viewBox="0 0 100 100" className="animate-bloom">
      <ellipse cx="50" cy="50" rx="40" ry="35" fill="#C5D5C0" fillOpacity="0.4" />
      <circle cx="50" cy="50" r="10" fill="#8BA888" fillOpacity="0.5" />
    </svg>
  </div>

  <div className="absolute bottom-8 right-8 z-10 w-16 h-16">
    <svg viewBox="0 0 100 100" className="animate-bloom animation-delay-400">
      <ellipse cx="50" cy="50" rx="35" ry="30" fill="#D4A5A5" fillOpacity="0.35" />
    </svg>
  </div>
</div>
              {/* Floating card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-soft-sage/20 max-w-[200px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="font-display text-3xl text-deep-botanical mb-1">150+</p>
                <p className="font-sans text-sm text-text-soft">Mutlu danışan</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-soft-sage/20 hover:bg-white hover:shadow-gentle transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-soft-sage/30 flex items-center justify-center mb-5 group-hover:bg-deep-botanical/10 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-deep-botanical" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-text-dark mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-text-soft leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection