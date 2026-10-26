// Datos del museo (/museo). El Sprint 5 reemplaza `pieces` con los aportes A001–A087 (content/aportes/).
// Por ahora usa lo que el sitio ya mostraba (eventos, roles, charlas) más los hitos de HANDOFF.md.
// date: "AAAA" o "AAAA-MM"; null = sin fecha (va al final de la línea de tiempo).
import awsCommunityDay from "../assets/community/aws-community-day.png";
import awsN8nMeetup from "../assets/community/aws-n8n-meetup.png";
import buildWithAi from "../assets/community/build-with-ai.png";
import fuckupNights from "../assets/community/fuckup-nights.png";
import googleIo from "../assets/community/google-io-extended.png";
import pyladiesMeetup from "../assets/community/pyladies-meetup.png";
import womenGameJam from "../assets/community/women-game-jam.png";
import wtmFutureMakers from "../assets/community/wtm-future-makers.png";
import { talks } from "./content";

export const rooms = [
  { id: "escenarios", name: { es: "Escenarios", en: "Stages" }, text: { es: "Charlas, paneles y conferencias.", en: "Talks, panels and conferences." } },
  { id: "contenido", name: { es: "Contenido", en: "Content" }, text: { es: "Podcasts, entrevistas y videos.", en: "Podcasts, interviews and videos." } },
  { id: "comunidad", name: { es: "Comunidad", en: "Community" }, text: { es: "Embajadurías y comunidades que lidero o acompaño.", en: "Ambassador roles and communities I lead or support." } },
  { id: "mentorias", name: { es: "Mentorías", en: "Mentoring" }, text: { es: "Hackathons y espacios donde acompaño a otras personas.", en: "Hackathons and spaces where I support other people." } },
  { id: "educacion", name: { es: "Educación", en: "Education" }, text: { es: "Talleres, cursos y formación.", en: "Workshops, courses and training." } },
  { id: "codigo", name: { es: "Código", en: "Code" }, text: { es: "Proyectos, competencias y cosas que construí.", en: "Projects, competitions and things I built." } },
  { id: "vida", name: { es: "Vida", en: "Life" }, text: { es: "Los momentos que cambiaron el camino.", en: "The moments that changed the path." } },
];

const ig = (code) => `https://www.instagram.com/p/${code}/`;

const milestones = [
  { id: "hito-2013-universidad", sala: "vida", date: "2013", title: { es: "Entro a la universidad", en: "I start university" }, text: null },
  { id: "hito-2016-curso-ia", sala: "educacion", date: "2016", title: { es: "Curso de IA con Eduardo Di Santi", en: "AI course with Eduardo Di Santi" }, text: null },
  { id: "hito-2016-acm-icpc", sala: "codigo", date: "2016", title: { es: "ACM-ICPC: 3.er lugar", en: "ACM-ICPC: 3rd place" }, text: null },
];

