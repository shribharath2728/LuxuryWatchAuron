'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const CATEGORIES = ['All', 'Watchmaking', 'Events', 'Collecting', 'Heritage', 'Racing'];

const ARTICLES = [
  {
    id: 1,
    category: 'Watchmaking',
    date: 'June 18, 2026',
    readTime: '8 min read',
    title: 'The Silicon Escapement: Engineering the Future of Accuracy',
    excerpt: 'Our R&D director, Dr. Claude Merkel, explains why silicon is the most transformative material in watchmaking since stainless steel — and how AURON\'s proprietary geometry took six years to perfect.',
    featured: true,
  },
  {
    id: 2,
    category: 'Events',
    date: 'June 10, 2026',
    readTime: '4 min read',
    title: 'Watches & Wonders Geneva 2026: AURON Unveils Three New References',
    excerpt: 'At this year\'s most prestigious horological gathering, AURON presented three new additions to the Apex Tourbillon family — including the first double-axis tourbillon the manufacture has ever produced.',
    featured: false,
  },
  {
    id: 3,
    category: 'Collecting',
    date: 'June 3, 2026',
    readTime: '12 min read',
    title: 'A Collector\'s Guide to the AURON Phoenix Crest: The First Decade',
    excerpt: 'The Phoenix Crest turned ten this year. We trace its evolution across three generations of case materials, dial treatments, and movement upgrades — and identify the references that will define the next decade of auctions.',
    featured: false,
  },
  {
    id: 4,
    category: 'Heritage',
    date: 'May 27, 2026',
    readTime: '10 min read',
    title: 'Rediscovered: The 1953 AURON Chronograph That Timed Le Mans',
    excerpt: 'A barn find in Normandy revealed an original AURON Racing Chronograph — one of only three known examples — worn by a Scuderia Renata driver at the 1953 24 Hours of Le Mans. We examine the watch that started everything.',
    featured: false,
  },
  {
    id: 5,
    category: 'Racing',
    date: 'May 14, 2026',
    readTime: '6 min read',
    title: 'Beyond the Pit Lane: How Motorsport Shapes Every AURON Movement',
    excerpt: 'The demands of endurance racing — extreme vibration, G-forces, temperature swings — have influenced every caliber AURON has ever built. We go inside the testing chamber where our movements face conditions no office will ever replicate.',
    featured: false,
  },
  {
    id: 6,
    category: 'Watchmaking',
    date: 'April 29, 2026',
    readTime: '9 min read',
    title: 'Anglage: The Art of Bevelling Invisible to the Naked Eye',
    excerpt: 'A 45° chamfer, polished to a mirror finish, on an edge no wider than a hair. Our master finisher, Théodore Voss, demonstrates the technique that takes five years to learn — and a lifetime to perfect.',
    featured: false,
  },
  {
    id: 7,
    category: 'Heritage',
    date: 'April 15, 2026',
    readTime: '7 min read',
    title: 'The Gibeon Meteorite: How We Source the Cosmos for Our Dials',
    excerpt: 'Our partnership with a small team of geologists in Namibia gives us exclusive access to the only known source of Gibeon meteorite certified for watchmaking use. We trace the journey from desert to dial.',
    featured: false,
  },
  {
    id: 8,
    category: 'Collecting',
    date: 'March 30, 2026',
    readTime: '5 min read',
    title: 'What to Look for When Inspecting a Pre-Owned AURON',
    excerpt: 'Our chief watchmaker outlines the ten points every prospective buyer should examine — from movement condition to case geometry — before acquiring an AURON from the secondary market.',
    featured: false,
  },
  {
    id: 9,
    category: 'Events',
    date: 'March 12, 2026',
    readTime: '3 min read',
    title: 'AURON at the Dubai International Yacht Show 2026',
    excerpt: 'The Ocean Crest takes centre stage as AURON partners with the world\'s premier marine lifestyle event — presenting a new titanium and enamel variant exclusively to attendees.',
    featured: false,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Watchmaking: '#c5a059',
  Events: '#6fa8c9',
  Collecting: '#a89ec9',
  Heritage: '#c9a059',
  Racing: '#e87040',
};

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);
  const filteredRest = selectedCategory === 'All'
    ? rest
    : rest.filter((a) => a.category === selectedCategory);

  return (
    <>
      <Navigation />
      <main className="bg-[#050505] text-white min-h-screen">

        {/* Hero */}
        <section
          className="relative pt-40 pb-20 sm:pt-52 sm:pb-24 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #000 0%, #080808 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 60%, #c5a059 0%, transparent 65%)' }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
            <motion.p
              className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-slate-primary)]/70 mb-5 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The AURON Journal
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl font-playfair italic text-white leading-[0.93] mb-8"
              style={{ letterSpacing: '-0.03em' }}
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              Stories of<br />
              <span className="shimmer-text">precision</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-white/50 max-w-lg mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Dispatches from the atelier: in-depth features on watchmaking, collecting, heritage, and the world of endurance sport.
            </motion.p>
          </div>
        </section>

        {/* Featured Article */}
        {featured && (
          <section className="py-16" style={{ background: '#070707' }}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-slate rounded-3xl p-10 sm:p-14 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.04] rounded-3xl"
                  style={{ background: 'radial-gradient(circle at 80% 20%, #c5a059, transparent 60%)' }}
                />
                <div className="relative z-10 max-w-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[8px] tracking-[0.3em] uppercase font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(197,160,89,0.15)', color: '#c5a059' }}>
                      Featured
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-slate-primary)]/60 font-medium">{featured.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-playfair italic text-white leading-tight mb-5" style={{ letterSpacing: '-0.02em' }}>
                    {featured.title}
                  </h2>
                  <p className="text-sm text-white/55 font-light leading-relaxed mb-8 max-w-xl">{featured.excerpt}</p>
                  <div className="flex items-center gap-6 text-xs text-white/40 mb-8">
                    <div className="flex items-center gap-2"><Calendar size={12} /><span>{featured.date}</span></div>
                    <div className="flex items-center gap-2"><Clock size={12} /><span>{featured.readTime}</span></div>
                  </div>
                  <button className="group flex items-center gap-2 text-sm font-semibold text-[var(--color-slate-primary)] hover:text-white transition-colors duration-300">
                    <span>Read Article</span>
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-20 sm:py-28" style={{ background: '#0a0a0a' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-14">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[10px] tracking-[0.25em] uppercase font-semibold px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'border-[var(--color-slate-primary)] text-[var(--color-slate-primary)] bg-[var(--color-slate-primary)]/10'
                      : 'border-white/10 text-white/50 hover:border-white/25 hover:text-white/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredRest.map((article, i) => (
                  <motion.article
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group glass-slate rounded-2xl p-7 flex flex-col gap-5 hover:bg-[var(--color-slate-primary)]/[0.04] transition-all duration-500 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[8px] tracking-[0.2em] uppercase font-bold px-2.5 py-1 rounded-full"
                        style={{
                          background: `${CATEGORY_COLORS[article.category] || '#c5a059'}15`,
                          color: CATEGORY_COLORS[article.category] || '#c5a059',
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-playfair italic text-white leading-tight group-hover:text-[var(--color-slate-primary)] transition-colors duration-300" style={{ letterSpacing: '-0.01em' }}>
                      {article.title}
                    </h3>
                    <p className="text-xs text-white/50 font-light leading-relaxed flex-1">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                      <div className="flex items-center gap-4 text-[10px] text-white/35">
                        <div className="flex items-center gap-1.5"><Calendar size={10} /><span>{article.date}</span></div>
                        <div className="flex items-center gap-1.5"><Clock size={10} /><span>{article.readTime}</span></div>
                      </div>
                      <ArrowRight size={14} className="text-[var(--color-slate-primary)]/40 group-hover:text-[var(--color-slate-primary)] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
