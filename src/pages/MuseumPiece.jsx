import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Seo from "../components/Seo";
import { useLanguage } from "../components/LanguageProvider";
import { formatDate, getPiece, localized, pieceImage, rooms } from "../data/museo";
import NotFound from "./NotFound";

const copy = {
  es: { back: "Volver al museo", link: "Ver publicación original", noText: "Esta ficha todavía no tiene descripción.", room: "Sala", date: "Fecha", noDate: "Sin fecha" },
  en: { back: "Back to the museum", link: "View original post", noText: "This piece has no description yet.", room: "Room", date: "Date", noDate: "Undated" },
};

export default function MuseumPiece() {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = copy[language];
  const piece = getPiece(id);
  if (!piece) return <NotFound />;
  const room = rooms.find((item) => item.id === piece.sala);
  const image = pieceImage(piece);
  const title = localized(piece.title, language);
  return <main className="museum museum-detail">
    <Seo title={`${title} — Museo Carli Code`} description={piece.text?.[language]} />
    <Link className="text-link" to={`/museo?sala=${piece.sala}`}><ArrowLeft size={16} /> {t.back} · {room.name[language]}</Link>
    <article>
      {image && <img src={image} alt={title} />}
      <div>
        <p className="eyebrow"><span /> {room.name[language].toUpperCase()}</p>
        <h1>{title}</h1>
        <dl><div><dt>{t.room}</dt><dd>{room.name[language]}</dd></div><div><dt>{t.date}</dt><dd>{formatDate(piece.date, language) ?? t.noDate}</dd></div></dl>
        <p>{piece.text?.[language] ?? t.noText}</p>
        {piece.href && <a className="button button-primary" href={piece.href} target="_blank" rel="noreferrer">{t.link} <ArrowUpRight size={17} /></a>}
      </div>
    </article>
  </main>;
}
