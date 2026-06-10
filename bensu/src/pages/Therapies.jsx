import { Link } from 'react-router-dom'
import images from '../assets/images'

export default function Therapies() {
  return (
    <div className="bg-surface text-on-surface">
      <header className="relative pt-24 pb-16 px-margin-mobile md:px-section-padding text-center overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 opacity-20 pointer-events-none">
          <img src={images.therapyHeroFloral} alt="Watercolor floral" className="w-full h-full object-contain" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-secondary font-label-md text-label-md tracking-widest uppercase mb-4">Uygulamalarımız</span>
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-6">Yenilikçi Terapi Yaklaşımları</h1>
          <p className="font-body-md text-body-lg text-on-surface-variant leading-relaxed">
            Modern bilim ve şefkatli rehberliğin buluştuğu noktada, size en uygun yöntemlerle yanınızdayız.
          </p>
        </div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 opacity-15 pointer-events-none">
          <img src={images.therapyHeroFloral} alt="Botanical background" className="w-full h-full object-contain" />
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
        <section className="py-section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 text-primary">
                <span className="material-symbols-outlined">vrpano</span>
                <span className="font-label-md text-label-md">Geleceğin Terapisi</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">VR (Sanal Gerçeklik) Terapi</h2>
              <div className="space-y-6 text-on-surface-variant font-body-md leading-relaxed">
                <p>
                  Sanal Gerçeklik Terapisi, danışanların kontrollü ve güvenli bir dijital ortamda zorlandıkları durumlarla yüzleşmelerini sağlayan, kanıta dayalı bir yöntemdir.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
                    <h4 className="font-bold text-on-surface mb-2">Kontrollü Ortam</h4>
                    <p className="text-sm">Kaygı tetikleyicileri terapist kontrolünde, kademeli olarak uygulanır.</p>
                  </div>
                  <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
                    <h4 className="font-bold text-on-surface mb-2">Yüksek Etki</h4>
                    <p className="text-sm">Beyin, sanal deneyimi gerçek gibi algılayarak kalıcı öğrenme sağlar.</p>
                  </div>
                </div>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span>Fobilerin (yükseklik, uçuş, kapalı alan) tedavisinde etkilidir.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span>Sosyal anksiyete ve topluluk önünde konuşma korkusu için pratik imkanı sunar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span>Travma sonrası stres bozukluğu yönetiminde kullanılır.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={images.therapyVr} alt="VR therapy" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
                <p className="font-motto text-primary text-lg italic">"Korkularınızla güvenli bir limanda yüzleşin."</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">MOXO Dikkat Testi</h2>
            <p className="text-on-surface-variant italic">
              Dikkat, Zamanlama, Dürtüsellik ve Hiperaktiviteyi ölçen tek objektif test.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-3xl soft-shadow flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Hedef Gruplar</h3>
              <p className="text-on-surface-variant mb-6 text-sm">
                MOXO Çocuk (6-12 yaş) ve MOXO Genç/Yetişkin (13-65 yaş) versiyonlarıyla tüm yaş gruplarına hitap eder.
              </p>
              <div className="mt-auto space-y-2 w-full text-left">
                <div className="flex justify-between items-center text-sm border-b border-surface-variant pb-2">
                  <span>Çocuk Grubu</span>
                  <span className="font-bold">6-12 Yaş</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-surface-variant pb-2">
                  <span>Yetişkin Grubu</span>
                  <span className="font-bold">13-65 Yaş</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-3xl soft-shadow flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Test Süreci</h3>
              <p className="text-on-surface-variant mb-6 text-sm">
                Bilgisayar ortamında gerçekleştirilen, çevresel çeldiricilerin (görsel ve işitsel) kullanıldığı bilimsel bir performans ölçümüdür.
              </p>
              <div className="mt-auto flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-surface-variant rounded-full text-xs font-semibold">15-20 Dakika</span>
                <span className="px-3 py-1 bg-surface-variant rounded-full text-xs font-semibold">Objektif Rapor</span>
                <span className="px-3 py-1 bg-surface-variant rounded-full text-xs font-semibold">Hızlı Analiz</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-3xl soft-shadow flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary mb-6 group-hover:bg-tertiary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">trending_up</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Kazanımlar</h3>
              <p className="text-on-surface-variant mb-6 text-sm">
                Akademik başarıyı artırma, iş performansını optimize etme ve odaklanma sorunlarını saptama konusunda yol gösterir.
              </p>
              <button className="mt-auto text-primary font-bold hover:underline flex items-center gap-2">
                Detaylı Bilgi
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <section className="py-section-padding">
          <div className="bg-primary-container/30 rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none rotate-180">
              <img src={images.therapyHeroFloral} alt="Floral accent" className="w-full h-full object-contain" />
            </div>
            <h2 className="font-display-lg text-headline-lg mb-6 text-on-primary-container relative z-10">Hangi terapi sizin için uygun?</h2>
            <p className="text-body-lg text-on-primary-container/80 mb-10 max-w-xl mx-auto relative z-10">
              Uzman eşliğinde yapılacak bir ön görüşme ile en etkili yol haritasını birlikte belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/iletisim" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-label-md shadow-lg hover:-translate-y-1 transition-all">
                Hemen Randevu Al
              </Link>
              <Link to="/iletisim" className="bg-surface text-primary border border-primary px-10 py-4 rounded-xl font-label-md hover:bg-primary/5 transition-all">
                Bize Sorun
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
