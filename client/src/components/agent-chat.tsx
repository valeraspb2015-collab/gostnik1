import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Calendar, Home, ArrowRight, Map, Utensils } from "lucide-react";
import { SiTelegram, SiWhatsapp } from "react-icons/si";

const PHONE = "79213798941";

const messengers = [
  {
    name: "Telegram",
    icon: SiTelegram,
    href: `https://t.me/+${PHONE}`,
    bg: "#2AABEE",
    testId: "link-fab-telegram",
  },
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    href: `https://wa.me/${PHONE}`,
    bg: "#25D366",
    testId: "link-fab-whatsapp",
  },
  {
    name: "Max",
    icon: () => (
      <svg viewBox="0 0 1000 1000" className="w-5 h-5">
        <defs>
          <linearGradient id="mx-a">
            <stop offset="0" stopColor="#4cf" />
            <stop offset=".662" stopColor="#53e" />
            <stop offset="1" stopColor="#93d" />
          </linearGradient>
          <linearGradient id="mx-b">
            <stop offset="0" stopColor="#00f" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mx-c" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse" xlinkHref="#mx-a" />
          <radialGradient id="mx-d" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3)scale(2.42703433 1)" gradientUnits="userSpaceOnUse" xlinkHref="#mx-b" />
        </defs>
        <rect width="1000" height="1000" fill="url(#mx-c)" ry="249.681" />
        <rect width="1000" height="1000" fill="url(#mx-d)" ry="249.681" />
        <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd" />
      </svg>
    ),
    href: `https://max.ru/`,
    bg: "linear-gradient(135deg, #4cf 0%, #53e 66%, #93d 100%)",
    testId: "link-fab-max",
  },
];

type Mode = "closed" | "preview" | "full";
type Topic = "home" | "excursions" | "dining";

const excursionsSpb = [
  "Эрмитаж и Дворцовая площадь",
  "Петергоф — фонтаны и дворцы",
  "Экскурсия по каналам на катере",
  "Кронштадт и форт Константин",
  "Пушкин (Царское Село)",
  "Ночные белые ночи (май–июль)",
];

const excursionsKmv = [
  "Гора Эльбрус — подъём на канатке",
  "Долина нарзанов",
  "Медовые водопады",
  "Кисловодский национальный парк",
  "Джип-тур по горам КМВ",
  "Пятигорск — гора Машук и Провал",
];

const diningSpb = [
  "Кафе «Два Гуся» — русская кухня, ул. Думская",
  "Ресторан «Беринг» — морепродукты, Невский пр.",
  "Stolle — пироги и выпечка, по всему городу",
  "Рынок «Василеостровский» — фермерские продукты",
  "Кофейня «Буше» — завтраки и десерты",
];

const diningKmv = [
  "Ресторан «Нарт» — кавказская кухня",
  "Кафе «Замок» с видом на горы",
  "Рынок центральный — свежие фрукты и сыры",
  "Шашлычная «У Армена» — аутентичный шашлык",
  "Кофейня «Кисловодск» на Курортном бульваре",
];

