import type { Locale } from "@/lib/i18n";
import type {
  Brand,
  CvJob,
  Dictionary,
  Project,
  Talk,
  TikTokCard,
} from "@/content/types";
import { AboutSection } from "./AboutSection";
import { BrandsSection } from "./BrandsSection";
import { BrutalistShell } from "./BrutalistShell";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { Hero } from "./Hero";
import { NewsletterSection } from "./NewsletterSection";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { TalksTable } from "./TalksTable";
import { TikTokSection } from "./TikTokSection";
import { Ticker } from "./Ticker";
import { WorkGrid } from "./WorkGrid";

export function BrutalistLanding({
  lang,
  dict,
  projects,
  tiktoks,
  talks,
  brands,
  cvJobs,
  isoDate,
}: {
  lang: Locale;
  dict: Dictionary;
  projects: Project[];
  tiktoks: TikTokCard[];
  talks: Talk[];
  brands: Brand[];
  cvJobs: CvJob[];
  isoDate: string;
}) {
  return (
    <BrutalistShell>
      <SiteNav nav={dict.nav} />
      <Hero lang={lang} dict={dict} />
      <Ticker />
      <AboutSection lang={lang} dict={dict} />
      <WorkGrid lang={lang} dict={dict} projects={projects} />
      <TikTokSection lang={lang} dict={dict} videos={tiktoks} />
      <TalksTable lang={lang} dict={dict} talksData={talks} />
      <BrandsSection dict={dict} brandsData={brands} />
      <ExperienceSection lang={lang} dict={dict} jobs={cvJobs} />
      <NewsletterSection lang={lang} dict={dict} />
      <ContactSection lang={lang} dict={dict} />
      <SiteFooter dict={dict} isoDate={isoDate} />
    </BrutalistShell>
  );
}
