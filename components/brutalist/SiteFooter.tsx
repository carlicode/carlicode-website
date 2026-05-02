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
    <>
      <div className="br-footer-big">
        CARLI<span className="ac">·</span>CODE
      </div>
      <div className="br-footer-bar">
        <div>© 2026</div>
        <div>{dict.footerNote}</div>
        <div className="br-socials">
          <a
            href={outbound.tiktok}
            target="_blank"
            rel="noopener noreferrer"
          >
            TIKTOK ↗
          </a>
          <a
            href={outbound.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>
          <a href={outbound.github} target="_blank" rel="noopener noreferrer">
            GITHUB ↗
          </a>
          <a
            href={outbound.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            YOUTUBE ↗
          </a>
        </div>
        <div style={{ textAlign: "right" }}>v2.0 · {isoDate}</div>
      </div>
    </>
  );
}
