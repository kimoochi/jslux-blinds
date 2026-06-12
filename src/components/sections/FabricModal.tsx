"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { FabricCategory, FabricProduct } from "@/types/fabric";

interface FabricModalProps {
  category: FabricCategory;
  onClose: () => void;
}

function requestQuote(categoryName: string, productName: string) {
  // Scroll to the quote form and pre-fill the fabric/product name
  const form = document.getElementById("quote-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
    const fabricField = document.querySelector<HTMLInputElement>(
      'input[name="fabric"], textarea[name="message"]'
    );
    if (fabricField) {
      const label = `${categoryName} - ${productName}`;
      if (fabricField.tagName === "TEXTAREA") {
        fabricField.value = fabricField.value
          ? `${fabricField.value}\nInterested fabric: ${label}`
          : `Interested fabric: ${label}`;
      } else {
        fabricField.value = label;
      }
      fabricField.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }
}

function ProductBlock({
  category,
  product,
  onOpenLightbox,
}: {
  category: FabricCategory;
  product: FabricProduct;
  onOpenLightbox: (images: string[], index: number) => void;
}) {
  const allImages = [...product.heroImages, ...product.swatchImages];

  return (
    <div className="border-b border-[#4A2C1A]/10 pb-8 mb-8 last:border-0 last:mb-0 last:pb-0">
      <h4 className="font-serif text-xl font-bold text-[#4A2C1A]">{product.name}</h4>
      <p className="text-sm text-[#B5C334] font-semibold mb-4">{product.koreanName}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Hero image(s) */}
        <div className="sm:w-1/2 flex flex-col gap-3">
          {product.heroImages.map((img, i) => (
            <button
              key={img}
              onClick={() => onOpenLightbox(allImages, i)}
              className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-sm hover:opacity-90 transition"
            >
              <Image
                src={img}
                alt={`${product.name} installed`}
                fill
                unoptimized
                className="object-cover"
                sizes="50vw"
              />
            </button>
          ))}
        </div>

        {/* Swatch image(s) */}
        <div className="sm:w-1/2 flex flex-col gap-3">
          {product.swatchImages.map((img, i) => (
            <button
              key={img}
              onClick={() => onOpenLightbox(allImages, product.heroImages.length + i)}
              className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-sm hover:opacity-90 transition"
            >
              <Image
                src={img}
                alt={`${product.name} color swatches`}
                fill
                unoptimized
                className="object-cover"
                sizes="50vw"
              />
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => requestQuote(category.name, product.name)}
        className="mt-4 inline-flex items-center gap-2 bg-[#E8763C] hover:bg-[#d6692f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
      >
        <Phone size={16} />
        Request a Quote with this Fabric
      </button>
    </div>
  );
}

export default function FabricModal({ category, onClose }: FabricModalProps) {
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const hasProducts = category.products.length > 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-[150] flex items-center justify-center p-2 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-[#4A2C1A]/10">
            <div>
              <p className="text-[#E8763C] text-xs font-semibold tracking-widest uppercase">
                {category.koreanName}
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#4A2C1A]">
                {category.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FBF7F2] hover:bg-[#f0e9e0] transition"
              aria-label="Close"
            >
              <X size={18} className="text-[#4A2C1A]" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6">
            <p className="text-gray-600 mb-6">{category.description}</p>

            {hasProducts ? (
              category.products.map((product) => (
                <ProductBlock
                  key={product.id}
                  category={category}
                  product={product}
                  onOpenLightbox={(images, index) => {
                    setLightboxImages(images);
                    setLightboxIndex(index);
                  }}
                />
              ))
            ) : (
              <div className="text-center py-10">
                <h4 className="font-serif text-lg font-bold text-[#4A2C1A] mb-2">
                  Color samples coming soon
                </h4>
                <p className="text-gray-500 text-sm mb-4">
                  Contact us for the full swatch book, or request a free site visit and
                  we&apos;ll bring fabric samples directly to your home.
                </p>
                <button
                  onClick={() => requestQuote(category.name, category.name)}
                  className="inline-flex items-center gap-2 bg-[#E8763C] hover:bg-[#d6692f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                >
                  <Phone size={16} />
                  Request a Quote with this Fabric
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {lightboxImages && (
        <Lightbox
          open
          close={() => setLightboxImages(null)}
          index={lightboxIndex}
          slides={lightboxImages.map((src) => ({ src }))}
        />
      )}
    </AnimatePresence>
  );
}
