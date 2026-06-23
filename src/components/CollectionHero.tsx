'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface CollectionHeroProps {
  videoSrc: string;
  collectionName: string;
  tagline: string;
  description: string;
  accentColor?: string;
}

export default function CollectionHero({
  videoSrc,
  collectionName,
  tagline,
  description,
  accentColor = '#c9a84c',
}: CollectionHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsLoaded(true));
    }
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: '100dvh' }}
      id="collection-hero"
    >
      {/* Video Background */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: `radial-gradient(circle, ${accentColor}18 0%, #050505 100%)`,
        }}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.85) saturate(1.6) contrast(1.4) hue-rotate(0deg)',
          }}
        />
      </motion.div>

      {/* Cinematic grain overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Back button */}
      <motion.div
        className="absolute top-24 left-6 sm:left-10 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link
          href="/collections"
          className="group flex items-center gap-2.5 text-white/40 hover:text-white/80 transition-colors duration-300"
        >
          <div className="w-9 h-9 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white/[0.06]">
            <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          </div>
          <span className="text-xs tracking-[0.2em] uppercase font-medium hidden sm:inline">
            All Collections
          </span>
        </Link>
      </motion.div>

      {/* Center content */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-6">
        {/* Tagline */}
        <motion.p
          className="text-[11px] sm:text-[13px] tracking-[0.55em] uppercase font-bold mb-5 sm:mb-7 letter-spacing"
          style={{ 
            color: accentColor,
            textShadow: `0 0 25px ${accentColor}60, 0 2px 8px rgba(0,0,0,0.8)`,
            letterSpacing: '0.55em',
            fontWeight: '800',
          }}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {tagline}
        </motion.p>

        {/* Collection Name */}
        <motion.h1
          className="font-playfair italic text-white leading-[0.92] drop-shadow-2xl"
          initial={{ opacity: 0, y: 50, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
        >
          <span
            className="block text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem]"
            style={{ 
              letterSpacing: '-0.02em',
              color: '#ffffff',
              textShadow: `
                0 0 40px ${accentColor}80,
                0 0 25px ${accentColor}60,
                0 4px 16px rgba(0,0,0,0.9),
                0 8px 32px rgba(0,0,0,0.8)`,
              fontWeight: '700',
            }}
          >
            {collectionName}
          </span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          className="mt-7 sm:mt-9 h-px w-16 sm:w-20"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />

        {/* Description */}
        <motion.p
          className="mt-5 sm:mt-7 text-sm sm:text-base text-white max-w-lg font-medium tracking-wide leading-relaxed"
          style={{
            textShadow: '0 3px 10px rgba(0,0,0,0.9)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          {description}
        </motion.p>

        {/* CTA */}
        <motion.a
          href="mailto:camry2801006@gmail.com"
          className="mt-8 sm:mt-10 group relative overflow-hidden text-sm font-semibold px-9 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03] active:scale-95 inline-block text-center"
          style={{
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}99)`,
            color: '#000',
            boxShadow: `0 0 30px ${accentColor}20`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          id="collection-hero-cta"
        >
          <span className="relative z-10">Book Private Viewing</span>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-medium">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-white/50" />
        </motion.div>
      </motion.div>

      {/* Vignette */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%] z-[25] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
        }}
      />
    </section>
  );
}
