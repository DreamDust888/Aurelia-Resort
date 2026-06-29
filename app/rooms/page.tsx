import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import RoomsExplorer from "@/components/sections/RoomsExplorer";
import { img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Forty-eight rooms, suites and private villas composed around light, stone and the Mediterranean sea.",
};

export default function RoomsPage() {
  return (
    <>
      <Hero
        image={img("1582719508461-905c673771fd", 2000)}
        imageAlt="Garden Suite terrace overlooking the gardens"
        eyebrow="Accommodation"
        title="Rooms & Suites"
        size="short"
      />

      <section className="bg-off-white px-6 py-28 lg:py-32">
        <RoomsExplorer />
      </section>
    </>
  );
}
