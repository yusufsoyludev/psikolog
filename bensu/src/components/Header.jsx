import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Terapiler', to: '/terapiler' },
  { label: 'Atölyeler', to: '/atolyeler' },
  { label: 'İletişim', to: '/iletisim' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const linkClass = ({ isActive }) =>
    `font-label-md text-label-md transition-all ${
      isActive
        ? 'text-primary font-bold border-b-2 border-secondary-fixed-dim pb-1'
        : 'text-on-surface-variant hover:text-primary'
    }`

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-section-padding max-w-container-max mx-auto h-20">
        <Link to="/" className="font-display-lg text-headline-md text-primary tracking-tight">
          Bensu Donat
        </Link>

        <nav className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/iletisim"
            className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Online Randevu
          </Link>
        </nav>

        <button
          className="md:hidden text-primary"
          aria-label="Mobil menüyü aç"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-t border-surface-container-high shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `font-label-md text-label-md ${
                    isActive ? 'text-primary font-bold' : 'text-on-surface-variant'
                  }`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/iletisim"
              className="inline-block bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md text-center"
              onClick={closeMenu}
            >
              Online Randevu
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
