import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return <div className="language-toggle" aria-label="Language selector"><button className={language === "es" ? "active" : ""} aria-pressed={language === "es"} onClick={() => setLanguage("es")}>ES</button><span>/</span><button className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button></div>;
}
