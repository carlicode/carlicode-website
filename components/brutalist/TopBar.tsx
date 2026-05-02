import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function TopBar({ lang }: { lang: Locale }) {
  const now = new Date().toISOString().slice(0, 10);
  const remote = lang === "es" ? "BOGOTÁ → REMOTO" : "BOGOTÁ → REMOTE";

  return (
    <div className="br-topbar">
      <div className="br-status">SYS · ONLINE</div>
      <div className="br-stamp">
        <span>CARLI CODE / PORTFOLIO V2</span>
        <span>{remote}</span>
        <span>{now}</span>
      </div>
      <div className="br-lang">
        <Link href="/es" className={lang === "es" ? "active" : ""}>
          ES
        </Link>
        <Link href="/en" className={lang === "en" ? "active" : ""}>
          EN
        </Link>
      </div>
    </div>
  );
}
