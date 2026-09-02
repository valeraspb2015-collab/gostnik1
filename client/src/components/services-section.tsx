import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Home, Lock, Music } from "lucide-react";

const services = [
  {
    id: 0,
    icon: Sparkles,
    short: "Комплектация",
    title: "КОМПЛЕКТАЦИЯ",
    description:
      "Комплектация апартаментов на уровне 5-звездочных отелей: питьевая вода, капсульный кофе, чай, белоснежные халаты, тапочки, фирменные косметические принадлежности.",
  },
  {
    id: 1,
    icon: Home,
    short: "Уборка",
    title: "УБОРКА",
    description:
      "Ежедневная тщательная уборка в апартаментах, замена полотенец и пополнение косметических принадлежностей, смена постельных комплектов 2 раза в неделю.",
  },
  {
    id: 2,
    icon: Lock,
    short: "Приватность",
    title: "ПРИВАТНОСТЬ",
    description:
      "Бесконтактное заселение с помощью электронных ключниц; конфиденциальность и минимум информации при регистрации гостей; тишина и домашний уют.",
  },
  {
    id: 3,
    icon: Music,
    short: "Яндекс Станция",
    title: "ЯНДЕКС СТАНЦИЯ",
    description:
      'В каждом апартаменте установлена Яндекс Станция с подпиской Яндекс Плюс на весь срок проживания — тысячи фильмов и более 40 миллионов песен. Скажите: «Алиса, включи музыку!»',
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="py-20 md:py-28 bg-card" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-primary text-xs tracking-[0.3em] mb-3 uppercase font-medium">
            Сервис и уют настоящего дома
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl" data-testid="text-services-title">
            Всё включено.{" "}
            <span className="font-serif italic text-primary">Каждый день.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
              data-testid={`tab-service-${i}`}
            >
              <s.icon className="w-4 h-4" />
              {s.short}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="bg-background border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start gap-8 md:gap-12"
            data-testid={`card-service-${active}`}
          >
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-primary/10">
              <current.icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl md:text-2xl mb-4 tracking-wide">{current.title}</h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                {current.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
