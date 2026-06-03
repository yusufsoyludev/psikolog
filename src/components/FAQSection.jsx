import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Terapiye ne zaman başlamalıyım?",
      answer: "Kendinizi zor hissettiğinizde, yaşamınızda bir şeylerin değişmesini istediğinizde veya sadece kendinizi daha iyi anlamak istediğinizde terapiye başlayabilirsiniz. Terapi sadece sorunları çözmek için değil, aynı zamanda kişisel gelişim ve öz-farkındalık için de değerlidir. İlişkilerinizde zorluk yaşıyorsanız, sürekli kaygı veya depresif duygular hissediyorsanız, önemli bir yaşam değişikliği geçiriyorsanız veya sadece kendinizi daha iyi tanımak istiyorsanız, terapi size yardımcı olabilir."
    },
    {
      question: "İlk görüşmede neler konuşulur?",
      answer: "İlk görüşme, sizi tanımak ve terapi hedeflerinizi belirlemek için bir tanışma seansıdır. Yaşadığınız zorlukları, beklentilerinizi ve terapi sürecinden ne umduğunuzu konuşuruz. Sizin hikayenizi dinler, terapi yaklaşımımı açıklar ve size uygun bir terapi planı oluşturmak için bilgi toplarız. Bu seans aynı zamanda birbirimizi tanımamız ve terapötik ilişkimizin temelini atmamız için önemlidir."
    },
    {
      question: "Online terapi etkili midir?",
      answer: "Evet, araştırmalar online terapinin yüz yüze terapi kadar etkili olduğunu göstermektedir. Özellikle kaygı, depresyon ve stres yönetimi konularında online terapi oldukça başarılı sonuçlar vermektedir. Önemli olan, güvenli ve özel bir ortam sağlamaktır. Online terapi, zaman ve mekân sınırlaması olmadan terapi hizmeti almanızı sağlar ve özellikle yoğun programı olanlar veya ulaşım sorunu yaşayanlar için ideal bir seçenektir."
    },
    {
      question: "Seans süresi ne kadardır?",
      answer: "Bireysel terapi seansları genellikle 50 dakika sürmektedir. Çift terapisi seansları ise 60-80 dakika arasında değişebilir. İlk görüşme, standart seanslardan biraz daha uzun olabilir çünkü sizi tanımak için daha fazla zaman ayırırız. Seans süreleri, terapi hedeflerinize ve ihtiyaçlarınıza göre ayarlanabilir. Düzenli seanslar, terapi sürecinin etkinliği için önemlidir."
    },
    {
      question: "Randevu nasıl oluşturulur?",
      answer: "Web sitemiz üzerinden iletişim formunu doldurarak veya telefon numaramızı arayarak randevu oluşturabilirsiniz. Size en uygun tarih ve saati birlikte belirleriz. Randevu onayınız e-posta ile gönderilir. Acil durumlar için en kısa sürede görüşme ayarlamaya çalışıyoruz. Randevunuzu 24 saat öncesinden iptal etmeniz durumunda herhangi bir ücret talep edilmez."
    },
    {
      question: "Çift terapisine tek başıma başlayabilir miyim?",
      answer: "Evet, çift terapisine tek başınıza başlayabilirsiniz. Bazen ilişki dinamiklerini anlamak ve değişimi başlatmak için bir partnerin gelmesi yeterli olabilir. İlerleyen süreçte eşinizin de katılımı faydalı olabilir, ancak bu zorunlu değildir. Tek başınıza geldiğinizde, ilişkinizdeki rolünüzü ve değiştirebileceğiniz davranışları keşfetmeye odaklanırız."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="relative bg-cream overflow-hidden">
      <div className="absolute top-20 left-0 w-[350px] h-[350px] opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 350 350" className="w-full h-full">
          <ellipse cx="100" cy="100" rx="150" ry="130" fill="#D4A5A5" />
          <ellipse cx="150" cy="200" rx="100" ry="90" fill="#C5D5C0" fillOpacity="0.6" />
        </svg>
      </div>

      <div className="section-padding premium-spacing">
        <div className="max-w-3xl mx-auto">
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
              Sıkça Sorulan{" "}
              <span className="text-deep-botanical italic">Sorular</span>
            </h2>
            <p className="font-sans text-lg text-text-soft max-w-2xl mx-auto leading-relaxed">
              Terapi süreci hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-xl bg-white/70 backdrop-blur-sm border border-soft-sage/20 overflow-hidden hover:bg-white transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left group"
                >
                  <span className="font-serif text-lg lg:text-xl text-text-dark group-hover:text-deep-botanical transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-soft-sage/20 flex items-center justify-center group-hover:bg-deep-botanical/10 transition-colors duration-300">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-deep-botanical" strokeWidth={1.5} />
                    ) : (
                      <Plus className="w-4 h-4 text-text-soft group-hover:text-deep-botanical transition-colors" strokeWidth={1.5} />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                        <div className="pt-2 border-t border-soft-sage/20">
                          <p className="font-sans text-sm lg:text-base text-text-soft leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection