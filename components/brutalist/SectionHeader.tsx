export function SectionHeader({
  num,
  title,
  meta,
}: {
  num: string;
  title: string;
  meta: string;
}) {
  return (
    <div className="br-section-head">
      <div className="br-sec-num">{num}</div>
      <div className="br-sec-title">{title}</div>
      <div className="br-sec-meta">{meta}</div>
    </div>
  );
}
