import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Maximize2, BedDouble, ChevronLeft, ChevronRight, Train, Building2 } from "lucide-react";
import {
  photo_mak1, photo_mak2, photo_mak3, photo_mak4, photo_mak5,
  photo_kurg1, photo_kurg2, photo_kurg3, photo_kurg4, photo_kurg5, photo_kurg6,
  photo_kurg7, photo_kurg8, photo_kurg9, photo_kurg10, photo_kurg11, photo_kurg12,
  photo_kurg13, photo_kurg14, photo_kurg15, photo_kurg16, photo_kurg17, photo_kurg18,
  photo_spb76_1, photo_spb76_2, photo_spb76_3, photo_spb76_4, photo_spb76_5,
  photo_spb76_6, photo_spb76_7, photo_spb76_8, photo_spb76_9, photo_spb76_10,
  photo_spb76_11, photo_spb76_12, photo_spb76_13, photo_spb76_14, photo_spb76_15,
  type ResponsiveImageSource,
} from "@/lib/image-sources";

interface Apartment {
  id: number;
  name: string;
  displayName?: string;
  description: string;
  price: string;
  rooms: string;
  area: string;
  floor?: string;
  street: string;
  city: string;
  tag: string;
  accent: string;
  metro?: string;
  photo?: string;
  photos?: Array<string | ResponsiveImageSource>;
}

function roomsLabel(n: string) {
  if (n === "1") return "1 комната";
  if (n === "2") return "2 комнаты";
  if (n === "3") return "3 комнаты";
  return `${n} комнат`;
}

