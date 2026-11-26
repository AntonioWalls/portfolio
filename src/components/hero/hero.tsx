import { ArrowUpRight, Download } from "lucide-react";
import { HeroTerminal } from "./heroTerminal";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    // id="inicio" conecta con el href="#inicio" del Navbar
    <section id="inicio" className="py-10 border-b border-ink/20">
      {/* Celular: 1 columna | Monitor (lg): 12 rebanadas (3 + 4 + 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* COLUMNA 1 (Izquierda - 3 rebanadas) */}
        <div className="lg:col-span-3 flex flex-col justify-center gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-ink/70">
            // PORTAFOLIO PERSONAL
          </p>

          <h1 className="font-display text-4xl xl:text-5xl font-extrabold leading-none tracking-tight">
            DESARROLLO DE SOFTWARE
            <span className="text-accent">.</span>
          </h1>

          <p className="font-mono text-base sm:text-lg text-ink/80">
            Fullstack • Mobile • Cloud
          </p>

          {/* border-l-4 border-accent pl-4 = la rayita amarilla gruesa a la izquierda */}
          <p className="border-l-4 border-accent pl-4 text-sm sm:text-base text-ink/80 leading-relaxed">
            Creo aplicaciones que resuelven problemas reales, con enfoque en
            producto, rendimiento y experiencia.
          </p>

          {/* Botones en fila */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#proyectos"
              className="bg-accent text-ink font-mono text-sm font-semibold px-5 py-3 rounded-lg flex items-center gap-2 hover:brightness-95 transition"
            >
              <span>Ver proyectos</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/cv-fabian.pdf"
              download
              className="border border-ink/40 text-ink font-mono text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-ink/5 transition"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>

        {/* COLUMNA 2 (Centro - 4 rebanadas): Terminal compacta */}
        <div className="lg:col-span-4">
          <HeroTerminal />
        </div>

        {/* COLUMNA 3 (Derecha - 5 rebanadas): Collage visual */}
        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
