import type { PostWithSet, LegoSet, AffiliateLink } from "@/types";

export const SAMPLE_SETS: Record<string, LegoSet & { affiliateLinks: AffiliateLink[] }> = {
  "10497": {
    id: "set-10497",
    setNumber: "10497",
    name: "Galaxy Explorer",
    lineTheme: "Icons",
    pieceCount: 1254,
    minifigsCount: 4,
    officialPriceCents: 9999,
    releaseYear: 2022,
    isRetired: true,
    difficulty: "Intermedio",
    imageUrl: "https://images.brickset.com/sets/images/10497-1.jpg",
    createdAt: new Date("2022-08-01"),
    affiliateLinks: [
      {
        id: "link-10497-amazon",
        setId: "set-10497",
        retailerName: "Amazon",
        destinationUrl: "https://www.amazon.es/dp/B09QFZ1V5K?tag=thebrickreview-21",
        internalSlug: "amazon-galaxy-explorer",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-10497-lego",
        setId: "set-10497",
        retailerName: "Tienda Oficial LEGO",
        destinationUrl: "https://www.lego.com/es-es/product/galaxy-explorer-10497",
        internalSlug: "lego-galaxy-explorer",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "75192": {
    id: "set-75192",
    setNumber: "75192",
    name: "Millennium Falcon Ultimate Collector Series",
    lineTheme: "Star Wars",
    pieceCount: 7541,
    minifigsCount: 8,
    officialPriceCents: 84999,
    releaseYear: 2017,
    isRetired: false,
    difficulty: "Experto / AFOL",
    imageUrl: "https://images.brickset.com/sets/images/75192-1.jpg",
    createdAt: new Date("2017-10-01"),
    affiliateLinks: [
      {
        id: "link-75192-amazon",
        setId: "set-75192",
        retailerName: "Amazon",
        destinationUrl: "https://www.amazon.es/dp/B075SD9MJ8?tag=thebrickreview-21",
        internalSlug: "amazon-millennium-falcon-ucs",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-75192-lego",
        setId: "set-75192",
        retailerName: "Tienda Oficial LEGO",
        destinationUrl: "https://www.lego.com/es-es/product/millennium-falcon-75192",
        internalSlug: "lego-millennium-falcon-ucs",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
};

export const SAMPLE_POSTS: Record<string, PostWithSet> = {
  "galaxy-explorer-10497": {
    id: "post-10497",
    title: "Galaxy Explorer (10497): Nostalgia espacial y maestría moderna en técnicas SNOT",
    slug: "galaxy-explorer-10497",
    excerpt: "Un homenaje milimétrico al clásico 928 de Classic Space. Analizamos la rigidez del fuselaje delta, la ausencia deliberada de pegatinas y cómo resuelve la geometría sin moldes antiguos.",
    status: "published",
    readingTimeMinutes: 7,
    setId: "set-10497",
    publishedAt: new Date("2026-09-10"),
    createdAt: new Date("2026-09-09"),
    updatedAt: new Date("2026-09-10"),
    legoSet: SAMPLE_SETS["10497"],
    affiliateLinks: SAMPLE_SETS["10497"].affiliateLinks,
    contentMarkdown: `
## Introducción: El peso de un icono de 1979

Pocos sets en la historia de la compañía danesa evocan una emoción tan pura y reconocible como el legendario **Galaxy Explorer (referencia 928)** comercializado originalmente a finales de la década de los setenta. Con motivo de las celebraciones del 90 aniversario de la marca, el equipo de diseño liderado por Michael Psiaki asumió una tarea de alto riesgo: reinventar una leyenda sin traicionar su silueta ni diluir la magia de sus colores primarios.

El resultado, plasmado en las 1.254 piezas del set 10497, no es un simple ejercicio de añoranza comercial, sino un compendio magistral de técnicas de construcción contemporáneas.

---

## 1. La experiencia en la mesa de montaje

Desde la apertura de las primeras bolsas de papel numeradas se percibe una declaración de intenciones: **cero pegatinas**. Cada panel de control, cada logotipo de la flecha roja orbitando sobre el planeta dorado y cada número identificativo son piezas impresas de fábrica. Para un aficionado adulto, este detalle eleva instantáneamente la calidad percibida del modelo a un estándar prémium.

El ritmo de la construcción se divide claramente en cuatro etapas:

1. **El núcleo del bastidor central**: Emplea una combinación de vigas Technic y placas inversas para soportar la torsión de las alas.
2. **El tren de aterrizaje retráctil**: Una maravilla mecánica operada mediante fricción suave que se oculta limpiamente en la panza de la nave.
3. **La carlinga y esclusas intermedias**: Integración de cristales amarillos transparentes en ángulo compuesto con asientos para cuatro astronautas.
4. **La rampa de popa y el rover**: Un mecanismo telescópico deslizante que permite desplegar el vehículo auxiliar sin atascos.

---

## 2. Anatomía de la geometría en delta y técnicas SNOT

Lo más fascinante a nivel de ingeniería de bloques es cómo se resuelven las alas en delta. En el set original de 1979 se dependía de grandes placas trapezoidales hoy descatalogadas. Aquí, Psiaki construye el bisel lateral utilizando un intrincado entramado de *brackets* y *studs-not-on-top* (SNOT).

La unión de los ángulos oblicuos encaja con una tolerancia milimétrica, eliminando cualquier holgura antiestética. Al sujetar la nave con una sola mano por la sección central inferior (*swooshability*), la rigidez estructural es absoluta: no cruje ni flexiona.

---

## 3. Minifiguras y accesorios de época

El set incluye cuatro astronautas en trajes clásicos (dos blancos y dos rojos), respetando el icónico casco retro con barboquejo simple y los tanques de oxígeno dobles en la espalda. Además, incorpora un adorable robot auxiliar construido con binoculares y palancas que complementa la tripulación sin robar protagonismo.
`,
  },

  "millennium-falcon-ucs-75192": {
    id: "post-75192",
    title: "Millennium Falcon UCS (75192): El monolito de la ingeniería de bloques",
    slug: "millennium-falcon-ucs-75192",
    excerpt: "¿Sigue justificando su espacio y coste tras años en el mercado? Diseccionamos su chasis Technic interno, fragilidad en traslados y el valor real de sus 7.541 elementos.",
    status: "published",
    readingTimeMinutes: 11,
    setId: "set-75192",
    publishedAt: new Date("2026-09-08"),
    createdAt: new Date("2026-09-07"),
    updatedAt: new Date("2026-09-08"),
    legoSet: SAMPLE_SETS["75192"],
    affiliateLinks: SAMPLE_SETS["75192"].affiliateLinks,
    contentMarkdown: `
## Introducción: El gigante ineludible

Lanzado originalmente en 2017, el Halcón Milenario de la serie *Ultimate Collector Series* (referencia 75192) sigue ostentando una posición reverencial en el imaginario colectivo de los constructores de bloques. Con sus 7.541 elementos y unas dimensiones de 84 cm de largo por 60 cm de ancho, no estamos ante un juguete de estantería convencional, sino ante una escultura arquitectónica pesada.

---

## 1. El esqueleto interno: Ingeniería de carga pesada

Afrontar el montaje de este coloso requiere un espacio de trabajo dedicado y orden mental. La primera mitad del proceso no tiene aspecto de nave espacial: es una jaula estructural masiva de vigas Technic, pernos de fricción y pasadores de refuerzo cruzado.

La razón de este entramado es puramente física: el modelo final pesa cerca de 13 kilogramos. Los siete soportes del tren de aterrizaje deben distribuir la masa sin vencerse con el paso de los meses.

---

## 2. El laberinto del "Greebling" superficial

La seña de identidad del Halcón Milenario es el *greebling*: la colocación densa e intrincada de piezas pequeñas (teléfonos, patines, llaves inglesas, prismáticos y rejillas) para simular canalizaciones mecánicas expuestas y desgaste de combate.

El trabajo en las mandíbulas delanteras y el anillo de ventilación de los motores traseros es un espectáculo de variedad de piezas. Sin embargo, este grado de detalle conlleva una advertencia crítica para el coleccionista:
- **Fragilidad en el manejo**: Prácticamente todos los paneles superiores descansan por gravedad o encajan mediante pasadores mínimos. Intentar mover la nave sin sujetarla por el chasis central Technic provocará el desprendimiento inmediato de cubiertas.

---

## 3. Valor de conservación y longevidad

A un ratio aproximado de 11 céntimos por pieza para una licencia de alto calibre, el set entrega decenas de horas de desafío intelectual. Es el culmen de lo que la experiencia de construcción adulta puede ofrecer hoy en día.
`,
  },
};

export async function getPostBySlug(slug: string): Promise<PostWithSet | null> {
  return SAMPLE_POSTS[slug] || null;
}

export async function getAllPosts(): Promise<PostWithSet[]> {
  return Object.values(SAMPLE_POSTS);
}

export async function getPostsByCategory(categorySlug: string): Promise<PostWithSet[]> {
  const norm = categorySlug.toLowerCase().replace(/-/g, " ");
  return Object.values(SAMPLE_POSTS).filter(
    (p) => p.legoSet?.lineTheme.toLowerCase() === norm
  );
}