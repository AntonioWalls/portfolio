import { useEffect, useState, type ReactNode } from "react";
import { translations } from "../i18n";
import type { Language } from "../i18n/types";
import { LanguageContext } from "./language.context";

const LANGUAGE_STORAGE_KEY = "portfolio-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "es";
  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return saved === "en" ? "en" : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = translations[language];

  // Actualizamos <html lang="...">, el <title> de la pestaña y guardamos la preferencia
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language, t.meta.title]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext>
  );
}
