import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Camera, ExternalLink, Heart, Mic2, Play, Sparkles, Users } from "lucide-react";
import heroImage from "./assets/brand/carli-hero-neon.png";
import studioImage from "./assets/brand/carli-studio.png";
import { projects, talks } from "./data/content";
import { useLanguage } from "./components/LanguageProvider";
import "./App.css";

const formats = [
  { icon: <Camera size={26} />, title: "Contenido que conecta", text: "Conversaciones cercanas sobre IA, tecnología, oportunidades y la vida real detrás del código." },
  { icon: <Mic2 size={26} />, title: "Voz en comunidad", text: "Charlas, espacios y colaboraciones que abren la conversación y dejan una chispa encendida." },
  { icon: <Heart size={26} />, title: "Impacto con propósito", text: "Una comunidad que aprende, crea y se atreve a imaginar futuros más accesibles." },
];

const profiles = [
  { title: "TikTok", description: "Videos cortos, ideas y comunidad.", href: "https://www.tiktok.com/@carli.code", category: "Perfiles" },
  { title: "Instagram", description: "Día a día, historias y contenido visual.", href: "https://www.instagram.com/carli.code/", category: "Perfiles" },
  { title: "Twitch", description: "Directos y conversaciones en vivo.", href: "https://www.twitch.tv/carli_code", category: "Perfiles" },
  { title: "YouTube", description: "Videos y charlas de formato largo.", href: "https://www.youtube.com/@carli_code", category: "Perfiles" },
  { title: "LinkedIn", description: "Trayectoria profesional y colaboraciones.", href: "https://www.linkedin.com/in/carlicode/", category: "Trayectoria" },
  { title: "GitHub", description: "Proyectos y experimentos técnicos.", href: "https://github.com/carlicode", category: "Trayectoria" },
  { title: "Platzi", description: "Cursos e historia como profesora.", href: "https://platzi.com/profes/carlicode/", category: "Trayectoria" },
  { title: "Google Developer", description: "Perfil y presencia en la comunidad Google.", href: "https://g.dev/carlicode", category: "Trayectoria" },
];

const archiveItems = [
  ...talks.map((talk) => ({ title: talk.title, description: "Mira la charla completa en YouTube.", href: `https://www.youtube.com/watch?v=${talk.youtubeId}`, category: "Charlas" })),
  ...projects.map((project) => ({ title: project.name, description: project.description, href: project.link === "#" ? null : project.link, category: "Proyectos" })),
  ...profiles,
];
const perPage = 6;

