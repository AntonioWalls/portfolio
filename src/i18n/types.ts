export type Language = "es" | "en";

export type NavItemId =
  | "inicio"
  | "proyectos"
  | "stack"
  | "experiencia"
  | "sobre-mi";

export type StackItemId =
  | "angular"
  | "nestjs"
  | "typescript"
  | "postgresql"
  | "android"
  | "docker"
  | "aws";

export type ProjectId = "portal-onboarding" | "focaldrop";

export interface ExperienceTranslation {
  id: string;
  role: string;
  summary: string;
  period: string;
  isCurrent?: boolean;
}

export interface TranslationSchema {
  meta: {
    title: string;
  };
  nav: {
    items: Record<NavItemId, string>;
    contact: string;
    openMenuAria: string;
    closeMenuAria: string;
    toggleThemeToDarkAria: string;
    toggleThemeToLightAria: string;
    toggleLanguageAria: string;
    mobileDrawerPath: string;
    mobileDrawerFile: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    ctaProjects: string;
    ctaDownloadCv: string;
    cvUrl: string;
    cvFileName: string;
    visualAlts: {
      architecture: string;
      hardware: string;
      mountains: string;
    };
  };
  terminal: {
    path: string;
    tabs: {
      inicio: string;
      info: string;
      stats: string;
    };
    views: {
      inicio: {
        command: string;
        lines: string[];
      };
      info: {
        command: string;
        lines: string[];
      };
      stats: {
        command: string;
        lines: string[];
      };
    };
    system: {
      systemLabel: string;
      systemValue: string;
      modeLabel: string;
      modeValue: string;
      locationLabel: string;
      locationValue: string;
      currentLabel: string;
      currentValue: string;
    };
  };
  stack: {
    number: string;
    title: string;
    description: string;
    roles: Record<StackItemId, string>;
  };
  projects: {
    number: string;
    title: string;
    description: string;
    viewProjectAriaPrefix: string;
    filters: {
      todos: string;
      web: string;
      mobile: string;
      cloud: string;
    };
    items: Record<
      ProjectId,
      {
        title: string;
        path: string;
        description: string;
        tags: string[];
      }
    >;
  };
  about: {
    number: string;
    title: string;
    bio: string;
    tags: string[];
    imageAlt: string;
    experienceTitle: string;
    experienceYears: string;
    experiences: ExperienceTranslation[];
    terminalPath: string;
    interestsCommand: string;
    interests: string[];
  };
  footer: {
    path: string;
    signature: string;
    status: string;
  };
}
