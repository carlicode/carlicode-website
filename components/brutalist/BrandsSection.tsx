import type { Dictionary } from "@/content/types";
import type { Brand } from "@/content/types";
import { SectionHeader } from "./SectionHeader";

export function BrandsSection({
  dict,
  brandsData,
}: {
  dict: Dictionary;
  brandsData: Brand[];
}) {
  return (
    <section className="br-section" id="brands">
      <SectionHeader
        num="/05"
        title={dict.brandsKicker}
        meta="TRUSTED · 2024+"
      />
      <div className="br-brands">
        {brandsData.map((b) => (
          <div className="br-brand-cell" key={b.name}>
            <div className="br-brand-mark">★ PARTNER</div>
            <div className="br-brand-bigname">{b.name}</div>
            <div className="br-brand-foot">
              <span>{b.role}</span>
              <span>{b.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
