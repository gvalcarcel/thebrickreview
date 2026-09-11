A continuación se presenta el **Documento de Requisitos de Software y Especificación Técnica** completo, estructurado siguiendo minuciosamente la plantilla maestra de 70 apartados.

El diseño del proyecto aborda la necesidad clave de posicionar la plataforma como un **portal editorial y blog temático para entusiastas, coleccionistas y constructores de sets de construcción LEGO®**, donde la monetización por afiliación se integra de forma natural, contextual y editorialmente justificada, evitando la percepción de ser un mero catálogo comercial agresivo o una tienda directa.

---

# Documento de Requisitos y Especificación Técnica: Plataforma Editorial "BrickChronicles / El Rincón del Constructor"

## 1. Resumen ejecutivo

* **Producto**: Plataforma web editorial (blog temático y revista digital de construcción con bloques) orientada a reseñas analíticas, guías de montaje, comparativas de sets descatalogados y novedades del universo LEGO®.


* **Problema que resuelve**: Los entusiastas y aficionados buscan opiniones sinceras sobre experiencia de construcción, calidad-precio, durabilidad y técnicas de ensamblaje sin ser bombardeados por catálogos comerciales intrusivos o páginas "granja de enlaces" carentes de valor editorial.


* **Propuesta de valor**: Artículos exhaustivos, valoraciones técnicas de piezas y módulos, análisis de dificultad y fichas de montaje donde, al final del análisis o en apartados contextuales de adquisición de piezas/sets, se facilitan botones informativos hacia distribuidores verificados (enlaces de afiliados camuflados/integrados orgánicamente).


* **Usuarios**: Adult Fans of LEGO (AFOLs), padres en busca de regalos según edad/complejidad, modelistas y redactores editoriales.


* **Estado actual**: Desarrollo desde cero (*greenfield*).


* **Grandes capacidades**: Motor editorial de contenidos con metadatos de sets (número de piezas, minifiguras, complejidad, horas de construcción), sistema dinámico de *Call-to-Action* (CTA) editorializado hacia comercios de terceros, motor de búsqueda facetado por dificultad y temática, y panel de administración para redacción y analítica de clics salientes.



---

## 2. Contexto y origen del proyecto

* **Situación actual**: La saturación de webs con enlaces directos de afiliados de baja calidad ("nicho Amazon") ha provocado que los motores de búsqueda penalicen estos sitios y los usuarios desconfíen.


* **Problema detectado**: Las tasas de rebote en sitios de afiliados tradicionales son elevadas cuando el usuario detecta que el único fin de la web es la venta directa sin aportar análisis técnico ni valor crítico.


* **Motivación**: Crear un medio digital que priorice la experiencia del usuario y el rigor analítico. Los enlaces de compra se presentan bajo copys editoriales como *"¿Dónde conseguir este set?"*, *"Comprobar disponibilidad en distribuidores certificados"* o *"Ficha en tienda oficial / Amazon"*.


* **Condicionantes**: Cumplimiento de directivas de divulgación editorial legal (disclaimer de afiliación sutil y transparente en pie de página/aviso legal) y directrices de marcas registradas (Fair Play de LEGO®).



---

## 3. Visión del producto

* **Corto plazo**: Portal editorial rápido y responsive con 50+ artículos y análisis de sets populares (Icons, Technic, Architecture, Star Wars) con redirecciones salientes optimizadas.


* **Medio plazo**: Comunidad de lectores con comentarios, votaciones de dificultad de montaje y comparador de precios orientativo.


* **Largo plazo**: Aplicación web progresiva (PWA) de referencia en habla hispana para coleccionismo y análisis de sets de construcción.


* **Diferenciación**: Tono pedagógico y de coleccionista. Foco en la experiencia táctil, ratio precio/pieza y calidad del diseño en lugar de agresividad transaccional.



---

## 4. Objetivos del proyecto

### 4.1. Objetivo principal

Desarrollar y desplegar un blog editorial optimizado para SEO orgánico y retención de lectura, capaz de monetizar mediante enlaces de afiliación sin perder la credibilidad ni la estética de una revista especializada independiente.

### 4.2. Objetivos específicos

1. Tiempo de lectura media superior a 2 minutos y medio por artículo.


2. Posicionamiento en búsquedas transaccionales-informativas ("opinión Lego 10300", "merece la pena montar Rivendel").


3. Automatización de módulos de producto (ficha técnica, pros/contras, caja de disponibilidad) integrables en cada entrada.


