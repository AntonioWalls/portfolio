import type {
  ProjectFilter,
  ProjectItem,
} from "../interfaces/projects.interface";

export const PROJECT_FILTERS: ProjectFilter[] = [
  { id: "todos", label: "ver todos" },
  { id: "web", label: "por web" },
  { id: "mobile", label: "por mobile" },
  { id: "cloud", label: "por cloud" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "portal-onboarding",
    title: "Portal de Onboarding",
    path: "~/proyectos/portal-onboarding",
    description:
      "Plataforma web para la gestión del ciclo de incorporación de nuevos colaboradores.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    tags: ["web", "fullstack"],
    categories: ["web"],
    stack: ["Angular", "NestJS", "PostgreSQL", "Docker"],
    url: "#",
    platform: "web",
  },
  {
    id: "focaldrop",
    title: "FocalDrop",
    path: "~/proyectos/focaldrop",
    description:
      "App móvil para capturar, organizar y compartir ideas, notas y referencias de forma rápida.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["mobile", "cloud"],
    categories: ["mobile", "cloud"],
    stack: ["Android", "TypeScript", "AWS"],
    url: "#",
    platform: "mobile",
  },
];