const apartments: Apartment[] = [
  {
    id: 1,
    name: "Творческие апартаменты посуточно, улица Маяковского 27, Санкт-Петербург",
    displayName: "Творческие апартаменты на Маяковского, 27",
    description: "В самом сердце города — дизайнерская квартира для творческих людей. Удобная планировка: отдельная спальня и гостиная с кухней, комфортно для семьи или компании до 4 человек. До Невского проспекта 10–15 минут пешком, все туристические маршруты в шаговой доступности. Прекрасная атмосфера, пропитанная творчеством и романтикой центра. Есть всё как для длительного, так и краткосрочного проживания.",
    price: "от 4 500 ₽/сутки",
    rooms: "2",
    area: "—",
    street: "ул. Маяковского, 27",
    city: "Санкт-Петербург",
    metro: "м. Маяковская, 3 мин.",
    tag: "2 комнаты",
    accent: "hsl(265 55% 48%)",
     photo: photo_mak1.src,
    photos: [photo_mak1, photo_mak2, photo_mak3, photo_mak4, photo_mak5],
  },
  {
    id: 137314072,
    name: "Трёхкомнатные апартаменты посуточно, Невский проспект 134Б, Санкт-Петербург",
    displayName: "Апартаменты на Невском, 134Б — 3 комнаты №1",
    description: "Просторные трёхкомнатные апартаменты 76 м² на 4 этаже в самом центре Петербурга. Невский проспект, шаговая доступность до всех достопримечательностей. Удобны для семьи, компании или длительного проживания. Рядом метро Площадь Восстания.",
    price: "от 5 000 ₽/сутки",
    rooms: "3",
    area: "76",
    floor: "4/5",
    street: "Невский проспект, 134Б",
    city: "Санкт-Петербург",
    metro: "м. пл. Александра Невского, 5 мин.",
    tag: "3 комнаты",
    accent: "hsl(38 60% 45%)",
    photo: "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169573595-1.jpg",
    photos: [
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169573595-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169571404-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169573593-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169571408-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169573596-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169573592-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169573597-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169573627-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169573594-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-1258336896-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-1728329180-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2169573624-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2475749197-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2475749194-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2475749195-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2475749199-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-2475749201-1.jpg",
    ],
  },
  {
    id: 234746709,
    name: "Апартаменты посуточно 3 комнаты, Невский проспект 134Б, Санкт-Петербург",
    displayName: "Апартаменты на Невском, 134Б — 3 комнаты №2",
    description: "Трёхкомнатные апартаменты 76 м² на Невском проспекте. Исторический центр, 4 этаж, рядом Московский вокзал и метро Площадь Восстания. Подходят для семьи или группы до 6 человек. Вся инфраструктура в пешей доступности.",
    price: "от 5 000 ₽/сутки",
    rooms: "3",
    area: "76",
    floor: "4/5",
    street: "Невский проспект, 134Б",
    city: "Санкт-Петербург",
    metro: "м. пл. Александра Невского, 5 мин.",
    tag: "3 комнаты",
    accent: "hsl(38 55% 40%)",
    photo: "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900265150-1.jpg",
    photos: [
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900265150-1.jpg",
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900262507-1.jpg",
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900254111-1.jpg",
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900256828-1.jpg",
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900257406-1.jpg",
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900257839-1.jpg",
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900258605-1.jpg",
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900259370-1.jpg",
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900260521-1.jpg",
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900261272-1.jpg",
      "https://images.cdn-cian.ru/images/kvartira-sanktpeterburg-nevskiy-prospekt-900251214-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-1660048257-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-1719812225-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-1719812230-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-1719812232-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-1719812227-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-1719812229-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-nevskiy-prospekt-1719812226-1.jpg",
    ],
  },
  {
    id: 275532867,
    name: "Трёхкомнатная квартира посуточно, улица Некрасова 21, Санкт-Петербург",
    displayName: "Квартира на Некрасова, 21 — 3 комнаты",
    description: "Трёхкомнатная квартира 65 м² в тихом уголке центра, на улице Некрасова. 3 этаж, высокие потолки, уютная атмосфера. До Невского проспекта — 10 минут, рядом рестораны, кафе, парки. Удобна для семьи или компании до 6 человек.",
    price: "от 4 500 ₽/сутки",
    rooms: "3",
    area: "65",
    floor: "3/5",
    street: "ул. Некрасова, 21",
    city: "Санкт-Петербург",
    metro: "м. Чернышевская, 7 мин.",
    tag: "3 комнаты",
    accent: "hsl(165 45% 38%)",
    photo: "/apt/nekrasova21-3k/09-living3.jpg",
    photos: [
      "/apt/nekrasova21-3k/09-living3.jpg",
      "/apt/nekrasova21-3k/12-living5.jpg",
      "/apt/nekrasova21-3k/11-living4.jpg",
      "/apt/nekrasova21-3k/06-living2.jpg",
      "/apt/nekrasova21-3k/01-living.jpg",
      "/apt/nekrasova21-3k/10-bedroom3.jpg",
      "/apt/nekrasova21-3k/04-bedroom1.jpg",
      "/apt/nekrasova21-3k/13-bedroom4.jpg",
      "/apt/nekrasova21-3k/05-bedroom2.jpg",
      "/apt/nekrasova21-3k/07-kitchen.jpg",
      "/apt/nekrasova21-3k/03-kitchen-old.jpg",
      "/apt/nekrasova21-3k/08-bathroom.jpg",
      "/apt/nekrasova21-3k/02-toilet.jpg",
    ],
  },
  {
    id: 26411146,
    name: "Однокомнатная квартира посуточно, улица Некрасова 21, Санкт-Петербург",
    displayName: "Квартира на Некрасова, 21 — 1 комната",
    description: "Уютная однокомнатная квартира 39 м² на 5 этаже в историческом центре. Тихая улица Некрасова, рядом метро Чернышевская. Идеальна для пары или одного гостя. Рядом Таврический сад, кафе и рестораны.",
    price: "от 4 500 ₽/сутки",
    rooms: "1",
    area: "39",
    floor: "5/5",
    street: "ул. Некрасова, 21",
    city: "Санкт-Петербург",
    metro: "м. Чернышевская, 7 мин.",
    tag: "1 комната",
    accent: "hsl(165 40% 43%)",
    photo: "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-1694300078-1.jpg",
    photos: [
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-1694300078-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-1258570845-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-1149568007-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-1149568011-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-1699745628-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-1694300079-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-1699745630-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-1694300082-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-2098113889-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-2098113896-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-2098113892-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-nekrasova-2098113893-1.jpg",
    ],
  },
  {
    id: 275781991,
    name: "Квартира посуточно, улица Жуковского 18, Санкт-Петербург",
    displayName: "Квартира на Жуковского, 18",
    description: "Светлая однокомнатная квартира 45 м² на 4 этаже. Улица Жуковского — тихий центр в двух шагах от Невского. Рядом метро Маяковская. Полное оснащение для комфортного проживания от одного дня до нескольких месяцев.",
    price: "от 4 000 ₽/сутки",
    rooms: "1",
    area: "45",
    floor: "4/4",
    street: "ул. Жуковского, 18",
    city: "Санкт-Петербург",
    metro: "м. Маяковская, 5 мин.",
    tag: "1 комната",
    accent: "hsl(215 60% 45%)",
    photo: "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1379999342-1.jpg",
    photos: [
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1379999342-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1343837964-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1348093450-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1343837975-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1379999341-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1381924445-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1379999433-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1379999514-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1379999515-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1379999516-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-1379999555-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-2661605717-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-2661605781-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-2661605774-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-2661605716-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-2661605752-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-2661605720-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-sanktpeterburg-ulica-zhukovskogo-2661605777-1.jpg",
    ],
  },
  {
    id: 295095084,
    name: "Квартира посуточно, улица Гастелло 24, Кисловодск",
    displayName: "Квартира на Гастелло, 24 — Кисловодск",
    description: "Уютная однокомнатная квартира 30 м² в Кисловодске. Удобное расположение рядом с центром и курортным парком. Всё необходимое для отдыха и лечения: чистый горный воздух, нарзан, маршруты по парку — в шаговой доступности.",
    price: "от 1 900 ₽/сутки",
    rooms: "1",
    area: "30",
    floor: "1/3",
    street: "ул. Гастелло, 24",
    city: "Кисловодск",
    metro: "Курортный парк, 10 мин.",
    tag: "1 комната",
    accent: "hsl(15 55% 45%)",
    photo: "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2040179858-1.jpg",
    photos: [
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2040179858-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2032051861-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2032051854-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2030016733-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2030016725-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2030016715-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2032051859-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2032051862-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2040083736-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2607297447-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2607284155-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2607562878-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2607297505-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-gastello-2813997322-1.jpg",
    ],
  },
  {
    id: 315270136,
    name: "Квартира посуточно, улица Героев Медиков 50, Кисловодск",
    displayName: "Квартира на Героев Медиков, 50 — Кисловодск",
    description: "Однокомнатная квартира 32 м² на 4 этаже в Кисловодске. Удобный район, рядом остановки транспорта, магазины. Доступное жильё для санаторно-курортного лечения или отдыха. Тихое место с хорошей инфраструктурой.",
    price: "от 1 900 ₽/сутки",
    rooms: "1",
    area: "32",
    floor: "4/5",
    street: "ул. Героев Медиков, 50",
    city: "Кисловодск",
    metro: "Курортный парк, 12 мин.",
    tag: "1 комната",
    accent: "hsl(20 50% 42%)",
    photo: "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434631488-1.jpg",
    photos: [
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434631488-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434631492-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434631495-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434629599-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434631491-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434629581-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434629587-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434629569-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434629555-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434631489-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434629582-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434629596-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434631496-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434631487-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434631490-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-kislovodsk-ulica-geroev-medikov-2434629554-1.jpg",
    ],
  },
  {
    id: 320426273,
    name: "Двухкомнатная квартира посуточно, улица Прямая 34, Кисловодск",
    displayName: "Квартира на Прямой, 34 — Кисловодск",
    description: "Двухкомнатная квартира 40 м² на 1 этаже в Кисловодске. Подходит для семьи или пары с детьми. Спокойный район, рядом природа и курортные маршруты. Удобный вариант для длительного пребывания на курорте.",
    price: "от 1 900 ₽/сутки",
    rooms: "2",
    area: "40",
    floor: "1/2",
    street: "ул. Прямая, 34",
    city: "Кисловодск",
    metro: "Курортный парк, 8 мин.",
    tag: "2 комнаты",
    accent: "hsl(25 48% 40%)",
    photo: "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583493719-1.jpg",
    photos: [
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583493719-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583493377-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583492949-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583500860-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583493688-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583493622-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583492947-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583493786-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583492940-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583493426-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583496493-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583496357-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583496035-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583495814-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583495419-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583495893-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583495150-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583495956-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583495649-1.jpg",
      "https://images.cdn-cian.ru/images/posutochnaja-kvartira-alikonovka-pryamaya-ulica-2583496516-1.jpg",
    ],
  },
  {
    id: 10,
    name: "Студия-мансарда посуточно, улица Курганная 32, Кисловодск",
    displayName: "Студия-мансарда на Курганной, 32 — Кисловодск",
    description: "Просторная студия 50 м² в уютной мансарде двухэтажного частного дома с отдельным входом. До курортного парка и рынка — 15 минут пешком. Рассчитана на 3 гостей: двуспальная кровать и раскладная тахта; при необходимости возможно размещение до 5 человек на дополнительной надувной кровати. Оборудованная кухня, совмещённый санузел с душем и ванной. Закрытый двор с парковкой, мангал и зона отдыха на свежем воздухе. Из окна открывается живописный вид на горы.",
    price: "от 2 500 ₽/сутки",
    rooms: "1",
    area: "50",
    floor: "2/2",
    street: "ул. Курганная, 32",
    city: "Кисловодск",
    metro: "Курортный парк, 15 мин.",
    tag: "Студия",
    accent: "hsl(30 52% 43%)",
    photos: [
      photo_kurg1,
      photo_kurg2,
      photo_kurg3,
      photo_kurg4,
      photo_kurg5,
      photo_kurg6,
      photo_kurg7,
      photo_kurg8,
      photo_kurg9,
      photo_kurg10,
      photo_kurg11,
      photo_kurg12,
      photo_kurg13,
      photo_kurg14,
      photo_kurg15,
      photo_kurg16,
      photo_kurg17,
      photo_kurg18,
    ],
  },
  {
    id: 11,
    name: "Трёхкомнатная квартира 76 кв.м. посуточно, Литейный проспект 40, Санкт-Петербург",
    displayName: "Квартира на Литейном, 40 — 3 комнаты, 76 м²",
    description: "Просторная квартира 76 м² в историческом центре — до Невского проспекта и метро пешком 10–15 минут. Вместимость до 7 гостей: двуспальная кровать, два раскладных дивана и раскладная кровать с ламелями. Большинство достопримечательностей в пешей доступности. В округе множество кафе, ресторанов и заведений на любой вкус. Квартира не сдаётся для праздников и корпоративов.",
    price: "от 4 500 ₽/сутки",
    rooms: "3",
    area: "76",
    street: "Литейный проспект, 40",
    city: "Санкт-Петербург",
    metro: "м. Чернышевская, 7 мин.",
    tag: "3 комнаты",
    accent: "hsl(200 55% 42%)",
    photos: [
      photo_spb76_1,
      photo_spb76_2,
      photo_spb76_3,
      photo_spb76_4,
      photo_spb76_5,
      photo_spb76_6,
      photo_spb76_7,
      photo_spb76_8,
      photo_spb76_9,
      photo_spb76_10,
      photo_spb76_11,
      photo_spb76_12,
      photo_spb76_13,
      photo_spb76_14,
      photo_spb76_15,
    ],
  },
];

