import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

export function AboutSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="br-section" id="about">
      <SectionHeader
        num="/01"
        title={`${dict.aboutKicker} — ${dict.aboutTitle}`}
        meta="BIO · 2026"
      />
      <div className="br-about">
        <div className="br-about-body">
          <p className="br-about-text">
            {lang === "es" ? (
              <>
                De día construyo <mark>sistemas de IA</mark> con visión por
                computadora, LLMs y grafos de conocimiento. De noche traduzco
                lo que aprendo a <mark>millones</mark> en TikTok aprendiendo a
                programar.
              </>
            ) : (
              <>
                By day I build <mark>AI systems</mark> with computer vision,
                LLMs and knowledge graphs. By night I translate what I learn to{" "}
                <mark>millions</mark> on TikTok learning to code.
              </>
            )}
          </p>
        </div>
        <div className="br-about-stats">
          <div className="br-about-stat">
            <div className="br-stat-num">AWS</div>
            <div className="br-stat-lab">{dict.aboutStat1}</div>
          </div>
          <div className="br-about-stat">
            <div className="br-stat-num">n8n</div>
            <div className="br-stat-lab">{dict.aboutStat2}</div>
          </div>
          <div className="br-about-stat">
            <div className="br-stat-num">WB.</div>
            <div className="br-stat-lab">{dict.aboutStat3}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
