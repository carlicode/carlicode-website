import { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { talks } from "../data/content";
import { ChevronLeft, ChevronRight } from "lucide-react"; // o usa íconos propios

export default function Comunidad() {
  const featured = talks.find((t) => t.featured);
  const others = talks.filter((t) => !t.featured);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Auto scroll cada 4s
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="comunidad" className="mb-24">
      <h2 className="text-3xl font-bold mb-6 text-pink-brand">Comunidad</h2>

      {/* 🎥 Video destacado */}
      {featured && (
        <div className="mb-12">
          <iframe
            src={`https://www.youtube.com/embed/${featured.youtubeId}`}
            title={featured.title}
            className="w-full h-64 md:h-96 rounded-xl"
            allowFullScreen
          />
          <h3 className="mt-4 text-xl font-semibold">{featured.title}</h3>
        </div>
      )}

      {/* 🎠 Carrusel */}
      <div className="relative">
        {/* Botones */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-pink-brand p-2 rounded-full"
        >
          <ChevronLeft className="text-white w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-pink-brand p-2 rounded-full"
        >
          <ChevronRight className="text-white w-5 h-5" />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {others.map((talk) => (
              <div
                key={talk.title}
                className="min-w-[280px] flex-shrink-0 p-2"
              >
                <div className="border border-gray-700 rounded-xl overflow-hidden hover:shadow-neon transition">
                  <iframe
                    src={`https://www.youtube.com/embed/${talk.youtubeId}`}
                    title={talk.title}
                    className="w-full h-48 rounded-t-xl"
                    allowFullScreen
                  />
                  <div className="p-3 bg-[#1A1A1A]">
                    <h4 className="text-sm font-semibold">{talk.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
