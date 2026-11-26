import type { IconType } from "react-icons";

export interface StackItem {
  id: string;
  name: string;
  role: string;
  // IconType acepta cualquier ícono que venga de react-icons (Simple Icons, Font Awesome, etc.)
  icon: IconType;
}
