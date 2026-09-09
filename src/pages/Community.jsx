import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, Heart, Sparkles, UsersRound } from "lucide-react";
import Reveal from "../components/Reveal";
import { useLanguage } from "../components/LanguageProvider";
import awsCommunityDay from "../assets/community/aws-community-day.png";
import awsN8nMeetup from "../assets/community/aws-n8n-meetup.png";
import buildWithAi from "../assets/community/build-with-ai.png";
import fuckupNights from "../assets/community/fuckup-nights.png";
import googleIo from "../assets/community/google-io-extended.png";
import pyladiesMeetup from "../assets/community/pyladies-meetup.png";
import womenGameJam from "../assets/community/women-game-jam.png";
import wtmFutureMakers from "../assets/community/wtm-future-makers.png";

const roles = [
  { title: "AWS Community Builder", text: "Creating spaces to learn, share and build with cloud communities." },
  { title: "n8n Ambassador", text: "Helping people discover practical, creative automation." },
  { title: "Women Techmakers Ambassador", text: "Opening more paths for women to lead in technology." },
  { title: "PyLadies Santa Cruz Lead", text: "Growing a local community where women can learn together." },
];

const gallery = [
  { src: awsN8nMeetup, alt: "Carli speaking at an AWS and n8n meetup in Santa Cruz", label: "AWS + n8n meetup" },
  { src: awsCommunityDay, alt: "Carli Code featured at AWS Community Day Bolivia", label: "AWS Community Day Bolivia" },
  { src: wtmFutureMakers, alt: "Carli at WTM Future Makers Cochabamba", label: "WTM Future Makers" },
  { src: googleIo, alt: "Carli at Google I/O Extended Cochabamba", label: "Google I/O Extended" },
  { src: womenGameJam, alt: "Carli as a mentor for Women Game Jam", label: "Women Game Jam" },
  { src: pyladiesMeetup, alt: "PyLadies community meetup", label: "PyLadies" },
  { src: buildWithAi, alt: "Carli as a mentor at Build with AI Bolivia", label: "Build with AI Bolivia" },
  { src: fuckupNights, alt: "Carli at FuckUp Nights Cochabamba", label: "FuckUp Nights" },
];

const events = [
  { title: "AWS Community Day Bolivia", date: "2025", type: "Conference", text: "Speaker at a national gathering of the AWS community in Bolivia.", href: "https://www.instagram.com/p/DOXE-2cEW7G/?img_index=2" },
  { title: "AWS + n8n meetup, Santa Cruz", date: "2025", type: "Community meetup", text: "A community session on automation and practical AI in Santa Cruz.", href: "https://www.instagram.com/p/DPHIuGPANHW/?img_index=1" },
  { title: "Google I/O Extended Santa Cruz", date: "2025", type: "Workshop", text: "Speaker session on Gemma and open-source AI models.", href: "https://www.instagram.com/p/DMc-8YqggNK/" },
  { title: "IWD Future Makers Cochabamba", date: "Apr 2025", type: "Talk", text: "Artificial intelligence for non-programmers at International Women’s Day Future Makers.", href: "https://www.instagram.com/p/DHq_baPOxmT/" },
  { title: "International Women’s Day panel", date: "Mar 2025", type: "Panel", text: "A conversation on technology, opportunity and women’s leadership.", href: "https://www.instagram.com/p/DHLTUpVxqL4/?img_index=4" },
  { title: "Un título no te define en tech", date: "Oct 2024", type: "Talk", text: "A practical talk about non-traditional paths into the technology industry.", href: "https://www.instagram.com/p/DBd7sczuX3t/" },
  { title: "PlatziConf", date: "Sep 2024", type: "Conference", text: "Talk on the future of Python as a language.", href: "https://www.instagram.com/p/C_O2FzBRlNg/?img_index=3" },
  { title: "Build with AI Bolivia", date: "May 2024", type: "Mentorship", text: "Mentor at the Build with AI Bolivia hackathon.", href: "https://www.instagram.com/p/C6ZYYhou_sd/?img_index=1" },
  { title: "Nerdearla Chile", date: "Apr 2024", type: "Conference", text: "Speaker lineup for one of Latin America’s largest technology events.", href: "https://www.instagram.com/p/C5Y5yzWOB8n/?img_index=3" },
  { title: "FuckUp Nights: Green & Tech", date: "Apr 2024", type: "Talk", text: "Sharing lessons from setbacks, technology and building forward.", href: "https://www.instagram.com/p/C4_eTQiP7z2/" },
  { title: "Google I/O Extended Cochabamba", date: "Aug 2023", type: "Workshop", text: "Workshop on MediaPipe and taking computer vision ideas into practice.", href: "https://www.instagram.com/p/CwObFadLvIQ/" },
  { title: "Women Game Jam Bolivia", date: "Aug 2023", type: "Mentorship", text: "Mentor for an inclusive game-building community event.", href: "https://www.instagram.com/p/Cvxu_6uu8TR/?img_index=1" },
  { title: "MujeresTech LATAM", date: "Aug 2023", type: "Talk", text: "Guest speaker sharing a path through AI, community and education.", href: "https://www.instagram.com/p/Cvm31ffsHOZ/" },
  { title: "Club de chicas programadoras", date: "Oct 2021", type: "Workshop", text: "In-person Python workshop for girls starting their path in technology." },
];

