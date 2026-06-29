// ---------------------------------------------------------------------------
// Static content for Aurelia Resort & Spa.
// All imagery uses verified Unsplash photo URLs (loaded via next/image).
// To swap an image, replace the photo id inside img("...").
// ---------------------------------------------------------------------------

/** Build a responsive Unsplash URL from a photo id. */
export const img = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const siteInfo = {
  name: "Aurelia Resort & Spa",
  shortName: "Aurelia",
  tagline: "Where Stillness Becomes Luxury",
  address: "1 Aurelia Cove, Amalfi Coast, Italy 84017",
  phone: "+39 089 555 0142",
  email: "reservations@aureliaresort.com",
  whatsapp: "+390895550142",
  established: "2008",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Experiences", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const heroImage = img("1582719478250-c89cae4dc85b", 2000);

export const stats = [
  { value: "12", label: "Acres of Gardens" },
  { value: "48", label: "Private Suites" },
  { value: "Est. 2008", label: "Coastal Heritage" },
];

// ----------------------------- Rooms & Suites -----------------------------

export type RoomCategory = "Deluxe" | "Suite" | "Villa";

export interface Room {
  slug: string;
  name: string;
  category: RoomCategory;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  amenities: string[];
  featured?: boolean;
}

export const rooms: Room[] = [
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    category: "Deluxe",
    description:
      "A serene retreat with soft natural light, handcrafted linens and a private balcony framing the gardens.",
    longDescription:
      "Forty square metres of considered calm, the Deluxe Room pairs warm taupe textiles with sea-facing windows and a marble bath.",
    price: 420,
    image: img("1611892440504-42a792e24d32"),
    amenities: ["wifi", "ac", "view", "breakfast"],
    featured: true,
  },
  {
    slug: "coastal-deluxe",
    name: "Coastal Deluxe",
    category: "Deluxe",
    description:
      "Floor-to-ceiling glass opens onto the Mediterranean, with a freestanding tub set against the horizon.",
    longDescription:
      "Our most light-filled Deluxe category, the Coastal Deluxe is wrapped in glass and finished in pale stone and brushed gold.",
    price: 480,
    image: img("1631049307264-da0ec9d70304"),
    amenities: ["wifi", "ac", "view", "breakfast"],
  },
  {
    slug: "garden-suite",
    name: "Garden Suite",
    category: "Suite",
    description:
      "A generous suite with a separate living salon opening onto a private terrace among the olive groves.",
    longDescription:
      "The Garden Suite spans two rooms and a planted terrace, an intimate residence shaded by century-old olive trees.",
    price: 720,
    image: img("1582719508461-905c673771fd"),
    amenities: ["wifi", "ac", "view", "breakfast"],
    featured: true,
  },
  {
    slug: "panorama-suite",
    name: "Panorama Suite",
    category: "Suite",
    description:
      "Elevated above the cove, this corner suite offers wraparound views and a sunken lounge.",
    longDescription:
      "Perched on the resort's highest tier, the Panorama Suite captures sunrise and sunset alike through dual aspects.",
    price: 860,
    image: img("1551882547-ff40c63fe5fa"),
    amenities: ["wifi", "ac", "view", "breakfast"],
  },
  {
    slug: "royal-villa",
    name: "Royal Villa",
    category: "Villa",
    description:
      "A standalone villa with private infinity pool, butler service and an outdoor dining pavilion.",
    longDescription:
      "The Royal Villa is a private estate within the resort — pool, garden, pavilion and a dedicated butler at every hour.",
    price: 1980,
    image: img("1564501049412-61c2a3083791"),
    amenities: ["wifi", "ac", "view", "breakfast"],
    featured: true,
  },
  {
    slug: "olive-grove-villa",
    name: "Olive Grove Villa",
    category: "Villa",
    description:
      "Secluded among ancient trees, with two bedrooms, a plunge pool and a sun-drenched courtyard.",
    longDescription:
      "Designed for families and friends, the Olive Grove Villa offers two suites around a stone courtyard and plunge pool.",
    price: 2400,
    image: img("1566073771259-6a8506099945"),
    amenities: ["wifi", "ac", "view", "breakfast"],
  },
];

export const featuredRooms = rooms.filter((r) => r.featured);
export const roomCategories: ("All" | RoomCategory)[] = [
  "All",
  "Deluxe",
  "Suite",
  "Villa",
];

// ----------------------------- Experiences -----------------------------

export const experienceStrip = [
  { icon: "pool", label: "Infinity Pool" },
  { icon: "spa", label: "Forest Spa" },
  { icon: "dining", label: "Fine Dining" },
  { icon: "yoga", label: "Yoga Pavilion" },
];

export interface Experience {
  icon: string;
  title: string;
  description: string;
  duration: string;
  image: string;
}

export const experiences: Experience[] = [
  {
    icon: "spa",
    title: "Spa & Wellness",
    description:
      "Restorative rituals drawing on Mediterranean botanicals, hydrotherapy circuits and bespoke treatments.",
    duration: "60–120 min",
    image: img("1540555700478-4be289fbecef"),
  },
  {
    icon: "adventure",
    title: "Adventure Activities",
    description:
      "Coastal hikes, private sailing and cliffside climbs guided by seasoned local experts.",
    duration: "Half day",
    image: img("1469474968028-56623f02e42e"),
  },
  {
    icon: "yoga",
    title: "Yoga & Meditation",
    description:
      "Sunrise practice on the open pavilion, sound baths and guided breathwork above the sea.",
    duration: "45–90 min",
    image: img("1545389336-cf090694435e"),
  },
  {
    icon: "culture",
    title: "Cultural Tours",
    description:
      "Curated journeys through coastal villages, vineyards and centuries-old artisan workshops.",
    duration: "Full day",
    image: img("1505228395891-9a51e7e86bf6"),
  },
];

