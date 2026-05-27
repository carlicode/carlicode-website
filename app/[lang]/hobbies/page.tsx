import { HobbiesPage } from "@/components/brutalist/HobbiesPage";
import { getDictionary, hobbyPhotos } from "@/content";
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
  const p = dict.hobbiesPage;
  const base = new URL(siteUrl);
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: {
      canonical: `${base.origin}/${raw}/hobbies`,
      languages: {
        es: `${base.origin}/es/hobbies`,
        en: `${base.origin}/en/hobbies`,
        "x-default": `${base.origin}/${defaultLocale}/hobbies`,
      },
    },
  };
}

export default async function HobbiesRoute({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);
  const isoDate = new Date().toISOString().slice(0, 10);

  return (
    <HobbiesPage lang={raw} dict={dict} photos={hobbyPhotos} isoDate={isoDate} />
  );
}
