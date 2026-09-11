import type { LegoSet, AffiliateLink } from "@/types";
import { ExternalLink, ShoppingBag, ShieldCheck } from "lucide-react";

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
    <section aria-label="Disponibilidad y puntos de adquisición" className="border border-zinc-200 bg-white rounded-xl p-6 sm:p-8 my-12 space-y-6 shadow-sm">
      <div className="space-y-1.5 pb-4 border-b border-zinc-100">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
          <ShoppingBag className="w-4 h-4" />
          <span>Guía de Adquisición y Disponibilidad</span>
        </div>
        <h3 className="text-xl font-bold font-serif text-zinc-900">
          ¿Dónde conseguir el set {set.name} (#{set.setNumber})?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
          {set.isRetired
            ? "Al tratarse de un set descatalogado, la disponibilidad depende de remesas remanentes en distribuidores autorizados o plataformas especializadas de coleccionismo."
            : "Consulta la disponibilidad actual y condiciones de envío directamente en los siguientes distribuidores certificados:"}
        </p>
      </div>

      {/* Botones de distribuidores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {activeLinks.map((link) => {
          const retailerSlug = link.retailerName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const jumpUrl = `/ir/${retailerSlug}/${link.internalSlug}`;

          return (
            <a
              key={link.id}
              href={jumpUrl}
              target="_blank"
              rel="nofollow sponsored"
              className="flex items-center justify-between px-5 py-3.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-950 transition-all text-sm font-semibold text-zinc-800 group"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                <span>
                  {set.isRetired
                    ? `Buscar en ${link.retailerName}`
                    : `Consultar stock en ${link.retailerName}`}
                </span>
              </span>
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-amber-800 transition-colors" />
            </a>
          );
        })}
      </div>

      {/* Nota de transparencia editorial obligatoria (RN-001) */}
      <div className="flex items-start gap-2 pt-2 text-[11px] text-zinc-500 leading-relaxed border-t border-zinc-100">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <p>
          <strong>Divulgación editorial:</strong> Nuestros análisis son totalmente autónomos e independientes. Si decides realizar una compra a través de estos enlaces, The Brick Review puede percibir una compensación por referencia que financia la adquisición de nuevos modelos para su examen técnico, sin sobrecoste alguno en tu compra.
        </p>
      </div>
    </section>
  );
}