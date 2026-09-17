import { Clock, Calendar, Layers, Bookmark } from "lucide-react";
import Link from "next/link";

interface ArticleHeaderProps {
  title: string;
  excerpt: string;
  lineTheme: string;
  setNumber?: string;
  publishedAt?: Date | null;
  readingTimeMinutes: number;
  pieceCount?: number;
}

export function ArticleHeader({
  title,
  excerpt,
  lineTheme,
  setNumber,
  publishedAt,
  readingTimeMinutes,
  pieceCount,
}: ArticleHeaderProps) {
  const formattedDate = publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(publishedAt)
    : "September 11, 2026";

  const categorySlug = lineTheme.toLowerCase().replace(/\s+/g, "-");

  return (
    <header className="border-b border-light pb-8 mb-8 space-y-4">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <Link
          href={`/categories/${categorySlug}`}
          className="uppercase tracking-widest text-primary bg-primary-subtle border border-primary-border px-3 py-1 rounded-md hover:bg-red-100 transition-colors font-mono font-bold"
        >
          {lineTheme}
        </Link>
        {setNumber && (
          <span className="text-secondary bg-surface-subtle border border-light px-2.5 py-1 rounded-md font-mono text-xs">
            Model #{setNumber}
          </span>
        )}
        <span className="radar-badge radar-badge--subtle inline-flex items-center gap-1">
          <Bookmark className="w-3 h-3 text-primary" /> Technical Review
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-main font-display leading-[1.15]">
        {title}
      </h1>

      <p className="text-lg sm:text-xl text-secondary leading-relaxed font-sans">
        {excerpt}
      </p>

      <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <time dateTime={publishedAt ? publishedAt.toISOString() : undefined}>
            {formattedDate}
          </time>
        </div>

        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-primary" />
          <span>{readingTimeMinutes} min analytical read</span>
        </div>

        {pieceCount && (
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span>{pieceCount.toLocaleString("en-US")} pieces indexed</span>
          </div>
        )}
      </div>
    </header>
  );
}