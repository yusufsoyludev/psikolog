import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WhyTherapySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      number: "01",
      title: "Duygusal Farkındalık",
      description: "Kendi duygularınızı tanımak, anlamak ve sağlıklı bir şekilde ifade etmek, içsel dengenizin anahtarıdır. Terapi, duygusal farkındalığınızı artırarak yaşamınızdaki olumlu değişimleri başlatmanıza yardımcı olur."
    },
    {
      number: "02",
      title: "Kişisel Gelişim",
      description: "Potansiyelinizi keşfetmek, hedeflerinize ulaşmak ve daha anlamlı bir yaşam kurmak için terapi size rehberlik eder. Kendinizi tanımak, güçlü yönlerinizi fark etmek ve zorluklarla başa çıkma becerileri geliştirmek için güvenli bir alan sunar."
    },
    {
      number: "03",
      title: "İlişki Kalıpları",
      description: "Eski ilişki kalıplarınızı anlamak, daha sağlıklı ve tatmin edici bağlar kurmanıza yardımcı olur. Terapi, ilişkilerinizdeki dinamikleri fark etmenizi ve olumlu değişimler yapmanızı destekler."
    },
    {
      number: "04",
      title: "Stres Yönetimi",
      description: "Günlük stresle başa çıkma becerileri geliştirmek, yaşam kalitenizi artırır. Terapi, size stres kaynaklarınızı tanımlama ve etkili başa çıkma stratejileri geliştirme konusunda destek olur."
    },
    {
      number: "05",
      title: "Kaygı Desteği",
      description: "Kaygıyı azaltmak, iç huzuru bulmak ve günlük yaşamda daha rahat hissetmek mümkün. Terapi, kaygınızın kök nedenlerini anlamanıza ve sürdürülebilir rahatlama teknikleri öğrenmenize yardımcı olur."
    },
    {
      number: "06",
      title: "Kendini Keşif",
      description: "İç dünyanıza yolculuk yapmak, kim olduğunuzu, ne istediğinizi ve yaşamınızda neyin önemli olduğunu anlamanıza yardımcı olur. Terapi, öz-farkındalığınızı derinleştirerek daha otantik bir yaşam sürmenizi destekler."
    }
  ]

  return (
    <section ref={ref} className="relative bg-ivory overflow-hidden">
      <div className="absolute top-10 right-0 w-[500px] h-[500px] opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <defs>
            <radialGradient id="why-grad-1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4A5A5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4A5A5" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="400" cy="150" rx="200" ry="180" fill="url(#why-grad-1)" />
          <ellipse cx="350" cy="300" rx="150" ry="130" fill="#C5D5C0" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="section-padding premium-spacing">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20 lg:mb-28"
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
              Neden Terapi{" "}
              <span className="text-deep-botanical italic">Almalıyım?</span>
            </h2>
            <p className="font-sans text-lg text-text-soft max-w-2xl mx-auto leading-relaxed">
              Terapi, sadece sorunları çözmek değil, aynı zamanda kendinizi daha iyi tanımak ve potansiyelinizi keşfetmek için bir yolculuktur.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-16 lg:gap-y-20">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.12 }}
              >
                <div className="flex gap-5 lg:gap-8">
                  <span className="font-display text-5xl sm:text-6xl lg:text-7xl text-soft-sage/25 leading-none select-none group-hover:text-soft-sage/45 transition-colors duration-500 flex-shrink-0">
                    {reason.number}
                  </span>
                  <div className="pt-2 lg:pt-3">
                    <h3 className="font-serif text-xl lg:text-2xl text-text-dark mb-3 group-hover:text-deep-botanical transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="font-sans text-sm lg:text-base text-text-soft leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 ml-16 lg:ml-24 h-[1px] bg-gradient-to-r from-soft-sage/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyTherapySection