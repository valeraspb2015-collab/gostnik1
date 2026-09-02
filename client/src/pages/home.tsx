import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { BookingSection } from "@/components/booking-section";
import { SeoApartmentsSection } from "@/components/seo-apartments-section";
import WhyDirectSection from "@/components/why-direct-section";
import { ReviewsSection } from "@/components/reviews-section";
import FinalCtaSection from "@/components/final-cta-section";
import { AgentChat } from "@/components/agent-chat";
import { Shield, Star, Clock, Smile } from "lucide-react";

function scrollToBooking() {
  const el = document.getElementById("booking");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const trustItems = [
  { icon: Star, label: "Уровень 5★", sub: "постельное, полотенца, посуда" },
  { icon: Shield, label: "Безопасно", sub: "заезд без ключей в любое время" },
  { icon: Clock, label: "24 / 7", sub: "ответим за 15 минут" },
  { icon: Smile, label: "Все квартиры", sub: "метро пешком, достопримечательности рядом" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header onBook={scrollToBooking} />
      <HeroSection onBook={scrollToBooking} />

      <section className="py-10 border-b border-border bg-card" aria-label="Преимущества ГОСТЬНИК">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3" data-testid={`trust-${item.label}`}>
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground leading-tight">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SeoApartmentsSection />

      <WhyDirectSection />

      <BookingSection />

      <ReviewsSection />

      <FinalCtaSection />

      <Footer onBook={scrollToBooking} />
      <AgentChat />
    </div>
  );
}
