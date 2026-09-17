import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByCategory } from "@/lib/posts";
import { ArrowRight, Layers, Clock, AlertTriangle, Compass } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: "icons" },
    { category: "star-wars" },
    { category: "technic" },
    { category: "ideas" },
    { category: "disney" },
    { category: "dc" },
  ];
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const readableName = category.replace(/-/g, " ").toUpperCase();

  return {
    title: `${readableName} Theme Series | The Brick Review`,
    description: `Independent technical reviews, clutch friction audits, and alternative sourcing for ${readableName} architecture builds.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const posts = await getPostsByCategory(category);
  const formattedCategory = category.replace(/-/g, " ");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      <header className="radar-card p-6 sm:p-8 bg-white border border-light space-y-3 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="radar-badge radar-badge--subtle uppercase tracking-widest font-mono font-bold inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-primary" /> Thematic Collection
          </span>
          <span className="radar-badge radar-badge--history-low font-mono">
            {posts.length} {posts.length === 1 ? "build indexed" : "builds indexed"}
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-main capitalize">
          {formattedCategory} Architecture Series
        </h1>
        <p className="text-secondary text-sm sm:text-base max-w-2xl leading-relaxed">
          Comprehensive disassembly notebooks, structural stress tests, and verified AliExpress alternative sourcing logs for {formattedCategory} enthusiasts.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="radar-card p-12 text-center text-secondary space-y-3 bg-white border border-light">
          <p className="font-display font-semibold text-lg text-main">
            No technical reviews published yet in this collection.
          </p>
          <Link href="/" className="text-xs font-bold text-primary hover:underline">
            &larr; Return to main catalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="radar-card p-6 sm:p-7 bg-white border border-light flex flex-col justify-between space-y-6 group relative"
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
                    className="font-mono text-[11px]"
                  >
                    {post.publishedAt
                      ? new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(post.publishedAt)
                      : "2026"}
                  </time>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-display text-main leading-snug group-hover:text-primary transition-colors">
                  <Link href={`/reviews/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-light flex items-center justify-between text-xs text-secondary">
                <div className="flex items-center space-x-3">
                  <span className="radar-metric-pill flex items-center gap-1 font-mono">
                    <Layers className="w-3.5 h-3.5 text-primary" /> {post.legoSet?.pieceCount.toLocaleString("en-US")} pcs
                  </span>
                  <span className="text-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary" /> {post.readingTimeMinutes} min read
                  </span>
                </div>
                <Link
                  href={`/reviews/${post.slug}`}
                  className="font-bold text-main inline-flex items-center gap-1.5 hover:text-primary transition-colors font-display text-xs group-hover:translate-x-0.5 transform duration-150"
                >
                  Read Review <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

