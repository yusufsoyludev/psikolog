import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-surface-container-low text-tertiary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-section-padding py-16 max-w-container-max mx-auto">
        <div>
          <Link to="/" className="font-headline-md text-headline-md text-primary tracking-tight">
            Bensu Donat
          </Link>
          <p className="font-motto text-motto mb-8">Ruhunuzda çiçekler açsın.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary-container hover:text-secondary transition-all">
              <span className="material-symbols-outlined text-lg">camera</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary-container hover:text-secondary transition-all">
              <span className="material-symbols-outlined text-lg">alternate_email</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-6">Hızlı Linkler</h4>
          <ul className="space-y-4">
            <li>
              <Link className="text-on-surface-variant hover:text-secondary-container transition-colors" to="/">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-secondary-container transition-colors" to="/terapiler">
                Terapiler
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-secondary-container transition-colors" to="/atolyeler">
                Atölyeler
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-secondary-container transition-colors" to="/iletisim">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-6">İletişim</h4>
          <div className="space-y-4 text-on-surface-variant">
            <p>Telefon: +90 212 000 00 00</p>
            <p>E-posta: merhaba@bensudonat.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-container-high py-8 text-center text-sm text-on-surface-variant">
        <p>© 2024 Bensu Donat. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  )
}
