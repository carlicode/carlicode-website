import { ArrowUpRight, Bot, Cloud, Play, Workflow } from "lucide-react";
import portrait from "./assets/home/carli-neon.webp";
import pyladies from "./assets/home/pyladies-ucb.webp";
import agentics from "./assets/home/agentics-upsa.webp";
import builderLoft from "./assets/home/aws-builder-loft.webp";
import selfie from "./assets/home/selfie-evento.webp";
import Reveal from "./components/Reveal";
import Seo from "./components/Seo";
import { useLanguage } from "./components/LanguageProvider";
import { talks } from "./data/content";
import { brands } from "./data/mediaKit";
import { brand, metrics } from "./data/profile";
import ImpactCounter from "./components/ImpactCounter";
import "./App.css";

const featured = talks.filter((talk) => talk.featured).slice(0, 3);

const copy = {
  es: {
    seo: "Carli Code: contenido de tecnología en español. Inteligencia artificial, AWS, Python y automatización explicados en lenguaje natural.",
    eyebrow: "CARLI CODE · CREADORA DE CONTENIDO TECH",
    title: <>Tech en español, <em>más fácil de lo que crees.</em></>,
    lede: "Creo contenido enseñando sobre tecnología y transformo conceptos complejos en lenguaje natural. Me apasiona la programación en Python, AWS y, sobre todo, la inteligencia artificial.",
    mediaKit: "Ver media kit",
    museum: "Entrar al museo",
    metricsLabel: "COMUNIDAD EN REDES",
    topicsLabel: "DE QUÉ HABLO",
    topicsTitle: <>Tres temas, <em>explicados sin vueltas.</em></>,
    topics: [
      { icon: Bot, title: "Inteligencia artificial y agentes", text: "Qué es un modelo, un agente o un RAG, y cómo usarlos en proyectos reales." },
      { icon: Cloud, title: "AWS y la nube", text: "Servicios de AWS explicados paso a paso, desde la primera cuenta hasta producción." },
      { icon: Workflow, title: "Automatización con n8n y Python", text: "Flujos y scripts que ahorran horas de trabajo repetitivo." },
    ],
    featuredLabel: "DESTACADOS DEL MUSEO",
    featuredTitle: <>Algunas piezas <em>del museo.</em></>,
    featuredText: "Charlas, podcasts, talleres, código y comunidad. Todo mi trabajo, en una línea del tiempo.",
    watch: "Ver charla",
    allPieces: "Ver todo el museo",
    communityLabel: brand.community,
    communityTitle: <>La comunidad que <em>aprende conmigo.</em></>,
    communityText: "Meetups, talleres y eventos con PyLadies, AWS, AgenTICs y más comunidades tech.",
    communityCta: "Ver la sala Comunidad",
    photos: ["PyLadies en la UCB", "AgenTICs en la UPSA", "AWS Builder Loft", "Comunidad en evento"],
    brandsLabel: "MARCAS QUE CONFIARON",
    brandsTitle: <>¿Trabajamos <em>juntas?</em></>,
    brandsText: "Tarifas públicas, casos y métricas en el media kit.",
    contact: "Escríbeme",
  },
  en: {
    seo: "Carli Code: tech content in Spanish. Artificial intelligence, AWS, Python and automation explained in plain language.",
    eyebrow: "CARLI CODE · TECH CONTENT CREATOR",
    title: <>Tech in Spanish, <em>easier than you think.</em></>,
    lede: "I create content that teaches technology and I turn complex concepts into plain language. I’m passionate about Python, AWS and, above all, artificial intelligence.",
    mediaKit: "See media kit",
    museum: "Enter the museum",
    metricsLabel: "SOCIAL COMMUNITY",
    topicsLabel: "WHAT I TALK ABOUT",
    topicsTitle: <>Three topics, <em>explained straight.</em></>,
    topics: [
      { icon: Bot, title: "Artificial intelligence and agents", text: "What a model, an agent or RAG is, and how to use them in real projects." },
      { icon: Cloud, title: "AWS and the cloud", text: "AWS services explained step by step, from a first account to production." },
      { icon: Workflow, title: "Automation with n8n and Python", text: "Workflows and scripts that save hours of repetitive work." },
    ],
    featuredLabel: "MUSEUM HIGHLIGHTS",
    featuredTitle: <>A few pieces <em>from the museum.</em></>,
    featuredText: "Talks, podcasts, workshops, code and community. All my work, on one timeline.",
    watch: "Watch talk",
    allPieces: "See the whole museum",
    communityLabel: brand.community,
    communityTitle: <>The community that <em>learns with me.</em></>,
    communityText: "Meetups, workshops and events with PyLadies, AWS, AgenTICs and more tech communities.",
    communityCta: "See the Community room",
    photos: ["PyLadies at UCB", "AgenTICs at UPSA", "AWS Builder Loft", "Community at an event"],
    brandsLabel: "BRANDS THAT TRUSTED ME",
    brandsTitle: <>Shall we <em>work together?</em></>,
    brandsText: "Public rates, case studies and metrics in the media kit.",
    contact: "Get in touch",
  },
};

