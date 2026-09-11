# Phase 1: Project Setup & Database Architecture — Implementation Plan

Date: 11-09-2026
Status: ACTIVE
Phase: 1 of 5
Work Package: WP-01
Umbrella Plan: `UMBRELLA_PLAN_11-09-26.md`
Specification Reference: `Especificaciones.md` §18, §19, §21, §54 (WP-01)

---

## 1. Objective

Inicializar el proyecto base con Next.js 15 (App Router), TypeScript en modo estricto, Tailwind CSS, y establecer la capa de persistencia relacional con Drizzle ORM implementando el modelo de datos de la plataforma (`posts`, `lego_sets`, `affiliate_links`, `click_events`).

---

## 2. Touchpoints & Target Changes

### Package & Configuration
- `package.json`: Scripts de build, desarrollo, linting y migraciones con Drizzle Kit.
- `tsconfig.json`: TypeScript estricto con alias `@/*` hacia `./src/*`.
- `next.config.ts`: Configuración de Next.js (optimización de imágenes WebP/AVIF, cabeceras de seguridad).
- `drizzle.config.ts`: Configuración de Drizzle ORM para SQLite/LibSQL local (desarrollo rápido sin dependencias externas pesadas, compatible con despliegue edge/Turso o PostgreSQL).
- `postcss.config.mjs` y `tailwind.config.ts`: Configuración de estilos y tipografías editoriales.

### Source Code
- `src/app/globals.css`: Estilos globales, variables de color neutro/cálido y reseteo base.
- `src/app/layout.tsx`: Root Layout con fuentes optimizadas y metadatos base.
- `src/app/page.tsx`: Página inicial de bienvenida editorial / placeholder técnico.
- `src/db/schema.ts`: Definición de tablas (`posts`, `legoSets`, `affiliateLinks`, `clickEvents`).
- `src/db/index.ts`: Inicialización del cliente Drizzle y exportación de db.
- `src/lib/utils.ts`: Utilidades comunes (cn helper para Tailwind, formateadores de precio y piezas).
- `src/types/index.ts`: Tipos inferidos de Drizzle y contratos del dominio.

---

## 3. Verification Evidence & Criteria

1. `npm run build`: Compilación de producción sin errores de tipos ni warnings de Next.js.
2. `npm run test`: Test unitario que valida la creación e inserción en la base de datos de un set de prueba y un enlace de afiliado.
3. CodeGraph: Ejecución de `codegraph sync` y comprobación de indexación de los nuevos archivos y símbolos.

---

## 4. Execution Steps

1. Crear `package.json` con dependencias requeridas y ejecutar `npm install`.
2. Crear `tsconfig.json`, `next.config.ts`, `postcss.config.mjs` y `tailwind.config.ts`.
3. Crear estructura `src/`:
   - `src/lib/utils.ts`
   - `src/types/index.ts`
   - `src/db/schema.ts`
   - `src/db/index.ts`
   - `src/app/globals.css`
   - `src/app/layout.tsx`
   - `src/app/page.tsx`
4. Crear test unitario en `src/db/__tests__/schema.test.ts` para verificar la integridad del esquema relacional.
5. Ejecutar compilación y tests.
6. Generar reporte de cierre de fase (`phase-01-project-setup-and-db_REPORT_11-09-26.md`).
