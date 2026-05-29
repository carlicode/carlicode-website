import { getDictionary, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const dict = getDictionary(raw as Locale);
  const base = new URL(siteUrl);

  return {
    metadataBase: base,
    title: `Blog | ${dict.metaTitle}`,
    description: "Artículos sobre IA, programación y tecnología por Carli Code",
    alternates: {
      canonical: `${base.origin}/${raw}/blog`,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const dict = getDictionary(raw as Locale);

  // Placeholder blog posts - en el futuro puedes conectar con un CMS
  const blogPosts = [
    {
      id: "1",
      title: "Construyendo chatbots con OpenAI",
      excerpt: "Aprende a crear chatbots inteligentes usando la API de OpenAI y las mejores prácticas.",
      date: "2026-05-15",
      tags: ["IA", "OpenAI", "Chatbots"],
      slug: "chatbots-openai",
    },
    {
      id: "2",
      title: "Grafos de conocimiento para aplicaciones de IA",
      excerpt: "Cómo usar grafos de conocimiento para mejorar las capacidades de tu aplicación de IA.",
      date: "2026-04-20",
      tags: ["IA", "Knowledge Graphs", "Machine Learning"],
      slug: "grafos-conocimiento-ia",
    },
    {
      id: "3",
      title: "Mi experiencia como profesora en Platzi",
      excerpt: "Reflexiones sobre enseñar Python, LangChain y crear contenido educativo de calidad.",
      date: "2026-03-10",
      tags: ["Educación", "Python", "Platzi"],
      slug: "experiencia-platzi",
    },
  ];

  return (
    <div className="minimal-root">
      {/* Hero */}
      <section className="min-cv-hero">
        <div className="min-container">
          <h1 className="min-page-title">
            <span className="accent">Blog</span>
          </h1>
          <p className="min-page-subtitle">
            Artículos sobre inteligencia artificial, programación y mi experiencia en tech
          </p>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="min-preview-section">
        <div className="min-container">
          <div className="min-blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="min-blog-card">
                <div className="min-blog-meta">
                  <time className="min-blog-date">{post.date}</time>
                </div>
                <h2 className="min-blog-title">{post.title}</h2>
                <p className="min-blog-excerpt">{post.excerpt}</p>
                <div className="min-project-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="min-tag">{tag}</span>
                  ))}
                </div>
                <div className="min-blog-read-more">
                  <span className="min-preview-link">
                    Leer más →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon message */}
          <div className="min-cta-section" style={{ paddingTop: 0 }}>
            <div className="min-cta-box">
              <h2>📝 Próximamente más contenido</h2>
              <p>
                Estoy trabajando en nuevos artículos sobre IA, desarrollo y mi experiencia en la industria tech.
                Sígueme en mis redes para no perderte las actualizaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="min-footer">
        <div className="min-container">
          <div className="min-footer-content">
            <div>
              <div className="min-footer-logo">CARLI<span className="accent">CODE</span></div>
              <p className="min-footer-note">{dict.footerTagline}</p>
            </div>
            <p className="min-footer-copy">{dict.footerCopy}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
