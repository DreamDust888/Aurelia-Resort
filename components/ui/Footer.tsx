import Link from "next/link";
import { navLinks, siteInfo } from "@/lib/data";
import {
  InstagramIcon,
  FacebookIcon,
  PinterestIcon,
} from "@/components/ui/Icons";
import GoldDivider from "@/components/ui/GoldDivider";

const exploreLinks = navLinks.filter((l) => l.href !== "/");

const contactLinks = [
  { label: siteInfo.phone, href: `tel:${siteInfo.phone.replace(/\s/g, "")}` },
  { label: siteInfo.email, href: `mailto:${siteInfo.email}` },
  { label: "WhatsApp", href: `https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, "")}` },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Pinterest", href: "https://pinterest.com", Icon: PinterestIcon },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* Resort name */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-3 font-inter text-xs uppercase tracking-widest text-gold">
            {siteInfo.tagline}
          </p>
          <h2 className="font-cormorant text-5xl font-light text-gold sm:text-6xl">
            {siteInfo.name}
          </h2>
          <GoldDivider className="mt-8" />
        </div>

        {/* 3-column links */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <h3 className="mb-5 font-inter text-xs uppercase tracking-widest text-gold">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/70 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-inter text-xs uppercase tracking-widest text-gold">
              Contact
            </h3>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-white/70 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-inter text-xs uppercase tracking-widest text-gold">
              Visit
            </h3>
            <address className="font-inter text-sm not-italic leading-relaxed text-white/70">
              {siteInfo.address}
            </address>
            <ul className="mt-6 flex gap-4">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-colors duration-300 hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="font-inter text-xs tracking-wide text-white/40">
            © {siteInfo.established}–2026 {siteInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
