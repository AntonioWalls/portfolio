import { Mail } from "lucide-react";
import { useLanguage } from "../../context/language.context";
import { SOCIAL_LINKS } from "../contact/constants/contact.constant";

// Calculamos el año fuera del render para mantener el componente puro (React Compiler / oxlint)
const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const { t } = useLanguage();

  return (
    // Footer minimalista estilo terminal con accesos rápidos a LinkedIn, GitHub y Contacto
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

        {/* Derecha: Íconos de LinkedIn, GitHub y Correo + Estado estilo consola */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="p-1.5 rounded-md text-terminal-text/70 hover:text-accent hover:bg-terminal-text/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}

            <button
              type="button"
              onClick={onOpenContact}
              aria-label={t.footer.openContactAria}
              title={t.nav.contact}
              className="p-1.5 rounded-md text-terminal-text/70 hover:text-accent hover:bg-terminal-text/10 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>

          <span className="h-4 w-px bg-terminal-text/25" />

          <div className="flex items-center gap-2 text-terminal-text/85">
            <span>&gt; {t.footer.status}</span>
            <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
