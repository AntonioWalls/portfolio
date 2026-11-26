import { ArrowUpRight, Download } from "lucide-react";
import { useLanguage } from "../../context/language.context";
import { HeroTerminal } from "./heroTerminal";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const { t } = useLanguage();

  return (
    // id="inicio" + scroll-mt-20 conecta con el href="#inicio" del Navbar
    <section
      id="inicio"
      className="py-8 sm:py-10 border-b border-ink/20 scroll-mt-20"
    >
      {/* Celular: 1 col | Tablet/Laptop (md): 5 + 7 arriba y collage abajo | Monitor grande (xl): 3 + 4 + 5 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* COLUMNA 1 (Izquierda) */}
        <div className="md:col-span-5 xl:col-span-3 flex flex-col justify-center gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-ink/70">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-none tracking-tight">
            {t.hero.title}
            <span className="text-accent">.</span>
          </h1>

          <p className="font-mono text-base sm:text-lg text-ink/80">
            {t.hero.subtitle}
          </p>

          {/* border-l-4 border-accent pl-4 = la rayita amarilla gruesa a la izquierda */}
          <p className="border-l-4 border-accent pl-4 text-sm sm:text-base text-ink/80 leading-relaxed">
            {t.hero.description}
          </p>

          {/* Botones en fila */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#proyectos"
              className="bg-accent text-[#141413] font-mono text-sm font-semibold px-5 py-3 rounded-lg flex items-center gap-2 hover:brightness-95 transition"
            >
              <span>{t.hero.ctaProjects}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/cv-fabian.pdf"
              download
              className="border border-ink/40 text-ink font-mono text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-ink/5 transition"
            >
              <Download className="w-4 h-4" />
              <span>{t.hero.ctaDownloadCv}</span>
            </a>
          </div>
        </div>

        {/* COLUMNA 2 (Centro): Terminal compacta */}
        <div className="md:col-span-7 xl:col-span-4">
          <HeroTerminal />
        </div>

        {/* COLUMNA 3 (Derecha): Collage visual */}
        <div className="md:col-span-12 xl:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
