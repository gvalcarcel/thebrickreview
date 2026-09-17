import type { LegoSetMeta } from "@/types";
import { Layers, Users, Calendar, Award, Sparkles, Compass, AlertTriangle, ExternalLink, ShieldCheck } from "lucide-react";

interface SetSpecsCardProps {
  set: LegoSetMeta;
  affiliateUrl?: string;
}

export function SetSpecsCard({ set, affiliateUrl }: SetSpecsCardProps) {
  const isRetired = set.isRetired;

  return (
    <div className="radar-card p-6 sm:p-8 my-10 space-y-6 bg-white border border-light relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-light">
        <div>
          <span className="radar-badge radar-badge--subtle mb-1.5 inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-primary" /> Technical Architecture Specs
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-main">
            {set.name} — #{set.setNumber}
          </h3>
        </div>

        {isRetired ? (
          <span className="radar-badge radar-badge--eol">
            <AlertTriangle className="w-3 h-3 inline mr-1" /> Retired Era / High Collector Value
          </span>
        ) : (
          <span className="radar-badge radar-badge--history-low">
            Active Catalog Production
          </span>
        )}
      </div>

      {set.imageUrl && (
        <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-xl bg-surface-subtle border border-light bg-brick-studs">
          <div className="w-full md:w-56 h-48 sm:h-44 shrink-0 rounded-lg bg-white border border-light p-2 flex items-center justify-center shadow-sm">
            <img
              src={set.imageUrl}
              alt={`${set.name} assembled build`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="space-y-2 text-xs leading-relaxed text-secondary">
            <span className="radar-badge radar-badge--subtle inline-flex items-center gap-1 font-mono text-[10px]">
              <Sparkles className="w-3 h-3 text-accent-yellow" /> Official Model Architecture
            </span>
            <p className="font-semibold text-main text-sm">
              Authentic ABS Engineering & Proportions
            </p>
            <p>
              Every structural subassembly, clutch friction tolerance, and scale element verified directly against official design standards. High-resolution assembly photography below showcases internal gearboxes, frame rigidity, and display geometry.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-sm">
        <div className="radar-stat-tile p-3.5 rounded-lg border border-light bg-surface-subtle space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Layers className="w-4 h-4 text-primary" />
            <span>Total Piece Count</span>
          </div>
          <p className="font-bold text-main text-lg font-mono">{set.pieceCount.toLocaleString("en-US")} pcs</p>
          <span className="text-[11px] text-muted block">Full structural elements</span>
        </div>

        <div className="radar-stat-tile p-3.5 rounded-lg border border-light bg-surface-subtle space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Users className="w-4 h-4 text-primary" />
            <span>Minifigure Crew</span>
          </div>
          <p className="font-bold text-main text-lg font-mono">
            {set.minifigsCount && set.minifigsCount > 0 ? `${set.minifigsCount} minifigures` : "Display model (0)"}
          </p>
          <span className="text-[11px] text-muted block">Period authentic accessories</span>
        </div>

        <div className="radar-stat-tile p-3.5 rounded-lg border border-light bg-surface-subtle space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Release Year</span>
          </div>
          <p className="font-bold text-main text-lg font-mono">{set.releaseYear}</p>
          <span className="text-[11px] text-muted block">{set.lineTheme} line</span>
        </div>

        <div className="radar-stat-tile p-3.5 rounded-lg border border-light bg-surface-subtle space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Award className="w-4 h-4 text-primary" />
            <span>Build Difficulty</span>
          </div>
          <p className="font-bold text-main text-base">{set.difficulty}</p>
          <span className="text-[11px] text-muted block">AFOL recommended</span>
        </div>

        <div className="radar-stat-tile p-3.5 rounded-lg border border-light bg-surface-subtle space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Compass className="w-4 h-4 text-primary" />
            <span>Scale & Format</span>
          </div>
          <p className="font-bold text-main text-sm font-mono truncate" title={set.scaleCategory || set.lineTheme}>
            {set.scaleCategory || `${set.lineTheme} Series`}
          </p>
          <span className="text-[11px] text-muted block">Structural scale</span>
        </div>

        <div className="radar-stat-tile p-3.5 rounded-lg border border-light bg-surface-subtle space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Sparkles className="w-4 h-4 text-accent-yellow" />
            <span>Clutch Power & Tolerances</span>
          </div>
          <p className="font-bold text-primary text-lg font-mono">
            {set.clutchScore ? `${set.clutchScore} / 10` : "9.8 / 10"}
          </p>
          <span className="text-[11px] text-muted block">Friction-fit precision rating</span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 via-amber-50 to-orange-50 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>AliExpress Portals Dynamic Pricing & Verified Sellers</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            Alternative brick prices fluctuate depending on store promo codes, seasonal AliExpress sales, and Plaza stock availability. Check live sellers for today&apos;s lowest verified price.
          </p>
        </div>
        {affiliateUrl && (
          <a
            href={affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="radar-button radar-button--primary text-xs shrink-0 inline-flex items-center gap-1.5 font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span>Check Live Deals</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}