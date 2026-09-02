import { db } from "./db";
import { apartments } from "@shared/schema";

const apartmentData = [
  {
    name: "WHITE",
    slug: "white",
    description: "Белые роскошные Апартаменты WHITE с отдельной спальней и ярким светлым дизайном для самых торжественных поводов!",
    area: 37,
    rooms: 2,
    image: "/images/apt-white.png",
    features: [
      "2 изолированные комнаты",
      "площадь 37 кв.м",
      "кровать King-Size",
      "оборудованная кухня",
      "сплит-система в каждой комнате",
      "бесплатный Wi-Fi",
      "ЖК-Телевизор 55'",
      "сейф",
    ],
    count: 1,
    accentColor: "#e8e8e8",
  },
  {
    name: "BLACK",
    slug: "black",
    description: "Невероятно брутальные чёрные Апартаменты BLACK с панорамными окнами и видом на Неву.",
    area: 34,
    rooms: 1,
    image: "/images/apt-black.png",
    features: [
      "площадь 34 кв.м",
      "барная стойка",
      "кровать King-Size",
      "оборудованная кухня",
      "сплит-система",
      "бесплатный Wi-Fi",
      "ЖК-Телевизор 55'",
      "сейф",
    ],
    count: 1,
    accentColor: "#555555",
  },
  {
    name: "GOLD",
    slug: "gold",
    description: "Роскошные и максимально комфортные Апартаменты GOLD с утончённым дизайном для особенно требовательных гостей. Апартаменты представительского класса впечатляют современными удобствами и сдержанным стильным европейским интерьером.",
    area: 25,
    rooms: 1,
    image: "/images/apt-gold.png",
    features: [
      "площадь 25 кв.м",
      "кровать King-Size",
      "оборудованная кухня",
      "сплит-система",
      "бесплатный Wi-Fi",
      "ЖК-Телевизор 42'",
    ],
    count: 4,
    accentColor: "#c9a84c",
  },
  {
    name: "PLATINUM",
    slug: "platinum",
    description: "Апартаменты повышенной комфортности PLATINUM с эргономичной планировкой и строгим дизайном для удобства размещения трёх взрослых гостей. Апартаменты оснащены по самому высокому стандарту.",
    area: 25,
    rooms: 1,
    image: "/images/apt-platinum.png",
    features: [
      "площадь 25 кв.м",
      "кровать King-Size",
      "оборудованная кухня",
      "сплит-система",
      "бесплатный Wi-Fi",
      "ЖК-Телевизор 42'",
    ],
    count: 3,
    accentColor: "#a0a5ad",
  },
  {
    name: "LOUNGE",
    slug: "lounge",
    description: "3х-комнатные апартаменты LOUNGE с двумя изолированными спальнями и большой гостиной комнатой. Камин, свечи и панорамное остекление гостиной создают неповторимую атмосферу для романтического вечера.",
    area: 55,
    rooms: 3,
    image: "/images/apt-lounge.png",
    features: [
      "3 изолированные комнаты",
      "площадь 55 кв.м",
      "оборудованная кухня",
      "камин в гостиной",
      "2 двуспальные кровати",
      "сплит-система",
      "ЖК-Телевизор 50'",
      "бесплатный Wi-Fi",
    ],
    count: 1,
    accentColor: "#8b6f47",
  },
  {
    name: "CLASSIC",
    slug: "classic",
    description: "Уникальные апартаменты CLASSIC поражают современными удобствами и строгим интерьером, выдержанном в классическом стиле, с элегантными элементами декора и качественной деревянной мебелью.",
    area: 50,
    rooms: 2,
    image: "/images/apt-classic.png",
    features: [
      "площадь 50 кв.м",
      "кровать Queen-Size",
      "оборудованная кухня",
      "сплит-система",
      "бесплатный Wi-Fi",
      "ЖК-Телевизор 50'",
    ],
    count: 1,
    accentColor: "#7a5c3a",
  },
  {
    name: "TRAVEL",
    slug: "travel",
    description: "Семейные апартаменты TRAVEL — это две изолированные спальни с кроватями размера King Size и Queen Size и уютная гостиная с раскладным диваном. Всё для отдыха большой семьи!",
    area: 55,
    rooms: 3,
    image: "/images/apt-travel.png",
    features: [
      "3 изолированные комнаты",
      "площадь 55 кв.м",
      "2 двуспальные кровати",
      "оборудованная кухня",
      "сплит-система",
      "бесплатный Wi-Fi",
      "2 ЖК-Телевизора",
      "сейф",
    ],
    count: 1,
    accentColor: "#4a7c59",
  },
];

export async function seedDatabase() {
  const existing = await db.select().from(apartments);
  if (existing.length > 0) {
    return;
  }

  for (const apt of apartmentData) {
    await db.insert(apartments).values(apt);
  }
  console.log("Database seeded with apartment data");
}
