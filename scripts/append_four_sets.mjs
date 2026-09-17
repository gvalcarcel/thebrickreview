import fs from "fs";

let code = fs.readFileSync("scripts/write_posts.mjs", "utf8");

// 1. Definition of the 4 Sets
const newSetsBlock = `
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
`;

// 2. Definition of the 4 Posts
const newPostsBlock = `
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
    contentMarkdown: \\\`
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
\\\`,
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
    contentMarkdown: \\\`
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
\\\`,
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
    contentMarkdown: \\\`
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
\\\`,
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
    contentMarkdown: \\\`
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
\\\`,
  },
`;

// 3. Aliases for the 4 sets
const newAliasesBlock = `
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
`;

// 4. getPostBySlug handling
const newSlugHandling = `
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
`;

// 5. getAllPosts entries
const newAllPostsEntries = `
    SAMPLE_POSTS["loop-coaster-10303"],
    SAMPLE_POSTS["the-lord-of-the-rings-barad-dur-10333"],
    SAMPLE_POSTS["death-star-75419"],
    SAMPLE_POSTS["lionel-messi-soccer-highlights-43011"],
`;

// Insert Sets before `export const SAMPLE_POSTS`
const setsEndIdx = code.indexOf("export const SAMPLE_POSTS: Record<string, PostWithSet> = {");
if (setsEndIdx === -1) throw new Error("Could not find export const SAMPLE_POSTS");
// Find the `};` right before `export const SAMPLE_POSTS`
const lastSetClosing = code.lastIndexOf("};", setsEndIdx);
code = code.slice(0, lastSetClosing) + newSetsBlock + code.slice(lastSetClosing);

// Insert Posts before `// Aliases for backward compatibility`
const aliasesIdx = code.indexOf("// Aliases for backward compatibility");
if (aliasesIdx === -1) throw new Error("Could not find // Aliases for backward compatibility");
const lastPostClosing = code.lastIndexOf("};", aliasesIdx);
code = code.slice(0, lastPostClosing) + newPostsBlock + code.slice(lastPostClosing);

// Insert Aliases before `export async function getPostBySlug`
const getPostIdx = code.indexOf("export async function getPostBySlug(slug: string)");
if (getPostIdx === -1) throw new Error("Could not find getPostBySlug");
code = code.slice(0, getPostIdx) + newAliasesBlock + "\n\n" + code.slice(getPostIdx);

// Insert Slug Handling right before `return SAMPLE_POSTS[slug] || null;`
const returnSlugIdx = code.indexOf("return SAMPLE_POSTS[slug] || null;");
if (returnSlugIdx === -1) throw new Error("Could not find return SAMPLE_POSTS[slug]");
code = code.slice(0, returnSlugIdx) + newSlugHandling + "  " + code.slice(returnSlugIdx);

// Insert into getAllPosts before closing `];`
const getAllPostsIdx = code.indexOf("export async function getAllPosts()");
if (getAllPostsIdx === -1) throw new Error("Could not find getAllPosts");
const getAllPostsArrayEnd = code.indexOf("];", getAllPostsIdx);
code = code.slice(0, getAllPostsArrayEnd) + newAllPostsEntries + "  " + code.slice(getAllPostsArrayEnd);

fs.writeFileSync("scripts/write_posts.mjs", code, "utf8");
console.log("Successfully patched scripts/write_posts.mjs with 4 new sets!");

