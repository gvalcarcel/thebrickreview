import fs from "fs";
import path from "path";

const targetPath = path.resolve("src/lib/posts.ts");

const content = `import type { PostWithSet, LegoSet, AffiliateLink, BuildGalleryImage } from "@/types";

export const SAMPLE_SETS: Record<string, LegoSet & { affiliateLinks: AffiliateLink[]; scaleCategory?: string; clutchScore?: number; galleryImages?: BuildGalleryImage[] }> = {
  "75192": {
    id: "set-75192",
    setNumber: "75192",
    name: "Millennium Falcon Ultimate Collector Series",
    lineTheme: "Star Wars",
    pieceCount: 7541,
    minifigsCount: 8,
    officialPriceCents: null,
    releaseYear: 2017,
    isRetired: false,
    difficulty: "Expert / AFOL",
    scaleCategory: "UCS Masterpiece (1:42 Minifig Scale)",
    clutchScore: 9.9,
    galleryImages: [
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Fully assembled 84cm freighter hull and quad laser cannon mount"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blte22f1f8d1cacfb3c/75192_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Cockpit assembly with four-seater crew flight deck and canopy frame"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/bltecd03cc9fb82fd56/75192_alt2.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Hyperdrive engineering room, access ladder, and hidden floor compartment"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt3c8b8943285d6ad8/75192_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Main hold seating area with Dejarik holographic game table"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blta4cf3f0d0da00392/75192_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Ventral boarding ramp mechanism and lower blaster cannon station"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt713fe40eef84a136/75192_alt5.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Swappable sensor radar assemblies: Original Trilogy round vs. Sequels rectangular"
          }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
    createdAt: new Date("2017-10-01"),
    affiliateLinks: [
      {
        id: "link-75192-aliexpress",
        setId: "set-75192",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4DZXqJn",
        internalSlug: "aliexpress-millennium-falcon-ucs",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-75192-aliexpress-plaza",
        setId: "set-75192",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4DZXqJn",
        internalSlug: "aliexpress-plaza-millennium-falcon-ucs",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "10300": {
    id: "set-10300",
    setNumber: "10300",
    name: "Back to the Future Time Machine (DeLorean)",
    lineTheme: "Icons",
    pieceCount: 1872,
    minifigsCount: 2,
    officialPriceCents: null,
    releaseYear: 2022,
    isRetired: false,
    difficulty: "Advanced",
    scaleCategory: "Large Scale Vehicle (~1:13)",
    clutchScore: 9.5,
    galleryImages: [
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/bltbe274579b9f81410/10300_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Articulated gull-wing doors deployed showing flux capacitor cockpit"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/bltbaff735c2e263c6f/10300_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Part II flight mode conversion with 90-degree fold-down landing gear"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blte6909dad9599e3e4/10300_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Part III hood-mounted vacuum tube circuitry pack and rail wheels"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt2f0fbc2e9baeeac3/10300_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Rear dual exhaust cooling towers and plutonium reactor chamber"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt34a67a0d5a6de5f2/10300_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Light brick illumination activating the internal flux capacitor core"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt57e6a853637d2fb2/10300_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Outatime license plate, rear bumper cabling, and time circuit dashboard"
          }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/bltbe274579b9f81410/10300_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    createdAt: new Date("2022-04-01"),
    affiliateLinks: [
      {
        id: "link-10300-aliexpress",
        setId: "set-10300",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4kxVhyN",
        internalSlug: "aliexpress-delorean-10300",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-10300-aliexpress-plaza",
        setId: "set-10300",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4kxVhyN",
        internalSlug: "aliexpress-plaza-delorean-10300",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "21330": {
    id: "set-21330",
    setNumber: "21330",
    name: "Home Alone McCallister House",
    lineTheme: "Ideas",
    pieceCount: 3955,
    minifigsCount: 5,
    officialPriceCents: null,
    releaseYear: 2021,
    isRetired: false,
    difficulty: "Advanced",
    scaleCategory: "Modular Dollhouse Architecture (~1:24 Scale)",
    clutchScore: 9.7,
    galleryImages: [
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt0ba2da641d7f0426/21330_prod.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
                "caption": "Full colonial brick facade of the McCallister family residence"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt6d580f237723d2d9/blt41320ab511b43baa-21330_WEB_SEC01_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Fold-open ground floor with train set turntable and cardboard cutout mannequins"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt4f46e3bb0541b240/blt41320ab511b43baa-21330_WEB_SEC02_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Second floor master bedroom, swinging paint cans stairwell, and attic"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt9ae7321f1eb2c18e/21330-202511-Page-Content-Block-Standard-SKROLL-Basement.jpg",
                "caption": "Basement boiler room with light-up furnace mouth and laundry chute"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt72668cbae8c6e79c/21330-202511-Page-Content-Block-Standard-SKROLL-Treehouse.jpg",
                "caption": "Backyard treehouse escape zip-line and Oh-Kay plumbing van"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blte5e58fee0131caea/21330-202511-Page-Content-Block-Standard-SKROLL-Shave.jpg",
                "caption": "Bathroom mirror aftershave scene with detailed micro-fixtures"
          }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt0ba2da641d7f0426/21330_prod.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
    createdAt: new Date("2021-11-01"),
    affiliateLinks: [
      {
        id: "link-21330-aliexpress",
        setId: "set-21330",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3psks3J",
        internalSlug: "aliexpress-home-alone-21330",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-21330-aliexpress-plaza",
        setId: "set-21330",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3psks3J",
        internalSlug: "aliexpress-plaza-home-alone-21330",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "11374": {
    id: "set-11374",
    setNumber: "11374",
    name: "Arcade Pinball Machine",
    lineTheme: "Icons",
    pieceCount: 2274,
    minifigsCount: 2,
    officialPriceCents: null,
    releaseYear: 2026,
    isRetired: false,
    difficulty: "Advanced",
    scaleCategory: "Functional Mechanical Tabletop Arcade",
    clutchScore: 9.8,
    galleryImages: [
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt0634150317c9de3f/blte7ecfac1aa09d7c5-11374_Prod_en-gb.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
                "caption": "Complete upright arcade pinball cabinet and backglass marquee"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/bltc8e02c7829b21a50/blte7ecfac1aa09d7c5-11374_WEB_SEC03_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Playfield obstacle layout: rubber bumpers, spinner gates, and drop targets"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blte9fee3b370809332/blte7ecfac1aa09d7c5-11374_WEB_SEC04_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Mechanical flipper lever mechanism and return guide channels"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt575f6b97271351b2/blte7ecfac1aa09d7c5-11374_WEB_SEC06_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Spring-loaded manual ball plunger and launch chute assembly"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt9dd3672dd8d5ad1f/blte7ecfac1aa09d7c5-11374_WEB_SEC07.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Internal mechanical scorekeeper odometer and reel gearing"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt7ebb72b072a03f07/blte7ecfac1aa09d7c5-11374_WEB_SEC02_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=450&dpr=1",
                "caption": "Coin door assembly and tactile side-flipper button linkages"
          }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt0634150317c9de3f/blte7ecfac1aa09d7c5-11374_Prod_en-gb.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
    createdAt: new Date("2026-06-01"),
    affiliateLinks: [
      {
        id: "link-11374-aliexpress",
        setId: "set-11374",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3jgorJb",
        internalSlug: "aliexpress-arcade-pinball-machine-11374",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-11374-aliexpress-plaza",
        setId: "set-11374",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3jgorJb",
        internalSlug: "aliexpress-plaza-arcade-pinball-machine-11374",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "40926": {
    id: "set-40926",
    setNumber: "40926",
    name: "SEGA Genesis / Mega Drive Console",
    lineTheme: "Icons",
    pieceCount: 479,
    minifigsCount: 0,
    officialPriceCents: null,
    releaseYear: 2026,
    isRetired: false,
    difficulty: "Intermediate",
    scaleCategory: "Compact Hardware Display (~1:3 Scale)",
    clutchScore: 9.4,
    galleryImages: [
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt7c82306f195e1ab9/blt443c77033df96caf-40926_Prod_en-gb.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
                "caption": "Complete 16-Bit console setup with controller and Sonic the Hedgehog cartridge"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blta55ee103a8522208/blt443c77033df96caf-40926_WEB_SEC01_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Spring-loaded cartridge bay with dust flap mechanism"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt3013437cb4abea98/blt443c77033df96caf-40926_WEB_SEC02_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Green Hill Zone micro-diorama display cartridge"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt5cce65b40279b6f1/blt443c77033df96caf-40926_WEB_SEC03_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Ergonomic three-button controller with pivoting circular directional D-pad"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt59ec0f5db933bd0b/blt443c77033df96caf-40926_WEB_SEC04_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Volume slider potentiometer and power switch mechanical assembly"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt8694a07b79f23b27/blt443c77033df96caf-40926_WEB_SEC05_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "High Definition Graphics circular bezel and gold foil printing"
          }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt7c82306f195e1ab9/blt443c77033df96caf-40926_Prod_en-gb.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
    createdAt: new Date("2026-06-01"),
    affiliateLinks: [
      {
        id: "link-40926-aliexpress",
        setId: "set-40926",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c2yFRoJr",
        internalSlug: "aliexpress-sega-genesis-40926",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-40926-aliexpress-plaza",
        setId: "set-40926",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c2yFRoJr",
        internalSlug: "aliexpress-plaza-sega-genesis-40926",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "21368": {
    id: "set-21368",
    setNumber: "21368",
    name: "Peanuts: Snoopy's Doghouse",
    lineTheme: "Ideas",
    pieceCount: 964,
    minifigsCount: 0,
    officialPriceCents: null,
    releaseYear: 2026,
    isRetired: false,
    difficulty: "Intermediate",
    scaleCategory: "Kinetic Vignette & Character Sculpture (25 x 17 cm)",
    clutchScore: 9.6,
    galleryImages: [
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt46208f9cf7697208/21368_Prod.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
                "caption": "Snoopy reclining across scarlet gable apex with Woodstock companion"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt7b41615590bcd580/21368_WEB_SEC01_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Sitting Snoopy pose beside red ceramic dog dish and bone"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/bltea4d7a656e02dc79/21368_WEB_SEC02_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "World War I Flying Ace aviator gear: leather cap, goggles, and red flying scarf"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt3ed1e76ae0d6b91e/21368_WEB_SEC05_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Literary giant typewriter desk accessory and campfire scout setup"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt3e82a9b2a8f626bc/21368_WEB_SEC06_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Lift-off roof revealing secret subterranean chamber with artwork and clock"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt5f623e4692a8f51b/21368_WEB_SEC07_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Woodstock brick-built canary companion perched on mailbox"
          }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt46208f9cf7697208/21368_Prod.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
    createdAt: new Date("2026-06-01"),
    affiliateLinks: [
      {
        id: "link-21368-aliexpress",
        setId: "set-21368",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c42vGfTL",
        internalSlug: "aliexpress-snoopy-doghouse-21368",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-21368-aliexpress-plaza",
        setId: "set-21368",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c42vGfTL",
        internalSlug: "aliexpress-plaza-snoopy-doghouse-21368",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "72051": {
    id: "set-72051",
    setNumber: "72051",
    name: "Donkey Kong Arcade Machine",
    lineTheme: "Icons",
    pieceCount: 1367,
    minifigsCount: 1,
    officialPriceCents: null,
    releaseYear: 2026,
    isRetired: false,
    difficulty: "Advanced",
    scaleCategory: "Scale Arcade Cabinet & Kinetic Diorama (39 x 27 cm)",
    clutchScore: 9.7,
    galleryImages: [
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt40ba11f38226fc58/72051_Prod.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
                "caption": "Full 39cm upright arcade cabinet with illuminated marquee and CRT bezel"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt638f0ecfacd7827d/blt53a3e9f1656c6df5-72051_WEB_SEC01_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "25m Level 1 pink-orange girder slope run and cascading barrels"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt971e5dfddffdcb6e/blt53a3e9f1656c6df5-72051_WEB_SEC02_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Articulated brick-built Donkey Kong relief sculpture atop derrick"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt809e6463937288b2/blt53a3e9f1656c6df5-72051_WEB_SEC03_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Exclusive 1981 retro Jumpman minifigure with dual-molded hammer"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt7270db316f067c5b/blt53a3e9f1656c6df5-72051_WEB_SEC04_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Internal mechanical cam drive and barrel elevator lift gear train"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/blt3d74d0d173f8139e/blt53a3e9f1656c6df5-72051_WEB_SEC05_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Sprung mechanical joystick with rubber dampers and twin action buttons"
          },
          {
                "url": "https://www.lego.com/cdn/cs/set/assets/bltfd6d4ecfc704c70f/blt53a3e9f1656c6df5-72051_WEB_SEC06_NOBG.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
                "caption": "Technician's rear access door with gravity coin drop and motherboard PCB"
          }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt40ba11f38226fc58/72051_Prod.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
    createdAt: new Date("2026-06-01"),
    affiliateLinks: [
      {
        id: "link-72051-aliexpress",
        setId: "set-72051",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3L9iuel",
        internalSlug: "aliexpress-donkey-kong-arcade-72051",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-72051-aliexpress-plaza",
        setId: "set-72051",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3L9iuel",
        internalSlug: "aliexpress-plaza-donkey-kong-arcade-72051",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "76271": {
    id: "set-76271",
    setNumber: "76271",
    name: "Batman: The Animated Series Gotham City",
    lineTheme: "DC",
    pieceCount: 4210,
    minifigsCount: 4,
    officialPriceCents: null,
    releaseYear: 2024,
    isRetired: false,
    difficulty: "Expert / AFOL",
    scaleCategory: "3D Art-Deco Skyline Relief & Architectural Wall Tapestry (76 x 41 cm)",
    clutchScore: 9.8,
    galleryImages: [
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt9e40cf27511360fc/76271_alt10.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
        caption: "Expansive 76 cm wide Batman: The Animated Series Gotham City skyline bas-relief"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt9855429dd82d411a/76271_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
        caption: "Removable building facades revealing 15 interior micro-scenes (Batcave, Wayne Manor, Arkham Asylum)"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt6d3054c438079fb4/76271_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
        caption: "GCPD Headquarters, sweeping Bat-Signal beam, and police surveillance airship in blood-red sky"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt0c9bb937e2622035/76271_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
        caption: "Four exclusive animated-style minifigures (Batman, The Joker, Harley Quinn, Catwoman) on twin-gargoyle ledge"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltdceb8a5458216da7/76271_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
        caption: "Wall-mounted art installation showing 3D depth and layered Dark Deco architecture"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blte71b603d2b6fd36b/76271_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
        caption: "Arkham Asylum gothic entrance gate and micro-scale villain hideouts"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt686d7fa03ea1038f/76271_alt8.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
        caption: "Wayne Enterprises skyscraper spire and silhouette of the Batwing in flight"
      }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt9e40cf27511360fc/76271_alt10.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    createdAt: new Date("2024-04-01"),
    affiliateLinks: [
      {
        id: "link-76271-aliexpress",
        setId: "set-76271",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4FqS35n",
        internalSlug: "aliexpress-batman-gotham-city-76271",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-76271-aliexpress-plaza",
        setId: "set-76271",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4FqS35n",
        internalSlug: "aliexpress-plaza-batman-gotham-city-76271",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "43263": {
    id: "set-43263",
    setNumber: "43263",
    name: "Beauty and the Beast Castle",
    lineTheme: "Disney",
    pieceCount: 2916,
    minifigsCount: 10,
    officialPriceCents: null,
    releaseYear: 2025,
    isRetired: false,
    difficulty: "Advanced",
    scaleCategory: "Fairytale Architecture & Kinetic Ballroom Castle (53 x 33 x 15 cm)",
    clutchScore: 9.7,
    galleryImages: [
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt72d352ea938eb694/43263_Prod_en-gb.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Front French gothic palace facade and 10-character ensemble display (53 cm height)"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt240cb9cb2ae98f50/43263_Lifestyle_Build_05_en-gb.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Grand ballroom with kinetic rotating twin-gear dance floor for Belle and the Beast"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt94c9afed84f1f992/43263_Lifestyle_Build_06_en-gb.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Be Our Guest banquet hall featuring revolving tabletop serving platters"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt30a6997db44717ef/43263_Lifestyle_Build_07_en-gb.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Grand detachable ceremonial staircase with baroque balustrades and gilded archways"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blta544bfd0d822d605/43263_Lifestyle_Build_08_en-gb.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "West Wing tower chamber with the enchanted rose under glass cloche and secret hidden vault"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt03ba8ab0b1968558/43263_Lifestyle_Build_09_en-gb.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Rear 4-level dollhouse cross-section revealing all furnished royal chambers and library"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltfeaff014263f4471/43263_Lifestyle_Envr_02_en-gb.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Finished 53 cm architectural castle model displayed in an adult ambient showcase"
      }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt72d352ea938eb694/43263_Prod_en-gb.png?fit=bounds&format=webply&quality=80&width=1200&height=1200&dpr=1",
    createdAt: new Date("2025-03-01"),
    affiliateLinks: [
      {
        id: "link-43263-aliexpress",
        setId: "set-43263",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c2yNZCId",
        internalSlug: "aliexpress-beauty-and-the-beast-castle-43263",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-43263-aliexpress-plaza",
        setId: "set-43263",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c2yNZCId",
        internalSlug: "aliexpress-plaza-beauty-and-the-beast-castle-43263",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "43014": {
    id: "set-43014",
    setNumber: "43014",
    name: "Scuderia Ferrari HP Charles Leclerc Helmet",
    lineTheme: "Icons",
    pieceCount: 886,
    minifigsCount: 1,
    officialPriceCents: null,
    releaseYear: 2025,
    isRetired: false,
    difficulty: "Intermediate",
    scaleCategory: "1:2 Scale Formula 1 Driver Helmet & Display Plinth (18 x 11 x 13 cm)",
    clutchScore: 9.6,
    galleryImages: [
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blta0e51783efba6e23/43014_Prod.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Assembled 18cm Scuderia Ferrari HP Charles Leclerc helmet on display stand with driver minifigure"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt9abbc529e31a63f8/43014_WEB_SEC01_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Front visor assembly showcasing the iconic Ferrari Prancing Horse crest and HP team sponsor marks"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt3326d8deae35630e/43014_WEB_SEC02_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Side profile detailing Charles Leclerc driver number #16, Monaco flag striping, and aerodynamic contours"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt85f402f7a140d197/43014_WEB_SEC03_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Rear aerodynamic wing with heartfelt personal tributes honoring Papa (Hervé Leclerc) and Jules Bianchi"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt9141ea69c6ad7dbb/43014_WEB_SEC04_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Exclusive Charles Leclerc minifigure in 2025 Ferrari race suit mounted on printed facsimile signature plaque"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt824696f97a873632/43014_WEB_SEC05_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Top ventilation cowl and cooling chimney ductwork embedded into the Rosso Corsa crown"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt26da32cc3a5236ff/43014_Lifestyle_envr.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Finished 18cm collector helmet displayed in an ambient motorsport showcase"
      }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blta0e51783efba6e23/43014_Prod.png?fit=bounds&format=webply&quality=80&width=1200&height=1200&dpr=1",
    createdAt: new Date("2025-03-01"),
    affiliateLinks: [
      {
        id: "link-43014-aliexpress",
        setId: "set-43014",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4KIJFPL",
        internalSlug: "aliexpress-charles-leclerc-helmet-43014",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-43014-aliexpress-plaza",
        setId: "set-43014",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4KIJFPL",
        internalSlug: "aliexpress-plaza-charles-leclerc-helmet-43014",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "75442": {
    id: "set-75442",
    setNumber: "75442",
    name: "The Mandalorian's N-1 Starfighter Ultimate Collector Series",
    lineTheme: "Star Wars",
    pieceCount: 1809,
    minifigsCount: 2,
    officialPriceCents: null,
    releaseYear: 2025,
    isRetired: false,
    difficulty: "Expert / AFOL",
    scaleCategory: "UCS Starfighter & Dual-Angle Dynamic Display Plinth (67 x 39 x 21 cm)",
    clutchScore: 9.8,
    galleryImages: [
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltac214edb04c74236/blt2f8fb720e38f6e09-75442_Prod.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Assembled 67cm UCS Mandalorian N-1 Starfighter mounted on dual-angle flight stand with Din Djarin and Grogu"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt41b0828bcf4f889f/blt2f8fb720e38f6e09-75442_WEB_SEC02_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Port turbinic sublight engine showing exposed combustion manifolds, yellow conduits, and intake cones"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltd9f9c55c23c25c97/blt2f8fb720e38f6e09-75442_WEB_SEC03_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Cockpit flight controls and Grogu's converted rear astromech passenger bubble cupola"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt02aa9be7da499477/blt2f8fb720e38f6e09-75442_WEB_SEC04_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Din Djarin minifigure with detailed arm printing and Grogu beside the official UCS data plaque"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltca46f4cf44fd51a0/blt2f8fb720e38f6e09-75442_WEB_SEC05_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Planar dorsal view showcasing sleek aerodynamic taper, metallic silver plating, and twin engine pods"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt0cdedc71174ba924/blt2f8fb720e38f6e09-75442_WEB_SEC07_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Modular display stand demonstrating alternative presentation angles: banked flight vs. forward vector"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt8809033a1dcbedfe/blt2f8fb720e38f6e09-75442_WEB_SEC08_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Tapered empennage tail spike and rear sublight exhaust nozzle detailing"
      }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/bltac214edb04c74236/blt2f8fb720e38f6e09-75442_Prod.png?fit=bounds&format=webply&quality=80&width=1200&height=1200&dpr=1",
    createdAt: new Date("2025-05-01"),
    affiliateLinks: [
      {
        id: "link-75442-aliexpress",
        setId: "set-75442",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3Cuj2UD",
        internalSlug: "aliexpress-mandalorian-n1-starfighter-75442",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-75442-aliexpress-plaza",
        setId: "set-75442",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3Cuj2UD",
        internalSlug: "aliexpress-plaza-mandalorian-n1-starfighter-75442",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "43015": {
    id: "set-43015",
    setNumber: "43015",
    name: "Lionel Messi – Soccer Legend",
    lineTheme: "Editions",
    pieceCount: 958,
    minifigsCount: 0,
    officialPriceCents: null,
    releaseYear: 2025,
    isRetired: false,
    difficulty: "Intermediate",
    scaleCategory: "Large-Scale Buildable Figure & Dual-Pose Display Plinth (27 x 21 x 14 cm)",
    clutchScore: 9.7,
    galleryImages: [
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt6a690958922d10ec/blt4b2691e217fb0bc0-43015_Prod.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Assembled 27cm Lionel Messi buildable figure in signature two-hands victory pose on the pitch display plinth"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt6c52b684f43b3b45/blt4b2691e217fb0bc0-43015_WEB_SEC01_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Upper torso and arm articulation detail showcasing the iconic celestial skyward celebration"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt3a19a0c41f3fad17/blt4b2691e217fb0bc0-43015_WEB_SEC02_NOBG.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Dynamic alternative running pose capturing Lionel Messi in full stride dribbling the soccer ball"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blte610659113fb4142/blt71ac3f0cf9ece9d5-43015_Block_Standard_2.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Co-molded facial expression, textured beard printing, and dedicated 20-panel soccer ball element"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt6495c0e1c8b5bd9c/blt9c596130efa8fd4e-43015_Block_Standard_1.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Display plinth details featuring the prominent brick-built #10 emblem and printed nameplate"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt0fdfa41b978381a1/blt4b2691e217fb0bc0-43015_Lifestyle_build.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Internal Technic chassis assembly and ratchet joint topology ensuring balanced center-of-gravity"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blta7772877ed8217d3/blt271a96367742417b-43015_Block_Standard_3.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Finished collectible sports display piece showcased in an adult collector study and office environment"
      }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt6a690958922d10ec/blt4b2691e217fb0bc0-43015_Prod.png?fit=bounds&format=webply&quality=80&width=1200&height=1200&dpr=1",
    createdAt: new Date("2025-05-01"),
    affiliateLinks: [
      {
        id: "link-43015-aliexpress",
        setId: "set-43015",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4WW5gcp",
        internalSlug: "aliexpress-lionel-messi-43015",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-43015-aliexpress-plaza",
        setId: "set-43015",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4WW5gcp",
        internalSlug: "aliexpress-plaza-lionel-messi-43015",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "10365": {
    id: "set-10365",
    setNumber: "10365",
    name: "Captain Jack Sparrow's Pirate Ship",
    lineTheme: "Icons",
    pieceCount: 2862,
    minifigsCount: 8,
    officialPriceCents: null,
    releaseYear: 2025,
    isRetired: false,
    difficulty: "Advanced",
    scaleCategory: "Galleon Flagship & Rigged Display Model (64 x 64 x 23 cm)",
    clutchScore: 9.8,
    galleryImages: [
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltcf20096d15e25f4c/10365_Prod_en-gb.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Fully assembled 64cm Black Pearl flagship with towering triple masts and weathered black fabric sails"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt2f74ebc8a31b2e87/10365_WEB_SEC02_NOBG_en-gb.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Port broadside gun battery featuring operational cannon hatch ports and authentic timber hull curvature"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt36b45fc108d1a3cd/10365_WEB_SEC04_NOBG_en-gb.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Removable quarterdeck roof exposing the furnished Captain's Quarters with navigation chart, desk, and apple"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blte5182c6198aceabb/10365_WEB_SEC05_NOBG_en-gb.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Bowsprit assembly highlighting the sculpted winged figurehead and working dual anchor hoist winches"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt405338cedd1102a8/10365_WEB_SEC06_NOBG_en-gb.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Full crew lineup of 8 minifigures: Jack Sparrow, Barbossa, Will Turner, Elizabeth, Gibbs, Anamaria, Cotton, and Marty"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt0ce12fc758ac52a0/10365_WEB_SEC07_NOBG_en-gb.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Modular lower keel compartments concealing hidden pirate treasure chests and smuggled contraband"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltadf45595c6a69861/10365_WEB_SEC08_NOBG_en-gb.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1",
        caption: "Intricate masthead yards, crow's nest observation platforms, and tensioned rigging ratline ladders"
      }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/bltcf20096d15e25f4c/10365_Prod_en-gb.png?fit=bounds&format=webply&quality=80&width=1200&height=1200&dpr=1",
    createdAt: new Date("2025-05-01"),
    affiliateLinks: [
      {
        id: "link-10365-aliexpress",
        setId: "set-10365",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3NuYN1f",
        internalSlug: "aliexpress-jack-sparrows-pirate-ship-10365",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-10365-aliexpress-plaza",
        setId: "set-10365",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3NuYN1f",
        internalSlug: "aliexpress-plaza-jack-sparrows-pirate-ship-10365",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },

  "10303": {
    id: "set-10303",
    setNumber: "10303",
    name: "Loop Coaster",
    lineTheme: "Icons",
    pieceCount: 3756,
    minifigsCount: 11,
    officialPriceCents: null,
    releaseYear: 2022,
    isRetired: false,
    difficulty: "Expert / AFOL",
    scaleCategory: "Mechanical Fairground Monument & Dual-Loop Kinetic Sculpture (92 x 85 x 34 cm)",
    clutchScore: 9.7,
    galleryImages: [
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt0e81d1708c094553/10303.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Towering 92cm dual-loop kinetic roller coaster monument in full operational profile"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blta36d50150d4f6227/10303_alt1.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Vertical elevator tower assembly with internal counterweight balance and cable pulley rigging"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt8339b9be174e3eaf/10303_alt2.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Precision-engineered teardrop clothoid vertical loops designed for optimal g-force momentum transfer"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt4662a8298ae7273a/10303_alt3.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Covered station platform with dispatch control booth, turnstiles, and boarding queue architecture"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltc0e7acab47e8652c/10303_alt4.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "High-banking curve transition linking the second inversion loop into the decelerating brake run"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt949e1afdb48054b1/10303_alt5.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Three-car train cockpit with articulated wheel bogeys and reversible thrill/terror minifigure expressions"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt4aaa1f6f8792a2f1/10303_alt6.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Fairground vendor kiosks featuring pretzel cart, balloon stand, hot-dog vendor, and height restriction post"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltbbde02e2c3a58071/10303_alt7.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Park visitor promenade detailing landscaped park benches, printed route maps, and guest amenities"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltd92c66637c40053e/10303_alt8.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Structural rear view demonstrating the multi-stage Technic lattice bracing and shear-wall stabilization"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt2aaa0cb4c5e28a98/10303_alt9.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Apex transfer mechanism tilting track section at 92cm height to engage gravity launch sequence"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt58e8667fe42f278d/10303_alt10.jpg?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Full architectural lifestyle showcase highlighting dramatic vertical presence on collector shelving"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltfdc96d625144c251/10303_alt11.jpg?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Baseplate gear train transmission prepared for optional LEGO Powered Up motorization automation"
      }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt0e81d1708c094553/10303.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
    createdAt: new Date("2025-05-01"),
    affiliateLinks: [
      {
        id: "link-10303-aliexpress",
        setId: "set-10303",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3kiL12t",
        internalSlug: "aliexpress-loop-coaster-10303",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-10303-aliexpress-plaza",
        setId: "set-10303",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3kiL12t",
        internalSlug: "aliexpress-plaza-loop-coaster-10303",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "10333": {
    id: "set-10333",
    setNumber: "10333",
    name: "The Lord of the Rings: Barad-dûr",
    lineTheme: "Icons",
    pieceCount: 5471,
    minifigsCount: 10,
    officialPriceCents: null,
    releaseYear: 2024,
    isRetired: false,
    difficulty: "Expert / AFOL",
    scaleCategory: "Dark Fortress Monolith & Illuminating Eye of Sauron (83 x 45 x 30 cm)",
    clutchScore: 9.9,
    galleryImages: [
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt370b7e8cc1fcceb2/10333.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Towering 83cm Dark Tower of Mordor crowned by the luminous blazing Eye of Sauron"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt14d2306147e2a6f3/10333_alt1.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Rear cross-section revealing four richly furnished fortress tiers from forge to throne room"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt03549430238c05bf/10333_alt2.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Ground floor subterranean Orc armory with glowing molten furnace, anvil, and weapon racks"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blta983dce02ccf4330/10333_alt3.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Automated black iron fortress gates driven by a hidden mechanical gear rotation knob"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt6b5e35e0ad41acb5/10333_alt4.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Throne room level featuring the seeing-stone Palantír, hidden lore compartments, and throne"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blte70d9991035a6ff0/10333_alt5.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "10-minifigure ensemble including Sauron with spiky mace, Mouth of Sauron, Orcs, Frodo, and Sam"
      }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt370b7e8cc1fcceb2/10333.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
    createdAt: new Date("2025-05-01"),
    affiliateLinks: [
      {
        id: "link-10333-aliexpress",
        setId: "set-10333",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3ApYyON",
        internalSlug: "aliexpress-barad-dur-10333",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-10333-aliexpress-plaza",
        setId: "set-10333",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c3ApYyON",
        internalSlug: "aliexpress-plaza-barad-dur-10333",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "75419": {
    id: "set-75419",
    setNumber: "75419",
    name: "Death Star",
    lineTheme: "Star Wars",
    pieceCount: 9023,
    minifigsCount: 38,
    officialPriceCents: null,
    releaseYear: 2025,
    isRetired: false,
    difficulty: "Expert / AFOL",
    scaleCategory: "UCS Architectural Cutaway Station & Cross-Section Diorama (70 x 79 x 27 cm)",
    clutchScore: 9.9,
    galleryImages: [
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt725a94446f56dbe2/75419_Prod.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Colossal 9,023-piece Ultimate Collector Series Death Star cutaway battlestation in 79cm wide profile"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltcd45a9525e1d65eb/75419_WEB_SEC02_NOBG.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Superlaser firing chamber showing emerald laser converge array and articulated targeting dish"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt16f43e70caced534/75419_WEB_SEC01_NOBG.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Multi-tier operational cross-section highlighting Emperor's Throne Room, Hangar 327, and trash compactor"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt1399e7e1ec647169/75419_WEB_SEC04_NOBG.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Hangar Bay 327 staging platform with magnetic tractor beam control core and Imperial docking crane"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltd36f5780d5efb8ef/75419_WEB_SEC03_NOBG.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Detention Block AA-23 corridor with security command console, sliding cell doors, and trash chute"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt1fd67ebbe211a5a9/75419_WEB_SEC05_NOBG.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Record-breaking 38-character minifigure cast spanning the entire Imperial military hierarchy and Rebel heroes"
      }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt725a94446f56dbe2/75419_Prod.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
    createdAt: new Date("2025-05-01"),
    affiliateLinks: [
      {
        id: "link-75419-aliexpress",
        setId: "set-75419",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4NIiW5b",
        internalSlug: "aliexpress-death-star-75419",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-75419-aliexpress-plaza",
        setId: "set-75419",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4NIiW5b",
        internalSlug: "aliexpress-plaza-death-star-75419",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
  "43011": {
    id: "set-43011",
    setNumber: "43011",
    name: "Lionel Messi – Soccer Highlights",
    lineTheme: "Editions",
    pieceCount: 500,
    minifigsCount: 1,
    officialPriceCents: null,
    releaseYear: 2025,
    isRetired: false,
    difficulty: "Beginner",
    scaleCategory: "Interactive Stadium Action Vignette & Kinetic Pitch Display (13 x 24 x 15 cm)",
    clutchScore: 9.6,
    galleryImages: [
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blta7f780a695377c2e/blt66b06d25e176c52b-43011_Prod_en-gb.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Interactive penalty box stadium showcase featuring kinetic goal target and official Messi minifigure"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/bltd57721322225885c/blt66b06d25e176c52b-43011_WEB_SEC01_NOBG.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Spring-loaded shooting mechanism allowing tactile ball strikes into the upper corner netting"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt0973edf6550c9c59/blt66b06d25e176c52b-43011_WEB_SEC02_NOBG.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Rotating goalkeeper training dummy gear linkage operated via rear turntable dial"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt4c8cab49edd41654/blt66b06d25e176c52b-43011_WEB_SEC03_NOBG.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Stadium grandstand backdrop with floodlight pylons, digital clock scoreboard, and championship trophy plinth"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blt0165ddfe45fc62df/blt66b06d25e176c52b-43011_Lifestyle_build.jpg?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Exclusive Lionel Messi minifigure featuring printed captain's armband and custom golden cleat elements"
      },
      {
        url: "https://www.lego.com/cdn/cs/set/assets/blta7e358fc2598b8d4/blt66b06d25e176c52b-43011_Lifestyle_build_2.jpg?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
        caption: "Modular pitch boundary designed to interlock with future sports stadiums in the LEGO Editions lineup"
      }
    ],
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blta7f780a695377c2e/blt66b06d25e176c52b-43011_Prod_en-gb.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
    createdAt: new Date("2025-05-01"),
    affiliateLinks: [
      {
        id: "link-43011-aliexpress",
        setId: "set-43011",
        retailerName: "AliExpress Choice",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4XEiqGh",
        internalSlug: "aliexpress-lionel-messi-highlights-43011",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: "link-43011-aliexpress-plaza",
        setId: "set-43011",
        retailerName: "AliExpress Fast Delivery",
        destinationUrl: "https://s.click.aliexpress.com/e/_c4XEiqGh",
        internalSlug: "aliexpress-plaza-lionel-messi-highlights-43011",
        isActive: true,
        createdAt: new Date(),
      },
    ],
  },
};

export const SAMPLE_POSTS: Record<string, PostWithSet> = {
  "millennium-falcon-ucs-75192": {
    id: "post-75192",
    title: "Millennium Falcon UCS (75192): The Monolith of Block Architecture",
    slug: "millennium-falcon-ucs-75192",
    excerpt: "Does this 7,541-piece titan still dominate the hobby? We dissect its heavy-load Technic bridge chassis, transport fragility, and the micro-scale greebling that defines it.",
    status: "published",
    readingTimeMinutes: 11,
    setId: "set-75192",
    publishedAt: new Date("2026-09-08"),
    createdAt: new Date("2026-09-07"),
    updatedAt: new Date("2026-09-08"),
    legoSet: SAMPLE_SETS["75192"],
    affiliateLinks: SAMPLE_SETS["75192"].affiliateLinks,
    galleryImages: SAMPLE_SETS["75192"].galleryImages,
    pros: [
      "Monumental 7,541-piece showcase with unmatched micro-mechanical greebling density",
      "Heavy-duty bridge-grade Technic truss capable of anchoring 13.2 kilograms of mass",
      "Dual-era swappable sensor dishes and crew minifigures (Original Trilogy & Sequels)",
      "Exquisitely detailed interior vignettes: Dejarik holochess table and hyperdrive station"
    ],
    cons: [
      "Upper hull panels rest on gravity locator pins; high risk of detachment during transit",
      "Requires an expansive 84 x 60 cm reinforced display surface"
    ],
    verdictScore: 9.7,
    verdictSummary: "The definitive centerpiece of block architecture. While its sheer mass demands respect and careful handling, the intricate Technic bridge truss and dense mechanical greebling represent the apex of collector-grade building.",
    metrics: [
      { label: "Build Techniques", score: 9.9, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.5, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.2, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.8, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The Inevitable Monolith

Originally unveiled in 2017, the Ultimate Collector Series Millennium Falcon (reference 75192) continues to hold an almost mythical status among adult brick builders. Measuring an astounding 84 centimeters long by 60 centimeters wide and weighing over 13 kilograms, this is not a casual display model: it is a massive architectural installation in interlocking ABS.

---

## 1. The Internal Skeleton: Heavy-Load Civil Engineering

Approaching this colossus demands dedicated workbench space and systematic discipline. The first eight bags look nothing like a freighter: they form a titanic spatial truss of heavy-gauge Technic beams, cross-braces, and high-friction locking pins.

This framework is pure structural engineering. The seven landing gear struts must distribute more than 28 pounds of downward force over years of static display without developing plastic fatigue or sagging. The resulting box-truss core can be lifted by two hands without the slightest sign of torsion.

---

## 2. The Greebling Labyrinth: Micro-Mechanical Detailing

The signature achievement of the UCS Falcon is its exterior *greebling*: the dense, hyper-detailed layering of small industrial components—telephone receivers, roller skates, monkey wrenches, binoculars, grilles, and exhaust manifolds—that replicate battle damage and exposed hyperdrive conduit pipes.

The forward mandibles and rear engine cooling rings are a symphony of textural depth. However, this visual realism carries an important operational caveat:
- **Transit & Handling**: Virtually all upper hull armor plates rest in place by gravity or minimal locating pins. Any attempt to carry the vessel without grasping the central Technic frame will cause surrounding armor panels to slide free.

---

## 3. Dual-Era Vignettes & Display Recommendations

The set bridges generations by providing modular components for both the Original Trilogy (classic round sensor dish, young Han & Leia) and the Sequel Trilogy (rectangular dish, Rey & Finn). Interior access reveals the main lounge with the Dejarik holochess seating and engineering consoles.

Given its imposing dimensions, serious collectors frequently pair this build with custom steel or acrylic vertical display brackets, tilting the ship 70 degrees to reduce shelf footprint while showcasing its breathtaking surface topography.
\`,
  },

  "delorean-regreso-al-futuro-10300": {
    id: "post-10300",
    title: "Back to the Future Time Machine (DeLorean 10300): Three Timelines in One Iconic Chassis",
    slug: "delorean-regreso-al-futuro-10300",
    excerpt: "Deep technical review of Icons 10300: the synchronized 4-wheel hover lever mechanism, illuminated Flux Capacitor brick, and authentic 3-in-1 modularity.",
    status: "published",
    readingTimeMinutes: 8,
    setId: "set-10300",
    publishedAt: new Date("2026-09-05"),
    createdAt: new Date("2026-09-04"),
    updatedAt: new Date("2026-09-05"),
    legoSet: SAMPLE_SETS["10300"],
    affiliateLinks: SAMPLE_SETS["10300"].affiliateLinks,
    galleryImages: SAMPLE_SETS["10300"].galleryImages,
    pros: [
      "Ingenious underside single-lever synchronized wheel folding mechanism for hover flight",
      "Full 3-in-1 modular capability to build Part I, Part II, or Part III out of the single box",
      "Illuminated Flux Capacitor brick with tactical pushbutton activation on the rear deck",
      "Perfect gull-wing door balance remaining open without artificial support struts"
    ],
    cons: [
      "Subtle contrast between bare light bluish-gray plastic and silver drum-lacquered accents",
      "A-pillar roof joint requires gentle alignment when operating doors"
    ],
    verdictScore: 9.3,
    verdictSummary: "A triumph of pop-culture automotive design. The synchronized 4-wheel hover conversion mechanism combined with authentic light-up flux capacitor and 3-in-1 modularity makes it a must-have display model.",
    metrics: [
      { label: "Build Techniques", score: 9.4, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.2, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.5, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.3, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: Redemption of a Pop-Culture Legend

Following the modest 2013 Cuusoo release, fans of Robert Zemeckis' iconic trilogy long clamored for a large-scale collector model that could do justice to Giorgetto Giugiaro's razor-sharp stainless steel lines. With set 10300, the design team did not simply deliver a striking automotive silhouette: they engineered a transformable platform capable of faithfully representing the DeLorean from any of the three films.

---

## 1. Mechanics of the Synchronized Folding Wheels

The crowning engineering achievement is concealed underneath the floorpan. A single tactile slider lever activates an interconnected linkage of Technic axles and spring elements, simultaneously pivoting all four wheels 90 degrees downward into the hover flight mode seen at the climax of *Part I* and throughout *Part II*.

The toggle snaps with a satisfying mechanical click, holding its position securely whether displayed flat on rubber tires or suspended mid-air in flight configuration.

---

## 2. Cockpit Fidelity & The Glowing Flux Capacitor

Stepping inside the cabin reveals an extraordinary level of movie accuracy. The centerpiece is the legendary **Flux Capacitor**, powered by an integrated warm-white light brick that illuminates upon pressing the rear exhaust deck. The dashboard features printed time circuit displays (Destination: Oct 26 1985, Present: Oct 26 1985, Last Time Departed: Nov 05 1955).

Crucially, the iconic gull-wing doors employ a counterbalance hinge design that stays open reliably on display without drooping or requiring secondary clips.

---

## 3. The 3-in-1 Modular Evolution

The kit includes all auxiliary elements to switch variants at will:
- **Part I**: Lightning rod pole, hook assembly, and plutonium chamber reactor.
- **Part II**: Mr. Fusion home energy generator and hover-converted wheels.
- **Part III**: Hood-mounted vacuum tube circuit board with red-rimmed whitewall tires.
\`,
  },
  "home-alone-21330": {
    id: "post-21330",
    title: "Home Alone McCallister House (21330): The Pinnacle of Cinema Dollhouse Engineering",
    slug: "home-alone-21330",
    excerpt: "A monumental 3,955-piece architectural tribute to the 1990 holiday classic. We dissect its split-opening dollhouse facade, complex booby-trap linkages, and glowing basement furnace.",
    status: "published",
    readingTimeMinutes: 10,
    setId: "set-21330",
    publishedAt: new Date("2026-09-11"),
    createdAt: new Date("2026-09-10"),
    updatedAt: new Date("2026-09-11"),
    legoSet: SAMPLE_SETS["21330"],
    affiliateLinks: SAMPLE_SETS["21330"].affiliateLinks,
    galleryImages: SAMPLE_SETS["21330"].galleryImages,
    pros: [
      "Brilliant dual-access architecture: front facade swings wide on Technic hinges while floors lift off modularly",
      "Remarkable density of interactive mechanical traps: swinging paint cans, iron drop chute, and spinning living room silhouettes",
      "Atmospheric basement furnace featuring a lever-operated jaw with warm glowing light brick",
      "Superb character lineup of 5 exclusive minifigures alongside the iconic Oh-Kay plumbing van"
    ],
    cons: [
      "Substantial sticker sheet required for intricate interior artwork and festive holiday accents",
      "Substantial footprint and 4 kg total mass demanding reinforced horizontal display support"
    ],
    verdictScore: 9.7,
    verdictSummary: "A masterwork of festive nostalgia and mechanical dollhouse engineering. With its outward-swinging Georgian facade, functional booby traps, and glowing furnace, set 21330 sets an unmatched standard for film-accurate architectural builds.",
    metrics: [
      { label: "Build Techniques", score: 9.8, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.5, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.6, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.7, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The Suburban Fortress of 1990

Few residences in modern cinematic lore are as instantly recognizable as the grand Georgian red-brick home of the McCallister family from Chris Columbus and John Hughes' 1990 holiday classic *Home Alone*. Originating from the LEGO Ideas platform via Ukrainian fan designer Alex Storozhuk (*adwind*), reference 21330 transforms the sprawling suburban estate into a formidable 3,955-piece architectural marvel.

Spanning an imposing 34 cm high, 37 cm wide, and 37 cm deep, this build is not merely a static holiday display: it is an interconnected mechanical labyrinth of nostalgic booby traps and dollhouse structural innovation.

---

## 1. Structural Engineering & Dollhouse Modularity

The primary engineering challenge of adapting a three-story mansion with attic and basement is interior accessibility. Rather than relying solely on conventional Modular Buildings lift-off floors, the design team engineered an ingenious **dual-access system**:
1. **The Outward-Swinging Facade**: The front ground-floor and first-floor exterior walls are anchored to heavy-gauge Technic pin hinges, swinging smoothly open 180 degrees to reveal the entire cross-section of the house like a classic Victorian dollhouse.
2. **Modular Lift-Off Floors**: Both the main attic roof gables and intermediate ceilings can be detached independently, providing unrestricted access to the kitchen, dining room, and upstairs bedrooms.
3. **Reinforced Subfloor Foundation**: With the finished assembly weighing over 4 kilograms, the baseplate integrates a cross-braced Technic framework that prevents central sagging during lifting or tabletop rotation.

---

## 2. Cinematic Trap Mechanisms: Kinetic Horology in ABS

Where set 21330 truly stands apart from standard modular structures is its integration of kinetic play mechanisms faithfully reproducing Kevin's defense plan:
- **The Living Room Party Illusion**: Operating a side exterior knob rotates an internal geartrain that simultaneously turns the record player on the credenza and spins the train set around the Christmas tree with a cutout silhouette of Michael Jordan.
- **The Staircase Traps**: A hidden lever tilts the balustrade to drop swinging paint cans attached to synthetic string cords directly down the staircase well.
- **The Iron Drop**: A vertical laundry chute in the second-floor master bedroom allows builders to drop an iron through the floorboards, matching the exact trajectory that disorients Marv in the basement staircase.
- **Kitchen Backdoor Blowtorch**: Opening the rear exterior door triggers a clever cam linkage that snaps a blowtorch nozzle into position, mimicking the scorched-scalp booby trap.

---

## 3. Subterranean Atmosphere & The Treehouse Zipline

The detached ground-floor access reveals a sunken basement featuring the fearsome **heating furnace**. Moving an external rear lever causes the furnace's jagged iron jaws to open and shut, while depressing an integrated warm-orange light brick bathes the coal grates in a haunting subterranean glow.

In the backyard, the build features the detached pine treehouse linked to the attic window by a high-angle taut string zipline. Kevin can be clipped to a bicycle handlebar element and guided down the ropeway to safety. Completing the scene is the modular **Oh-Kay Plumbing & Heating** Dodge Ram cargo van, equipped with rear doors that open to house the Wet Bandits' crowbars and stolen goods.

---

## 4. Minifigure Fidelity & Collector Legacy

The set includes five character minifigures with cinema-accurate dual facial expressions:
- **Kevin McCallister**: Equipped with his festive red reindeer sweater, knit ski cap, and dual terrified/mischievous face prints.
- **Harry & Marv**: The Wet Bandits, featuring Harry's iconic gold tooth and singed skull cap, alongside Marv with the silver iron grid scorched across his face.
- **Old Man Marley**: Featuring a weathered grey beard, dark overcoat, and his reliable snow shovel.
- **Kate McCallister**: Kevin's mother, capturing the poignant emotional return at the climax.

Set 21330 stands as one of the most comprehensive, joyful, and technically sophisticated licensed architecture builds ever released, marrying substantial brick heft with timeless cinematic storytelling.
\`,
  },
  "arcade-pinball-machine-11374": {
    id: "post-11374",
    title: "Arcade Pinball Machine (11374): Mechanical Horology Meets 80s Kinetic Play",
    slug: "arcade-pinball-machine-11374",
    excerpt: "A fully playable 2,274-piece tabletop flipper cabinet. We dissect the spring-loaded plunger tension, rubber-band flipper actuation, mechanical score counter, and the coveted light-blue Classic Space astronaut.",
    status: "published",
    readingTimeMinutes: 8,
    setId: "set-11374",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-11"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["11374"],
    affiliateLinks: SAMPLE_SETS["11374"].affiliateLinks,
    galleryImages: SAMPLE_SETS["11374"].galleryImages,
    pros: [
      "100% mechanical analog flipper action with responsive rubber-band recoil and zero electrical dependencies",
      "Clever manual scorekeeper wheel embedded within the vintage illuminated backglass marquee",
      "Spring-loaded ball plunger delivering authentic kinetic launch velocity across the sloped playfield",
      "Includes the ultra-desirable exclusive Light Blue Classic Space astronaut minifigure"
    ],
    cons: [
      "Rubber band tension requires periodic inspection and occasional fine calibration for optimal flipper snap",
      "Ball return trough tolerance demands a level display surface to prevent gravity ball stagnation"
    ],
    verdictScore: 9.6,
    verdictSummary: "A landmark achievement in functional mechanical brick design. Blending authentic 80s arcade cabinet aesthetics with 100% mechanical flippers, spring launchers, and tactile scoring, reference 11374 is pure kinetic joy for adult collectors.",
    metrics: [
      { label: "Build Techniques", score: 9.8, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.5, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.6, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.7, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The Revival of Analog Arcade Sorcery

Before microprocessor displays and high-refresh screens dominated electronic entertainment, the golden age of coin-op arcades belonged to the sensory thrills of Bally, Williams, and Gottlieb pinball tables. With reference 11374, the LEGO Icons design team tackles one of the most ambitious engineering briefs in brick history: constructing a fully functional, gravity-driven tabletop pinball machine across 2,274 precision elements.

Measuring over 42 cm high, 28 cm wide, and 45 cm deep, this tabletop cabinet is an exhilarating love letter to 1980s mechanical game design.

---

## 1. Kinetic Mechanics: Pure Analog Flipper Engineering

The primary triumph of set 11374 is achieving lightning-fast flipper response with zero motors, batteries, or electronics:
1. **The Twin Flipper Mechanism**: Dual ergonomic side buttons actuate internal Technic wishbones linked to high-friction pivot pins and white silicone tension bands. Pressing either button creates an instantaneous, crisp flick with immediate mechanical recoil.
2. **Spring-Loaded Plunger**: The ball launch lane features a pull-rod plunger driven by an internal metal compression spring. Pulling back and releasing sends high-density spheres rocketing up the perimeter curved ramp onto the playfield with authentic tactile momentum.
3. **Ball Return & Coin Door**: Drained balls filter cleanly into a subterranean return channel routed toward a front push-button ball-release gate, faithfully replicating vintage coin-operated game restarts.

---

## 2. Playfield Topography & Obstacle Architecture

The playfield sits at a calculated 7-degree incline, ensuring steady gravitational descent while giving flippers sufficient power to send balls ricocheting to the top arch:
- **Pop Bumpers & Rebound Posts**: Rubberized collar studs redirect balls erratically across the mid-field, producing unpredictable ricochet angles that test builder reflexes.
- **Drop Targets & Roll-Over Lanes**: Precision wedge plates and guide rails channel shots through top multiplier gates, ringing internal bell-style mechanical clickers.
- **Deflector Ramps**: SNOT-built curving ramps permit high-velocity loops that drop the ball safely back toward the upper inlane feeds.

---

## 3. The Backglass Marquee & Rolling Scorekeeper

Perched atop the cabinet is an authentic vertical backglass adorned with vibrant retro-futuristic space graphics. Embedded directly beneath the marquee is a tactile scorekeeper:
- Builders can rotate side dial wheels to register game scores up to 999,999 on gear-synchronized mechanical number tumblers.
- The backglass housing also incorporates an access bay storing replacement balls and maintenance tweezers.

---

## 4. Minifigure Fidelity: The Light Blue Classic Space Astronaut

For AFOL collectors, the set offers an irresistible bonus: the debut of the official **Light Blue Classic Space Astronaut** minifigure, complete with period-accurate vintage helmet, oxygen tanks, and classic gold planetary insignia. Accompanying the astronaut is an 80s arcade gamer minifigure clad in a retro gaming windbreaker and high-top sneakers.

Set 11374 transcends static display: it is an enduring, playable monument to tactile mechanical horology that captures the unmistakable heartbeat of the arcade era.
\`,
  },

  "sega-genesis-console-40926": {
    id: "post-40926",
    title: "SEGA Genesis Console (40926): 16-Bit Nostalgia and Micro-Scale Hardware Architecture",
    slug: "sega-genesis-console-40926",
    excerpt: "A compact 479-piece desktop tribute to the legendary 16-bit titan. We inspect its swappable Genesis/Mega Drive faceplates, tactile volume slider, micro-mosaic Sonic easter egg, and dual wired controllers.",
    status: "published",
    readingTimeMinutes: 6,
    setId: "set-40926",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["40926"],
    affiliateLinks: SAMPLE_SETS["40926"].affiliateLinks,
    galleryImages: SAMPLE_SETS["40926"].galleryImages,
    pros: [
      "Bespoke dual regional customization: complete parts and graphics to build either the North American Genesis or PAL/Japanese Mega Drive",
      "Delightful hidden 3D micro-mosaic of Sonic the Hedgehog concealed within the internal motherboard bay",
      "Tactile mechanical elements: authentic sliding headphone volume potentiometer and springy power toggle",
      "Accompanying miniature Sonic the Hedgehog 2 cartridge that slots smoothly into the beveled cartridge dock"
    ],
    cons: [
      "Micro-scale 3-button gamepads lack printed button designations compared to the full-size GWP edition",
      "Requires precise application of narrow curved sticker strips for the iconic circular faceplate typography"
    ],
    verdictScore: 9.2,
    verdictSummary: "A masterstroke in compact display engineering. By offering dual Genesis/Mega Drive regional customizations, an adorable Sonic 2 cartridge, and tactile hardware sliders at an accessible footprint, set 40926 delivers pure 16-bit retro satisfaction.",
    metrics: [
      { label: "Build Techniques", score: 9.3, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.6, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.5, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.4, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The 16-Bit Console Wars in Compact Scale

Few machines in video gaming history carry the cultural swagger of SEGA's flagship 16-bit juggernaut. Released at the dawn of the 1990s as the **SEGA Genesis** in North America and the **SEGA Mega Drive** across Europe and Japan, this matte-black console challenged established industry dynasties with blistering processor speed and irreverent arcade attitude.

Following monumental full-scale replicas like the NES and Atari 2600, LEGO reference 40926 takes a refreshingly focused architectural turn: delivering an authentic, highly detailed desktop display model measuring 16 cm wide by 12 cm deep across 479 precision elements.

---

## 1. Dual Regional Topography: Genesis vs. Mega Drive Modularity

A standout design triumph of set 40926 is its inclusive international heritage. Rather than forcing builders into a single territory variant, the set includes complete alternative brick elements and graphics sheets:
- **The Genesis Variant**: Emphasizes the prominent white "SEGA Genesis" branding centered near the rear cartridge well, surrounded by the iconic metallic-painted circular arch.
- **The Mega Drive Variant**: Faithful to the PAL and Japanese release, featuring bold "16-BIT" gold lettering printed across the raised circular crown and regional crimson power-switch accents.

The instruction manual illustrates both configurations simultaneously, permitting builders to construct the exact regional console that defined their childhood living room.

---

## 2. Motherboard Architecture & The Hidden Sonic Easter Egg

Beneath the upper chassis tiles lies an ingenious structural treat. During the mid-phase assembly of the main chassis tub, builders construct a miniature 3D relief mosaic of **Sonic the Hedgehog**:
- Crafted from layered blue, peach, and white curved slope elements, Sonic's energetic profile sits permanently entombed inside the motherboard circuitry.
- While invisible once the top ventilation plates snap into place, this hidden tribute celebrates the mascot whose supersonic speed powered SEGA to the pinnacle of gaming culture.

---

## 3. Kinetic Mechanical Hardware & The Sonic 2 Cartridge

Despite its compact desk footprint, the console incorporates functional tactile hardware:
1. **Sliding Headphone Volume Control**: A smooth-gliding mechanical toggle simulating the analog potentiometer slider of the original Model 1 unit.
2. **Tactile Power & Reset Switches**: Raised physical buttons engineered with firm clutch tolerances that click into place.
3. **Miniature 4x5 Sonic Cartridge**: A beautifully scaled replica of the *Sonic the Hedgehog 2* game cartridge, featuring authentic label artwork that slides friction-free into the beveled top loading bay.

---

## 4. Dual Controller Assemblies & Display Presence

The set includes two replica 3-button control pads connected to the front 9-pin DE-9 ports via flexible ribbed rubber tubing:
- The controllers feature printed circular directional d-pads and ergonomic curved grips mimicking SEGA's revolutionary crescent pad geometry.
- On display, the console commands immediate attention: a sleek, tactile celebration of retro industrial design that captures the pulse of 90s gaming without monopolizing an entire bookshelf.
\`,
  },

  "peanuts-snoopys-doghouse-21368": {
    id: "post-21368",
    title: "Peanuts: Snoopy's Doghouse (21368): Schulz's Comic Poetry in 964 Bricks",
    slug: "peanuts-snoopys-doghouse-21368",
    excerpt: "Celebrating 75 years of Peanuts with LEGO Ideas #76. We dissect the sloped scarlet roof geometry, brick-built Snoopy and Woodstock articulation, the secret furnished interior, and the iconic WWI Flying Ace transformation.",
    status: "published",
    readingTimeMinutes: 7,
    setId: "set-21368",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["21368"],
    affiliateLinks: SAMPLE_SETS["21368"].affiliateLinks,
    galleryImages: SAMPLE_SETS["21368"].galleryImages,
    pros: [
      "Flawless iconic silhouette: brick-built Snoopy contours with dual display modes (reclining on the pitched gable or seated at his vintage typewriter)",
      "Clever multi-era transformation: includes aviator helmet, goggles, and red scarf to morph into the Sopwith Camel WWI Flying Ace",
      "Charming furnished doghouse interior featuring hidden artistic masterpieces and cozy domestic details concealed under lift-off roof panels",
      "Micro-scale Woodstock build with expressive posing options on the chimney and dog dish"
    ],
    cons: [
      "Smooth red roof tiling requires meticulous stud alignment to avoid unsightly seam shadows",
      "White brick elements on Snoopy's head and torso demand pristine handling to avoid dust attraction"
    ],
    verdictScore: 9.4,
    verdictSummary: "A triumphant tribute to Charles M. Schulz's iconic comic strip legacy. Capturing Snoopy's philosophical reclining pose with sculptural elegance, hidden interior vignettes, and joyful WWI Flying Ace accessories, set 21368 is pure nostalgic poetry for adult collectors.",
    metrics: [
      { label: "Build Techniques", score: 9.5, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.6, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.6, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.6, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: 75 Years of Peanuts in Three Dimensions

Few cultural touchstones in comic strip history resonate with the timeless grace of Charles M. Schulz's *Peanuts*. Originating from fan designer *bossofdos64* and finalized by senior model designer Marina Stampoli, reference **21368: Peanuts: Snoopy's Doghouse** commemorates the strip's historic 75th anniversary.

Comprising 964 elements, this LEGO Ideas milestone (#76) translates the flat 2D pen-and-ink lines of Schulz's legendary Sunday funnies into an architectural, kinetic sculpture measuring 25 cm high by 17 cm wide.

---

## 1. The Scarlet Gable Architecture & Hidden Subterranean Chamber

The centerpiece of the build is the immediately recognizable scarlet doghouse with its steep pitched roof and black-framed entryway:
- **Steep SNOT Gable Slopes**: The angled crimson roof halves utilize interlocking inverted slopes and plate brackets, achieving a continuous, studless exterior plane.
- **Lift-Off Roof Panels**: Both sloped roof sections detach effortlessly to reveal an imaginative interior easter egg: despite the exterior's modest footprint, the doghouse contains a cozy subterranean living space equipped with a micro-scale Vincent van Gogh painting, grandfather clock, and soft carpet, directly referencing the long-running strip joke about Snoopy's impossibly luxurious interior.

---

## 2. Sculpting the World's Most Famous Beagle & Woodstock

Capturing Snoopy's organic comic geometry without relying on specialized molded heads was the design team's highest hurdle:
- **Curved Brick-Built Muzzle**: Utilizing curved macaroni slopes and smooth tiles, Snoopy's head achieves organic roundness while preserving his trademark black button nose and expressive drooping ears.
- **Dual Reclining & Seated Poses**: The torso incorporates ball-joint articulation that allows Snoopy to lie perfectly flat across the apex of the pitched roof with paws crossed, or sit upright beside his red feeding bowl.
- **Woodstock Canary Companion**: Assembled from vibrant bright light yellow clips and 1x1 plates, Woodstock perches securely on the doghouse ridge, Snoopy's belly, or atop the mailbox post.

---

## 3. The WWI Flying Ace & Author Transformations

True to Schulz's multi-layered fantasy sequences, the set includes full accessory kits to re-enact Snoopy's famous alter egos:
1. **The World War I Flying Ace**: Equips Snoopy with a brown leather aviator cap, tinted goggles, and a fluttering red neck scarf. Positioned atop the scarlet roof, the doghouse becomes his legendary Sopwith Camel pursuit biplane as he battles the elusive Red Baron.
2. **The Literary Giant**: Includes a miniature mechanical typewriter and desk setup, allowing builders to pose Snoopy typing out his classic opener: *"It was a dark and stormy night..."*
3. **Campfire Vignette**: A compact brick-built campfire with roasting sticks and toasted marshmallows for outdoor scout expeditions.

Set 21368 is a heartfelt, tactile triumph—a sculptural masterclass that honors seventy-five years of comic literature with wit, architectural warmth, and nostalgic perfection.
\`,
  },
  "donkey-kong-arcade-72051": {
    id: "post-72051",
    title: "Donkey Kong Arcade Machine (72051): The 1981 Coin-Op Kinetic Masterpiece",
    slug: "donkey-kong-arcade-72051",
    excerpt: "Celebrating 45 years of Nintendo's groundbreaking coin-op platformer. We dismantle the 1,367-piece retro arcade cabinet, its internal cam-driven barrel tumble mechanism, and the exclusive 8-bit retro Jumpman minifigure.",
    status: "published",
    readingTimeMinutes: 9,
    setId: "set-72051",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["72051"],
    affiliateLinks: SAMPLE_SETS["72051"].affiliateLinks,
    galleryImages: SAMPLE_SETS["72051"].galleryImages,
    pros: [
      "Flawlessly proportioned 1981 upright arcade cabinet with illuminated marquee and screen curvature",
      "Hand-cranked internal mechanical cam drive that articulates tumbling barrel sequences down girders",
      "Exclusive retro Jumpman minifigure with dual-molded hammer accessory and pixel-authentic printing",
      "Back-cabinet access hatch reveals intricate Technic linkage, coin-drop mechanism, and Easter egg PCB board"
    ],
    cons: [
      "Extensive use of high-contrast printed/stickered marquee tiles demands surgical alignment during assembly",
      "Kinetic barrel return track requires precise Technic gear mesh calibration to prevent tumbling jams"
    ],
    verdictScore: 9.6,
    verdictSummary: "A magnificent tribute to the birth of platform gaming. Set 72051 combines striking nostalgic arcade cabinet display aesthetics with an ingeniously engineered mechanical barrel run. A must-build for retro gaming aficionados and kinetic engineering purists alike.",
    metrics: [
      { label: "Build Techniques", score: 9.8, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.6, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.5, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.7, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The Genesis of Modern Gaming (1981–2026)

In 1981, a young industrial designer named Shigeru Miyamoto crafted an arcade cabinet that rescued Nintendo of America and redefined the entertainment industry forever. Celebrating its monumental 45th anniversary, reference **72051: Donkey Kong Arcade Machine** captures that historic coin-op revolution in an ambitious 1,367-piece scale tribute.

Standing 39 centimeters tall, 27 centimeters wide, and 15 centimeters deep, the set immediately commands attention. From its electric-blue bezel styling and glowing marquee typography to the sloped control yoke with signature clicky red joystick, this is not merely a static model—it is a functional kinetic sculpture engineered to honor the dawn of arcade culture.

---

## 1. Cabinet Architecture: Heavy-Gauge Technic Bracing & SNOT Paneling

Constructing the outer cabinet requires a methodical approach that mirrors genuine coin-op manufacturing:
- **Box-Truss Chassis**: The lower pedestal and upright side walls rely on a rigid Technic ribcage interlocking with structural brackets. This prevents cabinet racking and ensures absolute stability under kinetic rotation.
- **Studless Blue Bezel & Side Art**: The vibrant blue outer panels and iconic side graphics are secured via multi-directional SNOT (Studs Not On Top) geometry. Inverted curved slopes frame the 3D-angled CRT monitor display, recreating the natural spherical curvature of 1980s cathode-ray arcade glass.
- **Micro-Switched Control Panel**: Builders assemble a fully sprung, mechanical joystick assembly using rubber dampers and miniature Technic ball-joints, delivering a deeply satisfying, tactile "click" when nudged in any orthogonal direction alongside authentic twin action buttons.

---

## 2. The Kinetic Marvel: Cam-Driven Tumbling Barrels

Behind the angled CRT monitor lies the true technical crown jewel of set 72051: an internal kinetic mechanism operated via a smooth rear-mounted rotary crank.
- **Girder Zig-Zag Trajectory**: The iconic pink-orange industrial steel girders from 25m Level 1 are meticulously angled across three tiered inclines.
- **Synchronized Cam Lift**: As the operator turns the rear crank, an internal Technic chain-and-cam shaft lifts miniature cylindrical barrels to the summit beside Donkey Kong. The barrels roll downward by gravity, trip intermediate pivoting trip-hammers, and cascade across the sloped beams before returning to the hidden lower retrieval hopper.
- **Mechanical Tolerance**: The clearance between the girder guide rails and rolling barrels requires meticulous clutch alignment during assembly; builders must ensure smooth axle friction to avoid mid-cascade stoppages.

---

## 3. The Great Ape, Lady Pauline, and Retro Jumpman Minifigure

No Donkey Kong tribute would be complete without its legendary cast:
1. **The Great Ape (Donkey Kong)**: Positioned atop the supreme girder scaffolding, Donkey Kong is rendered in a highly expressive brick-built relief sculpture. Swiveling shoulder joints allow him to beat his chest or clutch an unrolled barrel ready for release.
2. **Lady Pauline in Distress**: Perched atop the crowning derrick beside the oil drum, Lady Pauline features micro-scale pixel styling and a brick-built speech bubble tile signaling for rescue.
3. **Exclusive 1981 Retro Jumpman**: The standout collector inclusion is the exclusive retro Jumpman minifigure. Clad in his original 1981 colorway (blue overalls over a crimson undershirt with worker's cap), Jumpman carries the iconic double-sided iron hammer and features dual-sided facial printing (determined climb vs. grimacing leap).

---

## 4. Back-Panel Easter Eggs: The Technician's Hatch

Opening the rear inspection door reveals a love letter to arcade restoration enthusiasts:
- **Coin-Drop & Cash Box**: A working gravity coin-slot guides 1x1 round metallic tiles into an authentic pull-out lockbox at the cabinet base.
- **Circuit Board PCB**: A detailed SNOT tile assembly replicates the iconic arcade motherboard, complete with ceramic capacitors, DIP switches, heat sinks, and a silkscreen easter egg noting the 1981 launch date and designer coordinates.

Set 72051 is an architectural masterpiece of retro engineering—combining glorious nostalgic cabinet presence with intricate mechanical kinetic play that celebrates forty-five years of gaming heritage.
\`,
  },
  "batman-gotham-city-76271": {
    id: "post-76271",
    title: "Batman: The Animated Series Gotham City (76271): The 4,210-Piece Dark Deco Masterpiece",
    slug: "batman-gotham-city-76271",
    excerpt: "Bruce Timm's legendary dark-deco aesthetic rendered in an expansive 76cm architectural bas-relief. We dismantle the 4,210-element skyline, its 15 concealed modular micro-interiors, and the structural engineering behind its dual tabletop/wall-mount architecture.",
    status: "published",
    readingTimeMinutes: 10,
    setId: "set-76271",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["76271"],
    affiliateLinks: SAMPLE_SETS["76271"].affiliateLinks,
    galleryImages: SAMPLE_SETS["76271"].galleryImages,
    pros: [
      "Magnificent 76 cm (30-inch) wide Dark Deco bas-relief capturing the moody aesthetic of the 1992 animated classic",
      "15 removable building facades revealing meticulously concealed interior easter eggs (Batcave, Arkham Asylum, Ace Chemicals)",
      "Four exclusive 1990s animated-styled minifigures (Batman, The Joker, Harley Quinn, Catwoman) on a twin-gargoyle display ledge",
      "Dual display versatility: heavy-duty integrated rear hang brackets for wall mounting plus fold-out kickstands for horizontal shelf display"
    ],
    cons: [
      "Substantial 4,210-element micro-tiling requires extreme patience and precision during multi-layered SNOT alignment",
      "Noticeable mass (over 4.5 kg) demands heavy-duty wall anchors when choosing the vertical tapestry display configuration"
    ],
    verdictScore: 9.7,
    verdictSummary: "An architectural tour de force that transcends traditional LEGO building. By transforming Bruce Timm and Eric Radomski's 'Dark Deco' television masterpiece into a 4,210-piece multi-layered bas-relief wall tapestry, set 76271 delivers an irresistible blend of fine art, structural engineering, and nostalgic detective lore.",
    metrics: [
      { label: "Build Techniques", score: 9.9, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.7, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.6, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.8, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: Dark Deco Architecture Born from Black Paper

In 1992, producers Bruce Timm and Eric Radomski redefined animated television by rendering *Batman: The Animated Series* on black paper instead of white, forging a brooding, timeless visual aesthetic christened "Dark Deco." Over three decades later, reference **76271: Batman: The Animated Series Gotham City** manifests that iconic atmosphere into interlocking ABS across an enormous 4,210-piece bas-relief canvas.

Measuring 76 centimeters (30 inches) wide and 41 centimeters (16 inches) high, this is neither a standard modular playset nor a flat wall mosaic. It is an architectural 3D relief sculpture that projects up to 6 centimeters outward, layering micro-scale skyscrapers, art-deco spires, billowing industrial smog, and moody red skies into a singular masterwork of comic book engineering.

---

## 1. Structural Canvas: Technic Grid Foundation & Multi-Point Wall Bracing

Supporting 4,210 elements across a 76-centimeter plane without sagging, bowing, or warping presents a serious structural challenge:
- **Technic Lattice Sub-Chassis**: The foundation is composed of interlocking 16x16 Technic bricks bolted together with heavy-duty pins and transversal beams. This creates an unyielding torsion-resistant spine capable of distributing over 4.5 kilograms of dead load.
- **Dual Reinforced Wall Mounts**: Two specialized Technic bracket anchors are embedded into the upper subframe, engineered to interface with standard picture-hanging wall anchors. For desktop and shelf display, four hinged kickstand struts fold out from the bottom frame to provide a sturdy 15-degree rear incline.
- **Solid Outer Framing**: A crisp matte-black border encases the entire composition, providing both structural perimeter tension and the formal presentation of a framed gallery canvas.

---

## 2. The Relief Tapestry: Multi-Layered SNOT Skylines & Micro-Greebling

Building the skyline is an exercise in meticulous micro-architectural layering:
- **Tonal Color Palette**: Designers made extensive use of dark red, sand blue, dark blue, bright light orange, and pearl gold elements. The sky transitions from pitch-black atmospheric clouds into fiery vermilion horizon glows, directly reflecting the show's signature airbrush backgrounds.
- **3D Depth Stratification**: The cityscape is constructed in three distinct depth tiers. Distant smokestacks and police blimps are tiled flush against the backplate, midground apartment blocks project two studs outward, while monumental foreground monoliths—such as Gotham City Police Department and Wayne Enterprises—extend five to six studs outward in full isometric relief.
- **Micro-Scale Detailing**: Builders discover miniature brick-built representations of iconic landmarks including the Ace Chemicals vat facility, Gotham City Bank, Queen Industries, and the Stagg Enterprises clocktower, alongside tiny silhouettes of the Batmobile and Batwing slicing through the night.

---

## 3. The 15 Concealed Vignettes: Removable Facades & Rogues Gallery Lore

While the exterior skyline appears as a cohesive static bas-relief, set 76271 conceals an ingenious interactive secret:
- **15 Modular Removable Panels**: Specific building facades effortlessly detach via smooth jumper-plate mounts without disturbing surrounding architecture.
- **Batcave & Wayne Manor**: Removing the upper-left mansion exterior reveals Bruce Wayne's subterranean sanctuary, complete with the supercomputer screen, dinosaur statue, and giant penny.
- **Arkham Asylum Cellblocks**: Detaching the gothic asylum facade exposes micro-scale cells housing villain easter eggs—the Joker's laughing gas canisters, Poison Ivy's mutant vines, Mr. Freeze's cryogenic chamber, and the Scarecrow's fear toxin laboratory.

---

## 4. The Rogue's Gallery Minifigures & Gargoyle Overlook

To complement the massive wall installation, the set includes a standalone display stand featuring four exclusive collector minifigures rendered in authentic 1990s Bruce Timm styling:
1. **Batman**: Features the distinctive blue-gray suit with yellow oval bat-insignia, short bat-ears, and a cloth cape.
2. **The Joker**: Clad in his classic violet three-piece suit with cyan necktie, clutching a playing card and laughing fish.
3. **Harley Quinn**: Captures her original 1992 animated jester cowl, black-and-red harlequin pattern, and signature popgun.
4. **Catwoman**: Depicted in her classic gray catsuit with black elbow-length gloves and bullwhip.

The minifigures assemble onto a magnificent freestanding plinth flanked by two perched gothic stone gargoyles, allowing them to guard the room directly beneath the mounted cityscape.

Set 76271 is a crowning achievement in adult brick design—a sophisticated, dark-deco architectural tapestry that bridges the worlds of pop culture art, mechanical structural design, and nostalgic reverence.
\`,
  },
  "beauty-and-the-beast-castle-43263": {
    id: "post-43263",
    title: "Beauty and the Beast Castle (43263): The 2,916-Piece Fairytale Architecture Masterpiece",
    slug: "beauty-and-the-beast-castle-43263",
    excerpt: "Disney's iconic 1991 romantic fantasy manifested in a towering 53cm gothic castle. We dissect the 2,916-element architecture, kinetic dual-spinning ballroom mechanism, detachable grand staircase, and the 10-character cast.",
    status: "published",
    readingTimeMinutes: 9,
    setId: "set-43263",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["43263"],
    affiliateLinks: SAMPLE_SETS["43263"].affiliateLinks,
    galleryImages: SAMPLE_SETS["43263"].galleryImages,
    pros: [
      "Magnificent 53 cm (21-inch) tall French gothic fairytale silhouette with soaring dark-blue spires, ornate masonry, and gilded finials",
      "Ingenious kinetic ballroom dance floor powered by synchronized Technic spur gears for effortless waltzing",
      "Delightfully furnished 4-level dollhouse interior featuring the Be Our Guest dining hall with spinning table platters, grand library, and West Wing",
      "Superb 10-character ensemble including exclusive Belle in iconic golden ballgown, the Beast, Gaston, LeFou, Maurice, and brick-built castle staff (Lumière, Cogsworth, Mrs. Potts, Chip, Fifi)",
      "Detachable grand ceremonial staircase that unlocks modular access for display and dynamic scene staging"
    ],
    cons: [
      "Substantial vertical profile (53 cm) requires dedicated tall display shelving with adequate clearance",
      "Upper turret spires rely on friction pin connections that require deliberate grip points when lifting"
    ],
    verdictScore: 9.7,
    verdictSummary: "A breathtaking synthesis of European fairytale architecture, kinetic mechanical charm, and nostalgic storytelling. Set 43263 delivers an enchanting build experience that balances sophisticated exterior masonry with vibrant, playable micro-interiors and an irresistible kinetic ballroom floor.",
    metrics: [
      { label: "Build Techniques", score: 9.8, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.6, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.7, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.8, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: Romantic Gothic Architecture in Interlocking ABS

Few animated landscapes hold the cultural resonance and emotional resonance of the Beast's enchanted French provincial castle from Disney's 1991 animated classic *Beauty and the Beast*. With set **43263: Beauty and the Beast Castle**, this iconic fairy-tale redoubt arrives in an imposing 2,916-element collector-tier architecture model standing 53 centimeters (over 20.8 inches) high, 33 centimeters wide, and 15 centimeters deep.

Engineered as an adult-focused hybrid between an ornate architectural display piece and an open-backed theatrical dollhouse, set 43263 balances majestic exterior facade geometry—dark blue conical roofs, warm tan ashlar masonry, gothic arched mullions, and pearl-gold crests—with four expansive interior levels packed with kinetic mechanical surprises and nostalgic easter eggs.

---

## 1. Structural Engineering & Sub-Chassis: 53cm Vertical Stability

Erecting a multi-tiered gothic palace that rises over half a meter on a relatively compact 33 x 15 cm footprint requires rigorous structural discipline:
- **Reinforced Technic Footing & Central Core**: The castle base relies on interlocking Technic liftarms and thick foundation plates cross-braced in a rigid rectangular grid. This prevents the high center of gravity from bowing the lower levels.
- **SNOT Masonry & Turret Anchors**: The exterior walls utilize alternating SNOT masonry profile bricks, quarter-round curved slopes, and textured palisade elements. The soaring flanking spires lock onto the main towers using high-friction Technic cross-axle spindles, ensuring that vertical turret alignments remain laser-straight over long display lifespans.
- **Architectural Symmetry & Palette**: The contrast between dark stone lower foundations, light tan upper residential quarters, and majestic royal blue pointed roofs faithfully captures the European romantic revival aesthetic established by Disney conceptual artists.

---

## 2. Kinetic Ballroom & Banquet Hall: Technic Gear Synchronization

Beyond its commanding shelf silhouette, set 43263 distinguishes itself through two marvelous kinetic mechanisms integrated directly into its floor plans:
- **Synchronized Waltz Dance Floor**: At the heart of the main ballroom sits a hidden mechanical gear train embedded within the floorplate. Operating an exterior bevel wheel smoothly rotates two counter-synchronizing turntable discs, allowing Belle and the Beast to glide and revolve around one another in an authentic recreation of their timeless ballroom dance.
- **The "Be Our Guest" Banquet Table**: Down in the grand banquet hall, the expansive dining table incorporates an interconnected spur-gear assembly. Rotating the discreet side dial spins the centerpiece service platters simultaneously, bringing Lumière, Cogsworth, and the enchanted tableware to life in a jubilant culinary ballet.
- **Fluid Mechanical Tolerance**: Both mechanisms utilize smooth-meshing low-friction gears that glide effortlessly without sticking, even when supporting the weight of standing minifigures.

---

## 3. Four Levels of Palace Lore: Detachable Staircase & The West Wing Secret

Moving up through the rear dollhouse cross-section reveals an incredible density of narrative vignettes:
- **Detachable Ceremonial Grand Staircase**: The monumental imperial staircase leading into the ballroom is engineered as a self-contained modular sub-assembly. It can easily be detached from the castle base, allowing builders to admire the intricate balustrades or reposition it for customized dramatic staging.
- **The Enchanted Rose in the West Wing**: In the high secluded tower lies the forbidden West Wing. Protected under a transparent glass cloche bell jar rests the iconic enchanted rose with falling translucent red petals. In an inspired touch of engineering, the tower masonry conceals a secret sliding drawer compartment to store precious keepsakes.
- **The Grand Royal Library**: Belle's beloved palace library features tall floor-to-ceiling bookshelves lined with multi-colored tile bookspines, a sliding book ladder, an ornate fireplace, and cozy armchairs.
- **Royal Suite & Boudoir**: The upper chambers house the Beast's private quarters and Belle's bedroom, adorned with baroque wall sconces, a curtained canopy bed, and the ornate enchanted wardrobe.

---

## 4. The 10-Character Ensemble: Golden Ballgown Belle & Castle Retinue

To populate this magnificent 4-level fairy-tale monument, set 43263 includes an extensive 10-character ensemble that brings every classic scene to life:
1. **Belle**: Dressed in her breathtaking golden ballgown with intricate glitter-accented skirt printing, dual-sided facial expressions (gentle smile and joyful dance), and her signature updo hairpiece.
2. **The Beast**: Features an authentic sculpted horned beast headpiece, ornate royal blue dress coat with gilded epaulettes, and regal waist sash.
3. **Gaston**: Clad in his red hunting tunic with muscular torso printing, leather quiver, and smug grin.
4. **LeFou**: Gaston's bumbling sidekick with an exclusive short-stature print and bewildered expression.
5. **Maurice**: Belle's eccentric inventor father, equipped with tinkering glasses and workshop scarf.
6. **Enchanted Castle Retinue**: Exquisitely detailed brick-built and custom-molded figures representing **Lumière** with twin candlestick flames, **Cogsworth (Din-Don)** with pendulum chest printing, **Mrs. Potts**, little **Chip** with his trademark rim chip, and **Fifi (Babette)** the glamorous feather duster.

Set 43263 is a triumph of adult collector design—a majestic 53 cm architectural showstopper that pairs French gothic grandeur with genuine mechanical play, standing as an enduring tribute to one of cinema's greatest romantic tales.
\`,
  },
  "scuderia-ferrari-hp-charles-leclerc-helmet-43014": {
    id: "post-43014",
    title: "Scuderia Ferrari HP Charles Leclerc Helmet (43014): The 886-Piece F1 Aerodynamic Masterpiece",
    slug: "scuderia-ferrari-hp-charles-leclerc-helmet-43014",
    excerpt: "Scuderia Ferrari's 2025 Formula 1 livery translated into precision ABS. We dissect the 886-piece aerodynamic SNOT curvature, driver #16 graphic integration, personal memorial tributes, and the exclusive Charles Leclerc minifigure display plinth.",
    status: "published",
    readingTimeMinutes: 7,
    setId: "set-43014",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["43014"],
    affiliateLinks: SAMPLE_SETS["43014"].affiliateLinks,
    galleryImages: SAMPLE_SETS["43014"].galleryImages,
    pros: [
      "Striking Rosso Corsa and HP livery reproduction with authentic driver #16 graphics, Scuderia Ferrari crest, and Monaco accents",
      "Sophisticated spherical SNOT bracket lattice delivering seamless compound curvature without stair-stepped gaps",
      "Heartfelt memorial details honoring Hervé Leclerc ('Papa') and Jules Bianchi ('Jules') on the rear aero wing",
      "Includes an exclusive Charles Leclerc minifigure in full 2025 Ferrari team racing overalls with a facsimile signature display plaque",
      "Compact 18 cm height and weighted matte-black pedestal make it an ideal desktop showpiece for motorsport collectors"
    ],
    cons: [
      "Precision alignment required during curved shell subassembly to ensure uninterrupted livery striping",
      "Visor bracket snap-fit demands careful tactile pressure to prevent stress whitening on mounting clips"
    ],
    verdictScore: 9.6,
    verdictSummary: "A masterclass in compound curvature and motorsport authenticity. Set 43014 captures the complex aerodynamic geometry of Charles Leclerc's modern Formula 1 helmet using clever SNOT bracket rings, striking Rosso Corsa contrast, and deeply personal graphic touches.",
    metrics: [
      { label: "Build Techniques", score: 9.7, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.6, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.5, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.6, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: Maranello Precision in Interlocking ABS

The helmet of a modern Formula 1 driver is far more than protective equipment; it is a high-speed canvas where cutting-edge carbon-composite aerodynamics, team heritage, national identity, and deeply personal memories converge. With set **43014: Scuderia Ferrari HP Charles Leclerc Helmet**, this intersection arrives in an exquisite 886-piece collector display sculpture standing 18 centimeters (over 7 inches) high, 11 centimeters wide, and 13 centimeters deep.

Commemorating Charles Leclerc's partnership with Scuderia Ferrari HP, this model captures the aerodynamic silhouette of the Bell HP77 helmet worn by the Monegasque driver during Grand Prix weekends. Built using an intricate interior Technic armature wrapped in multi-directional SNOT curved shell panels, the build achieves compound spherical curvatures rarely seen at this compact scale.

---

## 1. Internal Skeleton: Technic Box-Core & Spherical SNOT Rings

Recreating a spherical, organic human helmet out of orthogonal ABS bricks presents a notorious geometric puzzle:
- **Central Box Chassis**: The build begins from a robust central core composed of interlocking Technic bricks, corner bracket plates, and dual-sided studs. This dense cubic box acts as a rigid anchor, distributing weight evenly onto the central support column.
- **Radial SNOT Outriggers**: Expanding outward from the core in all four compass directions, tiered bracket assemblies create a stepped scaffolding. This allows the smooth curved outer plates—slopes, curved tiles, and wedge panels—to attach perpendicularly without visible top studs.
- **Stress-Free Clutch Distribution**: The core geometry ensures that outward pressure from curved panels is balanced symmetrically, preventing warping or panel pop-off over seasonal temperature shifts.

---

## 2. Compound Aerodynamics: Visor Framing, Top Scoop & Rear Gurney Flap

A modern F1 helmet is sculpted by hundreds of hours of wind-tunnel CFD simulations to optimize airflow into the engine intake and minimize driver head buffeting at 350 km/h:
- **The Smoked Visor Geometry**: The eyeport utilizes smooth trans-black curved elements framed by precise red and white border tiling, capturing the ultra-narrow 10mm ballistic zylon brow band required by FIA 8860-2018 safety standards.
- **Top Vent & Induction Chimneys**: Along the crown, subtle wedge cutouts and reverse slopes replicate the ram-air ventilation channels designed to channel fresh cockpit air to the driver while exhausting heat out the back.
- **Aerodynamic Chin Spoiler & Rear Lip**: The lower chin guard extends forward with sharp angular plates to reduce aerodynamic lift, while the crown tapers back into a clear rear gurney spoiler that stabilizes the helmet in open-cockpit turbulent air.

---

## 3. Rosso Corsa Livery & Memorial Tributes: The Stories Behind the Graphics

The visual impact of set 43014 hinges on its faithful execution of Charles Leclerc's 2025 Scuderia Ferrari HP colorway:
- **Rosso Corsa & HP Contrast**: The brilliant Ferrari racing red is juxtaposed with the crisp blue-and-white accents of title partner HP, executed with rich color saturation and sharp boundary registration.
- **The Cavallino Rampante**: The legendary Prancing Horse shield sits prominently on the forehead above the visor strip, anchored by Charles's iconic driver number **#16** emblazoned on the crown and flank panels.
- **Heartfelt Memorial Tributes**: True to Charles's real race helmet, the rear aerodynamic wing features two touching personal inscriptions: **"Papa"** in honor of his late father and former racing driver Hervé Leclerc, and **"Jules"** in everlasting memory of his godfather and mentor Jules Bianchi. These micro-scale graphical touches elevate the model from a commercial promotional item to an authentic emotional tribute.

---

## 4. The Driver Plinth & Exclusive Leclerc Minifigure

Complementing the 1:2 scale helmet is a thoughtfully engineered collector display base:
- **Weighted Matte-Black Pedestal**: Built with low-center-of-gravity ballast plates, the pedestal provides rock-solid desktop stability.
- **Facsimile Signature Plaque**: Adorning the front face of the plinth is a crisp printed black tile featuring the official Scuderia Ferrari HP wordmark alongside Charles Leclerc's personal signature.
- **Exclusive Charles Leclerc Minifigure**: Unlike previous standalone helmet releases, set 43014 includes a dedicated Charles Leclerc minifigure in his complete 2025 team racing overalls with dual-molded arms, sponsor logos, and a swappable tousled hairpiece and driver's helmet.

Set 43014 is a triumph of modern compact AFOL design—combining aerodynamic structural elegance, Ferrari passion, and personal racing heritage into an irresistible display centerpiece for any motorsport enthusiast.
\`,
  },
  "mandalorian-n1-starfighter-75442": {
    id: "post-75442",
    title: "The Mandalorian's N-1 Starfighter UCS (75442): The 1,809-Piece Hotrod Starfighter Masterpiece",
    slug: "mandalorian-n1-starfighter-75442",
    excerpt: "Can an 1,809-piece UCS starfighter capture the stripped-down, modified hotrod soul of Din Djarin's Naboo craft? We tear down its high-tensile Technic spine, exposed turbinic intakes, metallic silver plating, and dual-angle dynamic flight stand.",
    status: "published",
    readingTimeMinutes: 10,
    setId: "set-75442",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["75442"],
    affiliateLinks: SAMPLE_SETS["75442"].affiliateLinks,
    galleryImages: SAMPLE_SETS["75442"].galleryImages,
    pros: [
      "Magnificent 67cm collector profile capturing the sweeping aerodynamic curves of Naboo aerospace design",
      "Rigid multi-layer Technic keelson structure eliminating center-sag across the elongated 67cm fuselage",
      "Exquisite hotrod mechanical greebling with exposed turbinic intakes, coolant lines, and metallic silver plating",
      "Dynamic dual-angle weighted flight stand allowing aggressive banked turn or forward attack vector display",
      "Superbly detailed Din Djarin minifigure with full arm printing and bespoke Darksaber, accompanied by Grogu"
    ],
    cons: [
      "Slender empennage tail spike requires mindful two-handed lifting during display repositioning",
      "Broad 39cm wingspan and 67cm length demand substantial horizontal shelf clearance"
    ],
    verdictScore: 9.8,
    verdictSummary: "A masterwork of sculptural starfighter engineering. Set 75442 achieves the impossible by translating the organic compound curves of Naboo aerospace design into interlocking ABS, reinforced by a rock-solid Technic central girder and adorned with breathtaking exposed turbinic hotrod greebling.",
    metrics: [
      { label: "Build Techniques", score: 9.8, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.7, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.6, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.8, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The Stripped-Down Naboo Hotrod

In the post-Imperial Outer Rim, utility and raw sublight thrust supersede pristine royal decorum. When Din Djarin lost the Razor Crest to Gideon's orbital bombardment, mechanic Peli Motto delivered the unexpected replacement: a decommissioned Naboo N-1 Starfighter stripped of its yellow chromium finery, gutted of unnecessary luxury, and supercharged with exposed aftermarket turbinic manifolds.

With **75442: The Mandalorian's N-1 Starfighter Ultimate Collector Series**, the design team delivers an ambitious 1,809-piece large-format architectural study measuring an immense 67 centimeters (26.5 inches) from nose cone to empennage fin, 39 centimeters across its delta-swept wings, and 21 centimeters high on its bespoke display plinth. This model marks the definitive high-scale translation of Star Wars' finest retro-futuristic hotrod.

---

## 1. Structural Spine: The High-Tensile Technic Keelson

Long, slender aerospace profiles in block construction represent an extreme gravitational challenge. A craft 67 centimeters long with sweeping forward engine pods and a needle-thin trailing tail spike is inherently prone to center-sagging:
- **Internal Box Truss**: Beneath the sleek exterior shell lies a 5-layer interlocking Technic frame consisting of heavy-gauge liftarms, transversal pin blocks, and longitudinal beam braces. This creates an unyielding central keelson capable of handling dynamic torsional loads.
- **Cantilevered Engine Spars**: The port and starboard engine nacelles project aggressively forward and outward from the fuselage. Technic perpendicular cross-axles lock the engine pylons deep into the core fuselage truss, eliminating wing droop without relying on external visible struts.
- **The Tapered Tail Spike**: The trailing empennage tapers through a sequence of studless Technic connectors and inverted bracket assemblies, maintaining laser-straight axial alignment all the way to the exhaust nozzle.

---

## 2. Sculptural Geometry: SNOT Hull Curvature & Metallic Silver Greebling

The original Naboo N-1 Starfighter is renowned across the galaxy for its handcrafted, fluid curves—traditionally the hardest aesthetic to replicate with standard ABS studs:
- **Radial SNOT Shingling**: The forward fuselage combines curved wedge slopes, reverse arches, and bracket-mounted curved tiles arranged in staggered radial steps. The seam lines flow organically, mirroring the aerodynamic nose profile without stepped blockiness.
- **Exposed Hotrod Turbines**: Where the royal N-1 featured smooth yellow cowlings, Din Djarin's custom craft reveals its mechanical guts. The model showcases exposed intake fans, yellow high-pressure coolant conduits, exhaust bypass pipes, and intricate mechanical greebles crafted using dark metallic gray and silver clips, flex tubes, and roller skate elements.
- **Trans-Clear Canopy & Ingot Highlights**: The elongated flight cockpit canopy curves gracefully into the dorsal spine, flanked by drum-lacquered silver ingots and curved tiles that create brilliant metallic specular highlights against the light bluish-gray bodywork.

---

## 3. Cockpit Teardown: Flight Avionics & Grogu's Bubble Cupola

The interior vignettes honor the close-quarters bond between Din Djarin and the foundling Grogu:
- **Pilot Cockpit Enclosure**: Lifting the primary canopy reveals a detailed pilot tub equipped with tactile twin flight yokes, foot pedals, targeting telemetry displays, and an angled bucket seat engineered to accommodate Din Djarin with his molded jetpack attached.
- **Grogu's Astromech Cupola**: Replacing the traditional R2 astromech socket, the craft features Grogu's custom rear viewing bubble. Utilizing a crystal-clear trans-clear dome element, the miniature seating area provides the perfect perspective for the miniature Grogu figure to peek out at hyperdrive star trails.
- **Sub-Floor Torpedo Loader**: Concealed beneath a quick-release magnetic belly hatch is the proton torpedo launcher, complete with a detailed firing mechanism and spring-loaded ordnance bay.

---

## 4. The Dual-Angle Dynamic Display Plinth & Exclusive Minifigures

An Ultimate Collector Series release is incomplete without an authoritative presentation infrastructure:
- **Multi-Vector Mounting Plinth**: The weighted black display stand incorporates an articulated locking pin mechanism that allows the starfighter to be staged in two distinct operational poses: a menacing forward attack vector or a dynamic, heavily banked high-g turn that highlights the dorsal fuselage tiling.
- **Printed UCS Data Plaque**: The front of the stand features an official printed technical specification tile detailing the craft's sublight speed, hyperdrive rating, and armament specifications.
- **Collector-Grade Minifigure Duo**: Included with the stand are an impeccably printed Din Djarin minifigure—featuring newly detailed arm printing, bespoke beskar helmet printing, and a brick-built Darksaber—alongside a micro-scale Grogu figure wrapped in his sandy-brown clan cloak.

Set 75442 stands as an architectural triumph for AFOL builders and Star Wars enthusiasts alike—striking the elusive equilibrium between rigid structural longevity and breathtaking aerodynamic elegance.
\`,
  },
  "lionel-messi-soccer-legend-43015": {
    id: "post-43015",
    title: "Lionel Messi: Soccer Legend (43015): Sculpting the GOAT in 958 Bricks",
    slug: "lionel-messi-soccer-legend-43015",
    excerpt: "Can a 958-piece buildable figure capture the fluid agility and iconic celebration of football's greatest maestro? We analyze its dual-pose armature, co-molded facial sculpt, Technic core stability, and pitch display plinth.",
    status: "published",
    readingTimeMinutes: 9,
    setId: "set-43015",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["43015"],
    affiliateLinks: SAMPLE_SETS["43015"].affiliateLinks,
    galleryImages: SAMPLE_SETS["43015"].galleryImages,
    pros: [
      "Dynamic dual-pose construction allowing seamless reconfiguration between iconic victory celebration and sprint dribbling stance",
      "Authentic co-molded facial portrait with remarkably sharp beard printing and expressive likeness",
      "Robust internal Technic load-bearing skeleton providing rock-solid cantilever balance over the pitch plinth",
      "Collector-grade pitch plinth featuring an imposing brick-built #10 emblem, printed nameplate, and specialized soccer ball element"
    ],
    cons: [
      "Arm and knee joint reconfiguration between poses requires minor plate disconnections rather than simple free rotation",
      "Skin-tone color matching across co-molded head and brick-built neck shows subtle plastic sheen variance under harsh lighting"
    ],
    verdictScore: 9.6,
    verdictSummary: "A landmark debut for the LEGO Editions line. Set 43015 achieves an impressive balance between organic anatomical sculpting and mechanical stability, offering two distinct display modes—the legendary two-fingers-to-the-sky celebration and a kinetic dribbling stride—anchored by an authoritative pitch display plinth.",
    metrics: [
      { label: "Build Techniques", score: 9.6, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.7, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.5, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.7, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The Maestro in ABS Geometry

Capturing human athletic anatomy in interlocking ABS bricks is among the most unforgiving design challenges in the builder hobby. While mechs and armored droids forgive angular blockiness, a world-renowned athlete's organic muscle tone, dynamic balance, and signature physical gestures demand subtle compound curves and flawless equilibrium.

With **43015: Lionel Messi – Soccer Legend**, LEGO inaugurates its brand-new **Editions** theme with an ambitious 958-piece buildable sculpture standing an impressive 27 centimeters (over 10.5 inches) high, 21 centimeters wide, and 14 centimeters deep in its primary celebration stance. Commemorating the career of Lionel Andrés Messi, this set offers adult collectors and football purists an unprecedented tactile tribute to the Argentine icon.

---

## 1. Dual-Pose Armature: Internal Technic Skeleton & Reconfigurable Limb Topology

The centerpiece of set 43015's engineering is its versatile dual-pose architecture:
- **Core Technic Girder Spine**: Inside the torso sits a rigid cubic armature constructed from heavy-gauge Technic liftarms, friction pins, and high-clutch ratchet joints. This core absorbs the rotational torque generated by the cantilevered arms and angled head.
- **Victory Celebration Mode**: In the primary display build, Messi stands proudly upright on the pitch plinth with both arms extended toward the heavens—the world-famous celebration dedicated to his grandmother Celia. The dual shoulder ball joints lock firmly into stepped socket receivers to eliminate arm sag over time.
- **Dynamic Dribbling Mode**: Utilizing modular pin connectors in the hip joints and knees, builders can reconfigure the sculpture into a kinetic running posture. The left leg extends backward in mid-stride while the right foot guides the ball, maintaining rock-steady balance without external acrylic supports.

---

## 2. Anatomical Sculpting: Co-Molded Likeness, SNOT Hair & Dynamic Kit Draping

Translating Messi's unmistakable profile into brick form required specialized tooling and clever part usage:
- **Co-Molded Portrait Sculpt**: Rather than relying solely on stepped slope bricks for the face, the set introduces a dedicated co-molded head element featuring precise facial contours, lifelike eyes, and multi-layered beard stubble printing.
- **SNOT Hair Geometry**: Crowning the head is a complex assembly of curved wedge slopes and inverted tooth tiles attached via sideways brackets, recreating Messi's textured, side-parted hairstyle with fluid directional flow.
- **Athletic Kit Draping**: The jersey and shorts utilize curved slopes and layered tiles to simulate realistic fabric creases and athletic proportions, accented by subtle color-blocking that gives the kit crisp visual contrast against the pitch turf.

---

## 3. Iconic Graphics: The Bold #10 Emblem, Name Plaque & Specialized Ball Element

Every detail of the presentation honors football folklore:
- **The Monumental Number 10**: Rising dramatically from the side of the display plinth is a large, sculpted brick-built number **10**—the jersey number synonymous with footballing perfection from Barcelona to Buenos Aires and Miami.
- **Bespoke Soccer Ball**: Resting beside the player's boot is a specialized geometric soccer ball element featuring authentic hexagonal and pentagonal panel markings with high-friction stud connectivity to the base.
- **Collector Nameplate**: The front edge of the plinth is crowned by a crisp printed matte-black tile reading **"Lionel Messi"**, establishing collector credibility alongside high-end memorabilia.

---

## 4. The Pitch Display Plinth: Stability Mechanics & Center-of-Mass Engineering

A buildable figure standing 27 cm tall requires unyielding ground anchoring:
- **Dual-Layer Pitch Plinth**: The stadium pitch base combines lush bright green tiles and olive green plates, replicating freshly mown stadium grass with pristine border edging.
- **Low-Center-of-Gravity Ballasting**: The base integrates dense interlocking plates underneath the turf layer, ensuring the model's center of mass stays safely within the footprint even when posed in the aggressive forward-leaning dribble mode.
- **Foot Locator Pins**: Dual reinforced Technic pins lock the boots directly into the internal base framework, providing worry-free desktop stability during casual handling or vibration.

Set 43015 is a triumphant opening chapter for the LEGO Editions line—blending athletic storytelling, sculptural sophistication, and kinetic poseability into an irresistible centerpiece for sports collectors worldwide.
\`,
  },
  "captain-jack-sparrows-pirate-ship-10365": {
    id: "post-10365",
    title: "Captain Jack Sparrow's Pirate Ship (10365): The 2,862-Piece Black Pearl Renaissance",
    slug: "captain-jack-sparrows-pirate-ship-10365",
    excerpt: "Can a 2,862-piece flagship revive the golden age of LEGO pirate naval architecture? We dissect its high-tensile hull framing, triple-masted fabric sail rigging, furnished Captain's Quarters, and 8 iconic minifigures.",
    status: "published",
    readingTimeMinutes: 11,
    setId: "set-10365",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["10365"],
    affiliateLinks: SAMPLE_SETS["10365"].affiliateLinks,
    galleryImages: SAMPLE_SETS["10365"].galleryImages,
    pros: [
      "Monumental 64cm flagship profile recreating the sinister silhouette and tumblehome hull of the Black Pearl",
      "Rigid multi-tier Technic keelson structure eliminating mid-ship sag across the expansive 64cm hull length",
      "Spectacular triple-masted rigging with authentic die-cut weathered fabric sails and tensioned shroud ladders",
      "Modular access to richly detailed Captain's Quarters and functional broadside cannon decks with operational ports",
      "Definitive 8-minifigure crew lineup including Jack Sparrow, Hector Barbossa, Will Turner, Elizabeth Swann, and crew"
    ],
    cons: [
      "Towering 64cm mast height and 23cm beam demand substantial vertical and horizontal shelf clearance",
      "Fine shroud cord rigging requires patient tension adjustment to maintain perfect perpendicular yardarm alignment"
    ],
    verdictScore: 9.8,
    verdictSummary: "A breathtaking resurrection of maritime block engineering. Set 10365 establishes a new pinnacle for vessel design, fusing modular hull access and lavish Captain's Quarters appointments with towering 64cm triple-masted fabric rigging and an essential 8-minifigure crew.",
    metrics: [
      { label: "Build Techniques", score: 9.8, iconType: "techniques" },
      { label: "Structural Rigidity", score: 9.7, iconType: "rigidity" },
      { label: "Instruction Flow", score: 9.6, iconType: "flow" },
      { label: "Part Quality & Clutch", score: 9.8, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The Return of the Black Pearl

For more than a decade, adult maritime builders and *Pirates of the Caribbean* aficionados have revered the 2011 *Black Pearl* (4184) as an untouchable collector holy grail. Yet that classic 804-piece playset was fundamentally constrained by standard prefab hull elements and simplified rigging. With **10365: Captain Jack Sparrow's Pirate Ship**, the LEGO Icons design team delivers an uncompromising 2,862-piece masterclass in 18+ naval architecture.

Measuring a commanding 64 centimeters (over 25 inches) in length, 64 centimeters in height to the mainmast truck, and 23 centimeters across the beam, this dark galleon redefines large-scale nautical construction. Built entirely from interlocking brick-built hull strakes rather than hollow prefabricated boats, it combines historical galleon framing with the cinematic flair of Captain Jack Sparrow's beloved vessel.

---

## 1. Naval Architecture: Inverted Hull Ribbing & Technic Keelson Framing

Constructing a 64cm ship hull entirely out of orthogonal ABS bricks without sagging or seam separation is a notorious structural trial:
- **The Reinforced Technic Keelson**: The spine of the ship is anchored by an interconnected longitudinal Technic beam grid that runs from the sternpost straight through the cutwater. This internal girder provides immense torsional stiffness, counteracting the downward cantilever of the bowsprit and the overhang of the tiered poop deck.
- **Inverted Curved Strakes**: To replicate the organic tumblehome of a 17th-century galleon—where the hull curves inward as it ascends—the designers utilize inverted arch slopes, curved wedge plates, and lateral bracket assemblies. The seam lines flow with handcrafted fluidness, capturing the plank-on-frame texture of pirate lore.
- **Working Rudder & Dual Anchors**: The helm on the quarterdeck connects through an internal vertical axle to an articulated rudder blade below the waterline, while dual bow anchor winches feature ratcheting spool gearboxes to hoist and drop heavy metal-look anchors.

---

## 2. The Rigging Masterclass: Triple Masts, Weathered Fabric Sails & Shroud Ladders

The visual majesty of any square-rigged tall ship lies in its soaring sail plan:
- **Triple-Masted Stature**: The foremast, mainmast, and mizzen mast are engineered with stepped Technic axle-and-pin cores encased in dark fluted round sleeves. This provides the vertical column strength needed to carry heavy yardarms without flexing under tension.
- **Die-Cut Weathered Fabric Sails**: Unlike plastic sheets, set 10365 includes premium textile sails featuring bespoke die-cut tattered edges, authentic horizontal seam stitching, and billowing curved profiles that give the vessel an aura of ghostly speed.
- **Tensioned Ratlines & Shrouds**: Structural ratlines and stays secure the masts laterally to the hull channels. The cord tensioning system is engineered with micro-adjustable friction pins, allowing builders to dial in taut rigging lines that stay crisp across seasonal humidity changes.
- **The Winged Figurehead**: Piercing the foam at the forward beakhead is a sculpted golden-winged figurehead, expertly evoking the mythical guardian spirit of the Wicked Wench before her infernal baptism.

---

## 3. Quarterdeck & Captain's Quarters: Modular Interior Vignettes & Hidden Loot

Beyond its fearsome exterior, set 10365 offers rich narrative vignettes across multiple deck tiers:
- **The Opulent Great Cabin**: Lifting the quarterdeck roof reveals the private sanctum of Captain Jack Sparrow. The cabin is furnished with an ornate navigation desk, an articulated captain's chair, a glowing oil lantern, a sextant, an open ship's log, a decanter of Caribbean rum, and of course, Hector Barbossa's crisp green apple.
- **The Broadside Gun Deck**: Below the main deck sits a full battery of broadside cannons mounted on rolling wheeled carriages. Each gun can be run out through functional hinged gunport lids with authentic red-framed interiors.
- **Concealed Bilge Compartments**: True to pirate tradition, a secret trapdoor beneath the hold floorboards reveals hidden treasure chests overflowing with Aztec cursed gold coins, stolen goblets, and smuggled contraband safely shielded from prying Imperial eyes.

---

## 4. The Pirate Crew & Display Infrastructure: 8 Definitive Minifigures & Stand

A flagship of this magnitude requires an all-star crew and an authoritative collector base:
- **Complete 8-Minifigure Ensemble**: The set brings together the core cast of *The Curse of the Black Pearl*: Captain Jack Sparrow with his dual-molded tricorn hat and compass, Captain Hector Barbossa with his feathered chapeau and sword, Will Turner, Elizabeth Swann in her pirate attire, first mate Joshamee Gibbs, the fierce Anamaria, Cotton with his loyal talking parrot, and the stalwart Marty.
- **Architectural Display Cradle**: The model rests upon a sturdy matte-black display stand engineered to support the ship's 2.8-kilogram weight without stressing the lower keel tiles. A printed plaque detailing the ship's dimensions and cinematic provenance completes the museum-grade presentation.

Set 10365 is not merely a model; it is the definitive monument to maritime block craftsmanship—striking an awe-inspiring balance between rigorous naval engineering, modular storytelling, and cinematic pirate romance.
\`,
  },

  "loop-coaster-10303": {
    id: "post-10303",
    title: "Loop Coaster (10303): Mastering Gravity, Clothoid Physics, and Vertical Tower Engineering",
    slug: "loop-coaster-10303",
    excerpt: "At an imposing 92 cm height, the Loop Coaster is LEGO's most audacious kinetic structure. We tear down its counterweight elevator tower, the physics of dual clothoid loops, and the zero-friction tolerances required to conquer gravity without stalling.",
    status: "published",
    readingTimeMinutes: 14,
    setId: "set-10303",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["10303"],
    affiliateLinks: SAMPLE_SETS["10303"].affiliateLinks,
    galleryImages: SAMPLE_SETS["10303"].galleryImages,
    pros: [
      "Monumental 92 cm vertical silhouette establishing an unparalleled kinetic centerpiece for AFOL collections",
      "Authentic teardrop clothoid loop geometry that perfectly manages centripetal acceleration and momentum",
      "Ingenious mechanical elevator tower with counterweight balance that smoothly lifts the 3-car train to the summit",
      "Built-in transmission readiness for immediate LEGO Powered Up motorization and continuous hands-free operation",
      "Vibrant fairground atmosphere with 11 minifigures, articulated station barriers, and detailed vendor kiosks"
    ],
    cons: [
      "Demands millimeter-precise track alignment; microscopic rail misalignments or dust can cause train stall (valleying)",
      "Colossal 92 cm height and 85 cm width require extensive dedicated vertical shelf and table space",
      "Counterweight cable rigging requires meticulous tension tuning during initial assembly to prevent snagging"
    ],
    verdictScore: 9.7,
    verdictSummary: "A landmark achievement in kinetic brick engineering. Set 10303 transcends standard static display sets by merging real-world roller coaster physics—specifically teardrop clothoid vertical loops—with an ingenious counterweight elevator lift. While requiring exacting tolerance and frictionless rail care, the mechanical satisfaction of seeing a 3-car train loop through gravity is second to none in the entire LEGO portfolio.",
    metrics: [
      { label: "Kinetic Engineering & Physics", score: 9.9, iconType: "techniques" },
      { label: "Structural Rigidity & Bracing", score: 9.6, iconType: "rigidity" },
      { label: "Instruction & Tuning Flow", score: 9.5, iconType: "flow" },
      { label: "Part Quality & Friction Tolerances", score: 9.7, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The Apex of Kinetic Block Engineering

When the LEGO Fairground Collection debuted its first giant coaster (10261) in 2018, it captivated adult fans of LEGO (AFOLs) with its vast chain lift and sprawling horizontal footprint. However, mechanical purists noted a key architectural omission: vertical inversions. Roller coaster physics dictate that sending a train upside down purely on gravity momentum demands extraordinary kinetic energy management, millimeter track alignment, and specialized non-circular track curvature.

With the **Loop Coaster (10303)**, LEGO engineering shattered every previous kinetic ceiling. Towering an astounding **92 centimeters (over 36 inches)** high, spanning **85 centimeters (33.5 inches)** across, and integrating 3,756 pieces, this is the tallest official LEGO ride in company history. More impressively, it is the first to achieve dual vertical loops using authentic *clothoid* (Euler spiral) curvature—a breathtaking triumph of mechanical design and applied Newtonian mechanics.

---

## 1. Physics in Plastic: The Clothoid Loop Breakthrough

Early 19th-century centrifugal railways made the catastrophic error of using circular vertical loops, subjecting passengers to dangerous 12G spike forces and violent deceleration at entry. Real-world coaster pioneer Anton Schwarzkopf and engineer Werner Stengel revolutionized the amusement industry by introducing the *clothoid loop*—a teardrop-shaped curve where the radius of curvature ($r$) decreases continuously as the train climbs toward the apex:
- **Managing Centripetal Acceleration**: Set 10303 introduces bespoke inverted curved rail elements modeled specifically with clothoid curvature. As the 3-car train plunges into the base of the first loop, the gradual decrease in radius gently increases centripetal acceleration ($a_c = v^2 / r$), generating sufficient positive G-forces to keep riders pinned securely in their seats without causing violent mechanical jerk or wheel flange binding.
- **Apex Velocity & Weightlessness**: At the loop's apex, the tighter radius ensures the train retains sufficient critical speed to prevent stalling, delivering a momentary sensation of weightless zero-G before plunging straight into the second, slightly tighter inversion.
- **The Banked Transition Curve**: Exiting the secondary loop, the train negotiates a sweeping banked horizontal curve engineered to shed excess lateral friction before gliding smoothly into the rubber-finned brake run.

---

## 2. Tower Architecture: Technic Shear Bracing & The Counterweight Elevator

Supporting a 92-centimeter vertical tower without bending, twisting, or swaying under kinetic oscillation requires advanced structural engineering:
- **Lattice Column Stability**: The elevator tower is constructed from an interlocking spine of Technic liftarms, open-web lattice framework, and friction pin matrices. Diagonal cross-bracing distributes dynamic loads across the wide, reinforced baseplate footprint, eliminating the lateral whip that would otherwise misalign the apex track switch.
- **Counterweight-Assisted Cable Lift**: Hoisting a 3-car train vertically over 80 centimeters using a standard hand crank or small electric motor would strain plastic gear teeth. The designers solved this via an internal counterweight carriage: as the elevator cab carrying the train ascends, a counterweight filled with bricks descends inside the opposite tower column, neutralizing static gravitational load.
- **The Apex Transfer Switch**: Upon reaching 92 centimeters, the elevator carriage engages an automated mechanical trip lever. A tilted track linkage seamlessly locks the carriage rails with the stationary drop runway, releasing the coaster car to free-fall down an 80-degree plunge.

---

## 3. Station Dynamics, Brake Runs & Fairground Atmosphere

Set 10303 does not merely simulate a coaster track; it builds an entire bustling amusement park concourse:
- **Articulated Boarding Station**: The station platform features a covered wooden-truss canopy, an elevated dispatch operator booth with radar monitors and control joysticks, turnstiles, and a queue line. A mechanical hand lever simultaneously raises and lowers the safety lap bars across all three train cars while opening the air-gate barriers.
- **Friction Deceleration Run**: Before returning to the boarding platform, the train passes through rubber-dampened brake fins that bleed excess kinetic momentum, ensuring a gentle, repeatable stop without slamming the station stops.
- **Vendor Kiosks & Park Life**: Surrounding the kinetic monolith are four detailed subassemblies: a vintage pretzel cart, a colorful balloon artist vendor, a motorized-style hot-dog stand, a park bench with a printed park map, and a classic height-restriction measuring post ("You must be this tall to ride!").

---

## 4. The 11-Minifigure Ensemble & Powered Up Automation

A fairground masterwork relies on narrative detail and operational versatility:
- **11 Minifigures with Reversible Emotions**: The set includes 11 figures: ride operator, balloon seller, pretzel seller, hot dog seller, grandma, young boy, and 5 coaster passengers. Crucially, 6 of the figures feature dual-sided printed heads—one side smiling in anticipation, the other wide-eyed in sheer centrifugal terror.
- **Seamless Motorization Readiness**: At the rear of the tower base sits an exposed gear train linkage designed to accept a LEGO Powered Up Medium Linear Motor (88013) and Battery Box (88015). When motorized, the loop coaster operates continuously: lifting the train, releasing it through both clothoid loops, braking into the station, and cycling back to the elevator tower in an endless kinetic ballet.

Set 10303 stands as an unquestionable AFOL triumph: a towering, functional monument that translates real-world amusement engineering and physics into 3,756 interlocking elements.
\`,
  },
  "the-lord-of-the-rings-barad-dur-10333": {
    id: "post-10333",
    title: "The Lord of the Rings: Barad-dûr (10333): Dark Architecture and the Glowing Eye of Sauron",
    slug: "the-lord-of-the-rings-barad-dur-10333",
    excerpt: "At 83 cm tall and 5,471 pieces, Barad-dûr is the definitive dark fortress of Middle-earth. We analyze its volcanic Gothic geometry, mechanical iron gate drive, the pivoting illuminated Eye of Sauron, and the 10-figure Mordor ensemble.",
    status: "published",
    readingTimeMinutes: 13,
    setId: "set-10333",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["10333"],
    affiliateLinks: SAMPLE_SETS["10333"].affiliateLinks,
    galleryImages: SAMPLE_SETS["10333"].galleryImages,
    pros: [
      "Magnificent 83 cm ominous silhouette capturing the jagged volcanic architecture and basalt crags of Mordor",
      "Pivoting and rotating Eye of Sauron powered by an integrated warm light brick behind trans-orange eye lenses",
      "Hidden mechanical gear mechanism that swings open the heavy double-leaf Black Gates simultaneously",
      "Deeply atmospheric four-tier interior including Orc armory, dungeon with drop-cage, throne room, and library",
      "First-ever Sauron armored minifigure with bespoke spiky horned helm and mace alongside 9 iconic characters"
    ],
    cons: [
      "Extensive black and dark-bluish-gray palette requires good work lighting during assembly to distinguish dark contours",
      "At 83 cm in height, the spire requires generous vertical display clearance and stable display foundations"
    ],
    verdictScore: 9.9,
    verdictSummary: "A dark gothic masterpiece that stands proudly alongside Rivendell. Set 10333 combines monumental external basalt texture with ingenious interior storytelling. Between the rotating illuminated Eye of Sauron, automated mechanical fortress gates, and the definitive Sauron minifigure, Barad-dûr represents the absolute zenith of fantasy location modeling.",
    metrics: [
      { label: "Volcanic Gothic Sculpting", score: 9.9, iconType: "techniques" },
      { label: "Structural Rigidity & Spire Stacking", score: 9.8, iconType: "rigidity" },
      { label: "Mechanical Gates & Lighting", score: 9.8, iconType: "flow" },
      { label: "Part Quality & Exclusive Minifigs", score: 10.0, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The Sovereign of Shadow in Interlocking ABS

Following the rapturous reception of 2023's *Rivendell* (10316), adult *The Lord of the Rings* collectors wondered whether the design team could match that elven architectural poetry with the menacing, jagged volcanic brutality of Mordor. With **10333: Barad-dûr**, the LEGO Icons team answered decisively. Comprising 5,471 pieces and soaring to an imposing **83 centimeters (32.5 inches)** in height, this monolith is the definitive realization of Sauron's impenetrable fortress.

From its black iron ramparts and magma fissures to the sinister crowned pinnacle holding the Great Eye, Barad-dûr is an uncompromising AFOL tour-de-force.

---

## 1. Volcanic Basalt Geometry: Organic SNOT Crags & Jagged Spire Splay

Translating the jagged, non-orthogonal geometry of Peter Jackson's cinematic fortress into rectangular building blocks presented unique challenges:
- **Compound Angle Splaying**: The fortress walls do not rise at straight 90-degree angles; they flare outward like petrified magma columns. The lower bastion employs concealed ball joints and hinge plate sandwiches to anchor angled wall segments rigidly to the central core.
- **Magma Seepage Transitions**: Trans-orange, trans-red, and flame-yellow plates layered beneath black inverted slopes create the visual effect of glowing molten rock coursing through tectonic cracks beneath the fortress foundations.
- **Modular Spire Stacking**: The tower is engineered in four distinct interlocking modular tiers. Builders can easily separate the levels for transport or admire the internal dioramas, and the structural design even accommodates repeating the middle section for those who wish to construct an even taller tower.

---

## 2. Mechanical Ingenuity: Geared Black Gates & The Luminous Eye

Behind the dark exterior lies sophisticated functional engineering:
- **Concealed Gear-Driven Black Gates**: Rotating a disguised basalt rock knob on the fortress flank turns an internal bevel gear transmission, smoothly parting the massive iron gates inward in perfect unison.
- **The Illuminated Eye of Sauron**: Perched between the two topmost spires sits the Great Eye. Constructed from multi-layered trans-orange, yellow, and red dish elements surrounding a slit pupil, the Eye houses an integrated light brick activated by pressing a rear basalt stud. The entire fixture articulates horizontally and tilts vertically, allowing the Dark Lord to sweep his fiery gaze across your room.

---

## 3. Four Tiers of Mordor Lore: Subterranean Forge to Sauron's Sanctuary

The rear cutaway design invites builders inside Sauron's stronghold:
- **Tier 1 (Subterranean Orc Armory)**: Complete with a glowing lava furnace, an anvil, weapon racks holding cleavers and spears, and a mechanical iron chain hoist lifting a suspended skeleton cage above bubbling molten rock.
- **Tier 2 (Throne Room & Palantír)**: A throne room featuring an obsidian throne with hidden drawers concealing the One Ring's secret map, a glowing translucent Palantír seeing-stone, and wall banners emblazoned with the Red Eye.
- **Tier 3 (Sauron's Study & Archive)**: A scholarly sanctum housing ancient potion bottles, parchment scrolls, a cauldron, and a bookshelf with a hidden mechanism that pops open a secret chamber holding the Elven Rings of Power.
- **Tier 4 (The Spire Apex)**: The observation platform directly beneath the Eye, featuring weapon storage and parapets where Orc sentries keep watch.

---

## 4. The 10-Minifigure Ensemble: The Dark Lord Revealed

The minifigure selection is legendary:
- **Sauron**: For the first time in LEGO history, the Dark Lord appears in full physical armor, sporting an exclusive molded spiky helmet, a tattered dark cape, printed torso armor, and his spiked war mace.
- **Mouth of Sauron**: Equipped with his terrifying grinning helmet, black steed heraldry, and dark garments.
- **Gothmog & Mordor Orcs**: Featuring detailed scarred face prints, spiked shoulder armor, and crude iron helmets.
- **The Quest of the Ring**: Frodo Baggins and Samwise Gamgee in battered travel cloaks, accompanied by an articulated Gollum clutching a raw fish.

Set 10333 is an unmitigated masterpiece—a dark, atmospheric monument that captures Tolkien's high fantasy with breathtaking architectural scale.
\`,
  },
  "death-star-75419": {
    id: "post-75419",
    title: "Death Star (75419): The 9,023-Piece Ultimate Collector Series Battlestation",
    slug: "death-star-75419",
    excerpt: "With a staggering 9,023 pieces, 38 characters, and a 79 cm wide cutaway profile, set 75419 is the largest LEGO Star Wars set in history. We dissect its load-bearing Technic spaceframe, Superlaser dish geometry, and multi-tier cinematic dioramas.",
    status: "published",
    readingTimeMinutes: 16,
    setId: "set-75419",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["75419"],
    affiliateLinks: SAMPLE_SETS["75419"].affiliateLinks,
    galleryImages: SAMPLE_SETS["75419"].galleryImages,
    pros: [
      "Historic 9,023-piece milestone: the most expansive and comprehensive LEGO Star Wars UCS set ever produced",
      "Stunning 79 cm wide by 70 cm tall cutaway diorama presenting every iconic sequence from A New Hope & Return of the Jedi",
      "Rigid load-bearing Technic octahedral spaceframe preventing flex across the immense 9-kilogram structure",
      "Articulated Superlaser focusing dish with multi-laser converging beam array and tactile rotation controls",
      "Record-shattering 38-character minifigure roster covering every hero, villain, officer, and trooper variant"
    ],
    cons: [
      "Enormous 79 cm wide by 70 cm tall footprint requires a dedicated display table or deep collector vitrine",
      "Massive multi-box build requires considerable assembly workspace and systematic component management"
    ],
    verdictScore: 9.9,
    verdictSummary: "The ultimate holy grail of LEGO Star Wars collecting. Set 75419 eclipses all predecessors by uniting the sheer architectural presence of a 79 cm wide battlestation cutaway with an encyclopedic, fully functional layout of every legendary movie scene. With 9,023 pieces, 38 characters, and flawless structural rigidity, it is a peerless triumph of modern block engineering.",
    metrics: [
      { label: "UCS Spaceframe & Scale", score: 10.0, iconType: "techniques" },
      { label: "Structural Integrity (9kg Load)", score: 9.9, iconType: "rigidity" },
      { label: "Scene Integration & Cinematic Detail", score: 9.9, iconType: "flow" },
      { label: "Character Cast (38 Figures)", score: 10.0, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: The Ultimate Weapon in the Galaxy

Ever since the legendary 2008 *Death Star* (10188) and its 2016 successor (75159), adult collectors have dreamed of an uncompromising, modern Ultimate Collector Series (UCS) cutaway battlestation that married high-density display aesthetics with the beloved playset diorama rooms. With **75419: Death Star**, LEGO Star Wars has created the largest, most ambitious set in the theme's 26-year history.

Weighing in at over 9 kilograms, spanning **79 centimeters (31 inches)** in width, **70 centimeters (27.5 inches)** in height, and constructed from **9,023 precision elements**, this battlestation is the crowning jewel of any galactic collection.

---

## 1. Structural Engineering: The Octahedral Technic Spaceframe

Supporting a 9-kilogram sphere cutaway without sagging or shear collapse requires industrial-grade structural design:
- **Central Cruciform Backbone**: The heart of the station is a multi-tier Technic spine built from interlocking rectangular frames, cross-braced liftarms, and steel-reinforced pivot pins. This skeleton absorbs all vertical compression and transfers weight downward into a broad, reinforced baseplate plinth.
- **Exterior Curved Hull Slices**: Unlike previous spherical sets, 75419 features curved outer hull panels utilizing smooth SNOT plating and dark bluish-gray tiled bands that frame the cross-section, giving it the appearance of a museum-grade architectural cutaway model.
- **The Superlaser Concave Dish**: The iconic superlaser dish utilizes radially arranged curved wedge slopes attached via central turntable brackets, achieving a perfectly smooth parabolic curvature. Eight trans-neon-green laser beams converge at a focal point to recreate Alderaan's tragic moment.

---

## 2. Multi-Deck Cinematic Vignettes: From Hangar 327 to the Throne Room

Every major sequence from *A New Hope* and *Return of the Jedi* is immortalized across the station's decks:
- **Hangar Bay 327**: Features functional gantry cranes, an Imperial cargo lift, magnetic tractor beam controls with a removable power coupling, and ample space to stage Luke and Han in stormtrooper disguise.
- **Detention Block AA-23**: The iconic corridor features opening blast doors, intercom panels, the cell where Princess Leia is held, and the trash chute hatch.
- **Working Trash Compactor**: Fully equipped with moving magnetic wall mechanisms, piled scrap rubble, and a flexible Dianoga creature lurking in the murk.
- **The Emperor's Throne Room**: Placed at the top level with grand observation windows looking out into the stars, a rotating Emperor's throne, dual Imperial Guard stations, and the reactor shaft where Darth Vader redeems himself.
- **The Chasm Swing Bridge**: A retractable catwalk bridge where Luke and Leia can swing across the chasm to safety on a flexible cable element.

---

## 3. The 38-Character Cast: An Unprecedented Roster

Set 75419 shatters every previous character record with **38 distinct figures**:
- **The Rebels**: Luke Skywalker (farmboy, stormtrooper disguise, and Jedi Knight versions), Han Solo (smuggler and stormtrooper versions), Princess Leia, Chewbacca, Obi-Wan Kenobi, and droids R2-D2 and C-3PO.
- **The Imperial Command**: Emperor Palpatine with lightning elements, Darth Vader with two-piece helmet and fabric cape, Grand Moff Tarkin, Admiral Motti, General Tagge, Death Star Droid, Mouse Droid, and Imperial Astromech.
- **Troopers & Crew**: Stormtroopers with dual-molded helmets, Imperial Gunners, Death Star Troopers, Navy Troopers, Royal Guards with fabric cloaks, and Detention security guards.

Set 75419 is more than a model—it is an entire cinematic universe preserved in 9,023 pieces of flawless block architecture.
\`,
  },
  "lionel-messi-soccer-highlights-43011": {
    id: "post-43011",
    title: "Lionel Messi – Soccer Highlights (43011): Kinetic Penalty Box Action & Collector Display",
    slug: "lionel-messi-soccer-highlights-43011",
    excerpt: "The companion to the larger Messi sculpture, set 43011 brings interactive stadium play and collector styling in a 500-piece package. We analyze its spring-loaded kicking mechanism, rotating goalkeeper gear train, and golden cleat minifigure.",
    status: "published",
    readingTimeMinutes: 8,
    setId: "set-43011",
    publishedAt: new Date("2026-09-12"),
    createdAt: new Date("2026-09-12"),
    updatedAt: new Date("2026-09-12"),
    legoSet: SAMPLE_SETS["43011"],
    affiliateLinks: SAMPLE_SETS["43011"].affiliateLinks,
    galleryImages: SAMPLE_SETS["43011"].galleryImages,
    pros: [
      "Dynamic spring-loaded kicking launcher capable of genuine kinetic ball strikes into the goal net",
      "Rear dial turntable mechanism that oscillates the goalkeeper dummy across the goal line",
      "Exclusive Lionel Messi minifigure featuring sharp jersey printing and metallic golden cleat elements",
      "Charming stadium concourse detailing including floodlights, electronic scoreboard, and trophy plinth",
      "Compact 24 cm wide footprint making it an accessible, desktop-friendly sports collectible"
    ],
    cons: [
      "Netting assembly uses semi-flexible mesh that requires careful clipping to maintain taut tension",
      "Smaller piece count means simpler architectural layering compared to 43015"
    ],
    verdictScore: 9.3,
    verdictSummary: "A delightful interactive vignette that bridges action play with adult sports fandom. Set 43011 delivers smooth kinetic mechanisms—a spring-loaded striker and geared goalkeeper—wrapped in an authentic stadium backdrop with an exclusive Lionel Messi minifigure. It serves as both a fun desk toy and an attractive companion to set 43015.",
    metrics: [
      { label: "Kinetic Action & Mechanics", score: 9.5, iconType: "techniques" },
      { label: "Pitch & Net Stability", score: 9.2, iconType: "rigidity" },
      { label: "Assembly Accessibility", score: 9.5, iconType: "flow" },
      { label: "Minifigure Detail & Graphics", score: 9.4, iconType: "quality" },
    ],
    contentMarkdown: \`
## Introduction: Stadium Action in Miniature

While **43015** delivers an ambitious 958-piece anatomical sculpture of Lionel Messi, LEGO Editions designed **43011: Lionel Messi – Soccer Highlights** to capture the kinetic thrill of match day. With 500 pieces, an exclusive minifigure, and functional mechanical gameplay, this set transforms the penalty box into a captivating desktop action diorama.

Measuring 13 cm high, 24 cm wide, and 15 cm deep, it is built for football fans of all ages who want an interactive display piece celebrating the greatest moments in soccer history.

---

## 1. Kinetic Mechanics: Striker Spring & Geared Goalkeeper

Unlike static shelf models, set 43011 incorporates real-world physics into its pitch:
- **Spring-Loaded Striker Stand**: The Messi minifigure docks into an articulated kicking mount equipped with a tensioned spring release. Pulling back and releasing the trigger strikes the specialized 20-panel soccer ball element with genuine velocity, testing your accuracy against the goal.
- **Geared Goalkeeper Oscillation**: Behind the goal frame, a rear turntable knob connects to an internal gear train that slides and rotates a goalkeeper training dummy back and forth across the goal line, creating a competitive penalty shootout challenge.
- **Tensioned Netting Assembly**: The goal net is constructed from flexible mesh cord framed by white curved tubes, providing an authentic *thwack* sound when the ball hits the back of the net.

---

## 2. Stadium Architecture: Floodlights, Scoreboard & Trophy Stand

The pitch is framed by polished stadium infrastructure:
- **Floodlight Pylons**: Angled overhead lighting trusses with trans-clear round tiles illuminate the green pitch surface.
- **Electronic Scoreboard**: A printed digital display tracking match time, home/away scores, and Messi's iconic #10 shirt graphic.
- **Golden Trophy Plinth**: A miniature display pedestal holding a golden championship cup element, celebrating a career decorated with World Cups, Champions Leagues, and Ballons d'Or.

---

## 3. The Exclusive Messi Minifigure

The centerpiece is the collectible Lionel Messi minifigure:
- **Signature Kit**: Features his national/club jersey styling with printed captain's armband and authentic #10 back printing.
- **Golden Cleats**: Dual-molded legs featuring metallic gold boots, honoring his record eight Ballon d'Or trophies.
- **Dual Facial Print**: One expression focused and determined before the penalty kick; the other celebrating with a triumphant victory smile.

Set 43011 is an accessible, joyful addition to the LEGO Editions line—bringing tactile matchday energy to any fan's desk or shelf.
\`,
  },
};

// Aliases for backward compatibility
SAMPLE_POSTS["delorean-time-machine-10300"] = SAMPLE_POSTS["delorean-regreso-al-futuro-10300"];
SAMPLE_POSTS["lego-ideas-home-alone-21330"] = SAMPLE_POSTS["home-alone-21330"];
SAMPLE_POSTS["pinball-machine-11374"] = SAMPLE_POSTS["arcade-pinball-machine-11374"];
SAMPLE_POSTS["sega-genesis-40926"] = SAMPLE_POSTS["sega-genesis-console-40926"];
SAMPLE_POSTS["sega-mega-drive-40926"] = SAMPLE_POSTS["sega-genesis-console-40926"];
SAMPLE_POSTS["sega-genesis-console-11374"] = SAMPLE_POSTS["sega-genesis-console-40926"];
SAMPLE_POSTS["snoopys-doghouse-21368"] = SAMPLE_POSTS["peanuts-snoopys-doghouse-21368"];
SAMPLE_POSTS["snoopy-doghouse-21368"] = SAMPLE_POSTS["peanuts-snoopys-doghouse-21368"];
SAMPLE_POSTS["peanuts-snoopy-21368"] = SAMPLE_POSTS["peanuts-snoopys-doghouse-21368"];
SAMPLE_POSTS["donkey-kong-72051"] = SAMPLE_POSTS["donkey-kong-arcade-72051"];
SAMPLE_POSTS["donkey-kong-arcade-machine-72051"] = SAMPLE_POSTS["donkey-kong-arcade-72051"];
SAMPLE_POSTS["dk-arcade-72051"] = SAMPLE_POSTS["donkey-kong-arcade-72051"];
SAMPLE_POSTS["batman-the-animated-series-gotham-city-76271"] = SAMPLE_POSTS["batman-gotham-city-76271"];
SAMPLE_POSTS["gotham-city-76271"] = SAMPLE_POSTS["batman-gotham-city-76271"];
SAMPLE_POSTS["lego-batman-gotham-city-76271"] = SAMPLE_POSTS["batman-gotham-city-76271"];
SAMPLE_POSTS["beauty-and-the-beast-43263"] = SAMPLE_POSTS["beauty-and-the-beast-castle-43263"];
SAMPLE_POSTS["lego-43263"] = SAMPLE_POSTS["beauty-and-the-beast-castle-43263"];
SAMPLE_POSTS["castillo-bella-y-bestia-43263"] = SAMPLE_POSTS["beauty-and-the-beast-castle-43263"];
SAMPLE_POSTS["lego-disney-castle-43263"] = SAMPLE_POSTS["beauty-and-the-beast-castle-43263"];
SAMPLE_POSTS["charles-leclerc-helmet-43014"] = SAMPLE_POSTS["scuderia-ferrari-hp-charles-leclerc-helmet-43014"];
SAMPLE_POSTS["ferrari-helmet-43014"] = SAMPLE_POSTS["scuderia-ferrari-hp-charles-leclerc-helmet-43014"];
SAMPLE_POSTS["lego-43014"] = SAMPLE_POSTS["scuderia-ferrari-hp-charles-leclerc-helmet-43014"];
SAMPLE_POSTS["casco-charles-leclerc-43014"] = SAMPLE_POSTS["scuderia-ferrari-hp-charles-leclerc-helmet-43014"];
SAMPLE_POSTS["the-mandalorians-n-1-starfighter-75442"] = SAMPLE_POSTS["mandalorian-n1-starfighter-75442"];
SAMPLE_POSTS["mandalorian-n-1-starfighter-75442"] = SAMPLE_POSTS["mandalorian-n1-starfighter-75442"];
SAMPLE_POSTS["n1-starfighter-75442"] = SAMPLE_POSTS["mandalorian-n1-starfighter-75442"];
SAMPLE_POSTS["lego-75442"] = SAMPLE_POSTS["mandalorian-n1-starfighter-75442"];
SAMPLE_POSTS["caza-estelar-n-1-del-mandaloriano-75442"] = SAMPLE_POSTS["mandalorian-n1-starfighter-75442"];
SAMPLE_POSTS["lionel-messi-43015"] = SAMPLE_POSTS["lionel-messi-soccer-legend-43015"];
SAMPLE_POSTS["messi-43015"] = SAMPLE_POSTS["lionel-messi-soccer-legend-43015"];
SAMPLE_POSTS["lego-43015"] = SAMPLE_POSTS["lionel-messi-soccer-legend-43015"];
SAMPLE_POSTS["messi-leyenda-del-futbol-43015"] = SAMPLE_POSTS["lionel-messi-soccer-legend-43015"];
SAMPLE_POSTS["lego-messi-43015"] = SAMPLE_POSTS["lionel-messi-soccer-legend-43015"];
SAMPLE_POSTS["jack-sparrow-pirate-ship-10365"] = SAMPLE_POSTS["captain-jack-sparrows-pirate-ship-10365"];
SAMPLE_POSTS["black-pearl-10365"] = SAMPLE_POSTS["captain-jack-sparrows-pirate-ship-10365"];
SAMPLE_POSTS["lego-10365"] = SAMPLE_POSTS["captain-jack-sparrows-pirate-ship-10365"];
SAMPLE_POSTS["pirate-ship-10365"] = SAMPLE_POSTS["captain-jack-sparrows-pirate-ship-10365"];
SAMPLE_POSTS["barco-pirata-jack-sparrow-10365"] = SAMPLE_POSTS["captain-jack-sparrows-pirate-ship-10365"];
SAMPLE_POSTS["la-perla-negra-10365"] = SAMPLE_POSTS["captain-jack-sparrows-pirate-ship-10365"];



SAMPLE_POSTS["lego-10303"] = SAMPLE_POSTS["loop-coaster-10303"];
SAMPLE_POSTS["montana-rusa-loop-10303"] = SAMPLE_POSTS["loop-coaster-10303"];
SAMPLE_POSTS["loop-roller-coaster-10303"] = SAMPLE_POSTS["loop-coaster-10303"];
SAMPLE_POSTS["fairground-loop-coaster-10303"] = SAMPLE_POSTS["loop-coaster-10303"];

SAMPLE_POSTS["barad-dur-10333"] = SAMPLE_POSTS["the-lord-of-the-rings-barad-dur-10333"];
SAMPLE_POSTS["lego-10333"] = SAMPLE_POSTS["the-lord-of-the-rings-barad-dur-10333"];
SAMPLE_POSTS["lord-of-the-rings-10333"] = SAMPLE_POSTS["the-lord-of-the-rings-barad-dur-10333"];
SAMPLE_POSTS["el-senor-de-los-anillos-barad-dur-10333"] = SAMPLE_POSTS["the-lord-of-the-rings-barad-dur-10333"];
SAMPLE_POSTS["torre-de-sauron-10333"] = SAMPLE_POSTS["the-lord-of-the-rings-barad-dur-10333"];

SAMPLE_POSTS["lego-75419"] = SAMPLE_POSTS["death-star-75419"];
SAMPLE_POSTS["star-wars-death-star-75419"] = SAMPLE_POSTS["death-star-75419"];
SAMPLE_POSTS["estrella-de-la-muerte-75419"] = SAMPLE_POSTS["death-star-75419"];
SAMPLE_POSTS["death-star-ucs-75419"] = SAMPLE_POSTS["death-star-75419"];

SAMPLE_POSTS["messi-highlights-43011"] = SAMPLE_POSTS["lionel-messi-soccer-highlights-43011"];
SAMPLE_POSTS["lego-43011"] = SAMPLE_POSTS["lionel-messi-soccer-highlights-43011"];
SAMPLE_POSTS["lionel-messi-43011"] = SAMPLE_POSTS["lionel-messi-soccer-highlights-43011"];
SAMPLE_POSTS["messi-jugadas-destacadas-43011"] = SAMPLE_POSTS["lionel-messi-soccer-highlights-43011"];


export async function getPostBySlug(slug: string): Promise<PostWithSet | null> {
  if (slug === "delorean-time-machine-10300") {
    return SAMPLE_POSTS["delorean-regreso-al-futuro-10300"];
  }
  if (slug === "lego-ideas-home-alone-21330") {
    return SAMPLE_POSTS["home-alone-21330"];
  }
  if (slug === "pinball-machine-11374") {
    return SAMPLE_POSTS["arcade-pinball-machine-11374"];
  }
  if (slug === "sega-genesis-40926" || slug === "sega-mega-drive-40926" || slug === "sega-genesis-console-11374") {
    return SAMPLE_POSTS["sega-genesis-console-40926"];
  }
  if (slug === "snoopys-doghouse-21368" || slug === "snoopy-doghouse-21368" || slug === "peanuts-snoopy-21368") {
    return SAMPLE_POSTS["peanuts-snoopys-doghouse-21368"];
  }
  if (slug === "batman-the-animated-series-gotham-city-76271" || slug === "gotham-city-76271" || slug === "lego-batman-gotham-city-76271") {
    return SAMPLE_POSTS["batman-gotham-city-76271"];
  }
  if (slug === "donkey-kong-72051" || slug === "donkey-kong-arcade-machine-72051" || slug === "dk-arcade-72051") {
    return SAMPLE_POSTS["donkey-kong-arcade-72051"];
  }
  if (slug === "beauty-and-the-beast-43263" || slug === "lego-43263" || slug === "castillo-bella-y-bestia-43263" || slug === "lego-disney-castle-43263") {
    return SAMPLE_POSTS["beauty-and-the-beast-castle-43263"];
  }
  if (slug === "charles-leclerc-helmet-43014" || slug === "ferrari-helmet-43014" || slug === "lego-43014" || slug === "casco-charles-leclerc-43014") {
    return SAMPLE_POSTS["scuderia-ferrari-hp-charles-leclerc-helmet-43014"];
  }
  if (slug === "the-mandalorians-n-1-starfighter-75442" || slug === "mandalorian-n-1-starfighter-75442" || slug === "n1-starfighter-75442" || slug === "lego-75442" || slug === "caza-estelar-n-1-del-mandaloriano-75442") {
    return SAMPLE_POSTS["mandalorian-n1-starfighter-75442"];
  }
  if (slug === "lionel-messi-43015" || slug === "messi-43015" || slug === "lego-43015" || slug === "messi-leyenda-del-futbol-43015" || slug === "lego-messi-43015") {
    return SAMPLE_POSTS["lionel-messi-soccer-legend-43015"];
  }
  if (slug === "jack-sparrow-pirate-ship-10365" || slug === "black-pearl-10365" || slug === "lego-10365" || slug === "pirate-ship-10365" || slug === "barco-pirata-jack-sparrow-10365" || slug === "la-perla-negra-10365") {
    return SAMPLE_POSTS["captain-jack-sparrows-pirate-ship-10365"];
  }
  
  if (slug === "loop-coaster-10303" || slug === "lego-10303" || slug === "montana-rusa-loop-10303" || slug === "loop-roller-coaster-10303" || slug === "fairground-loop-coaster-10303") {
    return SAMPLE_POSTS["loop-coaster-10303"];
  }
  if (slug === "the-lord-of-the-rings-barad-dur-10333" || slug === "barad-dur-10333" || slug === "lego-10333" || slug === "lord-of-the-rings-10333" || slug === "el-senor-de-los-anillos-barad-dur-10333" || slug === "torre-de-sauron-10333") {
    return SAMPLE_POSTS["the-lord-of-the-rings-barad-dur-10333"];
  }
  if (slug === "death-star-75419" || slug === "lego-75419" || slug === "star-wars-death-star-75419" || slug === "estrella-de-la-muerte-75419" || slug === "death-star-ucs-75419") {
    return SAMPLE_POSTS["death-star-75419"];
  }
  if (slug === "lionel-messi-soccer-highlights-43011" || slug === "messi-highlights-43011" || slug === "lego-43011" || slug === "lionel-messi-43011" || slug === "messi-jugadas-destacadas-43011") {
    return SAMPLE_POSTS["lionel-messi-soccer-highlights-43011"];
  }
  return SAMPLE_POSTS[slug] || null;
}

export async function getAllPosts(): Promise<PostWithSet[]> {
  // Only return unique canonical posts
  return [
    SAMPLE_POSTS["millennium-falcon-ucs-75192"],
    SAMPLE_POSTS["delorean-regreso-al-futuro-10300"],
    SAMPLE_POSTS["home-alone-21330"],
    SAMPLE_POSTS["arcade-pinball-machine-11374"],
    SAMPLE_POSTS["sega-genesis-console-40926"],
    SAMPLE_POSTS["peanuts-snoopys-doghouse-21368"],
    SAMPLE_POSTS["donkey-kong-arcade-72051"],
    SAMPLE_POSTS["batman-gotham-city-76271"],
    SAMPLE_POSTS["beauty-and-the-beast-castle-43263"],
    SAMPLE_POSTS["scuderia-ferrari-hp-charles-leclerc-helmet-43014"],
    SAMPLE_POSTS["mandalorian-n1-starfighter-75442"],
    SAMPLE_POSTS["lionel-messi-soccer-legend-43015"],
    SAMPLE_POSTS["captain-jack-sparrows-pirate-ship-10365"],
  
    SAMPLE_POSTS["loop-coaster-10303"],
    SAMPLE_POSTS["the-lord-of-the-rings-barad-dur-10333"],
    SAMPLE_POSTS["death-star-75419"],
    SAMPLE_POSTS["lionel-messi-soccer-highlights-43011"],
  ];
}

export async function getPostsByCategory(categorySlug: string): Promise<PostWithSet[]> {
  const norm = categorySlug.toLowerCase().replace(/-/g, " ");
  const posts = await getAllPosts();
  return posts.filter(
    (p) => p.legoSet?.lineTheme.toLowerCase() === norm
  );
}
`;

fs.writeFileSync(targetPath, content, "utf-8");
console.log("Successfully wrote English catalog to " + targetPath);
