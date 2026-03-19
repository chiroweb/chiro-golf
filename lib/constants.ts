export const BRAND = {
  name: "CHIRO",
  tagline: "We always stand on the path to achievement",
  taglineKo: "성취의 길 위에 서다",
} as const;

export const NAV_LINKS = [
  { label: "COLLECTION", href: "#collection" },
  { label: "EDITORIAL", href: "#editorial" },
  { label: "ABOUT CHIRO", href: "#philosophy" },
  { label: "CONTACT", href: "#contact" },
] as const;

export const PHILOSOPHY_LINES = [
  { text: "성장을 구현하다", size: "10vw", weight: 600, direction: "left" as const },
  { text: "We design growth", size: "4vw", weight: 300, direction: "right" as const },
  { text: "지금의 부족을 채우고", size: "8vw", weight: 200, direction: "left" as const },
  { text: "목표를 향해 간다", size: "8vw", weight: 600, direction: "right" as const },
] as const;

export const COLLECTIONS = [
  { name: "Gloves", subtitle: "PERFORMANCE GRIP" },
  { name: "Ball Markers", subtitle: "PRECISION DETAIL" },
  { name: "Pouches", subtitle: "CRAFTED CARRY" },
  { name: "Accessories", subtitle: "REFINED ESSENTIALS" },
] as const;

export const PLACEHOLDER = {
  heroVideo: null,
  heroBg: "url('https://picsum.photos/seed/highland/1920/1080') center/cover no-repeat",
  editorialImages: [
    "url('https://picsum.photos/seed/golfgreen/800/1000') center/cover no-repeat",
    "url('https://picsum.photos/seed/fairway/800/1000') center/cover no-repeat",
    "url('https://picsum.photos/seed/morning/800/800') center/cover no-repeat",
    "url('https://picsum.photos/seed/links/1920/700') center/cover no-repeat",
  ],
  collectionImages: [
    "url('https://picsum.photos/seed/glove/600/800') center/cover no-repeat",
    "url('https://picsum.photos/seed/marker/600/800') center/cover no-repeat",
    "url('https://picsum.photos/seed/pouch/600/800') center/cover no-repeat",
    "url('https://picsum.photos/seed/accessory/600/800') center/cover no-repeat",
  ],
} as const;
