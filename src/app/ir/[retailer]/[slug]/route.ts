import { NextResponse } from "next/server";
import { db } from "@/db";
import { affiliateLinks, clickEvents } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { SAMPLE_SETS } from "@/lib/posts";

interface RouteParams {
  params: Promise<{
    retailer: string;
    slug: string;
  }>;
}

export async function GET(request: Request, context: RouteParams) {
  const { retailer, slug } = await context.params;
  const referer = request.headers.get("referer") || undefined;
  const userAgent = request.headers.get("user-agent") || undefined;

  let destinationUrl: string | null = null;
  let linkId: string | null = null;

  try {
    // 1. Intentar buscar en base de datos Drizzle
    const dbResult = await db
      .select()
      .from(affiliateLinks)
      .where(and(eq(affiliateLinks.internalSlug, slug), eq(affiliateLinks.isActive, true)))
      .limit(1);

    if (dbResult.length > 0) {
      destinationUrl = dbResult[0].destinationUrl;
      linkId = dbResult[0].id;
    }
  } catch {
    // Si la DB local no está inicializada aún, recurrir a los enlaces de muestra
  }

  // Fallback a enlaces en memoria si no se encontró en DB
  if (!destinationUrl) {
    for (const set of Object.values(SAMPLE_SETS)) {
      const match = set.affiliateLinks?.find((l) => l.internalSlug === slug && l.isActive);
      if (match) {
        destinationUrl = match.destinationUrl;
        linkId = match.id;
        break;
      }
    }
  }

  // Si el enlace no existe, redirigir a la portada con parámetro de búsqueda
  if (!destinationUrl) {
    return NextResponse.redirect(new URL(`/?not_found_affiliate=${slug}`, request.url), {
      status: 302,
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  // 2. Registro asíncrono de clics sin bloquear la redirección (< 100 ms)
  if (linkId) {
    const finalLinkId = linkId;
    // Ejecución no bloqueante
    (async () => {
      try {
        await db.insert(clickEvents).values({
          id: `click-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          linkId: finalLinkId,
          referer,
          userAgent,
        });
      } catch {
        // En caso de fallo de logging, no interrumpir la navegación del usuario
      }
    })();
  }

  // 3. Respuesta HTTP 307 (Temporary Redirect) con cabeceras de cumplimiento y SEO
  return NextResponse.redirect(destinationUrl, {
    status: 307,
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "X-Robots-Tag": "noindex, nofollow",
      "Referrer-Policy": "no-referrer-when-downgrade",
    },
  });
}