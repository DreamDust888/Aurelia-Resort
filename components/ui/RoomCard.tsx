import Image from "next/image";
import type { Room } from "@/lib/data";
import { amenityIcons, amenityLabels } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

interface RoomCardProps {
  room: Room;
  showCategory?: boolean;
  showAmenities?: boolean;
  ctaLabel?: string;
}

export default function RoomCard({
  room,
  showCategory = false,
  showAmenities = false,
  ctaLabel = "View Suite",
}: RoomCardProps) {
  return (
    <article className="group flex flex-col border-b-2 border-transparent bg-white transition-colors duration-500 hover:border-gold">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-charcoal/10" aria-hidden="true" />
        {showCategory && (
          <span className="absolute left-4 top-4 bg-white/90 px-3 py-1 font-inter text-[0.65rem] uppercase tracking-widest text-charcoal">
            {room.category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-1 pt-6">
        <h3 className="font-cormorant text-2xl font-medium text-charcoal">
          {room.name}
        </h3>
        <p className="mt-3 flex-1 font-inter text-sm font-light leading-relaxed text-charcoal/65">
          {room.description}
        </p>

        {showAmenities && (
          <ul className="mt-5 flex flex-wrap gap-4">
            {room.amenities.map((key) => {
              const Icon = amenityIcons[key];
              if (!Icon) return null;
              return (
                <li
                  key={key}
                  className="flex items-center gap-1.5 font-inter text-xs text-charcoal/60"
                >
                  <Icon className="h-4 w-4 text-gold" />
                  <span>{amenityLabels[key]}</span>
                </li>
              );
            })}
          </ul>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-gold/20 pt-5">
          <p className="font-inter text-sm text-charcoal/70">
            from{" "}
            <span className="font-cormorant text-xl text-charcoal">
              ${room.price}
            </span>
            /night
          </p>
          <Button href="/contact" variant="outline" size="sm" tone="gold">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
