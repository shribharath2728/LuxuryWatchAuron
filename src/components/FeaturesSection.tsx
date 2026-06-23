'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Diamond, Gauge, Shield } from 'lucide-react';

const FEATURES = [
  {
    icon: Diamond,
    title: 'Exotic Materials',
    description:
      'Forged carbon, grade-5 titanium, and sapphire crystal — every component is sourced for perfection.',
    stat: '47',
    statLabel: 'Components',
  },
  {
    icon: Gauge,
    title: 'Racing Precision',
    description:
      'Chronograph movements accurate to 1/100th of a second, born from the world of motorsport.',
    stat: '28,800',
    statLabel: 'VPH Movement',
  },
  {
    icon: Shield,
    title: 'Lifetime Heritage',
    description:
      'Each timepiece carries a lifetime warranty and a story — handcrafted by master artisans.',
    stat: '∞',
    statLabel: 'Year Warranty',
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 sm:py-40 overflow-hidden"
      id="features"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)' }}
    >
      {/* Parallax background element */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, var(--color-slate-primary), transparent 70%)',
          }}
        />
      </motion.div>

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8" style={{ opacity }}>
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-28">
          <motion.p
            className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-slate-primary)]/70 mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            The AURON Difference
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-playfair italic text-white leading-[1.05]"
            style={{ letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            Crafted beyond
            <br />
            <span className="text-gold-gradient">measure</span>
          </motion.h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true, margin: '-80px' }}
                className="group relative p-8 sm:p-10 rounded-2xl glass-slate hover:bg-[var(--color-slate-primary)]/[0.06] transition-all duration-500 cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-slate-primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-slate-primary)]/20 transition-colors duration-500">
                  <Icon size={22} className="text-[var(--color-slate-primary)]" strokeWidth={1.5} />
                </div>

                {/* Stat */}
                <div className="mb-5">
                  <span className="text-4xl sm:text-5xl font-playfair italic text-white/90 tracking-tight">
                    {feature.stat}
                  </span>
                  <span className="block text-[10px] tracking-[0.3em] uppercase text-[var(--color-slate-primary)]/60 mt-1 font-medium">
                    {feature.statLabel}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed font-light">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-3 right-3 w-8 h-px bg-[var(--color-slate-primary)]/20" />
                  <div className="absolute top-3 right-3 w-px h-8 bg-[var(--color-slate-primary)]/20" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
