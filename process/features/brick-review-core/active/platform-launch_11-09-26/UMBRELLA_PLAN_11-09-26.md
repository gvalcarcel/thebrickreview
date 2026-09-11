# TheBrickReview Platform Launch Ã¢â‚¬â€ Umbrella Plan

Date: 11-09-2026
Status: IN_PROGRESS
Feature: brick-review-core
Specification Reference: Especificaciones.md

---

# TheBrickReview Ã¢â‚¬â€ Program Goal Charter

North star:
- Desarrollar y desplegar una plataforma web editorial independiente orientada a reseÃƒÂ±as analÃƒÂ­ticas, guÃƒÂ­as de montaje y comparativas de sets LEGOÃ‚Â®, donde la monetizaciÃƒÂ³n por afiliaciÃƒÂ³n se integra de forma contextual y sutil sin perder rigor ni estÃƒÂ©tica de revista especializada.

Definition of done:
- AplicaciÃƒÂ³n Next.js 15 (App Router) en TypeScript estricto con base de datos relacional Drizzle ORM (`posts`, `lego_sets`, `affiliate_links`, `click_events`).
- MaquetaciÃƒÂ³n responsive tipo revista de diseÃƒÂ±o (Inter / Merriweather), ancho de lectura 720px y accesibilidad WCAG AA.
- Ficha tÃƒÂ©cnica `SetSpecsCard` con metadatos del set (piezas, minifiguras, complejidad, aÃƒÂ±o).
- MÃƒÂ³dulo `AffiliateBox` contextual al pie de artÃƒÂ­culo con enlaces salientes camuflados vÃƒÂ­a `/ir/[retailer]/[slug]`, respuesta HTTP 307 y atributos `rel="nofollow sponsored"`.
- Registro asÃƒÂ­ncrono de clics por enlace y protecciÃƒÂ³n contra bots / rate limiting.
- PÃƒÂ¡ginas legales obligatorias (Aviso Legal, PolÃƒÂ­tica de Privacidad y DivulgaciÃƒÂ³n de AfiliaciÃƒÂ³n Fair Play).
- Pipeline de build (`npm run build`) limpio y suite de pruebas unitarias/integraciÃƒÂ³n verificada.

What "verified" means (program level):
- CompilaciÃƒÂ³n de producciÃƒÂ³n (`next build`) exitosa con TypeScript estricto y cero errores de lint.
- Endpoint de redirecciÃƒÂ³n `/ir/...` responde con HTTP 307, cabeceras `Location` vÃƒÂ¡lidas y registro de evento en base de datos.
- Metadatos Schema.org (`Article` y `Product`) validados.

Scope tiers -> phase mapping:
- Tier 1 (FundaciÃƒÂ³n): Fase 1 (Setup, Next.js 15, Tailwind CSS, Drizzle ORM, Esquema DB).
- Tier 2 (DiseÃƒÂ±o & Lectura): Fase 2 (Layout editorial, visor de artÃƒÂ­culos Markdown, estilos tipogrÃƒÂ¡ficos).
- Tier 3 (MonetizaciÃƒÂ³n & RedirecciÃƒÂ³n): Fase 3 (`SetSpecsCard`, `AffiliateBox`, endpoint `/ir/[retailer]/[slug]`, mÃƒÂ©tricas de clics).
- Tier 4 (SEO & Cumplimiento): Fase 4 (Schema.org, OpenGraph, pÃƒÂ¡ginas legales obligatorias).
- Tier 5 (Datos & ValidaciÃƒÂ³n Final): Fase 5 (Seeds de sets emblemÃƒÂ¡ticos, tests de integraciÃƒÂ³n y auditorÃƒÂ­a Core Web Vitals).

Explicitly out of scope:
- Carrito de compra o pasarela de pagos nativa (no es un e-commerce).
- SincronizaciÃƒÂ³n en tiempo real con la API oficial de precios de LEGO (precios introducidos semi-manualmente en MVP).
- Registro de usuarios abierto a lectores (solo redactores y administradores en CMS).

Hard safety constraints:
- PROHIBIDO introducir popups invasivos, banners flotantes publicitarios o botones con copy agresivo ("Ã‚Â¡CÃƒâ€œMPRALO YA!", "OFERTA", etc.).
- Todo enlace comercial debe incorporar de forma no negociable `rel="nofollow sponsored"` y abrir en nueva pestaÃƒÂ±a (`target="_blank"`).
- NingÃƒÂºn artÃƒÂ­culo con enlaces de afiliados puede ser publicado sin el disclaimer de afiliaciÃƒÂ³n legal estandarizado.

---

## Phase Inventory

| Phase | Plan File | Status | Description |
|---|---|---|---|
| Phase 1 | `phase-01-project-setup-and-db_PLAN_11-09-26.md` | ACTIVE | Setup de Next.js 15, TypeScript, Tailwind, Drizzle ORM y esquema relacional |
| Phase 2 | `phase-02-editorial-layout-and-viewer_PLAN_11-09-26.md` | PENDING | Layout editorial estilo revista, visor de Markdown y tipografÃƒÂ­a |
| Phase 3 | `phase-03-set-specs-and-affiliate-engine_PLAN_11-09-26.md` | PENDING | Ficha SetSpecsCard, AffiliateBox y endpoint /ir/... con analÃƒÂ­tica |
| Phase 4 | `phase-04-seo-and-legal-pages_PLAN_11-09-26.md` | PENDING | Schema.org, OpenGraph, Aviso Legal y directiva Fair Play |
| Phase 5 | `phase-05-seeds-and-verification_PLAN_11-09-26.md` | PENDING | Seeds de sets emblemÃƒÂ¡ticos, suite de tests y validaciÃƒÂ³n final |

---

## Progress Log

- 11-09-2026: Kickoff del programa aprobado. Creado Umbrella Plan y estructura inicial. Arrancando Fase 1.

- 11-09-2026: Fase 1 (Setup & Base de Datos) completada con ÃƒÂ©xito. Verificada compilaciÃƒÂ³n de producciÃƒÂ³n y suite de tests.
- 11-09-2026: Fase 2 (MaquetaciÃ³n Editorial y Visor Markdown) completada. SSG validado para 10 pÃ¡ginas y 5 tests pasando.
- 11-09-2026: Fase 3 (Ficha SetSpecsCard, AffiliateBox y Redirección /ir/...) completada con éxito. Verificados 8 tests (TEST-001, TEST-002).