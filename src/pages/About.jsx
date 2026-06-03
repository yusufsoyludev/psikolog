import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Award, Heart, BookOpen, ArrowRight, Sparkles } from 'lucide-react'
import aboutPortrait from '../assets/img/hero-portre.png'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Klinik Psikoloji Yüksek Lisans",
      institution: "İstanbul Üniversitesi",
      year: "2014 - 2016",
      description: "Klinik psikoloji alanında uzmanlaşma eğitimi. Bilişsel Davranışçı Terapi, EMDR ve Şema Terapi eğitimleri."
    },
    {
      degree: "Psikoloji Lisans",
      institution: "Koç Üniversitesi",
      year: "2010 - 2014",
      description: "Psikoloji bölümü lisans eğitimi. Araştırma asistanlığı ve klinik staj deneyimleri."
    },
    {
      degree: "EMDR Terapi Sertifikası",
      institution: "EMDR Türkiye Derneği",
      year: "2017",
      description: "Travma tedavisi ve EMDR teknikleri üzerine uzmanlaşma sertifikası."
    },
    {
      degree: "Şema Terapi Eğitimi",
      institution: "Uluslararası Şema Terapi Derneği",
      year: "2018",
      description: "Şema terapi yaklaşımı ve teknikleri üzerine ileri düzey eğitim."
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Empati ve Anlayış",
      description: "Her danışanımın benzersiz deneyimini derinlemesine anlamak ve onlara şartsız pozitif bir bakış açısı sunmak benim için temel değerdir."
    },
    {
      icon: BookOpen,
      title: "Bilimsel Yaklaşım",
      description: "Kanıta dayalı terapi yöntemlerini kullanarak, en güncel ve etkili tedavi yaklaşımlarını sunmayı taahhüt ediyorum."
    },
    {
      icon: Award,
      title: "Profesyonellik",
      description: "Etik ilkeler, gizlilik ve profesyonel sınırlar benim için vazgeçilmezdir. Sürekli eğitim ve süpervizyon ile en yüksek kalitede hizmet sunuyorum."
    },
    {
      icon: Sparkles,
      title: "Bütünsel Bakış",
      description: "Her bireyi biyolojik, psikolojik ve sosyal boyutlarıyla bir bütün olarak ele alarak, kişiye özel tedavi planları oluşturuyorum."
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
      <section className="relative min-h-[60vh] flex items-center bg-ivory overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 opacity-30 pointer-events-none">
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
              <p className="font-sans text-sm tracking-[0.3em] uppercase text-deep-botanical mb-4">
                Klinik Psikolog
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-text-dark mb-6">
                Bensu <span className="text-deep-botanical italic">Donat</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl text-text-soft italic max-w-2xl mx-auto">
                "Her bireyin kendi içinde taşıdığı iyileştirici güce inanıyorum."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section ref={ref} className="relative bg-cream overflow-hidden">
        <div className="section-padding premium-spacing">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Portrait */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-warm-cream via-cream to-soft-sage/20 shadow-premium">

  <img
    src={aboutPortrait}
    alt="Klinik Psikolog Bensu Donat"
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />

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
              </motion.div>

              {/* Bio Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-8 h-[1px] bg-deep-botanical mb-6" />
                <h2 className="font-display text-3xl lg:text-4xl text-text-dark mb-6">
                  Benim <span className="text-deep-botanical italic">Hikayem</span>
                </h2>
                <div className="space-y-5">
                  <p className="font-sans text-text-soft leading-relaxed text-base lg:text-lg">
                    Psikoloji alanına olan tutkum, insan ruhunun derinliklerini keşfetme arzusuyla başladı. İstanbul Üniversitesi'nde tamamladığım klinik psikoloji yüksek lisans eğitimimin ardından, on yılı aşkın süredir danışanlarıma hizmet veriyorum.
                  </p>
                  <p className="font-sans text-text-soft leading-relaxed text-base lg:text-lg">
                    Kariyerim boyunca yetişkin, çift, çocuk ve ergen terapisi alanlarında uzmanlaştım. EMDR, Bilişsel Davranışçı Terapi ve Şema Terapi gibi kanıta dayalı yöntemleri kullanarak, her danışanıma kişiselleştirilmiş bir tedavi planı sunuyorum.
                  </p>
                  <p className="font-sans text-text-soft leading-relaxed text-base lg:text-lg">
                    Terapi odamda yarattığım sıcak ve davetkar atmosfer, danışanlarımın kendilerini güvende hissetmelerini sağlıyor. Her seans, birlikte yürüyeceğimiz yolculuğun bir adımıdır. Sizi anlamak, duygularınızı kabul etmek ve birlikte çözümler bulmak için buradayım.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="text-center">
                    <p className="font-display text-3xl text-deep-botanical">10+</p>
                    <p className="font-sans text-xs text-text-light mt-1">Yıllık Deneyim</p>
                  </div>
                  <div className="w-[1px] h-12 bg-soft-sage/30" />
                  <div className="text-center">
                    <p className="font-display text-3xl text-deep-botanical">500+</p>
                    <p className="font-sans text-xs text-text-light mt-1">Danışan</p>
                  </div>
                  <div className="w-[1px] h-12 bg-soft-sage/30" />
                  <div className="text-center">
                    <p className="font-display text-3xl text-deep-botanical">5</p>
                    <p className="font-sans text-xs text-text-light mt-1">Uzmanlık Alanı</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Values */}
      <section className="relative bg-ivory overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <ellipse cx="300" cy="300" rx="180" ry="150" fill="#8BA888" />
            <ellipse cx="250" cy="200" rx="120" ry="100" fill="#C5D5C0" fillOpacity="0.6" />
          </svg>
        </div>

        <div className="section-padding premium-spacing">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16 lg:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-deep-botanical to-transparent mx-auto mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl text-text-dark mb-6">
                Profesyonel{" "}
                <span className="text-deep-botanical italic">Değerlerim</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="group p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-soft-sage/20 hover:bg-white hover:shadow-gentle transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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

      {/* Education */}
      <section className="relative bg-cream overflow-hidden">
        <div className="section-padding premium-spacing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16 lg:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-deep-botanical to-transparent mx-auto mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl text-text-dark mb-6">
                Eğitim ve{" "}
                <span className="text-deep-botanical italic">Sertifikalar</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-soft-sage/20 hover:bg-white hover:shadow-gentle transition-all duration-500"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-soft-sage/30 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-deep-botanical" strokeWidth={1.5} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="font-serif text-xl text-text-dark group-hover:text-deep-botanical transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <span className="font-sans text-xs text-text-light bg-cream px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-deep-botanical mb-2">{edu.institution}</p>
                      <p className="font-sans text-sm text-text-soft leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative bg-ivory overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            <ellipse cx="200" cy="300" rx="300" ry="250" fill="#C5D5C0" />
            <ellipse cx="1000" cy="200" rx="250" ry="200" fill="#D4A5A5" />
          </svg>
        </div>

        <div className="section-padding premium-spacing">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-deep-botanical to-transparent mx-auto mb-8" />
              <h2 className="font-display text-4xl sm:text-5xl text-text-dark mb-8">
                Terapi{" "}
                <span className="text-deep-botanical italic">Felsefem</span>
              </h2>
              <div className="space-y-6">
                <p className="font-sans text-lg text-text-soft leading-relaxed">
                  Terapi, bir iyileşme sürecinden çok bir keşif yolculuğudur. Danışanlarımın kendi içsel güçlerini keşfetmelerine ve yaşamlarında anlam bulmalarına rehberlik ediyorum.
                </p>
                <p className="font-sans text-lg text-text-soft leading-relaxed">
                  Her bireyin kendine özgü bir hikayesi, kendi ritmi ve kendi zamanı vardır. Terapi sürecinde, bu bütünlüğü koruyarak, danışanlarımın kendi içsel bilgeliklerine ulaşmalarını destekliyorum.
                </p>
                <p className="font-sans text-lg text-text-soft leading-relaxed">
                  "Ruhunuzda Çiçekler Açsın" mottosu, terapi sürecindeki dönüşümü ve büyümeyi simgeler. Her zorluk, bir fırsattır ve her yaralanma, daha derin bir anlayışa ve güce açılan bir kapıdır.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  to="/iletisim"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-deep-botanical text-white font-sans text-sm tracking-wide rounded-full hover:bg-botanical-green transition-all duration-500 hover:shadow-premium group"
                >
                  Randevu Al
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default About