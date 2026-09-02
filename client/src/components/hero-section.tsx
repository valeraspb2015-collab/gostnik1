import { Button } from "@/components/ui/button";
import { ChevronDown, Star, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { heroMain, heroThumb1, heroThumb2, heroThumb3 } from "@/lib/image-sources";

interface HeroSectionProps {
  onBook: () => void;
}

export function HeroSection({ onBook }: HeroSectionProps) {
  const scrollToApartments = () => {
    const el = document.getElementById("apartments");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, hsl(38 45% 94%) 0%, hsl(40 38% 91%) 50%, hsl(36 42% 93%) 100%)",
      }}
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 25%, hsl(38 70% 85% / 0.55) 0%, transparent 48%), radial-gradient(circle at 15% 75%, hsl(40 50% 88% / 0.45) 0%, transparent 42%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center pt-40 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
              style={{
                borderColor: "hsl(38 60% 50% / 0.3)",
                background: "hsl(38 60% 50% / 0.08)",
              }}
              data-testid="badge-hero"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground/65 text-xs tracking-wider font-medium">
                Прямое бронирование · Без комиссии · СПб и Кисловодск
              </span>
            </div>

            <h1
              className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6"
              style={{ color: "hsl(220 25% 12%)" }}
              data-testid="text-hero-title"
            >
              Квартиры посуточно<br />
              в Петербурге<br />
              и Кисловодске.<br />
              <span
                className="font-serif italic"
                style={{ color: "hsl(38 60% 46%)" }}
              >
                Лучший выбор
              </span>
              <br />
              для отдыха и работы.
            </h1>

            <p
              className="text-foreground/55 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              data-testid="text-hero-desc"
            >
              Прямое бронирование без комиссии посредников. Экономьте до 25% — и общайтесь напрямую с хозяином.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={onBook}
                size="lg"
                className="tracking-wider text-sm px-8 h-12 shadow-md"
                data-testid="button-book-hero"
              >
                ЗАБРОНИРОВАТЬ
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToApartments}
                className="tracking-wider text-sm px-8 h-12"
                data-testid="button-view-apartments"
              >
                НАШИ КВАРТИРЫ
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm" data-testid="text-hero-stats">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-semibold text-foreground/80">4.9</span>
              <span className="text-foreground/25">·</span>
              <span className="text-foreground/50">2 000+ гостей</span>
              <span className="text-foreground/25">·</span>
              <span className="text-foreground/50">9 квартир</span>
              <span className="text-foreground/25">·</span>
              <span className="text-foreground/50">от 2 200 ₽/сутки</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-black/[0.06]">
                <div className="relative">
                  <img
                    src={heroMain.src}
                    srcSet={heroMain.srcSet}
                    sizes="448px"
                    alt="Гостевые апартаменты ГОСТЬНИК — Санкт-Петербург, Невский проспект 134"
                    className="w-full h-64 object-cover"
                    decoding="async"
                    data-testid="img-hero-featured"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white/70 text-xs tracking-widest uppercase mb-0.5">Апартаменты</p>
                    <p className="text-white font-bold text-2xl tracking-wider">LOUNGE</p>
                  </div>
                </div>

                <div className="p-5 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-foreground/50 text-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Невский пр., 134 · 55 кв.м · 3 комнаты
                    </div>
                    <div
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full"
                      style={{ background: "hsl(38 60% 50% / 0.12)" }}
                    >
                      <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                      <span className="text-primary font-bold text-xs">4.9</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { src: heroThumb1, alt: "Квартира посуточно Санкт-Петербург — кухня-студия с дизайнерским интерьером" },
                      { src: heroThumb2, alt: "Квартира посуточно Санкт-Петербург — просторная гостиная" },
                      { src: heroThumb3, alt: "Квартира посуточно Санкт-Петербург — спальня с кухонным уголком" },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-square border border-black/[0.06]">
                        <img
                          src={item.src.src}
                          srcSet={item.src.srcSet}
                          sizes="120px"
                          alt={item.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onBook}
                    className="w-full rounded-xl py-3 text-sm font-bold tracking-wider transition-opacity hover:opacity-90 shadow-sm"
                    style={{ background: "hsl(38 60% 50%)", color: "#fff" }}
                    data-testid="button-book-card"
                  >
                    ПРОВЕРИТЬ ДОСТУПНОСТЬ
                  </button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 border border-black/[0.05]"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                  Доступно сегодня
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.4 }}
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-4 py-3 border border-black/[0.05]"
              >
                <p className="text-foreground/40 text-xs mb-0.5">Стоимость от</p>
                <p className="text-foreground font-bold text-xl">2 500 ₽</p>
                <p className="text-foreground/40 text-xs">за ночь</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.button
        onClick={scrollToApartments}
        className="relative z-10 mx-auto mb-8 text-foreground/25 hover:text-foreground/50 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
