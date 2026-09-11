"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { PostWithSet } from "@/types";
import { Search, Filter, Layers, Clock, ArrowRight, AlertTriangle } from "lucide-react";

interface SearchFilterProps {
  initialPosts: PostWithSet[];
}

export function SearchFilter({ initialPosts }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("TODOS");
  const [selectedDifficulty, setSelectedDifficulty] = useState("TODOS");
  const [retiredFilter, setRetiredFilter] = useState<"TODOS" | "ACTIVO" | "RETIRED">("TODOS");

  const themes = useMemo(() => {
    const list = Array.from(new Set(initialPosts.map((p) => p.legoSet?.lineTheme).filter(Boolean)));
    return ["TODOS", ...list];
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // 1. Filtro de búsqueda por texto
      const q = searchQuery.toLowerCase().trim();
      const matchesText =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.legoSet?.name.toLowerCase().includes(q) ||
        post.legoSet?.setNumber.includes(q);

      // 2. Filtro por temática
      const matchesTheme =
        selectedTheme === "TODOS" || post.legoSet?.lineTheme === selectedTheme;

      // 3. Filtro por dificultad
      const matchesDifficulty =
        selectedDifficulty === "TODOS" || post.legoSet?.difficulty === selectedDifficulty;

      // 4. Filtro por descatalogación
      const matchesRetired =
        retiredFilter === "TODOS" ||
        (retiredFilter === "RETIRED" && post.legoSet?.isRetired) ||
        (retiredFilter === "ACTIVO" && !post.legoSet?.isRetired);

      return matchesText && matchesTheme && matchesDifficulty && matchesRetired;
    });
  }, [initialPosts, searchQuery, selectedTheme, selectedDifficulty, retiredFilter]);

  return (
    <div className="space-y-8">
      {/* Barra de Búsqueda y Filtros Facetados */}
      <div className="border border-zinc-200 bg-white p-5 sm:p-6 rounded-xl shadow-sm space-y-5">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="search"
            placeholder="Buscar por nombre, número de set (ej: 10497) o temática..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all placeholder:text-zinc-400 bg-zinc-50/50"
          />
        </div>

        {/* Selectores de Facetas */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 font-semibold text-zinc-500">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtros:</span>
          </div>

          {/* Temática */}
          <div className="flex items-center gap-1">
            <span className="text-zinc-400">Línea:</span>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="border border-zinc-200 rounded px-2 py-1 bg-white font-medium text-zinc-800 focus:outline-none focus:ring-1 focus:ring-amber-600"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Dificultad */}
          <div className="flex items-center gap-1">
            <span className="text-zinc-400">Dificultad:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="border border-zinc-200 rounded px-2 py-1 bg-white font-medium text-zinc-800 focus:outline-none focus:ring-1 focus:ring-amber-600"
            >
              <option value="TODOS">Todas</option>
              <option value="Iniciación">Iniciación</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
              <option value="Experto / AFOL">Experto / AFOL</option>
            </select>
          </div>

          {/* Estado de Catálogo */}
          <div className="flex items-center gap-1">
            <span className="text-zinc-400">Catálogo:</span>
            <select
              value={retiredFilter}
              onChange={(e) => setRetiredFilter(e.target.value as "TODOS" | "ACTIVO" | "RETIRED")}
              className="border border-zinc-200 rounded px-2 py-1 bg-white font-medium text-zinc-800 focus:outline-none focus:ring-1 focus:ring-amber-600"
            >
              <option value="TODOS">Todos</option>
              <option value="ACTIVO">En catálogo</option>
              <option value="RETIRED">Descatalogados</option>
            </select>
          </div>

          {/* Contador de resultados */}
          <div className="ml-auto text-xs text-zinc-400 font-medium">
            {filteredPosts.length} {filteredPosts.length === 1 ? "análisis encontrado" : "análisis encontrados"}
          </div>
        </div>
      </div>

      {/* Resultados de Artículos */}
      {filteredPosts.length === 0 ? (
        <div className="border border-dashed border-zinc-200 rounded-xl p-12 text-center text-zinc-500 space-y-2 bg-white">
          <p className="font-serif italic text-base text-zinc-700">
            No se encontraron análisis que coincidan con los criterios seleccionados.
          </p>
          <p className="text-xs text-zinc-400">
            Prueba a limpiar la búsqueda o cambiar los filtros de línea o dificultad.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="border border-zinc-200 rounded-xl p-6 bg-white hover:border-zinc-300 transition-all hover:shadow-md flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-amber-700 uppercase tracking-wider">
                      {post.legoSet?.lineTheme} • Set #{post.legoSet?.setNumber}
                    </span>
                    {post.legoSet?.isRetired && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded font-medium">
                        <AlertTriangle className="w-2.5 h-2.5" /> Retirado
                      </span>
                    )}
                  </div>
                  <time dateTime={post.publishedAt ? post.publishedAt.toISOString() : undefined}>
                    {post.publishedAt
                      ? new Intl.DateTimeFormat("es-ES", { month: "short", year: "numeric" }).format(post.publishedAt)
                      : "2026"}
                  </time>
                </div>

                <h3 className="text-2xl font-bold font-serif text-zinc-900 leading-snug">
                  <Link href={`/resenas/${post.slug}`} className="hover:text-amber-800 transition-colors">
                    {post.title}
                  </Link>
                </h3>

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