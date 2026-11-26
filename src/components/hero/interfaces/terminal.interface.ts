export type TerminalTab = "inicio" | "info" | "stats";

export interface TerminalSystemRow {
  label: string;
  value: string;
  isOnline?: boolean;
}
