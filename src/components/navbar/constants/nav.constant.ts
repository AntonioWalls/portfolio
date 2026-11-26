import type { NavItem } from "../interfaces/nav.interface";

// Los textos visibles vienen de src/i18n/ para soportar cambio de idioma en vivo
export const NAV_ITEMS: NavItem[] = [
  { id: "inicio", href: "#inicio" },
  { id: "proyectos", href: "#proyectos" },
  { id: "stack", href: "#stack" },
  { id: "experiencia", href: "#experiencia" },
  { id: "sobre-mi", href: "#sobre-mi" },
];
