import React from "react";

export default function FinalCtaSection() {
  return (
    <section className="py-16" style={{ background: "hsl(38 60% 97%)" }}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Готовы забронировать?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Выберите квартиру и бронируйте напрямую — без посредников и комиссий.
          Ответим в течение 15 минут.
        </p>
        <a
          href="#booking"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
        >
          Забронировать квартиру
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          Или позвоните:{" "}
          <a href="tel:+79213798941" className="text-primary font-medium">
            +7 921 379-89-41
          </a>
        </p>
      </div>
    </section>
  );
}
