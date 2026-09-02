# Аднера — Инструкция по запуску на новом аккаунте Replit

## 1. Сделать форк проекта

1. Войдите в новый аккаунт Replit
2. Откройте ссылку на оригинальный проект
3. Нажмите кнопку **Fork** в верхней части страницы
4. Подождите — Replit скопирует весь проект

---

## 2. Проверить базу данных

Replit автоматически предоставляет проекту PostgreSQL и переменную `DATABASE_URL`. Убедитесь, что база доступна в панели **Database**.

---

## 3. Добавить секреты

Откройте **Tools → Secrets** и добавьте:

| Ключ | Значение |
|---|---|
| `SESSION_SECRET` | Любая длинная строка, например: `adnera_secret_2026_abc` |

`DATABASE_URL` предоставляет Replit автоматически.

---

## 4. Первый запуск

Нажмите кнопку **Run**. Workflow сначала выполнит `npm run db:push`, чтобы создать или синхронизировать таблицы, а затем запустит сайт через `npm run dev`.

---

## 5. Проверка

Сайт должен открыться в окне Preview на порту 5000.

---

## Контакты проекта

- Телефон: +7 921 379-89-41 / +7 921 975-23-51
- Email: ikarr@bk.ru
- Бронирование: iframe виджета homereserve.ru/vPqBfHl4Xy

## Стек

- **Frontend**: React 18 + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Express.js + PostgreSQL (Drizzle ORM)
- **Анимации**: framer-motion
- **Шрифты**: Montserrat + Playfair Display

## Основные файлы

```
client/src/pages/home.tsx          — главная страница
client/src/components/             — все компоненты
server/routes.ts                   — API роуты
server/seed.ts                     — данные апартаментов
shared/schema.ts                   — схема базы данных
```
