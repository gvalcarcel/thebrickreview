# TheBrickReview Platform Launch — Umbrella Plan

Date: 11-09-2026
Status: IN_PROGRESS
Feature: brick-review-core
Specification Reference: Especificaciones.md

---

# TheBrickReview — Program Goal Charter

North star:
- Desarrollar y desplegar una plataforma web editorial independiente orientada a reseñas analíticas, guías de montaje y comparativas de sets LEGO®, donde la monetización por afiliación se integra de forma contextual y sutil sin perder rigor ni estética de revista especializada.

Definition of done:
- Aplicación Next.js 15 (App Router) en TypeScript estricto con base de datos relacional Drizzle ORM (`posts`, `lego_sets`, `affiliate_links`, `click_events`).
- Maquetación responsive tipo revista de diseño (Inter / Merriweather), ancho de lectura 720px y accesibilidad WCAG AA.
- Ficha técnica `SetSpecsCard` con metadatos del set (piezas, minifiguras, complejidad, año).
- Módulo `AffiliateBox` contextual al pie de artículo con enlaces salientes camuflados vía `/ir/[retailer]/[slug]`, respuesta HTTP 307 y atributos `rel="nofollow sponsored"`.
- Registro asíncrono de clics por enlace y protección contra bots / rate limiting.
- Páginas legales obligatorias (Aviso Legal, Política de Privacidad y Divulgación de Afiliación Fair Play).
- Pipeline de build (`npm run build`) limpio y suite de pruebas unitarias/integración verificada.

What "verified" means (program level):
- Compilación de producción (`next build`) exitosa con TypeScript estricto y cero errores de lint.
- Endpoint de redirección `/ir/...` responde con HTTP 307, cabeceras `Location` válidas y registro de evento en base de datos.
- Metadatos Schema.org (`Article` y `Product`) validados.

Scope tiers -> phase mapping:
- Tier 1 (Fundación): Fase 1 (Setup, Next.js 15, Tailwind CSS, Drizzle ORM, Esquema DB).
- Tier 2 (Diseño & Lectura): Fase 2 (Layout editorial, visor de artículos Markdown, estilos tipográficos).
- Tier 3 (Monetización & Redirección): Fase 3 (`SetSpecsCard`, `AffiliateBox`, endpoint `/ir/[retailer]/[slug]`, métricas de clics).
- Tier 4 (SEO & Cumplimiento): Fase 4 (Schema.org, OpenGraph, páginas legales obligatorias).
- Tier 5 (Datos & Validación Final): Fase 5 (Seeds de sets emblemáticos, tests de integración y auditoría Core Web Vitals).

Explicitly out of scope:
- Carrito de compra o pasarela de pagos nativa (no es un e-commerce).
- Sincronización en tiempo real con la API oficial de precios de LEGO (precios introducidos semi-manualmente en MVP).
- Registro de usuarios abierto a lectores (solo redactores y administradores en CMS).

Hard safety constraints:
- PROHIBIDO introducir popups invasivos, banners flotantes publicitarios o botones con copy agresivo ("¡CÓMPRALO YA!", "OFERTA", etc.).
- Todo enlace comercial debe incorporar de forma no negociable `rel="nofollow sponsored"` y abrir en nueva pestaña (`target="_blank"`).
- Ningún artículo con enlaces de afiliados puede ser publicado sin el disclaimer de afiliación legal estandarizado.

---

## Phase Inventory

| Phase | Plan File | Status | Description |
|---|---|---|---|
| Phase 1 | `phase-01-project-setup-and-db_PLAN_11-09-26.md` | ACTIVE | Setup de Next.js 15, TypeScript, Tailwind, Drizzle ORM y esquema relacional |
| Phase 2 | `phase-02-editorial-layout-and-viewer_PLAN_11-09-26.md` | PENDING | Layout editorial estilo revista, visor de Markdown y tipografía |
| Phase 3 | `phase-03-set-specs-and-affiliate-engine_PLAN_11-09-26.md` | PENDING | Ficha SetSpecsCard, AffiliateBox y endpoint /ir/... con analítica |
| Phase 4 | `phase-04-seo-and-legal-pages_PLAN_11-09-26.md` | PENDING | Schema.org, OpenGraph, Aviso Legal y directiva Fair Play |
| Phase 5 | `phase-05-seeds-and-verification_PLAN_11-09-26.md` | PENDING | Seeds de sets emblemáticos, suite de tests y validación final |

---

## Progress Log

- 11-09-2026: Kickoff del programa aprobado. Creado Umbrella Plan y estructura inicial. Arrancando Fase 1.

- 11-09-2026: Fase 1 (Setup & Base de Datos) completada con éxito. Verificada compilación de producción y suite de tests.