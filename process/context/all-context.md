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

## Current Catalog Inventory (17 Active Sets)

1. `75192`: Millennium Falcon UCS (Star Wars) - 7,541 pcs
2. `10300`: Back to the Future DeLorean (Icons) - 1,872 pcs
3. `21330`: Home Alone McCallister House (Ideas) - 3,955 pcs
4. `11374`: Arcade Pinball Machine (Icons) - 3,042 pcs
5. `40926`: SEGA Genesis / Mega Drive Console (Icons) - 1,228 pcs
6. `21368`: Peanuts: Snoopy's Doghouse (Ideas) - 964 pcs
7. `72051`: Donkey Kong Arcade Machine (Icons) - 1,367 pcs
8. `76271`: Batman: The Animated Series Gotham City (DC) - 4,210 pcs
9. `43263`: Beauty and the Beast Castle (Disney) - 2,916 pcs
10. `43014`: Scuderia Ferrari HP Charles Leclerc Helmet (Icons) - 886 pcs
11. `75442`: The Mandalorian's N-1 Starfighter UCS (Star Wars) - 1,809 pcs
12. `43015`: Lionel Messi – Soccer Legend (Editions) - 958 pcs
13. `10365`: Captain Jack Sparrow's Pirate Ship (Icons) - 2,862 pcs
14. `10303`: Loop Coaster (Icons) - 3,756 pcs
15. `10333`: The Lord of the Rings: Barad-dûr (Icons) - 5,471 pcs
16. `75419`: Death Star (Star Wars) - 9,023 pcs
17. `43011`: Lionel Messi – Soccer Highlights (Editions) - 500 pcs

*Retired/Withdrawn from active radar:* `10497` (Galaxy Explorer), `42143` (Ferrari Daytona SP3), `21325` (Medieval Blacksmith).

---

## Scan Metadata

- Generated: 11-09-2026
- Last Catalog Update: 12-09-2026 (Added 10303 Loop Coaster, 10333 Barad-dûr, 75419 Death Star, 43011 Messi Highlights)
- Mode: RIPER-5 Phase Program
- Specification: `Especificaciones.md`

---

## Official Build Photography & Image Extraction Workflow

For existing and all future reviews, each Lego set features official high-definition build and assembly photography:
- `imageUrl`: Primary high-resolution assembled model hero view.
- `galleryImages`: Array of `{ url, caption, alt? }` featuring internal gearboxes, frame rigidity, play features, and subassemblies extracted directly from the official LEGO product page.
- Rendered via `<BuildGallery />` on review pages and previewed on `<SetSpecsCard />` and homepage cards.

### CLI Automation for Future Sets
To extract, verify, and format official build images for any new LEGO set:
```bash
node scripts/extract_lego_images.mjs <setNumber> <legoProductUrl>
```
This tool queries the LEGO CDN, filters high-res assets (`Prod`, `alt`, `SEC0`, `SKROLL`), verifies live HTTP 200 availability via parallel requests, and prints the formatted `galleryImages` block for `scripts/write_posts.mjs`.