4. Enmascaramiento y gestión centralizada de redirecciones de afiliados (ej: `/ir/amazon/set-75192`) con tags `rel="sponsored nofollow"`.



### 4.3. Indicadores de éxito (KPIs)

* Core Web Vitals en rango verde (>90 en PageSpeed Mobile).


* Tasa de clics hacia enlaces externos (CTR) entre un 4% y 8% de las sesiones cualificadas.


* Cero penalizaciones algorítmicas por contenido de afiliación escaso (*Thin Affiliate Penalty*).



---

## 5. Principios rectores del desarrollo

1. **Prioridad editorial sobre el enlace comercial**: Ningún enlace o botón de compra precederá al análisis analítico del set.


2. **Arquitectura modular desacoplada**: Contenidos editoriales independientes de la lógica de asignación de afiliados.


3. **Optimización extrema de rendimiento (Static Generation / ISR)** para posicionamiento orgánico.


4. **Privacidad y cumplimiento normativo**: Consentimiento de cookies previo a píxeles de afiliados o scripts analíticos.



---

## 6. Alcance del proyecto

### 6.1. Incluido en el alcance

* Frontend público: Portada tipo revista, categorías temáticas, artículo individual con ficha de set integrada, buscador facetado y páginas legales obligatorias.


* Módulo de redirección de enlaces salientes con medición interna de clics.


* Panel de administración CMS para redactores: Gestión de artículos, categorías, etiquetas y catálogo de enlaces comerciales.


* Sistema de caché y generación híbrida/estática.



### 6.2. Fuera de alcance

* Pasarela de pagos directa o carrito de compra nativo (no es un e-commerce).


* Sistema de envíos, inventario físico o stock de productos en almacén propio.


* Pasarelas de sincronización con la API oficial de precios de LEGO en tiempo real (en fase MVP se introducen enlaces y precios orientativos de forma semi-manual).



### 6.3. Posibles ampliaciones futuras

* Módulo de alertas de bajada de precio con suscripción por correo electrónico.


* Integración con la API de Amazon Product Advertising para actualización desatendida de imágenes y disponibilidad.



---

## 7. Restricciones y condicionantes

* **Técnicas**: Stack basado en Next.js (o Remix) para SSR/SSG óptimo, TypeScript estricto, persistencia en base de datos relacional (PostgreSQL/SQLite con Prisma/Drizzle).


* **Diseño**: Tipografía legible orientada a lectura prolongada (serif o sans humanista para cuerpo de texto), paleta de color neutral y sobria (blancos, grises, detalles en amarillo mostaza o rojo sin copiar la identidad protegida corporativa de marcas existentes).


* **Legales / Políticas de Afiliación**: Enlaces externos obligatoriamente marcados con directivas `sponsored` y advertencia en footer sobre programas de afiliados (Amazon Associates, etc.).



---

## 8. Usuarios, actores y perfiles

1. **Lector Ocasional / Constructor**: Usuario sin autenticación que busca reseñas de un set concreto, trucos o sugerencias de compra.


2. **Editor / Redactor**: Usuario autenticado con permisos para crear, editar borradores y asociar fichas de sets a las entradas.


3. **Administrador**: Gestión de usuarios, configuración global, gestión del módulo de afiliaciones y analítica de clics.



---

## 9. Matriz de roles y permisos

| Capacidad / Recurso | Lector no registrado | Redactor | Administrador |
| --- | --- | --- | --- |
| Leer artículos y fichas técnicas | Sí | Sí | Sí |
| Hacer clic en botones de disponibilidad | Sí | Sí | Sí |
| Crear y modificar borradores de artículos | No | Sí | Sí |
| Publicar / despublicar artículos | No | No | Sí |
| Gestionar enlaces y destinos de afiliados | No | No | Sí |
| Ver métricas de tráfico y CTR | No | No | Sí |
| Modificar ajustes del sistema y usuarios | No | No | Sí |

---

## 10. Casos de uso

### CU-001 — Consulta de análisis de set y navegación a distribuidor

* **Actor**: Lector Ocasional.


* **Precondición**: El artículo debe estar en estado `PUBLICADO`.


* **Flujo principal**:
1. El usuario accede mediante búsqueda orgánica a una URL amigable (ej: `/resenas/lego-star-wars-falcon-milenario-75192`).


2. Lee el análisis de piezas, diseño y dificultad.


3. Visualiza la "Ficha técnica y disponibilidad" al pie del artículo.


4. Hace clic en "Consultar oferta actual en distribuidores autorizados".


