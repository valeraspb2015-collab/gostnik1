import type { Apartment } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Maximize2, BedDouble, Utensils, Wifi, Monitor, Wind,
  Shield, Wine, Flame, Users
} from "lucide-react";

const featureIcons: Record<string, typeof Maximize2> = {
  "площадь": Maximize2,
  "комнат": Users,
  "кровать": BedDouble,
  "кухня": Utensils,
  "Wi-Fi": Wifi,
  "Телевизор": Monitor,
  "сплит": Wind,
  "сейф": Shield,
  "барная": Wine,
  "камин": Flame,
  "двуспальн": BedDouble,
};

function getIcon(feature: string) {
  for (const [key, Icon] of Object.entries(featureIcons)) {
    if (feature.toLowerCase().includes(key.toLowerCase())) {
      return Icon;
    }
  }
  return Maximize2;
}

interface ApartmentCardProps {
  apartment: Apartment;
  reverse?: boolean;
  onBook: () => void;
  index?: number;
}

export function ApartmentCard({ apartment, reverse, onBook, index }: ApartmentCardProps) {
  const features = (apartment.features as string[]) || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-14 items-center`}
      data-testid={`card-apartment-${apartment.slug}`}
    >
      <div className="w-full md:w-1/2 relative group">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={apartment.image}
            alt={apartment.name}
            className="w-full h-64 sm:h-72 md:h-80 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            data-testid={`img-apartment-${apartment.slug}`}
          />
        </div>
        {index !== undefined && (
          <span className="absolute top-4 left-4 text-xs font-bold tracking-widest text-white/70 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        {apartment.count && apartment.count > 1 && (
          <span
            className="absolute top-4 right-4 bg-black/60 text-white text-xs tracking-wider px-3 py-1 rounded-full backdrop-blur-sm"
            data-testid={`badge-count-${apartment.slug}`}
          >
            {apartment.count} апартамента
          </span>
        )}
      </div>

      <div className="w-full md:w-1/2">
        <h3
          className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl mb-4 tracking-tight"
          style={{ color: apartment.accentColor || undefined }}
          data-testid={`text-name-${apartment.slug}`}
        >
          {apartment.name}
        </h3>
        <div className="w-10 h-0.5 bg-primary mb-5" />
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8" data-testid={`text-desc-${apartment.slug}`}>
          {apartment.description}
        </p>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
          {features.map((feature, i) => {
            const Icon = getIcon(feature);
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 text-sm text-foreground/75"
                data-testid={`feature-${apartment.slug}-${i}`}
              >
                <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <span>{feature}</span>
              </div>
            );
          })}
        </div>

        <Button
          onClick={onBook}
          className="tracking-wider text-xs px-7 h-11"
          data-testid={`button-book-${apartment.slug}`}
        >
          ЗАБРОНИРОВАТЬ
        </Button>
      </div>
    </motion.div>
  );
}
