'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const MILESTONES = [
  {
    year: '1891',
    title: 'The Founding Vision',
    desc: 'Elias Auron, a master watchmaker from the Vallée de Joux, establishes his first atelier in a converted farmhouse. His singular belief: that a watch should outlive its maker.',
  },
  {
    year: '1924',
    title: 'The First Tourbillon',
    desc: 'After 33 years of development, AURON unveils its first in-house tourbillon — only the fourth manufacture in history to achieve this. Twelve pieces are made; eleven survive.',
  },
  {
    year: '1953',
    title: 'Racing Partnership',
    desc: 'A partnership with the Scuderia Renata racing team transforms AURON\'s chronograph division. Timing the 24 Hours of Le Mans, our movements are exposed to conditions that redefine our engineering standards.',
  },
  {
    year: '1971',
    title: 'The Perpetual Calendar',
    desc: 'AURON\'s Caliber PC-71 introduces a perpetual calendar that accounts for leap years until 2100 without manual correction — an achievement that earns us the Grand Prix de Genève.',
  },
  {
    year: '1989',
    title: 'Meteoric Expansion',
    desc: 'The collection expands to include our first meteorite-dial model — the Stellar Proto — fashioned from a Gibeon iron meteorite. Limited to 12 pieces, it creates a waiting list that still exists today.',
  },
  {
    year: '2008',
    title: 'The Aquatic Chapter',
    desc: 'A collaboration with the oceanographer Dr. Mira Solène results in the first Ocean Crest prototype — a dive watch rated to 1,000 metres. The technology filters into our consumer collection four years later.',
  },
  {
    year: '2016',
    title: 'Silicon Revolution',
    desc: 'AURON patents a proprietary silicon escapement wheel that eliminates the need for lubrication, extending service intervals from 5 years to 15 and increasing accuracy by a factor of three.',
  },
  {
    year: '2024',
    title: 'The Modern Era',
    desc: 'AURON launches its most ambitious collection yet — five distinct expressions of horological mastery, each a synthesis of the company\'s 133 years of accumulated knowledge.',
  },
];

const VALUES = [
  { title: 'Patience', desc: 'We reject arbitrary deadlines. An AURON collection takes as long as it must — never a day less.' },
  { title: 'Honesty', desc: 'We never claim a mechanical function we have not achieved. Every specification is independently verified.' },
  { title: 'Legacy', desc: 'Every watch must be serviceable in 100 years. We design for the grandchildren of our clients, not quarterly targets.' },
  { title: 'Rarity', desc: 'Production is capped — not by market strategy, but by the number of master watchmakers who meet our standards.' },
];

export default function HeritagePage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#050505] text-white min-h-screen">

        {/* Hero */}
        <section
          className="relative pt-40 pb-28 sm:pt-52 sm:pb-36 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #000 0%, #080808 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{ backgroundImage: 'radial-gradient(circle at 35% 60%, #c5a059 0%, transparent 65%)' }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
            <motion.p
              className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-slate-primary)]/70 mb-5 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Since 1891
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl font-playfair italic text-white leading-[0.93] mb-8"
              style={{ letterSpacing: '-0.03em' }}
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              A legacy written<br />
              <span className="shimmer-text">in seconds</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-white/50 max-w-lg mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              For over 133 years, AURON has pursued a single aspiration: to craft timepieces that transcend their era. Our history is not a marketing story — it is a living testament, ticking on the wrists of collectors across seven generations.
            </motion.p>
          </div>
        </section>

        {/* Values Strip */}
        <section style={{ background: '#060606', borderTop: '1px solid rgba(197,160,89,0.08)', borderBottom: '1px solid rgba(197,160,89,0.08)' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2"
              >
                <h4 className="text-sm font-semibold text-[var(--color-slate-primary)] tracking-wide">{v.title}</h4>
                <p className="text-xs text-white/45 font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 sm:py-36" style={{ background: '#0a0a0a' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-slate-primary)]/70 mb-4 font-medium">Our Journey</p>
              <h2 className="text-4xl sm:text-5xl font-playfair italic" style={{ letterSpacing: '-0.03em' }}>
                133 years of<br /><span className="shimmer-text">milestones</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden sm:block"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(197,160,89,0.2), transparent)' }}
              />

              <div className="flex flex-col gap-12 sm:gap-16">
                {MILESTONES.map((milestone, i) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    className={`relative flex flex-col sm:flex-row gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`w-full sm:w-[calc(50%-40px)] ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                      <span
                        className="inline-block text-4xl font-playfair italic mb-3"
                        style={{ color: 'rgba(197,160,89,0.5)' }}
                      >
                        {milestone.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-medium text-white mb-2">{milestone.title}</h3>
                      <p className="text-sm text-white/50 font-light leading-relaxed">{milestone.desc}</p>
                    </div>

                    {/* Dot */}
                    <div className="hidden sm:flex absolute left-1/2 top-3 -translate-x-1/2 items-center justify-center">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: 'var(--color-slate-primary)', boxShadow: '0 0 12px rgba(197,160,89,0.4)' }}
                      />
                    </div>

                    {/* Empty half */}
                    <div className="hidden sm:block w-[calc(50%-40px)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing quote */}
        <section
          className="py-28 sm:py-36 text-center"
          style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)' }}
        >
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <motion.blockquote
              className="text-2xl sm:text-4xl font-playfair italic text-white/80 leading-relaxed mb-8"
              style={{ letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              "A watch that stops is already dead. A watch that endures becomes history."
            </motion.blockquote>
            <motion.p
              className="text-xs text-[var(--color-slate-primary)]/70 tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              — Elias Auron, founder, 1891
            </motion.p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
