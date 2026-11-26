import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/language.context";
import { useTheme } from "../../context/theme.context";
import type { NavItemId } from "../../i18n/types";
import { NAV_ITEMS } from "./constants/nav.constant";

export function Navbar() {
  const [activeTab, setActiveTab] = useState<NavItemId>("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="w-full border-b border-ink/20 bg-cream sticky top-0 z-50 transition-colors duration-300">
      <nav className="max-w-[1680px] mx-auto px-4 sm:px-10 h-20 flex items-center justify-between gap-2">
        {/* 1. Lado izquierdo: Logo "F." + separador */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <a
            href="#inicio"
            onClick={() => setActiveTab("inicio")}
            className="font-display text-3xl font-extrabold tracking-tight flex items-baseline"
          >
            <span>F</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent ml-0.5" />
          </a>

          <span className="hidden sm:inline-block h-5 w-px bg-ink/30" />
        </div>

        {/* 2. Centro: Recorremos NAV_ITEMS y leemos el texto traducido desde t.nav.items */}
        <ul className="hidden lg:flex items-center gap-2 xl:gap-5 font-mono text-xs xl:text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            const colorBoton = isActive
              ? "bg-accent text-[#141413] font-semibold" // Activo: siempre fondo amarillo con texto oscuro
              : "text-ink/80 hover:bg-ink/5";
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-2 xl:px-2.5 py-1 transition-colors whitespace-nowrap inline-block ${colorBoton}`}
                >
                  [ {t.nav.items[item.id]} ]
                </a>
              </li>
            );
          })}
        </ul>

        {/* 3. Lado derecho: Selector de idioma + Modo claro/oscuro + Contacto + 3x3 puntitos + Hamburguesa */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Selector de idioma ES / EN */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.nav.toggleLanguageAria}
            className="font-mono text-xs font-semibold px-2.5 py-2 rounded-md border border-ink/25 text-ink hover:bg-ink/5 transition-colors cursor-pointer uppercase"
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          {/* Selector de tema Claro / Oscuro */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? t.nav.toggleThemeToDarkAria
                : t.nav.toggleThemeToLightAria
            }
            className="p-2 rounded-md border border-ink/25 text-ink hover:bg-ink/5 transition-colors cursor-pointer"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4 text-accent" />
            )}
          </button>

          {/* Botón Contacto */}
          <a
            href="#contacto"
            className="bg-ink text-cream font-mono text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-md flex items-center gap-1.5 sm:gap-2 hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
          >
            <span>{t.nav.contact}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Cuadrícula decorativa 3x3 (solo en escritorio) */}
          <div className="hidden xl:grid grid-cols-3 gap-1.5 p-1">
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className="w-1 h-1 rounded-full bg-ink/70 block"
              />
            ))}
          </div>

          {/* En celular y tablet sale el botón hamburguesa */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? t.nav.closeMenuAria : t.nav.openMenuAria}
            className="lg:hidden p-2 rounded-md border border-ink/25 text-ink hover:bg-ink/5 transition-colors cursor-pointer"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* 4. Menú desplegable estilo Terminal */}
      {isMenuOpen && (
        <div className="lg:hidden bg-terminal text-terminal-text border-t border-terminal-text/15 font-mono">
          {/* Mini barra superior de consola */}
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-terminal-text/10 text-xs text-terminal-text/50">
            <span>{t.nav.mobileDrawerPath}</span>
            <span className="text-accent">{t.nav.mobileDrawerFile}</span>
          </div>

          {/* Lista de enlaces */}
          <ul className="flex flex-col p-4 gap-2 text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              const itemStyles = isActive
                ? "bg-accent text-[#141413] font-semibold"
                : "text-terminal-text/85 hover:bg-terminal-text/10";
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-3 py-2.5 rounded-md transition-colors ${itemStyles}`}
                  >
                    &gt; [ {t.nav.items[item.id]} ]
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
