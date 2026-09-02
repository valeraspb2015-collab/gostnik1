import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SiTelegram, SiWhatsapp } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "79213798941";

const messengers = [
  {
    name: "Telegram",
    icon: SiTelegram,
    href: `https://t.me/+${PHONE}`,
    color: "bg-[#2AABEE]",
    testId: "link-fab-telegram",
  },
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    href: `https://wa.me/${PHONE}`,
    color: "bg-[#25D366]",
    testId: "link-fab-whatsapp",
  },
  {
    name: "Max",
    icon: () => (
      <svg viewBox="0 0 1000 1000" className="w-7 h-7">
        <defs>
          <linearGradient id="max-a">
            <stop offset="0" stopColor="#4cf" />
            <stop offset=".662" stopColor="#53e" />
            <stop offset="1" stopColor="#93d" />
          </linearGradient>
          <linearGradient id="max-b">
            <stop offset="0" stopColor="#00f" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="max-c" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse" xlinkHref="#max-a" />
          <radialGradient id="max-d" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3)scale(2.42703433 1)" gradientUnits="userSpaceOnUse" xlinkHref="#max-b" />
        </defs>
        <rect width="1000" height="1000" fill="url(#max-c)" ry="249.681" />
        <rect width="1000" height="1000" fill="url(#max-d)" ry="249.681" />
        <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd" />
      </svg>
    ),
    href: `https://max.ru/`,
    color: "bg-transparent",
    testId: "link-fab-max",
  },
];

export function MessengerFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" data-testid="messenger-fab">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 mb-2"
          >
            {messengers.map((m) => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${m.color} text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform hover:scale-110`}
                title={m.name}
                data-testid={m.testId}
              >
                <m.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        data-testid="button-messenger-fab"
        aria-label="Онлайн-помощник"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
