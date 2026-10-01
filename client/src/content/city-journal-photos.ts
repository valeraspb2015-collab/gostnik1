export interface CityJournalPhoto {
  id: string;
  src: string;
  srcSet: string;
  fullSrc: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

function lakePhoto(id: string, filename: string, alt: string, caption: string): CityJournalPhoto {
  const base = `/images/city-journal/${filename}`;
  return {
    id,
    src: `${base}-800.webp`,
    srcSet: `${base}-480.webp 480w, ${base}-800.webp 800w, ${base}.webp 1200w`,
    fullSrc: `${base}.webp`,
    width: 1200,
    height: 1600,
    alt,
    caption,
  };
}

export const kislovodskCoverPhoto = lakePhoto(
  "lake",
  "kislovodsk-old-lake",
  "Набережная Старого озера в Кисловодске: дорожка у воды и горы на горизонте",
  "Набережная Старого озера",
);

export const kislovodskEntrancePhoto = lakePhoto(
  "entrance",
  "kislovodsk-lake-entrance",
  "Вход с вывеской «Старое озеро» в Кисловодске",
  "Вход к Старому озеру",
);

// Captions describe the photographs, not current opening hours or a permanent programme.
// The owner confirmed Old Lake for all nine photographs and approved these captions.
export const kislovodskGalleryPhotos: CityJournalPhoto[] = [
  lakePhoto("playground", "kislovodsk-playground", "Детская площадка с жёлтой горкой и качелями на фоне воды", "Горка и качели у Старого озера"),
  lakePhoto("playground-trees", "kislovodsk-playground-trees", "Детская площадка в тени деревьев возле воды", "Детская площадка под деревьями у Старого озера"),
  lakePhoto("food-stalls", "kislovodsk-food-stalls", "Павильоны с едой и приготовлением овощей у набережной", "Павильоны с едой у Старого озера"),
  lakePhoto("food-walk", "kislovodsk-food-walk", "Прогулочная дорожка между павильонами с едой", "Дорожка между павильонами у Старого озера"),
  lakePhoto("grill", "kislovodsk-grill", "Приготовление еды на открытом гриле под зонтом", "Приготовление еды у Старого озера"),
  lakePhoto("narzan", "kislovodsk-narzan", "Люди возле павильона с надписью «Нарзан»", "Павильон «Нарзан» у Старого озера"),
  lakePhoto("sports", "kislovodsk-sports", "Участники спортивного мероприятия под деревьями", "Спортивное мероприятие у Старого озера"),
];