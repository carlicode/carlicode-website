import { talks } from "../data/content";
import { talkVideos } from "../data/contentVideos";

export default function Talks() {
  const featuredVideos = talkVideos.filter((v) => v.featured);
  const otherVideos = talkVideos.filter((v) => !v.featured);

  return (
    <section id="talks" className="mb-24">
      <h2 className="text-3xl font-bold mb-6 text-pink-brand">Charlas & recursos</h2>

      {/* 🎬 Charlas embebidas destacadas */}
      <div className="space-y-10 mb-12">
        {featuredVideos.map((v) => (
          <div key={v.youtubeId}>
            <h3 className="text-xl font-semibold mb-2 text-green-brand">{v.title}</h3>
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-700">
              <iframe
                src={`https://www.youtube.com/embed/${v.youtubeId}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 🎧 Otras charlas como tarjetas */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {otherVideos.map((v) => (
          <a
            key={v.youtubeId}
            href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#222222] border border-gray-700 rounded-xl hover:shadow-neon shadow-pink-brand/50 transition"
          >
            <img
              src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
              alt={`Miniatura de ${v.title}`}
              className="rounded-md mb-2"
            />
            <p className="text-pink-brand font-semibold">{v.title}</p>
          </a>
        ))}
      </div>

      {/* 🎓 Charlas con slides y video (formato anterior) */}
      <div className="space-y-4">
        {talks.map((t) => (
          <div
            key={t.title}
            className="p-6 border border-gray-700 rounded-2xl flex flex-col md:flex-row md:items-center gap-4
                       bg-[#222222] hover:shadow-neon shadow-pink-brand/60 transition"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-pink-brand">
                {t.title}
              </h3>
              <p className="text-sm text-gray-400">
                {t.event} — {t.date}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={t.video}
                className="px-4 py-2 rounded-xl bg-pink-brand text-black font-semibold
                           hover:bg-green-brand hover:shadow-neon transition"
              >
                Video
              </a>
              <a
                href={t.slides}
                className="px-4 py-2 rounded-xl border border-pink-brand text-pink-brand
                           hover:bg-pink-brand hover:text-black transition"
              >
                Slides
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
