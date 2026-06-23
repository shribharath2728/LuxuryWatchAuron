'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CollectionGalleryProps {
  videoSrc: string;
  headline: string;
  story: string;
  accentColor?: string;
}

export default function CollectionGallery({
  videoSrc,
  headline,
  story,
  accentColor = '#c9a84c',
}: CollectionGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.88, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], [48, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 overflow-hidden"
      id="collection-gallery"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p
            className="text-[12px] sm:text-[13px] tracking-[0.5em] uppercase mb-4 font-bold"
            style={{ 
              color: accentColor,
              textShadow: `0 0 15px ${accentColor}50`,
            }}
          >
            The Film
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-playfair italic text-white leading-[1.1]"
            style={{ letterSpacing: '-0.03em' }}
          >
            {headline}
          </h2>
        </motion.div>

        {/* Cinematic video container */}
        <motion.div
          className="relative overflow-hidden"
          style={{ scale, borderRadius }}
        >
          <motion.div
            className="relative aspect-[16/9] overflow-hidden"
            style={{
              y: videoY,
              background: `radial-gradient(circle, ${accentColor}18 0%, #050505 100%)`,
            }}
          >
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                filter: 'brightness(0.88) saturate(1.5) contrast(1.3)',
              }}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,10,10,0.10) 0%, transparent 25%, transparent 55%, rgba(10,10,10,0.92) 100%)',
              }}
            />
          </motion.div>

          {/* Story overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-16 z-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <motion.div
                className="max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-10 h-px mb-5"
                  style={{
                    background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                  }}
                />
                <p className="text-sm sm:text-[15px] text-white leading-relaxed font-medium drop-shadow-md">
                  {story}
                </p>
              </motion.div>

              <motion.button
                className="self-start sm:self-auto text-sm font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-95"
                style={{
                  border: `1px solid ${accentColor}66`,
                  color: accentColor,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                id="collection-gallery-cta"
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = `${accentColor}1a`;
                  (e.target as HTMLElement).style.borderColor = `${accentColor}99`;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  (e.target as HTMLElement).style.borderColor = `${accentColor}66`;
                }}
              >
                Watch Full Film
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