export default function App() {
  const { language } = useLanguage();
  const copy = language === "es" ? { heroLabel: "CREADORA · COMMUNITY BUILDER", hero: <>Ideas que<br /><em>encienden</em><br />comunidad.</>, intro: "Soy Carli. Creo contenido y conversaciones que hacen que la tecnología, las ideas y las oportunidades se sientan más cerca.", universe: "Conoce mi universo", work: "Trabajemos juntas", place: "MI LUGAR FAVORITO", create: <>Crear no es hablar <em>sola.</em></>, createText: "Es encontrarnos. Mi contenido vive entre preguntas, herramientas digitales, aprendizajes imperfectos y la energía de una comunidad que se mueve.", story: "MÁS QUE UN FEED", journey: <>Una trayectoria hecha de <em>curiosidad.</em></>, storyText: "Vengo del mundo tech, pero mi motor siempre ha sido traducir lo complejo en algo útil, humano y posible. Hoy esa curiosidad toma forma en contenido, escenarios y proyectos con propósito.", effect: "EL EFECTO CARLI", effectTitle: <>Una idea puede ser el<br /><em>comienzo de algo enorme.</em></>, effectText: "De una conversación a una comunidad. De una duda a una nueva posibilidad.", archive: "TODO EN UN SOLO LUGAR", archiveTitle: <>Mi <em>archivo vivo.</em></>, archiveText: "Charlas, proyectos, perfiles y enlaces para conocer las diferentes facetas de mi trabajo.", collaborations: "COLABORACIONES", contact: <>¿Creamos algo<br /><em>que importe?</em></>, contactText: "Para campañas, charlas, proyectos de comunidad o una buena conversación." } : { heroLabel: "CREATOR · COMMUNITY BUILDER", hero: <>Ideas that<br /><em>ignite</em><br />community.</>, intro: "I create content and conversations that bring technology, ideas and opportunities closer.", universe: "Explore my universe", work: "Let’s work together", place: "MY FAVORITE PLACE", create: <>Creating is not speaking <em>alone.</em></>, createText: "It is finding each other. My content lives between questions, digital tools, imperfect learning and the energy of a community in motion.", story: "MORE THAN A FEED", journey: <>A journey built on <em>curiosity.</em></>, storyText: "I come from the world of tech, but my drive has always been translating complexity into something useful, human and possible. Today, that curiosity takes shape in content, stages and purposeful projects.", effect: "THE CARLI EFFECT", effectTitle: <>One idea can be the<br /><em>start of something big.</em></>, effectText: "From a conversation to a community. From a question to a new possibility.", archive: "ALL IN ONE PLACE", archiveTitle: <>My <em>living archive.</em></>, archiveText: "Talks, projects, profiles and links to discover the different sides of my work.", collaborations: "COLLABORATIONS", contact: <>Can we create<br /><em>something that matters?</em></>, contactText: "For campaigns, talks, community projects or a good conversation." };
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [page, setPage] = useState(1);
  const filteredItems = useMemo(() => activeCategory === "Todo" ? archiveItems : archiveItems.filter((item) => item.category === activeCategory), [activeCategory]);
  const totalPages = Math.ceil(filteredItems.length / perPage);
  const pageItems = filteredItems.slice((page - 1) * perPage, page * perPage);
  const selectCategory = (category) => { setActiveCategory(category); setPage(1); };
  return <>
    <Helmet><title>Carli Code — Creadora que conecta</title><meta name="description" content="Carli Code: creadora de contenido, speaker y comunidad que convierte ideas en oportunidades." /></Helmet>
    <main>
      <section id="inicio" className="hero-shell">
        <img className="hero-art" src={heroImage} alt="Ilustración de Carli creando contenido en un estudio de neón" /><div className="hero-noise" />
        <div className="hero-copy"><p className="eyebrow"><span /> {copy.heroLabel}</p><h1>{copy.hero}</h1><p className="hero-lede">{copy.intro}</p><div className="hero-actions"><a className="button button-primary" href="#comunidad">{copy.universe} <ArrowUpRight size={18} /></a><a className="text-link" href="#colabora">{copy.work} <span>↓</span></a></div></div>
        <div className="hero-stamp"><span>01</span><span>CARLI<br />CODE</span></div><div className="scroll-cue">SCROLL TO EXPLORE <i /></div>
      </section>
      <section id="comunidad" className="section section-motion community-section">
        <div className="section-intro split-intro"><div><p className="eyebrow"><span /> {copy.place}</p><h2>{copy.create}</h2></div><p>{copy.createText}</p></div>
        <div className="format-grid">{formats.map(({ icon, title, text }, index) => <article className="format-card" key={title}><div className="card-top">{icon}<span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p><a href="#colabora" aria-label={`Ver ${title}`}><ArrowUpRight size={20} /></a></article>)}</div>
      </section>
      <section id="trayectoria" className="section section-motion story-section">
        <div className="story-image-wrap"><img src={studioImage} alt="Carli Code en su estudio creativo" /><div className="image-caption">GOOD IDEAS / BRIGHTER TOMORROWS</div></div>
        <div className="story-copy"><p className="eyebrow"><span /> {copy.story}</p><h2>{copy.journey}</h2><p>{copy.storyText}</p><div className="signal-list"><div><Sparkles size={19} /><span><b>Ideas</b> que se comparten</span></div><div><Users size={19} /><span><b>Personas</b> que se encuentran</span></div><div><Mic2 size={19} /><span><b>Historias</b> que se amplifican</span></div></div><a href="#colabora" className="text-link">Conoce mi trabajo <ArrowUpRight size={17} /></a></div>
      </section>
      <section className="section section-motion pulse-section"><div className="pulse-orbit orbit-one" /><div className="pulse-orbit orbit-two" /><p className="eyebrow"><span /> {copy.effect}</p><h2>{copy.effectTitle}</h2><p>{copy.effectText}</p><a className="play-button" href="#colabora"><Play fill="currentColor" size={18} /> {copy.work.toUpperCase()}</a></section>
      <section id="archivo" className="section section-motion archive-section"><div className="archive-heading"><div><p className="eyebrow"><span /> {copy.archive}</p><h2>{copy.archiveTitle}</h2></div><p>{copy.archiveText}</p></div><div className="archive-controls" aria-label="Filtrar archivo">{["Todo", "Charlas", "Proyectos", "Perfiles", "Trayectoria"].map((category) => <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => selectCategory(category)}>{category}</button>)}</div><div className="archive-grid">{pageItems.map((item) => <article className="archive-card" key={`${item.category}-${item.title}`}><div className="archive-card-meta"><span>{item.category}</span><span>0{archiveItems.indexOf(item) + 1}</span></div><h3>{item.title}</h3><p>{item.description}</p>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">Abrir enlace <ExternalLink size={16} /></a> : <span className="archive-no-link">Proyecto de portafolio</span>}</article>)}</div><nav className="pagination" aria-label="Paginación del archivo"><button onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1}>← Anterior</button>{Array.from({ length: totalPages }, (_, index) => <button key={index + 1} className={page === index + 1 ? "active" : ""} onClick={() => setPage(index + 1)} aria-current={page === index + 1 ? "page" : undefined}>{String(index + 1).padStart(2, "0")}</button>)}<button onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={page === totalPages}>Siguiente →</button></nav></section>
      <section id="colabora" className="section section-motion contact-section"><div><p className="eyebrow"><span /> {copy.collaborations}</p><h2>{copy.contact}</h2></div><div className="contact-side"><p>{copy.contactText}</p><a className="contact-email" href="mailto:carli.f.roman@gmail.com">carli.f.roman@gmail.com <ArrowUpRight size={22} /></a></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} CARLI CODE</span><span>HECHO CON INTENCIÓN + NEÓN</span></footer>
  </>;
}