const pageSize = 6;

export default function Community() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const copy = isSpanish ? { heroLabel: "CONSTRUYENDO EN PÚBLICO, JUNTAS", hero: <>La comunidad es<br /><em>la tecnología real.</em></>, heroText: "Desde Santa Cruz hasta Latinoamérica, creo espacios donde las personas pueden aprender, preguntar, construir y pertenecer.", explore: "Explora los eventos", introLabel: "EL TRABAJO DETRÁS DEL MOMENTO", intro: <>Creando más<br /><em>puertas abiertas.</em></>, introText: "El trabajo comunitario es donde mi amor por la tecnología se vuelve útil. Lidero, enseño y colaboro con personas que están construyendo su próximo capítulo, ya sea dando sus primeros pasos en código o haciendo crecer una carrera técnica.", rolesLabel: "ROLES ACTUALES EN COMUNIDAD", roles: <>Aparecer con<br /><em>propósito.</em></>, galleryLabel: "MOMENTOS EN COMUNIDAD", gallery: <>Hecho en<br /><em>el espacio.</em></>, galleryText: "Mentorías, conversaciones, talleres y las personas que hacen que cada evento importe.", archiveLabel: "ARCHIVO DE EVENTOS", archive: <>Una línea de tiempo de<br /><em>ideas compartidas.</em></>, archiveText: "Este archivo reúne charlas, talleres, paneles, mentorías y encuentros seleccionados de mi registro de eventos.", eventDetail: "Detalle del evento", eventNote: "Del archivo de eventos", together: "CONSTRUYAMOS UN ESPACIO JUNTAS", cta: <>¿Tienes una idea para<br /><em>tu comunidad?</em></>, talk: "Hablemos", filters: { All: "Todos", Conference: "Conferencia", Talk: "Charla", Workshop: "Taller", Panel: "Panel", Mentorship: "Mentoría", "Community meetup": "Meetup" }, galleryLabels: ["Meetup AWS + n8n", "AWS Community Day Bolivia", "WTM Future Makers", "Google I/O Extended", "Women Game Jam", "PyLadies", "Build with AI Bolivia", "FuckUp Nights"], rolesText: ["Crear espacios para aprender, compartir y construir con comunidades cloud.", "Ayudar a las personas a descubrir automatización práctica y creativa.", "Abrir más caminos para que las mujeres lideren en tecnología.", "Hacer crecer una comunidad local donde las mujeres aprenden juntas."] } : { heroLabel: "BUILDING IN PUBLIC, TOGETHER", hero: <>Community is<br /><em>the real tech.</em></>, heroText: "From Santa Cruz to Latin America, I create places where people can learn, ask, build and belong.", explore: "Explore the events", introLabel: "THE WORK BEHIND THE MOMENT", intro: <>Creating more<br /><em>open doors.</em></>, introText: "Community work is where my love for technology becomes useful. I lead, teach and collaborate with people who are building their next chapter — whether they are taking their first steps in code or growing a technical career.", rolesLabel: "CURRENT COMMUNITY ROLES", roles: <>Showing up<br /><em>with purpose.</em></>, galleryLabel: "MOMENTS IN THE COMMUNITY", gallery: <>Made in<br /><em>the room.</em></>, galleryText: "Mentorship, conversations, workshops and the people who make every event matter.", archiveLabel: "EVENT ARCHIVE", archive: <>A timeline of<br /><em>shared ideas.</em></>, archiveText: "The archive brings together selected talks, workshops, panels, mentorships and community gatherings from the events record.", eventDetail: "Event detail", eventNote: "From the event archive", together: "LET’S BUILD A ROOM TOGETHER", cta: <>Have an idea for<br /><em>your community?</em></>, talk: "Let’s talk", filters: { All: "All", Conference: "Conference", Talk: "Talk", Workshop: "Workshop", Panel: "Panel", Mentorship: "Mentorship", "Community meetup": "Community meetup" }, galleryLabels: gallery.map((item) => item.label), rolesText: roles.map((item) => item.text) };
  const localizedRoles = roles.map((role, index) => ({ ...role, text: copy.rolesText[index] }));
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const filteredEvents = useMemo(() => category === "All" ? events : events.filter((event) => event.type === category), [category]);
  const totalPages = Math.ceil(filteredEvents.length / pageSize);
  const visibleEvents = filteredEvents.slice((page - 1) * pageSize, page * pageSize);
  const changeCategory = (next) => { setCategory(next); setPage(1); };

  return <main className="community-page">
    <Helmet><title>Community — Carli Code</title><meta name="description" content="Carli Code’s community work, ambassador roles, events and gallery." /></Helmet>
    <section className="community-hero"><div className="community-grid" /><Reveal><p className="eyebrow"><span /> {copy.heroLabel}</p><h1>{copy.hero}</h1><p>{copy.heroText}</p><a className="button button-primary" href="#events">{copy.explore} <ArrowUpRight size={18} /></a></Reveal><div className="community-orbit"><span>LEARN</span><span>BUILD</span><span>SHARE</span><span>BELONG</span></div></section>

    <section className="community-section community-intro"><Reveal><p className="eyebrow"><span /> {copy.introLabel}</p><h2>{copy.intro}</h2></Reveal><Reveal delay={120}><p>{copy.introText}</p></Reveal></section>

    <section className="community-section roles-section"><Reveal className="roles-heading"><p className="eyebrow"><span /> {copy.rolesLabel}</p><h2>{copy.roles}</h2></Reveal><div className="roles-grid">{localizedRoles.map((role, index) => <Reveal delay={index * 85} key={role.title}><article><span>0{index + 1}</span><Sparkles size={22} /><h3>{role.title}</h3><p>{role.text}</p></article></Reveal>)}</div></section>

    <section className="community-section gallery-section"><Reveal className="gallery-heading"><p className="eyebrow"><span /> {copy.galleryLabel}</p><h2>{copy.gallery}</h2><p>{copy.galleryText}</p></Reveal><div className="gallery-grid">{gallery.map((photo, index) => <Reveal delay={index * 55} key={photo.label}><figure><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption>{copy.galleryLabels[index]}</figcaption></figure></Reveal>)}</div></section>

    <section id="events" className="community-section events-section"><Reveal className="events-heading"><p className="eyebrow"><span /> {copy.archiveLabel}</p><h2>{copy.archive}</h2><p>{copy.archiveText}</p></Reveal><div className="event-filters" aria-label="Filter events">{["All", "Conference", "Talk", "Workshop", "Panel", "Mentorship", "Community meetup"].map((item) => <button className={category === item ? "active" : ""} onClick={() => changeCategory(item)} key={item}>{copy.filters[item]}</button>)}</div><div className="event-grid">{visibleEvents.map((event, index) => <Reveal delay={index * 65} key={event.title}><article className="event-card"><div><span>{copy.filters[event.type]}</span><time><CalendarDays size={15} /> {event.date}</time></div><h3>{event.title}</h3><p>{event.text}</p>{event.href ? <a href={event.href} target="_blank" rel="noreferrer">{copy.eventDetail} <ArrowUpRight size={16} /></a> : <span className="event-note">{copy.eventNote}</span>}</article></Reveal>)}</div><nav className="community-pagination" aria-label="Event archive pages"><button onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} aria-label="Previous event page"><ChevronLeft size={18} /></button>{Array.from({ length: totalPages }, (_, index) => <button onClick={() => setPage(index + 1)} className={page === index + 1 ? "active" : ""} aria-current={page === index + 1 ? "page" : undefined} key={index}>{String(index + 1).padStart(2, "0")}</button>)}<button onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={page === totalPages} aria-label="Next event page"><ChevronRight size={18} /></button></nav></section>

    <section className="community-cta"><Reveal><Heart size={25} fill="currentColor" /><p className="eyebrow"><span /> {copy.together}</p><h2>{copy.cta}</h2><a className="button button-primary" href="/collaborations">{copy.talk} <ArrowUpRight size={18} /></a></Reveal><UsersRound className="community-cta-icon" size={205} /></section>
  </main>;
}
