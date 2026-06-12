"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import fabricsData from "@/data/fabrics.json";
import type { FabricsData, FabricCategory } from "@/types/fabric";
import FabricModal from "./FabricModal";

const data = fabricsData as FabricsData;

export default function FabricsSection() {
  const [activeCategory, setActiveCategory] = useState<FabricCategory | null>(null);

  return (
    <section id="fabrics" className="bg-[#FBF7F2] py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#E8763C] font-semibold uppercase tracking-widest text-sm mb-2">
            Wintopia Collection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A2C1A] mb-3">
            Fabrics &amp; Colors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tap a fabric type to browse every finish and color available for that style —
            straight from our Korean supplier&apos;s catalog.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {data.fabrics.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow text-left bg-white animate-fade-in"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={cat.thumbnail}
                  alt={cat.name}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C1A]/80 via-[#4A2C1A]/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-4 text-left">
                <p className="text-[#B5C334] text-xs font-semibold tracking-wide">
                  {cat.koreanName}
                </p>
                <h3 className="text-white font-serif text-lg sm:text-xl font-bold leading-tight">
                  {cat.name}
                </h3>
                <p className="text-white/80 text-xs mt-1">
                  {cat.products.length} {cat.products.length === 1 ? "design" : "designs"}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {activeCategory && (
        <FabricModal category={activeCategory} onClose={() => setActiveCategory(null)} />
      )}
    </section>
  );
}
