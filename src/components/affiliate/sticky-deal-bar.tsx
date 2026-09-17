"use client";

import { useState, useEffect } from "react";
import type { LegoSet, AffiliateLink } from "@/types";
import { ShoppingBag, ExternalLink, Sparkles, X, ShieldCheck } from "lucide-react";

interface StickyDealBarProps {
  set: LegoSet;
  links?: AffiliateLink[];
}

export function StickyDealBar({ set, links = [] }: StickyDealBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const activeLink = links.find((l) => l.isActive) || links[0];

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 350px down
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!activeLink || isDismissed || !isVisible) {
    return null;
  }

  const retailerSlug = activeLink.retailerName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const jumpUrl = `/ir/${retailerSlug}/${activeLink.internalSlug}`;

  return (
    <div
      role="complementary"
      aria-label="Sticky deal banner"
      className="fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t-2 border-primary shadow-2xl transition-all duration-300 transform translate-y-0 animate-in slide-in-from-bottom"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Thumbnail & Set Info */}
        <div className="flex items-center gap-3 min-w-0">
          {set.imageUrl && (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-surface-subtle border border-light p-1 shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src={set.imageUrl}
                alt={set.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                AliExpress Choice
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[10px] text-emerald-700 font-medium">
                <ShieldCheck className="w-3 h-3" /> Buyer Protection
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold font-display text-main truncate">
              {set.name} <span className="text-muted font-mono font-normal">#{set.setNumber}</span>
            </p>
          </div>
        </div>

        {/* Action Button & Dismiss */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={jumpUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="radar-button radar-button--primary !py-2 !px-3 sm:!px-5 text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-transform flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Check AliExpress Deals</span>
            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-80" />
          </a>
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss sticky deal bar"
            className="p-1 text-muted hover:text-main rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

