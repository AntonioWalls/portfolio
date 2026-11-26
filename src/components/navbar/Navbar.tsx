import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "./constants/nav.constant";

export function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full border-b border-ink/20 bg-cream sticky top-0 z-50">
      <nav className="max-w-[1680px] mx-auto px-4 sm:px-10 h-20 flex items-center justify-between">
        {/* 1. Lado izquierdo: Logo "F." + separador */}
        <div className="flex items-center gap-6">
          <a
            href="#inicio"
            className="font-display text-3xl font-extrabold tracking-tight flex items-baseline"
          >
            <span>F</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent ml-0.5" />
          </a>

          <span className="h-5 w-px bg-ink/30" />
        </div>
        {/* 2. Centro: Recorremos NAV_ITEMS con .map() */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-5 font-mono text-xs lg:text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            const colorBoton = isActive
              ? "bg-accent text-ink font-semibold" // Si es true: fondo amarillo
              : "text-ink/80 hover:bg-ink/5"; // Si es false: transparente
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-2.5 py-1 transition-colors whitespace-nowrap inline-block ${colorBoton}`}
                >
                  [ {item.label} ]
                </a>
              </li>
            );
          })}
        </ul>
        {/* 3. Lado derecho: Botón Contacto + Cuadrícula de 3x3 puntitos */}
        <div className="flex items-center gap-5 shrink-0">
          <a
            href="#contacto"
            className="bg-ink text-cream font-mono text-xs sm:text-sm px-4 py-2.5 rounded-md flex items-center gap-2 hover:bg-ink/85 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Contacto</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="hidden sm:grid grid-cols-3 gap-1.5 p-1">
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className="w-1 h-1 rounded-full bg-ink/70 block"
              />
            ))}
          </div>
          {/* En celular sale el botón hamburguesa */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="md:hidden p-2 rounded-md border border-ink/25 text-ink hover:bg-ink/5 transition-colors cursor-pointer"
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
        <div className="md:hidden bg-terminal text-cream border-t border-cream/10 font-mono">
          {/* Mini barra superior de consola*/}
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-cream/10 text-xs text-cream/50">
            <span>~/fabian.dev/nav</span>
            <span className="text-accent">menu.sh</span>
          </div>

          {/* Lista de enlaces */}
          <ul className="flex flex-col p-4 gap-2 text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              const itemStyles = isActive
                ? "bg-accent text-ink font-semibold"
                : "text-cream/85 hover:bg-cream/10";
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
                    &gt; [ {item.label} ]
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
