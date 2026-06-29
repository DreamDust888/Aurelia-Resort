import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import { img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through Aurelia Resort & Spa — pools, suites, dining, the forest spa and the coast.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        image={img("1540541338287-41700207dee6", 2000)}
        imageAlt="Poolside loungers in the afternoon sun"
        eyebrow="Imagery"
        title="The Gallery"
        size="short"
      />

      <section className="bg-off-white px-6 py-28 lg:py-32">
        <GalleryGrid />
      </section>
    </>
  );
}
