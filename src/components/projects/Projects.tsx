import { useState } from "react";
import { useLanguage } from "../../context/language.context";
import { PROJECT_FILTER_IDS, PROJECTS } from "./constants/projects.constants";
import type { ProjectFilterId } from "./interfaces/projects.interface";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  // Estado que guarda qué filtro está seleccionado actualmente (arranca en "todos")
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("todos");
  const { t } = useLanguage();

  // Calculamos qué proyectos mostrar según el filtro activo
  const filteredProjects =
    activeFilter === "todos"
      ? PROJECTS
      : PROJECTS.filter((project) => project.categories.includes(activeFilter));

  return (
    // id="proyectos" + scroll-mt-20 conecta con el Navbar y con el botón amarillo del Hero
    <section
      id="proyectos"
      className="py-10 border-b border-ink/20 scroll-mt-20"
    >
      {/* Celular: 1 col | Laptop (lg): título arriba + 9 y 3 | Monitor grande (xl): 2 + 8 + 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* COLUMNA IZQUIERDA (2 rebanadas en xl): Número + Título + Descripción */}
        <div className="lg:col-span-12 xl:col-span-2 flex flex-col justify-between gap-4">
          <div>
            <span className="font-mono text-sm text-ink/70 block">
              {t.projects.number}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mt-1">
              {t.projects.title}
            </h2>
            {/* Barrita amarilla debajo del título */}
            <span className="block w-10 h-1 bg-accent mt-2.5" />
          </div>

          <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
            {t.projects.description}
          </p>
        </div>

        {/* COLUMNA CENTRAL (8 rebanadas en xl): Las tarjetas de proyectos */}
        <div className="lg:col-span-9 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* COLUMNA DERECHA (2 rebanadas en xl): Decoración de puntitos + Filtros interactivos */}
        <aside className="lg:col-span-3 xl:col-span-2 flex flex-col justify-between gap-5">
          {/* Cuadrícula de puntitos + símbolo >_ */}
          <div className="hidden lg:flex items-center justify-between">
            <div
              className="grid grid-cols-6 gap-1.5 opacity-60"
              aria-hidden="true"
            >
              {Array.from({ length: 18 }).map((_, index) => (
                <span
                  key={index}
                  className="w-1 h-1 rounded-full bg-ink block"
                />
              ))}
            </div>
            <span className="font-mono text-lg font-bold text-ink">&gt;_</span>
          </div>

          {/* Lista de botones de filtro */}
          <div className="flex flex-row flex-wrap lg:flex-col gap-2 font-mono text-xs sm:text-sm">
            {PROJECT_FILTER_IDS.map((filterId) => {
              const isActive = activeFilter === filterId;
              const buttonStyles = isActive
                ? "bg-accent text-[#141413] font-semibold" // Activo: amarillo con texto oscuro en ambos modos
                : "bg-ink/5 text-ink/80 hover:bg-ink/10";

              return (
                <button
                  key={filterId}
                  type="button"
                  onClick={() => setActiveFilter(filterId)}
                  className={`text-left px-3 py-2 rounded-md cursor-pointer transition-colors ${buttonStyles}`}
                >
                  &gt; {t.projects.filters[filterId]}
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}
