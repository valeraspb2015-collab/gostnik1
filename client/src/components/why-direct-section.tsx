import React from "react";

const reasons = [
  {
    icon: "💰",
    title: "Экономия до 25%",
    text: "Без комиссий посредников — цена, которую вы видите, это цена хозяина.",
  },
  {
    icon: "📞",
    title: "Прямой контакт",
    text: "Общаетесь напрямую с хозяином. Быстрые ответы, индивидуальный подход.",
  },
  {
    icon: "🔓",
    title: "Бесконтактное заселение",
    text: "Приезжайте в любое время — заселение без ключей и ожидания.",
  },
  {
    icon: "⭐",
    title: "Проверенное качество",
    text: "4.9 по отзывам 2 000+ гостей. Одинаково высокий стандарт в каждой квартире.",
  },
];

export default function WhyDirectSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
          ПРЯМОЕ БРОНИРОВАНИЕ
        </p>
        <h2 className="text-3xl font-bold text-foreground mb-10">
          Почему выгоднее бронировать напрямую?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-2xl border border-border shadow-sm bg-card">
              <span className="text-3xl">{r.icon}</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
