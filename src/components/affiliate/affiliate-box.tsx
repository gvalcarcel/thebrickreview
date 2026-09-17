import type { LegoSet, AffiliateLink } from "@/types";
import { ExternalLink, ShoppingBag, ShieldCheck, Zap } from "lucide-react";

interface AffiliateBoxProps {
  set: LegoSet;
  links?: AffiliateLink[];
}

export function AffiliateBox({ set, links = [] }: AffiliateBoxProps) {
  const activeLinks = links.filter((l) => l.isActive);

  if (activeLinks.length === 0) {
    return null;
  }

  return (
    <section aria-label="Verified Vendors and Live Sourcing Radar" className="radar-card border-2 border-primary/30 bg-white p-6 sm:p-8 my-12 space-y-6 shadow-lg relative overflow-hidden">
      <div className="space-y-2 pb-4 border-b border-light">
        <div className="flex flex-wrap items-center gap-2">
          <span className="radar-badge radar-badge--drop inline-flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5" /> Verified Sourcing Radar
          </span>
          <span className="radar-badge radar-badge--subtle">
            {set.isRetired ? "Alternative Clones & Vault Spares" : "Instant In-Stock Availability"}
          </span>
          <span className="radar-badge radar-badge--history-low inline-flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-500" /> Buyer Protection Included
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-main">
          Where to Find {set.name} (#{set.setNumber}) Verified Alternatives &amp; Parts?
        </h3>
        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          Compare live stock availability, promotional seller coupons, and warehouse logistics across vetted AliExpress storefronts. Fast delivery options ship from local fulfillment hubs with full tracking:
        </p>
      </div>

      {/* Retailer buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {activeLinks.map((link) => {
          const retailerSlug = link.retailerName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const jumpUrl = `/ir/${retailerSlug}/${link.internalSlug}`;
          const isFast = link.retailerName.toLowerCase().includes("fast") || link.retailerName.toLowerCase().includes("plaza");

          return (
            <a
              key={link.id}
              href={jumpUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className={`radar-button justify-between py-3.5 px-5 shadow-sm hover:scale-[1.02] transition-transform duration-200 group text-white font-bold ${
                isFast
                  ? "!bg-[#ff4747] hover:!bg-[#e03a3a]"
                  : "!bg-[#ff5000] hover:!bg-[#e04500]"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                <span className="font-display font-semibold text-sm">
                  Check Deals on {link.retailerName}
                </span>
                {isFast && (
                  <span className="text-[10px] uppercase bg-white/25 px-2 py-0.5 rounded font-mono font-bold tracking-wider text-white">
                    Fast Ship
                  </span>
                )}
              </span>
              <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
            </a>
          );
        })}
      </div>

      {/* Editorial transparency note */}
      <div className="flex items-start gap-2.5 pt-3 text-[11px] text-muted leading-relaxed border-t border-light bg-surface-subtle/60 p-3 rounded-lg">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <p>
          <strong>Editorial Independence &amp; Affiliate Disclosure:</strong> All teardowns and structural evaluations are conducted objectively by AFOL builders. When you navigate through these verified seller links, The Brick Review may receive a small referral commission that directly finances the acquisition of new sets for technical review—at zero extra expense to you.
        </p>
      </div>
    </section>
  );
}