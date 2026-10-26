import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // ?lang=en permite compartir el link en inglés (por ejemplo, el media kit a una marca).
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "es" || fromUrl === "en") return fromUrl;
    const saved = window.localStorage.getItem("carli-language");
    return saved === "en" ? "en" : "es";
  });

  useEffect(() => {
    window.localStorage.setItem("carli-language", language);
    document.documentElement.lang = language;
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
