"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  galleryImages,
  galleryCategories,
  type GalleryCategory,
} from "@/lib/data";
import {
  PlusIcon,
  CloseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";

type Filter = "All" | GalleryCategory;

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const visible =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((g) => g.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + visible.length) % visible.length
      ),
    [visible.length]
  );

  // Keyboard controls for the lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  const current = lightbox !== null ? visible[lightbox] : null;

  return (
    <div className="mx-auto max-w-7xl">
      {/* Filter tabs */}
      <div
        className="mb-12 flex flex-wrap justify-center gap-3"
        role="tablist"
        aria-label="Filter gallery by category"
      >
        {galleryCategories.map((cat) => {
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

      {/* Masonry via CSS columns */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {visible.map((image, i) => (
          <motion.button
            key={image.src}
            type="button"
            layout
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setLightbox(i)}
            aria-label={`Open image: ${image.alt}`}
            className="group relative block w-full overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={1000}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-gold/0 transition-colors duration-500 group-hover:bg-gold/30">
              <PlusIcon className="h-9 w-9 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 text-white/80 transition-colors hover:text-gold"
            >
              <CloseIcon className="h-8 w-8" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 transition-colors hover:text-gold sm:left-8"
            >
              <ArrowLeftIcon className="h-9 w-9" />
            </button>

            <motion.figure
              key={current.src}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={1600}
                height={1100}
                sizes="100vw"
                className="mx-auto h-auto max-h-[80vh] w-auto object-contain"
              />
              <figcaption className="mt-4 text-center font-inter text-sm tracking-wide text-white/70">
                {current.alt}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 transition-colors hover:text-gold sm:right-8"
            >
              <ArrowRightIcon className="h-9 w-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