function ApartmentCard({ apt, index }: { apt: Apartment; index: number }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const hasPhotos = apt.photos && apt.photos.length > 0;
  const currentPhoto = hasPhotos ? apt.photos![photoIdx] : undefined;

  function prevPhoto(e: React.MouseEvent) {
    e.stopPropagation();
    if (!apt.photos) return;
    setPhotoIdx((i) => (i - 1 + apt.photos!.length) % apt.photos!.length);
  }

  function nextPhoto(e: React.MouseEvent) {
    e.stopPropagation();
    if (!apt.photos) return;
    setPhotoIdx((i) => (i + 1) % apt.photos!.length);
  }

  return (
    <motion.article
      itemScope
      itemType="https://schema.org/Apartment"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden flex flex-col"
      data-testid={`card-apt-seo-${apt.id}`}
    >
      {hasPhotos ? (
        <div className="relative w-full overflow-hidden group" style={{ height: 220 }}>
          <img
            src={typeof currentPhoto === "string" ? currentPhoto : currentPhoto?.src}
            srcSet={typeof currentPhoto === "string" ? undefined : currentPhoto?.srcSet}
            sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 400px"
            alt={`${apt.displayName || apt.name} — ${apt.city}, ${apt.street}`}
            style={{ width: "100%", height: 220, objectFit: "cover" }}
            loading="lazy"
            decoding="async"
            itemProp="image"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${apt.accent}55 0%, transparent 50%)` }}
          />
          {apt.photos!.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                data-testid={`btn-photo-prev-${apt.id}`}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextPhoto}
                data-testid={`btn-photo-next-${apt.id}`}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
                aria-label="Следующее фото"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {apt.photos!.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setPhotoIdx(idx); }}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${idx === photoIdx ? "bg-white scale-125" : "bg-white/50"}`}
                    aria-label={`Фото ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          <div className="absolute top-2 right-2">
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm"
              style={{ background: `${apt.accent}cc`, color: "white" }}
            >
              {apt.tag}
            </span>
          </div>
          <div className="absolute bottom-2 left-2">
            <span className="text-[10px] font-semibold text-white/90 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
              {apt.city}
            </span>
          </div>
        </div>
      ) : apt.photo ? (
        <div className="relative overflow-hidden" style={{ height: 220 }}>
          <img
            src={apt.photo}
            alt={apt.displayName || apt.name}
            style={{ width: "100%", height: 220, objectFit: "cover" }}
            itemProp="image"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${apt.accent}55 0%, transparent 50%)` }}
          />
          <div className="absolute top-2 right-2">
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm"
              style={{ background: `${apt.accent}cc`, color: "white" }}
            >
              {apt.tag}
            </span>
          </div>
          <div className="absolute bottom-2 left-2">
            <span className="text-[10px] font-semibold text-white/90 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
              {apt.city}
            </span>
          </div>
        </div>
      ) : (
        <div
          className="relative flex flex-col items-center justify-center gap-2"
          style={{
            height: 220,
            background: `linear-gradient(135deg, ${apt.accent}22 0%, ${apt.accent}44 100%)`,
            borderBottom: `2px solid ${apt.accent}33`,
          }}
        >
          <Building2 className="w-10 h-10 opacity-30" style={{ color: apt.accent }} />
          <span className="text-xs font-medium opacity-40" style={{ color: apt.accent }}>
            {apt.city}
          </span>
          <div className="absolute top-2 right-2">
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${apt.accent}22`, color: apt.accent }}
            >
              {apt.tag}
            </span>
          </div>
          <div className="absolute bottom-2 left-2 text-[10px] opacity-30" style={{ color: apt.accent }}>
            фото скоро появится
          </div>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3
            itemProp="name"
            className="font-sans font-bold text-sm leading-snug text-foreground"
          >
            {apt.displayName || apt.name}
          </h3>
          {!hasPhotos && (
            <span
              className="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${apt.accent}18`, color: apt.accent }}
            >
              {apt.tag}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          {apt.area !== "—" && (
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3 h-3" />
              {apt.area} м²
            </span>
          )}
          <span className="flex items-center gap-1">
            <BedDouble className="w-3 h-3" />
            {roomsLabel(apt.rooms)}
          </span>
          {apt.metro && (
            <span className="flex items-center gap-1">
              <Train className="w-3 h-3" />
              {apt.metro}
            </span>
          )}
        </div>

        <p
          itemProp="description"
          className="text-xs text-foreground/60 leading-relaxed flex-1"
        >
          {apt.description}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-black/[0.05]">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span>{apt.street}</span>
          </div>
          <p className="text-sm font-bold" style={{ color: apt.accent }}>
            <span itemProp="priceRange">{apt.price}</span>
          </p>
        </div>

        <meta itemProp="numberOfRooms" content={apt.rooms} />
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="streetAddress" content={apt.street} />
          <meta itemProp="addressLocality" content={apt.city} />
          <meta itemProp="addressCountry" content="RU" />
        </div>
      </div>
    </motion.article>
  );
}

