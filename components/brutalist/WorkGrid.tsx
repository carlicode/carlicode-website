import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/content/types";

export function WorkGrid({
  lang,
  dict,
  projects,
}: {
  lang: Locale;
  dict: Dictionary;
  projects: Project[];
}) {
  return (
    <section className="br-work-section" id="work">
      <p className="br-section-label">{dict.workKicker}</p>
      <ul className="br-work-list">
        {projects.map((p, i) => (
          <li className="br-work-row" key={p.code}>
            <span className="br-work-index">{String(i + 1).padStart(2, "0")}</span>
            <div className="br-work-main">
              <h3 className="br-work-name">
                {lang === "es" ? p.titleEs : p.titleEn}
              </h3>
              <p className="br-work-desc">
                {lang === "es" ? p.descEs : p.descEn}
              </p>
            </div>
            <div className="br-work-side">
              <span className="br-work-year">{p.year}</span>
              <div className="br-work-tags">
                {p.tags.map((tag) => (
                  <span className="br-work-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