5. El sistema registra internamente el evento de clic de forma asíncrona y redirige mediante código 302/307 hacia la URL de destino con etiqueta de afiliado.




* **Errores posibles**: Enlace roto o inactivo; el sistema redirige a una página puente de búsqueda interna del producto.



---

## 11. Historias de usuario

* **HU-01**: *Como lector*, quiero leer un desglose objetivo con pros y contras de cada modelo para decidir si el precio justifica el tiempo y espacio de construcción.


* **HU-02**: *Como lector*, quiero enlaces claros y limpios que me lleven a la tienda donde el set se encuentre disponible para comprarlo cómodamente.


* **HU-03**: *Como redactor*, quiero insertar un bloque de "Ficha de Set" preformateada dentro del contenido para no diseñar la tabla en cada entrada.


* **HU-04**: *Como administrador*, quiero enmascarar los enlaces de afiliados tras URLs internas limpias para poder cambiar el enlace de destino sin editar 50 artículos antiguos.



---

## 12. Mapa completo de funcionalidades

```text
Portal Web
├── Portal Público (Blog Editorial)
│   ├── Portada con artículos destacados y últimos análisis
│   ├── Archivo por líneas (Technic, Icons, Star Wars, City...)
│   ├── Página de Artículo / Reseña
│   │   ├── Cuerpo editorial (texto, galerías, valoración)
│   │   ├── Ficha técnica del set (piezas, minifiguras, año)
│   │   └── Bloque contextual de disponibilidad (CTA de afiliado)
│   ├── Buscador por texto y filtros de dificultad/edad
│   └── Páginas Legales (Aviso legal, Afiliación, Privacidad)
├── Sistema de Redirección Inteligente
│   ├── Endpoint de salto (/go/:slug o /ir/:proveedor/:id)
│   └── Contador de clics e impresiones de CTA
└── Panel de Administración (CMS)
    ├── Autenticación y gestión de accesos
    ├── Gestor de Artículos (Markdown/RichText)
    ├── Gestor de Sets (Catálogo interno de productos)
    └── Gestor de Enlaces Salientes (Mapping de afiliados)

```

---

## 13. Requisitos funcionales detallados

### RF-001 — Renderizado de Bloque "Ficha del Set y Disponibilidad"

* **Descripción**: Módulo integrado en el post que muestra resumen del set: Referencia oficial, número de piezas, edad recomendada, minifiguras, valoración del autor y botón contextual de compra.


* **Actor**: Lector / Redactor.


* **Procesamiento**: El frontend recibe el ID del set asociado al artículo e inyecta el componente con estilos del blog.


* **Criterios de aceptación**: El botón de acción no debe emplear textos agresivos como "¡CÓMPRALO YA!", sino fórmulas como "Ver disponibilidad en Amazon" o "Comprobar stock en tienda oficial". El enlace incluye obligatoriamente los atributos `rel="nofollow sponsored" target="_blank"`.



### RF-002 — Enmascaramiento y Redirección de Enlaces (Link Cloaking)

* **Descripción**: Las rutas de salida no deben exponer directamente los parámetros de afiliado en el DOM público.


* **Actor**: Sistema / Lector.


* **Entrada**: Solicitud GET a `/ir/{retailer}/{slug}`.


* **Procesamiento**: El servidor valida el identificador en la base de datos, incrementa el contador de métrica y responde con un código de redirección HTTP 307.


* **Criterios de aceptación**: Redirección en menos de 100 ms sin afectar la experiencia del usuario.



---

## 14. Reglas de negocio

* **RN-001**: Ningún artículo podrá ser publicado si contiene enlaces de afiliación sin incluir la nota de divulgación editorial estandarizada (*"Este análisis es independiente; las compras realizadas a través de nuestros enlaces pueden generar una pequeña comisión..."*).


* **RN-002**: Si un set queda descatalogado oficialmente (*retired*), el sistema debe mostrar una etiqueta visual informativa indicando "Set Descatalogado (Mercado secundario/coleccionista)" antes de redirigir.



---

## 15. Flujos completos de usuario

```text
Búsqueda en Google ("Análisis Lego Icons 10497")
     ↓
Aterrizaje en Artículo (Vista optimizada de lectura)
     ↓
Lectura de secciones (Historia del modelo -> Construcción -> Veredicto)
     ↓
Encuentro con bloque "Veredicto y Dónde Adquirirlo"
     ↓
Clic en enlace saliente (/ir/amazon/galaxy-explorer)
     ↓
Registro de métrica analítica interna (asíncrono)
     ↓
Redirección al comercio final con cookie de afiliación

```

