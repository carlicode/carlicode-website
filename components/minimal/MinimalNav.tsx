"use client";

import type { Dictionary } from "@/content/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function MinimalNav({ dict }: { dict: Dictionary }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const lang = pathname?.split("/")[1] || "es";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`min-nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="min-container">
          <div className="min-nav-content">
            <Link href={`/${lang}`} className="min-nav-logo">
              CARLI <span className="accent">CODE</span>
            </Link>
            
            <div className="min-nav-links">
              <Link href={`/${lang}#about`}>{dict.nav.about}</Link>
              <Link href={`/${lang}#work`}>{dict.nav.work}</Link>
              <Link href={`/${lang}/content`}>Content</Link>
              <Link href={`/${lang}/cv`}>CV</Link>
              <Link href={`/${lang}/asesorias`}>
                {lang === "es" ? "Asesorías" : "Consulting"}
              </Link>
              <Link href={`/${lang}#contact`}>{dict.nav.contact}</Link>
            </div>
          </div>
        </div>
      </nav>
      <ThemeToggle />
    </>
  );
}
