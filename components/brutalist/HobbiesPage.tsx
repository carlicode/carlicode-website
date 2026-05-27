import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { SubPageShell } from "./SubPageShell";
import { HobbyImage } from "./HobbyImage";

export function HobbiesPage({
  lang,
  dict,
  photos,
  isoDate,
}: {
  lang: Locale;
  dict: Dictionary;
  photos: string[];
  isoDate: string;
}) {
  const p = dict.hobbiesPage;
  const home = `/${lang}`;

  return (
    <SubPageShell lang={lang} dict={dict} pathSuffix="/hobbies" isoDate={isoDate}>
      <header className="br-sub-hero">
        <Link href={home} className="br-sub-back">
          {p.backHome}
        </Link>
        <div className="br-sub-kicker">{p.kicker}</div>
        <h1 className="br-sub-title">{p.title}</h1>
        <p className="br-sub-intro">{p.intro}</p>
      </header>

      <section className="br-sub-section">
        <div className="br-hobby-grid">
          {photos.map((src, i) => (
            <HobbyImage
              key={src}
              src={src}
              alt={`${p.photoAlt} ${i + 1}`}
              label={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>
    </SubPageShell>
  );
}
