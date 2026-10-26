import { useState } from "react";
import { ArrowUpRight, Check, Download, Mail, Play, Send } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { useLanguage } from "../components/LanguageProvider";
import { brands, cases, mediaKitPdf, packages, services, socialChannels } from "../data/mediaKit";
import { brand, contact } from "../data/profile";

const copy = {
  es: {
    seo: "Media kit de Carli Code: métricas, casos con marcas y tarifas públicas para colaboraciones de contenido tech en español.",
    kit: "CARLI CODE / MEDIA KIT 2026", hero: <>Tech en español para <em>tu marca.</em></>,
    heroText: "Creo contenido enseñando sobre tecnología y transformo conceptos complejos en lenguaje natural: inteligencia artificial, AWS, Python y automatización.",
    start: "Empecemos una colaboración", pdf: "Descargar PDF", rates: "Ver tarifas ↓",
    about: "SOBRE MÍ", aboutTitle: <>Una programadora que <em>enseña.</em></>,
    aboutOne: "Soy Carli, programadora de inteligencia artificial en Santa Cruz, Bolivia. Empecé a crear contenido porque me gusta enseñar y quería que entrar a la programación fuera más fácil para más personas.",
    aboutTwo: `Creo en español para ${brand.community}: una comunidad curiosa, práctica y con ganas de construir. También soy embajadora y speaker en comunidades como Women Techmakers, AWS y PyLadies.`,
    socialLabel: "DÓNDE ESTÁ LA COMUNIDAD", socialTitle: <>Alcance en <em>redes.</em></>, noCount: "perfil",
    casesLabel: "CASOS CON MARCAS", casesTitle: <>Campañas que <em>ya hicimos.</em></>, casesText: "Cada video es una pieza real publicada en TikTok. Toca para reproducirlo aquí.", play: "Reproducir", open: "Ver en TikTok",
    selected: "MARCAS QUE CONFIARON", brands: <>Marcas con las que<br /><em>ya trabajé.</em></>,
    pricing: "TARIFAS PÚBLICAS", pricingTitle: <>Elige un formato.</>, pricingText: "Tarifas en USD. Cada colaboración empieza con una conversación para que la idea encaje con tus objetivos y con mi audiencia.", packages: "PAQUETES DE CAMPAÑA",
    together: "TRABAJEMOS JUNTAS", contactTitle: <>¿Hablamos de <em>tu campaña?</em></>, contactText: "Cuéntame sobre tu marca, evento o proyecto. Respondo en menos de 48 horas.",
    name: "Tu nombre", email: "Tu email", company: "Empresa / marca", type: "Tipo de colaboración", message: "Cuéntame más", choose: "Elige una opción", send: "Enviar mensaje",
  },
  en: {
    seo: "Carli Code media kit: metrics, brand case studies and public rates for Spanish-language tech content collaborations.",
    kit: "CARLI CODE / MEDIA KIT 2026", hero: <>Tech in Spanish for <em>your brand.</em></>,
    heroText: "I create content that teaches technology and I turn complex concepts into plain language: artificial intelligence, AWS, Python and automation.",
    start: "Start a collaboration", pdf: "Download PDF", rates: "View rates ↓",
    about: "ABOUT ME", aboutTitle: <>A developer who <em>teaches.</em></>,
    aboutOne: "I’m Carli, an artificial intelligence developer based in Santa Cruz, Bolivia. I started creating content because I love teaching and I wanted getting into programming to be easier for more people.",
    aboutTwo: `I create in Spanish for ${brand.community}: a curious, practical community that wants to build. I’m also an ambassador and speaker in communities such as Women Techmakers, AWS and PyLadies.`,
    socialLabel: "WHERE THE COMMUNITY IS", socialTitle: <>Social <em>reach.</em></>, noCount: "profile",
    casesLabel: "BRAND CASE STUDIES", casesTitle: <>Campaigns we’ve <em>already made.</em></>, casesText: "Each video is a real piece published on TikTok. Tap to play it here.", play: "Play", open: "Open on TikTok",
    selected: "BRANDS THAT TRUSTED ME", brands: <>Brands I’ve<br /><em>worked with.</em></>,
    pricing: "PUBLIC RATES", pricingTitle: <>Choose a format.</>, pricingText: "All rates are in USD. Each collaboration starts with a conversation to make sure the idea fits your goals and my audience.", packages: "CAMPAIGN PACKAGES",
    together: "LET’S WORK TOGETHER", contactTitle: <>Let’s talk about <em>your campaign.</em></>, contactText: "Tell me about your brand, event or project. I’ll get back to you within 48 hours.",
    name: "Your name", email: "Your email", company: "Company / brand", type: "Type of collaboration", message: "Tell me more", choose: "Select an option", send: "Send message",
  },
};