const events = [
  { id: "aws-community-day-bolivia-2025", sala: "escenarios", date: "2025", title: "AWS Community Day Bolivia", text: { es: "Speaker en un encuentro nacional de la comunidad AWS en Bolivia.", en: "Speaker at a national gathering of the AWS community in Bolivia." }, href: `${ig("DOXE-2cEW7G")}?img_index=2`, image: awsCommunityDay },
  { id: "aws-n8n-meetup-santa-cruz-2025", sala: "escenarios", date: "2025", title: "AWS + n8n meetup, Santa Cruz", text: { es: "Sesión comunitaria sobre automatización e IA práctica en Santa Cruz.", en: "A community session on automation and practical AI in Santa Cruz." }, href: `${ig("DPHIuGPANHW")}?img_index=1`, image: awsN8nMeetup },
  { id: "google-io-extended-santa-cruz-2025", sala: "escenarios", date: "2025", title: "Google I/O Extended Santa Cruz", text: { es: "Sesión como speaker sobre Gemma y modelos de IA abiertos.", en: "Speaker session on Gemma and open-source AI models." }, href: ig("DMc-8YqggNK") },
  { id: "iwd-future-makers-cochabamba-2025", sala: "escenarios", date: "2025-04", title: "IWD Future Makers Cochabamba", text: { es: "Inteligencia artificial para no programadores en International Women’s Day Future Makers.", en: "Artificial intelligence for non-programmers at International Women’s Day Future Makers." }, href: ig("DHq_baPOxmT"), image: wtmFutureMakers },
  { id: "panel-dia-de-la-mujer-2025", sala: "escenarios", date: "2025-03", title: { es: "Panel del Día Internacional de la Mujer", en: "International Women’s Day panel" }, text: { es: "Una conversación sobre tecnología, oportunidades y liderazgo de mujeres.", en: "A conversation on technology, opportunity and women’s leadership." }, href: `${ig("DHLTUpVxqL4")}?img_index=4` },
  { id: "un-titulo-no-te-define-en-tech-2024", sala: "escenarios", date: "2024-10", title: "Un título no te define en tech", text: { es: "Charla práctica sobre caminos no tradicionales para entrar a la industria tech.", en: "A practical talk about non-traditional paths into the technology industry." }, href: ig("DBd7sczuX3t") },
  { id: "platziconf-2024", sala: "escenarios", date: "2024-09", title: "PlatziConf", text: { es: "Charla sobre el futuro de Python como lenguaje.", en: "Talk on the future of Python as a language." }, href: `${ig("C_O2FzBRlNg")}?img_index=3` },
  { id: "build-with-ai-bolivia-2024", sala: "mentorias", date: "2024-05", title: "Build with AI Bolivia", text: { es: "Mentora en el hackathon Build with AI Bolivia.", en: "Mentor at the Build with AI Bolivia hackathon." }, href: `${ig("C6ZYYhou_sd")}?img_index=1`, image: buildWithAi },
  { id: "nerdearla-chile-2024", sala: "escenarios", date: "2024-04", title: "Nerdearla Chile", text: { es: "Speaker en uno de los eventos de tecnología más grandes de Latinoamérica.", en: "Speaker at one of Latin America’s largest technology events." }, href: `${ig("C5Y5yzWOB8n")}?img_index=3` },
  { id: "fuckup-nights-green-tech-2024", sala: "escenarios", date: "2024-04", title: "FuckUp Nights: Green & Tech", text: { es: "Lecciones sobre tropiezos, tecnología y seguir construyendo.", en: "Sharing lessons from setbacks, technology and building forward." }, href: ig("C4_eTQiP7z2"), image: fuckupNights },
  { id: "google-io-extended-cochabamba-2023", sala: "educacion", date: "2023-08", title: "Google I/O Extended Cochabamba", text: { es: "Taller sobre MediaPipe y cómo llevar ideas de visión por computadora a la práctica.", en: "Workshop on MediaPipe and taking computer vision ideas into practice." }, href: ig("CwObFadLvIQ"), image: googleIo },
  { id: "women-game-jam-bolivia-2023", sala: "mentorias", date: "2023-08", title: "Women Game Jam Bolivia", text: { es: "Mentora en un evento comunitario inclusivo para crear videojuegos.", en: "Mentor for an inclusive game-building community event." }, href: `${ig("Cvxu_6uu8TR")}?img_index=1`, image: womenGameJam },
  { id: "mujerestech-latam-2023", sala: "escenarios", date: "2023-08", title: "MujeresTech LATAM", text: { es: "Invitada para compartir un camino entre IA, comunidad y educación.", en: "Guest speaker sharing a path through AI, community and education." }, href: ig("Cvm31ffsHOZ") },
  { id: "club-de-chicas-programadoras-2021", sala: "educacion", date: "2021-10", title: "Club de chicas programadoras", text: { es: "Taller presencial de Python para chicas que empiezan en tecnología.", en: "In-person Python workshop for girls starting their path in technology." } },
];

const roles = [
  { id: "aws-community-builder", title: "AWS Community Builder", text: { es: "Crear espacios para aprender, compartir y construir con comunidades cloud.", en: "Creating spaces to learn, share and build with cloud communities." } },
  { id: "n8n-ambassador", title: "n8n Ambassador", text: { es: "Ayudar a las personas a descubrir automatización práctica y creativa.", en: "Helping people discover practical, creative automation." } },
  { id: "women-techmakers-ambassador", title: "Women Techmakers Ambassador", text: { es: "Abrir más caminos para que las mujeres lideren en tecnología.", en: "Opening more paths for women to lead in technology." } },
  { id: "pyladies-santa-cruz-lead", title: "PyLadies Santa Cruz Lead", text: { es: "Hacer crecer una comunidad local donde las mujeres aprenden juntas.", en: "Growing a local community where women can learn together." }, image: pyladiesMeetup },
].map((role) => ({ ...role, sala: "comunidad", date: null }));

// Charlas y podcasts con video en YouTube (sin fecha confirmada). Se omiten los dos "Podcast antiguo" sin título real.
const videos = talks.filter((talk) => !talk.title.startsWith("Podcast antiguo")).map((talk) => ({
  id: `youtube-${talk.youtubeId}`,
  sala: talk.title.startsWith("Podcast") ? "contenido" : "escenarios",
  date: null,
  title: talk.title,
  text: null,
  href: `https://www.youtube.com/watch?v=${talk.youtubeId}`,
  youtubeId: talk.youtubeId,
}));

export const pieces = [...milestones, ...events, ...roles, ...videos];

export const roomIds = rooms.map((room) => room.id);
export const getPiece = (id) => pieces.find((piece) => piece.id === id);
export const localized = (value, language) => (typeof value === "string" ? value : value?.[language]);
export const pieceImage = (piece) => piece.image ?? (piece.youtubeId ? `https://i.ytimg.com/vi/${piece.youtubeId}/hqdefault.jpg` : null);

// Año como número, o null si la pieza no tiene fecha.
export const yearOf = (piece) => (piece.date ? Number(piece.date.slice(0, 4)) : null);

export function formatDate(date, language) {
  if (!date) return null;
  const [year, month] = date.split("-").map(Number);
  if (!month) return String(year);
  return new Date(year, month - 1).toLocaleDateString(language === "es" ? "es" : "en", { month: "short", year: "numeric" });
}

// Años de más reciente a más antiguo; las piezas sin fecha forman el último grupo (year: null).
export function groupByYear(list) {
  const groups = new Map();
  for (const piece of [...list].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))) {
    const year = yearOf(piece);
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(piece);
  }
  const dated = [...groups].filter(([year]) => year !== null);
  return groups.has(null) ? [...dated, [null, groups.get(null)]] : dated;
}