---

## 16. Estados y ciclo de vida del contenido

```text
[BORRADOR] ──(Revisión de texto y fotos)──> [PENDIENTE_PUBLICACION]
                                                    │
                                             (Aprobación admin)
                                                    ↓
                                               [PUBLICADO]
                                                    │
                                         (Descatalogación/baja)
                                                    ↓
                                               [ARCHIVADO]

```

---

## 17. Arquitectura funcional

* **Capa de Presentación**: Renderizado optimizado para el lector, componentes de diseño accesibles y limpios.


* **Capa de Dominio**: Lógica de gestión de reseñas, categorización de sets de bloques y asignación de proveedores comerciales.


* **Capa de Persistencia**: Almacenamiento relacional de posts, sets, clics y usuarios.


* **Capa de Infraestructura**: CDN y caché en el borde para servir páginas a máxima velocidad.



---

## 18. Arquitectura técnica

* **Frontend**: Next.js (App Router, Server Components para contenido estático).


* **Backend / API**: Server Actions y Route Handlers integrados en Next.js.


* **Base de Datos**: PostgreSQL gestionado con Drizzle ORM o Prisma.


* **Gestión de Medios**: Almacenamiento compatible S3 (Cloudflare R2) para imágenes optimizadas en WebP/AVIF.



---

## 19. Estructura del código

```text
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   └── categorias/[categoria]/page.tsx
│   ├── (admin)/
│   │   └── admin/
│   └── ir/[retailer]/[slug]/route.ts  # Endpoint de redirección
├── components/
│   ├── ui/                           # Botones, tipografía, tarjetas
│   ├── blog/                         # Componentes de artículos
│   └── affiliate/                    # Ficha técnica, CTA de tienda
├── domain/                           # Reglas de negocio y entidades
├── lib/                              # Conexiones DB, utilidades
└── types/                            # Tipados TypeScript

```

---

## 20. Modelo de dominio

* **Post / Artículo**: Entidad de contenido editorial (título, contenido, slug, autor, estado).


* **LegoSet (Ficha Técnica)**: Entidad que representa el modelo analizado (referencia oficial, nombre del set, número de piezas, minifiguras, temática).


* **AffiliateLink**: Enlace a tienda externa (proveedor, URL parametrizada, texto del CTA, estado).


* **ClickEvent**: Métrica anonimizada de interacción (ID de enlace, timestamp, referer).



---

## 21. Modelo de datos

```text
Table: posts
- id (UUID, PK)
- title (VARCHAR(255))
- slug (VARCHAR(255), UNIQUE, INDEX)
- content_markdown (TEXT)
- excerpt (TEXT)
- published_at (TIMESTAMP)
- status (ENUM: draft, published, archived)
- set_id (UUID, FK -> lego_sets.id, NULLABLE)

Table: lego_sets
- id (UUID, PK)
- set_number (VARCHAR(20), UNIQUE)
- name (VARCHAR(255))
- piece_count (INT)
- minifigs_count (INT)
- official_price_cents (INT)
- release_year (INT)

Table: affiliate_links
- id (UUID, PK)
- set_id (UUID, FK -> lego_sets.id)
- retailer_name (VARCHAR(100)) # Ej: "Amazon", "Lego Oficial", "Zavvi"
- destination_url (TEXT)
- internal_slug (VARCHAR(100), UNIQUE)
- is_active (BOOLEAN)

```

---

## 22. API y contratos de comunicación

### Redirección saliente de afiliado

* `GET /ir/{retailer}/{slug}`

* **Respuesta**: HTTP 307 Temporary Redirect.


* **Headers**: `Location: [https://amazon.es/dp/XXXXXX?tag=idafiliado-21](https://amazon.es/dp/XXXXXX?tag=idafiliado-21)`, `Cache-Control: no-cache, no-store, must-revalidate`.

---

## 23. Integraciones externas

* **Google Analytics 4 / Plausible Analytics**: Monitorización de comportamiento sin violar privacidad.


* **Plataformas de Afiliados**: Amazon Associates, Awin, CJ Affiliate (consumidos a nivel de generación de URLs).



---

## 24. Experiencia de usuario (UX)

* Estética sobria y cuidada similar a revistas de arquitectura o diseño contemporáneo.


* El contenido destaca la fotografía del set terminado y de los pasos de ensamblaje.


* Los botones salientes se sienten como "fuentes de consulta externa" para el lector, no como banners publicitarios parpadeantes.



---

## 25. Diseño de interfaz (UI)

* Layout centrado de lectura con ancho máximo de 720px para textos de artículos.


