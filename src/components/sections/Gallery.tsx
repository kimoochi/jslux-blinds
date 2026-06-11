"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GALLERY } from "@/lib/constants";

export function Gallery() {
  const [selected, setSelected] = useState<null | (typeof GALLERY)[0]>(null);

  return (
    <section id="gallery" className="py-24" style={{ background: "linear-gradient(180deg, #F5EDE0 0%, #FDF8F2 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Installation Gallery</h2>
          <div className="section-divider" />
          <p className="section-subtitle mx-auto">
            Real Korean blinds installations from our valued clients across Mindanao and Visayas.
          </p>
        </AnimatedSection>

        <div className="gallery-grid">
          {GALLERY.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-card aspect-[4/3]"
                onClick={() => setSelected(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src !== item.fallback) {
                      target.src = item.fallback;
                    }
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white">
                    <ZoomIn size={28} />
                    <span className="text-sm font-semibold">{item.label}</span>
                    {item.location && <span className="text-xs text-white/80">{item.location}</span>}
                  </div>
                </div>
                {/* Always-visible label on mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-brown/70 to-transparent p-3 sm:hidden">
                  <p className="text-white text-xs font-semibold">{item.label}</p>
                  {item.location && <p className="text-white/70 text-xs">{item.location}</p>}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full max-h-[85vh] aspect-[4/3] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-cover"
                sizes="100vw"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.src !== selected.fallback) {
                    target.src = selected.fallback;
                  }
                }}
              />
              <button
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-brand-orange transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">{selected.label}</p>
                {selected.location && <p className="text-white/70 text-sm">{selected.location}</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
