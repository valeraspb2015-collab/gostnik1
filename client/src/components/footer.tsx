import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiTelegram, SiWhatsapp } from "react-icons/si";
import { GostnikLogo } from "@/components/logo";

interface FooterProps {
  onBook: () => void;
}

export function Footer({ onBook }: FooterProps) {
  return (
    <footer id="contacts" className="bg-card border-t border-border" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <GostnikLogo size={40} />
              <div>
                <h3 className="font-sans font-bold text-xl tracking-tight mb-0" data-testid="text-footer-brand">
                  ГОСТЬНИК
                </h3>
                <p className="text-muted-foreground text-xs tracking-widest uppercase">сеть гостевых квартир</p>
              </div>
            </div>
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Коллекция гостевых квартир в центре Санкт-Петербурга и Кисловодска.
              Сервис и уют настоящего дома.
            </p>
            <Button
              onClick={onBook}
              className="tracking-wider text-xs px-6"
              data-testid="button-book-footer"
            >
              ЗАБРОНИРОВАТЬ
            </Button>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] mb-6 uppercase">Контакты</h4>
            <div className="space-y-4">
              <a
                href="tel:+79213798941"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-phone"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +7 921 379-89-41
              </a>
              <a
                href="tel:+79219752351"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-phone2"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +7 921 975-23-51
              </a>
              <a
                href="mailto:ikarr@bk.ru"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-email"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                ikarr@bk.ru
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span data-testid="text-footer-address">
                  г. Санкт-Петербург,<br />Невский проспект, 134<br />
                  <span className="mt-1 block">г. Кисловодск</span>
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] mb-6 uppercase">Мы в сети</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://t.me/bfrapart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors"
                data-testid="link-telegram"
              >
                <SiTelegram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/79213798941"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
            <div className="text-xs text-muted-foreground space-y-1.5">
              <p>Ежедневно с 09:00 до 21:00</p>
              <p>Бронирование круглосуточно</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p data-testid="text-copyright">
            © {new Date().getFullYear()} ГОСТЬНИК. Все права защищены.
          </p>
          <p>Санкт-Петербург · Кисловодск</p>
        </div>
      </div>
    </footer>
  );
}
