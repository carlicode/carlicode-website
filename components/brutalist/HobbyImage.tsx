"use client";

import Image from "next/image";
import { useState } from "react";

export function HobbyImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="br-hobby-ph" aria-label={alt}>
        <span className="br-hobby-ph-label">{label}</span>
      </div>
    );
  }

  return (
    <div className="br-hobby-img-wrap">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 767px) 50vw, 25vw"
        className="br-hobby-img"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
