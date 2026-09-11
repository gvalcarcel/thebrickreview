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
    <div className="border border-zinc-200 bg-white rounded-xl p-6 sm:p-8 my-10 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            Ficha Técnica Oficial
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-zinc-950">
            {set.name} — #{set.setNumber}
          </h3>
        </div>

        {set.isRetired ? (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Set Descatalogado (Coleccionismo)</span>
          </div>
        ) : (
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
            En catálogo oficial activo
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <Layers className="w-4 h-4 text-zinc-400" />
            <span>Número de Piezas</span>
          </div>
          <p className="font-bold text-zinc-900 text-base">{set.pieceCount.toLocaleString("es-ES")}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <Users className="w-4 h-4 text-zinc-400" />
            <span>Minifiguras</span>
          </div>
          <p className="font-bold text-zinc-900 text-base">
            {set.minifigsCount && set.minifigsCount > 0 ? `${set.minifigsCount} figuras` : "Sin minifiguras"}
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <Calendar className="w-4 h-4 text-zinc-400" />
            <span>Año de lanzamiento</span>
          </div>
          <p className="font-bold text-zinc-900 text-base">{set.releaseYear}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <Award className="w-4 h-4 text-zinc-400" />
            <span>Nivel de dificultad</span>
          </div>
          <p className="font-bold text-zinc-900 text-base">{set.difficulty}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <Banknote className="w-4 h-4 text-zinc-400" />
            <span>PVP Oficial de referencia</span>
          </div>
          <p className="font-bold text-zinc-900 text-base">{priceFormatted}</p>
        </div>

        {pricePerPiece && (
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
              <span className="text-zinc-400 font-mono">€/p</span>
              <span>Ratio precio / pieza</span>
            </div>
            <p className="font-bold text-amber-800 text-base">{pricePerPiece}</p>
          </div>
        )}
      </div>

      {set.isRetired && (
        <p className="text-xs text-zinc-500 bg-zinc-50 p-3 rounded-lg border border-zinc-200/70 leading-relaxed">
          <strong>Nota para coleccionistas:</strong> Al encontrarse oficialmente retirado del catálogo regular de LEGO®, los precios de mercado en distribuidores externos y plataformas de segunda mano pueden experimentar fluctuaciones respecto al PVP original.
        </p>
      )}
    </div>
  );
}