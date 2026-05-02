import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import type { Talk } from "@/content/types";
import { SectionHeader } from "./SectionHeader";

export function TalksTable({
  lang,
  dict,
  talksData,
}: {
  lang: Locale;
  dict: Dictionary;
  talksData: Talk[];
}) {
  const meta =
    talksData.length.toString().padStart(2, "0") +
    " " +
    (lang === "es" ? "CHARLAS" : "TALKS");

  return (
    <section className="br-section" id="talks">
      <SectionHeader num="/04" title={dict.talksKicker} meta={meta} />
      <div className="br-talks">
        {talksData.map((talk, i) => (
          <div className="br-talks-row" key={`${talk.eventEn}-${talk.year}`}>
            <div className="br-talks-num">
              /{String(i + 1).padStart(2, "0")}
            </div>
            <div className="br-talks-event">
              {lang === "es" ? talk.eventEs : talk.eventEn}
            </div>
            <div className="br-talks-topic">
              &quot;{lang === "es" ? talk.topicEs : talk.topicEn}&quot;
            </div>
            <div className="br-talks-meta">{talk.city}</div>
            <div className="br-talks-meta">{talk.year}</div>
            <div className="br-talks-meta">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}
