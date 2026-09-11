import { Clock, Calendar, Layers, Tag } from "lucide-react";
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
    ? new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(publishedAt)
    : "11 de septiembre de 2026";

  return (
    <header className="border-b border-zinc-200 pb-8 mb-8 space-y-4">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <Link
          href={`/categorias/${lineTheme.toLowerCase().replace(/\s+/g, "-")}`}
          className="uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded hover:bg-amber-100 transition-colors"
        >
          {lineTheme}
        </Link>
        {setNumber && (
          <span className="text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
            Set Oficial #{setNumber}
          </span>
        )}
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 font-serif leading-[1.15]">
        {title}
      </h1>

      <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-serif italic">
        {excerpt}
      </p>

      <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <time dateTime={publishedAt ? publishedAt.toISOString() : undefined}>
            {formattedDate}
          </time>
        </div>

        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{readingTimeMinutes} min de lectura analítica</span>
        </div>

        {pieceCount && (
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>{pieceCount.toLocaleString("es-ES")} piezas</span>
          </div>
        )}
      </div>
    </header>
  );
}