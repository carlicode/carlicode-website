import type { Dictionary } from "@/content/types";
import { outbound } from "@/lib/site";

export function SiteFooter({
  dict,
  isoDate,
}: {
  dict: Dictionary;
  isoDate: string;
}) {
  return (
    <footer className="br-footer">
      <div className="br-footer-brand">CARLI<span>·</span>CODE</div>
      <div className="br-footer-socials">
        <a href={outbound.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href={outbound.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={outbound.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={outbound.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
      <div className="br-footer-copy">© 2026 · {isoDate}</div>
    </footer>
  );
}
