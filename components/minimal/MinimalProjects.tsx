import type { Locale } from "@/lib/i18n";
import type { Dictionary, Project } from "@/content/types";

export function MinimalProjects({
  lang,
  dict,
  projects,
}: {
  lang: Locale;
  dict: Dictionary;
  projects: Project[];
}) {
  return (
    <section className="min-projects" id="work">
      <div className="min-container">
        <h2 className="min-section-title">{dict.workKicker}</h2>
        
        <div className="min-projects-grid">
          {projects.map((project) => (
            <div key={project.code} className="min-project-card">
              <div className="min-project-header">
                <span className="min-project-code">{project.code}</span>
                <span className="min-project-year">{project.year}</span>
              </div>
              <h3 className="min-project-title">
                {lang === "es" ? project.titleEs : project.titleEn}
              </h3>
              <p className="min-project-desc">
                {lang === "es" ? project.descEs : project.descEn}
              </p>
              <div className="min-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="min-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
