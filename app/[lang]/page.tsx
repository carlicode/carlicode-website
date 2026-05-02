import { BrutalistLanding } from "@/components/brutalist/BrutalistLanding";
import {
  brands,
  cvJobs,
  getDictionary,
  projects,
  talks,
  tiktoks,
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
  const base = new URL(siteUrl);
  return {
    metadataBase: base,
    title: dict.metaTitle,
    description: dict.metaDescription,
    alternates: {
      canonical: `${base.origin}/${raw}`,
      languages: {
        es: `${base.origin}/es`,
        en: `${base.origin}/en`,
        "x-default": `${base.origin}/${defaultLocale}`,
      },
    },
    openGraph: {
      title: dict.metaTitle,
      description: dict.metaDescription,
      locale: raw,
      type: "website",
    },
  };
}

export default async function LangHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!isLocale(raw)) notFound();
  const lang = raw;
  const dict = getDictionary(lang);
  const isoDate = new Date().toISOString().slice(0, 10);

  return (
    <BrutalistLanding
      lang={lang}
      dict={dict}
      projects={projects}
      tiktoks={tiktoks}
      talks={talks}
      brands={brands}
      cvJobs={cvJobs}
      isoDate={isoDate}
    />
  );
}
