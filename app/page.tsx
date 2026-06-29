import Image from "next/image";
import Hero from "@/components/sections/Hero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import GoldDivider from "@/components/ui/GoldDivider";
import Button from "@/components/ui/Button";
import RoomCard from "@/components/ui/RoomCard";
import { experienceStripIcons } from "@/components/ui/Icons";
import {
  heroImage,
  siteInfo,
  stats,
  featuredRooms,
  experienceStrip,
  diningTeaserImage,
  galleryImages,
  testimonials,
} from "@/lib/data";

const mosaic = galleryImages.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero
        image={heroImage}
        imageAlt="Infinity pool overlooking the Mediterranean at Aurelia Resort & Spa"
        eyebrow="Welcome To"
        title={siteInfo.name}
        subtitle={siteInfo.tagline}
        size="full"
        overlay={0.35}
        parallax
        scrollIndicator
      >
        <Button href="/rooms" variant="outline" tone="light" size="lg">
          Explore Rooms
        </Button>
        <Button href="/contact" variant="filled" tone="gold" size="lg">
          Book a Stay
        </Button>
      </Hero>

      {/* 2 — Introduction */}
      <section className="bg-white px-6 py-28 lg:py-36">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="Our Philosophy"
            title="A Sanctuary Crafted for the Discerning Traveller"
            subtitle="Set within twelve acres of Mediterranean gardens, Aurelia is a study in quiet luxury — where architecture, nature and service dissolve into a single, restorative experience."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-cormorant text-5xl font-light text-charcoal sm:text-6xl">
                  {stat.value}
                </dt>
                <dd className="mt-3 font-inter text-xs uppercase tracking-widest text-gold">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>

        <GoldDivider className="mt-20" />
      </section>

      {/* 3 — Featured Rooms */}
      <section className="bg-off-white px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Accommodation"
              title="Suites & Residences"
              subtitle="Each of our forty-eight rooms is composed around light, stone and the sea."
              className="mb-16"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room, i) => (
              <AnimatedSection key={room.slug} delay={i * 0.12}>
                <RoomCard room={room} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 flex justify-center">
            <Button href="/rooms" variant="outline" tone="dark" size="md">
              View All Rooms
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 — Experience Strip */}
      <section className="bg-charcoal px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
            {experienceStrip.map((exp, i) => {
              const Icon = experienceStripIcons[exp.icon];
              return (
                <AnimatedSection
                  key={exp.label}
                  delay={i * 0.1}
                  className="flex flex-col items-center text-center"
                >
                  {Icon && <Icon className="h-10 w-10 text-gold" />}
                  <p className="mt-5 font-inter text-sm uppercase tracking-widest text-white">
                    {exp.label}
                  </p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 — Dining Teaser */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
          <AnimatedSection className="relative min-h-[360px] lg:min-h-[600px]">
            <Image
              src={diningTeaserImage}
              alt="The Terrace restaurant interior at Aurelia Resort & Spa"
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
              eyebrow="Culinary Artistry"
              title="Farm-to-Table, Field-to-Glass"
              align="left"
              subtitle="Our kitchens are led by the seasons and the soil. Produce is grown within the estate, fish is landed each morning, and every glass is poured with intention — a celebration of the coast on every plate."
            />
            <div className="mt-10">
              <Button href="/dining" variant="outline" tone="gold" size="md">
                Explore Dining
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6 — Gallery Mosaic */}
      <section className="bg-off-white px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Moments"
              title="A Glimpse of Aurelia"
              className="mb-16"
            />
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-2 gap-4 md:h-[640px] md:grid-cols-4 md:grid-rows-2">
            {mosaic.map((image, i) => {
              // First and last images span two rows for a mosaic rhythm
              const tall = i === 0 || i === 5 ? "md:row-span-2" : "";
              return (
                <a
                  key={image.src}
                  href="/gallery"
                  className={`group relative block overflow-hidden aspect-square md:aspect-auto md:h-full ${tall}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gold/0 transition-colors duration-500 group-hover:bg-gold/40">
                    <span className="font-cormorant text-5xl text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      +
                    </span>
                  </div>
                </a>
              );
            })}
          </AnimatedSection>

          <AnimatedSection className="mt-16 flex justify-center">
            <Button href="/gallery" variant="outline" tone="dark" size="md">
              View Full Gallery
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* 7 — Testimonials */}
      <section className="bg-white px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Guest Voices"
              title="Cherished Reflections"
              className="mb-16"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection
                key={t.name}
                delay={i * 0.12}
                as="article"
                className="flex flex-col border border-gold/20 px-8 py-10"
              >
                <span
                  className="font-cormorant text-6xl leading-none text-gold"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="mt-4 flex-1 font-cormorant text-xl font-light italic leading-relaxed text-charcoal/80">
                  {t.quote}
                </p>
                <footer className="mt-8">
                  <p className="font-inter text-sm font-medium text-charcoal">
                    {t.name}
                  </p>
                  <p className="font-inter text-xs uppercase tracking-widest text-gold">
                    {t.location}
                  </p>
                </footer>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — CTA Banner */}
      <section className="bg-taupe px-6 py-28 lg:py-32">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="font-cormorant text-4xl font-light text-white sm:text-5xl">
            Your Perfect Escape Awaits
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-inter text-base font-light text-white/80">
            Reserve your suite today and receive complimentary spa access for the
            duration of your stay.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="outline" tone="light" size="lg">
              Book Now
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