* Tablas comparativas sobrias con bordes delgados y contrastados.


* Módulo lateral o flotante (en escritorio) con resumen del set y atajo a su ficha técnica.



---

## 26. Design System

* Tipografía: *Inter* o *Plus Jakarta Sans* para interfaz y encabezados; *Merriweather* o *Charter* (opcional) para cuerpo de lectura.


* Espaciado: Escala métrica estándar de 4/8px.


* Paleta: Neutros oscuros (`#18181B`), fondos claros (`#FAFAFA`), acento cálido sutil (`#D97706`).



---

## 27. Responsive design

* **Móvil (<640px)**: El bloque de adquisición se condensa en un banner inferior estático o ficha desplegable accesible al final del análisis.


* **Escritorio (>1024px)**: Menú de lectura con tabla de contenidos sticky a la izquierda y ficha resumen a la derecha.



---

## 28. Accesibilidad

* Cumplimiento estricto de directrices WCAG 2.2 nivel AA.


* Textos alternativos (`alt`) obligatorios en todas las fotografías de piezas y cajas.


* Rótulos ARIA específicos en enlaces que abren nuevas ventanas.



---

## 29. Internacionalización y localización

* Versión inicial en Español (es-ES).


* Formato de fechas en formato local (ej: `11 de septiembre de 2026`) y monedas en Euros (`€`).



---

## 30. Autenticación

* Autenticación restringida para redactores y administradores mediante OAuth con proveedores seguros o contraseñas cifradas con Argon2 / Auth.js.


* Sin registro abierto a lectores en la versión inicial.



---

## 31. Autorización y control de acceso

* Control de acceso basado en roles (RBAC) validado exclusivamente en el servidor (middleware y server actions).



---

## 32. Seguridad

* Sanitización contra XSS en el renderizado de contenido en formato Markdown.


* Headers de seguridad HTTP: `Content-Security-Policy`, `X-Frame-Options: DENY`, `Strict-Transport-Security`.


* Rate limiting estricto en los endpoints de redirección `/ir/*` para evitar saturación o scraping masivo.



---

## 33. Privacidad y protección de datos

* Cumplimiento estricto de RGPD.


* Las métricas de redirección de afiliados son agregadas y no recopilan direcciones IP completas ni datos de identificación personal.



---

## 34. Auditoría y trazabilidad

* Registro de cambios editoriales (quién publicó o editó una reseña y cuándo).



---

## 35. Rendimiento

* Time to First Byte (TTFB) < 200 ms gracias a páginas generadas de forma estática servidas desde Edge CDN.


* Largest Contentful Paint (LCP) < 1.8 segundos.



---

## 36. Escalabilidad

* Arquitectura *stateless* desacoplada; los picos de visitas por posicionamiento en búsquedas virales son absorbidos íntegramente por la capa CDN.



---

## 37. Gestión de errores

* Manejo amigable de páginas 404 (sugiriendo los análisis de sets más populares).


* Fallback automático a la página de búsqueda si una redirección de afiliado apunta a un slug inexistente.



---

## 38. Logging

* Registro estructurado en JSON con niveles de advertencia y error (INFO, WARN, ERROR) para fallos de servidor o enlaces rotos.



---

## 39. Observabilidad

* Monitorización de uptime mediante sondas periódicas sobre la página principal y el endpoint de redirección.



---

## 40. Importación, exportación y portabilidad

* Capacidad de importar y exportar borradores de artículos y catálogos de sets mediante formato Markdown + Frontmatter y JSON.



---

## 41. Gestión de archivos

* Las imágenes de las reseñas subidas por los editores se redimensionan automáticamente a múltiples resoluciones y se convierten a WebP.



---

## 42. Requisitos no funcionales

* **RNF-001 (Rendimiento)**: Puntuación Google Lighthouse SEO = 100.


* **RNF-002 (Seguridad)**: Sin cookies de terceros inyectadas antes del consentimiento explícito.


* **RNF-003 (Mantenibilidad)**: Cobertura de tests unitarios en lógica de redirección > 90%.



---

## 43. Estrategia de pruebas

* **Unitarias**: Validación de cálculo de datos del set (precio por pieza) y normalización de URLs de afiliados.


* **Integración**: Testeo de endpoints de redirección y middleware.


* **E2E (Playwright)**: Verificación del flujo de lectura de un artículo y comprobación de la apertura de enlace saliente.



---

## 44. Casos de prueba críticos

