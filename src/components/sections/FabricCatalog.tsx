"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import {
  X, Palette, ArrowRight, ChevronLeft, ChevronRight,
  BookOpen, PhoneCall, Layers, FlaskConical,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import catalogData from "@/data/fabrics.json";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProductSpecs {
  composition: string;
  width: string;
  countryOfOrigin: string;
}

interface Product {
  id: string;
  name: string;
  koreanName: string;
  heroImages: string[];
  swatchImages: string[];
  specs?: ProductSpecs;
}

interface FabricCategory {
  id: string;
  name: string;
  koreanName: string;
  description: string;
  thumbnail: string;
  products: Product[];
}

interface CatalogData {
  fabrics: FabricCategory[];
}

// (No Unsplash fallbacks — real product images are in /images/fabrics/{id}/thumbnail.jpg)

// ─── Main Component ───────────────────────────────────────────────────────────

export function FabricCatalog() {
  const { fabrics } = catalogData as CatalogData;

  // Modal state
  const [openFabric, setOpenFabric] = useState<FabricCategory | null>(null);
// Which product is selected within the modal
  const [productIndex, setProductIndex] = useState(0);
  // Which swatch is selected (stores the selected swatch image URL)
  const [selectedSwatch, setSelectedSwatch] = useState<string | null>(null);
  // Lightbox
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // ── Open / close ──────────────────────────────────────────────────────────

  const openModal = useCallback((fabric: FabricCategory) => {
    setOpenFabric(fabric);
    setProductIndex(0);
    setSelectedSwatch(null);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setOpenFabric(null);
    setSelectedSwatch(null);
    document.body.style.overflow = "";
  }, []);

  // ── Product navigation ────────────────────────────────────────────────────

  const currentProduct = openFabric?.products[productIndex] ?? null;

  const goNext = () => {
    if (!openFabric) return;
    setProductIndex((i) => Math.min(i + 1, openFabric.products.length - 1));
    setSelectedSwatch(null);
  };
  const goPrev = () => {
    setProductIndex((i) => Math.max(i - 1, 0));
    setSelectedSwatch(null);
  };

  // ── Quote URL builder ─────────────────────────────────────────────────────

  const buildQuoteUrl = () => {
    if (!openFabric || !currentProduct) return "/quote";
    const params = new URLSearchParams({
      fabric: `${openFabric.name} – ${currentProduct.name}`,
    });
    if (selectedSwatch) {
      const swatchIdx = (currentProduct.swatchImages ?? []).indexOf(selectedSwatch);
      if (swatchIdx !== -1) {
        params.set("color", `Swatch Card ${swatchIdx + 1}`);
      }
    }
    return `/quote?${params.toString()}`;
  };

  // ── Lightbox slides ───────────────────────────────────────────────────────

  const lightboxSlides = (currentProduct?.swatchImages ?? []).map((src) => ({ src }));

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Page Section ──────────────────────────────────────────────────── */}
      <section
        className="py-20 min-h-screen"
        style={{ background: "linear-gradient(180deg, #FDF8F2 0%, #F5EDE0 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section Header */}
          <AnimatedSection className="text-center mb-14">
            <p className="section-label">Wintopia Collection</p>
            <h1 className="section-title">Fabrics &amp; Colors</h1>
            <div className="section-divider" />
            <p className="section-subtitle mx-auto text-center">
              Browse our premium Korean window blind fabric categories. Click any card to explore
              products, color swatches, and request a personalized quote.
            </p>
          </AnimatedSection>

          {/* ── 9-Category Grid ─────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-7 max-w-4xl mx-auto">
            {fabrics.map((fabric, i) => {
              const hasProducts = fabric.products.length > 0;
              const totalSwatches = fabric.products.reduce((sum, p) => sum + (p.swatchImages?.length ?? 0), 0);

              return (
                <AnimatedSection key={fabric.id} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(74,44,26,0.15)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    onClick={() => openModal(fabric)}
                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-brand-brown/5 shadow-card flex flex-col h-full"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-40 sm:h-52 overflow-hidden bg-brand-cream-dark">
                      <Image
                        src={fabric.thumbnail}
                        alt={`${fabric.name} blinds`}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/50 via-brand-brown/5 to-transparent" />

                      {/* Badge */}
                      <div className="absolute top-3 right-3">
                        {hasProducts ? (
                          <span className="flex items-center gap-1 bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                            <Layers size={9} />
                            {fabric.products.length} {fabric.products.length === 1 ? "product" : "products"}
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 bg-brand-brown/60 text-white/80 text-[10px] px-2 py-1 rounded-full">
                            <BookOpen size={9} />
                            Coming soon
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex flex-col flex-grow">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-brand-brown group-hover:text-brand-orange transition-colors leading-tight">
                        {fabric.name}
                      </h3>
                      <p className="text-brand-orange text-xs font-semibold tracking-wide mt-0.5 mb-2">
                        {fabric.koreanName}
                      </p>
                      <p className="text-brand-gray text-xs leading-relaxed line-clamp-2 flex-grow">
                        {fabric.description}
                      </p>

                      {/* Color count if available */}
                      {totalSwatches > 0 && (
                        <p className="text-brand-olive-dark text-[10px] font-semibold mt-2">
                          <Palette size={10} className="inline mr-1" />
                          {totalSwatches} swatches across {fabric.products.length} product{fabric.products.length !== 1 ? "s" : ""}
                        </p>
                      )}

                      <div className="flex items-center gap-1 mt-3 pt-3 border-t border-brand-brown/5 text-brand-orange text-xs font-semibold">
                        <span>Browse Products</span>
                        <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Category Detail Modal ──────────────────────────────────────────── */}
      <AnimatePresence>
        {openFabric && (
          <motion.div
            key="fabric-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-6"
            style={{ background: "rgba(46,26,14,0.75)", backdropFilter: "blur(8px)" }}
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            <motion.div
              key="fabric-modal-box"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              className="bg-white w-full sm:max-w-4xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[96dvh] sm:max-h-[88vh] rounded-t-3xl"
            >
              {/* ── Modal Header ──────────────────────────────────────────── */}
              <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-brand-brown/8 shrink-0">
                <div>
                  <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-0.5">
                    {openFabric.koreanName}
                  </p>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-brown leading-tight">
                    {openFabric.name}
                  </h2>
                  <p className="text-brand-gray text-sm mt-1.5 max-w-lg leading-relaxed hidden sm:block">
                    {openFabric.description}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="shrink-0 ml-4 w-9 h-9 rounded-full bg-brand-cream hover:bg-brand-orange/15 text-brand-brown hover:text-brand-orange flex items-center justify-center transition-all"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* ── Modal Body ────────────────────────────────────────────── */}
              <div className="flex-grow overflow-y-auto">

                {/* No products — coming soon */}
                {openFabric.products.length === 0 && (
                  <div className="flex flex-col items-center justify-center text-center py-16 px-6 gap-4">
                    <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <Palette size={28} className="text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-brand-brown mb-2">
                        Color samples coming soon
                      </h3>
                      <p className="text-brand-gray text-sm max-w-sm leading-relaxed">
                        Contact us for the full swatch book, or request a free site visit and
                        we&apos;ll bring fabric samples directly to your home.
                      </p>
                    </div>
                    <Link
                      href="/quote"
                      onClick={() => { document.body.style.overflow = ""; }}
                      className="btn-primary text-sm py-3 px-6 mt-2"
                    >
                      <PhoneCall size={15} />
                      Request a Quote
                    </Link>
                  </div>
                )}

                {/* Has products */}
                {openFabric.products.length > 0 && currentProduct && (
                  <div className="flex flex-col lg:flex-row">

                    {/* Left: Hero + Product Nav */}
                    <div className="lg:w-2/5 shrink-0 bg-brand-cream-dark/30 flex flex-col">
                      {/* Hero image */}
                      <div className="relative h-52 sm:h-64 lg:h-72 w-full overflow-hidden">
                        <Image
                          src={currentProduct.heroImages && currentProduct.heroImages.length > 0 ? currentProduct.heroImages[0] : openFabric.thumbnail}
                          alt={`${currentProduct.name} room installation`}
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-[11px] text-white/70 font-medium">{openFabric.name}</p>
                          <h3 className="font-heading font-bold text-lg sm:text-xl leading-tight">
                            {currentProduct.name}
                          </h3>
                          <p className="text-brand-orange-light text-xs mt-0.5">{currentProduct.koreanName}</p>
                        </div>
                      </div>

                      {/* Product tab nav (multiple products in category) */}
                      {openFabric.products.length > 1 && (
                        <div className="px-4 py-3 border-b border-brand-brown/8 shrink-0">
                          <p className="text-xs text-brand-gray font-semibold uppercase tracking-wider mb-2">
                            Products in this category ({openFabric.products.length})
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {openFabric.products.map((p, idx) => (
                              <button
                                key={p.id}
                                onClick={() => { setProductIndex(idx); setSelectedSwatch(null); }}
                                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                                  idx === productIndex
                                    ? "bg-brand-orange text-white border-brand-orange shadow-sm"
                                    : "border-brand-brown/15 text-brand-brown hover:border-brand-orange hover:text-brand-orange"
                                }`}
                              >
                                {p.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Specs */}
                      {currentProduct.specs && (
                        <div className="px-5 py-4 text-xs text-brand-gray space-y-1.5">
                          <p className="font-semibold text-brand-brown text-[11px] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <FlaskConical size={11} className="text-brand-orange" /> Technical Data
                          </p>
                          <div className="flex justify-between">
                            <span className="text-brand-gray">Composition</span>
                            <span className="font-medium text-brand-brown">{currentProduct.specs.composition}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-brand-gray">Width</span>
                            <span className="font-medium text-brand-brown">{currentProduct.specs.width}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-brand-gray">Origin</span>
                            <span className="font-medium text-brand-brown">{currentProduct.specs.countryOfOrigin}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Swatches */}
                    <div className="lg:w-3/5 flex flex-col">
                      <div className="flex-grow overflow-y-auto px-5 py-5">

                        {/* No colors yet */}
                        {(currentProduct.swatchImages ?? []).length === 0 && (
                          <div className="flex flex-col items-center justify-center text-center h-full py-12 gap-3">
                            <Palette size={32} className="text-brand-orange/40" />
                            <p className="text-brand-gray text-sm font-medium">Color samples coming soon</p>
                            <p className="text-brand-gray text-xs max-w-xs">
                              Contact us for the full swatch book, or request a free site visit.
                            </p>
                          </div>
                        )}

                        {/* Color swatches */}
                        {(currentProduct.swatchImages ?? []).length > 0 && (
                          <>
                            <p className="text-xs font-semibold text-brand-brown uppercase tracking-wider mb-3">
                              {currentProduct.name} Swatches — {currentProduct.swatchImages.length} available
                            </p>
                            <p className="text-[11px] text-brand-gray mb-4">
                              Click a swatch card to zoom. Select a swatch to pre-fill your quote.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {currentProduct.swatchImages.map((swatch, idx) => {
                                const isSelected = selectedSwatch === swatch;
                                return (
                                  <button
                                    key={`${swatch}-${idx}`}
                                    onClick={() => {
                                      setSelectedSwatch(swatch);
                                      setLightboxIndex(idx);
                                    }}
                                    className={`group/sw flex flex-col items-center p-2 rounded-xl border-2 transition-all duration-200 text-left ${
                                      isSelected
                                        ? "border-brand-orange bg-brand-orange/5 scale-105 shadow-md"
                                        : "border-brand-brown/8 hover:border-brand-brown/25 bg-white hover:shadow-sm"
                                    }`}
                                  >
                                    {/* Swatch image */}
                                    <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-brand-cream-dark border border-brand-brown/10 mb-2">
                                      <Image
                                        src={swatch}
                                        alt={`${currentProduct.name} Swatch Card ${idx + 1}`}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                        sizes="100px"
                                      />
                                    </div>
                                    <span className="text-[10px] font-bold text-brand-brown leading-tight block text-center">
                                      Swatch Card {idx + 1}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Selected swatch indicator */}
                            {selectedSwatch && (
                              <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-3 bg-brand-cream rounded-xl border border-brand-orange/20 text-sm text-brand-brown flex items-center gap-2"
                              >
                                <div className="relative w-6 h-6 rounded border border-brand-brown/15 overflow-hidden shrink-0">
                                  <Image src={selectedSwatch} alt="Selected swatch" fill className="object-cover" sizes="24px" />
                                </div>
                                <span>
                                  Selected: <strong>Swatch Card {currentProduct.swatchImages.indexOf(selectedSwatch) + 1}</strong>
                                </span>
                              </motion.div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Modal Footer / CTA ────────────────────────────────────── */}
              {openFabric.products.length > 0 && (
                <div className="shrink-0 px-6 py-4 border-t border-brand-brown/8 flex flex-col sm:flex-row gap-3 items-center bg-brand-cream/40">
                  {/* Product prev/next (only for multi-product categories) */}
                  {openFabric.products.length > 1 && (
                    <div className="flex items-center gap-2 sm:mr-auto">
                      <button
                        onClick={goPrev}
                        disabled={productIndex === 0}
                        className="p-1.5 rounded-full border border-brand-brown/15 text-brand-brown hover:border-brand-orange hover:text-brand-orange transition-all disabled:opacity-30"
                        aria-label="Previous product"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <span className="text-xs text-brand-gray font-medium">
                        {productIndex + 1} / {openFabric.products.length}
                      </span>
                      <button
                        onClick={goNext}
                        disabled={productIndex === openFabric.products.length - 1}
                        className="p-1.5 rounded-full border border-brand-brown/15 text-brand-brown hover:border-brand-orange hover:text-brand-orange transition-all disabled:opacity-30"
                        aria-label="Next product"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}

                  <Link
                    href={buildQuoteUrl()}
                    onClick={() => { document.body.style.overflow = ""; }}
                    className="btn-primary flex-1 sm:flex-none justify-center text-sm py-3 px-6"
                  >
                    <PhoneCall size={15} />
                    {selectedSwatch
                      ? `Request Quote — ${currentProduct?.name} / Swatch Card ${(currentProduct?.swatchImages ?? []).indexOf(selectedSwatch) + 1}`
                      : `Request a Quote with this Fabric`}
                  </Link>
                  <button
                    onClick={closeModal}
                    className="btn-outline py-3 px-5 text-sm justify-center"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── YARL Swatch Zoom Lightbox ──────────────────────────────────────── */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={lightboxSlides}
        index={lightboxIndex}
        plugins={[Zoom]}
        styles={{ container: { backgroundColor: "rgba(46,26,14,0.92)" } }}
      />
    </>
  );
}
