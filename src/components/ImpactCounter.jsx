import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { impact } from "../data/profile";

const copy = {
  es: { label: "MI IMPACTO EN LATAM", people: "personas en eventos y cursos", followers: "seguidores en redes", total: "personas alcanzadas", estimate: "estimado", note: "Estimación propia: charlas, eventos, cursos de Platzi y bootcamp en Twitch, más seguidores de mis cinco redes." },
  en: { label: "MY IMPACT IN LATAM", people: "people at events and courses", followers: "followers across social media", total: "people reached", estimate: "estimate", note: "My own estimate: talks, events, Platzi courses and a Twitch bootcamp, plus followers across my five social channels." },
};

export default function ImpactCounter() {
  const { language } = useLanguage();
  const t = copy[language];
  const fmt = (n) => n.toLocaleString("en-US");
  return <section className="impact-counter" aria-label={t.label}>
    <Reveal>
      <p className="eyebrow"><span /> {t.label}</p>
      <div className="impact-figures">
        <div><strong>{fmt(impact.people)}</strong><span>{t.people}</span></div>
        <i aria-hidden="true">+</i>
        <div><strong>{fmt(impact.followers)}</strong><span>{t.followers}</span></div>
      </div>
      <p className="impact-total"><strong>≈ {fmt(impact.total)}</strong> {t.total} <em>{t.estimate}</em></p>
      <small>{t.note}</small>
    </Reveal>
  </section>;
}
