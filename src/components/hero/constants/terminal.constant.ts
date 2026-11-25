import type {
  TerminalSystemItem,
  TerminalTab,
} from "../interfaces/terminal.interface";

export const TERMINAL_TABS: TerminalTab[] = ["inicio", "info", "stats"];

export const SYSTEM_INFO: TerminalSystemItem[] = [
  { label: "sistema:", value: "online", isOnline: true },
  { label: "modo:", value: "desarrollo" },
  { label: "ubicación:", value: "MX" },
  { label: "actual:", value: "Bizopps Group" },
];
