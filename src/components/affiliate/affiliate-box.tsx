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
    <section aria-label="Disponibilidad y puntos de adquisición" className="radar-card border-2 border-primary/25 bg-white p-6 sm:p-8 my-12 space-y-6 shadow-md">
      <div className="space-y-2 pb-4 border-b border-light">
        <div className="flex items-center gap-2">
          <span className="radar-badge radar-badge--drop">
            <ShoppingBag className="w-3 h-3 inline mr-1" /> Comparativa de Puntos de Venta
          </span>
          <span className="radar-badge radar-badge--subtle">
            {set.isRetired ? "Mercado Secundario" : "Disponibilidad Inmediata"}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-main">
          ¿Dónde adquirir el set {set.name} (#{set.setNumber}) al mejor precio?
        </h3>
        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          {set.isRetired
            ? "Al tratarse de un set descatalogado (EOL), la disponibilidad depende de remesas remanentes en distribuidores autorizados o plataformas especializadas de coleccionismo."
            : "Compara disponibilidad oficial y condiciones de envío directamente en los siguientes distribuidores certificados:"}
        </p>
      </div>

      {/* Botones de distribuidores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {activeLinks.map((link) => {
          const retailerSlug = link.retailerName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const jumpUrl = `/ir/${retailerSlug}/${link.internalSlug}`;
          const isAmazon = link.retailerName.toLowerCase().includes("amazon");

          return (
            <a
              key={link.id}
              href={jumpUrl}
              target="_blank"
              rel="nofollow sponsored"
              className={
                isAmazon
                  ? "radar-btn-store justify-between py-3.5 px-4 shadow-sm hover:scale-[1.01] transition-transform group"
                  : "radar-btn-primary justify-between py-3.5 px-4 shadow-sm hover:scale-[1.01] transition-transform group"
              }
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span className="font-display font-semibold">
                  {set.isRetired
                    ? `Buscar en ${link.retailerName}`
                    : `Ver oferta en ${link.retailerName}`}
                </span>
              </span>
              <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
            </a>
          );
        })}
      </div>

      {/* Nota de transparencia editorial obligatoria (RN-001) */}
      <div className="flex items-start gap-2 pt-3 text-[11px] text-muted leading-relaxed border-t border-light">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <p>
          <strong>Divulgación editorial & Afiliación:</strong> Nuestros análisis son totalmente autónomos. Si decides realizar una compra a través de estos enlaces salientes cloakeados, The Brick Review / BrickRadar puede percibir una comisión de afiliado que financia la adquisición de nuevos modelos para su examen técnico, sin sobrecoste alguno para el comprador.
        </p>
      </div>
    </section>
  );
}