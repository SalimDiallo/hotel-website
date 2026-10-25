import { Bath, Bed, Maximize2, type LucideIcon } from "lucide-react";

export type RoomAttribute = {
  icon: LucideIcon;
  label: string;
  value: string | number;
};

export type Room = {
  id: string;
  title: string;
  tags: string;
  badge?: string | null;
  price: string;
  summary: string;
  description: string;
  amenities: string[];
  details: RoomAttribute[];
  imageSrc: string;
  gallery: string[];
};

// Unsplash — hotlinkable, royalty-free
const u = (id: string) => `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`;

const IMG = {
  grandSuite: u("1631049307264-da0ec9d70304"),
  pavilion: u("1566073771259-6a8506099945"),
  villa: u("1512917774080-9991f1c4c750"),
  presidential: u("1618773928121-c32242e63f39"),
  heritage: u("1582719478250-c89cae4dc85b"),
  spaRoom: u("1544161515-4ab6ce6db874"),
  pool: u("1571896349842-33c89424de2d"),
  infinityPool: u("1540541338287-41700207dee6"),
  spa: u("1600334089648-b0d9d3028eb2"),
  dining: u("1414235077428-338989a2e8c0"),
  gym: u("1534438327276-14e5300c3a48"),
  darkSuite: u("1611892440504-42a792e24d32"),
};

export const rooms: Room[] = [
  {
    id: "grand-suite",
    title: "The Grand Suite",
    tags: "Panoramic, Terrace, Mediterranean",
    badge: "Guest Favourite",
    price: "€1,450 / night",
    summary: "Our flagship suite, bathed in Mediterranean light with a private sea-facing terrace.",
    description:
      "The Grand Suite is the pinnacle of the Lumière & Co experience. Floor-to-ceiling windows draw the southern light deep into the room, while the private terrace looks out over the glittering bay. Every surface has been chosen for its tactility — from the linen headboard to the brushed-brass fittings — in a palette of sand, stone and sea.",
    amenities: ["Private sea-view terrace", "Panoramic bay view", "Marble bath", "Espresso bar", "24h butler service", "Walk-in dressing room"],
    details: [
      { icon: Bed, label: "Beds", value: 2 },
      { icon: Bath, label: "Baths", value: 2 },
      { icon: Maximize2, label: "Sqft", value: 1450 },
    ],
    imageSrc: IMG.grandSuite,
    gallery: [IMG.grandSuite, IMG.infinityPool, IMG.spa],
  },
  {
    id: "ocean-pavilion",
    title: "Ocean Pavilion",
    tags: "Seafront, Serene, Bright",
    badge: null,
    price: "€890 / night",
    summary: "A bright, seafront retreat designed around light, air and the sound of the waves.",
    description:
      "The Ocean Pavilion is a study in calm. Set at the water's edge, its airy layout and pale palette dissolve the line between inside and out. Wake to the tide, step onto the terrace, and let the day unfold at its own unhurried pace.",
    amenities: ["Seafront terrace", "Rainfall shower", "Hand-crafted bed linen", "Minibar", "Smart climate control"],
    details: [
      { icon: Bed, label: "Beds", value: 1 },
      { icon: Bath, label: "Baths", value: 1 },
      { icon: Maximize2, label: "Sqft", value: 980 },
    ],
    imageSrc: IMG.pavilion,
    gallery: [IMG.pavilion, IMG.pool, IMG.dining],
  },
  {
    id: "garden-villa",
    title: "Garden Villa",
    tags: "Garden, Pool, Outdoor Living",
    badge: "Most Popular",
    price: "€2,200 / night",
    summary: "A private villa with its own plunge pool and a lush, walled Mediterranean garden.",
    description:
      "The Garden Villa is our most sought-after sanctuary. Enclosed by cypress, olive and citrus, it offers a private plunge pool, a shaded outdoor living room and a seamless flow between the bedroom and the garden beyond. True seclusion, moments from the main house.",
    amenities: ["Private plunge pool", "Walled garden", "Outdoor living room", "Chef's kitchenette", "Alfresco dining", "24h butler service"],
    details: [
      { icon: Bed, label: "Beds", value: 3 },
      { icon: Bath, label: "Baths", value: 2 },
      { icon: Maximize2, label: "Sqft", value: 2200 },
    ],
    imageSrc: IMG.villa,
    gallery: [IMG.villa, IMG.infinityPool, IMG.gym],
  },
  {
    id: "presidential-suite",
    title: "Presidential Suite",
    tags: "Expansive, Chef Kitchen, Butler",
    badge: "Guest Favourite",
    price: "€3,400 / night",
    summary: "The grandest address at Lumière & Co — a full-floor residence with a dedicated butler.",
    description:
      "Occupying an entire floor, the Presidential Suite is a residence in its own right. A full chef's kitchen, formal dining room and expansive lounge are matched by a private gym and a dedicated butler on call around the clock. For those who travel with no compromise.",
    amenities: ["Full chef's kitchen", "Formal dining room", "Private gym", "Dedicated butler", "Panoramic terrace", "Wine cellar"],
    details: [
      { icon: Bed, label: "Beds", value: 3 },
      { icon: Bath, label: "Baths", value: 3 },
      { icon: Maximize2, label: "Sqft", value: 3400 },
    ],
    imageSrc: IMG.presidential,
    gallery: [IMG.presidential, IMG.dining, IMG.spa],
  },
  {
    id: "heritage-room",
    title: "Heritage Room",
    tags: "Classic, Restored, Elegant",
    badge: null,
    price: "€620 / night",
    summary: "A lovingly restored room where period character meets quiet modern comfort.",
    description:
      "The Heritage Room celebrates the building's origins. Original mouldings and restored parquet sit alongside a discreetly modern bathroom and a deeply comfortable bed. A refined, characterful stay for those who appreciate the details of the past.",
    amenities: ["Restored period detail", "Marble bathroom", "Writing desk", "Minibar", "Smart climate control"],
    details: [
      { icon: Bed, label: "Beds", value: 1 },
      { icon: Bath, label: "Baths", value: 1 },
      { icon: Maximize2, label: "Sqft", value: 850 },
    ],
    imageSrc: IMG.heritage,
    gallery: [IMG.heritage, IMG.darkSuite, IMG.dining],
  },
  {
    id: "spa-retreat",
    title: "Spa Retreat",
    tags: "Sauna, Soaking Tub, Wellness",
    badge: null,
    price: "€1,160 / night",
    summary: "A wellness-first suite with a private sauna and deep soaking tub.",
    description:
      "The Spa Retreat brings the wellness centre to your door. A private sauna, a deep stone soaking tub and a dedicated relaxation nook are designed for restoration. Book an in-room treatment and let the day melt away.",
    amenities: ["Private sauna", "Stone soaking tub", "In-room treatments", "Aromatherapy bar", "Heated floors", "Rainfall shower"],
    details: [
      { icon: Bed, label: "Beds", value: 2 },
      { icon: Bath, label: "Baths", value: 2 },
      { icon: Maximize2, label: "Sqft", value: 1600 },
    ],
    imageSrc: IMG.spaRoom,
    gallery: [IMG.spaRoom, IMG.spa, IMG.infinityPool],
  },
];

export const getRoom = (id: string | undefined): Room | undefined =>
  rooms.find((room) => room.id === id);
