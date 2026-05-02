import type { Locale } from "@/lib/i18n";
import type { Dictionary, CvJob } from "@/content/types";

export function MinimalExperience({
  lang,
  dict,
  jobs,
}: {
  lang: Locale;
  dict: Dictionary;
  jobs: CvJob[];
}) {
  return (
    <section className="min-experience" id="experience">
      <div className="min-container">
        <h2 className="min-section-title">{dict.cvKicker}</h2>
        
        <div className="min-timeline">
          {jobs.map((job, index) => (
            <div key={index} className="min-timeline-item">
              <div className="min-timeline-marker"></div>
              <div className="min-timeline-content">
                <div className="min-job-header">
                  <div>
                    <h3 className="min-job-title">{job.role}</h3>
                    <p className="min-job-company">{job.company}</p>
                  </div>
                  <div className="min-job-period">{job.period}</div>
                </div>
                <ul className="min-job-bullets">
                  {(lang === "es" ? job.bulletsEs : job.bulletsEn).map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="min-cv-download">
          <a href="/cv-carli-code-2026.pdf" className="min-btn min-btn-ghost" download>
            {dict.cvDownload}
          </a>
        </div>
      </div>
    </section>
  );
}
