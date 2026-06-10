import { useState } from 'react'
import { Link } from 'react-router-dom'
import images from '../assets/images'

const faqItems = [
  {
    question: 'Terapi süreci ne kadar sürer?',
    answer:
      'Terapi süresi tamamen kişinin ihtiyaçlarına, hedeflerine ve çalışılan konunun derinliğine bağlıdır. Bazı odaklı sorunlar 8-12 seansta çözüme ulaşabilirken, köklü değişimler daha uzun vadeli bir çalışma gerektirebilir.',
  },
  {
    question: 'İlk seansta ne konuşulur?',
    answer:
      'İlk seans tanışma ve değerlendirme seansıdır. Sizi terapiye getiren nedenleri, mevcut şikayetlerinizi ve terapi beklentilerinizi ele alıyoruz. Ayrıca benim çalışma yöntemim hakkında detaylı bilgi paylaşıyorum.',
  },
  {
    question: 'Online terapi, yüz yüze terapi kadar etkili midir?',
    answer:
      'Yapılan birçok bilimsel araştırma, online terapinin birçok durumda yüz yüze terapi kadar etkili olduğunu göstermektedir. Önemli olan terapötik bağın kurulabilmesi ve güvenli, sessiz bir ortamın sağlanmasıdır.',
  },
]

