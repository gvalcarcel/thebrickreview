"use client";

import { useState } from "react";
import type { BuildGalleryImage } from "@/types";
import { Camera, ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from "lucide-react";

interface BuildGalleryProps {
  images: BuildGalleryImage[];
  title?: string;
}

export function BuildGallery({ images, title = "Assembly Architecture & Build Teardown" }: BuildGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const current = images[selectedIndex] || images[0];

  const prev = () => {
    setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <section className="my-10 space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2 border-b border-light">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          <h3 className="text-xl sm:text-2xl font-bold font-display text-main">
            {title}
          </h3>
        </div>
        <span className="radar-badge radar-badge--subtle inline-flex items-center gap-1.5 text-xs font-mono">
          <Sparkles className="w-3 h-3 text-accent-yellow" />
          Official LEGO Assembly Photography ({images.length} angles)
        </span>
      </div>

      {/* Main Viewport Card */}
      <div className="radar-card overflow-hidden bg-white border border-light p-3 sm:p-4 rounded-xl shadow-sm">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900/5 rounded-lg overflow-hidden flex items-center justify-center group bg-brick-studs">
          <img
            src={current.url}
            alt={current.alt || current.caption}
            className="w-full h-full object-contain transition-all duration-300 select-none p-2 sm:p-4"
            loading="lazy"
          />

          {/* Prev / Next navigation overlays */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-main shadow-md border border-light opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-main shadow-md border border-light opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Expand Lightbox Button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            aria-label="Enlarge image"
            className="absolute top-2 right-2 p-2 rounded-lg bg-white/90 hover:bg-white text-main shadow-sm border border-light opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Caption Bar Overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4 text-white flex items-end justify-between gap-4">
            <p className="text-xs sm:text-sm font-medium leading-snug drop-shadow-sm line-clamp-2">
              {current.caption}
            </p>
            <span className="text-[11px] font-mono bg-black/60 px-2 py-0.5 rounded border border-white/20 shrink-0">
              {selectedIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
            {images.map((img, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <button
                  key={img.url}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all p-1 bg-white ${
                    isActive
                      ? "border-primary shadow-sm ring-2 ring-primary/20 scale-105"
                      : "border-light hover:border-slate-400 opacity-70 hover:opacity-100"
                  }`}
                  title={img.caption}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-red-400 p-1"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={current.url}
              alt={current.alt || current.caption}
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
            />

            <div className="mt-3 text-center text-white/90 text-sm max-w-2xl px-4">
              <p>{current.caption}</p>
              <span className="text-xs font-mono text-white/50 block mt-1">
                Image {selectedIndex + 1} of {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

