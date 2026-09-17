import type { TocItem } from "@/lib/markdown";
import { ListOrdered } from "lucide-react";

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="radar-card border border-light bg-surface-subtle/70 rounded-xl p-5 my-8">
      <div className="flex items-center gap-2 font-bold text-sm tracking-tight text-main mb-3">
        <ListOrdered className="w-4 h-4 text-primary" />
        <span className="font-display uppercase tracking-wider text-xs">Article Outline &amp; Navigation</span>
      </div>

      <ul className="space-y-2 text-sm text-secondary">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "pl-4 text-xs text-muted" : "font-medium"}
          >
            <a
              href={`#${item.id}`}
              className="hover:text-primary transition-colors hover:underline flex items-center gap-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}