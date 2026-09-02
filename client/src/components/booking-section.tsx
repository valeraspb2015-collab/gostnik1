import { Clock, Phone, Mail } from "lucide-react";

export function BookingSection() {
  return (
    <section id="booking" className="py-20 md:py-28 bg-card border-t border-border" data-testid="section-booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <p className="text-primary text-xs tracking-[0.3em] mb-3 uppercase font-medium">
            Онлайн-бронирование
          </p>
          <h2
            className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl"
            data-testid="text-booking-title"
          >
            Выберите даты.{" "}
            <span className="font-serif italic text-primary">Заселяйтесь.</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-2xl leading-relaxed">
            Выберите апартаменты и даты проживания — бронирование онлайн за несколько секунд
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span data-testid="text-checkin-time">Заезд с 15:00</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span data-testid="text-checkout-time">Выезд до 12:00</span>
          </div>
        </div>

        <div className="w-full rounded-2xl overflow-hidden border border-border mb-10 shadow-sm" data-testid="widget-realtycalendar">
          <iframe
            src="https://homereserve.ru/vPqBfHl4Xy"
            title="Бронирование апартаментов ГОСТЬНИК"
            className="w-full border-0"
            style={{ minHeight: "800px" }}
            loading="lazy"
            allow="payment"
          />
        </div>

        <div className="text-center border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-5">
            Для бронирования вы также можете связаться с нами напрямую:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+79213798941"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-booking-phone"
            >
              <Phone className="w-4 h-4" />
              +7 921 379-89-41
            </a>
            <a
              href="tel:+79219752351"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-booking-phone-2"
            >
              <Phone className="w-4 h-4" />
              +7 921 975-23-51
            </a>
            <a
              href="mailto:ikarr@bk.ru"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-booking-email"
            >
              <Mail className="w-4 h-4" />
              ikarr@bk.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
