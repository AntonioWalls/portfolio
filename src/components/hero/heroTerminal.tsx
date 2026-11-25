import { useState } from "react";
import { Terminal } from "lucide-react";
import { SYSTEM_INFO, TERMINAL_TABS } from "./constants/terminal.constant";
import type { TerminalTab } from "./interfaces/terminal.interface";

export function HeroTerminal() {
  // Estado tipado: solo acepta 'inicio' | 'info' | 'stats'
  const [activeTab, setActiveTab] = useState<TerminalTab>("inicio");

  return (
    <div className="bg-terminal text-cream rounded-xl border border-ink/20 shadow-lg overflow-hidden font-mono text-xs sm:text-sm">
      {/* 1. Barra superior de ventana (3 puntitos + ruta + pestañas) */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-cream/10">
        {/* Izquierda: 3 bolitas + ruta ~/fabian.dev */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-cream/30" />
          </div>
          <span className="text-cream/60 text-xs">~/fabian.dev</span>
        </div>

        {/* Derecha: Pestañas [inicio] [info] [stats] */}
        <div className="flex items-center gap-3 text-xs">
          {TERMINAL_TABS.map((tab) => {
            const isActive = activeTab === tab;
            const tabStyles = isActive
              ? "text-accent border-b border-accent"
              : "text-cream/50 hover:text-cream";

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`pb-0.5 cursor-pointer transition-colors ${tabStyles}`}
              >
                [{tab}]
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Cuerpo de la consola (cambia según la pestaña activa) */}
      <div className="p-5 space-y-2 min-h-44">
        {/* Vista de la pestaña [inicio] */}
        {activeTab === "inicio" && (
          <>
            <p className="text-accent font-semibold">&gt; whoami</p>
            <p className="text-cream">&gt; Fabián</p>
            <p className="text-cream/80">
              &gt; Desarrollador Fullstack y Mobile
            </p>
            <p className="text-cream/70 leading-relaxed">
              &gt; Apasionado por la tecnología, el producto y la ingeniería que
              genera impacto.
            </p>
          </>
        )}

        {/* Vista de la pestaña [info] */}
        {activeTab === "info" && (
          <>
            <p className="text-accent font-semibold">&gt; cat stack.txt</p>
            <p className="text-cream/80">
              &gt; Mobile: Kotlin • Jetpack Compose
            </p>
            <p className="text-cream/80">
              &gt; Backend: NestJS • TypeScript • PostgreSQL
            </p>
            <p className="text-cream/80">
              &gt; Frontend: React • Angular • Tailwind CSS
            </p>
          </>
        )}

        {/* Vista de la pestaña [stats] */}
        {activeTab === "stats" && (
          <>
            <p className="text-accent font-semibold">&gt; git status</p>
            <p className="text-cream/80">
              &gt; Experiencia: Residencias @ Bizopps Group
            </p>
            <p className="text-cream/80">
              &gt; En construcción: FocalDrop &amp; Portafolio
            </p>
            <p className="text-cream/80">
              &gt; Estado: Abierto a oportunidades
            </p>
          </>
        )}

        {/* Cursor parpadeante al final */}
        <p className="text-cream/80 pt-1">
          &gt;{" "}
          <span className="inline-block w-2 h-4 bg-accent align-middle animate-pulse" />
        </p>
      </div>

      {/* 3. Pie de la terminal: ícono + info del sistema + barritas decorativas */}
      <div className="px-5 py-4 border-t border-cream/10 flex items-center justify-between gap-4 bg-ink/40">
        {/* Ícono + tabla de sistema */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg border border-cream/15 bg-cream/5 flex items-center justify-center shrink-0">
            <Terminal className="w-6 h-6 text-accent" />
          </div>

          <div className="space-y-1 text-xs">
            {SYSTEM_INFO.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-cream/50 w-20">{item.label}</span>
                <span className="text-cream/90 flex items-center gap-1.5">
                  {item.value}
                  {/* Si isOnline es true, dibuja el puntito verde */}
                  {item.isOnline && (
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini gráfica de barras decorativa (como la de la imagen) */}
        <div className="hidden sm:flex items-end gap-1 h-10">
          <span className="w-1 h-3 bg-cream/30 rounded-full" />
          <span className="w-1 h-6 bg-cream/50 rounded-full" />
          <span className="w-1 h-4 bg-cream/40 rounded-full" />
          <span className="w-1 h-9 bg-accent rounded-full" />
          <span className="w-1 h-5 bg-cream/50 rounded-full" />
          <span className="w-1 h-7 bg-cream/70 rounded-full" />
          <span className="w-1 h-3 bg-cream/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}
