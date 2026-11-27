import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { SocialLink } from "../interfaces/contact.interface";

export const CONTACT_EMAIL = "psfa.fabian@gmail.com";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "/in/fabian-antonio-paredes-soto",
    href: "https://www.linkedin.com/in/fabian-antonio-paredes-soto-1aaa52216",
    icon: FaLinkedin,
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@AntonioWalls",
    href: "https://github.com/AntonioWalls",
    icon: FaGithub,
  },
];
