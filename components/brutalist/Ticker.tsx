export function Ticker() {
  const line =
    "AI engineer · AWS · n8n · Content · Speaking · Latam · AI engineer · AWS · n8n · Content · Speaking · Latam · ";
  return (
    <div className="br-ticker" aria-hidden>
      <div className="br-ticker-track">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}
