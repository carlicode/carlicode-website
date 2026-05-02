import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import type { CvJob } from "@/content/types";
import { CV_PATH } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function ExperienceSection({
  lang,
  dict,
  jobs,
}: {
  lang: Locale;
  dict: Dictionary;
  jobs: CvJob[];
}) {
  return (
    <section className="br-section" id="experience">
      <SectionHeader
        num="/06"
        title={`${dict.cvKicker} — CV.MD`}
        meta={lang === "es" ? "RESUMÉ" : "RÉSUMÉ"}
      />
      <div className="br-cv-table">
        <div className="br-cv-thead">
          <div>
            {lang === "es" ? "PERIODO / LUGAR" : "PERIOD / LOCATION"}
          </div>
          <div>{lang === "es" ? "ROL · COMPAÑÍA" : "ROLE · COMPANY"}</div>
          <div>{lang === "es" ? "TIPO" : "TYPE"}</div>
          <div>{lang === "es" ? "IMPACTO" : "IMPACT"}</div>
        </div>
        {jobs.map((job, i) => (
          <div className="br-cv-row" key={`${job.company}-${i}`}>
            <div>
              <div className="br-cv-period">{job.period}</div>
              <div className="br-cv-loc" style={{ marginTop: 6 }}>
                {lang === "es" ? job.locEs : job.locEn}
              </div>
            </div>
            <div>
              <div className="br-cv-role">{job.role}</div>
              <div className="br-cv-company">{job.company}</div>
            </div>
            <div className="br-cv-loc">{job.employmentType}</div>
            <div>
              <ul className="br-cv-bullets">
                {(lang === "es" ? job.bulletsEs : job.bulletsEn)
                  .slice(0, 2)
                  .map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="br-cv-foot">
        <span
          style={{
            color: "var(--muted)",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {lang === "es"
            ? "PDF · Última actualización abril 2026"
            : "PDF · Last updated April 2026"}
        </span>
        <a href={CV_PATH} className="br-download" download>
          ↓ {dict.cvDownload}
        </a>
      </div>
    </section>
  );
}