export function AgentChat() {
  const [mode, setMode] = useState<Mode>("closed");
  const [topic, setTopic] = useState<Topic>("home");

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("agent-preview-seen");
    if (alreadySeen) return;
    const timer = setTimeout(() => {
      setMode("preview");
      sessionStorage.setItem("agent-preview-seen", "1");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleBook = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMode("closed");
  };

  const handleApartments = () => {
    const el = document.getElementById("apartments");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMode("closed");
  };

  const toggleFull = () => {
    if (mode === "full") {
      setMode("closed");
      setTopic("home");
    } else {
      setMode("full");
    }
  };

  return (
    <div className="fixed bottom-2 right-4 sm:bottom-3 sm:right-6 z-50 flex flex-col items-end gap-2" data-testid="agent-chat">

      <AnimatePresence mode="wait">

        {mode === "preview" && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="w-72 rounded-2xl shadow-xl overflow-hidden"
            style={{ background: "#fff", border: "1px solid hsl(0 0% 91%)" }}
            data-testid="agent-preview"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-black/[0.06]">
              <div className="relative flex-shrink-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base shadow"
                  style={{
                    background: "linear-gradient(135deg, hsl(38 60% 50%) 0%, hsl(32 65% 55%) 100%)",
                  }}
                >
                  Б
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-foreground leading-tight">Бронник</p>
                <p className="text-xs text-foreground/45">ИИ-ассистент · онлайн</p>
              </div>
              <button
                onClick={() => setMode("closed")}
                className="text-foreground/35 hover:text-foreground/70 transition-colors p-1 rounded-lg flex-shrink-0"
                data-testid="button-preview-close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="px-4 py-4">
              <p className="text-sm text-foreground/75 leading-relaxed mb-4" data-testid="agent-preview-message">
                Привет! 👋 Помогу выбрать квартиру в Петербурге или Кисловодске и проверить доступность на ваши даты.
              </p>
              <button
                onClick={() => setMode("full")}
                className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
                style={{
                  background: "hsl(38 60% 50% / 0.1)",
                  color: "hsl(38 60% 36%)",
                }}
                data-testid="button-preview-expand"
              >
                <span>Задать вопрос</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {mode === "full" && (
          <motion.div
            key="full"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="w-80 rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: "#fff", border: "1px solid hsl(0 0% 91%)" }}
            data-testid="agent-chat-popup"
          >
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{
                background: "linear-gradient(135deg, hsl(220 25% 13%) 0%, hsl(225 30% 18%) 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md"
                    style={{
                      background: "linear-gradient(135deg, hsl(38 60% 50%) 0%, hsl(32 65% 55%) 100%)",
                    }}
                  >
                    Б
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">Бронник</p>
                  <p className="text-white/55 text-xs">ИИ-ассистент · онлайн</p>
                </div>
              </div>
              <button
                onClick={() => setMode("closed")}
                className="text-white/50 hover:text-white transition-colors rounded-lg p-1"
                data-testid="button-agent-close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* HOME screen */}
            {topic === "home" && (
              <div className="px-5 py-5">
                <div
                  className="rounded-2xl rounded-tl-sm px-4 py-3.5 mb-5 text-sm leading-relaxed text-foreground/80"
                  style={{ background: "hsl(220 20% 96%)" }}
                  data-testid="agent-chat-message"
                >
                  <p className="mb-1.5">
                    Привет! 👋 Я Бронник, ассистент <strong>«ГОСТЬНИК»</strong>.
                  </p>
                  <p>
                    Расскажу об апартаментах, помогу с бронированием, подскажу экскурсии и где поесть в Петербурге и Кисловодске.
                  </p>
                </div>

                <p className="text-xs text-foreground/40 mb-3 uppercase tracking-wider font-medium">
                  Чем могу помочь?
                </p>

                <div className="flex flex-col gap-2 mb-5">
                  <button
                    onClick={handleBook}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all hover:scale-[1.01] border"
                    style={{
                      background: "hsl(38 60% 50% / 0.06)",
                      borderColor: "hsl(38 60% 50% / 0.2)",
                      color: "hsl(38 60% 38%)",
                    }}
                    data-testid="button-agent-book"
                  >
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    Проверить доступность и цены
                  </button>
                  <button
                    onClick={handleApartments}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all hover:scale-[1.01] border border-border"
                    style={{ background: "hsl(0 0% 98%)" }}
                    data-testid="button-agent-apartments"
                  >
                    <Home className="w-4 h-4 flex-shrink-0 text-foreground/50" />
                    <span className="text-foreground/75">Посмотреть все квартиры</span>
                  </button>
                  <button
                    onClick={() => setTopic("excursions")}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all hover:scale-[1.01] border border-border"
                    style={{ background: "hsl(0 0% 98%)" }}
                    data-testid="button-agent-excursions"
                  >
                    <Map className="w-4 h-4 flex-shrink-0 text-foreground/50" />
                    <span className="text-foreground/75">Экскурсии в наших городах</span>
                  </button>
                  <button
                    onClick={() => setTopic("dining")}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all hover:scale-[1.01] border border-border"
                    style={{ background: "hsl(0 0% 98%)" }}
                    data-testid="button-agent-dining"
                  >
                    <Utensils className="w-4 h-4 flex-shrink-0 text-foreground/50" />
                    <span className="text-foreground/75">Где поесть рядом</span>
                  </button>
                </div>

                <p className="text-xs text-foreground/40 mb-3 uppercase tracking-wider font-medium">
                  Написать напрямую
                </p>

                <div className="flex items-center gap-2">
                  {messengers.map((m) => (
                    <a
                      key={m.name}
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl text-white transition-transform hover:scale-105 shadow-sm"
                      style={{ background: m.bg }}
                      title={m.name}
                      data-testid={m.testId}
                    >
                      <m.icon className="w-5 h-5" />
                      <span className="text-[10px] font-medium opacity-90">{m.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* EXCURSIONS screen */}
            {topic === "excursions" && (
              <div className="px-5 py-5">
                <button
                  onClick={() => setTopic("home")}
                  className="flex items-center gap-1.5 text-xs text-foreground/45 hover:text-foreground/70 mb-4 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 rotate-180" /> Назад
                </button>
                <p className="text-xs text-foreground/40 mb-2 uppercase tracking-wider font-medium">Санкт-Петербург</p>
                <ul className="mb-4 space-y-1.5">
                  {excursionsSpb.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-foreground/40 mb-2 uppercase tracking-wider font-medium">Кисловодск</p>
                <ul className="mb-5 space-y-1.5">
                  {excursionsKmv.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-xl px-4 py-3 text-sm text-foreground/70 border border-dashed border-border"
                  style={{ background: "hsl(38 60% 97%)" }}
                >
                  <p className="mb-2">Нужна подробная программа или помощь с организацией?</p>
                  <div className="flex gap-2">
                    {messengers.map((m) => (
                      <a
                        key={m.name}
                        href={m.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-white text-xs font-medium transition-transform hover:scale-105"
                        style={{ background: m.bg }}
                      >
                        <m.icon className="w-3.5 h-3.5" />
                        {m.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* DINING screen */}
            {topic === "dining" && (
              <div className="px-5 py-5">
                <button
                  onClick={() => setTopic("home")}
                  className="flex items-center gap-1.5 text-xs text-foreground/45 hover:text-foreground/70 mb-4 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 rotate-180" /> Назад
                </button>
                <p className="text-xs text-foreground/40 mb-2 uppercase tracking-wider font-medium">Санкт-Петербург</p>
                <ul className="mb-4 space-y-1.5">
                  {diningSpb.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-foreground/40 mb-2 uppercase tracking-wider font-medium">Кисловодск</p>
                <ul className="mb-5 space-y-1.5">
                  {diningKmv.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-xl px-4 py-3 text-sm text-foreground/70 border border-dashed border-border"
                  style={{ background: "hsl(38 60% 97%)" }}
                >
                  <p className="mb-2">Не нашли подходящий вариант? Напишите администратору:</p>
                  <div className="flex gap-2">
                    {messengers.map((m) => (
                      <a
                        key={m.name}
                        href={m.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-white text-xs font-medium transition-transform hover:scale-105"
                        style={{ background: m.bg }}
                      >
                        <m.icon className="w-3.5 h-3.5" />
                        {m.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div
              className="px-5 py-3 border-t border-border text-center"
              style={{ background: "hsl(0 0% 99%)" }}
            >
              <p className="text-xs text-foreground/35">
                ГОСТЬНИК · Санкт-Петербург · Кисловодск
              </p>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      <motion.button
        onClick={toggleFull}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white"
        style={{
          background:
            mode === "full"
              ? "hsl(220 25% 20%)"
              : "linear-gradient(135deg, hsl(38 60% 46%) 0%, hsl(32 65% 50%) 100%)",
        }}
        data-testid="button-agent-toggle"
        aria-label="Помощник"
      >
        <AnimatePresence mode="wait">
          {mode === "full" ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.16 }}>
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.16 }}>
              <MessageCircle className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>

        {mode === "closed" && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white"
          />
        )}
      </motion.button>
    </div>
  );
}
