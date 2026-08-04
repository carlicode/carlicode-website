import type { Locale } from "@/lib/i18n";
import type { Dictionary, Project } from "@/content/types";
import { AboutSection } from "./AboutSection";
import { BrutalistShell } from "./BrutalistShell";
import { ContactSection } from "./ContactSection";
import { Hero } from "./Hero";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { TopBar } from "./TopBar";
import { WorkGrid } from "./WorkGrid";

export function BrutalistLanding({
  lang,
  dict,
  projects,
  isoDate,
}: {
  lang: Locale;
  dict: Dictionary;
  projects: Project[];
  isoDate: string;
}) {
  return (
    <BrutalistShell>
      <TopBar />
      <SiteNav nav={dict.nav} lang={lang} />
      <Hero lang={lang} dict={dict} />
      <AboutSection lang={lang} dict={dict} />
      <WorkGrid lang={lang} dict={dict} projects={projects} />
      <ContactSection lang={lang} dict={dict} />
      <SiteFooter dict={dict} isoDate={isoDate} />
    </BrutalistShell>
  );
}
