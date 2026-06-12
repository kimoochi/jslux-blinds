"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, PhoneCall, Eye } from "lucide-react";
import { SITE_TAGLINE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Elegant window blinds in a luxury living room"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/88 via-brand-brown/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 via-transparent to-transparent" />
      </div>

      {/* Decorative circle accents */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full border border-brand-orange/20 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-32 right-32 w-48 h-48 rounded-full border border-brand-olive/20 hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center lg:items-end gap-12">
        <div className="flex-1 text-center lg:text-left">
          {/* Eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-olive font-semibold text-sm tracking-widest uppercase mb-4"
          >
            ✦ Custom Korean Window Blinds ✦
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hero-title mb-6"
          >
            Elegance &amp; Style
            <br />
            <span className="shimmer-text">On Your Windows</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/80 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {SITE_TAGLINE} Affordable price without compromising quality.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/quote"
              className="btn-primary text-base px-7 py-4"
            >
              <PhoneCall size={18} />
              Get a Free Quote
            </Link>
            <Link
              href="/fabrics"
              className="btn-secondary text-base px-7 py-4"
            >
              <Eye size={18} />
              View Products
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-5 justify-center lg:justify-start mt-10"
          >
            {[
              { num: "500+", label: "Happy Clients" },
              { num: "100+", label: "Fabric Options" },
              { num: "100%", label: "Custom Made"    },
              { num: "5★",   label: "Rating"         },
            ].map((badge) => (
              <div key={badge.label} className="text-center">
                <p className="text-brand-orange font-heading font-bold text-2xl leading-none">{badge.num}</p>
                <p className="text-white/60 text-xs mt-0.5">{badge.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right side feature card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden lg:block"
        >
          <div
            className="w-72 rounded-2xl p-5 float-animation"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            {[
              "✓ Premium Korean Fabric Quality",
              "✓ Made-to-Measure Custom Sizing",
              "✓ Professional Installation",
              "✓ Manufacturer's Warranty",
              "✓ Affordable Pricing",
            ].map((item) => (
              <p key={item} className="text-white/85 text-sm py-1.5 border-b border-white/10 last:border-0">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="/about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">About Us</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </Link>
    </section>
  );
}
