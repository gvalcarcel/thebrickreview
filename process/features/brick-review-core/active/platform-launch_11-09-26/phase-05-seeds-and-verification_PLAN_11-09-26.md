# Phase 5: Catalog Seeds, Faceted Search & Final MVP Polish — Implementation Plan

Date: 11-09-2026
Status: ACTIVE
Phase: 5 of 5
Work Package: WP-06, Seeds & Final Verification
Umbrella Plan: `UMBRELLA_PLAN_11-09-26.md`
Specification Reference: `Especificaciones.md` §12, §45, §54 (WP-06), §61, §62, §66, §67

---

## 1. Objective

Completar el MVP operativo de **TheBrickReview**:
1. Crear el catálogo fundacional de 5 sets emblemáticos con artículos de reseña técnica y enlaces de afiliación en `src/lib/posts.ts` y script de base de datos `src/db/seed.ts`.
2. Implementar el buscador interactivo y filtro facetado por dificultad, colección y estado (`SearchFilter`).
3. Integrar el buscador en la portada (`src/app/page.tsx`).
4. Verificar tests unitarios completos, compilación de producción y sincronización de CodeGraph.
5. Emitir el reporte de cierre del programa.

---

## 2. Touchpoints & Target Changes

- `src/db/seed.ts`: Script para poblar la base de datos local SQLite con 5 sets y enlaces.
- `src/lib/posts.ts`: Catálogo enriquecido con los 5 sets analíticos.
- `src/components/blog/search-filter.tsx`: Buscador interactivo y filtros facetados.
- `src/app/page.tsx`: Portada actualizada con buscador integrado y catálogo completo.
- `src/components/blog/__tests__/search.test.ts`: Tests de filtrado y búsqueda facetada.
- `package.json`: Script `db:seed`.