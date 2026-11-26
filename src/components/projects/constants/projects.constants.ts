import type {
  ProjectFilterId,
  ProjectItem,
} from "../interfaces/projects.interface";

// Los textos de filtros y proyectos viven en src/i18n/
export const PROJECT_FILTER_IDS: ProjectFilterId[] = [
  "todos",
  "web",
  "mobile",
  "cloud",
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "portal-onboarding",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    categories: ["web"],
    stack: ["Angular", "NestJS", "PostgreSQL", "Docker"],
    url: "#",
    platform: "web",
  },
  {
    id: "focaldrop",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    categories: ["mobile", "cloud"],
    stack: ["Android", "TypeScript", "AWS"],
    url: "#",
    platform: "mobile",
  },
];
