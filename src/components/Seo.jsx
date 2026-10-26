// React 19 lleva <title> y <meta> al <head> por sí solo.
export default function Seo({ title, description, noindex = false }) {
  return <>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {noindex && <meta name="robots" content="noindex, nofollow" />}
  </>;
}
