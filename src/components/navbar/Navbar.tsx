import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "./constants/nav.constant";

export function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("inicio");

  return (
    <header className="w-full border-b border-ink/20 bg-cream sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* 1. Lado izquierdo: Logo "F." + separador */}{" "}
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
        <ul className="hidden md:flex items-center gap-2 lg:gap-6 font-mono text-sm">
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
                  className={`px-2.5 py-1 transition-colors ${colorBoton}`}
                >
                  [ {item.label} ]
                </a>
              </li>
            );
          })}
        </ul>
        {/* 3. Lado derecho: Botón Contacto + Cuadrícula de 3x3 puntitos */}
        <div className="flex items-center gap-5">
          <a
            href="#contacto"
            className="bg-ink text-cream font-mono text-xs sm:text-sm px-4 py-2.5 rounded-md flex items-center gap-2 hover:bg-ink/85 transition-colors"
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
        </div>
      </nav>
    </header>
  );
}
