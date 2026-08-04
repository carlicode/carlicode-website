import { CvPage } from "@/components/brutalist/CvPage";
import { getDictionary } from "@/content/dictionaries";
import { cvJobs, cvSkillGroups, cvEducation, cvAchievements, cvCertifications } from "@/content";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function generateStaticParams(): { lang: Locale }[] {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  if (!isLocale(raw)) notFound();

  const isSpanish = raw === "es";
  const title = isSpanish ? "CV — Carli Code" : "CV — Carli Code";
  const description = isSpanish
    ? "Curriculum Vitae de Carla Florida — AI Engineer, Speaker y Creadora de Contenido."
    : "Curriculum Vitae of Carla Florida — AI Engineer, Speaker and Content Creator.";

  const base = new URL(siteUrl);
  return {
    title,
    description,
    alternates: {
      canonical: `${base.origin}/${raw}/cv`,
      languages: {
        es: `${base.origin}/es/cv`,
        en: `${base.origin}/en/cv`,
        "x-default": `${base.origin}/${defaultLocale}/cv`,
      },
    },
  };
}

export default async function CVRoute({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!isLocale(raw)) notFound();
  const lang = raw;

  const dict = await getDictionary(lang);
  const isoDate = new Date().toISOString().slice(0, 10);

  return (
    <CvPage
      lang={lang}
      dict={dict}
      isoDate={isoDate}
      cvJobs={cvJobs}
      cvSkillGroups={cvSkillGroups}
      cvEducation={cvEducation}
      cvAchievements={cvAchievements}
      cvCertifications={cvCertifications}
    />
  );
}