// El iframe de TikTok pesa; solo se carga cuando la persona toca el video.
function TikTokCase({ item, language, t }) {
  const [playing, setPlaying] = useState(false);
  return <article className="case-card">
    <div className={`case-video${playing ? " is-playing" : ""}`}>{playing
      ? <iframe src={`https://www.tiktok.com/embed/v2/${item.tiktokId}`} title={`${item.brand} — TikTok`} allow="encrypted-media; fullscreen" allowFullScreen />
      : <button type="button" onClick={() => setPlaying(true)} aria-label={`${t.play}: ${item.brand}`}><Play size={30} fill="currentColor" /><span>{t.play}</span></button>}</div>
    <div className="case-body">
      <h3>{item.brand}</h3>
      {item.topic && <p>{item.topic[language]}</p>}
      {item.results.length > 0 && <ul>{item.results.map((r) => <li key={r.value}><strong>{r.value}</strong><span>{r.label[language]}</span></li>)}</ul>}
      <a className="text-link" href={item.href} target="_blank" rel="noreferrer">{t.open} <ArrowUpRight size={15} /></a>
    </div>
  </article>;
}

export default function Collaborations() {
  const { language } = useLanguage();
  const t = copy[language];
  return <main className="media-kit">
    <Seo title="Media kit — Carli Code" description={t.seo} />

    <section className="media-hero"><Reveal><p className="eyebrow"><span /> {t.kit}</p><h1>{t.hero}</h1><p>{t.heroText}</p><div className="media-hero-actions"><a className="button button-primary" href="#contact-form">{t.start} <ArrowUpRight size={18} /></a><a className="button hero-secondary" href={mediaKitPdf[language]} download>{t.pdf} <Download size={17} /></a><a className="text-link" href="#rates">{t.rates}</a></div></Reveal><div className="media-hero-mark float-mark"><span>CARLI<br />CODE</span><i /><span>{brand.community}</span></div></section>

    <section className="media-section media-about"><Reveal><p className="eyebrow"><span /> {t.about}</p><h2>{t.aboutTitle}</h2></Reveal><Reveal delay={120}><div><p>{t.aboutOne}</p><p>{t.aboutTwo}</p></div></Reveal></section>

    <section className="media-section social-section"><Reveal className="section-label"><p className="eyebrow"><span /> {t.socialLabel}</p><h2>{t.socialTitle}</h2></Reveal><div className="social-grid">{socialChannels.map((channel, index) => <Reveal delay={index * 80} key={channel.name}><a className={`social-card ${channel.accent}`} href={channel.href} target="_blank" rel="noreferrer"><span>{channel.name}</span><strong>{channel.followers ?? t.noCount}</strong><small>{channel.detail[language]}</small><p>{channel.handle} <ArrowUpRight size={16} /></p></a></Reveal>)}</div></section>

    <section className="media-section cases-section"><Reveal className="rates-heading"><div><p className="eyebrow"><span /> {t.casesLabel}</p><h2>{t.casesTitle}</h2></div><p>{t.casesText}</p></Reveal><div className="case-grid">{cases.map((item, index) => <Reveal delay={index * 70} key={item.tiktokId}><TikTokCase item={item} language={language} t={t} /></Reveal>)}</div></section>

    <section className="media-section brands-section"><Reveal><p className="eyebrow"><span /> {t.selected}</p><h2>{t.brands}</h2><div>{brands.map((name, index) => <span className="brand-chip" style={{ "--brand-delay": `${index * 85}ms` }} key={name}>{name}</span>)}</div></Reveal></section>

    <section id="rates" className="media-section rates-section"><Reveal className="rates-heading"><div><p className="eyebrow"><span /> {t.pricing}</p><h2>{t.pricingTitle}</h2></div><p>{t.pricingText}</p></Reveal><div className="service-list">{services.map((service, index) => <Reveal delay={index * 60} key={service.name}><article className={service.featured ? "featured" : ""}><div><h3>{service.name}{service.featured && <span> Best seller</span>}</h3><p>{service.description[language]}</p></div><strong>{service.price}</strong></article></Reveal>)}</div></section>

    <section className="media-section package-section"><Reveal><p className="eyebrow"><span /> {t.packages}</p></Reveal><div className="package-grid">{packages.map((item, index) => <Reveal delay={index * 70} key={item.name}><article className={item.featured ? "featured" : ""}><div><h3>{item.name}{item.featured && <span> ★</span>}</h3><p>{item.description[language]}</p></div><strong>{item.price}</strong><Check size={18} /></article></Reveal>)}</div></section>

    <section id="contact-form" className="media-contact"><Reveal><p className="eyebrow"><span /> {t.together}</p><h2>{t.contactTitle}</h2><p className="contact-intro">{t.contactText}</p><div className="direct-contact"><a href={`mailto:${contact.email}`}><Mail size={18} /> {contact.email}</a></div></Reveal><Reveal delay={120}><form className="collaboration-form" action={contact.formspree} method="POST"><input type="hidden" name="_subject" value="New Carli Code collaboration inquiry" /><label><span>{t.name}</span><input required name="name" type="text" autoComplete="name" /></label><label><span>{t.email}</span><input required name="email" type="email" autoComplete="email" /></label><label><span>{t.company}</span><input name="company" type="text" autoComplete="organization" /></label><label><span>{t.type}</span><select name="collaboration_type" defaultValue=""><option value="" disabled>{t.choose}</option><option>Brand campaign</option><option>Sponsored content</option><option>Speaking engagement</option><option>Community project</option><option>Other</option></select></label><label className="form-message"><span>{t.message}</span><textarea required name="message" rows="5" /></label><button className="form-submit" type="submit">{t.send} <Send size={17} /></button></form></Reveal></section>
  </main>;
}
