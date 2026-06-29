import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import GoldDivider from "@/components/ui/GoldDivider";
import Button from "@/components/ui/Button";
import { experienceIcons } from "@/components/ui/Icons";
import { img, experiences, spaTreatments, spaHighlightImage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experiences & Spa",
  description:
    "Spa rituals, coastal adventures, sunrise yoga and cultural journeys — curated experiences at Aurelia Resort & Spa.",
};

export default function ExperiencesPage() {
  return (
    <>
      <Hero
        image={img("1545389336-cf090694435e", 2000)}
        imageAlt="Yoga pavilion at sunrise above the sea"
        eyebrow="Curated Journeys"
        title="Experiences & Spa"
        subtitle="Moments designed to restore body, mind and spirit."
        size="full"
        overlay={0.4}
        parallax
        scrollIndicator
      />

      {/* 4-section experience layout */}
      <section className="bg-white px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="The Aurelia Collection"
              title="Ways to Wander"
              className="mb-16"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {experiences.map((exp, i) => {
              const Icon = experienceIcons[exp.icon];
              return (
                <AnimatedSection
                  key={exp.title}
                  delay={(i % 2) * 0.12}
                  as="article"
                  className="group flex flex-col border-b-2 border-transparent transition-colors duration-500 hover:border-gold sm:flex-row sm:gap-7"
                >
                  <div className="relative h-56 w-full overflow-hidden sm:h-44 sm:w-56 sm:flex-shrink-0">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 224px"
                      className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col pt-5 sm:pt-1">
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="h-7 w-7 text-gold" />}
                      <h3 className="font-cormorant text-2xl font-medium text-charcoal">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="mt-3 flex-1 font-inter text-sm font-light leading-relaxed text-charcoal/65">
                      {exp.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="border border-gold/40 px-3 py-1 font-inter text-[0.65rem] uppercase tracking-widest text-gold">
                        {exp.duration}
                      </span>
                      <Button
                        href="/contact"
                        variant="ghost"
                        tone="dark"
                        size="sm"
                      >
                        Enquire
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Spa highlight — split image + treatment menu */}
      <section className="bg-off-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
          <AnimatedSection className="relative min-h-[400px] lg:min-h-[640px]">
            <Image
              src={spaHighlightImage}
              alt="The Forest Spa treatment room"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </AnimatedSection>

          <AnimatedSection
            delay={0.15}
            className="flex flex-col justify-center px-6 py-20 lg:px-16"
          >
            <SectionHeader
              eyebrow="The Forest Spa"
              title="A Sanctuary Within the Sanctuary"
              align="left"
              subtitle="Our signature treatments draw on Mediterranean botanicals and the rhythm of the sea."
            />
            <ul className="mt-10 divide-y divide-gold/20 border-y border-gold/20">
              {spaTreatments.map((t) => (
                <li
                  key={t.name}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <div>
                    <p className="font-cormorant text-lg text-charcoal">
                      {t.name}
                    </p>
                    <p className="font-inter text-xs uppercase tracking-widest text-charcoal/50">
                      {t.duration}
                    </p>
                  </div>
                  <span className="font-cormorant text-lg text-gold">
                    ${t.price}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/contact" variant="outline" tone="gold" size="md">
                Book a Treatment
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
