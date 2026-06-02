import { useState } from 'react'
import images from '../assets/images'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-surface text-on-surface">
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding relative z-10">
          <div className="max-w-2xl">
            <span className="text-secondary font-label-md text-label-md tracking-widest block mb-4 uppercase">Bize Ulaşın</span>
            <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface mb-6 leading-tight">
              İçsel bir yolculuğa <br /> beraber <span className="italic text-secondary">başlayalım.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Ruhunuzda çiçekler açsın diye buradayız. Sorularınız, randevu talepleriniz veya sadece paylaşmak istedikleriniz için yanınızdayız.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 opacity-30 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <img src={images.contactHeroFloral} alt="Contact floral" className="w-full" />
        </div>
      </section>

      <section className="py-12 md:py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl shadow-[0_30px_60px_-15px_rgba(74,68,63,0.08)] border border-surface-container">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-8">Mesaj Gönderin</h2>
              {submitted && (
                <div className="mb-6 rounded-2xl bg-primary-container/20 border border-primary-container p-4 text-primary">
                  Mesajınız alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
                </div>
              )}
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="font-label-md text-label-md text-on-surface-variant mb-2 block" htmlFor="name">
                      Ad Soyad
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-surface border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-primary transition-colors py-3 px-1 text-on-surface placeholder:text-surface-dim"
                      placeholder="Lütfen adınızı giriniz"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-on-surface-variant mb-2 block" htmlFor="email">
                      E-posta
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-primary transition-colors py-3 px-1 text-on-surface placeholder:text-surface-dim"
                      placeholder="E-posta adresiniz"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant mb-2 block" htmlFor="subject">
                    Konu
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-surface border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-primary transition-colors py-3 px-1 text-on-surface placeholder:text-surface-dim"
                    placeholder="Hangi konuda yazıyorsunuz?"
                    type="text"
                  />
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant mb-2 block" htmlFor="message">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface border-0 border-b-2 border-surface-variant focus:ring-0 focus:border-primary transition-colors py-3 px-1 text-on-surface placeholder:text-surface-dim resize-none"
                    placeholder="Size nasıl yardımcı olabiliriz?"
                    rows="4"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary text-white px-12 py-4 rounded-lg font-label-md hover:bg-on-primary-fixed-variant shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95"
                >
                  Gönder
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Telefon</h3>
                    <p className="font-headline-md text-headline-md text-primary">+90 212 000 00 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">E-posta</h3>
                    <p className="font-headline-md text-headline-md text-primary">merhaba@bensudonat.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Adres</h3>
                    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                      Nişantaşı, Teşvikiye Cd. No:12<br />Şişli / İstanbul
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-surface-variant">
                <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Bizi Takip Edin</h3>
                <div className="flex gap-4">
                  <a
                    className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
                    href="#"
                  >
                    <span className="material-symbols-outlined" data-weight="fill">
                      camera
                    </span>
                  </a>
                  <a
                    className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
                    href="#"
                  >
                    <span className="material-symbols-outlined" data-weight="fill">
                      work
                    </span>
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-surface-container-low border-l-4 border-primary italic">
                <p className="font-motto text-motto text-primary">"Ruhunuzda çiçekler açsın."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container group h-[500px]">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${images.contactMap}')` }}
              role="img"
              aria-label="Google Maps placeholder"
            />
            <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:max-w-md bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Bensu Donat Terapi Merkezi</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Ulaşım oldukça kolay, Nişantaşı merkezinde, Metro durağına 5 dakika yürüme mesafesindeyiz.
              </p>
              <a
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
