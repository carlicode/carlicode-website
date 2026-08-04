import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export function AboutSection({
  lang: _lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="br-about-section" id="about">
      <p className="br-about-label">{dict.aboutKicker}</p>
      <p className="br-about-body">{dict.aboutBody}</p>
      <div className="br-about-tags">
        <span>{dict.aboutStat1}</span>
        <span>{dict.aboutStat2}</span>
        <span>{dict.aboutStat3}</span>
      </div>
    </section>
  );
}
