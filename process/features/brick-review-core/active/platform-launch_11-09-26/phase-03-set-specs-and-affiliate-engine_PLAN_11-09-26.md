# Phase 3: Set Specs & Cloaked Affiliate Engine — Implementation Plan

Date: 11-09-2026
Status: ACTIVE
Phase: 3 of 5
Work Package: WP-03 & WP-04
Umbrella Plan: `UMBRELLA_PLAN_11-09-26.md`
Specification Reference: `Especificaciones.md` §13 (RF-001, RF-002), §21, §22, §44 (TEST-001, TEST-002), §70

---

## 1. Objective

Implementar los componentes de monetización contextual y la infraestructura de redirección saliente:
1. `SetSpecsCard`: Ficha técnica del modelo (piezas, minifiguras, precio oficial, ratio precio/pieza, complejidad y estado de descatalogación).
2. `AffiliateBox`: Bloque sutil al pie del artículo con llamadas a la acción respetuosas y enlaces `rel="nofollow sponsored"`.
3. Endpoint de salto `/ir/[retailer]/[slug]`: Redirección HTTP 307 temporal, prevención de indexación y registro asíncrono de clics.

---

## 2. Touchpoints & Target Changes

- `src/components/affiliate/set-specs-card.tsx`
- `src/components/affiliate/affiliate-box.tsx`
- `src/app/ir/[retailer]/[slug]/route.ts`
- `src/app/resenas/[slug]/page.tsx` (integración)
- `src/app/ir/[retailer]/[slug]/__tests__/redirect.test.ts`