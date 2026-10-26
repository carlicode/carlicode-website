import { useEffect } from "react";

// index.html trae la descripción por defecto (la leen los previews de links que no ejecutan JS).
// Cada página la reemplaza en vez de agregar una segunda etiqueta; sin descripción vuelve a la de por defecto.
const defaultDescription = typeof document === "undefined" ? "" : document.querySelector('meta[name="description"]')?.content ?? "";

// React 19 lleva <title> y <meta name="robots"> al <head> por sí solo.
export default function Seo({ title, description, noindex = false }) {
  useEffect(() => {
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.content = description || defaultDescription;
  }, [description]);
  return <>
    <title>{title}</title>
    {noindex && <meta name="robots" content="noindex, nofollow" />}
  </>;
}
