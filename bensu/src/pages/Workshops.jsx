import { Link } from 'react-router-dom'
import images from '../assets/images'

export default function Workshops() {
  return (
    <div className="bg-surface text-on-surface">
      <header className="relative pt-24 pb-16 px-margin-mobile md:px-section-padding text-center overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 opacity-20 pointer-events-none">
          <img src={images.homeHeroFloral} alt="Soft watercolor" className="w-full h-full object-contain" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-secondary font-label-md text-label-md tracking-widest uppercase mb-4">Atölyeler</span>
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-6">Ruhunuza Dokunan Atölye Deneyimleri</h1>
          <p className="font-body-md text-body-lg text-on-surface-variant leading-relaxed">
            Sanat, farkındalık ve içsel iyileşmeyi birleştiren atölyelerle, kendinizi yeni bir algı ile keşfetmeye davet ediyorum.
          </p>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-section-padding">
        <section className="py-section-padding bg-white relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md">
                <span className="w-8 h-px bg-secondary-fixed-dim"></span>
                SANATSAL İYİLEŞME
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary">Kintsugi Atölyesi: Kırıklardan Doğan Güzellik</h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Kintsugi, Japonya'dan gelen asırlık bir felsefedir. Kırılan seramikleri altınla birleştirerek, onları eskisinden daha değerli ve hikayesi olan bir objeye dönüştürmeyi öğretir.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary-fixed-dim shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    auto_awesome
                  </span>
                  <div>
                    <h4 className="font-label-md text-on-surface">Duygusal Onarım</h4>
                    <p className="text-body-md text-on-surface-variant">Kendi içsel yaralarımıza şefkatle bakmayı ve onları altınla parlatmayı öğreniyoruz.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary-fixed-dim shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    spa
                  </span>
                  <div>
                    <h4 className="font-label-md text-on-surface">Sabır ve Kabulleniş</h4>
                    <p className="text-body-md text-on-surface-variant">Zamanın ve emeğin iyileştirici gücünü, seramiklerin parçalarını birleştirirken deneyimliyoruz.</p>
                  </div>
                </div>
              </div>
              <Link
                to="/iletisim"
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-all shadow-sm"
              >
                Yerini Ayırt
              </Link>
            </div>
            <div className="md:col-span-6 relative mt-12 md:mt-0">
              <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src={images.kintsugiImage} alt="Kintsugi pottery" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-surface-container-low p-8 rounded-xl shadow-lg max-w-[240px] hidden lg:block border border-white/50 backdrop-blur-sm">
                <p className="font-motto text-motto text-primary mb-2">"Kusur, ruhun imzasidir."</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-padding bg-surface-container-lowest overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 md:order-1 order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="pt-12">
                  <img src={images.treeWorkshopImage} alt="Tree workshop" className="rounded-2xl shadow-lg w-full aspect-square object-cover" />
                </div>
                <div>
                  <img src={images.journalWorkshopImage} alt="Journaling workshop" className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover mb-4" />
                </div>
              </div>
            </div>
            <div className="md:col-span-6 md:order-2 order-1 space-y-8 md:pl-16">
              <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md">
                <span className="w-8 h-px bg-primary-container"></span>
                İÇSEL KEŞİF
              </div>
              <h2 className="font-headline-lg text-headline-lg text-secondary">Yaşam Ağacı Atölyesi: Kökler ve Kanatlar</h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Kendi yaşam ağacınızı kağıda dökerken, geçmişinizin derin köklerini, bugününüzün gövdesini ve geleceğinizin çiçek açan dallarını keşfedin.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-secondary-container">
                  <h5 className="font-label-md text-secondary mb-2">Öz-Farkındalık</h5>
                  <p className="text-body-md text-on-surface-variant">Değerlerinizi ve yeteneklerinizi simgelerle görselleştirin.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-primary-container">
                  <h5 className="font-label-md text-primary mb-2">Vizyon Çalışması</h5>
                  <p className="text-body-md text-on-surface-variant">Hayallerinizi somutlaştırarak gelecek rotanızı çizin.</p>
                </div>
              </div>
              <Link to="/iletisim" className="inline-block text-on-surface font-label-md text-label-md blush-underline py-2">
                ATÖLYE DETAYLARINI İNCELE
              </Link>
            </div>
          </div>
        </section>

        <section className="py-section-padding">
          <div className="max-w-3xl mx-auto bg-primary text-on-primary p-12 md:p-20 rounded-[40px] text-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 space-y-6">
              <h3 className="font-headline-lg text-headline-lg">Gelecek atölyelerden haberdar olun.</h3>
              <p className="text-body-lg opacity-90">Etkinlik takvimi ve özel duyurular için bültenimize kayıt olabilirsiniz.</p>
              <form className="flex flex-col sm:flex-row gap-4 mt-8">
                <input
                  className="flex-grow bg-white/10 border-b border-white/30 text-white placeholder:text-white/60 focus:ring-0 focus:border-white py-4 px-0 transition-all font-body-md"
                  placeholder="E-posta adresiniz"
                  type="email"
                />
                <button className="bg-surface text-primary px-10 py-4 rounded-lg font-label-md text-label-md hover:bg-secondary-fixed transition-colors">
                  Kayıt Ol
                </button>
              </form>
              <p className="text-sm opacity-60">"Ruhunuzda çiçekler açsın."</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
