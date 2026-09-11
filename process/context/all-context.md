# TheBrickReview - All Context

Last updated: 11-09-2026

This file is the root context entrypoint for the repo.

Use it for two things:
1. quick routing to the right context pack or root file
2. broad architecture and repository understanding

Start here before loading deeper context files.

---

## How This File Works (the `all-*.md` Convention)

Every `process/context/` directory has one `all-*.md` entrypoint that acts as an attachable quick router for that domain. This root file (`all-context.md`) is the top-level router. Context groups each have their own `all-{group}.md` entrypoint.

**The pattern:**
```
process/context/
  all-context.md                      <-- THIS FILE: root router
  planning/
    all-planning.md                   <-- group router for planning
  tests/
    all-tests.md                      <-- group router for tests
```

---

## Quick Start

For most substantial tasks:
1. read this file first
2. choose the smallest relevant root file or context group from the tables below
3. only then load deeper files

---

## Current Root Entry Points

| File | Read when |
|---|---|
| `process/context/all-context.md` | any substantial planning, research, review, or implementation task |
| `process/context/planning/all-planning.md` | creating or updating implementation plans |
| `process/context/tests/all-tests.md` | testing or verification workflows |
| `Especificaciones.md` | authoritative 70-section technical specification & functional requirements |

---

## Task Routing Table

| If the task involves... | Start with | Then load |
|---|---|---|
| Product requirements & specifications | `Especificaciones.md` | Sections relevant to the work package |
| Architecture or stack questions | `process/context/all-context.md` | `Especificaciones.md` §18, §19, §21 |
| Database schema & models | `process/context/all-context.md` | `Especificaciones.md` §21 (Posts, LegoSets, AffiliateLinks, ClickEvents) |
| Editorial design & UI styling | `process/context/all-context.md` | `Especificaciones.md` §24, §25, §26, §70 |
| Affiliate cloaked redirect & tracking | `process/context/all-context.md` | `Especificaciones.md` §13 (RF-002), §22, §44 |
| Testing & validation | `process/context/tests/all-tests.md` | `Especificaciones.md` §43, §44 |
| Creating a new plan | `process/context/planning/all-planning.md` | `process/development-protocols/phase-programs.md` |

---

## Product Identity & Core Purpose

- **Product**: **TheBrickReview** (Plataforma editorial y revista digital para constructores y coleccionistas de LEGO® / AFOLs).
- **Core Value Proposition**: Reseñas técnicas exhaustivas (experiencia de montaje, ratio precio/pieza, análisis de dificultad) con integración orgánica y justificada de enlaces de afiliados.
- **Strict Rule of Thumb**: Prohibido utilizar copys comerciales agresivos ("¡Cómpralo ya!", banners parpadeantes o estilo tienda de ofertas). El contenido debe percibirse siempre como una publicación editorial independiente de prestigio.

---

## Technology Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript (estricto)
- **Styling**: Tailwind CSS (tipografía cuidada: Inter / Merriweather / Serif humanista para cuerpo de texto)
- **Database**: Relacional (SQLite en desarrollo local / PostgreSQL en producción) gestionado con Drizzle ORM
- **Routing & Affiliate Redirects**: Next.js Route Handlers (`/ir/[retailer]/[slug]`) con respuesta HTTP 307 y cabeceras `rel="nofollow sponsored"`
- **Content Format**: Markdown / MDX con metadatos Frontmatter
- **Testing**: Vitest / Playwright
- **Runtime**: Node.js >= 22 (detectado v24.13)

---

## Key Patterns and Conventions

1. **Editorial First**: Ningún botón comercial precede al análisis técnico del modelo.
2. **Link Cloaking**: Enmascaramiento interno de URLs hacia afiliados mediante `/ir/{retailer}/{slug}` con registro asíncrono de clics.
3. **Retired Sets Flag**: Si un set está descatalogado (`is_retired = true`), el CTA se adapta a *"Buscar en mercado de coleccionismo"* o tiendas de segunda mano.
4. **Legal Compliance**: Disclaimer de afiliación obligatorio en el pie de página y aviso en cada artículo que incluya enlaces monetizados.
5. **Code Style**: Nombres de archivo en `kebab-case`, componentes en `PascalCase`, funciones en `camelCase`.

---

## Repository Structure (Target Layout)

```text
TheBrickReview/
├── src/
│   ├── app/
│   │   ├── (public)/                 -- Portada, archivo de categorías, post de reseña
│   │   │   ├── page.tsx
│   │   │   ├── resenas/[slug]/page.tsx
│   │   │   └── categorias/[categoria]/page.tsx
│   │   ├── (admin)/                  -- Panel de redacción
│   │   └── ir/[retailer]/[slug]/     -- Redirección de afiliados
│   ├── components/
│   │   ├── ui/                       -- Botones, badges, tarjetas base
│   │   ├── blog/                     -- Layout de lectura, tabla de contenidos, galerías
│   │   └── affiliate/                -- SetSpecsCard, AffiliateBox, AvailabilityBadge
│   ├── db/                           -- Esquema Drizzle, cliente, migraciones
│   ├── lib/                          -- Utilidades de fecha, slug, formateo de piezas
│   └── types/                        -- Definiciones TypeScript compartidas
├── process/                          -- Sistema RIPER-5 de planes, protocolos y contexto
├── .agents/                          -- Skills y reglas compartidas
├── .claude/                          -- Agentes y configuración Claude Code
├── .codex/                           -- Agentes y configuración Codex
├── .codegraph/                       -- Índice de conocimiento CodeGraph
└── Especificaciones.md               -- Especificación técnica maestra de 70 apartados
```

---

## Scan Metadata

- Generated: 11-09-2026
- Mode: RIPER-5 Phase Program
- Specification: `Especificaciones.md`
