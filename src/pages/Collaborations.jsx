import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Download, Mail, Send, X } from "lucide-react";
import Seo from "../components/Seo";
import ImpactCounter from "../components/ImpactCounter";
import { useLanguage } from "../components/LanguageProvider";
import { Build, CountUp, ScrollProgress } from "../components/motion";
import { reducedMotion, useNearScreen } from "../components/motionHooks";
import { brands, cases, mediaKitPdf, packages, services, socialChannels } from "../data/mediaKit";
import { brand, contact, impact } from "../data/profile";
import portrait from "../assets/home/carli-neon.webp";
import pyladies from "../assets/home/pyladies-ucb.webp";
import agentics from "../assets/home/agentics-upsa.webp";
import builderLoft from "../assets/home/aws-builder-loft.webp";
import selfie from "../assets/home/selfie-evento.webp";
import "./MediaKit.css";

const credentials = ["AWS Community Builder", "n8n Ambassador", "Women Techmakers Ambassador", "PyLadies Santa Cruz Lead"];
const photos = [pyladies, agentics, builderLoft, selfie];
const maxFollowers = Math.max(...socialChannels.map((c) => c.count));

// Cada objetivo apunta a los formatos que mejor lo resuelven (ids de services).
const guide = [
  { goal: { es: "Quiero que me conozcan rápido", en: "I want people to get to know us fast" }, ids: ["short", "mini"] },
  { goal: { es: "Quiero explicar mi producto con calma", en: "I want to explain my product properly" }, ids: ["main"] },
  { goal: { es: "Quiero enseñar algo paso a paso", en: "I want to teach something step by step" }, ids: ["carousel"] },
  { goal: { es: "Quiero mostrarlo en vivo y responder dudas", en: "I want to show it live and answer questions" }, ids: ["live"] },
  { goal: { es: "Quiero reforzar una campaña", en: "I want to reinforce a campaign" }, ids: ["story"] },
];

