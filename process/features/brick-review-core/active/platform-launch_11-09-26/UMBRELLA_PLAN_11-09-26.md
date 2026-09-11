# TheBrickReview Platform Launch ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â Umbrella Plan

Date: 11-09-2026
Status: COMPLETED
Feature: brick-review-core
Specification Reference: Especificaciones.md

---

# TheBrickReview ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â Program Goal Charter

North star:
- Desarrollar y desplegar una plataforma web editorial independiente orientada a reseÃƒÆ’Ã‚Â±as analÃƒÆ’Ã‚Â­ticas, guÃƒÆ’Ã‚Â­as de montaje y comparativas de sets LEGOÃƒâ€šÃ‚Â®, donde la monetizaciÃƒÆ’Ã‚Â³n por afiliaciÃƒÆ’Ã‚Â³n se integra de forma contextual y sutil sin perder rigor ni estÃƒÆ’Ã‚Â©tica de revista especializada.

Definition of done:
- AplicaciÃƒÆ’Ã‚Â³n Next.js 15 (App Router) en TypeScript estricto con base de datos relacional Drizzle ORM (`posts`, `lego_sets`, `affiliate_links`, `click_events`).
- MaquetaciÃƒÆ’Ã‚Â³n responsive tipo revista de diseÃƒÆ’Ã‚Â±o (Inter / Merriweather), ancho de lectura 720px y accesibilidad WCAG AA.
- Ficha tÃƒÆ’Ã‚Â©cnica `SetSpecsCard` con metadatos del set (piezas, minifiguras, complejidad, aÃƒÆ’Ã‚Â±o).
- MÃƒÆ’Ã‚Â³dulo `AffiliateBox` contextual al pie de artÃƒÆ’Ã‚Â­culo con enlaces salientes camuflados vÃƒÆ’Ã‚Â­a `/ir/[retailer]/[slug]`, respuesta HTTP 307 y atributos `rel="nofollow sponsored"`.
- Registro asÃƒÆ’Ã‚Â­ncrono de clics por enlace y protecciÃƒÆ’Ã‚Â³n contra bots / rate limiting.
- PÃƒÆ’Ã‚Â¡ginas legales obligatorias (Aviso Legal, PolÃƒÆ’Ã‚Â­tica de Privacidad y DivulgaciÃƒÆ’Ã‚Â³n de AfiliaciÃƒÆ’Ã‚Â³n Fair Play).
- Pipeline de build (`npm run build`) limpio y suite de pruebas unitarias/integraciÃƒÆ’Ã‚Â³n verificada.

What "verified" means (program level):
- CompilaciÃƒÆ’Ã‚Â³n de producciÃƒÆ’Ã‚Â³n (`next build`) exitosa con TypeScript estricto y cero errores de lint.
- Endpoint de redirecciÃƒÆ’Ã‚Â³n `/ir/...` responde con HTTP 307, cabeceras `Location` vÃƒÆ’Ã‚Â¡lidas y registro de evento en base de datos.
- Metadatos Schema.org (`Article` y `Product`) validados.

Scope tiers -> phase mapping:
- Tier 1 (FundaciÃƒÆ’Ã‚Â³n): Fase 1 (Setup, Next.js 15, Tailwind CSS, Drizzle ORM, Esquema DB).
- Tier 2 (DiseÃƒÆ’Ã‚Â±o & Lectura): Fase 2 (Layout editorial, visor de artÃƒÆ’Ã‚Â­culos Markdown, estilos tipogrÃƒÆ’Ã‚Â¡ficos).
- Tier 3 (MonetizaciÃƒÆ’Ã‚Â³n & RedirecciÃƒÆ’Ã‚Â³n): Fase 3 (`SetSpecsCard`, `AffiliateBox`, endpoint `/ir/[retailer]/[slug]`, mÃƒÆ’Ã‚Â©tricas de clics).
- Tier 4 (SEO & Cumplimiento): Fase 4 (Schema.org, OpenGraph, pÃƒÆ’Ã‚Â¡ginas legales obligatorias).
- Tier 5 (Datos & ValidaciÃƒÆ’Ã‚Â³n Final): Fase 5 (Seeds de sets emblemÃƒÆ’Ã‚Â¡ticos, tests de integraciÃƒÆ’Ã‚Â³n y auditorÃƒÆ’Ã‚Â­a Core Web Vitals).

Explicitly out of scope:
- Carrito de compra o pasarela de pagos nativa (no es un e-commerce).
- SincronizaciÃƒÆ’Ã‚Â³n en tiempo real con la API oficial de precios de LEGO (precios introducidos semi-manualmente en MVP).
- Registro de usuarios abierto a lectores (solo redactores y administradores en CMS).

Hard safety constraints:
- PROHIBIDO introducir popups invasivos, banners flotantes publicitarios o botones con copy agresivo ("Ãƒâ€šÃ‚Â¡CÃƒÆ’Ã¢â‚¬Å“MPRALO YA!", "OFERTA", etc.).
- Todo enlace comercial debe incorporar de forma no negociable `rel="nofollow sponsored"` y abrir en nueva pestaÃƒÆ’Ã‚Â±a (`target="_blank"`).
- NingÃƒÆ’Ã‚Âºn artÃƒÆ’Ã‚Â­culo con enlaces de afiliados puede ser publicado sin el disclaimer de afiliaciÃƒÆ’Ã‚Â³n legal estandarizado.

---

## Phase Inventory

| Phase | Plan File | Status | Description |
|---|---|---|---|
| Phase 1 | `phase-01-project-setup-and-db_PLAN_11-09-26.md` | COMPLETED | Setup de Next.js 15, TypeScript, Tailwind, Drizzle ORM y esquema relacional |
| Phase 2 | `phase-02-editorial-layout-and-viewer_PLAN_11-09-26.md` | COMPLETED | Layout editorial estilo revista, visor de Markdown y tipografía |
| Phase 3 | `phase-03-set-specs-and-affiliate-engine_PLAN_11-09-26.md` | COMPLETED | Ficha SetSpecsCard, AffiliateBox y endpoint /ir/... con analítica |
| Phase 4 | `phase-04-seo-and-legal-pages_PLAN_11-09-26.md` | COMPLETED | Schema.org, OpenGraph, Aviso Legal y directiva Fair Play |
| Phase 5 | `phase-05-seeds-and-verification_PLAN_11-09-26.md` | COMPLETED | Seeds de sets emblemáticos, suite de tests y validación final |

---

## Progress Log

- 11-09-2026: Kickoff del programa aprobado. Creado Umbrella Plan y estructura inicial. Arrancando Fase 1.
- 11-09-2026: Fase 1 (Setup & Base de Datos) completada con éxito. Verificada compilación de producción y suite de tests.
- 11-09-2026: Fase 2 (Maquetación Editorial y Visor Markdown) completada. SSG validado para 10 páginas y 5 tests pasando.
- 11-09-2026: Fase 3 (Ficha SetSpecsCard, AffiliateBox y Redirección /ir/...) completada con éxito. Verificados 8 tests (TEST-001, TEST-002).
- 11-09-2026: Fase 4 (SEO Técnico, Schema.org y Páginas Legales) completada con éxito. Verificadas 15 páginas y sitemap/robots.
- 11-09-2026: Fase 5 (Catálogo de Seeds, Buscador Facetado y Pulido MVP) completada con éxito. 18 páginas SSG, 16 tests unitarios pasando y base de datos SQLite poblada. PROGRAMA COMPLETO.