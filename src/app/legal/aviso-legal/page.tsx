import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Aviso Legal y Directiva Fair Play | The Brick Review",
  description: "Aviso legal, titularidad del medio editorial e información sobre marcas registradas de The LEGO Group.",
};

export default function LegalNoticePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
          <Shield className="w-4 h-4" />
          <span>Marco Normativo y Transparencia</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-zinc-950">
          Aviso Legal e Identidad Editorial
        </h1>
        <p className="text-sm text-zinc-500">Última actualización: Septiembre de 2026</p>
      </header>

      <div className="prose-editorial text-sm sm:text-base space-y-6 text-zinc-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-serif text-zinc-900">1. Titularidad y Objeto del Sitio</h2>
          <p>
            <strong>The Brick Review</strong> es un portal web de divulgación cultural, crítica editorial y análisis técnico independiente especializado en sets de construcción con bloques. La finalidad del medio es ofrecer a la comunidad de aficionados adultos (AFOLs), coleccionistas y modelistas reseñas exhaustivas, documentación técnica de despieces y reflexiones sobre la experiencia de ensamblaje.
          </p>
        </section>

        <section className="space-y-3 bg-amber-50/60 border border-amber-200 p-6 rounded-lg text-amber-950">
          <h2 className="text-lg font-bold font-serif text-amber-900">2. Declaración de Marcas Registradas y Directiva Fair Play</h2>
          <p className="text-sm leading-relaxed">
            <strong>LEGO®</strong> es una marca registrada de <em>The LEGO Group</em>. El logotipo de LEGO, la configuración de pernos (*studs*), las minifiguras y las líneas comerciales asociadas son propiedad exclusiva de The LEGO Group.
          </p>
          <p className="text-sm leading-relaxed">
            The Brick Review es una publicación independiente realizada por y para aficionados. Este sitio web <strong>no está patrocinado, autorizado, administrado ni avalado de ningún modo por The LEGO Group</strong>, operando bajo las directrices reconocidas de uso leal (*Fair Play Policy*) para medios informativos y de crítica cultural sin fines de suplantación.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-serif text-zinc-900">3. Propiedad Intelectual de los Textos</h2>
          <p>
            Todos los textos, análisis críticos, diagramas de valoración, puntuaciones y fotografías de montaje elaboradas por los redactores de The Brick Review están protegidos por las leyes de propiedad intelectual vigentes. Queda prohibida la reproducción total o parcial con fines comerciales sin atribución explícita y enlace al artículo original.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-serif text-zinc-900">4. Enlaces a Terceros</h2>
          <p>
            Para más información sobre los enlaces hacia plataformas comerciales y distribuidores autorizados, consulta nuestra sección dedicada de <Link href="/legal/afiliacion" className="text-amber-700 font-semibold underline">Divulgación de Afiliados</Link>.
          </p>
        </section>
      </div>
    </article>
  );
}