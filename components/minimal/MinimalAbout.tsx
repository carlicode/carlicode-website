import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";

export function MinimalAbout({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="min-about" id="about">
      <div className="min-container">
        <div className="min-about-content">
          <h2 className="min-section-title">{dict.aboutTitle}</h2>
          <p className="min-about-text">{dict.aboutBody}</p>
          
          <div className="min-badges">
            <div className="min-badge">Platzi Teacher</div>
            <div className="min-badge">Women Techmakers Ambassador</div>
            <div className="min-badge">PyLadies Lead</div>
          </div>
        </div>
      </div>
    </section>
  );
}
