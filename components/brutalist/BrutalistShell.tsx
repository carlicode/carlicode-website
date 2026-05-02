import type { ReactNode } from "react";
import "./brutalist.css";

export function BrutalistShell({ children }: { children: ReactNode }) {
  return (
    <div className="br-root">
      <div className="br-grid-bg" aria-hidden />
      <div className="br-content">{children}</div>
    </div>
  );
}
