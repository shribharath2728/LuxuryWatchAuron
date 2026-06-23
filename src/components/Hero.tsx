'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const VIDEO_SRC = '/Luxury_watch_with_car_logo_202606161948.mp4';

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: '100dvh' }}
      id="hero"
    >
      {/* Layer 1: Base video — dark + desaturated */}
      <div
        className="absolute inset-0 z-10 hero-zoom"
        style={{
          background: 'radial-gradient(circle, #1c2026 0%, #080808 100%)',
        }}
      >
        <video
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.80) saturate(1.5) contrast(1.3)',
          }}
        />
      </div>

      {/* Layer 2: Cinematic grain overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 4: Interactive Content Container */}
      <div className="absolute inset-0 z-50 flex flex-col justify-between pt-24 pb-6 sm:pb-8 px-6 sm:px-12 md:px-20 pointer-events-none">
        
        {/* Top spacer / header alignment */}
        <div className="h-0 sm:h-4" />

        {/* Center: Heading & Subtitle */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            {/* Tagline */}
            <p 
              className="text-[12px] sm:text-[13px] tracking-[0.5em] uppercase text-[var(--color-slate-primary)] mb-4 sm:mb-6 font-bold"
              style={{
                textShadow: '0 0 15px rgba(197, 160, 89, 0.4)',
              }}
            >
              Haute Horlogerie · Est. 2024
            </p>
          </motion.div>
   
          <h1 className="text-white leading-[0.92] text-center">
            <motion.span
              className="block font-playfair italic font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl"
              style={{ 
                letterSpacing: '-0.02em',
                textShadow: '0 0 30px rgba(197, 160, 89, 0.3), 0 4px 12px rgba(0,0,0,0.8)',
              }}
              initial={{ opacity: 0, y: 40, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            >
              Precision meets
            </motion.span>
            <motion.span
              className="block font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl -mt-1 sm:-mt-2 shimmer-text"
              style={{ letterSpacing: '-0.06em' }}
              initial={{ opacity: 0, y: 40, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.62 }}
            >
              performance
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="mt-4 sm:mt-6 text-xs sm:text-base text-white max-w-md font-medium tracking-wide drop-shadow-lg"
            style={{
              textShadow: '0 3px 10px rgba(0,0,0,0.8)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Timepieces forged at the intersection of speed and elegance
          </motion.p>
        </div>

        {/* Bottom Panel (Left description, Center Scroll, Right CTA) */}
        <div className="w-full flex flex-col sm:flex-row items-end justify-between gap-6">
          {/* Bottom-left paragraph */}
          <motion.div
            className="hidden md:block max-w-xs text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-8 h-px bg-gradient-to-r from-[var(--color-slate-primary)] to-transparent mb-4" />
            <p className="text-[12px] text-white/70 leading-relaxed font-light">
              Every AURON timepiece embodies the spirit of automotive excellence —
              crafted with obsessive detail to capture the thrill of the open road
              and the elegance of precision engineering.
            </p>
          </motion.div>

          {/* Center scroll indicator */}
          <motion.div
            className="hidden sm:flex flex-col items-center gap-2 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="text-[9px] tracking-[0.3em] uppercase text-white/40 font-medium">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ChevronDown size={14} className="text-white/40" />
            </motion.div>
          </motion.div>

          {/* Bottom-right block & CTA */}
          <motion.div
            className="w-full sm:w-auto max-w-xs flex flex-col items-start sm:items-end gap-3 pointer-events-auto text-left sm:text-right ml-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hidden sm:block w-8 h-px bg-gradient-to-l from-[var(--color-slate-primary)] to-transparent mb-1" />
            <p className="text-[11px] text-white/70 leading-relaxed font-light hidden sm:block">
              Discover our exclusive collection where exotic materials, mechanical
              mastery, and racing heritage combine.
            </p>
            <button
              id="hero-cta"
              onClick={() => {
                const showcase = document.getElementById('showcase');
                if (showcase) showcase.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative overflow-hidden bg-gradient-to-r from-[var(--color-slate-primary)] to-[var(--color-steel-accent)] text-black text-xs font-bold px-7 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-slate-primary)]/20 hover:scale-[1.03] active:scale-95 cursor-pointer w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-slate-accent)] to-[var(--color-slate-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </div>

      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Bottom gradient for content readability */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] z-[35] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)',
        }}
      />
    </section>
  );
}
