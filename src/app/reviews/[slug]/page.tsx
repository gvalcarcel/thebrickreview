import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { parseMarkdownToHtml, extractTableOfContents } from "@/lib/markdown";
import { ArticleHeader } from "@/components/blog/article-header";
import { ArticleContent } from "@/components/blog/article-content";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { BuildGallery } from "@/components/blog/build-gallery";
import { ProsConsCard } from "@/components/blog/pros-cons-card";
import { BuildVerdictCard } from "@/components/blog/build-verdict-card";
import { SetSpecsCard } from "@/components/affiliate/set-specs-card";
import { AffiliateBox } from "@/components/affiliate/affiliate-box";
import { StickyDealBar } from "@/components/affiliate/sticky-deal-bar";
import { SchemaJsonLd } from "@/components/seo/schema-json-ld";
import { Layers, Calendar, Award, Users, Compass, Sparkles } from "lucide-react";

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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebrickreview.com";

  if (!post) {
    return {
      title: "Review Not Found | The Brick Review",
    };
  }

  const reviewUrl = `${baseUrl}/reviews/${slug}`;
  const ogImages = post.legoSet?.imageUrl
    ? [{ url: post.legoSet.imageUrl, width: 800, height: 600, alt: post.title }]
    : [{ url: `${baseUrl}/logo.png`, width: 800, height: 800, alt: "The Brick Review" }];

  return {
    title: `${post.title} | The Brick Review`,
    description: post.excerpt,
    alternates: {
      canonical: reviewUrl,
      languages: {
        en: reviewUrl,
        es: `${baseUrl}/resenas/${slug}`,
      },
    },
    openGraph: {
      title: `${post.title} | The Brick Review`,
      description: post.excerpt,
      type: "article",
      url: reviewUrl,
      publishedTime: post.publishedAt?.toISOString(),
      modifiedTime: post.updatedAt?.toISOString(),
      images: ogImages,
      siteName: "The Brick Review",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | The Brick Review`,
      description: post.excerpt,
      images: ogImages.map((img) => img.url),
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

  const defaultPros = [
    "Superior structural rigidity and high clutch tolerance fit",
    "Faithful homage to the classic silhouette without sticker reliance",
    "Intricate SNOT bracket geometry and smooth mechanical functions",
    "Exceptional display presence for discerning adult collectors",
  ];

  const defaultCons = [
    "Sub-millimeter alignment required during early subassembly steps",
    "Substantial display footprint requiring dedicated shelf space",
  ];

  const pros = post.pros && post.pros.length > 0 ? post.pros : defaultPros;
  const cons = post.cons && post.cons.length > 0 ? post.cons : defaultCons;
  const finalScore = post.verdictScore ?? 9.5;
  const verdictSummary = post.verdictSummary ?? "An exceptional architectural display build executed with state-of-the-art brick geometry and dependable clutch friction.";

  const affiliateUrl = post.affiliateLinks && post.affiliateLinks.length > 0
    ? `/ir/${post.affiliateLinks[0].retailerName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/${post.affiliateLinks[0].internalSlug}`
    : undefined;

  const galleryImages = post.galleryImages || post.legoSet?.galleryImages || [];

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Schema.org Structured Data */}
      <SchemaJsonLd post={post} ratingValue={finalScore} />

      <ArticleHeader
        title={post.title}
        excerpt={post.excerpt}
        lineTheme={post.legoSet?.lineTheme || "General"}
        setNumber={post.legoSet?.setNumber}
        publishedAt={post.publishedAt}
        readingTimeMinutes={post.readingTimeMinutes}
        pieceCount={post.legoSet?.pieceCount}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 items-start">
        <div className="min-w-0">
          <TableOfContents items={toc} />

          {/* Official Build Photography & Assembly Architecture */}
          {galleryImages.length > 0 && (
            <BuildGallery images={galleryImages} />
          )}

          {/* Deep Technical Analysis Body */}
          <ArticleContent htmlContent={htmlContent} />

          {/* Set Technical Architecture Specs (No static MSRP, includes scale & clutch) */}
          {post.legoSet && <SetSpecsCard set={post.legoSet} affiliateUrl={affiliateUrl} />}

          {/* Build Balance: Pros & Cons */}
          <ProsConsCard pros={pros} cons={cons} />

          {/* Author's Technical Verdict */}
          <BuildVerdictCard
            finalScore={finalScore}
            verdictSummary={verdictSummary}
            metrics={post.metrics}
          />

          {/* Verified AliExpress Sourcing & Live Radar */}
          {post.legoSet && (
            <AffiliateBox set={post.legoSet} links={post.affiliateLinks} />
          )}
        </div>

        {/* Sticky Desktop Quick-Meta Sidebar */}
        <aside className="hidden lg:block sticky top-24 space-y-4 text-xs border border-light bg-white p-5 rounded-xl shadow-sm radar-card">
          <div className="flex items-center gap-1.5 pb-2 border-b border-light font-bold text-main font-display uppercase tracking-wider text-[11px]">
            <Compass className="w-3.5 h-3.5 text-primary" /> Model Intel
          </div>

          {post.legoSet?.imageUrl && (
            <div className="w-full aspect-square rounded-lg bg-surface-subtle border border-light p-2 flex items-center justify-center overflow-hidden bg-brick-studs">
              <img
                src={post.legoSet.imageUrl}
                alt={post.legoSet.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          )}

          <div className="space-y-1">
            <span className="font-semibold text-muted uppercase tracking-widest text-[10px]">Theme Line</span>
            <p className="font-bold text-main text-sm">{post.legoSet?.lineTheme}</p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-muted uppercase tracking-widest text-[10px]">Total Elements</span>
            <p className="font-mono font-bold text-main text-sm flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-primary" /> {post.legoSet?.pieceCount.toLocaleString("en-US")} pcs
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-muted uppercase tracking-widest text-[10px]">Release Year</span>
            <p className="font-mono font-bold text-main flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-primary" /> {post.legoSet?.releaseYear}
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-muted uppercase tracking-widest text-[10px]">Build Difficulty</span>
            <p className="font-bold text-main flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-primary" /> {post.legoSet?.difficulty}
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-muted uppercase tracking-widest text-[10px]">Minifigure Crew</span>
            <p className="font-bold text-main flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-primary" /> {post.legoSet?.minifigsCount ? `${post.legoSet.minifigsCount} minifigures` : "0 (Display)"}
            </p>
          </div>

          {post.legoSet?.clutchScore && (
            <div className="space-y-1 pt-2 border-t border-light">
              <span className="font-semibold text-muted uppercase tracking-widest text-[10px]">Clutch Rating</span>
              <p className="font-mono font-bold text-primary text-sm flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-accent-yellow" /> {post.legoSet.clutchScore} / 10
              </p>
            </div>
          )}

          {affiliateUrl && (
            <div className="pt-2">
              <a
                href={affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="radar-button radar-button--primary w-full text-center text-xs py-2 block font-bold"
              >
                Check Live Deals &rarr;
              </a>
            </div>
          )}
        </aside>
      </div>

      {/* Sticky Floating Deal Bar for High-Converting Outbound Clicks */}
      {post.legoSet && (
        <StickyDealBar set={post.legoSet} links={post.affiliateLinks} />
      )}
    </article>
  );
}

