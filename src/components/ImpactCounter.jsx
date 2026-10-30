import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { impact } from "../data/profile";

const copy = {
  es: { label: "MI IMPACTO EN LATAM", total: "personas alcanzadas", estimate: "estimado", note: "Estimación propia: charlas, eventos, podcasts, cursos de Platzi y talleres en Twitch, más seguidores de mis cinco redes." },
  en: { label: "MY IMPACT IN LATAM", total: "people reached", estimate: "estimate", note: "My own estimate: talks, events, podcasts, Platzi courses and Twitch workshops, plus followers across my five social channels." },
};

export default function ImpactCounter() {
  const { language } = useLanguage();
  const t = copy[language];
  return <section className="impact-counter" aria-label={t.label}>
    <Reveal>
      <p className="eyebrow"><span /> {t.label}</p>
      <p className="impact-total"><strong>≈ {impact.total.toLocaleString("en-US")}</strong><span>{t.total}</span><em>{t.estimate}</em></p>
      <small>{t.note}</small>
    </Reveal>
  </section>;
}
