'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const COLLECTIONS = [
  { name: 'The Art of Time', href: '/collections/art-of-time' },
  { name: 'Apex Tourbillon', href: '/collections/apex-tourbillon' },
  { name: 'Phoenix Crest', href: '/collections/phoenix-crest' },
  { name: 'Ocean Crest', href: '/collections/ocean-crest' },
  { name: 'Stellar Horizon', href: '/collections/stellar-horizon' },
];

const NAV_LINKS = [
  { label: 'Collections', href: '/collections', hasDropdown: true },
  { label: 'Craftsmanship', href: '/craftsmanship', hasDropdown: false },
  { label: 'Heritage', href: '/heritage', hasDropdown: false },
  { label: 'Boutiques', href: '/boutiques', hasDropdown: false },
  { label: 'Journal', href: '/journal', hasDropdown: false },
];

const LEFT_NAV_LINKS = [
  { label: 'Collections', href: '/collections', hasDropdown: true },
  { label: 'Craftsmanship', href: '/craftsmanship', hasDropdown: false },
  { label: 'Heritage', href: '/heritage', hasDropdown: false },
];

const RIGHT_NAV_LINKS = [
  { label: 'Boutiques', href: '/boutiques', hasDropdown: false },
  { label: 'Journal', href: '/journal', hasDropdown: false },
  { label: 'Consultation', href: 'mailto:camry2801006@gmail.com', hasDropdown: false, isCTA: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 sm:px-12 md:px-20 transition-all duration-500 h-16 sm:h-20 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/[0.05]'
            : 'bg-transparent border-b border-white/[0.02]'
        }`}
      >
        {/* Left Side Navigation (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {LEFT_NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative flex items-center justify-center h-full"
              ref={link.hasDropdown ? dropdownRef : undefined}
              onMouseEnter={link.hasDropdown ? handleDropdownEnter : undefined}
              onMouseLeave={link.hasDropdown ? handleDropdownLeave : undefined}
            >
              <Link
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className="flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-[0.25em] uppercase transition-colors duration-300 text-white/60 hover:text-[var(--color-slate-primary)] relative py-2"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown
                    size={11}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>

              {/* Collections Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-black/95 backdrop-blur-2xl border border-white/[0.08] rounded-xl p-2 shadow-2xl shadow-black/80 z-50"
                    >
                      {/* Arrow */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/95 border-t border-l border-white/[0.08] rotate-45" />

                      {COLLECTIONS.map((collection, ci) => (
                        <Link
                          key={collection.href}
                          href={collection.href}
                          id={`nav-collection-${ci}`}
                          className="block px-4 py-2.5 rounded-lg text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-[var(--color-slate-primary)] hover:bg-white/[0.03] transition-all duration-200 font-medium text-left"
                        >
                          {collection.name}
                        </Link>
                      ))}

                      <div className="h-px bg-white/[0.06] my-1.5 mx-3" />

                      <Link
                        href="/collections"
                        className="block px-4 py-2.5 rounded-lg text-[10px] tracking-[0.2em] uppercase text-[var(--color-slate-primary)] hover:text-white hover:bg-white/[0.03] transition-all duration-200 font-medium text-left"
                      >
                        View All Collections
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Absolute Centered Logo (Desktop & Mobile) */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-2.5 group h-full z-20" id="nav-logo">
          <div className="flex items-center justify-center w-7 h-7 flex-shrink-0">
            <svg
              width="22"
              height="22"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z"
                fill="url(#logo-gradient)"
              />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="256" y2="256">
                  <stop offset="0%" stopColor="var(--color-slate-accent)" />
                  <stop offset="50%" stopColor="var(--color-slate-primary)" />
                  <stop offset="100%" stopColor="var(--color-steel-accent)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-xl font-playfair italic tracking-[0.2em] shimmer-text flex-shrink-0">
            AURON
          </span>
        </Link>

        {/* Right Side Navigation (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {RIGHT_NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className={`text-[11px] font-semibold tracking-[0.25em] uppercase transition-colors duration-300 py-2 ${
                link.isCTA
                  ? 'text-[var(--color-slate-primary)] hover:text-white border-b border-[var(--color-slate-primary)]/40 hover:border-white/85 transition-all'
                  : 'text-white/60 hover:text-[var(--color-slate-primary)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Toggle Button (Mobile Only) */}
        <div className="lg:hidden absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30">
          <button
            id="nav-mobile-toggle"
            className="text-white/80 hover:text-[var(--color-slate-primary)] transition-colors p-2 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 pt-20"
          >
            <div className="flex flex-col items-center justify-center gap-6 w-full px-4">
              {NAV_LINKS.map((link, i) => (
                <div key={link.label} className="flex flex-col items-center justify-center w-full">
                  {link.hasDropdown ? (
                    <>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="flex items-center justify-center gap-2 text-xl font-light text-white/70 hover:text-[var(--color-slate-primary)] transition-colors tracking-widest uppercase"
                        onClick={() => setMobileCollectionsOpen(!mobileCollectionsOpen)}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            mobileCollectionsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {mobileCollectionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center justify-center gap-3 mt-4 overflow-hidden w-full"
                          >
                            {COLLECTIONS.map((collection, ci) => (
                              <motion.div
                                key={collection.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: ci * 0.04 }}
                              >
                                <Link
                                  href={collection.href}
                                  className="text-sm text-white/40 hover:text-[var(--color-slate-primary)] transition-colors tracking-wider"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {collection.name}
                                </Link>
                              </motion.div>
                            ))}
                            <Link
                              href="/collections"
                              className="text-xs text-[var(--color-slate-primary)]/60 hover:text-[var(--color-slate-primary)] transition-colors tracking-wider mt-2 uppercase font-semibold"
                              onClick={() => setMobileOpen(false)}
                            >
                              View All →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        className="text-xl font-light text-white/70 hover:text-[var(--color-slate-primary)] transition-colors tracking-widest uppercase"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.4 }}
            >
              <Link
                href="mailto:camry2801006@gmail.com"
                className="inline-block text-xs font-semibold tracking-wider uppercase px-8 py-3 rounded-full bg-gradient-to-r from-[var(--color-slate-primary)] to-[var(--color-steel-accent)] text-black"
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
