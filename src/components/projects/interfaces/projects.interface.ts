import type { ProjectId } from "../../../i18n/types";

// Union type: solo dejamos pasar filtros válidos
export type ProjectFilterId = "todos" | "web" | "mobile" | "cloud";

export interface ProjectItem {
  id: ProjectId;
  image: string;
  // Categorías con las que funciona el filtro interactivo
  categories: Exclude<ProjectFilterId, "todos">[];
  // Tecnologías que se muestran abajo separadas por •
  stack: string[];
  // Enlace al repo o demo
  url: string;
  // Para elegir si el ícono de abajo es de celular o terminal
  platform: "web" | "mobile";
}
