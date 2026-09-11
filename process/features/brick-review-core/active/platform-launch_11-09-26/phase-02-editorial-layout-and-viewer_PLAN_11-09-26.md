# Phase 2: Editorial Layout, Typography & Markdown Viewer — Implementation Plan

Date: 11-09-2026
Status: ACTIVE
Phase: 2 of 5
Work Package: WP-02
Umbrella Plan: `UMBRELLA_PLAN_11-09-26.md`
Specification Reference: `Especificaciones.md` §12, §19, §24-§27, §54 (WP-02), §70

---

## 1. Objective

Construir la experiencia de lectura editorial de **TheBrickReview**, implementando el motor de renderizado Markdown a HTML para artículos y reseñas, la página dinámica de reseña (`/resenas/[slug]`), el archivo de categorías por línea temática (`/categorias/[categoria]`), y los componentes de soporte de lectura (tabla de contenidos, pros y contras, valoración técnica de montaje).

---

## 2. Touchpoints & Target Changes

### Dependencies & Setup
- Instalar `marked` para parseo seguro y de alto rendimiento de Markdown en Server Components.

### Components (`src/components/blog/`)
- `article-header.tsx`: Cabecera editorial con temática, tiempo de lectura, fecha formateada y subtítulo.
- `article-content.tsx`: Renderizador seguro de contenido Markdown estilizado con la tipografía de la revista (ancho 720px, citas con borde ámbar, tablas contrastadas).
- `table-of-contents.tsx`: Índice flotante/lateral con navegación suave por las secciones del análisis.
- `pros-cons-card.tsx`: Desglose analítico de aspectos positivos y puntos mejorables del set.
- `build-verdict-card.tsx`: Puntuaciones de montaje (técnicas de ensamblaje, rigidez estructural, ratio precio/pieza).

### Pages (`src/app/`)
- `src/app/resenas/[slug]/page.tsx`: Página completa del análisis del set (Server Component con generación estática / ISR).
- `src/app/categorias/[categoria]/page.tsx`: Vista de catálogo filtrada por línea temática (Icons, Star Wars, Technic, Ideas, etc.).

---

## 3. Verification Evidence & Criteria

1. `npm test`: Test unitario que verifique el renderizado seguro de Markdown, generación de slugs de encabezados y extracción de índice de contenidos.
2. `npm run build`: Compilación de producción limpia con rutas estáticas dinámicas (`/resenas/[slug]`, `/categorias/[categoria]`).
3. `codegraph sync`: Sincronización del grafo de llamadas y dependencias de los nuevos componentes.

---

## 4. Execution Steps

1. Instalar dependencias adicionales de Markdown (`marked`).
2. Crear componentes editoriales en `src/components/blog/`:
   - `article-header.tsx`
   - `article-content.tsx`
   - `table-of-contents.tsx`
   - `pros-cons-card.tsx`
   - `build-verdict-card.tsx`
3. Implementar servicio de consulta de posts y sets en `src/lib/posts.ts`.
4. Implementar rutas dinámicas:
   - `src/app/resenas/[slug]/page.tsx`
   - `src/app/categorias/[categoria]/page.tsx`
5. Crear suite de tests `src/components/blog/__tests__/blog.test.ts`.
6. Ejecutar tests y build de producción.
7. Generar reporte de cierre de fase (`phase-02-editorial-layout-and-viewer_REPORT_11-09-26.md`).
