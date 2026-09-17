import { NextResponse } from "next/server";
import { getAffiliateLinkBySlug } from "@/lib/posts";

interface RouteParams {
  params: Promise<{
    retailer: string;
    slug: string;
  }>;
}

export async function GET(request: Request, context: RouteParams) {
  const { slug } = await context.params;

  let destinationUrl: string | null = null;
  let linkId: string | null = null;

  // 1. Si existe una base de datos remota configurada (ej. Turso / LibSQL en prod), intentar consultar
  if (process.env.DATABASE_URL && !process.env.DATABASE_URL.startsWith("file:")) {
    try {
      const { db } = await import("@/db");
      const { affiliateLinks } = await import("@/db/schema");
      const { eq, and } = await import("drizzle-orm");

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
      // Ignorar fallo de DB y proceder con fallback
    }
  }

  // 2. Lookup ultra-rápido en catálogo estático en memoria
  if (!destinationUrl) {
    const memoryLink = getAffiliateLinkBySlug(slug);
    if (memoryLink) {
      destinationUrl = memoryLink.destinationUrl;
      linkId = memoryLink.id;
    }
  }

  // 3. Fallback de búsqueda suave si el slug es ligeramente diferente
  if (!destinationUrl) {
    const cleanSlug = slug.toLowerCase().replace(/^aliexpress-(plaza-)?/, "").replace(/-\d+$/, "");
    const fallbackLink = getAffiliateLinkBySlug(`aliexpress-${cleanSlug}`);
    if (fallbackLink) {
      destinationUrl = fallbackLink.destinationUrl;
      linkId = fallbackLink.id;
    }
  }

  // 4. Si el enlace no existe en absoluto, redirigir a la portada con parámetro
  if (!destinationUrl) {
    return NextResponse.redirect(new URL(`/?not_found_affiliate=${slug}`, request.url), {
      status: 302,
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  // 5. Opcional: Logging asíncrono no bloqueante si hay DB remota
  if (linkId && process.env.DATABASE_URL && !process.env.DATABASE_URL.startsWith("file:")) {
    const finalLinkId = linkId;
    const referer = request.headers.get("referer") || undefined;
    const userAgent = request.headers.get("user-agent") || undefined;

    (async () => {
      try {
        const { db } = await import("@/db");
        const { clickEvents } = await import("@/db/schema");
        await db.insert(clickEvents).values({
          id: `click-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          linkId: finalLinkId,
          referer,
          userAgent,
        });
      } catch {
        // En caso de fallo de logging, no interrumpir la navegación
      }
    })();
  }

  // 6. Respuesta HTTP 307 (Temporary Redirect) con cabeceras de cumplimiento y SEO
  return NextResponse.redirect(destinationUrl, {
    status: 307,
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "X-Robots-Tag": "noindex, nofollow",
      "Referrer-Policy": "no-referrer-when-downgrade",
    },
  });
}