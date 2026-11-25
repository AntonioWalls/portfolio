export type TerminalTab = "inicio" | "info" | "stats";

export interface TerminalSystemItem {
  label: string;
  value: string;
  isOnline?: boolean;
}
