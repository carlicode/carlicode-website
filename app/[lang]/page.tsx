import { BrutalistLanding } from "@/components/brutalist/BrutalistLanding";
import { getDictionary } from "@/content/dictionaries";
import { projects } from "@/content";
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
  const title = "Carli Code - AI Engineer, Speaker & Content Creator";
  const description = isSpanish
    ? "AI Engineer especializada en sistemas agénticos, automatización y LLMs. Speaker y creadora de contenido tech para 145K+ personas."
    : "AI Engineer specialized in agentic systems, automation and LLMs. Tech speaker and content creator for 145K+ people.";

  const base = new URL(siteUrl);
  return {
    metadataBase: base,
    title,
    description,
    alternates: {
      canonical: `${base.origin}/${raw}`,
      languages: {
        es: `${base.origin}/es`,
        en: `${base.origin}/en`,
        "x-default": `${base.origin}/${defaultLocale}`,
      },
    },
    openGraph: {
      title,
      description,
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

  const dict = await getDictionary(lang);
  const isoDate = new Date().toISOString().slice(0, 10);

  return (
    <BrutalistLanding
      lang={lang}
      dict={dict}
      projects={projects}
      isoDate={isoDate}
    />
  );
}
