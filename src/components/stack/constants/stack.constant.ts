import { BiLogoPostgresql } from "react-icons/bi";
import { FaAngular, FaCloud } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { SiDocker, SiNestjs, SiTypescript } from "react-icons/si";
import type { StackItem } from "../interfaces/stack.interface";

// Metadatos no traducibles del stack; los subtítulos traducidos viven en src/i18n/
export const STACK_ITEMS: StackItem[] = [
  { id: "angular", name: "Angular", icon: FaAngular },
  { id: "nestjs", name: "NestJS", icon: SiNestjs },
  { id: "typescript", name: "TypeScript", icon: SiTypescript },
  { id: "postgresql", name: "PostgreSQL", icon: BiLogoPostgresql },
  { id: "android", name: "Android", icon: IoLogoAndroid },
  { id: "docker", name: "Docker", icon: SiDocker },
  { id: "aws", name: "AWS", icon: FaCloud },
];
