import { useLanguage } from "../../context/language.context";

export function AboutTerminal() {
  const { t } = useLanguage();

  return (
    <div className="flex items-stretch gap-3 h-full">
      {/* Mini consola oscura ~/about */}
      <div className="flex-1 bg-terminal text-terminal-text rounded-xl border border-ink/20 shadow-lg overflow-hidden font-mono text-xs flex flex-col">
        {/* Barra superior de ventana */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-terminal-text/10">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-terminal-text/30" />
          </div>
          <span className="text-terminal-text/60">{t.about.terminalPath}</span>
        </div>

        {/* Lista de intereses */}
        <div className="p-4 space-y-1.5 flex-1">
          <p className="text-accent font-semibold mb-2">
            &gt; {t.about.interestsCommand}
          </p>
          {t.about.interests.map((interest) => (
            <p
              key={interest}
              className="text-terminal-text/80 leading-relaxed"
            >
              &gt; {interest}
            </p>
          ))}
        </div>
      </div>

      {/* Tira vertical de puntitos decorativos al extremo derecho */}
      <div
        className="hidden sm:grid grid-cols-2 gap-1.5 content-between py-2 opacity-50 shrink-0"
        aria-hidden="true"
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="w-1 h-1 rounded-full bg-ink block" />
        ))}
      </div>
    </div>
  );
}
