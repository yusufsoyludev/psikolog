import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, ArrowUpRight } from 'lucide-react'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      text: "Terapi süreci benim için çok değerliydi. Bensu Hanım'ın sabır ve anlayışıyla kendimi çok daha iyi hissediyorum. Artık kaygılarımla daha kolay başa çıkabiliyorum.",
      author: "Ayşe K.",
      detail: "32 yaşında, Bireysel Terapi",
    },
    {
      text: "Çift terapisi sayesinde eşimle iletişimimiz tamamen değişti. Artık birbirimizi daha iyi anlıyor ve çatışmalarımızı sağlıklı bir şekilde çözebiliyoruz.",
      author: "Mehmet ve Selin Y.",
      detail: "Çift Terapisi",
    },
    {
      text: "Oğlumun okul performansı ve davranışlarında gözle görülür iyileşme var. Bensu Hanım'ın çocuklarla olan bağlantısı gerçekten özel. Çok teşekkür ederiz.",
      author: "Zeynep T.",
      detail: "Anne, Çocuk Terapisi",
    },
    {
      text: "VR terapi deneyimi inanılmazdı. Yıllardır yaşadığım fobiyle yüzleşmek hiç bu kadar kolay ve güvenli olmamıştı. Teknolojiyi terapiyle bu şekilde birleştirmek harika.",
      author: "Can B.",
      detail: "28 yaşında, VR Terapi",
    },
    {
      text: "MOXO değerlendirmesi oğlumun dikkat sorunlarını anlamamıza yardımcı oldu. Profesyonel ve detaylı bir rapor hazırlandı. Okul danışmanlığıyla paylaştık, çok faydalı oldu.",
      author: "Elif D.",
      detail: "Anne, MOXO Değerlendirme",
    },
    {
      text: "Yaşam Ağacı atölyesi ruhsal bir arınma deneyimiydi. Kendimi yeniden keşfettim ve hayata daha pozitif bakmaya başladım. Grup dinamiği çok güzeldi.",
      author: "Burak S.",
      detail: "35 yaşında, Atölye",
    }
  ]

  return (
    <section ref={ref} className="relative bg-cream overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <ellipse cx="100" cy="300" rx="180" ry="150" fill="#8BA888" />
          <ellipse cx="50" cy="200" rx="120" ry="100" fill="#C5D5C0" fillOpacity="0.6" />
        </svg>
      </div>

      <div className="section-padding premium-spacing">
        <div className="max-w-7xl mx-auto">
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
              Danışan{" "}
              <span className="text-deep-botanical italic">Yorumları</span>
            </h2>
            <p className="font-sans text-lg text-text-soft max-w-2xl mx-auto leading-relaxed">
              Gerçek deneyimler, gerçek değişimler. Danışanlarımın terapi sürecindeki yolculuklarından bazıları.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-soft-sage/20 hover:bg-white hover:shadow-gentle transition-all duration-500 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Quote className="w-8 h-8 text-soft-sage/40 mb-5" strokeWidth={1} />

                <p className="font-sans text-text-soft leading-relaxed mb-6 text-sm lg:text-base flex-grow">
                  "{testimonial.text}"
                </p>

                <div className="mb-4">
                  <p className="font-serif text-lg text-text-dark">{testimonial.author}</p>
                  <p className="font-sans text-xs text-text-light mt-1">{testimonial.detail}</p>
                </div>

                <div className="pt-4 border-t border-soft-sage/20">
                  <p className="font-sans text-xs text-text-light mb-3">Kaynak: Drsitesi</p>
                  <a
                    href={`#yorum-${index + 1}`}
                    className="inline-flex items-center gap-2 font-sans text-sm text-deep-botanical hover:text-botanical-green transition-colors duration-300 group/btn"
                  >
                    Yoruma Git
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                  </a>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                  <svg viewBox="0 0 100 100">
                    <ellipse cx="50" cy="50" rx="40" ry="35" fill="#C5D5C0" />
                    <circle cx="50" cy="50" r="8" fill="#8BA888" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection