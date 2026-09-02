import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@assets/gostnik-logo-nobg.webp";

interface HeaderProps {
  onBook: () => void;
}

export function Header({ onBook }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/[0.07] shadow-sm"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 md:py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center"
            data-testid="link-logo"
          >
            <img
              src={logoImg}
              alt="ГОСТЬНИК — сеть гостевых квартир"
              className="h-[120px] md:h-36 w-auto"
              width={512}
              height={512}
              loading="eager"
              {...{ fetchpriority: "high" }}
            />
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {[
              { id: "apartments", label: "КВАРТИРЫ" },
              { id: "services", label: "СЕРВИС" },
              { id: "booking", label: "БРОНИРОВАНИЕ" },
              { id: "contacts", label: "КОНТАКТЫ" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs font-medium tracking-widest text-foreground/55 hover:text-foreground transition-colors"
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end gap-0.5">
              <a
                href="tel:+79213798941"
                className="flex items-center gap-1.5 text-sm text-foreground/55 hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone className="w-3.5 h-3.5" />
                +7 921 379-89-41
              </a>
              <a
                href="tel:+79219752351"
                className="flex items-center gap-1.5 text-sm text-foreground/55 hover:text-foreground transition-colors"
                data-testid="link-phone-2"
              >
                <Phone className="w-3.5 h-3.5" />
                +7 921 975-23-51
              </a>
            </div>
            <Button
              onClick={onBook}
              size="sm"
              className="hidden sm:inline-flex tracking-wider text-xs px-5 shadow-sm"
              data-testid="button-book-header"
            >
              ЗАБРОНИРОВАТЬ
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden text-foreground/70"
              onClick={() => setMenuOpen(!menuOpen)}
              data-testid="button-mobile-menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-black/[0.07]">
          <div className="px-4 py-4 space-y-1">
            {[
              { id: "apartments", label: "КВАРТИРЫ" },
              { id: "services", label: "СЕРВИС" },
              { id: "booking", label: "БРОНИРОВАНИЕ" },
              { id: "contacts", label: "КОНТАКТЫ" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-xs font-medium tracking-widest py-3 text-foreground/55 hover:text-foreground transition-colors"
                data-testid={`link-${item.id}-mobile`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+79213798941"
              className="flex items-center gap-2 text-sm py-2 text-foreground/55"
              data-testid="link-phone-mobile"
            >
              <Phone className="w-4 h-4" />
              +7 921 379-89-41
            </a>
            <a
              href="tel:+79219752351"
              className="flex items-center gap-2 text-sm py-2 text-foreground/55"
              data-testid="link-phone-2-mobile"
            >
              <Phone className="w-4 h-4" />
              +7 921 975-23-51
            </a>
            <Button
              onClick={() => { onBook(); setMenuOpen(false); }}
              className="w-full tracking-wider text-xs mt-2"
              data-testid="button-book-mobile"
            >
              ЗАБРОНИРОВАТЬ
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
