import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { parseMarkdownToHtml, extractTableOfContents } from "@/lib/markdown";
import { ArticleHeader } from "@/components/blog/article-header";
import { ArticleContent } from "@/components/blog/article-content";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { ProsConsCard } from "@/components/blog/pros-cons-card";
import { BuildVerdictCard } from "@/components/blog/build-verdict-card";
import { SetSpecsCard } from "@/components/affiliate/set-specs-card";
import { AffiliateBox } from "@/components/affiliate/affiliate-box";

interface ReviewPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Reseña no encontrada | The Brick Review",
    };
  }

  return {
    title: `${post.title} | The Brick Review`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
    },
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = parseMarkdownToHtml(post.contentMarkdown);
  const toc = extractTableOfContents(post.contentMarkdown);

  const isExplorer = slug.includes("10497");
  const pros = isExplorer
    ? [
        "100% piezas serigrafiadas, cero pegatinas.",
        "Ingeniería sublime en el ala delta con ensamblaje SNOT.",
        "Mecanismo de tren de aterrizaje retráctil impecable.",
        "Ratio precio/pieza excepcional de 0,08 € para un modelo Icons.",
      ]
    : [
        "Monumento absoluto al modelismo con 7.541 piezas.",
        "Chasis Technic colosal capaz de soportar 13 kg de peso.",
        "Nivel de micro-detalle (greebling) inigualable en el mercado.",
        "Selección de minifiguras de la trilogía clásica y secuelas.",
      ];

  const cons = isExplorer
    ? [
        "Cabina del copiloto algo ajustada para minifiguras con mochila grande.",
        "Set descatalogado oficialmente; disponibilidad sujeta a stock de distribuidores o coleccionismo.",
      ]
    : [
        "Exige un espacio de exposición permanente de al menos 90 x 70 cm.",
        "Fragilidad extrema de los paneles superiores ante traslados sin cuidado.",
        "Inversión económica sustancial solo apta para coleccionistas devotos.",
      ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <ArticleHeader
        title={post.title}
        excerpt={post.excerpt}
        lineTheme={post.legoSet?.lineTheme || "General"}
        setNumber={post.legoSet?.setNumber}
        publishedAt={post.publishedAt}
        readingTimeMinutes={post.readingTimeMinutes}
        pieceCount={post.legoSet?.pieceCount}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-8 items-start">
        <div className="min-w-0">
          <TableOfContents items={toc} />

          {/* Cuerpo analítico */}
          <ArticleContent htmlContent={htmlContent} />

          {/* Ficha técnica del set */}
          {post.legoSet && <SetSpecsCard set={post.legoSet} />}

          {/* Balance técnico: Pros y contras */}
          <ProsConsCard pros={pros} cons={cons} />

          {/* Veredicto de montaje */}
          <BuildVerdictCard
            finalScore={isExplorer ? 9.6 : 9.4}
            verdictSummary={
              isExplorer
                ? "Una carta de amor al coleccionista clásico ejecutada con la más depurada técnica contemporánea de ensamblaje."
                : "La cúspide de la ingeniería de bloques y el coleccionismo UCS, sacrificando maniobrabilidad por una presencia imponente."
            }
            buildingTechniques={isExplorer ? 9.8 : 9.7}
            structuralRigidity={isExplorer ? 9.9 : 8.5}
            assemblyFlow={isExplorer ? 9.5 : 9.2}
            valuePerPrice={isExplorer ? 9.6 : 9.0}
          />

          {/* Bloque de adquisición y disponibilidad contextual (nunca al inicio) */}
          {post.legoSet && (
            <AffiliateBox set={post.legoSet} links={post.affiliateLinks} />
          )}
        </div>

        {/* Barra lateral de metadatos rápidos en escritorio */}
        <aside className="hidden lg:block sticky top-24 space-y-6 text-xs border border-zinc-200 bg-white p-5 rounded-lg shadow-sm">
          <div className="space-y-1">
            <span className="font-semibold text-zinc-400 uppercase tracking-widest text-[10px]">Línea Temática</span>
            <p className="font-bold text-zinc-900 text-sm">{post.legoSet?.lineTheme}</p>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-zinc-400 uppercase tracking-widest text-[10px]">Año de salida</span>
            <p className="font-bold text-zinc-900">{post.legoSet?.releaseYear}</p>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-zinc-400 uppercase tracking-widest text-[10px]">Complejidad</span>
            <p className="font-bold text-zinc-900">{post.legoSet?.difficulty}</p>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-zinc-400 uppercase tracking-widest text-[10px]">Minifiguras</span>
            <p className="font-bold text-zinc-900">{post.legoSet?.minifigsCount} figuras oficiales</p>
          </div>
        </aside>
      </div>
    </article>
  );
}