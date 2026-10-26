import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Seo from "../components/Seo";
import { useLanguage } from "../components/LanguageProvider";
import { formatDate, getPiece, localized, photo, pieceThumb, rooms } from "../data/museo";
import NotFound from "./NotFound";

const copy = {
  es: { back: "Volver al museo", link: "Ver enlace", site: "Museo Carli Code", seo: "Una pieza del museo de Carli Code: charlas, comunidad, mentorías, educación y código.", original: "Título original", noText: "Esta ficha todavía no tiene descripción.", room: "Sala", date: "Fecha", noDate: "Sin fecha", event: "Evento", role: "Rol", place: "Lugar", metric: "Dato" },
  en: { back: "Back to the museum", link: "View link", site: "Carli Code Museum", seo: "A piece from the Carli Code museum: talks, community, mentoring, education and code.", original: "Original title", noText: "This piece has no description yet.", room: "Room", date: "Date", noDate: "Undated", event: "Event", role: "Role", place: "Place", metric: "Detail" },
};

export default function MuseumPiece() {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = copy[language];
  const piece = getPiece(id);
  if (!piece) return <NotFound />;
  const room = rooms.find((item) => item.id === piece.sala);
  const [cover, ...extra] = piece.images ?? [];
  const video = !cover && piece.youtubeId ? pieceThumb(piece) : null;
  const facts = [[t.room, room.name[language]], [t.date, formatDate(piece.date, language) ?? t.noDate], [t.event, localized(piece.event, language)], [t.role, localized(piece.role, language)], [t.place, localized(piece.place, language)], [t.metric, localized(piece.metric, language)]].filter(([, value]) => value);
  const title = localized(piece.title, language);
  const original = typeof piece.title === "object" && piece.title.es !== title ? piece.title.es : null;
  return <main className="museum museum-detail">
    <Seo title={`${title} — ${t.site}`} description={piece.text?.[language] ?? t.seo} />
    <Link className="text-link" to={`/museo?sala=${piece.sala}`}><ArrowLeft size={16} /> {t.back} · {room.name[language]}</Link>
    <article>
      <div className="museum-photos">
        {cover && <img src={photo(cover)} alt={title} />}
        {video && <img src={video} alt={title} />}
        {extra.map((name) => <img key={name} src={photo(name)} alt={title} loading="lazy" />)}
      </div>
      <div>
        <p className="eyebrow"><span /> {room.name[language].toUpperCase()}</p>
        <h1>{title}</h1>
        {original && <p className="museum-original">{t.original}: {original}</p>}
        <dl>{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <p>{piece.text?.[language] ?? t.noText}</p>
        {piece.href && <a className="button button-primary" href={piece.href} target="_blank" rel="noreferrer">{t.link} <ArrowUpRight size={17} /></a>}
      </div>
    </article>
  </main>;
}
