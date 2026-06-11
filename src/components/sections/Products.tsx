"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PRODUCTS } from "@/lib/constants";

export function Products() {
  return (
    <section id="products" className="py-24" style={{ background: "linear-gradient(180deg, #FDF8F2 0%, #F5EDE0 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Our Product Range</h2>
          <div className="section-divider" />
          <p className="section-subtitle mx-auto text-center">
            Premium custom Korean window blinds (Zebra / Combi blinds) tailored precisely to your windows&apos; dimensions for style and light control.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {PRODUCTS.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card group h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src !== product.fallbackImage) {
                        target.src = product.fallbackImage;
                      }
                    }}
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-xl text-brand-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <Link
                    href="/quote"
                    className="mt-5 btn-outline text-sm py-2.5 justify-center"
                  >
                    Request a Quote
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
