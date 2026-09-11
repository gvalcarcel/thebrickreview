import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByCategory } from "@/lib/posts";
import { ArrowRight, Layers, Clock } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ categoria: string }>;
}

export async function generateStaticParams() {
  return [
    { categoria: "icons" },
    { categoria: "star-wars" },
    { categoria: "technic" },
    { categoria: "ideas" },
  ];
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const readableName = categoria.replace(/-/g, " ").toUpperCase();

  return {
    title: `Línea ${readableName} | The Brick Review`,
    description: `Archivo de análisis críticos, fichas de montaje y comparativas técnicas para la serie LEGO® ${readableName}.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoria } = await params;
  const posts = await getPostsByCategory(categoria);
  const formattedCategory = categoria.replace(/-/g, " ");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      <header className="border-b border-zinc-200 pb-8 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
          Colección Temática
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-zinc-950 capitalize">
          Línea {formattedCategory}
        </h1>
        <p className="text-zinc-600 text-sm max-w-xl">
          Explora los cuadernos de montaje, análisis de despiece y experiencia de construcción dedicados a los modelos de {formattedCategory}.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="border border-dashed border-zinc-200 rounded-lg p-12 text-center text-zinc-500 space-y-3">
          <p className="font-serif italic">No hay reseñas publicadas todavía en este archivo temático.</p>
          <Link href="/" className="text-xs font-semibold text-amber-700 hover:underline">
            ← Volver a la portada principal
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-zinc-200 rounded-lg p-6 bg-white hover:border-zinc-300 transition-shadow hover:shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span className="font-semibold text-amber-700 uppercase tracking-wider">
                    {post.legoSet?.lineTheme} • Set #{post.legoSet?.setNumber}
                  </span>
                  <time dateTime={post.publishedAt ? post.publishedAt.toISOString() : undefined}>
                    {post.publishedAt
                      ? new Intl.DateTimeFormat("es-ES", { month: "short", year: "numeric" }).format(post.publishedAt)
                      : "2026"}
                  </time>
                </div>

                <h2 className="text-2xl font-bold font-serif text-zinc-900 leading-snug">
                  <Link href={`/resenas/${post.slug}`} className="hover:text-amber-800 transition-colors">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" /> {post.legoSet?.pieceCount.toLocaleString("es-ES")} piezas
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readingTimeMinutes} min
                  </span>
                </div>
                <Link
                  href={`/resenas/${post.slug}`}
                  className="font-semibold text-zinc-900 inline-flex items-center gap-1 hover:text-amber-700"
                >
                  Leer análisis <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}