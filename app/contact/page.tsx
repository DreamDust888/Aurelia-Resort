import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ReservationForm from "@/components/sections/ReservationForm";
import { PhoneIcon, MailIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { img, siteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Reserve your stay at Aurelia Resort & Spa. Reach our team by phone, email or WhatsApp, or request a reservation online.",
};

const details = [
  {
    Icon: PinIcon,
    label: "Address",
    value: siteInfo.address,
    href: undefined,
  },
  {
    Icon: PhoneIcon,
    label: "Telephone",
    value: siteInfo.phone,
    href: `tel:${siteInfo.phone.replace(/\s/g, "")}`,
  },
  {
    Icon: MailIcon,
    label: "Email",
    value: siteInfo.email,
    href: `mailto:${siteInfo.email}`,
  },
  {
    Icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Message us directly",
    href: `https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, "")}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        image={img("1455587734955-081b22074882", 2000)}
        imageAlt="The elegant lobby of Aurelia Resort & Spa"
        eyebrow="Reservations"
        title="Contact & Reservations"
        subtitle="We would be delighted to welcome you."
        size="short"
      />

      <section className="bg-white px-6 py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — resort info */}
          <AnimatedSection>
            <SectionHeader
              eyebrow="Get in Touch"
              title="Begin Your Journey"
              align="left"
              subtitle="Our reservations team is available around the clock to craft your perfect stay."
            />

            <ul className="mt-10 space-y-7">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-gold/40 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-inter text-xs uppercase tracking-widest text-charcoal/50">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-inter text-base text-charcoal transition-colors hover:text-gold"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-inter text-base text-charcoal">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Map */}
            <div className="mt-12 aspect-[16/10] w-full overflow-hidden border border-gold/20">
              <iframe
                title="Map to Aurelia Resort & Spa"
                src="https://www.google.com/maps?q=Amalfi%20Coast%20Italy&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          {/* Right — reservation form */}
          <AnimatedSection delay={0.15}>
            <div className="border border-gold/20 bg-off-white p-8 lg:p-10">
              <h2 className="mb-2 font-cormorant text-3xl font-light text-charcoal">
                Request a Reservation
              </h2>
              <p className="mb-8 font-inter text-sm font-light text-charcoal/60">
                Complete the form below and we will confirm availability within 24
                hours.
              </p>
              <ReservationForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
