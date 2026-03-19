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
  editorialImages: [
    "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
    "linear-gradient(225deg, #141414 0%, #252525 50%, #141414 100%)",
    "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
    "linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
  ],
  collectionImages: [
    "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
    "linear-gradient(225deg, #141414 0%, #2a2a2a 100%)",
    "linear-gradient(315deg, #1a1a1a 0%, #2d2d2d 100%)",
    "linear-gradient(45deg, #141414 0%, #333 100%)",
  ],
} as const;
