import Link from "next/link";
import { ArrowRight, Layers, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Sección Hero Editorial */}
      <section className="border-b border-zinc-200 pb-12 space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
          Crítica y Documentación de Sets
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 font-serif leading-[1.15]">
          El cuaderno de análisis para constructores y coleccionistas.
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
          Reseñas técnicas sinceras, análisis del ratio precio/pieza, despiece y valoración del ensamblaje. Sin valoraciones comerciales agresivas.
        </p>
      </section>

      {/* Artículos y Reseñas Destacadas */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 font-serif">
            Últimos Cuadernos de Montaje
          </h2>
          <span className="text-xs text-zinc-400 font-medium">Archivo actualizado</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta de Reseña 1 */}
          <article className="border border-zinc-200 rounded-lg p-6 bg-white hover:border-zinc-300 transition-shadow hover:shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span className="font-semibold text-amber-700 uppercase tracking-wider">Icons • Set 10497</span>
                <time dateTime="2026-09-10">10 sep 2026</time>
              </div>

              <h3 className="text-2xl font-bold font-serif text-zinc-900 leading-snug">
                <Link href="/resenas/galaxy-explorer-10497" className="hover:text-amber-800 transition-colors">
                  Galaxy Explorer (10497): Nostalgia espacial y maestría moderna en técnicas SNOT
                </Link>
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed">
                Un homenaje milimétrico al clásico 928. Analizamos la rigidez del fuselaje, la ausencia deliberada de pegatinas y cómo resuelve la geometría en delta sin piezas obsoletas.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center gap-1"><Layers className="w-3.5 h-3.5" /> 1.254 piezas</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> ~4,5 h</span>
              </div>
              <Link href="/resenas/galaxy-explorer-10497" className="font-semibold text-zinc-900 inline-flex items-center gap-1 hover:text-amber-700">
                Leer reseña <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Tarjeta de Reseña 2 */}
          <article className="border border-zinc-200 rounded-lg p-6 bg-white hover:border-zinc-300 transition-shadow hover:shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span className="font-semibold text-amber-700 uppercase tracking-wider">Star Wars • Set 75192</span>
                <time dateTime="2026-09-08">08 sep 2026</time>
              </div>

              <h3 className="text-2xl font-bold font-serif text-zinc-900 leading-snug">
                <Link href="/resenas/millennium-falcon-ucs-75192" className="hover:text-amber-800 transition-colors">
                  Millennium Falcon UCS (75192): El monolito de la ingeniería de bloques
                </Link>
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed">
                ¿Sigue justificando su espacio y precio tras años en el mercado? Diseccionamos su chasis Technic interno, fragilidad en traslados y el valor real de sus 7.541 elementos.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center gap-1"><Layers className="w-3.5 h-3.5" /> 7.541 piezas</span>
                <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5" /> AFOL Expert</span>
              </div>
              <Link href="/resenas/millennium-falcon-ucs-75192" className="font-semibold text-zinc-900 inline-flex items-center gap-1 hover:text-amber-700">
                Leer reseña <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
