'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const FOOTER_SECTIONS = [
  {
    title: 'AURON watches and accessories',
    links: [
      { label: 'The Art of Time', href: '/collections/art-of-time' },
      { label: 'Apex Tourbillon', href: '/collections/apex-tourbillon' },
      { label: 'Phoenix Crest', href: '/collections/phoenix-crest' },
      { label: 'Ocean Crest', href: '/collections/ocean-crest' },
      { label: 'Stellar Horizon', href: '/collections/stellar-horizon' },
    ],
  },
  {
    title: 'Buying and servicing',
    links: [
      { label: 'Book a Consultation', href: 'mailto:camry2801006@gmail.com' },
      { label: 'Store Locator', href: '#' },
      { label: 'Service Centre', href: '#' },
      { label: 'Warranty & Care', href: '#' },
      { label: 'Servicing', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Watchmaking',
    links: [
      { label: 'Movement Architecture', href: '/craftsmanship' },
      { label: 'Material Selection', href: '/craftsmanship' },
      { label: 'Hand Finishing', href: '/craftsmanship' },
      { label: 'Our Story', href: '/heritage' },
      { label: 'The Manifesto', href: '/heritage' },
      { label: 'Press & Media', href: '/journal' },
    ],
  },
  {
    title: 'Social channels',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com' },
      { label: 'Facebook', href: 'https://www.facebook.com' },
      { label: 'X / Twitter', href: 'https://www.twitter.com' },
      { label: 'YouTube', href: 'https://www.youtube.com' },
      { label: 'Pinterest', href: 'https://www.pinterest.com' },
      { label: 'WeChat & Douyin', href: '#' },
    ],
  },
  {
    title: 'About Auron / Support',
    links: [
      { label: 'Frequently Asked Questions', href: '#' },
      { label: 'File a Report', href: '#' },
      { label: 'Accessibility Statement', href: '#' },
      { label: 'Wallpapers', href: '#' },
      { label: 'Brochures', href: '#' },
    ],
  },
  {
    title: 'Our platforms',
    links: [
      { label: 'Newsroom', href: '/journal' },
      { label: 'Auron.org', href: '#' },
      { label: 'Perpetual Initiatives', href: '#' },
    ],
  },
];

export default function Footer() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [contrastActive, setContrastActive] = useState(false);
  
  // Track open sections on mobile accordion
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <footer
      className="relative overflow-hidden w-full text-white font-sans text-xs tracking-wider"
      style={{
        backgroundColor: '#050a07', // Deep forest black
        borderTop: '1px solid rgba(197, 160, 89, 0.15)', // Light gold border
      }}
    >
      {/* ── 1. Share Row (Top of Footer) ────────────────────────── */}
      <div 
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0"
        style={{ borderBottom: '1px solid rgba(197, 160, 89, 0.08)' }}
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/50">
          Share this page
        </span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/70">
          {['Instagram', 'Facebook', 'X / Twitter', 'LinkedIn', 'Pinterest', 'Weibo'].map((platform, idx) => (
            <React.Fragment key={platform}>
              <a
                href="#"
                className="hover:text-[var(--color-slate-primary)] transition-colors duration-300"
              >
                {platform}
              </a>
              {idx < 5 && <span className="text-white/20 select-none">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── 2. Directory Columns (Upper & Lower Layout) ────────── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        {/* Desktop Layout (Grid with 3 main columns) */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-12 pr-8 border-r border-[rgba(197,160,89,0.08)]">
            {[0, 1].map((idx) => {
              const sec = FOOTER_SECTIONS[idx];
              return (
                <div key={sec.title}>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-slate-primary)] mb-5">
                    {sec.title}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {sec.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[12px] text-white/60 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-12 px-8 border-r border-[rgba(197,160,89,0.08)]">
            {[2, 3].map((idx) => {
              const sec = FOOTER_SECTIONS[idx];
              return (
                <div key={sec.title}>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-slate-primary)] mb-5">
                    {sec.title}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {sec.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[12px] text-white/60 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-12 pl-8">
            {[4, 5].map((idx) => {
              const sec = FOOTER_SECTIONS[idx];
              return (
                <div key={sec.title}>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-slate-primary)] mb-5">
                    {sec.title}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {sec.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[12px] text-white/60 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="flex flex-col md:hidden divide-y divide-[rgba(197,160,89,0.08)]">
          {FOOTER_SECTIONS.map((sec, idx) => {
            const isOpen = !!openSections[idx];
            return (
              <div key={sec.title} className="py-4">
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-slate-primary)]">
                    {sec.title}
                  </span>
                  <span className="text-white/60">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <ul className="flex flex-col gap-3.5 pt-4 pb-2 pl-1">
                        {sec.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="text-[12px] text-white/70 hover:text-white block py-0.5"
                              onClick={() => {
                                // optional: scroll to top or close mobile stuff if wanted
                              }}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 3. Controls Row (Language & Access Options) ────────── */}
      <div 
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-0"
        style={{ borderTop: '1px solid rgba(197, 160, 89, 0.08)' }}
      >
        {/* Language selector */}
        <button 
          className="flex items-center gap-2 text-[11px] font-medium text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <Globe size={13} className="text-[var(--color-slate-primary)]" />
          <span>India (English)</span>
          <ChevronDown size={11} className="text-white/40" />
        </button>

        {/* Accessibility options */}
        <div className="flex items-center gap-6 text-[11px] text-white/60">
          <button 
            onClick={() => setReduceMotion(!reduceMotion)}
            className={`hover:text-white transition-colors duration-200 flex items-center gap-1.5 ${reduceMotion ? 'text-white' : ''}`}
          >
            <span>Reduce motion</span>
            <span className={`w-1.5 h-1.5 rounded-full ${reduceMotion ? 'bg-[var(--color-slate-primary)]' : 'bg-white/20'}`} />
          </button>
          <button 
            onClick={() => setContrastActive(!contrastActive)}
            className={`hover:text-white transition-colors duration-200 flex items-center gap-1.5 ${contrastActive ? 'text-white' : ''}`}
          >
            <span>Contrast active</span>
            <span className={`w-1.5 h-1.5 rounded-full ${contrastActive ? 'bg-[var(--color-slate-primary)]' : 'bg-white/20'}`} />
          </button>
        </div>
      </div>

      {/* ── 4. Legal Row ────────────────────────────────────────── */}
      <div 
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 text-center text-[10px] text-white/40 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-5"
        style={{ borderTop: '1px solid rgba(197, 160, 89, 0.08)' }}
      >
        <span>© {new Date().getFullYear()} AURON. All rights reserved.</span>
        <div className="flex items-center justify-center gap-3">
          {['Terms of use', 'Privacy notice', 'Cookies'].map((label, idx) => (
            <React.Fragment key={label}>
              <a href="#" className="hover:text-white transition-colors duration-200">{label}</a>
              {idx < 2 && <span>·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── 5. Perpetual Initiatives Row (Bottom Banner) ───────── */}
      <div 
        className="w-full text-center py-6 bg-[#030604] border-t border-[rgba(197,160,89,0.05)]"
      >
        <p className="text-[11px] tracking-[0.2em] text-white/50 uppercase">
          Discover our Perpetual Initiatives —{' '}
          <a
            href="#"
            className="text-[var(--color-slate-primary)] hover:text-[var(--color-slate-accent)] font-medium transition-colors duration-200 underline underline-offset-4"
          >
            Visit Auron.org
          </a>
        </p>
      </div>
    </footer>
  );
}
