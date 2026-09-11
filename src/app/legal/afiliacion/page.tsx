import type { Metadata } from "next";
import { ShieldCheck, HeartHandshake, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Divulgación de Afiliados y Transparencia | The Brick Review",
  description: "Información transparente sobre los programas de afiliación, monetización ética y compromiso de independencia editorial.",
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Ética y Monetización Transparente</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-zinc-950">
          Divulgación de Programas de Afiliación
        </h1>
        <p className="text-sm text-zinc-500">Compromiso ético con la comunidad de constructores</p>
      </header>

      <div className="prose-editorial text-sm sm:text-base space-y-6 text-zinc-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-serif text-zinc-900">1. Principio Fundamental de Independencia</h2>
          <p>
            En <strong>The Brick Review</strong> creemos firmemente que la confianza del lector es el activo más valioso de cualquier publicación. Ninguna marca, distribuidor o fabricante dicta nuestras opiniones ni compra nuestras valoraciones técnicas. Si un set presenta fallos estructurales, piezas con holgura o un ratio precio/pieza desproporcionado, así lo señalamos sin excepciones.
          </p>
        </section>

        <section className="border border-zinc-200 bg-white p-6 rounded-lg space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-base font-bold text-zinc-900">
            <HeartHandshake className="w-5 h-5 text-amber-600" />
            <span>¿Cómo se financia este cuaderno editorial?</span>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Para adquirir los modelos que analizamos en la mesa de montaje sin recurrir a publicidad invasiva ni muros de pago, participamos en diversos programas de afiliación autorizados (incluyendo el programa de afiliados de <strong>Amazon Associates</strong> y redes asociadas de distribución de juguetes de construcción).
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Al final de nuestros análisis facilitamos botones de consulta hacia distribuidores verificados. Si decides adquirir un set a través de uno de estos enlaces enmascarados (bajo la ruta interna <code>/ir/...</code>), el distribuidor puede abonarnos un pequeño porcentaje por la referencia comercial.
          </p>
          <div className="p-3 bg-zinc-50 rounded border border-zinc-200 text-xs font-semibold text-zinc-800">
            ⚠️ Esto no supone ningún coste adicional para ti. El precio que abonas es exactamente el mismo que si accedieses directamente.
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-serif text-zinc-900">2. Identificación Visual de los Enlaces</h2>
          <p>
            Cumpliendo estrictamente con las directrices de los motores de búsqueda y la legislación europea sobre divulgación comercial digital:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600">
            <li>Todos los enlaces salientes de afiliación están codificados con el atributo <code>rel="nofollow sponsored"</code>.</li>
            <li>Ningún enlace de compra precede al análisis técnico ni se disfraza de contenido editorial falso.</li>
            <li>Se informa de la condición de set retirado (*retired*) para evitar confusiones con precios del mercado secundario.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold font-serif text-zinc-900">
            <Award className="w-5 h-5 text-amber-700" />
            <span>3. Declaración de Amazon Associates</span>
          </div>
          <p className="text-xs text-zinc-500 italic">
            "Como participantes en el Programa de Afiliados de Amazon de la UE, obtenemos ingresos por las compras adscritas que cumplen los requisitos aplicables."
          </p>
        </section>
      </div>
    </article>
  );
}