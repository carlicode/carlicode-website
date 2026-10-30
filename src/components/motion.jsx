import { createElement, useEffect, useRef, useState } from "react";
import { reducedMotion, useInView } from "./motionHooks";

// Envuelve algo que "se construye" al aparecer: el CSS anima a partir de data-built.
export function Build({ as = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, seen] = useInView(0.18);
  return createElement(as, { ref, className: `build ${className}`, "data-built": seen, style: { "--d": `${delay}ms` }, ...rest }, children);
}

const formats = {
  full: (n) => Math.round(n).toLocaleString("en-US"),
  k1: (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(Math.round(n))),
  k2: (n) => (n >= 1000 ? `${(n / 1000).toFixed(2)}K` : String(Math.round(n))),
};

// Número que sube desde 0 hasta `to` cuando entra en pantalla.
export function CountUp({ to, fmt = "full", duration = 1500 }) {
  const [ref, seen] = useInView(0.4);
  const [value, setValue] = useState(reducedMotion() ? to : 0);
  useEffect(() => {
    if (!seen) return undefined;
    if (reducedMotion()) { setValue(to); return undefined; }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(to * (1 - (1 - t) ** 3));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, to, duration]);
  return <span ref={ref}>{formats[fmt](value)}</span>;
}

// Barra fina arriba que se llena a medida que se baja por la página.
export function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, []);
  return <div className="mk-progress" aria-hidden="true"><i ref={bar} /></div>;
}
