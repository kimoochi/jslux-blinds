"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Award, Users, Layers } from "lucide-react";

const STATS = [
  { icon: Users,  value: "500+", label: "Happy Clients" },
  { icon: Award,  value: "5+",   label: "Years Experience" },
  { icon: Layers, value: "100+", label: "Fabric Options" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(74,44,26,0.2)] aspect-[4/5] max-w-md mx-auto lg:mx-0">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                    alt="JS Lux Blinds showroom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                {/* Image decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-4 lg:-right-8 bg-brand-orange text-white rounded-2xl px-6 py-4 shadow-xl"
              >
                <p className="font-heading font-bold text-3xl leading-none">100%</p>
                <p className="text-xs font-semibold uppercase tracking-wider mt-1 text-white/80">Custom Made</p>
              </motion.div>

              {/* Decorative dot pattern */}
              <div
                className="absolute -top-5 -left-5 w-36 h-36 opacity-30 -z-10"
                style={{
                  backgroundImage: "radial-gradient(circle, #E8763C 1.5px, transparent 1.5px)",
                  backgroundSize: "18px 18px",
                }}
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right" delay={0.15}>
            <p className="section-label">Our Story</p>
            <h2 className="section-title mb-5">
              Korean Craftsmanship,<br />Filipino Heart
            </h2>
            <div className="section-divider" style={{ margin: "0 0 1.5rem 0" }} />

            <p className="text-brand-gray leading-relaxed mb-4">
              JS Lux Blinds was founded with a single mission: to bring the precision and elegance of Korean window blinds to Filipino homes and offices — without the premium price tag.
            </p>
            <p className="text-brand-gray leading-relaxed mb-4">
              We source our materials directly from Korea&apos;s top blind manufacturers, known for their superior fabric quality, UV protection technology, and flawless mechanisms that stand the test of time.
            </p>
            <p className="text-brand-gray leading-relaxed mb-8">
              Whether you&apos;re furnishing a cozy bedroom, a chic living room, or a professional office, our team of skilled installers ensures a perfect fit and a beautiful finish every time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-brand-cream"
                >
                  <stat.icon size={20} className="text-brand-orange mx-auto mb-2" />
                  <p className="font-heading font-bold text-2xl text-brand-brown">{stat.value}</p>
                  <p className="text-xs text-brand-gray mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
