import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { BrutalistShell } from "./BrutalistShell";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { TopBar } from "./TopBar";

export function SubPageShell({
  lang,
  dict,
  pathSuffix,
  isoDate,
  children,
}: {
  lang: Locale;
  dict: Dictionary;
  pathSuffix: string;
  isoDate: string;
  children: ReactNode;
}) {
  return (
    <BrutalistShell>
      <TopBar lang={lang} pathSuffix={pathSuffix} />
      <SiteNav nav={dict.nav} lang={lang} />
      {children}
      <SiteFooter dict={dict} isoDate={isoDate} />
    </BrutalistShell>
  );
}
