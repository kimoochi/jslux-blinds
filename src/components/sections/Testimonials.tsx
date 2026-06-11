"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote as QuoteIcon } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #4A2C1A 0%, #6B3F25 50%, #4A2C1A 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full border border-white/5 translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="section-label" style={{ color: "#B5C334" }}>Testimonials</p>
          <h2 className="section-title" style={{ color: "white" }}>What Our Clients Say</h2>
          <div className="section-divider" />
          <p className="section-subtitle mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            Don&apos;t just take our word for it — hear from our happy clients across Metro Manila.
          </p>
        </AnimatedSection>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/15 max-w-3xl mx-auto"
            >
              {/* Quote icon */}
              <QuoteIcon size={36} className="text-brand-orange mb-5 opacity-75" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < TESTIMONIALS[current].rating ? "#F59E0B" : "none"}
                    className={i < TESTIMONIALS[current].rating ? "text-yellow-400" : "text-white/30"}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-white/90 text-lg leading-relaxed mb-7 font-light italic">
                &ldquo;{TESTIMONIALS[current].review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-white text-lg">
                    {TESTIMONIALS[current].name}
                  </p>
                  <p className="text-white/50 text-sm">{TESTIMONIALS[current].location}</p>
                </div>
                <span className="bg-brand-orange/20 text-brand-orange text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-orange/30">
                  {TESTIMONIALS[current].product}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-10 w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange border border-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-10 w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange border border-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2.5 justify-center mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-brand-orange"
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
