import type { TranslationSchema } from "./types";

export const es: TranslationSchema = {
  meta: {
    title: "Fabián — Desarrollo de Software",
  },
  nav: {
    items: {
      inicio: "Inicio",
      proyectos: "Proyectos",
      stack: "Stack",
      experiencia: "Experiencia",
      "sobre-mi": "Sobre mí",
    },
    contact: "Contacto",
    openMenuAria: "Abrir menú de navegación",
    closeMenuAria: "Cerrar menú de navegación",
    toggleThemeToDarkAria: "Cambiar a modo oscuro",
    toggleThemeToLightAria: "Cambiar a modo claro",
    toggleLanguageAria: "Cambiar idioma a inglés",
    mobileDrawerPath: "~/fabian.dev/nav",
    mobileDrawerFile: "menu.sh",
  },
  hero: {
    eyebrow: "// PORTAFOLIO PERSONAL",
    title: "DESARROLLO DE SOFTWARE",
    subtitle: "Fullstack • Mobile • Cloud",
    description:
      "Creo aplicaciones que resuelven problemas reales, con enfoque en producto, rendimiento y experiencia.",
    ctaProjects: "Ver proyectos",
    ctaDownloadCv: "Descargar CV",
    cvUrl: "/cv-es.pdf",
    cvFileName: "CV-Fabian-Paredes-ES.pdf",
    visualAlts: {
      architecture: "Arquitectura brutalista",
      hardware: "Hardware y tecnología",
      mountains: "Montañas en blanco y negro",
    },
  },
  terminal: {
    path: "~/fabian.dev",
    tabs: {
      inicio: "inicio",
      info: "info",
      stats: "stats",
    },
    views: {
      inicio: {
        command: "whoami",
        lines: [
          "Fabián",
          "Desarrollador Fullstack y Mobile",
          "Apasionado por la tecnología, el producto y la ingeniería que genera impacto.",
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
          "Experiencia: Residencias @ Bizopps Group",
          "En construcción: FocalDrop & Portafolio",
          "Estado: Abierto a oportunidades",
        ],
      },
    },
    system: {
      systemLabel: "sistema:",
      systemValue: "online",
      modeLabel: "modo:",
      modeValue: "desarrollo",
      locationLabel: "ubicación:",
      locationValue: "MX",
      currentLabel: "actual:",
      currentValue: "Bizopps Group",
    },
  },
  stack: {
    number: "01.",
    title: "Stack",
    description:
      "Tecnologías y herramientas que utilizo para construir productos web y móviles modernos, escalables y confiables.",
    roles: {
      angular: "Frontend web",
      nestjs: "Backend • API",
      typescript: "Tipado • Escalabilidad",
      postgresql: "Datos • Persistencia",
      android: "Apps móviles",
      docker: "Dev • Deploy",
      aws: "Infraestructura",
    },
  },
  projects: {
    number: "02.",
    title: "Proyectos destacados",
    description:
      "Una selección de proyectos recientes que reflejan mi enfoque en producto, tecnología y experiencia de usuario.",
    viewProjectAriaPrefix: "Ver proyecto",
    filters: {
      todos: "ver todos",
      web: "por web",
      mobile: "por mobile",
      cloud: "por cloud",
    },
    items: {
      "portal-onboarding": {
        title: "Portal de Onboarding",
        path: "~/proyectos/portal-onboarding",
        description:
          "Plataforma web para la gestión del ciclo de incorporación de nuevos colaboradores.",
        tags: ["web", "fullstack"],
      },
      focaldrop: {
        title: "FocalDrop",
        path: "~/proyectos/focaldrop",
        description:
          "App móvil para capturar, organizar y compartir ideas, notas y referencias de forma rápida.",
        tags: ["mobile", "cloud"],
      },
    },
  },
  about: {
    number: "03.",
    title: "Sobre mí",
    bio: "Soy Fabián, desarrollador Fullstack y Mobile. Me enfoco en construir productos digitales útiles, confiables y con una gran experiencia de usuario.",
    tags: ["Producto", "Arquitectura", "UX / DX"],
    imageAlt: "Arquitectura minimalista",
    experienceTitle: "Experiencia",
    experienceYears: "5+ años",
    experiences: [
      {
        id: "senior-fullstack",
        role: "Desarrollador Fullstack Senior",
        summary: "Productos digitales • Web • Mobile • Cloud",
        period: "2022 - Actualidad",
        isCurrent: true,
      },
      {
        id: "fullstack",
        role: "Desarrollador Fullstack",
        summary: "Aplicaciones web y móviles • APIs • Integraciones",
        period: "2019 - 2022",
      },
    ],
    terminalPath: "~/about",
    interestsCommand: "intereses",
    interests: [
      "Desarrollo de producto",
      "Arquitectura y escalabilidad",
      "Apps móviles (Android)",
      "DevOps y Cloud",
      "Experiencia de usuario",
    ],
  },
  footer: {
    path: "~/fabian.dev",
    signature: "Fabián • Fullstack & Mobile",
    status: "listo.",
    openContactAria: "Abrir ventana de contacto",
  },
  contact: {
    path: "~/fabian.dev/contact",
    title: "Hablemos",
    subtitle:
      "Disponible para oportunidades Fullstack, Mobile o colaboraciones.",
    closeAria: "Cerrar ventana de contacto",
    directChannelsLabel: "// CANALES DIRECTOS",
    copyEmail: "Copiar correo",
    copiedEmail: "¡Copiado!",
    formCommand: "send-message --to fabian",
    nameLabel: "nombre",
    namePlaceholder: "Tu nombre o empresa",
    emailLabel: "correo",
    emailPlaceholder: "reclutador@empresa.com",
    messageLabel: "mensaje",
    messagePlaceholder: "Cuéntame sobre la vacante o proyecto...",
    submitButton: "Enviar mensaje",
    sendingButton: "Enviando...",
    successMessage: "Mensaje enviado correctamente. Te responderé pronto.",
    fallbackMessage:
      "Abriendo tu cliente de correo con el mensaje prellenado...",
    errorMessage:
      "Ocurrió un error al enviar. Puedes copiar mi correo o escribirme por LinkedIn.",
  },
};
