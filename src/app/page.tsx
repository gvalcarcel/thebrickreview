import { getAllPosts } from "@/lib/posts";
import { SearchFilter } from "@/components/blog/search-filter";
import { ShieldCheck, Sparkles, Layers, Cpu, Compass, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const posts = await getAllPosts();
  const totalPieces = posts.reduce((sum, p) => sum + (p.legoSet?.pieceCount || 0), 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
      {/* High-Impact Tactile Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-white border border-light p-8 sm:p-12 shadow-xl bg-brick-studs">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent-yellow to-accent-blue" />

        <div className="relative z-10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="radar-badge radar-badge--subtle border border-light font-mono font-bold inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  BrickRadar Precision Engine
                </span>
                <span className="radar-badge radar-badge--drop inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Alternative Bricks &amp; Clones
                </span>
                <span className="radar-badge radar-badge--history-low inline-flex items-center gap-1">
                  <ShoppingBag className="w-3 h-3 text-emerald-600" /> AliExpress Live Sourcing
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-main font-display leading-[1.12]">
                Tactile Architectural Audits &amp; Sourcing Radar for AFOLs.
              </h1>

              <p className="text-base sm:text-xl text-secondary leading-relaxed font-sans font-normal">
                Objective technical teardowns, clutch tolerance scoring, SNOT geometry dissections, and verified alternative sourcing radars—engineered for discerning adult builders worldwide.
              </p>
            </div>

            {/* Official Brand Crest Emblem */}
            <div className="hidden lg:flex flex-col items-center justify-center p-2 flex-shrink-0">
              <div className="relative w-48 h-48 xl:w-52 xl:h-52 transition-transform duration-300 hover:scale-105 filter drop-shadow-md">
                <Image
                  src="/logo-badge.png"
                  alt="Review The Brick Official Emblem"
                  fill
                  sizes="(max-width: 1280px) 192px, 208px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-muted uppercase mt-1">
                Review The Brick • Certified Radar
              </span>
            </div>
          </div>

          {/* Tactile Key Metrics Row */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-surface-subtle border border-light shadow-sm space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs text-muted font-display">
                <Layers className="w-3.5 h-3.5 text-primary" />
                <span>Indexed Elements</span>
              </div>
              <p className="text-lg sm:text-xl font-black font-mono text-main">
                {totalPieces.toLocaleString("en-US")}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-subtle border border-light shadow-sm space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs text-muted font-display">
                <Cpu className="w-3.5 h-3.5 text-accent-blue" />
                <span>Teardown Sets</span>
              </div>
              <p className="text-lg sm:text-xl font-black font-mono text-main">
                {posts.length} Iconic Builds
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-subtle border border-light shadow-sm space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs text-muted font-display">
                <Compass className="w-3.5 h-3.5 text-accent-yellow" />
                <span>Clutch Tolerances</span>
              </div>
              <p className="text-lg sm:text-xl font-black font-mono text-primary">
                9.7 / 10 Avg
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-subtle border border-light shadow-sm space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs text-muted font-display">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Vendor Vetting</span>
              </div>
              <p className="text-lg sm:text-xl font-black font-mono text-emerald-700">
                100% Cloaked
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Teardown Notebooks Directory */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-main font-display">
              Technical Teardowns &amp; Build Logs
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Select any model below to explore structural stress analyses, sub-millimeter tolerances, and verified store availability.
            </p>
          </div>
          <span className="radar-badge radar-badge--subtle self-start sm:self-auto font-mono text-xs">
            {posts.length} builds cataloged
          </span>
        </div>

        <SearchFilter initialPosts={posts} />
      </section>
    </div>
  );
}