const testimonials = [
  '“Bensu Hanım ile tanışmak hayatımın dönüm noktasıydı. Empatisi ve profesyonelliği sayesinde kendimi çok güvende hissettim.”',
  '“Online terapiye önyargılıydım ama Bensu Hanım’ın enerjisi ekranları aşıyor. Kendimi bulma yolculuğunda harika bir rehber.”',
  '“Kintsugi atölyesine katıldım. Psikoloji ile sanatın bu kadar güzel birleşeceğini düşünmemiştim. Çok değerli bir deneyimdi.”',
]

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <div className="bg-surface text-on-surface">
      <section className="relative min-h-[860px] flex items-center pt-20 overflow-hidden watercolor-bg">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src={images.homeHeroFloral} alt="Floral design" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding grid md:grid-cols-2 gap-16 items-center z-10">
          <div>
            <span className="text-secondary font-label-md tracking-widest block mb-6">KLİNİK PSİKOLOG</span>
            <h1 className="font-display-lg text-display-lg leading-tight mb-8">Ruhunuzda Çiçekler Açsın</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              İyileşme yolculuğu, kendinize sunduğunuz en şefkatli hediyedir. Profesyonel rehberlik ve güvenli bir alanla, içsel huzurunuza giden yolda birlikte yürüyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/iletisim"
                className="bg-primary text-on-primary px-10 py-5 rounded-lg font-label-md text-center hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Online Randevu
              </Link>
              <Link className="border border-primary text-primary px-10 py-5 rounded-lg font-label-md text-center hover:bg-primary/5 transition-all" to="/iletisim">
                İletişime Geç
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden soft-shadow relative">
              <img src={images.homeHeroPortrait} alt="Psychologist portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 rounded-2xl soft-shadow max-w-[240px] hidden lg:block">
              <p className="font-motto text-motto text-primary italic">"Her fırtınadan sonra güneş doğar."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-sm">
              <img src={images.aboutImage1} alt="Therapy space" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-sm mt-12">
              <img src={images.aboutImage2} alt="Watercolor illustration" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-headline-lg text-headline-lg mb-8">Benim Hikayem & Yaklaşımım</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed font-body-md text-body-md">
              <p>
                Merhabalar, ben Bensu Donat. Klinik psikoloji alanındaki uzmanlığımı, her bireyin kendine has hikayesine duyduğum derin saygı ile birleştiriyorum. Terapi sürecini sadece bir iyileşme değil, aynı zamanda bir özgürleşme ve yeniden keşif yolculuğu olarak görüyorum.
              </p>
              <p>
                Çalışmalarımda Bilişsel Davranışçı Terapi ve Şema Terapi ekollerini merkeze alırken, her danışanımın ihtiyacına göre şekillenen esnek ve insancıl bir yaklaşım benimsiyorum. Bilimsel temelli yöntemleri, samimiyet ve profesyonellikle harmanlayarak size en güvenli "limanı" sunmayı hedefliyorum.
              </p>
              <p className="font-bold text-primary italic">"Uzmanlığım, sizin içsel gücünüzle buluştuğunda gerçek değişim başlar."</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-primary font-bold text-3xl mb-1">10+</div>
                <div className="text-sm font-label-md">YILLIK DENEYİM</div>
              </div>
              <div>
                <div className="text-primary font-bold text-3xl mb-1">2000+</div>
                <div className="text-sm font-label-md">MUTLU DANIŞAN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding text-center mb-20 reveal active">
          <h2 className="font-headline-lg text-headline-lg mb-4">Terapi Süreci</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Süreç nasıl işliyor? İlk adımdan itibaren yanınızdayız.</p>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding grid md:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-[32px] soft-shadow border border-surface-container reveal active">
            <div className="w-16 h-16 bg-primary-fixed text-primary flex items-center justify-center rounded-2xl mb-8">
              <span className="material-symbols-outlined text-3xl">chat_bubble</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">İlk Görüşme</h3>
            <p className="text-on-surface-variant leading-relaxed">
              İhtiyaçlarınızı anlamak ve karşılıklı güveni tesis etmek adına yapılan 15 dakikalık ücretsiz ön görüşme seansı.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[32px] soft-shadow border border-surface-container reveal active">
            <div className="w-16 h-16 bg-secondary-container text-secondary flex items-center justify-center rounded-2xl mb-8">
              <span className="material-symbols-outlined text-3xl">calendar_month</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Seans İşleyişi</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Haftalık veya iki haftalık periyotlarla düzenlenen, yaklaşık 50 dakika süren, size özel yapılandırılmış seanslar.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[32px] soft-shadow border border-surface-container reveal active">
            <div className="w-16 h-16 bg-tertiary-fixed-dim text-tertiary flex items-center justify-center rounded-2xl mb-8">
              <span className="material-symbols-outlined text-3xl">video_chat</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Online & Yüz Yüze</h3>
            <p className="text-on-surface-variant leading-relaxed">
              İster Nişantaşı'ndaki ofisimizde, ister dünyanın her yerinden online platformlar üzerinden güvenli görüşme imkanı.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 reveal active">
            <h2 className="font-headline-lg text-headline-lg mb-6">Neden Terapi Almalıyım?</h2>
            <p className="text-on-surface-variant mb-10 leading-relaxed text-body-lg">
              Zihinsel sağlığınız, genel yaşam kalitenizin en güçlü belirleyicisidir. Terapi, sadece sorun çözmek değil; kendinizi daha iyi anlamak için bir yatırımdır.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-on-surface">Duygusal Dayanıklılık</h4>
                  <p className="text-sm text-on-surface-variant">Stres ve zorluklarla başa çıkma becerilerinizi güçlendirir.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-on-surface">Sağlıklı İlişkiler</h4>
                  <p className="text-sm text-on-surface-variant">Kendinizle ve başkalarıyla kurduğunuz bağı derinleştirir.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-on-surface">Farkındalık</h4>
                  <p className="text-sm text-on-surface-variant">Tekrarlayan döngüleri fark etmenizi ve kırmanızı sağlar.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl soft-shadow reveal active">
                <h4 className="font-bold mb-3 text-secondary">VR Terapi</h4>
                <p className="text-sm text-on-surface-variant">Kaygı bozuklukları ve fobilerde Sanal Gerçeklik teknolojisi ile güvenli maruz bırakma yöntemi.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl soft-shadow reveal active">
                <h4 className="font-bold mb-3 text-secondary">MOXO Testi</h4>
                <p className="text-sm text-on-surface-variant">Dikkat, zamanlama ve dürtüsellik ölçümünde dünya standardı olan objektif performans testi.</p>
              </div>
            </div>
            <div className="space-y-6 mt-0 md:mt-12">
              <div className="bg-primary text-on-primary p-8 rounded-3xl soft-shadow reveal active">
                <h4 className="font-bold mb-3">Kintsugi Atölyesi</h4>
                <p className="text-sm opacity-90">Kırıklardan altın bir sanat doğurma felsefesiyle, psikolojik onarım ve dayanıklılık çalışması.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl soft-shadow reveal active">
                <h4 className="font-bold mb-3 text-secondary">Yaşam Ağacı Atölyesi</h4>
                <p className="text-sm text-on-surface-variant">Narrative terapi teknikleriyle, hayatınızın köklerini ve meyvelerini sanatsal bir dille keşfedin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-4">Danışan Yorumları</h2>
              <p className="text-on-surface-variant">Birlikte çıktığımız bu yollardan gelen bazı sesler.</p>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {['E. M.', 'A. K.', 'S. Y.'].map((author, index) => (
              <div key={author} className="bg-surface-container-lowest p-8 rounded-3xl border border-surface-container reveal active" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex text-secondary-fixed-dim mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="italic text-on-surface-variant mb-6">{testimonials[index]}</p>
                <div className="flex justify-between items-center text-sm font-label-md">
                  <span className="font-bold">{author}</span>
                  <span className="text-secondary opacity-60">Kaynak: Drsitesi</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center reveal active">
            <button className="bg-surface-container text-primary px-8 py-4 rounded-xl font-label-md hover:bg-primary/10 transition-all">
              Daha Fazla Yorum
            </button>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[800px] mx-auto px-margin-mobile">
          <h2 className="font-headline-lg text-headline-lg text-center mb-16">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.question} className="bg-white rounded-2xl overflow-hidden border border-surface-container-high">
                <button
                  type="button"
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-bold text-on-surface">{item.question}</span>
                  <span className="material-symbols-outlined transition-transform" style={{ transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    expand_more
                  </span>
                </button>
                <div className={`${activeFaq === index ? 'block' : 'hidden'} px-6 pb-6 text-on-surface-variant leading-relaxed`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding relative overflow-hidden bg-primary text-on-primary">
        <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
          <img src={images.homeHeroFloral} alt="Decorative floral" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding text-center py-20">
          <h2 className="font-headline-lg text-headline-lg mb-6">İyi Oluş Yolculuğunuza Bugün Başlayın</h2>
          <p className="text-on-primary/80 mb-8 max-w-2xl mx-auto text-body-lg">
            Ertelenmiş her huzur, aslında yaşanmamış bir hayattır. Kendinize bir şans verin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/iletisim" className="bg-white text-primary px-12 py-5 rounded-full font-bold hover:shadow-2xl transition-all">
              Hemen Randevu Al
            </Link>
            <div className="flex gap-4 items-center text-on-primary/90">
              <span className="material-symbols-outlined">phone</span>
              <span>+90 (212) --- -- --</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
