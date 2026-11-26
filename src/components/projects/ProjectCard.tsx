import { ArrowUpRight, Smartphone, Terminal } from "lucide-react";
import type { ProjectItem } from "./interfaces/projects.interface";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Elegimos qué ícono mostrar abajo según si es app móvil o web
  const PlatformIcon = project.platform === "mobile" ? Smartphone : Terminal;

  return (
    <article className="group bg-terminal text-cream rounded-xl border border-ink/20 shadow-lg overflow-hidden flex flex-col justify-between hover:border-accent/60 hover:-translate-y-0.5 transition-all">
      {/* 1. Barra superior estilo ventana de consola */}
      <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-cream/10 font-mono text-xs">
        {/* Izquierda: 3 puntitos + ruta ~/proyectos/... */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-cream/30" />
          </div>
          {/* truncate pone "..." si la ruta es muy larga en pantallas chicas */}
          <span className="text-cream/60 truncate">{project.path}</span>
        </div>

        {/* Derecha: etiquetas [web] [fullstack] + flechita */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 text-cream/60">
            {project.tags.map((tag) => (
              <span key={tag}>[{tag}]</span>
            ))}
          </div>

          <a
            href={project.url}
            aria-label={`Ver proyecto ${project.title}`}
            className="text-cream/70 group-hover:text-accent transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* 2. Cuerpo de la tarjeta: miniatura a la izquierda + info a la derecha */}
      <div className="p-4 flex flex-col sm:flex-row gap-4 flex-1">
        {/* Miniatura en blanco y negro (igual que en HeroVisual) */}
        <div className="sm:w-2/5 shrink-0 rounded-lg overflow-hidden border border-cream/15 bg-ink h-40 sm:h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Texto del proyecto + tecnologías al fondo */}
        <div className="flex flex-col justify-between gap-4 flex-1">
          <div className="space-y-2">
            <h3 className="font-mono text-base sm:text-lg font-bold text-accent leading-snug">
              &gt; {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-cream/75 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* .join(" • ") pega el arreglo de tecnologías en un solo texto bonito */}
          <div className="flex items-center gap-2 pt-2 border-t border-cream/10 font-mono text-[11px] text-cream/65">
            <PlatformIcon className="w-3.5 h-3.5 text-cream/50 shrink-0" />
            <span>{project.stack.join(" • ")}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
