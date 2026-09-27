import { Article, Manga, Product, Story } from '../types';

// Real high-fidelity generated original anime artwork assets
export const ASSETS = {
  hero: '/src/assets/images/hero_animefreak_story_1790420257323.jpg',
  crimsonEclipse: '/src/assets/images/manga_crimson_eclipse_1790420273501.jpg',
  soulFragment: '/src/assets/images/manga_soul_fragment_1790420288745.jpg',
  starbornZero: '/src/assets/images/manga_starborn_zero_1790420303767.jpg',
  universeGuide: '/src/assets/images/art_manga_universe_guide_1790420322009.jpg',
};

export const MANGA_ITEMS: Manga[] = [
  {
    id: 'manga-1',
    title: 'Crimson Eclipse',
    slug: 'crimson-eclipse',
    genre: 'Fantasy / Action',
    author: 'Kaelen Thorne & Studio Freak',
    pages: 24,
    price: 6.99,
    cover: ASSETS.crimsonEclipse,
    publishedAt: '2026-03-12',
    rating: 4.9,
    reviewsCount: 148,
    aiDisclosure: 'AI-assisted artwork disclosure: Initial conceptual drafts and environment textures were generated with generative AI tools under human artistic direction and overpainted by independent digital illustrators.',
    description: 'When the sky bleeds obsidian, an ancient vow binding the Sol and Lunar bloodlines fractures into chaos.',
    storySynopsis: 'In the shattered continent of Oakhaven, the Crimson Eclipse occurs once every seven centuries. Rayne, a disenfranchised blade-scholar from the Sunken Archives, stumbles upon the broken seal of the Sun Sovereign. With imperial inquisitors closing in and shadow manifestations ravaging the borderlands, Rayne must choose between unleashing forbidden eclipse techniques or watching his homeland burn to ash.',
    previewPages: [
      ASSETS.crimsonEclipse,
      ASSETS.universeGuide,
      ASSETS.hero,
      ASSETS.soulFragment,
    ],
    reviews: [
      {
        id: 'rev-1',
        user: 'Elena R.',
        date: '2026-03-18',
        rating: 5,
        comment: 'The visual direction is breathtaking. The lore of the Sunken Archives feels completely fresh and distinct from mainstream shonen.'
      },
      {
        id: 'rev-2',
        user: 'Marcus K.',
        date: '2026-03-21',
        rating: 5,
        comment: 'Transparent about AI assistance while delivering masterclass digital compositing and narrative pacing. Deserves huge recognition!'
      }
    ]
  },
  {
    id: 'manga-2',
    title: 'Soul Fragment',
    slug: 'soul-fragment',
    genre: 'Dark Fantasy / Mystery',
    author: 'Ren Takahashi',
    pages: 32,
    price: 7.99,
    cover: ASSETS.soulFragment,
    publishedAt: '2026-02-28',
    rating: 4.8,
    reviewsCount: 112,
    aiDisclosure: 'AI-assisted artwork disclosure: Background lighting passes and architectural line art were synthesized with generative models and manually edited for continuity and tone.',
    description: 'In a rain-drowned metropolis where human memories can be crystalline currency, a detective searches for his sister’s stolen consciousness.',
    storySynopsis: 'The city of Neo-Kagura never sleeps, submerged in perennial acid drizzle and fluorescent neon haze. Detective Jin Kurogane investigates memory trafficking rings that extract emotional fragments from citizens. When a mysterious memory shard bearing the seal of the city magistrate arrives at his doorstep, Jin is thrust into a conspiracy that threatens the fabric of human identity.',
    previewPages: [
      ASSETS.soulFragment,
      ASSETS.starbornZero,
      ASSETS.crimsonEclipse,
      ASSETS.hero,
    ],
    reviews: [
      {
        id: 'rev-3',
        user: 'Sora_V',
        date: '2026-03-05',
        rating: 5,
        comment: 'Cyberpunk neo-noir combined with supernatural mystery. The panel layouts are super cinematic.'
      }
    ]
  },
  {
    id: 'manga-3',
    title: 'Starborn: Zero',
    slug: 'starborn-zero',
    genre: 'Sci-Fi / Space Opera',
    author: 'Astrid Vance',
    pages: 28,
    price: 5.99,
    cover: ASSETS.starbornZero,
    publishedAt: '2026-03-01',
    rating: 4.7,
    reviewsCount: 89,
    aiDisclosure: 'AI-assisted artwork disclosure: Starship schematics and celestial nebula backdrops utilized diffusion synthesis with digital matte painting enhancements.',
    description: 'Beyond the jump gates of Sector Nine lies the carcass of an ancient dreadnought and a crew ready to stake everything.',
    storySynopsis: 'Commander Nyx and the scavenger vessel Peregrine drift in unmapped outer space. Their salvage operation on an abandoned dreadnought awakens a slumbering AI consciousness claiming to hold the coordinates to humanity’s lost cradle world.',
    previewPages: [
      ASSETS.starbornZero,
      ASSETS.hero,
      ASSETS.universeGuide,
    ],
    reviews: [
      {
        id: 'rev-4',
        user: 'David P.',
        date: '2026-03-15',
        rating: 4,
        comment: 'Terrific hard sci-fi worldbuilding. Love the ship interiors and philosophical conflict.'
      }
    ]
  },
  {
    id: 'manga-4',
    title: 'Beyond the Crimson Gate',
    slug: 'beyond-the-crimson-gate',
    genre: 'Fantasy / Mystery',
    author: 'Mira Zhou',
    pages: 36,
    price: 8.99,
    cover: ASSETS.universeGuide,
    publishedAt: '2026-01-20',
    rating: 4.9,
    reviewsCount: 165,
    aiDisclosure: 'AI-assisted artwork disclosure: Environment concept iterations were assisted by generative art pipelines with full manual character drafting and ink finishing.',
    description: 'A forbidden mountain gate separates mortals from the spirits of dusk. One girl must cross to reclaim what was lost.',
    storySynopsis: 'The Crimson Gate at Mt. Hizan has stood locked for nine centuries. When the autumn mists thin, young shrine maiden Yuna discovers the barrier trembling from within. Armed with an ancestral bell, she ventures across the threshold into an ethereal landscape of floating shrines and spirit warlords.',
    previewPages: [
      ASSETS.universeGuide,
      ASSETS.crimsonEclipse,
      ASSETS.soulFragment,
    ],
    reviews: [
      {
        id: 'rev-5',
        user: 'Kenji T.',
        date: '2026-02-14',
        rating: 5,
        comment: 'Reminds me of classic supernatural folklore with modern indie storytelling.'
      }
    ]
  }
];

