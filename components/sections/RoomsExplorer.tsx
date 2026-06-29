"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { rooms, roomCategories, type RoomCategory } from "@/lib/data";
import RoomCard from "@/components/ui/RoomCard";

type Filter = "All" | RoomCategory;

export default function RoomsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();

  const visible =
    filter === "All" ? rooms : rooms.filter((r) => r.category === filter);

  return (
    <div className="mx-auto max-w-7xl">
      {/* Filter row */}
      <div
        className="mb-14 flex flex-wrap justify-center gap-3"
        role="tablist"
        aria-label="Filter rooms by category"
      >
        {roomCategories.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(cat)}
              className={`border px-6 py-2.5 font-inter text-xs uppercase tracking-widest transition-colors duration-300 ${
                active
                  ? "border-gold bg-gold text-white"
                  : "border-charcoal/20 text-charcoal/70 hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((room) => (
            <motion.div
              key={room.slug}
              layout
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <RoomCard
                room={room}
                showCategory
                showAmenities
                ctaLabel="Reserve"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