const communityPhotos = [pyladies, agentics, builderLoft, selfie];

export default function App() {
  const { language } = useLanguage();
  const t = copy[language];
  return <main className="home">
    <Seo title="Carli Code — Tech en español" description={t.seo} />

    <section className="home-hero">
      <div className="home-hero-copy">
        <p className="eyebrow"><span /> {t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="home-lede">{t.lede}</p>
        <div className="home-actions"><a className="button button-primary" href="/media-kit">{t.mediaKit} <ArrowUpRight size={18} /></a><a className="button hero-secondary" href="/museo">{t.museum} <ArrowUpRight size={18} /></a></div>
      </div>
      <figure className="home-portrait"><img src={portrait} alt="Carli Code" width="1000" height="1000" fetchPriority="high" /></figure>
    </section>

    <section className="home-metrics" aria-label={t.metricsLabel}>
      {metrics.items.map(({ platform, value, label }) => <div key={`${platform}-${value}`}><strong>{value}</strong><span>{label[language]} · {platform}</span></div>)}
    </section>

    <ImpactCounter />

    <section className="section home-topics">
      <Reveal><p className="eyebrow"><span /> {t.topicsLabel}</p><h2>{t.topicsTitle}</h2></Reveal>
      <div className="home-topic-grid">{t.topics.map((topic, index) => <Reveal delay={index * 90} key={topic.title}><article><topic.icon size={28} /><h3>{topic.title}</h3><p>{topic.text}</p></article></Reveal>)}</div>
    </section>

    <section className="section home-featured">
      <Reveal className="home-heading"><div><p className="eyebrow"><span /> {t.featuredLabel}</p><h2>{t.featuredTitle}</h2></div><p>{t.featuredText}</p></Reveal>
      <div className="home-featured-grid">{featured.map((talk, index) => <Reveal delay={index * 90} key={talk.youtubeId}><a className="home-piece" href={`https://www.youtube.com/watch?v=${talk.youtubeId}`} target="_blank" rel="noreferrer"><img src={`https://i.ytimg.com/vi/${talk.youtubeId}/hqdefault.jpg`} alt="" loading="lazy" /><span className="home-piece-play"><Play size={16} fill="currentColor" /> {t.watch}</span><h3>{talk.title}</h3></a></Reveal>)}</div>
      <a className="text-link" href="/museo">{t.allPieces} <ArrowUpRight size={17} /></a>
    </section>

    <section className="section home-community">
      <Reveal className="home-heading"><div><p className="eyebrow"><span /> {t.communityLabel}</p><h2>{t.communityTitle}</h2></div><p>{t.communityText}</p></Reveal>
      <div className="home-community-grid">{communityPhotos.map((src, index) => <Reveal delay={index * 80} key={src}><figure><img src={src} alt={t.photos[index]} loading="lazy" /><figcaption>{t.photos[index]}</figcaption></figure></Reveal>)}</div>
      <a className="button button-primary" href="/museo?sala=comunidad">{t.communityCta} <ArrowUpRight size={18} /></a>
    </section>

    <section className="section home-brands">
      <p className="eyebrow"><span /> {t.brandsLabel}</p>
      <ul>{brands.map((name) => <li key={name}>{name}</li>)}</ul>
      <h2>{t.brandsTitle}</h2><p>{t.brandsText}</p>
      <div className="home-actions"><a className="button button-primary" href="/media-kit">{t.mediaKit} <ArrowUpRight size={18} /></a><a className="button hero-secondary" href="/contacto">{t.contact} <ArrowUpRight size={18} /></a></div>
    </section>
  </main>;
}
