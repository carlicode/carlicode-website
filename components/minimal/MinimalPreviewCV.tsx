import type { Locale } from "@/lib/i18n";
import type { Dictionary, CvJob } from "@/content/types";
import Link from "next/link";

export function MinimalPreviewCV({
  lang,
  dict,
  jobs,
}: {
  lang: Locale;
  dict: Dictionary;
  jobs: CvJob[];
}) {
  return (
    <section className="min-preview-section" id="experience">
      <div className="min-container">
        <div className="min-preview-header">
          <h2 className="min-section-title">{dict.cvKicker}</h2>
          <Link href={`/${lang}/cv`} className="min-preview-link">
            {lang === "es" ? "Ver todo →" : "View all →"}
          </Link>
        </div>
        
        <div className="min-preview-grid">
          {jobs.slice(0, 2).map((job, index) => (
            <div key={index} className="min-preview-card">
              <div className="min-preview-badge">{job.period}</div>
              <h3 className="min-preview-title">{job.role}</h3>
              <p className="min-preview-company">{job.company}</p>
              <p className="min-preview-desc">
                {(lang === "es" ? job.bulletsEs : job.bulletsEn)[0]}
              </p>
            </div>
          ))}
        </div>
        
        <div className="min-preview-cta">
          <Link href={`/${lang}/cv`} className="min-btn min-btn-ghost">
            {dict.cvDownload}
          </Link>
        </div>
      </div>
    </section>
  );
}
