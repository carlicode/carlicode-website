import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import Link from "next/link";

export function MinimalPreviewAsesorias({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="min-preview-section min-asesorias-preview" id="asesorias">
      <div className="min-container">
        <div className="min-preview-header">
          <h2 className="min-section-title">
            {lang === "es" ? "Asesorías & Consultoría" : "Consulting & Advisory"}
          </h2>
          <Link href={`/${lang}/asesorias`} className="min-preview-link">
            {lang === "es" ? "Ver paquetes →" : "View packages →"}
          </Link>
        </div>
        
        <p className="min-section-subtitle">
          {lang === "es" 
            ? "Te ayudo a construir productos de IA, optimizar tu stack técnico y escalar tu equipo."
            : "I help you build AI products, optimize your tech stack and scale your team."}
        </p>
        
        <div className="min-asesorias-highlights">
          <div className="min-highlight-card">
            <div className="min-highlight-icon">🤖</div>
            <h3>{lang === "es" ? "Sistemas de IA" : "AI Systems"}</h3>
            <p>LLMs, Computer Vision, NLP, RAG</p>
          </div>
          <div className="min-highlight-card">
            <div className="min-highlight-icon">⚡</div>
            <h3>{lang === "es" ? "Automatización" : "Automation"}</h3>
            <p>n8n, Workflows, Integraciones</p>
          </div>
          <div className="min-highlight-card">
            <div className="min-highlight-icon">☁️</div>
            <h3>Cloud & MLOps</h3>
            <p>AWS, Deployment, Pipelines</p>
          </div>
        </div>
        
        <div className="min-preview-cta">
          <Link href={`/${lang}/asesorias`} className="min-btn min-btn-primary">
            {lang === "es" ? "Ver paquetes y precios" : "View packages & pricing"}
          </Link>
        </div>
      </div>
    </section>
  );
}
