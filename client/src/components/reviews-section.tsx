import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Анастасия К.",
    city: "Москва",
    date: "март 2025",
    rating: 5,
    text: "Прекрасные апартаменты в самом центре Петербурга! Чистота идеальная, всё необходимое есть. Заселение прошло без проблем, хозяева оперативно ответили на все вопросы. Обязательно вернёмся!",
    initials: "АК",
    color: "hsl(38 60% 50%)",
  },
  {
    id: 2,
    name: "Дмитрий В.",
    city: "Санкт-Петербург",
    date: "январь 2025",
    rating: 5,
    text: "Останавливался несколько раз по рабочим вопросам. Квартира оборудована всем необходимым для комфортной работы — быстрый интернет, тихий район. Сервис на высшем уровне, всегда чисто и уютно.",
    initials: "ДВ",
    color: "hsl(215 65% 50%)",
  },
  {
    id: 3,
    name: "Елена и Сергей М.",
    city: "Екатеринбург",
    date: "февраль 2025",
    rating: 5,
    text: "Замечательное место для романтического отдыха. Квартира стильная, вид отличный. Спасибо за завтрак и тёплую встречу! Невский проспект в шаговой доступности — это бесценно.",
    initials: "ЕМ",
    color: "hsl(340 60% 50%)",
  },
  {
    id: 4,
    name: "Михаил Р.",
    city: "Краснодар",
    date: "апрель 2025",
    rating: 5,
    text: "Кисловодск — лучший выбор для отдыха и восстановления. Квартира превзошла все ожидания: современный дизайн, отличное расположение рядом с парком, всё продумано до мелочей.",
    initials: "МР",
    color: "hsl(145 55% 40%)",
  },
  {
    id: 5,
    name: "Ольга Н.",
    city: "Новосибирск",
    date: "март 2025",
    rating: 5,
    text: "Всё понравилось! Бесконтактное заселение очень удобно. Апартаменты просторные, кухня полностью оснащена. Поддержка отвечает мгновенно. Рекомендую всем, кто едет в Петербург!",
    initials: "ОН",
    color: "hsl(270 55% 55%)",
  },
  {
    id: 6,
    name: "Тимур А.",
    city: "Казань",
    date: "май 2025",
    rating: 5,
    text: "Третий раз останавливаюсь здесь — каждый раз одни и те же высокие стандарты. Удобное расположение, чистота, всегда свежее бельё. Это мой выбор №1 в Петербурге.",
    initials: "ТА",
    color: "hsl(28 70% 48%)",
  },
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ background: "hsl(38 30% 97%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary text-xs tracking-[0.3em] mb-3 uppercase font-medium">
            Что говорят гости
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
              Отзывы.{" "}
              <span className="font-serif italic text-primary">2000+ гостей</span>
            </h2>
            <div className="flex items-center gap-2 pb-1">
              <StarRow />
              <span className="font-bold text-foreground/80 text-sm">4.9</span>
              <span className="text-foreground/35 text-sm">средняя оценка</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 border border-black/[0.06] shadow-sm flex flex-col gap-4"
              data-testid={`card-review-${r.id}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: r.color }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground leading-tight">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.city} · {r.date}</p>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-primary/25 flex-shrink-0 mt-0.5" />
              </div>

              <StarRow />

              <p className="text-sm text-foreground/65 leading-relaxed flex-1">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
