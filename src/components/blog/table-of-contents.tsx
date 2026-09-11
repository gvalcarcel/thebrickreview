import type { TocItem } from "@/lib/markdown";
import { List } from "lucide-react";

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Tabla de contenidos" className="border border-zinc-200 bg-white/70 rounded-lg p-5 my-8">
      <div className="flex items-center gap-2 font-bold text-sm tracking-tight text-zinc-900 mb-3">
        <List className="w-4 h-4 text-amber-700" />
        <span>Índice del Análisis</span>
      </div>

      <ul className="space-y-2 text-sm text-zinc-600">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "pl-4 text-xs text-zinc-500" : "font-medium"}
          >
            <a
              href={`#${item.id}`}
              className="hover:text-amber-800 transition-colors hover:underline"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}