const copy = {
  es: {
    seo: "Media kit de Carli Code: métricas, casos con marcas y tarifas públicas para colaboraciones de contenido tech en español.",
    kit: "CARLI CODE / MEDIA KIT 2026", hero: <>Tech en español para <em>tu marca.</em></>,
    heroText: "Creo contenido enseñando sobre tecnología y transformo conceptos complejos en lenguaje natural: inteligencia artificial, AWS, Python y automatización.",
    start: "Empecemos una colaboración", pdf: "Descargar PDF", rates: "Ver formatos ↓", reached: "personas alcanzadas", estimate: "estimado",
    about: "SOBRE MÍ", aboutTitle: <>Una programadora que <em>enseña.</em></>,
    aboutOne: "Soy Carli, programadora de inteligencia artificial en Bolivia. Empecé a crear contenido porque me gusta enseñar y quería que entrar a la programación fuera más fácil para más personas.",
    aboutTwo: `Creo en español para ${brand.community}: una comunidad curiosa, práctica y con ganas de construir. También soy embajadora y speaker en comunidades como Women Techmakers, AWS y PyLadies.`,
    aboutCta: "Si tu marca tiene algo que explicar, hablemos.",
    socialLabel: "DÓNDE ESTÁ LA COMUNIDAD", socialTitle: <>Una comunidad que <em>crece.</em></>, socialText: "Seguidores en cada red, con datos confirmados.",
    casesLabel: "CASOS CON MARCAS", casesTitle: <>Campañas que <em>ya hicimos.</em></>, casesText: "Cada video es una pieza real publicada en TikTok. Se reproducen sin sonido; toca cualquiera para verlo en TikTok.", watch: "Ver en TikTok",
    selected: "MARCAS QUE CONFIARON", brands: <>Marcas con las que<br /><em>ya trabajé.</em></>,
    pricing: "TARIFAS PÚBLICAS", pricingTitle: <>Elige un <em>formato.</em></>,
    pricingText: "Todas las tarifas son públicas y están en USD. Toca un formato para ver qué incluye y para qué funciona mejor. Cada colaboración empieza con una conversación para que la idea encaje con tus objetivos y con mi audiencia.",
    guideTitle: "¿No sabes cuál elegir?", includes: "Qué incluye", bestFor: "Funciona mejor para", order: "Pedir este formato", bestSeller: "Más vendido", usd: "USD",
    packages: "PAQUETES DE CAMPAÑA", packagesTitle: <>O combina varios en un <em>paquete.</em></>, packagesText: "Los paquetes agrupan formatos para una campaña completa.", featured: "Destacado", orderPack: "Pedir este paquete",
    stepsLabel: "CÓMO EMPEZAMOS", stepsTitle: <>Cuatro pasos, <em>sin enredos.</em></>,
    steps: [["Me escribes", "Cuéntame sobre tu marca, evento o proyecto."], ["Te respondo", "En menos de 48 horas."], ["Conversamos", "Para que la idea encaje con tus objetivos y con mi audiencia."], ["Elegimos formato", "El formato o paquete que mejor encaje con lo que quieres lograr."]],
    together: "TRABAJEMOS JUNTAS", contactTitle: <>¿Hablamos de <em>tu campaña?</em></>, contactText: "Cuéntame sobre tu marca, evento o proyecto. Respondo en menos de 48 horas.",
    chosen: "Formato elegido", remove: "Quitar", interested: "Me interesa",
    name: "Tu nombre", email: "Tu email", company: "Empresa / marca", type: "Tipo de colaboración", message: "Cuéntame más", choose: "Elige una opción", send: "Enviar mensaje", talk: "Hablemos",
    options: ["Campaña de marca", "Contenido patrocinado", "Charla o evento", "Proyecto de comunidad", "Otro"],
  },
  en: {
    seo: "Carli Code media kit: metrics, brand case studies and public rates for Spanish-language tech content collaborations.",
    kit: "CARLI CODE / MEDIA KIT 2026", hero: <>Tech in Spanish for <em>your brand.</em></>,
    heroText: "I create content that teaches technology and I turn complex concepts into plain language: artificial intelligence, AWS, Python and automation.",
    start: "Start a collaboration", pdf: "Download PDF", rates: "See formats ↓", reached: "people reached", estimate: "estimate",
    about: "ABOUT ME", aboutTitle: <>A developer who <em>teaches.</em></>,
    aboutOne: "I’m Carli, an artificial intelligence developer based in Bolivia. I started creating content because I love teaching and I wanted getting into programming to be easier for more people.",
    aboutTwo: `I create in Spanish for ${brand.community}: a curious, practical community that wants to build. I’m also an ambassador and speaker in communities such as Women Techmakers, AWS and PyLadies.`,
    aboutCta: "If your brand has something to explain, let’s talk.",
    socialLabel: "WHERE THE COMMUNITY IS", socialTitle: <>A community that <em>grows.</em></>, socialText: "Followers on each platform, with confirmed numbers.",
    casesLabel: "BRAND CASE STUDIES", casesTitle: <>Campaigns we’ve <em>already made.</em></>, casesText: "Each video is a real piece published on TikTok. They play without sound; tap any of them to watch it on TikTok.", watch: "Watch on TikTok",
    selected: "BRANDS THAT TRUSTED ME", brands: <>Brands I’ve<br /><em>worked with.</em></>,
    pricing: "PUBLIC RATES", pricingTitle: <>Choose a <em>format.</em></>,
    pricingText: "All rates are public and in USD. Tap a format to see what it includes and what it works best for. Each collaboration starts with a conversation to make sure the idea fits your goals and my audience.",
    guideTitle: "Not sure which one?", includes: "What’s included", bestFor: "Works best for", order: "Request this format", bestSeller: "Best seller", usd: "USD",
    packages: "CAMPAIGN PACKAGES", packagesTitle: <>Or combine several in a <em>package.</em></>, packagesText: "Packages bundle formats into a complete campaign.", featured: "Featured", orderPack: "Request this package",
    stepsLabel: "HOW WE START", stepsTitle: <>Four steps, <em>no fuss.</em></>,
    steps: [["You write to me", "Tell me about your brand, event or project."], ["I reply", "Within 48 hours."], ["We talk", "To make sure the idea fits your goals and my audience."], ["We pick a format", "The format or package that best fits what you want to achieve."]],
    together: "LET’S WORK TOGETHER", contactTitle: <>Let’s talk about <em>your campaign.</em></>, contactText: "Tell me about your brand, event or project. I’ll get back to you within 48 hours.",
    chosen: "Chosen format", remove: "Remove", interested: "I’m interested in",
    name: "Your name", email: "Your email", company: "Company / brand", type: "Type of collaboration", message: "Tell me more", choose: "Select an option", send: "Send message", talk: "Let’s talk",
    options: ["Brand campaign", "Sponsored content", "Speaking engagement", "Community project", "Other"],
  },
};

