import type { LegoSet } from "@/types";
import { formatPriceCents, calculatePricePerPiece } from "@/lib/utils";
import { Layers, Users, Calendar, Award, Banknote, AlertTriangle } from "lucide-react";

interface SetSpecsCardProps {
  set: LegoSet;
}

export function SetSpecsCard({ set }: SetSpecsCardProps) {
  const priceFormatted = formatPriceCents(set.officialPriceCents);
  const pricePerPiece = calculatePricePerPiece(set.officialPriceCents, set.pieceCount);

  return (
    <div className="radar-card p-6 sm:p-8 my-10 space-y-6 bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-light">
        <div>
          <span className="radar-badge radar-badge--subtle mb-1.5">
            Ficha Técnica Oficial
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-main">
            {set.name} — #{set.setNumber}
          </h3>
        </div>

        {set.isRetired ? (
          <span className="radar-badge radar-badge--eol">
            <AlertTriangle className="w-3 h-3 inline" /> Retirado / Descatalogado
          </span>
        ) : (
          <span className="radar-badge radar-badge--history-low">
            En catálogo oficial activo
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Layers className="w-4 h-4 text-primary" />
            <span>Número de Piezas</span>
          </div>
          <p className="font-bold text-main text-base font-mono">{set.pieceCount.toLocaleString("es-ES")} pcs</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Users className="w-4 h-4 text-primary" />
            <span>Minifiguras</span>
          </div>
          <p className="font-bold text-main text-base font-mono">
            {set.minifigsCount && set.minifigsCount > 0 ? `${set.minifigsCount} figuras` : "Sin minifiguras"}
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Año de lanzamiento</span>
          </div>
          <p className="font-bold text-main text-base font-mono">{set.releaseYear}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Award className="w-4 h-4 text-primary" />
            <span>Nivel de dificultad</span>
          </div>
          <p className="font-bold text-main text-base">{set.difficulty}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-muted text-xs font-display">
            <Banknote className="w-4 h-4 text-primary" />
            <span>PVP Oficial</span>
          </div>
          <p className="font-bold text-main text-base font-mono">{priceFormatted}</p>
        </div>

        {pricePerPiece && (
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted text-xs font-display">
              <span className="font-mono text-primary font-bold">€/p</span>
              <span>Ratio precio / pieza</span>
            </div>
            <p className="font-bold text-primary text-base font-mono">
              <span className="radar-metric-pill">{pricePerPiece}</span>
            </p>
          </div>
        )}
      </div>

      {set.isRetired && (
        <p className="text-xs text-secondary bg-surface-subtle p-3.5 rounded-md border border-light leading-relaxed">
          <strong>Nota para coleccionistas:</strong> Al encontrarse oficialmente retirado del catálogo regular de LEGO®, los precios de mercado en distribuidores externos y plataformas de segunda mano pueden experimentar fluctuaciones respecto al PVP original.
        </p>
      )}
    </div>
  );
}