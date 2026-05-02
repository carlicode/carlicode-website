import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/content/types";
import { SectionHeader } from "./SectionHeader";

export function WorkGrid({
  lang,
  dict,
  projects,
}: {
  lang: Locale;
  dict: Dictionary;
  projects: Project[];
}) {
  const meta =
    projects.length.toString().padStart(2, "0") +
    " " +
    (lang === "es" ? "PROYECTOS" : "PROJECTS");

  return (
    <section className="br-section" id="work">
      <SectionHeader num="/02" title={dict.workKicker} meta={meta} />
      <div className="br-work">
        {projects.map((p) => (
          <article className="br-work-item" key={p.code}>
            <div className="br-work-head">
              <span className="br-work-code">PROJECT.{p.code}</span>
              <span className="br-work-meta">{p.year}</span>
            </div>
            <div>
              <h3 className="br-work-name">
                {lang === "es" ? p.titleEs : p.titleEn}
              </h3>
              <p className="br-work-desc">
                {lang === "es" ? p.descEs : p.descEn}
              </p>
            </div>
            <div className="br-work-foot">
              <div className="br-work-tags">
                {p.tags.map((tag) => (
                  <span className="br-work-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="br-work-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