* **TEST-001 (Redirección correcta)**:
* *Precondición*: Existe un enlace activo `/ir/amazon/millennium-falcon` apuntando a `[https://amazon.es/](https://amazon.es/)...`.


* *Acción*: Solicitud GET al endpoint.
* *Resultado esperado*: Respuesta HTTP 307 con cabecera Location correcta y cabecera `X-Robots-Tag: noindex, nofollow`.




* **TEST-002 (Comportamiento de set descatalogado)**:
* *Precondición*: Set con flag `is_retired = true`.


* *Acción*: El lector visualiza la ficha del set.
* *Resultado esperado*: El botón indica "Buscar en mercado de coleccionismo" en lugar de "Comprar nuevo".





---

## 45. Datos de prueba y seeds

* Inyección de 5 sets emblemáticos de prueba (ej: 10497 Galaxy Explorer, 10300 Delorean, 75192 Falcon) con artículos asociados y enlaces simulados a tiendas de prueba.



---

## 46. Estrategia multiagente para desarrollo con Antigravity

División de roles de ejecución:

* **46.1. Agente Orquestador / Tech Lead**: Establece la arquitectura, crea el esqueleto del repositorio y valida PRs.


* **46.2. Agente Analista Funcional**: Mantiene la correspondencia entre requisitos editoriales y modelos de datos.


* **46.3. Agente Arquitecto**: Diseña el pipeline de compilación SSG/ISR y la base de datos.


* **46.4. Agente Frontend**: Implementa componentes de interfaz, layout del blog y fichas de producto.


* **46.5. Agente UX/UI**: Define estilos, tipografías y el diseño editorial para que no parezca un e-commerce.


* **46.6. Agente Backend**: Implementa endpoints de redirección y panel CMS.


* **46.7. Agente de Datos**: Crea migraciones, esquemas y seeds de sets.


* **46.8. Agente de Seguridad**: Verifica cabeceras, políticas CSP y atributos `rel="sponsored"`.


* **46.9. Agente QA**: Automatiza tests E2E y pruebas de contratos.


* **46.10. Agente DevOps**: Configura pipeline de CI/CD y despliegue en Vercel/Cloudflare.


* **46.11. Agente de Documentación**: Mantiene README y guías editoriales.


* **46.12. Agente Revisor**: Comprobación final previa al merge de código.



---

## 47. Reglas de coordinación entre agentes

1. Todo cambio en el esquema de base de datos requiere migración y actualización en los tipados TypeScript.


2. Los componentes de Frontend no pueden importar directamente bibliotecas de base de datos ni consultar claves de API privadas.


3. Cualquier cambio en los textos de botones comerciales debe ser validado por la regla de apariencia editorial (cero agresividad publicitaria).



---

## 48. AGENTS.md

El archivo `AGENTS.md` en la raíz del proyecto recogerá:

* Propósito: Blog editorial sobre LEGO con monetización pasiva.


* Convenciones: Código en TypeScript con modo estricto habilitado, componentes funcionales React, nombres de archivos en kebab-case.


* Regla de oro: Prohibido incluir popups invasivos, banners flotantes intrusivos o botones con la palabra "Comprar" en color chillón.



---

## 49. Estrategia de prompts para agentes

Toda orden de implementación se fragmentará bajo la estructura:

```text
CONTEXTO: Módulo de lectura editorial de reseñas
OBJETIVO: Implementar componente React "SetSpecsCard"
ARCHIVOS IMPLICADOS: src/components/blog/set-specs-card.tsx
REQUISITOS: Mostrar piezas, dificultad, edad y botón sutil de disponibilidad
RESTRICCIONES: No usar estilos estridentes ni palabras como "OFERTA"
PRUEBAS: Renderizar con datos completos y con datos parciales
CRITERIOS DE ACEPTACIÓN: Pasar tests unitarios y accesibilidad con contraste AA

```

---

## 50. Análisis previo obligatorio del repositorio

* Al ser un desarrollo desde cero (*greenfield*), este apartado se inicializa como: **NO APLICA (Desarrollo inicial desde cero)**.



---

## 51. Compatibilidad y preservación de funcionalidades

* **NO APLICA (Nuevo desarrollo)**.



---

## 52. Migraciones

* Gestión de versiones de base de datos mediante migraciones automatizadas en Drizzle/Prisma con scripts idempotentes de subida y retroceso (*up/down*).



---

## 53. Estrategia de implementación

* **Fase 1**: Arquitectura base, configuración del repositorio y modelo de datos.


* **Fase 2**: Motor de renderizado de artículos (Markdown -> HTML) y diseño editorial.


