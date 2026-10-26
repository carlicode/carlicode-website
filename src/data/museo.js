// Datos del museo (/museo). Las piezas vienen de content/aportes/aportes.csv (A001–A087) vía `npm run museo:build`,
// que genera src/data/aportes.json y las fotos WebP en public/museo/. Los hitos de abajo se escriben a mano.
// date: "AAAA", "AAAA-MM" o "AAAA-MM-DD"; null = sin fecha (va al final de la línea de tiempo).
import aportes from "./aportes.json";
import * as en from "./museo.en";

export const rooms = [
  { id: "escenarios", name: { es: "Escenarios", en: "Stages" }, text: { es: "Charlas, paneles y conferencias.", en: "Talks, panels and conferences." } },
  { id: "contenido", name: { es: "Contenido", en: "Content" }, text: { es: "Podcasts, entrevistas y videos.", en: "Podcasts, interviews and videos." } },
  { id: "comunidad", name: { es: "Comunidad", en: "Community" }, text: { es: "Embajadurías y comunidades que lidero o acompaño.", en: "Ambassador roles and communities I lead or support." } },
  { id: "mentorias", name: { es: "Mentorías", en: "Mentoring" }, text: { es: "Hackathons y espacios donde acompaño a otras personas.", en: "Hackathons and spaces where I support other people." } },
  { id: "educacion", name: { es: "Educación", en: "Education" }, text: { es: "Talleres, cursos y formación.", en: "Workshops, courses and training." } },
  { id: "codigo", name: { es: "Código", en: "Code" }, text: { es: "Proyectos, competencias y cosas que construí.", en: "Projects, competitions and things I built." } },
  { id: "vida", name: { es: "Vida", en: "Life" }, text: { es: "Los momentos que cambiaron el camino.", en: "The moments that changed the path." } },
];

const milestones = [
  { id: "hito-2013-universidad", sala: "vida", date: "2013", title: { es: "Entro a la universidad", en: "I start university" }, text: null, images: [] },
  { id: "hito-2016-curso-ia", sala: "educacion", date: "2016", title: { es: "Curso de IA con Eduardo Di Santi", en: "AI course with Eduardo Di Santi" }, text: null, images: [] },
  { id: "hito-2016-acm-icpc", sala: "codigo", date: "2016", title: { es: "ACM-ICPC: 3.er lugar", en: "ACM-ICPC: 3rd place" }, text: null, images: [] },
];

// Los aportes están en español; museo.en.js trae el inglés. Lo que no tiene traducción se muestra tal cual (nombres propios).
const tr = (map, value) => (value ? { es: value, en: map[value] ?? value } : null);
const fromAportes = aportes.map((piece) => ({
  ...piece,
  title: { es: piece.title, en: en.titles[piece.id] ?? piece.title },
  text: piece.text ? { es: piece.text, en: en.texts[piece.id] ?? piece.text } : null,
  event: tr(en.events, piece.event),
  role: tr(en.roles, piece.role),
  place: tr(en.places, piece.place),
  metric: tr(en.metrics, piece.metric),
}));

export const pieces = [...milestones, ...fromAportes];

export const roomIds = rooms.map((room) => room.id);
export const getPiece = (id) => pieces.find((piece) => piece.id === id);
export const localized = (value, language) => (typeof value === "string" ? value : value?.[language]);
export const photo = (name, thumb = false) => `/museo/${name}${thumb ? "-thumb" : ""}.webp`;
// Miniatura para la lista: primera foto, o la miniatura del video de YouTube si no hay foto.
export const pieceThumb = (piece) => piece.images?.[0] ? photo(piece.images[0], true) : piece.youtubeId ? `https://i.ytimg.com/vi/${piece.youtubeId}/hqdefault.jpg` : null;

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
