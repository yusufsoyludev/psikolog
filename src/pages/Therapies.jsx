import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Users, Heart, Brain, Glasses, ClipboardCheck } from 'lucide-react'
import adultTherapyImage from '../assets/img/yetiskin-terapisi.png'
import coupleTherapyImage from '../assets/img/cift-terapisi.png'
import childTherapyImage from '../assets/img/cocuk-ergen.png'
import vrTherapyImage from '../assets/img/vr.png'
import moxoImage from '../assets/img/moxo.png'

const Therapies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const therapies = [
    {
      icon: Users,
      title: "Yetişkin Terapisi",
      description: "Bireysel terapi sürecinde, kaygı, depresyon, stres, özgüven sorunları, yaşam geçişleri ve kişisel gelişim konularında destek sağlıyorum. Birlikte, içsel gücünüzü keşfediyor ve daha dengeli bir yaşam kurmanıza yardımcı oluyorum.",
      suitable: [
        "Kaygı ve panik bozuklukları yaşayan bireyler",
        "Depresyon ve duygusal zorluklarla mücadele edenler",
        "Özgüven ve benlik saygısı sorunları olanlar",
        "Yaşam geçişleri ve kariyer değişiklikleri yaşayanlar",
        "Kişisel gelişim ve öz-farkındalık isteyenler",
        "Travma ve kayıp deneyimleri olanlar"
      ],
      benefits: [
        "Duygusal denge ve iç huzur",
        "Daha sağlıklı başa çıkma mekanizmaları",
        "Gelişmiş öz-farkındalık",
        "Daha tatmin edici ilişkiler",
        "Artırılmış öz-güven",
        "Kişisel büyüme ve dönüşüm"
      ],
      color: "sage",
      image: adultTherapyImage
    },
    {
      icon: Heart,
      title: "Çift Terapisi",
      description: "İlişkinizdeki iletişim sorunlarını, çatışmaları ve duygusal mesafeyi anlamak ve çözmek için birlikte çalışıyoruz. Daha sağlıklı, daha tatmin edici bir ilişki kurmanız için size rehberlik ediyorum.",
      suitable: [
        "İletişim sorunları yaşayan çiftler",
        "Sürekli çatışma ve tartışma yaşayanlar",
        "Duygusal veya fiziksel mesafe hissedenler",
        "Sadakat ve güven sorunları olanlar",
        "Evlilik öncesi danışmanlık isteyenler",
        "Ayrılık ve boşanma sürecinde olanlar"
      ],
      benefits: [
        "Gelişmiş iletişim becerileri",
        "Daha derin duygusal bağ",
        "Etkili çatışma çözümü",
        "Artırılmış empati ve anlayış",
        "Daha tatmin edici cinsel yaşam",
        "Ortak hedeflere ulaşma"
      ],
      color: "blush",
      image: coupleTherapyImage
    },
    {
      icon: Brain,
      title: "Çocuk ve Ergen Terapisi",
      description: "Çocuk ve ergenlerin duygusal, davranışsal ve gelişimsel ihtiyaçlarını anlamak ve desteklemek için oyun terapisi, bilişsel davranışçı teknikler ve aile danışmanlığı yöntemlerini kullanıyorum.",
      suitable: [
        "Okul performansı sorunları olan çocuklar",
        "Davranışsal zorluklar yaşayanlar",
        "Aile içi çatışma ve uyum sorunları",
        "Kaygı ve fobileri olan çocuklar",
        "Sosyal beceri geliştirme ihtiyacı olanlar",
        "Duygusal düzenleme zorlukları yaşayan ergenler"
      ],
      benefits: [
        "Gelişmiş duygusal ifade",
        "Daha sağlıklı davranış kalıpları",
        "Artırılmış sosyal beceriler",
        "Daha iyi okul performansı",
        "Güçlendirilmiş aile bağları",
        "Gelişmiş öz-düzenleme"
      ],
      color: "botanical",
      image: childTherapyImage
    },
    {
      icon: Glasses,
      title: "VR Terapi",
      description: "Sanal gerçeklik teknolojisini terapi sürecine entegre ederek, fobiler, sosyal kaygı, travma sonrası stres bozukluğu ve diğer durumlar için güvenli ve kontrollü bir ortamda tedavi sağlıyorum.",
      suitable: [
        "Fobi ve korkuları olan bireyler",
        "Sosyal kaygı bozukluğu yaşayanlar",
        "Travma sonrası stres bozukluğu olanlar",
        "Agorafobi ve panik bozukluğu olanlar",
        "Yükseklik, uçak veya kapalı alan korkusu olanlar",
        "Geleneksel terapiye dirençli vakalar"
      ],
      benefits: [
        "Güvenli ve kontrollü maruz kalma",
        "Hızlı ve etkili sonuçlar",
        "Gerçekçi senaryolar",
        "Kişiselleştirilmiş tedavi planı",
        "Tekrarlanabilir seanslar",
        "Düşük risk ve yüksek etkinlik"
      ],
      color: "sage",
      image: vrTherapyImage
    },
    {
      icon: ClipboardCheck,
      title: "MOXO Değerlendirme",
      description: "MOXO d-CPT testi ile dikkat, hiperaktivite ve dürtüsellik değerlendirmesi yaparak, bireyin güçlü yönlerini ve desteklenmesi gereken alanlarını objektif bir şekilde analiz ediyorum.",
      suitable: [
        "Dikkat eksikliği belirtileri gösteren çocuklar",
        "Hiperaktivite sorunları olan bireyler",
        "Öğrenme güçlüğü şüphesi olanlar",
        "Dikkat testi raporu ihtiyacı olanlar",
        "Okul danışmanlığı için değerlendirme",
        "Klinik tanı sürecinde destek"
      ],
      benefits: [
        "Objektif ve bilimsel değerlendirme",
        "Detaylı ve kapsamlı rapor",
        "Kişiselleştirilmiş öneriler",
        "Tedavi planına rehberlik",
        "İlerleme takibi",
        "Profesyonel raporlama"
      ],
      color: "blush",
      image: moxoImage
    }
  ]

  const getColorClass = (color) => {
    switch(color) {
      case 'sage': return 'bg-gradient-to-br from-soft-sage/20 to-cream'
      case 'blush': return 'bg-gradient-to-br from-dusty-blush/15 to-cream'
      case 'botanical': return 'bg-gradient-to-br from-botanical-green/20 to-cream'
      default: return 'bg-gradient-to-br from-soft-sage/20 to-cream'
    }
  }

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
            <ellipse cx="100" cy="100" rx="80" ry="70" fill="#C5D5C0" fillOpacity="0.6" />
            <ellipse cx="100" cy="100" rx="50" ry="60" fill="#8BA888" fillOpacity="0.3" transform="rotate(25 100 100)" />
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
                Terapi{" "}
                <span className="text-deep-botanical italic">Hizmetleri</span>
              </h1>
              <p className="font-sans text-lg text-text-soft max-w-2xl mx-auto leading-relaxed">
                Her bireyin ve her durumun kendine özgü olduğunu bilerek, ihtiyaçlarınıza en uygun terapi yöntemini seçiyorum.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapy Details */}
      <section ref={ref} className="relative bg-cream overflow-hidden">
        <div className="section-padding premium-spacing">
          <div className="max-w-6xl mx-auto space-y-20 lg:space-y-32">
            {therapies.map((therapy, index) => (
              <motion.div
                key={therapy.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual */}
                  <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden ${getColorClass(therapy.color)} shadow-gentle ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {therapy.image ? (
  <img
    src={therapy.image}
    alt={therapy.title}
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />
) : (
  <div className="absolute inset-0 flex items-center justify-center">
    <div
      className={`w-24 h-24 rounded-full flex items-center justify-center ${
        therapy.color === 'sage'
          ? 'bg-soft-sage/40'
          : therapy.color === 'blush'
          ? 'bg-dusty-blush/30'
          : 'bg-botanical-green/30'
      }`}
    >
      <therapy.icon
        className="w-12 h-12 text-deep-botanical/50"
        strokeWidth={1.5}
      />
    </div>
  </div>
)}

                    <div className="absolute top-4 right-4 w-12 h-12 opacity-40">
                      <svg viewBox="0 0 100 100" className="animate-bloom">
                        <ellipse cx="50" cy="50" rx="40" ry="35" fill="#C5D5C0" />
                        <circle cx="50" cy="50" r="8" fill="#8BA888" />
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 w-10 h-10 opacity-30">
                      <svg viewBox="0 0 100 100" className="animate-bloom animation-delay-400">
                        <ellipse cx="50" cy="50" rx="35" ry="30" fill="#D4A5A5" />
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

                    <h2 className="font-display text-3xl lg:text-4xl text-text-dark mb-5 group-hover:text-deep-botanical transition-colors duration-300">
                      {therapy.title}
                    </h2>

                    <p className="font-sans text-text-soft leading-relaxed mb-8 text-base lg:text-lg">
                      {therapy.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-serif text-lg text-text-dark mb-3">Kimler İçin Uygun?</h4>
                        <ul className="space-y-2">
                          {therapy.suitable.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-deep-botanical mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                              <span className="font-sans text-sm text-text-soft">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-text-dark mb-3">Faydaları</h4>
                        <ul className="space-y-2">
                          {therapy.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-deep-botanical mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                              <span className="font-sans text-sm text-text-soft">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      to="/iletisim"
                      className="inline-flex items-center gap-2 font-sans text-sm text-deep-botanical hover:text-botanical-green transition-colors duration-300 group/btn"
                    >
                      Randevu Al
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" strokeWidth={1.5} />
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

export default Therapies