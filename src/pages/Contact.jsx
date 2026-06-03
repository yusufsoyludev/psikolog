import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Linkedin, Send, Navigation, ArrowRight } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    { icon: Phone, label: "Telefon", value: "+90 555 123 45 67" },
    { icon: Mail, label: "E-posta", value: "info@bensudonat.com" },
    { icon: MapPin, label: "Adres", value: "Etiler, Beşiktaş / İstanbul" }
  ]

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" }
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-ivory overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 opacity-25 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-bloom">
            <ellipse cx="100" cy="100" rx="80" ry="70" fill="#C5D5C0" fillOpacity="0.6" />
            <ellipse cx="100" cy="100" rx="50" ry="60" fill="#8BA888" fillOpacity="0.3" transform="rotate(25 100 100)" />
          </svg>
        </div>

        <div className="section-padding w-full pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-deep-botanical to-transparent mx-auto mb-8" />
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-text-dark mb-6">
                İletişime{" "}
                <span className="text-deep-botanical italic">Geçin</span>
              </h1>
              <p className="font-sans text-lg text-text-soft max-w-2xl mx-auto leading-relaxed">
                Sorularınız, randevu talepleriniz veya terapi süreci hakkında bilgi almak için benimle iletişime geçebilirsiniz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="relative bg-cream overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <ellipse cx="300" cy="300" rx="180" ry="150" fill="#8BA888" />
            <ellipse cx="250" cy="200" rx="120" ry="100" fill="#C5D5C0" fillOpacity="0.6" />
          </svg>
        </div>

        <div className="section-padding premium-spacing">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="w-8 h-[1px] bg-deep-botanical mb-6" />
                <h2 className="font-display text-3xl lg:text-4xl text-text-dark mb-2">
                  Bana{" "}
                  <span className="text-deep-botanical italic">Yazın</span>
                </h2>
                <p className="font-sans text-text-soft mb-8">
                  Aşağıdaki formu doldurarak bana ulaşabilirsiniz. En kısa sürede size dönüş yapacağım.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-2xl bg-soft-sage/20 border border-soft-sage/30 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-deep-botanical/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-deep-botanical" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl text-text-dark mb-2">Mesajınız Gönderildi</h3>
                    <p className="font-sans text-sm text-text-soft">En kısa sürede size dönüş yapacağım.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-sans text-sm text-text-dark mb-2">Ad Soyad</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/70 border border-soft-sage/30 font-sans text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:border-deep-botanical/50 focus:ring-1 focus:ring-deep-botanical/20 transition-all duration-300"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-sans text-sm text-text-dark mb-2">E-posta</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 rounded-xl bg-white/70 border border-soft-sage/30 font-sans text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:border-deep-botanical/50 focus:ring-1 focus:ring-deep-botanical/20 transition-all duration-300"
                          placeholder="ornek@email.com"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-sm text-text-dark mb-2">Telefon</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-white/70 border border-soft-sage/30 font-sans text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:border-deep-botanical/50 focus:ring-1 focus:ring-deep-botanical/20 transition-all duration-300"
                          placeholder="+90 555 123 45 67"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-text-dark mb-2">Konu</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/70 border border-soft-sage/30 font-sans text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:border-deep-botanical/50 focus:ring-1 focus:ring-deep-botanical/20 transition-all duration-300"
                        placeholder="Randevu talebi, bilgi alma, vb."
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-text-dark mb-2">Mesaj</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl bg-white/70 border border-soft-sage/30 font-sans text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:border-deep-botanical/50 focus:ring-1 focus:ring-deep-botanical/20 transition-all duration-300 resize-none"
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-deep-botanical text-white font-sans text-sm tracking-wide rounded-full hover:bg-botanical-green transition-all duration-500 hover:shadow-premium group"
                    >
                      <Send size={18} strokeWidth={1.5} />
                      Gönder
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-8 h-[1px] bg-deep-botanical mb-6" />
                <h2 className="font-display text-3xl lg:text-4xl text-text-dark mb-2">
                  İletişim{" "}
                  <span className="text-deep-botanical italic">Bilgileri</span>
                </h2>
                <p className="font-sans text-text-soft mb-8">
                  Aşağıdaki bilgilerden bana doğrudan ulaşabilirsiniz.
                </p>

                <div className="space-y-5 mb-10">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      className="flex items-start gap-4 p-5 rounded-xl bg-white/70 border border-soft-sage/20 hover:bg-white hover:shadow-soft transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-soft-sage/30 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-deep-botanical" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-sans text-xs text-text-light uppercase tracking-wider mb-1">{info.label}</p>
                        <p className="font-sans text-sm text-text-dark">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mb-10">
                  <p className="font-sans text-xs text-text-light uppercase tracking-wider mb-4">Sosyal Medya</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/70 border border-soft-sage/20 flex items-center justify-center hover:bg-deep-botanical hover:text-white hover:border-deep-botanical transition-all duration-300 text-text-soft"
                        aria-label={social.label}
                      >
                        <social.icon size={20} strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map Area */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-soft-sage/20 to-cream border border-soft-sage/20 aspect-[16/10] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Navigation className="w-10 h-10 text-deep-botanical/40 mx-auto mb-3" strokeWidth={1.5} />
                      <p className="font-serif text-lg text-text-light">Google Maps Alanı</p>
                      <p className="font-sans text-sm text-text-light mt-1">Harita entegrasyonu</p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full font-sans text-sm text-deep-botanical hover:bg-deep-botanical hover:text-white transition-all duration-300 shadow-soft"
                    >
                      <Navigation size={16} strokeWidth={1.5} />
                      Yol Tarifi Al
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Contact