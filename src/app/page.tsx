import { getAllPosts } from "@/lib/posts";
import { SearchFilter } from "@/components/blog/search-filter";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Sección Hero Editorial */}
      <section className="border-b border-zinc-200 pb-10 space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
          Crítica y Documentación de Sets LEGO®
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 font-serif leading-[1.15]">
          El cuaderno de análisis para constructores y coleccionistas.
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
          Reseñas técnicas sinceras, análisis del ratio precio/pieza, despiece y valoración del ensamblaje. Sin valoraciones comerciales agresivas.
        </p>
      </section>

      {/* Buscador Interactivo y Catálogo de Reseñas */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 font-serif">
            Cuadernos de Montaje Disponibles
          </h2>
          <span className="text-xs text-zinc-400 font-medium">Catálogo completo ({posts.length} sets)</span>
        </div>

        <SearchFilter initialPosts={posts} />
      </section>
    </div>
  );
}