// Parámetros del reproductor de TikTok: autoplay en silencio, en bucle y con los controles ocultos.
const playerParams = (autoplay) => `autoplay=${autoplay ? 1 : 0}&muted=1&loop=1&controls=0&progress_bar=0&play_button=0&volume_control=0&fullscreen_button=0&timestamp=0&music_info=0&description=0&rel=0&native_context_menu=0&closed_caption=0`;

// El video solo existe mientras la tarjeta está cerca de la pantalla: así nunca suenan ni pesan los cinco a la vez.
function VideoCard({ item, language, t, index }) {
  const [ref, near] = useNearScreen("350px");
  return <Build as="article" className="mk-case" delay={index * 90}>
    <div className="mk-phone" ref={ref}>
      {near && <iframe src={`https://www.tiktok.com/player/v1/${item.tiktokId}?${playerParams(!reducedMotion())}`} allow="autoplay; encrypted-media; fullscreen" title={`${item.brand} — TikTok`} tabIndex={-1} loading="lazy" />}
      <a className="mk-phone-link" href={item.href} target="_blank" rel="noreferrer" aria-label={`${t.watch}: ${item.brand}`}><span>{t.watch} <ArrowUpRight size={14} /></span></a>
    </div>
    <div className="mk-case-body">
      <h3>{item.brand}</h3>
      {item.topic && <p>{item.topic[language]}</p>}
      {item.results.length > 0 && <ul>{item.results.map((r) => <li key={r.value}><strong>{r.value}</strong><span>{r.label[language]}</span></li>)}</ul>}
    </div>
  </Build>;
}

