'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const COLLECTIONS = [
  {
    slug: 'art-of-time',
    name: 'The Art of Time',
    tagline: 'Craftsmanship Redefined',
    description: 'Where centuries of horological mastery meet contemporary artistry.',
    video: '/videos/art-of-time.mp4',
    accent: '#c5a059',
  },
  {
    slug: 'apex-tourbillon',
    name: 'Apex Tourbillon',
    tagline: 'The Pinnacle of Precision',
    description: 'The most complex movement ever conceived, housed in pure elegance.',
    video: '/videos/apex-tourbillon.mp4',
    accent: '#c5a059',
  },
  {
    slug: 'phoenix-crest',
    name: 'Phoenix Crest',
    tagline: 'Forged in Fire',
    description: 'Born from the crucible of motorsport, reborn as wearable art.',
    video: '/videos/phoenix-crest.mp4',
    accent: '#e87040',
  },
  {
    slug: 'ocean-crest',
    name: 'Ocean Crest',
    tagline: 'Depths Conquered',
    description: 'Engineered for the abyss. Refined for the surface.',
    video: '/videos/ocean-crest.mp4',
    accent: '#4a9ec9',
  },
  {
    slug: 'stellar-horizon',
    name: 'Stellar Horizon',
    tagline: 'Beyond the Atmosphere',
    description: 'Cosmic precision for those who reach beyond the known.',
    video: '/videos/stellar-horizon.mp4',
    accent: '#9b8ec9',
  },
];

function CollectionCard({
  collection,
  index,
}: {
  collection: (typeof COLLECTIONS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-full overflow-hidden rounded-3xl ${
        index % 2 === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'
      }`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/collections/${collection.slug}`}
        className="block relative w-full h-full group"
        id={`collection-card-${collection.slug}`}
      >
        {/* Video Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            y,
            background: `radial-gradient(circle at center, ${collection.accent}20 0%, #050505 100%)`,
          }}
        >
          <video
            src={collection.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-all duration-700"
            style={{
              filter: isHovered
                ? 'brightness(0.85) saturate(1.5) contrast(1.3)'
                : 'brightness(0.65) saturate(1.3) contrast(1.2)',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'filter 0.7s ease, transform 0.7s ease',
            }}
          />
        </motion.div>

        {/* Border glow on hover */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500 z-20"
          style={{
            border: `1px solid ${collection.accent}`,
            opacity: isHovered ? 0.3 : 0,
          }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-all duration-500"
          style={{
            background: isHovered
              ? 'linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.9) 70%)'
              : 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%)',
          }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 md:p-12 z-30">
          {/* Tagline */}
          <motion.p
            className="text-[11px] sm:text-[12px] tracking-[0.5em] uppercase font-bold mb-4"
            style={{ 
              color: isHovered ? collection.accent : collection.accent,
              textShadow: isHovered 
                ? `0 0 20px ${collection.accent}60, 0 2px 6px rgba(0,0,0,0.8)`
                : `0 2px 4px rgba(0,0,0,0.6), 0 0 10px ${collection.accent}40`,
              letterSpacing: '0.5em',
            }}
            transition={{ duration: 0.3 }}
          >
            {collection.tagline}
          </motion.p>

          {/* Name */}
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl font-playfair italic mb-3 leading-tight"
            style={{
              color: isHovered ? collection.accent : '#ffffffee',
              textShadow: isHovered 
                ? `0 0 40px ${collection.accent}80, 0 4px 12px rgba(0,0,0,0.9), 0 0 20px ${collection.accent}40`
                : `0 2px 6px rgba(0,0,0,0.7), 0 0 15px ${collection.accent}30`,
              fontWeight: '700',
              letterSpacing: isHovered ? '0.03em' : '0.01em',
              textTransform: 'uppercase',
              wordSpacing: '0.1em',
            }}
            transition={{ duration: 0.3 }}
          >
            {collection.name}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-sm font-medium max-w-md mb-6 leading-relaxed"
            style={{
              color: isHovered ? '#ffffffff' : '#ffffffdd',
              textShadow: isHovered 
                ? '0 3px 8px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.5)'
                : '0 2px 6px rgba(0,0,0,0.7)',
            }}
            transition={{ duration: 0.3 }}
          >
            {collection.description}
          </motion.p>

          {/* Explore link */}
          <motion.div
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300"
            style={{
              color: isHovered ? collection.accent : collection.accent,
              textShadow: isHovered
                ? `0 0 15px ${collection.accent}60`
                : `0 2px 4px rgba(0,0,0,0.6)`,
            }}
            whileHover={{ letterSpacing: '0.05em' }}
          >
            <span>Explore</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300"
              style={{
                transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
              }}
            />
          </motion.div>
        </div>

        {/* Collection number */}
        <div className="absolute top-6 right-7 sm:top-8 sm:right-10 z-30">
          <span className="text-6xl sm:text-7xl md:text-8xl font-playfair italic text-white/[0.04] leading-none">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CollectionsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.p
            className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-slate-primary)]/70 mb-5 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Collections
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-playfair italic text-white leading-[0.95]"
            style={{ letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            A legacy written
            <br />
            <span className="shimmer-text">in precision</span>
          </motion.h1>
          <motion.p
            className="mt-6 sm:mt-8 text-sm sm:text-base text-white/35 max-w-xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Five distinct expressions of horological mastery. Each collection
            embodies a unique philosophy, crafted for those who demand
            the extraordinary.
          </motion.p>
        </div>
      </section>

      {/* Collections Grid */}
      <section
        className="relative pb-24 sm:pb-32"
        style={{ background: '#0a0a0a' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-10">
            {COLLECTIONS.map((collection, i) => (
              <CollectionCard key={collection.slug} collection={collection} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
