# Аднера — Сеть гостевых квартир в Санкт-Петербурге и Кисловодске

## Overview
Сайт-лендинг для сети гостевых квартир "Лучшая аренда" в Санкт-Петербурге. Содержит секции: hero, карточки апартаментов, сервисы, завтраки, бронирование через iframe homereserve.ru, футер с контактами.

## Recent Changes
- 2026-03-25: Ребрендинг BFR Apartments → Лучшая аренда (сеть гостевых квартир)
- 2026-02-06: Добавлена плавающая кнопка MessengerFab (Telegram, WhatsApp, Max)
- 2026-02-06: Встроен iframe виджета бронирования с homereserve.ru/vPqBfHl4Xy (показывает реальные квартиры с фото, ценами и онлайн-бронированием)
- 2026-02-06: Удалена секция террасы (TerraceSection)
- 2026-02-06: Обновлены контакты: тел +7 921 379-89-41, email ikarr@bk.ru, адрес Невский проспект 134

## Architecture
- **Frontend**: React + Vite, Tailwind CSS, shadcn/ui, framer-motion для анимаций
- **Backend**: Express.js с PostgreSQL (Drizzle ORM)
- **Booking**: iframe виджета homereserve.ru/vPqBfHl4Xy (RealtyCalendar)
- **Theme**: Золотые/тёплые акценты (primary: hsl 38 60% 50%), шрифты Montserrat + Playfair Display

## Key Files
- `client/src/pages/home.tsx` - Главная страница
- `client/src/components/` - Header, HeroSection, ApartmentCard, ServicesSection, BreakfastSection, BookingSection, Footer, MessengerFab
- `client/src/components/booking-section.tsx` - Секция бронирования с iframe homereserve.ru
- `client/src/components/messenger-fab.tsx` - Плавающая кнопка мессенджеров
- `server/routes.ts` - API: GET /api/apartments, POST /api/bookings
- `server/seed.ts` - Seed-данные для 7 типов апартаментов
- `shared/schema.ts` - Схема БД (apartments, bookingRequests, users)

## Contact Info
- Телефон: +7 921 379-89-41
- Email: ikarr@bk.ru
- Адрес: Невский проспект, 134, Санкт-Петербург
- Заезд: 15:00, Выезд: 12:00

## User Preferences
- Язык интерфейса: русский
- Общение с пользователем на русском языке
- Бренд: Лучшая аренда (сеть гостевых квартир)
- Город: Санкт-Петербург

## Running
- Workflow "Start application" запускает `npm run db:push && npm run dev`
- Frontend на порту 5000
- Workflow автоматически создаёт или синхронизирует таблицы development-базы перед запуском сервера
- Replit автоматически предоставляет `DATABASE_URL`; для сессий нужен секрет `SESSION_SECRET`
