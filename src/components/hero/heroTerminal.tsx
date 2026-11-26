import { Terminal } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/language.context";
import { TERMINAL_TABS } from "./constants/terminal.constant";
import type {
  TerminalSystemRow,
  TerminalTab,
} from "./interfaces/terminal.interface";

export function HeroTerminal() {
  // Estado tipado: solo acepta 'inicio' | 'info' | 'stats'
  const [activeTab, setActiveTab] = useState<TerminalTab>("inicio");
  const { t } = useLanguage();

  const activeView = t.terminal.views[activeTab];
  const systemRows: TerminalSystemRow[] = [
    {
      label: t.terminal.system.systemLabel,
      value: t.terminal.system.systemValue,
      isOnline: true,
    },
    {
      label: t.terminal.system.modeLabel,
      value: t.terminal.system.modeValue,
    },
    {
      label: t.terminal.system.locationLabel,
      value: t.terminal.system.locationValue,
    },
    {
      label: t.terminal.system.currentLabel,
      value: t.terminal.system.currentValue,
    },
  ];

  return (
    <div className="bg-terminal text-terminal-text rounded-xl border border-ink/20 shadow-lg overflow-hidden font-mono text-xs sm:text-sm h-full flex flex-col justify-between">
      {/* 1. Barra superior de ventana (3 puntitos + ruta + pestañas) */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 sm:px-4 py-3 border-b border-terminal-text/10">
        {/* Izquierda: 3 bolitas + ruta ~/fabian.dev */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-terminal-text/30" />
          </div>
          <span className="text-terminal-text/60 text-xs">
            {t.terminal.path}
          </span>
        </div>

        {/* Derecha: Pestañas [inicio] [info] [stats] */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs">
          {TERMINAL_TABS.map((tab) => {
            const isActive = activeTab === tab;
            const tabStyles = isActive
              ? "text-accent border-b border-accent"
              : "text-terminal-text/50 hover:text-terminal-text";

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`pb-0.5 cursor-pointer transition-colors ${tabStyles}`}
              >
                [{t.terminal.tabs[tab]}]
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Cuerpo de la consola (cambia según la pestaña activa y el idioma) */}
      <div className="p-4 space-y-1.5 min-h-36">
        <p className="text-accent font-semibold">&gt; {activeView.command}</p>
        {activeView.lines.map((line, index) => (
          <p
            key={line}
            className={
              index === 0
                ? "text-terminal-text"
                : "text-terminal-text/75 leading-relaxed"
            }
          >
            &gt; {line}
          </p>
        ))}

        {/* Cursor parpadeante al final */}
        <p className="text-terminal-text/80 pt-1">
          &gt;{" "}
          <span className="inline-block w-2 h-4 bg-accent align-middle animate-pulse" />
        </p>
      </div>

      {/* 3. Pie de la terminal: ícono + info del sistema + barritas decorativas */}
      <div className="px-4 sm:px-5 py-4 border-t border-terminal-text/10 flex items-center justify-between gap-4 bg-black/30">
        {/* Ícono + tabla de sistema */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className="w-12 h-12 rounded-lg border border-terminal-text/15 bg-terminal-text/5 flex items-center justify-center shrink-0">
            <Terminal className="w-6 h-6 text-accent" />
          </div>

          <div className="space-y-1 text-xs min-w-0">
            {systemRows.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-terminal-text/50 w-20 shrink-0">
                  {item.label}
                </span>
                <span className="text-terminal-text/90 flex items-center gap-1.5 whitespace-nowrap">
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

        {/* Mini gráfica de barras + cuadrícula de puntitos 4x4 */}
        <div className="hidden sm:flex items-end gap-4">
          <div className="flex items-end gap-1 h-9">
            <span className="w-1 h-3 bg-terminal-text/30 rounded-full" />
            <span className="w-1 h-6 bg-terminal-text/50 rounded-full" />
            <span className="w-1 h-4 bg-terminal-text/40 rounded-full" />
            <span className="w-1 h-9 bg-accent rounded-full" />
            <span className="w-1 h-5 bg-terminal-text/50 rounded-full" />
            <span className="w-1 h-7 bg-terminal-text/70 rounded-full" />
            <span className="w-1 h-3 bg-terminal-text/30 rounded-full" />
          </div>

          <div
            className="grid grid-cols-4 gap-1.5 opacity-40"
            aria-hidden="true"
          >
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="w-1 h-1 rounded-full bg-terminal-text block"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
