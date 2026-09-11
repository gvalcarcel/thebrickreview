import { getAllPosts } from "@/lib/posts";
import { SearchFilter } from "@/components/blog/search-filter";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Sección Hero Editorial */}
      <section className="border-b border-light pb-10 space-y-4">
        <div className="flex items-center gap-2">
          <span className="radar-badge radar-badge--subtle border border-light">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            BrickRadar — Precision Tracker
          </span>
          <span className="radar-badge radar-badge--drop">
            Análisis & Deals
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-main font-display leading-[1.12]">
          El cuaderno de análisis técnico y comparador para coleccionistas LEGO®.
        </h1>
        <p className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
          Reseñas técnicas sinceras, análisis del ratio precio/pieza, despiece y seguimiento de stock sin estridencias comerciales.
        </p>
      </section>

      {/* Buscador Interactivo y Catálogo de Reseñas */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-main font-display">
            Cuadernos de Montaje Disponibles
          </h2>
          <span className="text-xs text-muted font-medium font-mono">Catálogo ({posts.length} sets indexados)</span>
        </div>

        <SearchFilter initialPosts={posts} />
      </section>
    </div>
  );
}