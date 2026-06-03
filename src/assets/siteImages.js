const imageModules = import.meta.glob('../../img/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default'
})

const resolveImage = (candidates) => {
  for (const candidate of candidates) {
    const asset = imageModules[`../../img/${candidate}`]

    if (asset) {
      return asset
    }
  }

  return null
}

export const siteImages = {
  heroPortrait: {
    src: resolveImage(['hero-portre.png']),
    alt: 'Klinik Psikolog Bensu Donat portresi'
  },
  approach: {
    src: resolveImage(['benim-yaklasimim.png', 'benim-yaklasımım.png']),
    alt: 'Bensu Donatin terapi yaklasimini yansitan calisma alani'
  },
  adultTherapy: {
    src: resolveImage(['yetiskin-terapisi.png', 'yetişkin-terapisi.png']),
    alt: 'Yetiskin terapisi seansini temsil eden gorsel'
  },
  coupleTherapy: {
    src: resolveImage(['cift-terapisi.png', 'çift-terapisi.png']),
    alt: 'Cift terapisi surecini temsil eden gorsel'
  },
  vrTherapy: {
    src: resolveImage(['vr.png']),
    alt: 'VR terapi uygulamasini gosteren gorsel'
  },
  moxo: {
    src: resolveImage(['moxo.png']),
    alt: 'MOXO degerlendirme uygulamasini gosteren gorsel'
  },
  lifeTree: {
    src: resolveImage(['yasamagaci.png', 'yasamagacı.png']),
    alt: 'Yasam Agaci atolyesi icin hazirlanan yaratici calisma gorseli'
  },
  kintsugi: {
    src: resolveImage(['kintsugi.png']),
    alt: 'Kintsugi atolyesini temsil eden seramik onarim gorseli'
  }
}