function CityBlock({
  label,
  icon,
  apts,
  startIndex,
}: {
  label: string;
  icon?: string;
  apts: Apartment[];
  startIndex: number;
}) {
  return (
    <div className="mb-16 md:mb-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2.5">
          {icon && <span className="text-lg">{icon}</span>}
          <h3 className="font-sans font-bold text-xl md:text-2xl text-foreground tracking-tight">
            {label}
          </h3>
        </div>
        <div className="flex-1 h-px bg-border" />
      </div>

      {apts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {apts.map((apt, i) => (
            <ApartmentCard key={apt.id} apt={apt} index={startIndex + i} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-12 rounded-2xl border border-dashed border-border bg-card/50">
          <p className="text-sm text-muted-foreground">Квартиры скоро появятся</p>
        </div>
      )}
    </div>
  );
}

export function SeoApartmentsSection() {
  const spb = apartments.filter((a) => a.city === "Санкт-Петербург");
  const kislovodsk = apartments.filter((a) => a.city === "Кисловодск");

  return (
    <section
      id="apartments"
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, hsl(38 35% 96%) 0%, hsl(38 25% 98%) 100%)" }}
      aria-label="Квартиры посуточно ГОСТЬНИК"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-16"
        >
          <p className="text-primary text-xs tracking-[0.3em] mb-3 uppercase font-medium">
            Все варианты
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            Наши квартиры.
          </h2>
        </motion.div>

        <CityBlock label="Санкт-Петербург" icon="🏛" apts={spb} startIndex={0} />
        <CityBlock label="Кисловодск" icon="🏔" apts={kislovodsk} startIndex={spb.length} />
        <CityBlock label="Республика Беларусь" icon="🇧🇾" apts={[]} startIndex={0} />
        <CityBlock label="Новороссийск" icon="⚓" apts={[]} startIndex={0} />
      </div>
    </section>
  );
}