export default function Collaborations() {
  const { language } = useLanguage();
  const t = copy[language];
  const [sel, setSel] = useState("short");
  const [request, setRequest] = useState(null);
  const [showFloat, setShowFloat] = useState(false);
  const format = services.find((s) => s.id === sel);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const inContact = contact && contact.getBoundingClientRect().top < window.innerHeight * 0.8;
      setShowFloat(window.scrollY > 520 && !inContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ask = (item, kind) => {
    const name = typeof item.name === "string" ? item.name : item.name[language];
    setRequest({ key: Date.now(), name, nameEn: typeof item.name === "string" ? item.name : item.name.en, price: item.price, kind });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return <main className="mk">
    <Seo title="Media kit — Carli Code" description={t.seo} />
    <ScrollProgress />

    <section className="mk-hero">
      <div className="mk-wrap mk-hero-grid">
        <div className="mk-hero-copy">
          <p className="eyebrow mk-in" style={{ "--d": "0ms" }}><span /> {t.kit}</p>
          <h1 className="mk-in" style={{ "--d": "120ms" }}>{t.hero}</h1>
          <p className="mk-lead mk-in" style={{ "--d": "260ms" }}>{t.heroText}</p>
          <ul className="mk-chips">{credentials.map((c, i) => <li key={c} className="mk-in" style={{ "--d": `${420 + i * 110}ms` }}>{c}</li>)}</ul>
          <div className="mk-actions mk-in" style={{ "--d": "900ms" }}>
            <a className="button button-primary" href="#contact">{t.start} <ArrowUpRight size={18} /></a>
            <a className="button hero-secondary" href={mediaKitPdf[language]} download>{t.pdf} <Download size={17} /></a>
            <a className="text-link" href="#formats">{t.rates}</a>
          </div>
        </div>
        <div className="mk-hero-art mk-in" style={{ "--d": "300ms" }}>
          <div className="mk-portrait"><img src={portrait} alt="Carli Code" width="900" height="1125" fetchPriority="high" /></div>
          <div className="mk-stat"><strong>≈ <CountUp to={impact.total} /></strong><span>{t.reached}</span><em>{t.estimate}</em></div>
        </div>
      </div>
    </section>

    <section className="mk-section mk-about">
      <div className="mk-wrap mk-about-grid">
        <Build>
          <p className="eyebrow"><span /> {t.about}</p>
          <h2 className="mk-h">{t.aboutTitle}</h2>
          <p>{t.aboutOne}</p>
          <p>{t.aboutTwo}</p>
          <a className="text-link" href="#contact">{t.aboutCta} <ArrowUpRight size={15} /></a>
        </Build>
        <div className="mk-photos">{photos.map((src, i) => <Build key={src} className={`mk-photo mk-photo-${i}`} delay={i * 130}><img src={src} alt="" loading="lazy" /></Build>)}</div>
      </div>
    </section>

    <section className="mk-section mk-reach">
      <div className="mk-wrap">
        <Build><p className="eyebrow"><span /> {t.socialLabel}</p><h2 className="mk-h">{t.socialTitle}</h2><p className="mk-sub">{t.socialText}</p></Build>
        <div className="mk-social">{socialChannels.map((c, i) => <Build as="a" key={c.name} className={`mk-channel ${c.accent}`} delay={i * 110} href={c.href} target="_blank" rel="noreferrer">
          <span className="mk-channel-name">{c.name}</span>
          <strong><CountUp to={c.count} fmt={c.fmt} /></strong>
          <small>{c.detail[language]}</small>
          <span className="mk-bar"><i style={{ "--w": Math.max(0.03, c.count / maxFollowers) }} /></span>
          <span className="mk-channel-handle">{c.handle} <ArrowUpRight size={14} /></span>
        </Build>)}</div>
      </div>
    </section>

    <ImpactCounter />

    <section className="mk-section mk-cases">
      <div className="mk-wrap">
        <Build className="mk-head"><div><p className="eyebrow"><span /> {t.casesLabel}</p><h2 className="mk-h">{t.casesTitle}</h2></div><p className="mk-sub">{t.casesText}</p></Build>
        <div className="mk-case-row">{cases.map((item, i) => <VideoCard key={item.tiktokId} item={item} language={language} t={t} index={i} />)}</div>
        <Build className="mk-brands"><p className="eyebrow"><span /> {t.selected}</p><div>{brands.map((name, i) => <span className="brand-chip" style={{ "--brand-delay": `${i * 85}ms` }} key={name}>{name}</span>)}</div></Build>
      </div>
    </section>

    <section id="formats" className="mk-section mk-formats">
      <div className="mk-wrap">
        <Build className="mk-head"><div><p className="eyebrow"><span /> {t.pricing}</p><h2 className="mk-h">{t.pricingTitle}</h2></div><p className="mk-sub">{t.pricingText}</p></Build>
        <Build className="mk-guide">
          <h3>{t.guideTitle}</h3>
          <ul>{guide.map((g) => <li key={g.ids.join()}><span>{g.goal[language]}</span><div>{g.ids.map((id) => <button type="button" key={id} className={sel === id ? "is-on" : ""} onClick={() => setSel(id)}>{services.find((s) => s.id === id).name[language]}</button>)}</div></li>)}</ul>
        </Build>
        <div className="mk-picker">
          <Build className="mk-list" role="tablist">{services.map((s) => <button type="button" role="tab" aria-selected={sel === s.id} key={s.id} className={sel === s.id ? "is-on" : ""} onClick={() => setSel(s.id)}>
            <span><b>{s.name[language]}</b>{s.featured && <em>{t.bestSeller}</em>}<small>{s.length[language]}</small></span><strong>{s.price}</strong>
          </button>)}</Build>
          <div className="mk-panel" key={format.id} role="tabpanel">
            <p className="mk-panel-price"><strong>{format.price}</strong><span>{t.usd}</span>{format.featured && <em>{t.bestSeller}</em>}</p>
            <h3>{format.name[language]}</h3>
            <p className="mk-panel-desc">{format.description[language]}</p>
            <h4>{t.includes}</h4>
            <ul>{format.includes.map((inc, i) => <li key={inc.en} style={{ "--i": i }}><Check size={16} /> {inc[language]}</li>)}</ul>
            <h4>{t.bestFor}</h4>
            <p className="mk-panel-best">{format.best[language]}</p>
            <button type="button" className="button button-primary" onClick={() => ask(format, "format")}>{t.order} <ArrowUpRight size={17} /></button>
          </div>
        </div>
      </div>
    </section>

    <section className="mk-section mk-packages">
      <div className="mk-wrap">
        <Build className="mk-head"><div><p className="eyebrow"><span /> {t.packages}</p><h2 className="mk-h">{t.packagesTitle}</h2></div><p className="mk-sub">{t.packagesText}</p></Build>
        <div className="mk-pack-grid">{packages.map((p, i) => <Build as="article" key={p.name} className={`mk-pack${p.featured ? " is-featured" : ""}`} delay={i * 110}>
          {p.featured && <span className="mk-pack-tag">★ {t.featured}</span>}
          <h3>{p.name}</h3>
          <p className="mk-pack-price"><strong>{p.price}</strong><span>{t.usd}</span></p>
          <h4>{t.includes}</h4>
          <ul>{p.includes.map((inc, k) => <li key={inc.en} style={{ "--i": k }}><Check size={15} /> {inc[language]}</li>)}</ul>
          <p className="mk-pack-best">{p.best[language]}</p>
          <button type="button" className="button hero-secondary" onClick={() => ask(p, "package")}>{t.orderPack} <ArrowUpRight size={16} /></button>
        </Build>)}</div>
      </div>
    </section>

    <section className="mk-section mk-steps">
      <div className="mk-wrap">
        <Build><p className="eyebrow"><span /> {t.stepsLabel}</p><h2 className="mk-h">{t.stepsTitle}</h2></Build>
        <ol className="mk-steps-row">{t.steps.map(([title, text], i) => <Build as="li" key={title} delay={i * 160}><span className="mk-step-n">{i + 1}</span><h3>{title}</h3><p>{text}</p></Build>)}</ol>
      </div>
    </section>

    <section id="contact" className="mk-contact">
      <div className="mk-wrap mk-contact-grid">
        <Build>
          <p className="eyebrow"><span /> {t.together}</p>
          <h2 className="mk-h">{t.contactTitle}</h2>
          <p className="mk-sub">{t.contactText}</p>
          <a className="mk-mail" href={`mailto:${contact.email}`}><Mail size={18} /> {contact.email}</a>
        </Build>
        <Build delay={140}>
          <form className="mk-form" key={request?.key ?? "base"} action={contact.formspree} method="POST">
            <input type="hidden" name="_subject" value="New Carli Code collaboration inquiry" />
            {request && <input type="hidden" name={request.kind === "package" ? "package_of_interest" : "format_of_interest"} value={`${request.nameEn} (${request.price})`} />}
            {request && <p className="mk-chosen"><span>{t.chosen}: <b>{request.name} · {request.price}</b></span><button type="button" onClick={() => setRequest(null)} aria-label={t.remove}><X size={15} /></button></p>}
            <label><span>{t.name}</span><input required name="name" type="text" autoComplete="name" /></label>
            <label><span>{t.email}</span><input required name="email" type="email" autoComplete="email" /></label>
            <label><span>{t.company}</span><input name="company" type="text" autoComplete="organization" /></label>
            <label><span>{t.type}</span><select name="collaboration_type" defaultValue={request ? "Brand campaign" : ""}><option value="" disabled>{t.choose}</option>{["Brand campaign", "Sponsored content", "Speaking engagement", "Community project", "Other"].map((value, i) => <option key={value} value={value}>{t.options[i]}</option>)}</select></label>
            <label className="mk-wide"><span>{t.message}</span><textarea required name="message" rows="5" defaultValue={request ? `${t.interested}: ${request.name} (${request.price}).\n\n` : ""} /></label>
            <button className="button button-primary mk-wide" type="submit">{t.send} <Send size={17} /></button>
          </form>
        </Build>
      </div>
    </section>

    <a className={`mk-float${showFloat ? " is-on" : ""}`} href="#contact" tabIndex={showFloat ? 0 : -1}>{t.talk} <ArrowUpRight size={16} /></a>
  </main>;
}
