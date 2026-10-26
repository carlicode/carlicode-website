import { ArrowUpRight } from "lucide-react";
import Seo from "../components/Seo";
import { useLanguage } from "../components/LanguageProvider";

export default function NotFound() {
  const { language } = useLanguage();
  const copy = language === "es"
    ? { title: "Esta página no existe.", text: "Puede que el enlace haya cambiado.", home: "Ir al inicio" }
    : { title: "This page doesn’t exist.", text: "The link may have changed.", home: "Go home" };
  return <main className="contact-page">
    <Seo title="404 — Carli Code" noindex />
    <section className="contact-page-hero"><div className="contact-page-copy"><p className="eyebrow"><span /> 404</p><h1>{copy.title}</h1><p>{copy.text}</p><a className="button button-primary" href="/">{copy.home} <ArrowUpRight size={18} /></a></div></section>
  </main>;
}