* **Fase 3**: Módulo de sets LEGO y componente de ficha/disponibilidad.


* **Fase 4**: Sistema de redirección interna de enlaces de afiliados y registro de clics.


* **Fase 5**: Panel de administración CMS para redacción y gestión de enlaces.


* **Fase 6**: SEO técnico, metadata estructurada (Schema.org de tipo `Article` y `Product` orientativo) y páginas legales.


* **Fase 7**: QA, pruebas de rendimiento y despliegue inicial.



---

## 54. Work Packages (WPs)

* **WP-01**: Configuración de Next.js, Tailwind CSS y esquema inicial de base de datos.


* **WP-02**: Creación de componentes visuales de lectura (Layout editorial, tipografía, bloques de notas).


* **WP-03**: Implementación de la ruta de redirección `/ir/[retailer]/[slug]` y servicio de auditoría de clics.


* **WP-04**: Componente `AffiliateBox` integrado en el final del artículo.


* **WP-05**: Generación de páginas estáticas a partir de archivos Markdown/BD con metadatos OpenGraph y Schema.org.



---

## 55. Dependencias entre tareas

```text
WP-01 (Setup & Base de datos)
   ↓
WP-02 (Layout de lectura) ──┐
   ↓                        │
WP-03 (Motor de redirección) │
   ↓                        │
WP-04 (AffiliateBox / CTA) ←┘
   ↓
WP-05 (SEO, Schema & Release)

```

---

## 56. Priorización (MoSCoW)

* **MUST**: Blog responsive ultrarrápido, renderizado de fichas técnicas de sets, enlaces de redirección con `rel="sponsored"`, aviso legal de afiliación.


* **SHOULD**: Filtro de búsqueda por línea temática (Technic, Icons, etc.), contador interno de clics.


* **COULD**: Comparativa de disponibilidad entre dos tiendas distintas en el mismo bloque.


* **WON'T NOW**: Notificaciones push al usuario, área de usuarios registrados para lectores.



---

## 57. CI/CD

* Pipeline en GitHub Actions:
1. Verificación de formato y sintaxis (Prettier + ESLint).
2. Comprobación estricta de tipos (`tsc --noEmit`).
3. Ejecución de tests automatizados (Vitest/Jest).
4. Build estático de prueba.
5. Despliegue automático a producción en Vercel/Cloudflare al fusionar en `main`.





---

## 58. Estrategia de despliegue

* Despliegue en plataforma Edge/Serverless con base de datos PostgreSQL gestionada (Neon/Supabase).


* Variables de entorno segregadas (`DATABASE_URL`, `ADMIN_SECRET_KEY`, `AFFILIATE_TAG_AMAZON`).



---

## 59. Documentación obligatoria

* `README.md` (instalación, configuración local y comandos).


* `AGENTS.md` (pautas para asistentes y modelos de codificación).


* `docs/editorial-guidelines.md` (libro de estilo sobre cómo redactar las reseñas para mantener el tono independiente y no agresivo).



---

## 60. Architecture Decision Records (ADRs)

* **ADR-001: Adopción de Next.js SSG/ISR**: Se prioriza la generación estática para maximizar la velocidad de carga (SEO) y reducir costes de cómputo en servidores.


* **ADR-002: Redirección mediante rutas internas (/ir/...)**: Facilita la trazabilidad de clics y permite sustituir enlaces de afiliados sin necesidad de regenerar artículos históricos.



---

## 61. Criterios de aceptación globales

* Navegación fluida y diseño que transmite la imagen de un medio de divulgación y entretenimiento, sin apariencia de catálogo de ventas.


* Ausencia absoluta de anuncios flotantes molestos o banners automáticos que degraden la lectura.


* Todos los enlaces a comercios cuentan con etiquetas de cumplimiento legal (`sponsored`) y abren en pestaña nueva.



---

## 62. Definition of Done (DoD)

Una tarea se considerará completada únicamente cuando:

1. El código esté escrito en TypeScript y sin advertencias del linter.


2. Los tests unitarios y de integración asociados pasen al 100%.


3. El diseño sea completamente responsive y accesible (WCAG AA).


4. La documentación de la funcionalidad haya sido actualizada.



---

## 63. Matriz de trazabilidad

| Objetivo | Historia de Usuario | Requisito Funcional | Work Package | Caso de Prueba |
| --- | --- | --- | --- | --- |
| OBJ-01 (Portal Editorial) | HU-01 (Lectura objetiva) | RF-001 (Ficha de set) | WP-02, WP-04 | TEST-002 |
| OBJ-04 (Gestión de enlaces) | HU-04 (URLs limpias) | RF-002 (Redirección /ir) | WP-03 | TEST-001 |

