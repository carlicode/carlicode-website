import { MinimalNav } from "@/components/minimal/MinimalNav";
import { MinimalFooter } from "@/components/minimal/MinimalFooter";
import { getDictionary } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import "@/components/minimal/minimal.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);
  
  return {
    title: `Asesorías - ${dict.metaTitle}`,
    description: "Consultoría técnica en IA, ML y desarrollo de producto",
  };
}

export default async function AsesoriasPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!isLocale(raw)) notFound();
  const lang = raw;
  const dict = getDictionary(lang);

  const packages = lang === "es" ? [
    {
      name: "Consulta Rápida",
      duration: "30 minutos",
      price: "$100 USD",
      features: [
        "Revisión de arquitectura de IA",
        "Recomendaciones de stack técnico",
        "Q&A sobre implementación",
        "Grabación de la sesión"
      ],
      cta: "Agendar consulta"
    },
    {
      name: "Sesión Profunda",
      duration: "1 hora",
      price: "$200 USD",
      features: [
        "Todo lo de Consulta Rápida",
        "Revisión de código en vivo",
        "Plan de implementación detallado",
        "Seguimiento por email (1 semana)"
      ],
      cta: "Agendar sesión",
      popular: true
    },
    {
      name: "Proyecto Completo",
      duration: "Personalizado",
      price: "Desde $2,000 USD",
      features: [
        "Diseño de arquitectura completa",
        "Implementación de MVP",
        "Training de modelos de ML",
        "Soporte continuo"
      ],
      cta: "Contactar"
    }
  ] : [
    {
      name: "Quick Consultation",
      duration: "30 minutes",
      price: "$100 USD",
      features: [
        "AI architecture review",
        "Tech stack recommendations",
        "Implementation Q&A",
        "Session recording"
      ],
      cta: "Book consultation"
    },
    {
      name: "Deep Dive Session",
      duration: "1 hour",
      price: "$200 USD",
      features: [
        "Everything in Quick Consultation",
        "Live code review",
        "Detailed implementation plan",
        "Email follow-up (1 week)"
      ],
      cta: "Book session",
      popular: true
    },
    {
      name: "Full Project",
      duration: "Custom",
      price: "From $2,000 USD",
      features: [
        "Complete architecture design",
        "MVP implementation",
        "ML model training",
        "Ongoing support"
      ],
      cta: "Contact"
    }
  ];

  return (
    <div className="minimal-root">
      <MinimalNav dict={dict} />
      <div style={{ paddingTop: "80px" }}>
        <section className="min-asesorias-hero">
          <div className="min-container">
            <h1 className="min-page-title">
              {lang === "es" ? "Asesorías & Consultoría" : "Consulting & Advisory"}
            </h1>
            <p className="min-page-subtitle">
              {lang === "es" 
                ? "Te ayudo a construir productos de IA, optimizar tu stack técnico y escalar tu equipo."
                : "I help you build AI products, optimize your tech stack and scale your team."}
            </p>
          </div>
        </section>

        <section className="min-packages">
          <div className="min-container">
            <div className="min-packages-grid">
              {packages.map((pkg, index) => (
                <div key={index} className={`min-package-card ${pkg.popular ? 'popular' : ''}`}>
                  {pkg.popular && (
                    <div className="min-package-badge">
                      {lang === "es" ? "Más popular" : "Most popular"}
                    </div>
                  )}
                  <h3 className="min-package-name">{pkg.name}</h3>
                  <div className="min-package-duration">{pkg.duration}</div>
                  <div className="min-package-price">{pkg.price}</div>
                  <ul className="min-package-features">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <Link href="#contact" className="min-btn min-btn-primary min-btn-full">
                    {pkg.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="min-expertise">
          <div className="min-container">
            <h2 className="min-section-title">
              {lang === "es" ? "En qué puedo ayudarte" : "How I can help"}
            </h2>
            <div className="min-expertise-grid">
              <div className="min-expertise-card">
                <div className="min-expertise-icon">🤖</div>
                <h3>{lang === "es" ? "Sistemas de IA" : "AI Systems"}</h3>
                <p>
                  {lang === "es" 
                    ? "LLMs, visión por computadora, NLP, grafos de conocimiento y RAG."
                    : "LLMs, computer vision, NLP, knowledge graphs and RAG."}
                </p>
              </div>
              <div className="min-expertise-card">
                <div className="min-expertise-icon">⚡</div>
                <h3>{lang === "es" ? "Automatización" : "Automation"}</h3>
                <p>
                  {lang === "es" 
                    ? "Workflows con n8n, integraciones y optimización de procesos."
                    : "Workflows with n8n, integrations and process optimization."}
                </p>
              </div>
              <div className="min-expertise-card">
                <div className="min-expertise-icon">☁️</div>
                <h3>{lang === "es" ? "Cloud & MLOps" : "Cloud & MLOps"}</h3>
                <p>
                  {lang === "es" 
                    ? "AWS, despliegue de modelos, pipelines de ML en producción."
                    : "AWS, model deployment, ML pipelines in production."}
                </p>
              </div>
              <div className="min-expertise-card">
                <div className="min-expertise-icon">🎯</div>
                <h3>{lang === "es" ? "Estrategia de Producto" : "Product Strategy"}</h3>
                <p>
                  {lang === "es" 
                    ? "Definición de MVP, roadmap técnico y priorización de features."
                    : "MVP definition, technical roadmap and feature prioritization."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="min-cta-section">
          <div className="min-container">
            <div className="min-cta-box">
              <h2>{lang === "es" ? "¿Listo para empezar?" : "Ready to get started?"}</h2>
              <p>
                {lang === "es" 
                  ? "Cuéntame sobre tu proyecto y encontremos la mejor forma de trabajar juntos."
                  : "Tell me about your project and let's find the best way to work together."}
              </p>
              <Link href="#contact" className="min-btn min-btn-primary">
                {lang === "es" ? "Contactar ahora" : "Contact now"}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <MinimalFooter dict={dict} />
    </div>
  );
}
