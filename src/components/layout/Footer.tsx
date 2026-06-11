"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Mail, MapPin, ChevronRight } from "lucide-react";
import { SITE_NAME, NAV_LINKS, CONTACT } from "@/lib/constants";

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-brand-brown-dark to-brand-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14">
                <Image src="/logo.png" alt="JS Lux Blinds" fill className="object-contain" />
              </div>
              <div>
                <p className="font-heading font-bold text-xl leading-none">JS LUX</p>
                <p className="text-brand-orange text-xs font-semibold tracking-widest uppercase">BLINDS</p>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Premium custom Korean window blinds. Elegance and style on your windows at an affordable price.
            </p>
            <div className="flex gap-3">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors duration-200"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors duration-200"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-white/65 hover:text-brand-orange transition-colors text-sm"
                  >
                    <ChevronRight size={13} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Our Products</h3>
            <ul className="space-y-2.5 text-sm text-white/65">
              {["Day & Night Korean Blinds", "Blackout Korean Blinds", "Sheer Korean Blinds"].map((p) => (
                <li key={p} className="flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-brand-orange shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Contact Us</h3>
            <div className="space-y-3 text-sm text-white/65">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
                {CONTACT.address}
              </p>
              <a href={`tel:${CONTACT.phone.replace(/\s/g,"")}`} className="flex items-center gap-2.5 hover:text-brand-orange transition-colors">
                <PhoneCall size={16} className="text-brand-orange shrink-0" />
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 hover:text-brand-orange transition-colors">
                <Mail size={16} className="text-brand-orange shrink-0" />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/45 text-xs">
          <p>© {year} {SITE_NAME}. All rights reserved.</p>
          <p>Handcrafted with ❤️ in the Philippines</p>
        </div>
      </div>
    </footer>
  );
}
