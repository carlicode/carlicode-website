import type { Dictionary } from "@/content/types";

export function MinimalFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="min-footer">
      <div className="min-container">
        <div className="min-footer-content">
          <div className="min-footer-brand">
            <span className="min-footer-logo">CARLI <span className="accent">CODE</span></span>
            <p className="min-footer-note">{dict.footerNote}</p>
          </div>
          <div className="min-footer-copy">
            © {new Date().getFullYear()} Carli Code. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
