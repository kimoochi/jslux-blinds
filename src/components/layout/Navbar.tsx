"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (y) => setIsScrolled(y > 60));
  }, [scrollY]);

  // Header background is solid if scrolled OR we are not on the home page
  const showSolidBg = isScrolled || pathname !== "/";

  return (
    <header
      className={`navbar ${showSolidBg ? "navbar-scrolled" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 shrink-0">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="JS Lux Blinds Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-white font-heading font-bold text-lg leading-none">JS LUX</p>
            <p className="text-brand-orange text-xs font-semibold tracking-widest uppercase">BLINDS</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-brand-orange text-white"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/quote"
            className="btn-primary text-sm py-2.5 px-5"
          >
            <PhoneCall size={15} />
            Get Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-brand-brown border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-brand-orange text-white"
                        : "text-white/85 hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-3 justify-center text-sm"
              >
                <PhoneCall size={15} />
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
