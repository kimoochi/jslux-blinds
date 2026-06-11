"use client";

import { MapPin, PhoneCall, Mail, Clock } from "lucide-react";

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CONTACT } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="section-label">Find Us</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
          <p className="section-subtitle mx-auto">
            Visit our showroom, give us a call, or send us a message — we&apos;re happy to help you find the perfect blinds.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            <div className="bg-brand-cream rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand-orange" />
                </div>
                <div>
                  <p className="font-semibold text-brand-brown text-sm mb-0.5">Address</p>
                  <p className="text-brand-gray text-sm">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <PhoneCall size={20} className="text-brand-orange" />
                </div>
                <div>
                  <p className="font-semibold text-brand-brown text-sm mb-0.5">Phone</p>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g,"")}`} className="text-brand-gray text-sm hover:text-brand-orange transition-colors">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand-orange" />
                </div>
                <div>
                  <p className="font-semibold text-brand-brown text-sm mb-0.5">Email</p>
                  <a href={`mailto:${CONTACT.email}`} className="text-brand-gray text-sm hover:text-brand-orange transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-brand-orange" />
                </div>
                <div>
                  <p className="font-semibold text-brand-brown text-sm mb-0.5">Business Hours</p>
                  <p className="text-brand-gray text-sm">{CONTACT.hoursWeekday}</p>
                  <p className="text-brand-gray text-sm">{CONTACT.hoursWeekend}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-brand-cream rounded-2xl p-6">
              <p className="font-semibold text-brand-brown text-sm mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 flex-1 bg-white rounded-xl px-4 py-3 text-brand-brown hover:bg-brand-orange hover:text-white transition-all duration-200 shadow-sm text-sm font-medium"
                >
                  <FacebookIcon size={18} />
                  Facebook
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 flex-1 bg-white rounded-xl px-4 py-3 text-brand-brown hover:bg-brand-orange hover:text-white transition-all duration-200 shadow-sm text-sm font-medium"
                >
                  <InstagramIcon size={18} />
                  Instagram
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Google Map */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-card h-[420px]">
              <iframe
                src={CONTACT.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JS Lux Blinds Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
