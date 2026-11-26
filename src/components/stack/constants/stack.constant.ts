import { BiLogoPostgresql } from "react-icons/bi";
import { FaAngular, FaCloud } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { SiDocker, SiNestjs, SiTypescript } from "react-icons/si";
import type { StackItem } from "../interfaces/stack.interface";

// Combinamos varias colecciones de react-icons (fa6, bi, io, si)
// para que los 7 logos tengan el mismo peso visual sólido (filled) de la referencia.
export const STACK_ITEMS: StackItem[] = [
  {
    id: "angular",
    name: "Angular",
    role: "Frontend web",
    icon: FaAngular,
  },
  {
    id: "nestjs",
    name: "NestJS",
    role: "Backend • API",
    icon: SiNestjs,
  },
  {
    id: "typescript",
    name: "TypeScript",
    role: "Tipado • Escalabilidad",
    icon: SiTypescript,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    role: "Datos • Persistencia",
    icon: BiLogoPostgresql,
  },
  {
    id: "android",
    name: "Android",
    role: "Apps móviles",
    icon: IoLogoAndroid,
  },
  {
    id: "docker",
    name: "Docker",
    role: "Dev • Deploy",
    icon: SiDocker,
  },
  {
    id: "aws",
    name: "AWS",
    role: "Infraestructura",
    icon: FaCloud,
  },
];
