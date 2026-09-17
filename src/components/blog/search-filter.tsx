"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { PostWithSet } from "@/types";
import { Search, Filter, Layers, Clock, ArrowRight, AlertTriangle, Sparkles } from "lucide-react";

interface SearchFilterProps {
  initialPosts: PostWithSet[];
}

export function SearchFilter({ initialPosts }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("ALL");
  const [selectedDifficulty, setSelectedDifficulty] = useState("ALL");
  const [retiredFilter, setRetiredFilter] = useState<"ALL" | "ACTIVE" | "RETIRED">("ALL");

  const themes = useMemo(() => {
    const list = Array.from(new Set(initialPosts.map((p) => p.legoSet?.lineTheme).filter(Boolean)));
    return ["ALL", ...list];
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // 1. Text search
      const q = searchQuery.toLowerCase().trim();
      const matchesText =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.legoSet?.name.toLowerCase().includes(q) ||
        post.legoSet?.setNumber.includes(q);

      // 2. Theme filter
      const matchesTheme =
        selectedTheme === "ALL" ||
        selectedTheme === "TODOS" ||
        post.legoSet?.lineTheme.toLowerCase() === selectedTheme.toLowerCase();

      // 3. Difficulty filter
      const matchesDifficulty =
        selectedDifficulty === "ALL" ||
        selectedDifficulty === "TODOS" ||
        post.legoSet?.difficulty.toLowerCase() === selectedDifficulty.toLowerCase() ||
        (selectedDifficulty === "Intermediate" && post.legoSet?.difficulty === "Intermedio") ||
        (selectedDifficulty === "Advanced" && post.legoSet?.difficulty === "Avanzado") ||
        (selectedDifficulty === "Beginner" && post.legoSet?.difficulty === "Iniciación");

      // 4. Catalog retirement filter
      const matchesRetired =
        retiredFilter === "ALL" ||
        (retiredFilter === "RETIRED" && post.legoSet?.isRetired) ||
        (retiredFilter === "ACTIVE" && !post.legoSet?.isRetired);

      return matchesText && matchesTheme && matchesDifficulty && matchesRetired;
    });
  }, [initialPosts, searchQuery, selectedTheme, selectedDifficulty, retiredFilter]);

  return (
    <div className="space-y-8">
      {/* Search Bar & Faceted Filters */}
      <div className="radar-card p-5 sm:p-6 space-y-5 bg-white border border-light relative overflow-hidden">
        <div className="radar-search-container relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="search"
            placeholder="Search sets by name, set number (e.g. 10300, 75192), theme, or engineering keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="radar-search-input pl-10 w-full"
          />
        </div>

        {/* Facet Selectors */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-secondary font-display">
            <Filter className="w-3.5 h-3.5 text-primary" />
            <span>Filters:</span>
          </div>

          {/* Theme */}
          <div className="flex items-center gap-1.5">
            <span className="text-muted">Theme:</span>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="border border-light rounded-md px-2.5 py-1.5 bg-surface-subtle font-medium text-main focus:outline-none focus:border-primary text-xs"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t === "ALL" ? "All Themes" : t}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-1.5">
            <span className="text-muted">Difficulty:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="border border-light rounded-md px-2.5 py-1.5 bg-surface-subtle font-medium text-main focus:outline-none focus:border-primary text-xs"
            >
              <option value="ALL">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert / AFOL">Expert / AFOL</option>
            </select>
          </div>

          {/* Catalog Status */}
          <div className="flex items-center gap-1.5">
            <span className="text-muted">Catalog:</span>
            <select
              value={retiredFilter}
              onChange={(e) => setRetiredFilter(e.target.value as "ALL" | "ACTIVE" | "RETIRED")}
              className="border border-light rounded-md px-2.5 py-1.5 bg-surface-subtle font-medium text-main focus:outline-none focus:border-primary text-xs"
            >
              <option value="ALL">All Sets</option>
              <option value="ACTIVE">In Production</option>
              <option value="RETIRED">Retired / Vaulted</option>
            </select>
          </div>

          {/* Counter */}
          <div className="ml-auto">
            <span className="radar-metric-pill font-mono font-bold">
              {filteredPosts.length} {filteredPosts.length === 1 ? "review" : "reviews"}
            </span>
          </div>
        </div>
      </div>

      {/* Review Cards Grid */}
      {filteredPosts.length === 0 ? (
        <div className="radar-card p-12 text-center text-secondary space-y-3 bg-white border border-light">
          <p className="font-display font-semibold text-lg text-main">
            No technical reviews matched your search criteria.
          </p>
          <p className="text-xs text-muted max-w-md mx-auto">
            Try resetting your search term or broadening your difficulty and theme filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="radar-card p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-white border border-light relative group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <span className="radar-badge radar-badge--subtle font-mono">
                      {post.legoSet?.lineTheme} • #{post.legoSet?.setNumber}
                    </span>
                    {post.legoSet?.isRetired ? (
                      <span className="radar-badge radar-badge--eol">
                        <AlertTriangle className="w-2.5 h-2.5 inline mr-1" /> Retired
                      </span>
                    ) : (
                      <span className="radar-badge radar-badge--history-low">
                        In Production
                      </span>
                    )}
                  </div>
                  <time
                    dateTime={post.publishedAt ? post.publishedAt.toISOString() : undefined}
                    className="font-mono text-[11px] text-muted"
                  >
                    {post.publishedAt
                      ? new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(post.publishedAt)
                      : "2026"}
                  </time>
                </div>

                {post.legoSet?.imageUrl && (
                  <Link
                    href={`/reviews/${post.slug}`}
                    className="block relative aspect-[16/10] w-full rounded-lg bg-surface-subtle border border-light overflow-hidden p-3 bg-brick-studs group-hover:border-primary/40 transition-colors"
                  >
                    <img
                      src={post.legoSet.imageUrl}
                      alt={post.legoSet.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </Link>
                )}

                <h3 className="text-xl sm:text-2xl font-bold font-display text-main leading-snug group-hover:text-primary transition-colors">
                  <Link href={`/reviews/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-light flex items-center justify-between gap-2 text-xs text-secondary">
                <div className="flex items-center space-x-2.5 min-w-0">
                  <span className="radar-metric-pill flex items-center gap-1 font-mono">
                    <Layers className="w-3 h-3 text-primary" /> {post.legoSet?.pieceCount.toLocaleString("en-US")} pcs
                  </span>
                  <span className="hidden sm:inline-flex text-muted items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary" /> {post.readingTimeMinutes}m
                  </span>
                  {post.legoSet?.clutchScore && (
                    <span className="hidden lg:inline-flex items-center gap-1 text-accent-yellow font-mono font-bold text-[11px]">
                      <Sparkles className="w-3 h-3" /> {post.legoSet.clutchScore}/10
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {post.affiliateLinks && post.affiliateLinks.length > 0 && (
                    <a
                      href={`/ir/${post.affiliateLinks[0].retailerName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/${post.affiliateLinks[0].internalSlug}`}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="radar-button !py-1.5 !px-2.5 text-[11px] font-bold text-white !bg-[#ff5000] hover:!bg-[#e04500] transition-colors shadow-xs"
                      title="Direct AliExpress deals"
                    >
                      <span>Deals &rarr;</span>
                    </a>
                  )}
                  <Link
                    href={`/reviews/${post.slug}`}
                    className="font-bold text-main inline-flex items-center gap-1 hover:text-primary transition-colors font-display text-xs"
                  >
                    Read <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}