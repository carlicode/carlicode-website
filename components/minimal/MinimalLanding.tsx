import type { Locale } from "@/lib/i18n";
import type { Dictionary, Project, TikTokCard, CvJob } from "@/content/types";
import { MinimalNav } from "./MinimalNav";
import { MinimalHero } from "./MinimalHero";
import { MinimalAbout } from "./MinimalAbout";
import { MinimalProjects } from "./MinimalProjects";
import { MinimalPreviewContent } from "./MinimalPreviewContent";
import { MinimalPreviewCV } from "./MinimalPreviewCV";
import { MinimalPreviewAsesorias } from "./MinimalPreviewAsesorias";
import { MinimalContact } from "./MinimalContact";
import { MinimalFooter } from "./MinimalFooter";
import "./minimal.css";

export function MinimalLanding({
  lang,
  dict,
  projects,
  tiktoks,
  cvJobs,
}: {
  lang: Locale;
  dict: Dictionary;
  projects: Project[];
  tiktoks: TikTokCard[];
  cvJobs: CvJob[];
}) {
  return (
    <div className="minimal-root">
      <MinimalNav dict={dict} />
      <MinimalHero lang={lang} dict={dict} />
      <MinimalAbout lang={lang} dict={dict} />
      <MinimalProjects lang={lang} dict={dict} projects={projects} />
      <MinimalPreviewContent lang={lang} dict={dict} videos={tiktoks} />
      <MinimalPreviewCV lang={lang} dict={dict} jobs={cvJobs} />
      <MinimalPreviewAsesorias lang={lang} dict={dict} />
      <MinimalContact lang={lang} dict={dict} />
      <MinimalFooter dict={dict} />
    </div>
  );
}
