import type { IconType } from "react-icons";

export interface SocialLink {
  id: "linkedin" | "github";
  label: string;
  handle: string;
  href: string;
  icon: IconType;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type SubmitStatus = "idle" | "sending" | "success" | "fallback" | "error";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
