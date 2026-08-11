import desert from "@/assets/land-desert.jpg";
import coast from "@/assets/land-coast.jpg";
import forest from "@/assets/land-forest.jpg";
import architecture from "@/assets/land-architecture.jpg";
import himalaya from "@/assets/hero-himalaya.jpg";
import dance from "@/assets/culture-dance.jpg";
import craft from "@/assets/culture-craft.jpg";
import festival from "@/assets/culture-festival.jpg";

export type StateInfo = {
  id: string;
  name: string;
  region: string;
  knownFor: string[];
  blurb: string;
  image?: string;
};

/**
 * Editorial state records. Keys match the SVG shape ids in `india-map.ts`,
 * so richer data can be layered in later without touching the map component.
 */
export const STATES: Record<string, StateInfo> = {
  RJ: {
    id: "RJ",
    name: "Rajasthan",
    region: "North-West India",
    knownFor: ["Heritage", "Desert", "Crafts", "Folk Culture"],
    blurb:
      "Fort cities rising out of the Thar, mirror-work and block-print traditions, and a folk repertoire carried across generations of desert villages.",
    image: desert,
  },
  KL: {
    id: "KL",
    name: "Kerala",
    region: "South-West Coast",
    knownFor: ["Backwaters", "Kathakali", "Spice Trade", "Monsoon"],
    blurb:
      "A narrow green strip between the Western Ghats and the Arabian Sea, threaded by lagoons and shaped by centuries of maritime exchange.",
    image: coast,
  },
  UK: {
    id: "UK",
    name: "Uttarakhand",
    region: "Himalayan North",
    knownFor: ["Himalayas", "Pilgrimage", "Alpine Meadows"],
    blurb:
      "Ridge after ridge of the high Himalaya, river sources, and hill settlements terraced into slopes above the mist line.",
    image: himalaya,
  },
  TN: {
    id: "TN",
    name: "Tamil Nadu",
    region: "South-East India",
    knownFor: ["Temple Architecture", "Bharatanatyam", "Classical Tamil"],
    blurb:
      "Granite temple towns, an unbroken literary tradition, and a coastline that carried Chola craft and commerce across the Bay of Bengal.",
    image: architecture,
  },
  MH: {
    id: "MH",
    name: "Maharashtra",
    region: "Western India",
    knownFor: ["Sahyadri Ghats", "Cave Art", "Coastline"],
    blurb:
      "Basalt plateaus falling into the Konkan coast, rock-cut viharas at Ajanta, and a modern cultural capital at the sea's edge.",
    image: forest,
  },
  WB: {
    id: "WB",
    name: "West Bengal",
    region: "Eastern India",
    knownFor: ["Delta", "Literature", "Festivals", "Terracotta"],
    blurb:
      "From the Sundarbans delta to the Darjeeling hills, a state defined by rivers, print culture and an enormous public festival life.",
    image: festival,
  },
  GJ: {
    id: "GJ",
    name: "Gujarat",
    region: "Western India",
    knownFor: ["Textiles", "Salt Desert", "Stepwells"],
    blurb:
      "The white expanse of the Rann, embroidery lineages of Kutch, and stepwells cut like inverted temples into the earth.",
    image: craft,
  },
  AS: {
    id: "AS",
    name: "Assam",
    region: "North-East India",
    knownFor: ["Brahmaputra", "Tea", "Silk", "Wetlands"],
    blurb:
      "A valley shaped by one enormous river — tea gardens, muga silk looms and grassland reserves that flood and rebuild each year.",
    image: forest,
  },
  JK: {
    id: "JK",
    name: "Jammu & Kashmir",
    region: "Himalayan North",
    knownFor: ["Valleys", "Shawls", "Alpine Lakes"],
    blurb:
      "Valleys, high pasture and lake towns beneath the western Himalaya, with a craft tradition of shawls, walnut wood and papier-mâché.",
    image: himalaya,
  },
};

export const FEATURED_STATE_IDS = ["RJ", "KL", "UK", "TN", "WB", "GJ"];

export const DEFAULT_STATE_ID = "RJ";

export const CULTURE = [
  {
    index: "01",
    title: "Dance",
    line: "Eight classical forms, hundreds of folk ones",
    body: "Grammar handed down through gesture — every hand position a word, every region its own vocabulary of movement.",
    image: dance,
    span: "tall" as const,
  },
  {
    index: "02",
    title: "Craft",
    line: "Hands that hold a technique for centuries",
    body: "Block printing, weaving, metal, clay. Craft in India is rarely nostalgic; it is a working economy of inherited skill.",
    image: craft,
    span: "wide" as const,
  },
  {
    index: "03",
    title: "Festivals",
    line: "A calendar that never fully rests",
    body: "Light, harvest, monsoon, memory. Public festivals turn entire cities into temporary architecture.",
    image: festival,
    span: "wide" as const,
  },
];

export const CULTURE_STRANDS = ["Music", "Art", "Textile", "Cuisine", "Ritual", "Language"];

export const LANDSCAPES = [
  {
    id: "himalaya",
    name: "Himalayas",
    meta: "North · 2,400 km arc",
    image: himalaya,
    note: "The youngest mountains on earth, still rising.",
  },
  {
    id: "desert",
    name: "Deserts",
    meta: "North-West · Thar & Rann",
    image: desert,
    note: "Sand, salt and settlements built for heat.",
  },
  {
    id: "coast",
    name: "Coasts",
    meta: "Peninsular · 7,500 km",
    image: coast,
    note: "Two seas, one gulf, and a delta at every river's end.",
  },
  {
    id: "forest",
    name: "Forests",
    meta: "Central & North-East",
    image: forest,
    note: "Sal, teak and rainforest holding a quarter of the land.",
  },
  {
    id: "architecture",
    name: "Built Heritage",
    meta: "Everywhere · 40+ World Heritage Sites",
    image: architecture,
    note: "Stone that records dynasties, faiths and trade.",
  },
];

export const NUMBERS = [
  { value: 28, suffix: "", label: "States", note: "Each with its own language policy, cuisine and calendar." },
  { value: 8, suffix: "", label: "Union Territories", note: "From Himalayan Ladakh to the Andaman archipelago." },
  { value: 22, suffix: "+", label: "Scheduled Languages", note: "Alongside hundreds of mother tongues in daily use." },
  { value: 7500, suffix: "+ km", label: "Coastline", note: "Nine coastal states facing three bodies of water." },
];
