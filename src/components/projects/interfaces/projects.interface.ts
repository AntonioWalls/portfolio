// Union type: igual que hiciste con TerminalTab, aquí solo dejamos pasar filtros válidos
export type ProjectFilterId = "todos" | "web" | "mobile" | "cloud";

export interface ProjectItem {
  id: string;
  title: string;
  // Ruta estilo consola que sale arriba a la izquierda: ~/proyectos/...
  path: string;
  description: string;
  image: string;
  // Etiquetas que salen arriba a la derecha: [web] [fullstack]
  tags: string[];
  // Categorías con las que va a funcionar el filtro interactivo
  categories: Exclude<ProjectFilterId, "todos">[];
  // Tecnologías que se muestran abajo separadas por •
  stack: string[];
  // Enlace al repo o demo (por ahora puede ser "#")
  url: string;
  // Para elegir si el ícono de abajo es de celular o terminal
  platform: "web" | "mobile";
}

export interface ProjectFilter {
  id: ProjectFilterId;
  label: string;
}
