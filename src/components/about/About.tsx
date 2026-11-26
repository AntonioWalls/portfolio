import { useLanguage } from "../../context/language.context";
import { AboutTerminal } from "./AboutTerminal";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function About() {
  const { t } = useLanguage();

  return (
    // id="sobre-mi" + scroll-mt-20 conecta con [ Sobre mí ] en el Navbar
    <section id="sobre-mi" className="py-10 scroll-mt-20">
      {/* Celular: 1 col | Tablet/Laptop (md): Sobre mí arriba + 7 y 5 | Monitor grande (xl): 5 + 4 + 3 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* COLUMNA 1: 03. Sobre mí + Bio + Etiquetas + Foto con sol amarillo */}
        <div className="md:col-span-12 xl:col-span-5 flex flex-col sm:flex-row gap-5 items-stretch">
          {/* Sub-bloque izquierdo: título + texto + tags */}
          <div className="flex-1 flex flex-col justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Número + título + barrita amarilla */}
              <div className="shrink-0">
                <span className="font-mono text-sm text-ink/70 block">
                  {t.about.number}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-none mt-1">
                  {t.about.title}
                </h2>
                <span className="block w-10 h-1 bg-accent mt-2.5" />
              </div>

              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                {t.about.bio}
              </p>
            </div>

            {/* Etiquetas (Producto, Arquitectura, UX / DX) */}
            <div className="flex flex-wrap gap-2">
              {t.about.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1 rounded-md border border-ink/30 text-ink/80 bg-card"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sub-bloque derecho: Foto arquitectónica recortada + sol amarillo */}
          <div className="sm:w-44 md:w-52 xl:w-44 shrink-0 relative rounded-xl overflow-hidden min-h-40 bg-cream">
            {/* Sol amarillo detrás */}
            <div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-accent z-0"
              aria-hidden="true"
            />
            {/* Foto en blanco y negro recortada en diagonal */}
            <div className="absolute inset-0 z-10 [clip-path:polygon(0%_36%,76%_14%,100%_34%,100%_100%,0%_100%)]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                alt={t.about.imageAlt}
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>
        </div>

        {/* COLUMNA 2: Línea de tiempo de Experiencia */}
        <div className="md:col-span-7 xl:col-span-4 border-t border-ink/20 pt-6 md:border-t-0 md:pt-0 xl:border-l xl:border-ink/20 xl:pl-6">
          <ExperienceTimeline />
        </div>

        {/* COLUMNA 3: Mini terminal ~/about */}
        <div className="md:col-span-5 xl:col-span-3">
          <AboutTerminal />
        </div>
      </div>
    </section>
  );
}
