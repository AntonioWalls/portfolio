import type { IconType } from "react-icons";
import type { StackItemId } from "../../../i18n/types";

export interface StackItem {
  id: StackItemId;
  name: string;
  // IconType acepta cualquier ícono que venga de react-icons (Simple Icons, Font Awesome, etc.)
  icon: IconType;
}