---

## 64. Riesgos y mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
| --- | --- | --- | --- |
| Penalización SEO por exceso de enlaces de afiliados | Media | Alta | Garantizar contenido de texto extenso (>1000 palabras) por análisis y un máximo de 1-2 módulos comerciales por entrada.

 |
| Rotura de stock o enlaces externos muertos | Alta | Media | Monitor periódico de enlaces y fallback inteligente a búsquedas genéricas del modelo.

 |

---

## 65. Deuda técnica conocida

* **NO APLICA (Proyecto inicial desde cero)**.



---

## 66. Roadmap

* **MVP**: Blog editorial operativo con 15 reseñas fundacionales, fichas de set estáticas, enlaces de afiliación enmascarados y aviso legal.


* **V1.0**: Buscador facetado por dificultad/precio, panel CMS para redactores y métricas internas de clics.


* **V1.1**: Sistema de comentarios moderados para la comunidad de constructores.



---

## 67. Backlog final priorizado

1. **WP-01**: Setup del repositorio, TypeScript, Tailwind y esquema DB — *MUST*

2. **WP-02**: Plantilla editorial y visor de artículos en Markdown — *MUST*

3. **WP-03**: Endpoint de salto `/ir/[retailer]/[slug]` y analítica de clics — *MUST*

4. **WP-04**: Componente `AffiliateBox` y fichas de producto — *MUST*

5. **WP-05**: Implementación de Schema.org, SEO y páginas legales — *MUST*

6. **WP-06**: Motor de búsqueda facetado — *SHOULD*


---

## 68. Orden de ejecución recomendado para Antigravity

```text
1. Inicializar el repositorio con Next.js, TypeScript y Tailwind CSS.
2. Definir el esquema de base de datos (Posts, Sets, AffiliateLinks) y ejecutar migraciones iniciales.
3. Implementar el layout público del blog y la página individual de artículo (enfoque revista/editorial).
4. Diseñar e integrar el componente de ficha técnica del set (piezas, dificultad, etc.).
5. Desarrollar la ruta de redirección (/ir/...) con lógica de respuesta 307 y registro de clics.
6. Integrar el botón contextual de disponibilidad en la ficha técnica y verificar etiquetas 'rel'.
7. Desarrollar las páginas legales obligatorias (Aviso Legal, Política de Cookies y Divulgación de Afiliación).
8. Ejecutar tests unitarios, tests E2E y auditar Core Web Vitals en Lighthouse.

```

---

## 69. Instrucción final para Antigravity

Este documento constituye la especificación funcional y técnica de referencia del proyecto. Antes de implementar cambios, analiza el repositorio existente, identifica las áreas afectadas y comprueba las dependencias entre requisitos. No simplifiques funcionalidades descritas, no elimines comportamiento existente sin autorización expresa y no inventes requisitos, infraestructura o integraciones no documentadas. Mantén en todo momento la prioridad editorial del diseño para que la web funcione visual y conceptualmente como una revista especializada de construcción con bloques y no como un portal de ventas transaccional. Divide la implementación en paquetes verificables, utiliza agentes especializados cuando puedan trabajar en paralelo y aplica revisión cruzada antes de cerrar cada fase. Una tarea solamente podrá considerarse completada cuando satisfaga sus criterios de aceptación y la Definition of Done global.

---

## 70. Anexos específicos del proyecto

### Anexo A — Guía de Estilo Editorial para Enlaces Salientes (Evitar Percepción de Venta Agresiva)

1. **Títulos de los artículos**:
* *Aceptable*: *"Análisis a fondo del set Icons 10300 Delorean: Técnicas de montaje y veredicto para coleccionistas"*.
* *Prohibido*: *"Compra aquí el mejor Lego Delorean barato en oferta"*.


2. **Ubicación de enlaces**:
* Prohibido colocar botones de compra en el primer tercio del artículo. El lector debe primero encontrar el análisis real de las técnicas de montaje, piezas exclusivas y dificultad.


3. **Copys de los botones de llamada a la acción (CTA)**:
* *Aceptables*: *"Ver disponibilidad en Amazon"*, *"Comprobar stock en LEGO Store"*, *"Consultar precio actual del modelo"*.
* *Prohibidos*: *"¡CÓMPRALO YA!"*, *"MEJOR PRECIO GARANTIZADO"*, *"AÑADIR A LA CESTA"*.