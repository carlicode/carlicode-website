import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

// El CV (/cv) no va en el menú a propósito: solo se comparte por link.
export default function Navbar() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const copy = language === "es"
    ? { links: [["/media-kit", "Media kit"], ["/museo", "Museo"], ["/museo?sala=comunidad", "#CarliCodeArmy"]], cta: "Hablemos", menu: open ? "Cerrar menú" : "Abrir menú" }
    : { links: [["/media-kit", "Media kit"], ["/museo", "Museum"], ["/museo?sala=comunidad", "#CarliCodeArmy"]], cta: "Let’s talk", menu: open ? "Close menu" : "Open menu" };
  return <header className={`site-header${open ? " menu-open" : ""}`}>
    <a href="/" className="brand" aria-label="Carli Code"><span className="brand-square"><i /></span></a>
    <nav id="primary-nav" aria-label="Primary navigation">{copy.links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}<a href="/contacto" className="nav-contact">{copy.cta}</a></nav>
    <div className="header-actions"><LanguageToggle /><a href="/contacto" className="header-cta">{copy.cta} <span>↗</span></a></div>
    <button className="menu-button" aria-label={copy.menu} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
  </header>;
}
