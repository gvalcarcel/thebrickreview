# Phase 4: Technical SEO, Schema.org & Mandatory Legal Pages — Implementation Plan

Date: 11-09-2026
Status: ACTIVE
Phase: 4 of 5
Work Package: WP-05
Umbrella Plan: `UMBRELLA_PLAN_11-09-26.md`
Specification Reference: `Especificaciones.md` §6.1, §7, §14 (RN-001), §48, §54 (WP-05), §70

---

## 1. Objective

Implementar el SEO técnico estructurado y el cumplimiento legal obligatorio para el lanzamiento editorial de **TheBrickReview**:
1. Marcado enriquecido Schema.org JSON-LD para Google Search (`Article` y `Product` con rating).
2. Generadores automáticos de `sitemap.xml` y `robots.txt` con exclusión de rastreo para `/ir/`.
3. Páginas legales obligatorias: Aviso Legal (con directiva Fair Play de LEGO), Divulgación de Afiliados y Política de Privacidad/Cookies RGPD.

---

## 2. Touchpoints & Target Changes

- `src/components/seo/schema-json-ld.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/legal/aviso-legal/page.tsx`
- `src/app/legal/afiliacion/page.tsx`
- `src/app/legal/privacidad/page.tsx`
- `src/app/resenas/[slug]/page.tsx` (inyección de Schema JSON-LD)
- `src/components/seo/__tests__/seo.test.ts`