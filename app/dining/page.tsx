import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SplitFeature from "@/components/sections/SplitFeature";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import GoldDivider from "@/components/ui/GoldDivider";
import Button from "@/components/ui/Button";
import { img, restaurants, menuHighlights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dining",
  description:
    "Two restaurants, one philosophy — farm-to-table Mediterranean cuisine and fire-kissed small plates on the Amalfi Coast.",
};

export default function DiningPage() {
  return (
    <>
      <Hero
        image={img("1414235077428-338989a2e8c0", 2000)}
        imageAlt="Candlelit dining table set for the evening"
        eyebrow="Gastronomy"
        title="Dining at Aurelia"
        subtitle="Two restaurants guided by the seasons and the soil."
        size="short"
      />

      {/* Restaurant features — alternating split layout */}
      <section className="bg-white py-12 lg:py-20">
        {restaurants.map((restaurant, i) => (
          <div key={restaurant.name} className={i > 0 ? "mt-12 lg:mt-20" : ""}>
            <SplitFeature
              image={restaurant.image}
              imageAlt={`${restaurant.name} at Aurelia Resort & Spa`}
              eyebrow={restaurant.eyebrow}
              title={restaurant.name}
              body={restaurant.description}
              reverse={i % 2 === 1}
            >
              <Button href="/contact" variant="outline" tone="gold" size="md">
                Reserve a Table
              </Button>
            </SplitFeature>
          </div>
        ))}
      </section>

      <GoldDivider />

      {/* Menu preview */}
      <section className="bg-off-white px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="From the Kitchen"
              title="Seasonal Highlights"
              subtitle="A glimpse of the menu — changing with each harvest."
              className="mb-16"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {menuHighlights.map((dish, i) => (
              <AnimatedSection
                key={dish.name}
                delay={(i % 3) * 0.1}
                as="article"
                className="flex flex-col border border-gold/20 bg-white px-8 py-9"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-cormorant text-xl font-medium text-charcoal">
                    {dish.name}
                  </h3>
                  <span className="font-cormorant text-lg text-gold">
                    ${dish.price}
                  </span>
                </div>
                <p className="mt-3 font-inter text-sm font-light leading-relaxed text-charcoal/65">
                  {dish.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-taupe px-6 py-28 lg:py-32">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="font-cormorant text-4xl font-light text-white sm:text-5xl">
            Reserve Your Table
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-inter text-base font-light text-white/80">
            Whether a long lunch on The Terrace or evening cocktails at Ember
            Lounge, our team will tailor every detail.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="outline" tone="light" size="lg">
              Make a Reservation
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
