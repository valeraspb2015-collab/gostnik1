import { motion } from "framer-motion";

export function BreakfastSection() {
  return (
    <section className="py-20 md:py-28" data-testid="section-breakfast">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/breakfast.png"
                alt="Завтрак"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-[420px] object-cover"
                loading="lazy"
                data-testid="img-breakfast"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <p className="text-primary text-xs tracking-[0.3em] mb-4 uppercase font-medium">
              Сделаем ваш отдых вкусным
            </p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tight leading-[1.15]" data-testid="text-breakfast-title">
              Тариф{" "}
              <span className="font-serif italic text-primary">«С завтраком»</span>
            </h2>
            <div className="w-10 h-0.5 bg-primary mb-6" />
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              Предоставьте заботу о вкусном и разнообразном завтраке — профессионалам!
              Вам не нужно тратить время на поиск ресторана или кафе рано утром,
              не нужно далеко идти или долго ждать заказанного по меню завтрака.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Каждое утро вас будет ждать свежий завтрак с разнообразным меню,
              которое включает горячие блюда, свежую выпечку, фрукты, соки и ароматный кофе.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
