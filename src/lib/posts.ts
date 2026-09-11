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
  "10300": {
    id: "set-10300",
    setNumber: "10300",
    name: "Máquina del Tiempo de Regreso al Futuro",
    lineTheme: "Icons",
    pieceCount: 1872,
    minifigsCount: 2,
    officialPriceCents: 19999,
    releaseYear: 2022,
    isRetired: false,
    difficulty: "Avanzado",
    imageUrl: "https://images.brickset.com/sets/images/10300-1.jpg",
    createdAt: new Date("2022-04-01"),
    affiliateLinks: [
      {
        id: "link-10300-amazon",
        setId: "set-10300",
        retailerName: "Amazon",
        destinationUrl: "https://www.amazon.es/dp/B09QFS16F4?tag=thebrickreview-21",
        internalSlug: "amazon-delorean-10300",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-10300-lego",
        setId: "set-10300",
        retailerName: "Tienda Oficial LEGO",
        destinationUrl: "https://www.lego.com/es-es/product/back-to-the-future-time-machine-10300",
        internalSlug: "lego-delorean-10300",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "42143": {
    id: "set-42143",
    setNumber: "42143",
    name: "Ferrari Daytona SP3",
    lineTheme: "Technic",
    pieceCount: 3778,
    minifigsCount: 0,
    officialPriceCents: 44999,
    releaseYear: 2022,
    isRetired: false,
    difficulty: "Experto / AFOL",
    imageUrl: "https://images.brickset.com/sets/images/42143-1.jpg",
    createdAt: new Date("2022-06-01"),
    affiliateLinks: [
      {
        id: "link-42143-amazon",
        setId: "set-42143",
        retailerName: "Amazon",
        destinationUrl: "https://www.amazon.es/dp/B09QFVL8P6?tag=thebrickreview-21",
        internalSlug: "amazon-ferrari-daytona-42143",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-42143-lego",
        setId: "set-42143",
        retailerName: "Tienda Oficial LEGO",
        destinationUrl: "https://www.lego.com/es-es/product/ferrari-daytona-sp3-42143",
        internalSlug: "lego-ferrari-daytona-42143",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "21325": {
    id: "set-21325",
    setNumber: "21325",
    name: "Herrero Medieval (Medieval Blacksmith)",
    lineTheme: "Ideas",
    pieceCount: 2164,
    minifigsCount: 4,
    officialPriceCents: 17999,
    releaseYear: 2021,
    isRetired: true,
    difficulty: "Avanzado",
    imageUrl: "https://images.brickset.com/sets/images/21325-1.jpg",
    createdAt: new Date("2021-02-01"),
    affiliateLinks: [
      {
        id: "link-21325-amazon",
        setId: "set-21325",
        retailerName: "Amazon",
        destinationUrl: "https://www.amazon.es/dp/B08G4K97Y1?tag=thebrickreview-21",
        internalSlug: "amazon-medieval-blacksmith-21325",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-21325-lego",
        setId: "set-21325",
        retailerName: "Tienda Oficial LEGO",
        destinationUrl: "https://www.lego.com/es-es/product/medieval-blacksmith-21325",
        internalSlug: "lego-medieval-blacksmith-21325",
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
`,
  },

  "delorean-regreso-al-futuro-10300": {
    id: "post-10300",
    title: "Máquina del Tiempo Delorean (10300): Tres películas en un chasis sublime",
    slug: "delorean-regreso-al-futuro-10300",
    excerpt: "Análisis a fondo del set Icons 10300: cómo funciona el mecanismo de plegado de ruedas, la recreación del condensador de fluzo y la modularidad de sus tres versiones icónicas.",
    status: "published",
    readingTimeMinutes: 8,
    setId: "set-10300",
    publishedAt: new Date("2026-09-05"),
    createdAt: new Date("2026-09-04"),
    updatedAt: new Date("2026-09-05"),
    legoSet: SAMPLE_SETS["10300"],
    affiliateLinks: SAMPLE_SETS["10300"].affiliateLinks,
    contentMarkdown: `
## Introducción: La redención de una leyenda cinematográfica

Tras el modesto experimento de la línea Cuusoo en 2013, los seguidores de la trilogía de Robert Zemeckis demandaban una versión a gran escala que hiciera justicia a las líneas angulosas de Giorgetto Giugiaro. Con la referencia 10300, el equipo de diseño no solo cumplió las expectativas estéticas, sino que concibió un chasis transformable que permite recrear el vehículo de cualquiera de las tres entregas.

---

## 1. Mecánica del tren de rodaje plegable

El gran hito de ingeniería de este modelo reside en la palanca oculta en los bajos del coche. Con un único movimiento fluido, las cuatro ruedas basculan 90 grados hacia la posición de vuelo aerotransportado vista en *Regreso al Futuro II*. La articulación utiliza resortes elásticos y brazos Technic con una tolerancia exacta que resiste cientos de activaciones sin fatigarse.

---

## 2. El habitáculo y el condensador de fluzo

El interior es una delicia de fidelidad: el mítico condensador de fluzo cuenta con un ladrillo luminoso integrado que se activa pulsando el reactor trasero. La consola central incluye los indicadores de destino temporal (1955, 1985, 2015) y las puertas de ala de gaviota se mantienen abiertas por equilibrio propio sin necesidad de trabas externas.
`,
  },

  "ferrari-daytona-sp3-42143": {
    id: "post-42143",
    title: "Ferrari Daytona SP3 (42143): Complejidad secuencial a escala 1:8",
    slug: "ferrari-daytona-sp3-42143",
    excerpt: "Diseccionamos la caja de cambios secuencial de 8 velocidades con levas de cambio, la suspensión independiente y el desafío milimétrico de la carrocería en rosso corsa.",
    status: "published",
    readingTimeMinutes: 12,
    setId: "set-42143",
    publishedAt: new Date("2026-09-02"),
    createdAt: new Date("2026-09-01"),
    updatedAt: new Date("2026-09-02"),
    legoSet: SAMPLE_SETS["42143"],
    affiliateLinks: SAMPLE_SETS["42143"].affiliateLinks,
    contentMarkdown: `
## Introducción: El estandarte de la serie Ultimate Car Concept

La cuarta entrega de la prestigiosa línea 1:8 de Technic eleva el listón de la precisión automovilística. Inspirado en los prototipos deportivos que coparon el podio de las 24 Horas de Daytona en 1967, este modelo traslada la sensualidad curvilínea de Maranello a un sistema eminentemente geométrico como son las vigas y paneles de plástico.

---

## 1. La catedral mecánica: Caja secuencial de 8 marchas

Montar el Ferrari Daytona SP3 es, esencialmente, construir un motor de relojería. La caja de cambios secuencial operada por levas funcionales en el volante es una obra maestra de sincronización:
- Utiliza anillos de cambio de precisión y un tambor selector que engrana de forma audible cada relación.
- El motor V12 cuenta con pistones móviles conectados a un diferencial funcional que rueda con suavidad milimétrica.

---

## 2. La armonía de las líneas traseras

La zaga presidida por lamas horizontales rojas y las puertas de apertura en mariposa requieren una atención absoluta al manual de instrucciones: un pasador colocado con medio grado de desviación impedirá el cierre enrasado de la carrocería.
`,
  },

  "medieval-blacksmith-21325": {
    id: "post-21325",
    title: "Herrero Medieval (21325): El renacimiento del castillo en clave modular",
    slug: "medieval-blacksmith-21325",
    excerpt: "Un recorrido planta por planta por el mejor set medieval de la década: forja con ladrillo de luz, cubierta de tejas policromadas y técnicas de entramado de madera.",
    status: "published",
    readingTimeMinutes: 9,
    setId: "set-21325",
    publishedAt: new Date("2026-08-28"),
    createdAt: new Date("2026-08-27"),
    updatedAt: new Date("2026-08-28"),
    legoSet: SAMPLE_SETS["21325"],
    affiliateLinks: SAMPLE_SETS["21325"].affiliateLinks,
    contentMarkdown: `
## Introducción: El sueño del aficionado a la época clásica

Surgido de la plataforma comunitaria Ideas a partir del diseño de Clemens Fiedler, el Herrero Medieval (21325) revitalizó el género de las construcciones históricas combinando la escala de las casas modulares urbanas con el encanto rústico del medievo.

---

## 1. Tres plantas de artesanía arquitectónica

La estructura se desacopla con facilidad en tres módulos independientes:
1. **La planta baja de piedra**: Dedicada al taller del herrero, con fuelle funcional que activa un ladrillo con luz en las brasas del carbón.
2. **La primera planta de madera**: La vivienda con cocina detallada, mantequera y suelo en tono nogal.
3. **El ático abuhardillado**: El dormitorio con alfombra de oso, escritorio de pluma y almacenamiento de grano.

---

## 2. La técnica de las tejas curvas policromadas

El tejado a dos aguas es, sin duda, la pieza visual central: combina tejas negras, azules y turquesas dispuestas en capas escalonadas para simular el musgo y el desgaste del tiempo.
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