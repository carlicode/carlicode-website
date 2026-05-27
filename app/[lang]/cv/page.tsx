import { CvPage } from "@/components/brutalist/CvPage";
import {
  cvAchievements,
  cvCertifications,
  cvEducation,
  cvJobs,
  cvSkillGroups,
  getDictionary,
} from "@/content";
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
  const dict = getDictionary(raw);
  const p = dict.cvPage;
  const base = new URL(siteUrl);
  return {
    title: p.metaTitle,
    description: p.metaDescription,
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

export default async function CvRoute({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);
  const isoDate = new Date().toISOString().slice(0, 10);

  return (
    <CvPage
      lang={raw}
      dict={dict}
      jobs={cvJobs}
      skillGroups={cvSkillGroups}
      education={cvEducation}
      achievements={cvAchievements}
      certifications={cvCertifications}
      isoDate={isoDate}
    />
  );
}
