import { NavLink } from "react-router-dom";
import { navigationItems } from "../data/navigation";

function Footer() {
  return (
    <footer className="border-t border-outline-variant/20 bg-background">
      <div className="mx-auto max-w-[1120px] px-gutter py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
          <div className="space-y-3">
            <h2 className="font-headline-sm text-primary">Bensu Donat</h2>
            <p className="max-w-md text-sm leading-7 text-on-surface-variant">
              Ruhunuzda çiçekler açması için güvenli, sakin ve çağdaş bir terapi alanı.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  [
                    "text-sm transition-colors",
                    isActive ? "font-semibold text-primary" : "text-on-surface-variant hover:text-primary",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="#"
              className="text-sm text-on-surface-variant hover:text-primary"
            >
              Gizlilik Politikası
            </a>
            <a
              href="#"
              className="text-sm text-on-surface-variant hover:text-primary"
            >
              KVKK Aydınlatma
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:merhaba@bensudonat.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary transition-transform hover:-translate-y-0.5"
              aria-label="E-posta gönder"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
            <a
              href="tel:+905001000000"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary transition-transform hover:-translate-y-0.5"
              aria-label="Telefon ile ara"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary transition-transform hover:-translate-y-0.5"
              aria-label="Bağlantıyı paylaş"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-outline-variant/20 pt-6 text-sm text-on-surface-variant">
          © 2024 Bensu Donat. Tüm hakları saklıdır. Ruhunuzda Çiçekler Açsın.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
