# TheBrickReview Platform Launch â€” Umbrella Plan

Date: 11-09-2026
Status: IN_PROGRESS
Feature: brick-review-core
Specification Reference: Especificaciones.md

---

# TheBrickReview â€” Program Goal Charter

North star:
- Desarrollar y desplegar una plataforma web editorial independiente orientada a reseÃ±as analÃ­ticas, guÃ­as de montaje y comparativas de sets LEGOÂ®, donde la monetizaciÃ³n por afiliaciÃ³n se integra de forma contextual y sutil sin perder rigor ni estÃ©tica de revista especializada.

Definition of done:
- AplicaciÃ³n Next.js 15 (App Router) en TypeScript estricto con base de datos relacional Drizzle ORM (`posts`, `lego_sets`, `affiliate_links`, `click_events`).
- MaquetaciÃ³n responsive tipo revista de diseÃ±o (Inter / Merriweather), ancho de lectura 720px y accesibilidad WCAG AA.
- Ficha tÃ©cnica `SetSpecsCard` con metadatos del set (piezas, minifiguras, complejidad, aÃ±o).
- MÃ³dulo `AffiliateBox` contextual al pie de artÃ­culo con enlaces salientes camuflados vÃ­a `/ir/[retailer]/[slug]`, respuesta HTTP 307 y atributos `rel="nofollow sponsored"`.
- Registro asÃ­ncrono de clics por enlace y protecciÃ³n contra bots / rate limiting.
- PÃ¡ginas legales obligatorias (Aviso Legal, PolÃ­tica de Privacidad y DivulgaciÃ³n de AfiliaciÃ³n Fair Play).
- Pipeline de build (`npm run build`) limpio y suite de pruebas unitarias/integraciÃ³n verificada.

What "verified" means (program level):
- CompilaciÃ³n de producciÃ³n (`next build`) exitosa con TypeScript estricto y cero errores de lint.
- Endpoint de redirecciÃ³n `/ir/...` responde con HTTP 307, cabeceras `Location` vÃ¡lidas y registro de evento en base de datos.
- Metadatos Schema.org (`Article` y `Product`) validados.

Scope tiers -> phase mapping:
- Tier 1 (FundaciÃ³n): Fase 1 (Setup, Next.js 15, Tailwind CSS, Drizzle ORM, Esquema DB).
- Tier 2 (DiseÃ±o & Lectura): Fase 2 (Layout editorial, visor de artÃ­culos Markdown, estilos tipogrÃ¡ficos).
- Tier 3 (MonetizaciÃ³n & RedirecciÃ³n): Fase 3 (`SetSpecsCard`, `AffiliateBox`, endpoint `/ir/[retailer]/[slug]`, mÃ©tricas de clics).
- Tier 4 (SEO & Cumplimiento): Fase 4 (Schema.org, OpenGraph, pÃ¡ginas legales obligatorias).
- Tier 5 (Datos & ValidaciÃ³n Final): Fase 5 (Seeds de sets emblemÃ¡ticos, tests de integraciÃ³n y auditorÃ­a Core Web Vitals).

Explicitly out of scope:
- Carrito de compra o pasarela de pagos nativa (no es un e-commerce).
- SincronizaciÃ³n en tiempo real con la API oficial de precios de LEGO (precios introducidos semi-manualmente en MVP).
- Registro de usuarios abierto a lectores (solo redactores y administradores en CMS).

Hard safety constraints:
- PROHIBIDO introducir popups invasivos, banners flotantes publicitarios o botones con copy agresivo ("Â¡CÃ“MPRALO YA!", "OFERTA", etc.).
- Todo enlace comercial debe incorporar de forma no negociable `rel="nofollow sponsored"` y abrir en nueva pestaÃ±a (`target="_blank"`).
- NingÃºn artÃ­culo con enlaces de afiliados puede ser publicado sin el disclaimer de afiliaciÃ³n legal estandarizado.

---

## Phase Inventory

| Phase | Plan File | Status | Description |
|---|---|---|---|
| Phase 1 | `phase-01-project-setup-and-db_PLAN_11-09-26.md` | ACTIVE | Setup de Next.js 15, TypeScript, Tailwind, Drizzle ORM y esquema relacional |
| Phase 2 | `phase-02-editorial-layout-and-viewer_PLAN_11-09-26.md` | PENDING | Layout editorial estilo revista, visor de Markdown y tipografÃ­a |
| Phase 3 | `phase-03-set-specs-and-affiliate-engine_PLAN_11-09-26.md` | PENDING | Ficha SetSpecsCard, AffiliateBox y endpoint /ir/... con analÃ­tica |
| Phase 4 | `phase-04-seo-and-legal-pages_PLAN_11-09-26.md` | PENDING | Schema.org, OpenGraph, Aviso Legal y directiva Fair Play |
| Phase 5 | `phase-05-seeds-and-verification_PLAN_11-09-26.md` | PENDING | Seeds de sets emblemÃ¡ticos, suite de tests y validaciÃ³n final |

---

## Progress Log

- 11-09-2026: Kickoff del programa aprobado. Creado Umbrella Plan y estructura inicial. Arrancando Fase 1.

- 11-09-2026: Fase 1 (Setup & Base de Datos) completada con Ã©xito. Verificada compilaciÃ³n de producciÃ³n y suite de tests.
- 11-09-2026: Fase 2 (Maquetación Editorial y Visor Markdown) completada. SSG validado para 10 páginas y 5 tests pasando.