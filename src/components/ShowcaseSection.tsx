'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VIDEO_SRC = '/Luxury_watch_with_car_logo_202606161948.mp4';

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
      id="showcase"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header with parallax - properly centered */}
        <motion.div
          className="flex justify-center mb-12 sm:mb-16 md:mb-20"
          style={{ y: textY }}
        >
          <div className="text-center w-full">
            <motion.p
              className="text-[12px] sm:text-[13px] tracking-[0.5em] uppercase text-[var(--color-slate-primary)]/85 mb-4 font-bold"
              style={{
                textShadow: '0 0 10px rgba(197, 160, 89, 0.3)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              The Collection
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair italic text-white leading-[1.05] tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Born from the
              <br />
              <span className="shimmer-text">art of speed</span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Showcase Video with parallax - full width, no overflow on mobile */}
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ borderRadius: '0px' }}
        >
          <motion.div
            className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden"
            style={{ y: videoY }}
          >
            <video
              src={VIDEO_SRC}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                filter: 'brightness(0.88) contrast(1.3) saturate(1.5)',
              }}
            />
            {/* Video overlay gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, transparent 30%, transparent 70%, rgba(10,10,10,0.8) 100%)',
              }}
            />
          </motion.div>

          {/* Overlay text on video - properly aligned */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 lg:p-16 z-10 w-full">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
              <div className="flex-1 min-w-0">
                <motion.h3
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair italic text-white mb-2 break-words font-bold drop-shadow-xl"
                  style={{
                    textShadow: '0 0 20px rgba(197, 160, 89, 0.3), 0 2px 8px rgba(0,0,0,0.8)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  AURON GT Chronograph
                </motion.h3>
              <motion.p
                  className="text-xs sm:text-sm text-white/95 font-medium max-w-md break-words drop-shadow-md"
                  style={{
                    textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Forged carbon case · Sapphire crystal · Self-winding caliber
                </motion.p>
              </div>

              <motion.button
                className="w-full sm:w-auto flex-shrink-0 border border-[var(--color-slate-primary)]/40 text-[var(--color-slate-primary)] text-sm font-medium px-8 py-3 rounded-full hover:bg-[var(--color-slate-primary)]/10 hover:border-[var(--color-slate-primary)]/60 transition-all duration-300 hover:scale-[1.03] active:scale-95 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                id="showcase-cta"
              >
                View Details
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats strip - proper column distribution and center alignment */}
        <motion.div
          className="mt-14 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { value: '120m', label: 'Water Resistance' },
            { value: '72h', label: 'Power Reserve' },
            { value: '41mm', label: 'Case Diameter' },
            { value: '< 300', label: 'Pieces Worldwide' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center">
              <p 
                className="text-2xl sm:text-3xl md:text-4xl font-playfair italic text-white/98 tracking-tight leading-none font-bold drop-shadow-md"
                style={{
                  textShadow: '0 0 10px rgba(197, 160, 89, 0.25)',
                }}
              >
                {stat.value}
              </p>
              <p 
                className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-white/70 mt-2 sm:mt-3 font-bold"
                style={{
                  textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
