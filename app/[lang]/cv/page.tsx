import { MinimalNav } from "@/components/minimal/MinimalNav";
import { MinimalExperience } from "@/components/minimal/MinimalExperience";
import { MinimalFooter } from "@/components/minimal/MinimalFooter";
import { getDictionary, cvJobs } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    title: `CV - ${dict.metaTitle}`,
    description: "Experiencia profesional completa de Carli Code",
  };
}

export default async function CVPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!isLocale(raw)) notFound();
  const lang = raw;
  const dict = getDictionary(lang);

  return (
    <div className="minimal-root">
      <MinimalNav dict={dict} />
      <div style={{ paddingTop: "80px" }}>
        <section className="min-cv-hero">
          <div className="min-container">
            <h1 className="min-page-title">
              {lang === "es" ? "Experiencia Profesional" : "Professional Experience"}
            </h1>
            <p className="min-page-subtitle">
              {lang === "es" 
                ? "Mi trayectoria construyendo IA, creando contenido y liderando comunidades tech."
                : "My journey building AI, creating content and leading tech communities."}
            </p>
          </div>
        </section>
        <MinimalExperience lang={lang} dict={dict} jobs={cvJobs} />
      </div>
      <MinimalFooter dict={dict} />
    </div>
  );
}
