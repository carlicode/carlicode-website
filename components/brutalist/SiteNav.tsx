import Link from "next/link";
import type { Dictionary } from "@/content/types";

export function SiteNav({ nav }: { nav: Dictionary["nav"] }) {
  return (
    <nav className="br-nav" aria-label="Primary">
      <Link href="#" className="br-logo">
        CARLI<span>·</span>CODE
      </Link>
      <Link href="#about">{nav.about}</Link>
      <Link href="#work">{nav.work}</Link>
      <Link href="#tiktok">{nav.tiktok}</Link>
      <Link href="#talks">{nav.talks}</Link>
      <Link href="#brands">{nav.brands}</Link>
      <div className="br-nav-spacer" />
      <Link href="#contact">
        {nav.contact} ↗
      </Link>
    </nav>
  );
}
