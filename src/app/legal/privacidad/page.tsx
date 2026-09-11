import type { Metadata } from "next";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad y Cookies | The Brick Review",
  description: "Información sobre el tratamiento de datos personales, cookies técnicas y privacidad anonimizada.",
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <header className="border-b border-zinc-200 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
          <Lock className="w-4 h-4" />
          <span>Privacidad RGPD y Protección de Datos</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-zinc-950">
          Política de Privacidad y Cookies
        </h1>
        <p className="text-sm text-zinc-500">Compromiso de privacidad desde el diseño (*Privacy by Design*)</p>
      </header>

      <div className="prose-editorial text-sm sm:text-base space-y-6 text-zinc-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-serif text-zinc-900">1. Resumen de Privacidad</h2>
          <p>
            The Brick Review es una publicación de lectura abierta. No exigimos registro de cuentas a los lectores para consultar nuestros cuadernos analíticos, artículos ni fichas de despiece. Respetamos rigurosamente el Reglamento General de Protección de Datos (RGPD UE 2016/679).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-serif text-zinc-900">2. Métricas de Enlaces Salientes y Anonimización</h2>
          <p>
            Cuando un lector hace clic en un enlace de disponibilidad bajo la ruta <code>/ir/...</code>, nuestro servidor contabiliza el evento con fines puramente estadísticos y de mantenimiento de enlaces rotos.
          </p>
          <div className="bg-zinc-50 p-4 rounded border border-zinc-200 text-xs space-y-1 text-zinc-700">
            <p className="font-semibold text-zinc-900">Garantía de Anonimización:</p>
            <p>• No almacenamos direcciones IP completas ni perfiles de usuario.</p>
            <p>• Los registros solo conservan el identificador del enlace pulsado, el referente y la fecha de la consulta.</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-serif text-zinc-900">3. Política de Cookies</h2>
          <p>
            Este sitio web no inyecta cookies publicitarias ni píxeles de rastreo invasivo antes de tu navegación. Las únicas cookies utilizadas son de naturaleza técnica estrictamente necesarias para el funcionamiento del servidor, la caché y la seguridad de la sesión.
          </p>
          <p>
            Al hacer clic en un enlace que te dirija a una tienda externa (como AliExpress o AliExpress Plaza), la plataforma de destino aplicará su propia política de cookies y privacidad conforme a sus términos de servicio.
          </p>
        </section>
      </div>
    </article>
  );
}