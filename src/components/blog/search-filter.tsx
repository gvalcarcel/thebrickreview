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
      <div className="radar-card p-5 sm:p-6 space-y-5 bg-white">
        <div className="radar-search-container">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="search"
            placeholder="Buscar por nombre, número de set (ej: 10497) o temática..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="radar-search-input"
          />
        </div>

        {/* Selectores de Facetas */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 font-semibold text-secondary font-display">
            <Filter className="w-3.5 h-3.5 text-primary" />
            <span>Filtros:</span>
          </div>

          {/* Temática */}
          <div className="flex items-center gap-1">
            <span className="text-muted">Línea:</span>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="border border-light rounded-md px-2.5 py-1 bg-white font-medium text-main focus:outline-none focus:border-primary text-xs"
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
            <span className="text-muted">Dificultad:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="border border-light rounded-md px-2.5 py-1 bg-white font-medium text-main focus:outline-none focus:border-primary text-xs"
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
            <span className="text-muted">Catálogo:</span>
            <select
              value={retiredFilter}
              onChange={(e) => setRetiredFilter(e.target.value as "TODOS" | "ACTIVO" | "RETIRED")}
              className="border border-light rounded-md px-2.5 py-1 bg-white font-medium text-main focus:outline-none focus:border-primary text-xs"
            >
              <option value="TODOS">Todos</option>
              <option value="ACTIVO">En catálogo</option>
              <option value="RETIRED">Descatalogados</option>
            </select>
          </div>

          {/* Contador de resultados */}
          <div className="ml-auto">
            <span className="radar-metric-pill">
              {filteredPosts.length} {filteredPosts.length === 1 ? "análisis" : "análisis"}
            </span>
          </div>
        </div>
      </div>

      {/* Resultados de Artículos */}
      {filteredPosts.length === 0 ? (
        <div className="radar-card p-12 text-center text-secondary space-y-2 bg-white">
          <p className="font-display font-medium text-base text-main">
            No se encontraron análisis que coincidan con los criterios seleccionados.
          </p>
          <p className="text-xs text-muted">
            Prueba a limpiar la búsqueda o cambiar los filtros de línea o dificultad.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="radar-card p-6 justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <span className="radar-badge radar-badge--subtle">
                      {post.legoSet?.lineTheme} • #{post.legoSet?.setNumber}
                    </span>
                    {post.legoSet?.isRetired ? (
                      <span className="radar-badge radar-badge--eol">
                        <AlertTriangle className="w-2.5 h-2.5 inline" /> EOL / Retirado
                      </span>
                    ) : (
                      <span className="radar-badge radar-badge--history-low">
                        Activo
                      </span>
                    )}
                  </div>
                  <time dateTime={post.publishedAt ? post.publishedAt.toISOString() : undefined} className="font-mono text-[11px]">
                    {post.publishedAt
                      ? new Intl.DateTimeFormat("es-ES", { month: "short", year: "numeric" }).format(post.publishedAt)
                      : "2026"}
                  </time>
                </div>

                <h3 className="text-2xl font-bold font-display text-main leading-snug">
                  <Link href={`/resenas/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-light flex items-center justify-between text-xs text-secondary">
                <div className="flex items-center space-x-3">
                  <span className="radar-metric-pill flex items-center gap-1">
                    <Layers className="w-3 h-3 inline" /> {post.legoSet?.pieceCount.toLocaleString("es-ES")} pcs
                  </span>
                  <span className="text-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readingTimeMinutes} min
                  </span>
                </div>
                <Link
                  href={`/resenas/${post.slug}`}
                  className="font-bold text-main inline-flex items-center gap-1 hover:text-primary transition-colors font-display"
                >
                  Leer análisis <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}