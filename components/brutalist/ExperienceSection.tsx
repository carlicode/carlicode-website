import type {
  CvAchievement,
  CvCertification,
  CvEducation,
  CvJob,
  CvSkillGroup,
  Dictionary,
} from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { CV_PATH } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function ExperienceSection({
  lang,
  dict,
  jobs,
  skillGroups,
  education,
  achievements,
  certifications,
  sectionHeaderNum = "/06",
}: {
  lang: Locale;
  dict: Dictionary;
  jobs: CvJob[];
  skillGroups: CvSkillGroup[];
  education: CvEducation[];
  achievements: CvAchievement[];
  certifications: CvCertification[];
  sectionHeaderNum?: string;
}) {
  const es = lang === "es";

  return (
    <section className="br-section" id="experience">
      <SectionHeader
        num={sectionHeaderNum}
        title={`${dict.cvKicker} — CV.MD`}
        meta={es ? "RESUMÉ" : "RÉSUMÉ"}
      />
      <div className="br-cv-table">
        <div className="br-cv-thead">
          <div>{es ? "PERIODO / LUGAR" : "PERIOD / LOCATION"}</div>
          <div>{es ? "ROL · COMPAÑÍA" : "ROLE · COMPANY"}</div>
          <div>{es ? "TIPO" : "TYPE"}</div>
          <div>{es ? "IMPACTO" : "IMPACT"}</div>
        </div>
        {jobs.map((job, i) => (
          <div className="br-cv-row" key={`${job.company}-${i}`}>
            <div>
              <div className="br-cv-period">{job.period}</div>
              <div className="br-cv-loc" style={{ marginTop: 6 }}>
                {es ? job.locEs : job.locEn}
              </div>
            </div>
            <div>
              <div className="br-cv-role">{job.role}</div>
              <div className="br-cv-company">{job.company}</div>
            </div>
            <div className="br-cv-loc">{job.employmentType}</div>
            <div>
              <ul className="br-cv-bullets">
                {(es ? job.bulletsEs : job.bulletsEn).map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="br-cv-extra">
        <h3 className="br-cv-extra-title">{dict.cvSkillsTitle}</h3>
        <div className="br-cv-skills-grid">
          {skillGroups.map((g) => (
            <div className="br-cv-skill-block" key={g.categoryEn}>
              <div className="br-cv-skill-cat">
                {es ? g.categoryEs : g.categoryEn}
              </div>
              <ul className="br-cv-bullets">
                {(es ? g.itemsEs : g.itemsEn).map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="br-cv-extra">
        <h3 className="br-cv-extra-title">{dict.cvEducationTitle}</h3>
        <ul className="br-cv-list">
          {education.map((ed, i) => (
            <li key={i}>
              <strong>{es ? ed.institutionEs : ed.institutionEn}</strong>
              {" — "}
              {es ? ed.degreeEs : ed.degreeEn}
            </li>
          ))}
        </ul>
      </div>

      <div className="br-cv-extra">
        <h3 className="br-cv-extra-title">{dict.cvAchievementsTitle}</h3>
        <ul className="br-cv-list">
          {achievements.map((a, i) => (
            <li key={i}>{es ? a.textEs : a.textEn}</li>
          ))}
        </ul>
      </div>

      <div className="br-cv-extra">
        <h3 className="br-cv-extra-title">{dict.cvCertificationsTitle}</h3>
        <ul className="br-cv-certs">
          {certifications.map((c) => (
            <li key={c.name}>
              {c.url ? (
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.name}
                </a>
              ) : (
                <span>{c.name}</span>
              )}
              <span className="br-cv-cert-issuer">{c.issuer}</span>
            </li>
          ))}
        </ul>
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
          {es
            ? "PDF · Última actualización mayo 2026"
            : "PDF · Last updated May 2026"}
        </span>
        <a href={CV_PATH} className="br-download" download>
          ↓ {dict.cvDownload}
        </a>
      </div>
    </section>
  );
}
