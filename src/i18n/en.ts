import type { TranslationSchema } from "./types";

export const en: TranslationSchema = {
  meta: {
    title: "Fabián — Software Engineering",
  },
  nav: {
    items: {
      inicio: "Home",
      proyectos: "Projects",
      stack: "Stack",
      experiencia: "Experience",
      "sobre-mi": "About",
    },
    contact: "Contact",
    openMenuAria: "Open navigation menu",
    closeMenuAria: "Close navigation menu",
    toggleThemeToDarkAria: "Switch to dark mode",
    toggleThemeToLightAria: "Switch to light mode",
    toggleLanguageAria: "Switch language to Spanish",
    mobileDrawerPath: "~/fabian.dev/nav",
    mobileDrawerFile: "menu.sh",
  },
  hero: {
    eyebrow: "// PERSONAL PORTFOLIO",
    title: "SOFTWARE ENGINEERING",
    subtitle: "Fullstack • Mobile • Cloud",
    description:
      "I build applications that solve real problems, focused on product, performance, and user experience.",
    ctaProjects: "View projects",
    ctaDownloadCv: "Download CV",
    visualAlts: {
      architecture: "Brutalist architecture",
      hardware: "Hardware and technology",
      mountains: "Black and white mountains",
    },
  },
  terminal: {
    path: "~/fabian.dev",
    tabs: {
      inicio: "home",
      info: "info",
      stats: "stats",
    },
    views: {
      inicio: {
        command: "whoami",
        lines: [
          "Fabián",
          "Fullstack & Mobile Developer",
          "Passionate about technology, product craft, and engineering that drives real impact.",
        ],
      },
      info: {
        command: "cat stack.txt",
        lines: [
          "Mobile: Kotlin • Jetpack Compose",
          "Backend: NestJS • TypeScript • PostgreSQL",
          "Frontend: React • Angular • Tailwind CSS",
        ],
      },
      stats: {
        command: "git status",
        lines: [
          "Experience: Internship @ Bizopps Group",
          "Building: FocalDrop & Portfolio",
          "Status: Open to opportunities",
        ],
      },
    },
    system: {
      systemLabel: "system:",
      systemValue: "online",
      modeLabel: "mode:",
      modeValue: "development",
      locationLabel: "location:",
      locationValue: "MX",
      currentLabel: "current:",
      currentValue: "Bizopps Group",
    },
  },
  stack: {
    number: "01.",
    title: "Stack",
    description:
      "Technologies and tools I use to build modern, scalable, and reliable web and mobile products.",
    roles: {
      angular: "Web Frontend",
      nestjs: "Backend • API",
      typescript: "Typing • Scalability",
      postgresql: "Data • Persistence",
      android: "Mobile Apps",
      docker: "Dev • Deploy",
      aws: "Infrastructure",
    },
  },
  projects: {
    number: "02.",
    title: "Featured projects",
    description:
      "A selection of recent projects that reflect my focus on product, technology, and user experience.",
    viewProjectAriaPrefix: "View project",
    filters: {
      todos: "view all",
      web: "by web",
      mobile: "by mobile",
      cloud: "by cloud",
    },
    items: {
      "portal-onboarding": {
        title: "Onboarding Portal",
        path: "~/projects/portal-onboarding",
        description:
          "Web platform for managing the onboarding lifecycle of new team members.",
        tags: ["web", "fullstack"],
      },
      focaldrop: {
        title: "FocalDrop",
        path: "~/projects/focaldrop",
        description:
          "Mobile app to quickly capture, organize, and share ideas, notes, and references.",
        tags: ["mobile", "cloud"],
      },
    },
  },
  about: {
    number: "03.",
    title: "About me",
    bio: "I'm Fabián, a Fullstack and Mobile developer. I focus on building useful, reliable digital products with a great user experience.",
    tags: ["Product", "Architecture", "UX / DX"],
    imageAlt: "Minimalist architecture",
    experienceTitle: "Experience",
    experienceYears: "5+ years",
    experiences: [
      {
        id: "senior-fullstack",
        role: "Senior Fullstack Developer",
        summary: "Digital products • Web • Mobile • Cloud",
        period: "2022 - Present",
        isCurrent: true,
      },
      {
        id: "fullstack",
        role: "Fullstack Developer",
        summary: "Web & mobile applications • APIs • Integrations",
        period: "2019 - 2022",
      },
    ],
    terminalPath: "~/about",
    interestsCommand: "interests",
    interests: [
      "Product development",
      "Architecture & scalability",
      "Mobile apps (Android)",
      "DevOps & Cloud",
      "User experience",
    ],
  },
  footer: {
    path: "~/fabian.dev",
    signature: "Fabián • Fullstack & Mobile",
    status: "ready.",
  },
};
