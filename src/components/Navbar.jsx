import { Menu } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { language } = useLanguage();
  const copy = language === "es" ? { community: "Comunidad", path: "Trayectoria", archive: "Archivo", collaborations: "Colaboraciones", cta: "Hablemos", menu: "Abrir menú" } : { community: "Community", path: "Journey", archive: "Archive", collaborations: "Collaborations", cta: "Let’s talk", menu: "Open menu" };
  return <header className="site-header"><a href="/" className="brand" aria-label="Carli Code — Inicio"><span className="brand-square"><i /></span></a><nav aria-label="Primary navigation"><a href="/comunidad">{copy.community}</a><a href="/#trayectoria">{copy.path}</a><a href="/#archivo">{copy.archive}</a><a href="/collaborations">{copy.collaborations}</a></nav><div className="header-actions"><LanguageToggle /><a href="/contacto" className="header-cta">{copy.cta} <span>↗</span></a></div><button className="menu-button" aria-label={copy.menu}><Menu size={22} /></button></header>;
}