export const STORIES: Story[] = [
  {
    id: 'story-1',
    title: 'The Last Shinobi of the Forgotten Moon',
    slug: 'the-last-shinobi-of-the-forgotten-moon',
    genre: 'Original Fiction / Ninja Drama',
    author: 'Kazuki Endo',
    cover: ASSETS.crimsonEclipse,
    chaptersCount: 12,
    readingTime: '45 min total',
    synopsis: 'When the clan of the Crescent Peak was wiped out in a single midnight raid, only a wounded shadow apprentice survived with an ancestral moon scroll sewn into his flesh.',
    chapters: [
      {
        number: 1,
        title: 'Ashes on the Pine Ridge',
        readTime: '6 min read',
        content: [
          'The smoke from the burning dojo rose straight toward the winter moon, unbothered by wind or mercy. Renji crouched among the snow-laden bamboo groves, his breathing shallow, teeth clenched against the jagged throbbing in his left collarbone.',
          'Behind him, the obsidian crest of the Tsukiyomi clan lay shattered under heavy iron boots. The Imperial Envoys had made no proclamation. They had carried neither banner nor herald, only curved whistling halberds that cleaved through cedar screens like rotten paper.',
          'In his chest pouch, the parchment cylinder hummed with faint lunar luminescence. It was cold against his ribs—colder than the mountain ice pack beneath his split sandals. "Run to the western sea," the Elder had whispered with blood bubbling in his throat. "The moon does not die with us. It only wanes."',
          'Renji stepped onto the frozen river. Every crunch of ice sounded like gunfire to his heightened senses, but forward was the only direction that left retribution alive.'
        ]
      },
      {
        number: 2,
        title: 'The Silent Ferryman',
        readTime: '8 min read',
        content: [
          'The fog of Lake Kurozuru was thick enough to mask even the smell of fresh sulfur. Renji waited beneath the dripping eaves of an abandoned sake storehouse until an unpainted flatboat pushed through the reeds.',
          'The man at the oar wore a wide sedge hat that obscured his eyes. He said nothing, merely tapping his wooden pipe against the gunwale twice. A signal from the old treaty days.',
          '"The tariff is steep for ghosts," the ferryman muttered without turning. "The Imperial guard patrols the locks downstream with mirror hounds."',
          'Renji drew a silver coin marked with a stylized crescent moon and dropped it into the boatman’s calloused palm. "Then take me where the mirrors blind themselves."'
        ]
      }
    ]
  },
  {
    id: 'story-2',
    title: 'Beyond the Crimson Gate',
    slug: 'beyond-the-crimson-gate-novel',
    genre: 'Original Dark Fantasy',
    author: 'Mira Zhou',
    cover: ASSETS.universeGuide,
    chaptersCount: 8,
    readingTime: '35 min total',
    synopsis: 'The boundary between the world of twilight spirits and humanity opens once every solstice. Enter a tale of forgotten treaties and lost blood.',
    chapters: [
      {
        number: 1,
        title: 'The Toll of the Iron Bell',
        readTime: '7 min read',
        content: [
          'When the village bell tolled forty-nine times instead of fifty, everyone inside the perimeter wall extinguished their lamps.',
          'Yuna watched from her attic window as the perimeter lanterns flickered from warm amber to ghost-pale cyan. Down in the valley, the crimson torii gate shuddered, its timber groaning under centuries of spiritual tension.',
          'She adjusted the talisman cord tied around her right forearm. For three generations, her family had guarded the key that never opened any door, only kept doors shut. Tonight, the hinges had finally rusted through.'
        ]
      }
    ]
  },
  {
    id: 'story-3',
    title: 'The Silent Star',
    slug: 'the-silent-star',
    genre: 'Sci-Fi Drama',
    author: 'Astrid Vance',
    cover: ASSETS.starbornZero,
    chaptersCount: 6,
    readingTime: '28 min total',
    synopsis: 'A deep-space surveyor discovers an artificial distress signal emanating from inside an event horizon where nothing should be able to broadcast.',
    chapters: [
      {
        number: 1,
        title: 'Singularity Drift',
        readTime: '6 min read',
        content: [
          'The sensor suite pinged with a frequency that mathematically should not exist. On the visual monitor of the cartography shuttle, the black hole Cygnus-Omega appeared as a warped ring of gravitational fire.',
          'Yet the audio translator insisted on decoding a rhythmic broadcast: eight bars of an ancient piano waltz composed three centuries before Earth’s atmospheric evacuation.',
          '"Playback verified," the onboard terminal reported calmly. "Source distance: negative seven meters inside the Schwarzschild radius."'
        ]
      }
    ]
  },
  {
    id: 'story-4',
    title: 'Kingdom of Ash',
    slug: 'kingdom-of-ash',
    genre: 'Epic Fantasy',
    author: 'Kaelen Thorne',
    cover: ASSETS.hero,
    chaptersCount: 14,
    readingTime: '55 min total',
    synopsis: 'In a realm where magic is fueled by incinerating memories, a deposed prince seeks the one spark that can ignite rebellion without burning his past.',
    chapters: [
      {
        number: 1,
        title: 'The Hearth of Forgetting',
        readTime: '8 min read',
        content: [
          'To summon a ball of azure flame, one had to sacrifice a memory of warmth. Prince Alden offered the memory of his eleventh birthday—the taste of sweet honeybread and the sound of his mother’s harp.',
          'The spell erupted with devastating brilliance, shattering the charging iron golem into molten fragments. But when the dust settled, Alden looked at his charred sleeve and realized he could no longer recall his mother’s face.'
        ]
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'How Great Anime Characters Are Written: Flaws, Worldview, and Dramatic Agency',
    slug: 'how-anime-characters-are-written',
    excerpt: 'Explore the psychological architecture of unforgettable anime protagonists and foils, moving beyond archetypes to understand what gives characters enduring emotional weight.',
    category: 'Storytelling',
    tags: ['Writing', 'Character Design', 'Anime Culture', 'World-Building'],
    featuredImage: ASSETS.hero,
    publishedAt: '2026-03-22',
    updatedAt: '2026-03-24',
    readingTime: '7 min read',
    author: {
      name: 'Kenji Arisawa',
      role: 'Senior Narrative Analyst',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: 'Screenwriter and cultural essayist specializing in anime dramaturgy and manga character design.'
    },
    seoTitle: 'How Great Anime Characters Are Written | AnimeFreak Culture Guide',
    seoDescription: 'Master the psychological principles behind legendary anime characters: internal contradiction, competing moral frameworks, and consequential choices.',
    content: [
      'The difference between a forgettable anime archetype and a character who resonates across generations is rarely aesthetic. It is structural. When fans talk about iconic leads and antagonists, they rarely fixate on costume design or power ratings alone; they fixate on the irreconcilable philosophical dilemma the character embodies.',
      '### 1. The Crucible of Internal Contradiction',
      'The most enduring protagonists are not paragons of singular virtues; they are walking battlegrounds between two mutually exclusive desires. A character who wants peace at all costs will eventually face a scenario where peace demands cowardice or complicity with tyranny. A protagonist who desires absolute autonomy will find that radical self-reliance alienates the very people they swore to protect.',
      'When designing your character, define the primary lie they believe about themselves or the world. In the best narratives, the plot does not just test their physical endurance—it systematically dismantles this foundational illusion.',
      '### 2. The Foil as a Moral Mirror',
      'Great antagonists are not merely obstacles with high combat metrics; they are ideological counterparts. The best rivalries in anime function because the villain and the hero started from the exact same emotional trauma or structural injustice, but chose opposing conclusions about how the world should be repaired.',
      'When the antagonist makes an argument that the audience secretly recognizes as uncomfortably logical, the dramatic tension shifts from physical survival to moral legitimacy. The question is no longer "Will the hero defeat the villain?" but "Can the hero’s worldview survive the collision with reality?"',
      '### 3. Real Stakes Require Irreversible Consequences',
      'If every defeat can be reversed with a sudden power surge and every dead mentor can be resurrected through convenient lore loopholes, emotional investment evaporates. Meaningful character progression requires scars—both literal and psychological—that alter how the character interacts with future dilemmas.',
      'Write your characters with respect for consequence. When they fail, make the loss cost something tangible: a friendship strained, an innocent compromised, or an innocence that can never be recovered.'
    ]
  },
  {
    id: 'art-2',
    title: 'How to Create Your Own Manga Universe: Rules, Societies, and Geographic Logic',
    slug: 'how-to-create-your-own-manga-universe',
    excerpt: 'A comprehensive world-building masterclass for creators looking to construct believable, cohesive anime and manga settings from the ground up.',
    category: 'Guides',
    tags: ['World-Building', 'Manga', 'Creative Writing', 'Guides'],
    featuredImage: ASSETS.universeGuide,
    publishedAt: '2026-03-19',
    updatedAt: '2026-03-21',
    readingTime: '9 min read',
    author: {
      name: 'Maya Lin',
      role: 'World Architect & Editor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      bio: 'Fantasy author and worldbuilding consultant for indie animation and graphic novels.'
    },
    seoTitle: 'How to Create Your Own Manga Universe | Worldbuilding Guide',
    seoDescription: 'Learn step-by-step how to develop original manga worlds with coherent geography, sociological conflict, and interconnected power ecosystems.',
    content: [
      'World-building in manga is often misunderstood as creating an exhaustive encyclopedia of flora, fauna, and thousand-year dynastic lineages. In visual storytelling, however, the world must serve the thematic heart of the story. If a piece of lore does not generate conflict, pressure the characters, or illustrate a social injustice, it is merely decorative baggage.',
      '### 1. Start with the Geographic Constraint',
      'Geography dictates civilization. An island nation surrounded by tempestuous spirit oceans will develop naval mysticism, strict ration laws, and xenophobic border defense. A desert metropolis built atop geothermal mana vents will naturally create an aristocratic elite who control water rights and fuel pipelines.',
      'Before drawing maps, identify the core scarcity that drives your world. Is it land? Is it magical fuel? Is it memory? Whatever people lack is what they will fight, bargain, and legislate for.',
      '### 2. The Rule of Social Ripple Effects',
      'If your world features supernatural abilities, that magic must not exist in a vacuum. How has the presence of pyromancy altered the architecture of cities? Wooden dwellings would likely be outlawed or heavily taxed. Firefighters would be elite counter-mages rather than water pumpers.',
      'Every supernatural rule must produce secondary and tertiary consequences in daily civilian life, legal codes, and class divisions. This gives the reader an immediate sensation of immersion.',
      '### 3. Anchor the Fantastic in Tangible Sensory Texture',
      'Ground your fantastical elements with sensory realities: the damp mildew smell of ancient scroll cellars, the sharp metallic taste of blood after overdrawing mana, the rhythmic hum of coolant pipes in a sky ship. When the physical sensations feel visceral, audiences will readily believe the impossible.'
    ]
  },
  {
    id: 'art-3',
    title: 'How AI Is Changing Independent Manga Creation: Ethics, Tools, and Human Authorship',
    slug: 'how-ai-is-changing-manga-creation',
    excerpt: 'An honest, nuanced breakdown of how generative tools are democratizing production for indie teams while demanding radical transparency and authorial discipline.',
    category: 'AI & Manga',
    tags: ['AI & Manga', 'Technology', 'Industry', 'Ethics'],
    featuredImage: ASSETS.soulFragment,
    publishedAt: '2026-03-15',
    updatedAt: '2026-03-17',
    readingTime: '6 min read',
    author: {
      name: 'Hiroshi Tanimoto',
      role: 'Tech & Art Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: 'Digital artist and technology researcher exploring ethical generative workflows in visual media.'
    },
    seoTitle: 'How AI Is Changing Independent Manga Creation | AnimeFreak',
    seoDescription: 'Explore the evolving intersection of generative AI tools and independent manga publishing, focusing on ethical disclosures and human-led storytelling.',
    content: [
      'The conversation surrounding artificial intelligence in creative fields is too often polarized into hyperbolic panic or uncritical evangelism. At AnimeFreak, we approach this technological shift through the lens of authorial intentionality, artistic integrity, and radical disclosure.',
      '### 1. From Concept Iteration to Polish: The Actual Workflow',
      'Generative tools in professional indie pipelines do not replace the author—they accelerate the grueling exploratory phase. An indie creator who once spent three weeks painting complex background perspectives can now iterate rough spatial compositions in hours, freeing mental bandwidth to concentrate on panel rhythm, dialogue cadence, and character nuance.',
      'However, the core narrative heartbeat—the pacing of a cliffhanger, the subtext of an unspoken look, the emotional resonance of a sacrifice—cannot be prompted into existence. It requires human lived experience and deliberate dramatic craftsmanship.',
      '### 2. The Imperative of Transparent Disclosure',
      'We firmly believe that creators should never disguise AI assistance. Honesty builds trust with readers. When a manga openly states which elements utilized assistive tools (such as environment textures or base line art) and which were hand-composed, it respects the audience and sets an industry standard for ethical publishing.',
      '### 3. Empowering Solitary Creators to Compete',
      'Historically, producing a weekly serialized manga required an entire studio of assistants filling in screentones, backgrounds, and speedlines. For solitary creators and small indie collectives around the world, AI tools represent a democratizing lever that allows imaginative stories that would otherwise never leave a sketchbook to find publication.'
    ]
  },
  {
    id: 'art-4',
    title: 'Why Original Worlds Matter in Anime Culture: Breaking Free from Franchise Fatigue',
    slug: 'why-original-worlds-matter-in-anime-culture',
    excerpt: 'With big-studio remakes and multi-decade franchises dominating the headlines, why the future of anime vitality depends on bold, unproven indie IPs.',
    category: 'Anime Culture',
    tags: ['Anime Culture', 'Original Stories', 'Editorial', 'Industry'],
    featuredImage: ASSETS.starbornZero,
    publishedAt: '2026-03-10',
    readingTime: '5 min read',
    author: {
      name: 'Kenji Arisawa',
      role: 'Senior Narrative Analyst',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    content: [
      'Anime culture was forged on bold, auteur-driven experiments that risked commercial failure to create indelible art. Yet in recent years, corporate consolidation and algorithmic risk-aversion have funneled resources into infinite sequels and nostalgia revivals.',
      'When an entire medium relies on IP created twenty or thirty years ago, the cultural bloodstream thickens. We need new myths. We need creators who are not shackled to the canon of existing megacorporations and are free to kill their darlings, explore subversive themes, and invent new visual vernaculars.',
      'Independent platforms exist to provide this very sanctuary: a space where original characters can be born without needing corporate focus groups or toy merchandising mandates.'
    ]
  },
  {
    id: 'art-5',
    title: 'How to Build a Manga Power System: Limitations, Costs, and Narrative Tension',
    slug: 'how-to-build-a-manga-power-system',
    excerpt: 'Why the limitations of a magic or combat system are infinitely more interesting than its peak capabilities, and how to keep stakes sky-high.',
    category: 'Guides',
    tags: ['Power Systems', 'Guides', 'Manga', 'Storytelling'],
    featuredImage: ASSETS.crimsonEclipse,
    publishedAt: '2026-02-24',
    readingTime: '8 min read',
    author: {
      name: 'Maya Lin',
      role: 'World Architect & Editor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
    content: [
      'Every aspiring manga writer has sketched out a list of ultimate abilities, celestial transformations, and continent-destroying finishers. But when experienced readers analyze why battles in top-tier manga feel gripping, they quickly notice that power is not exciting—limitation is.',
      '### 1. The Economy of Sacrifice',
      'A power that costs nothing creates zero dramatic tension. When a character activates their trump card, what does it drain? Blood? Memories? Lifespan? The trust of their allies? The higher the physical or moral invoice, the more dramatic weight each activation carries.',
      '### 2. Hard Systems vs. Soft Mystery',
      'Decide early whether your power system is a rigid tactical puzzle (like Nen or alchemy) where readers can anticipate solutions based on established laws, or an evocative, atmospheric mystery where magic mirrors emotional turmoil. Both are valid, but mixing them carelessly frustrates audience expectations.',
      '### 3. The Power Curve Trap',
      'Avoid accelerating power tiers too quickly. Once your protagonists start slicing mountains in half in volume three, you have backed yourself into an escalating corner where planetary destruction is the only remaining threat, divorcing the story from intimate emotional stakes.'
    ]
  },
  {
    id: 'art-6',
    title: 'How to Write a Strong Anime Villain: Moral Weight and Tragic Catalysts',
    slug: 'how-to-write-a-strong-anime-villain',
    excerpt: 'Moving past one-dimensional malevolence to construct antagonists who force protagonists—and readers—to question their assumptions.',
    category: 'Storytelling',
    tags: ['Villains', 'Writing', 'Storytelling', 'Character Design'],
    featuredImage: ASSETS.hero,
    publishedAt: '2026-02-16',
    readingTime: '7 min read',
    author: {
      name: 'Kenji Arisawa',
      role: 'Senior Narrative Analyst',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    content: [
      'The villain who laughs maniacally in an obsidian throne while stroking a demonic pet has its nostalgic place in retro animation. But modern audiences crave antagonists whose conviction matches or surpasses the hero’s.',
      'An exceptional villain is the protagonist of their own tragedy. They rarely view themselves as evil; they view themselves as the only person courageous enough to pay the horrific price required to fix a fundamentally broken reality.',
      'Give your villain a grievance that the reader can sympathize with. When their pain is authentic, their radical solutions become frightening because we understand the dark path that led them there.'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'Crimson Eclipse — Volume 1',
    slug: 'crimson-eclipse-volume-1',
    description: 'The definitive high-resolution digital edition of the critically acclaimed dark fantasy manga. Includes full 24 story pages, high-res cover art, character design sketches, and author commentary.',
    price: 6.99,
    cover: ASSETS.crimsonEclipse,
    format: 'PDF + CBZ (DRM-Free)',
    fileSize: '142 MB',
    category: 'manga-volume',
    features: [
      'High-resolution 300 DPI digital print master',
      'Dual-page spread optimization for tablets and desktop readers',
      'Exclusive 8-page concept art and world-building notes',
      'Includes both PDF and CBZ formats'
    ],
    digitalDownloadInfo: 'Instant digital delivery upon simulated checkout. Secure expiring download link delivered directly to your registered email.'
  },
  {
    id: 'prod-2',
    title: 'Soul Fragment — Volume 1',
    slug: 'soul-fragment-volume-1',
    description: 'Complete 32-page digital graphic novel edition of Soul Fragment. Experience the rain-soaked neo-noir mystery with bonus color pin-ups and developmental sketches.',
    price: 7.99,
    cover: ASSETS.soulFragment,
    format: 'PDF + CBZ (DRM-Free)',
    fileSize: '185 MB',
    category: 'manga-volume',
    features: [
      'Lossless 4K digital files',
      'Includes alternate cover art by guest illustrator',
      'Soundtrack recommendation playlist curated by creator Ren Takahashi',
      'Direct mobile reading compatibility'
    ],
    digitalDownloadInfo: 'Instant digital delivery. Link generated with SHA-256 integrity checksum.'
  },
  {
    id: 'prod-3',
    title: 'Starborn: Zero',
    slug: 'starborn-zero-volume-1',
    description: 'The cosmic space opera manga experience. 28 masterfully crafted pages featuring interstellar ruins, derelict dreadnoughts, and humanity’s lost coordinates.',
    price: 5.99,
    cover: ASSETS.starbornZero,
    format: 'PDF + CBZ (DRM-Free)',
    fileSize: '128 MB',
    category: 'manga-volume',
    features: [
      'Cinematic wide-aspect visual spreads',
      'Starship technical cutaway diagrams',
      'Creator Q&A and narrative retrospective'
    ],
    digitalDownloadInfo: 'Instant secure download access.'
  },
  {
    id: 'prod-4',
    title: 'Beyond the Crimson Gate',
    slug: 'beyond-the-crimson-gate-edition',
    description: '36-page complete folklore fantasy manga with atmospheric spirit realm concept artwork and traditional ink brush style.',
    price: 8.99,
    cover: ASSETS.universeGuide,
    format: 'PDF + CBZ (DRM-Free)',
    fileSize: '210 MB',
    category: 'manga-volume',
    features: [
      '36 full manga pages in ultra-sharp detail',
      'Spirit bestiary appendix detailing 14 legendary creatures',
      'High-resolution desktop wallpaper included'
    ],
    digitalDownloadInfo: 'Direct download with unlimited re-downloads from your AnimeFreak account.'
  },
  {
    id: 'prod-5',
    title: 'Original Creator Art Pack',
    slug: 'original-creator-art-pack',
    description: 'A comprehensive collection of 45+ original high-res character concept sheets, background line art, screentones, and brush assets for aspiring manga creators.',
    price: 14.99,
    cover: ASSETS.hero,
    format: 'ZIP (PSD, PNG, Procreate Brushes)',
    fileSize: '1.2 GB',
    category: 'art-pack',
    features: [
      '45+ lossless PNG character turnarounds & environment studies',
      '12 custom speedline & action screentone brushes for Clip Studio & Procreate',
      'Layered PSD files for study and personal non-commercial reference',
      'Royalty-free personal license'
    ],
    digitalDownloadInfo: 'High-speed cloud download link active for 30 days post-order.'
  },
  {
    id: 'prod-6',
    title: 'Manga Wallpaper Pack (4K/8K)',
    slug: 'manga-wallpaper-pack',
    description: 'Transform your desktop and mobile screens with 20 exclusive ultra-high-definition wallpapers featuring original AnimeFreak series in both day and twilight colorways.',
    price: 4.99,
    cover: ASSETS.crimsonEclipse,
    format: 'ZIP (4K/8K Ultra-HD)',
    fileSize: '480 MB',
    category: 'wallpapers',
    features: [
      '20 widescreen (16:9 / 21:9 ultrawide) 4K/8K wallpapers',
      '20 vertical mobile wallpapers formatted for modern OLED screens',
      'Uncompressed color grading with zero artifacting'
    ],
    digitalDownloadInfo: 'Instant one-click ZIP download.'
  }
];

export const CATEGORIES = [
  { slug: 'anime', name: 'Anime', count: 18, desc: 'Critical deep-dives, cultural analysis, and industry trends shaping the global anime landscape.' },
  { slug: 'manga', name: 'Manga', count: 24, desc: 'Interviews, panel breakdowns, and celebrations of sequential art and graphic storytelling.' },
  { slug: 'storytelling', name: 'Storytelling', count: 15, desc: 'Crafting compelling protagonists, moral dilemmas, plot arcs, and thematic depth.' },
  { slug: 'guides', name: 'Guides', count: 12, desc: 'Step-by-step masterclasses on worldbuilding, power systems, scriptwriting, and publishing.' },
  { slug: 'ai-manga', name: 'AI & Manga', count: 9, desc: 'Transparent coverage of generative tools, workflows, ethics, and independent creator empowerment.' },
  { slug: 'original-stories', name: 'Original Stories', count: 16, desc: 'Serialized prose fiction, lore codices, and indie literary world-building.' },
  { slug: 'reviews', name: 'Reviews', count: 21, desc: 'Thoughtful, long-form critiques focusing on thematic execution rather than mere hype.' },
  { slug: 'creator-tips', name: 'Creator Tips', count: 11, desc: 'Practical advice for self-publishing, formatting digital comics, and building an audience.' },
  { slug: 'industry', name: 'Industry', count: 8, desc: 'Publishing economics, streaming contracts, creator rights, and independent distribution.' },
];

export const TRENDING_TOPICS = [
  'World-Building Rules',
  'Villain Philosophy',
  'Ethical AI Workflow',
  'Original IP Renaissance',
  'Manga Panel Dynamics',
  'Independent Publishing'
];