export const spaTreatments = [
  { name: "Aurelia Signature Ritual", duration: "120 min", price: 320 },
  { name: "Mediterranean Stone Massage", duration: "90 min", price: 240 },
  { name: "Botanical Renewal Facial", duration: "75 min", price: 210 },
  { name: "Couples Retreat", duration: "120 min", price: 560 },
  { name: "Hydrotherapy Circuit", duration: "60 min", price: 140 },
];

// ----------------------------- Dining -----------------------------

export interface Restaurant {
  name: string;
  eyebrow: string;
  description: string;
  image: string;
}

export const restaurants: Restaurant[] = [
  {
    name: "The Terrace",
    eyebrow: "ALL-DAY DINING · MEDITERRANEAN",
    description:
      "Open from first light, The Terrace celebrates the coast's harvest — sun-ripened produce, line-caught fish and olive oil pressed within the estate. Dine beneath the pergola as the sea shifts from silver to gold.",
    image: img("1517248135467-4c7edcad34c4"),
  },
  {
    name: "Ember Lounge",
    eyebrow: "EVENING COCKTAILS · SMALL PLATES",
    description:
      "As dusk settles, Ember Lounge glows with candlelight and low conversation. A library of rare spirits meets fire-kissed small plates, crafted to be lingered over long into the night.",
    image: img("1445019980597-93fa8acb246c"),
  },
];

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export const menuHighlights: MenuItem[] = [
  {
    name: "Heirloom Tomato & Burrata",
    description: "Estate basil, aged balsamic, cold-pressed olive oil.",
    price: 24,
  },
  {
    name: "Catch of the Day",
    description: "Line-caught fish, charred fennel, preserved lemon.",
    price: 46,
  },
  {
    name: "Saffron Risotto",
    description: "Carnaroli rice, sea urchin, brown butter.",
    price: 38,
  },
  {
    name: "Slow-Cooked Lamb",
    description: "Wild herbs, smoked aubergine, jus of the day.",
    price: 52,
  },
  {
    name: "Amalfi Lemon Tart",
    description: "Torched meringue, candied zest, almond sablé.",
    price: 18,
  },
  {
    name: "Dark Chocolate Sphere",
    description: "Hazelnut praline, sea salt, warm ganache.",
    price: 20,
  },
];

// ----------------------------- Testimonials -----------------------------

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We arrived weary and left restored. Aurelia is less a hotel than a state of mind — every detail composed with quiet intention.",
    name: "Eleanor Whitfield",
    location: "London, United Kingdom",
  },
  {
    quote:
      "The most beautiful place we have ever stayed. The villa, the spa, the long dinners on the terrace — flawless from beginning to end.",
    name: "Mateo Rossi",
    location: "Milan, Italy",
  },
  {
    quote:
      "Service that anticipates rather than reacts. We have already booked our return for next summer.",
    name: "Aiko Tanaka",
    location: "Kyoto, Japan",
  },
];

// ----------------------------- Gallery -----------------------------

export type GalleryCategory = "Resort" | "Dining" | "Wellness" | "Nature";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Resort",
  "Dining",
  "Wellness",
  "Nature",
];

export const galleryImages: GalleryImage[] = [
  { src: img("1582719478250-c89cae4dc85b"), alt: "Infinity pool overlooking the sea", category: "Resort" },
  { src: img("1551882547-ff40c63fe5fa"), alt: "Resort facade at golden hour", category: "Resort" },
  { src: img("1566073771259-6a8506099945"), alt: "Villa exterior among gardens", category: "Resort" },
  { src: img("1540541338287-41700207dee6"), alt: "Poolside loungers in the sun", category: "Resort" },
  { src: img("1455587734955-081b22074882"), alt: "Elegant resort lobby", category: "Resort" },
  { src: img("1571896349842-33c89424de2d"), alt: "Suite interior with soft light", category: "Resort" },
  { src: img("1517248135467-4c7edcad34c4"), alt: "Restaurant interior at dusk", category: "Dining" },
  { src: img("1445019980597-93fa8acb246c"), alt: "Candlelit lounge bar", category: "Dining" },
  { src: img("1600891964599-f61ba0e24092"), alt: "Plated fine dining dish", category: "Dining" },
  { src: img("1559339352-11d035aa65de"), alt: "Chef's seasonal plate", category: "Dining" },
  { src: img("1551218808-94e220e084d2"), alt: "Fresh Mediterranean cuisine", category: "Dining" },
  { src: img("1544161515-4ab6ce6db874"), alt: "Spa massage treatment", category: "Wellness" },
  { src: img("1540202404-a2f29016b523"), alt: "Tranquil spa setting", category: "Wellness" },
  { src: img("1545389336-cf090694435e"), alt: "Yoga practice at sunrise", category: "Wellness" },
  { src: img("1506126613408-eca07ce68773"), alt: "Meditation by the water", category: "Wellness" },
  { src: img("1470770841072-f978cf4d019e"), alt: "Lake and mountains at dawn", category: "Nature" },
  { src: img("1518495973542-4542c06a5843"), alt: "Sunlight through the forest", category: "Nature" },
  { src: img("1501785888041-af3ef285b470"), alt: "Coastal mountain landscape", category: "Nature" },
];

// ----------------------------- Misc imagery -----------------------------

export const diningTeaserImage = img("1414235077428-338989a2e8c0");
export const spaHighlightImage = img("1611048267451-e6ed903d4a38");
export const ctaImage = img("1540541338287-41700207dee6");
