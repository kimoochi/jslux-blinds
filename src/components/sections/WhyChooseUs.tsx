"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { WHY_CHOOSE_US } from "@/lib/constants";
import {
  BadgeCheck,
  Ruler,
  Wallet,
  Wrench,
  ShieldCheck,
  Palette,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BadgeCheck,
  Ruler,
  Wallet,
  Wrench,
  ShieldCheck,
  Palette,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] -z-0 hidden lg:block"
        style={{
          background: "radial-gradient(circle at 80% 50%, #E8763C 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="section-label">Why JS Lux Blinds</p>
          <h2 className="section-title">The JS Lux Difference</h2>
          <div className="section-divider" />
          <p className="section-subtitle mx-auto">
            We combine Korean quality craftsmanship with local service expertise to give you an unmatched blind-buying experience.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group p-7 rounded-2xl border-2 border-brand-cream-dark hover:border-brand-orange/30 transition-all duration-300 bg-brand-cream hover:shadow-card h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange/20 transition-colors">
                    <Icon size={26} className="text-brand-orange" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
