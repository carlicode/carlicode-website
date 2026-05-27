import Link from "next/link";
import type {
  CvAchievement,
  CvCertification,
  CvEducation,
  CvJob,
  CvSkillGroup,
  Dictionary,
} from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { ExperienceSection } from "./ExperienceSection";
import { SubPageShell } from "./SubPageShell";

export function CvPage({
  lang,
  dict,
  jobs,
  skillGroups,
  education,
  achievements,
  certifications,
  isoDate,
}: {
  lang: Locale;
  dict: Dictionary;
  jobs: CvJob[];
  skillGroups: CvSkillGroup[];
  education: CvEducation[];
  achievements: CvAchievement[];
  certifications: CvCertification[];
  isoDate: string;
}) {
  const p = dict.cvPage;
  const base = `/${lang}`;

  return (
    <SubPageShell lang={lang} dict={dict} pathSuffix="/cv" isoDate={isoDate}>
      <header className="br-sub-hero">
        <Link href={base} className="br-sub-back">
          {p.backHome}
        </Link>
        <div className="br-sub-kicker">{p.kicker}</div>
        <h1 className="br-sub-title">{p.title}</h1>
      </header>
      <ExperienceSection
        lang={lang}
        dict={dict}
        jobs={jobs}
        skillGroups={skillGroups}
        education={education}
        achievements={achievements}
        certifications={certifications}
        sectionHeaderNum="/01"
      />
    </SubPageShell>
  );
}
