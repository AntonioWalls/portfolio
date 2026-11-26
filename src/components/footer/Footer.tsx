import { useLanguage } from "../../context/language.context";

// Calculamos el año fuera del render para mantener el componente puro (React Compiler / oxlint)
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { t } = useLanguage();

  return (
    // Footer minimalista estilo terminal (sin repetir los enlaces del Navbar)
    <footer
      id="contacto"
      className="w-full bg-terminal text-terminal-text border-t border-terminal-text/15 mt-6"
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs sm:text-sm">
        {/* Izquierda: Logo "F." + separador + ~/fabian.dev */}
        <div className="flex items-center gap-4">
          <a
            href="#inicio"
            className="font-display text-2xl font-extrabold tracking-tight flex items-baseline text-terminal-text"
          >
            <span>F</span>
            <span className="inline-block w-2 h-2 rounded-full bg-accent ml-0.5" />
          </a>

          <span className="h-4 w-px bg-terminal-text/25" />

          <span className="text-terminal-text/65">{t.footer.path}</span>
        </div>

        {/* Centro: Firma limpia */}
        <p className="text-terminal-text/50 text-xs text-center">
          &copy; {CURRENT_YEAR} {t.footer.signature}
        </p>

        {/* Derecha: Estado estilo consola (> listo. ● / > ready. ●) */}
        <div className="flex items-center gap-2 text-terminal-text/85">
          <span>&gt; {t.footer.status}</span>
          <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
        </div>
      </div>
    </footer>
  );
}
