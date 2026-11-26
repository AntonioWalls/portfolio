import { ArrowUpRight, Smartphone, Terminal } from "lucide-react";
import { useLanguage } from "../../context/language.context";
import type { ProjectItem } from "./interfaces/projects.interface";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id];

  // Elegimos qué ícono mostrar abajo según si es app móvil o web
  const PlatformIcon = project.platform === "mobile" ? Smartphone : Terminal;

  return (
    <article className="group bg-terminal text-terminal-text rounded-xl border border-ink/20 shadow-lg overflow-hidden flex flex-col justify-between hover:border-accent/60 hover:-translate-y-0.5 transition-all">
      {/* 1. Barra superior estilo ventana de consola */}
      <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 border-b border-terminal-text/10 font-mono text-[11px] xl:text-xs">
        {/* Izquierda: 3 puntitos + ruta ~/proyectos/... */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-terminal-text/30" />
          </div>
          {/* truncate pone "..." si la ruta es muy larga en pantallas chicas */}
          <span className="text-terminal-text/60 truncate">{copy.path}</span>
        </div>

        {/* Derecha: etiquetas [web] [fullstack] + flechita */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="hidden sm:flex md:hidden xl:flex items-center gap-1 text-terminal-text/60">
            {copy.tags.map((tag) => (
              <span key={tag}>[{tag}]</span>
            ))}
          </div>

          <a
            href={project.url}
            aria-label={`${t.projects.viewProjectAriaPrefix} ${copy.title}`}
            className="text-terminal-text/70 group-hover:text-accent transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* 2. Cuerpo de la tarjeta: se adapta según el ancho disponible */}
      <div className="p-4 flex flex-col sm:flex-row md:flex-col xl:flex-row gap-4 flex-1">
        {/* Miniatura en blanco y negro */}
        <div className="sm:w-2/5 md:w-full xl:w-2/5 shrink-0 rounded-lg overflow-hidden border border-terminal-text/15 bg-black h-40 sm:h-auto md:h-40 xl:h-auto">
          <img
            src={project.image}
            alt={copy.title}
            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Texto del proyecto + tecnologías al fondo */}
        <div className="flex flex-col justify-between gap-4 flex-1">
          <div className="space-y-2">
            <h3 className="font-mono text-base sm:text-lg font-bold text-accent leading-snug">
              &gt; {copy.title}
            </h3>
            <p className="text-xs sm:text-sm text-terminal-text/75 leading-relaxed">
              {copy.description}
            </p>
          </div>

          {/* .join(" • ") pega el arreglo de tecnologías en un solo texto */}
          <div className="flex items-center gap-2 pt-2 border-t border-terminal-text/10 font-mono text-[11px] text-terminal-text/65">
            <PlatformIcon className="w-3.5 h-3.5 text-terminal-text/50 shrink-0" />
            <span>{project.stack.join(" • ")}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
