import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigationItems } from "../data/navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const linkClasses = ({ isActive }) =>
    [
      "text-label-md font-body-md transition-colors",
      isActive
        ? "text-primary border-b-2 border-primary pb-1 font-bold"
        : "text-on-surface-variant hover:text-primary",
    ].join(" ");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/20 bg-surface/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1120px] items-center justify-between px-gutter py-4">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Bensu Donat ana sayfa"
          >
            <img
              src="/assets/logo/bensu-donat-logo.svg"
              alt="Bensu Donat Logo"
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={linkClasses}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/iletisim"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-label-md text-on-primary transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary-container"
            >
              Randevu Al
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Menüyü aç"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/30 text-primary md:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </nav>
      </header>

      <div
        className={[
          "fixed inset-x-4 top-[84px] z-40 rounded-[24px] border border-outline-variant/30 bg-surface-container shadow-lg shadow-primary/10 transition-all duration-300 md:hidden",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        ].join(" ")}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                [
                  "text-base transition-colors",
                  isActive ? "font-semibold text-primary" : "text-on-surface-variant",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/iletisim"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-label-md text-on-primary"
          >
            Randevu Al
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
