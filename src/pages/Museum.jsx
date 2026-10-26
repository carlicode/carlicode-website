import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { useLanguage } from "../components/LanguageProvider";
import { formatDate, groupByYear, localized, pieceThumb, pieces, roomIds, rooms } from "../data/museo";

const copy = {
  es: {
    name: "Museo",
    seo: "El museo de Carli Code: charlas, comunidad, mentorías, educación y código, en una línea de tiempo.",
    eyebrow: "EL MUSEO", title: <>Todo lo que he <em>hecho y compartido.</em></>,
    text: "Una línea de tiempo con las charlas, comunidades, mentorías y proyectos de Carli Code. Filtra por sala o abre una pieza para ver su ficha.",
    all: "Todas", rooms: "SALAS", noDate: "Sin fecha", empty: "Esta sala todavía no tiene piezas.", open: "Ver ficha",
  },
  en: {
    name: "Museum",
    seo: "The Carli Code museum: talks, community, mentoring, education and code, on a timeline.",
    eyebrow: "THE MUSEUM", title: <>Everything I’ve <em>made and shared.</em></>,
    text: "A timeline of Carli Code’s talks, communities, mentoring and projects. Filter by room or open a piece to see its page.",
    all: "All", rooms: "ROOMS", noDate: "Undated", empty: "This room has no pieces yet.", open: "View piece",
  },
};

export default function Museum() {
  const { language } = useLanguage();
  const t = copy[language];
  const [params, setParams] = useSearchParams();
  const requested = params.get("sala");
  const sala = roomIds.includes(requested) ? requested : null;
  const visible = sala ? pieces.filter((piece) => piece.sala === sala) : pieces;
  const roomName = (id) => rooms.find((room) => room.id === id).name[language];
  const pick = (id) => {
    const next = new URLSearchParams(params);
    if (id) next.set("sala", id); else next.delete("sala");
    setParams(next, { replace: true });
  };
  const count = (id) => pieces.filter((piece) => piece.sala === id).length;

  return <main className="museum">
    <Seo title={`${t.name} — Carli Code`} description={t.seo} />
    <section className="museum-hero"><Reveal><p className="eyebrow"><span /> {t.eyebrow}</p><h1>{t.title}</h1><p>{t.text}</p></Reveal></section>

    <nav className="museum-rooms" aria-label={t.rooms}>
      <button type="button" className={!sala ? "is-active" : ""} aria-pressed={!sala} onClick={() => pick(null)}>{t.all} <span>{pieces.length}</span></button>
      {rooms.map((room) => <button type="button" key={room.id} className={sala === room.id ? "is-active" : ""} aria-pressed={sala === room.id} onClick={() => pick(room.id)}>{room.name[language]} <span>{count(room.id)}</span></button>)}
    </nav>
    {sala && <p className="museum-room-text">{rooms.find((room) => room.id === sala).text[language]}</p>}

    <section className="museum-timeline">
      {visible.length === 0 && <p>{t.empty}</p>}
      {groupByYear(visible).map(([year, items]) => <div className="museum-year" key={year ?? "sin-fecha"}>
        <h2>{year ?? t.noDate}</h2>
        <ul>{items.map((piece) => {
          const image = pieceThumb(piece);
          return <li key={piece.id}><Link to={`/museo/${piece.id}`} className="museum-piece">
            {image && <img src={image} alt="" loading="lazy" />}
            <div>
              <small>{roomName(piece.sala)}{piece.date && ` · ${formatDate(piece.date, language)}`}</small>
              <h3>{localized(piece.title, language)}</h3>
              {piece.event && <p className="museum-event">{localized(piece.event, language)}{piece.role && ` · ${localized(piece.role, language)}`}</p>}
              {piece.text && <p>{piece.text[language]}</p>}
            </div>
            <ArrowUpRight size={18} aria-label={t.open} />
          </Link></li>;
        })}</ul>
      </div>)}
    </section>
  </main>;
}
