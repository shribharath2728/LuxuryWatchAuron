'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface Specification {
  value: string;
  label: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface CollectionDetailsProps {
  headline: string;
  headlineAccent: string;
  subtitle: string;
  specifications: Specification[];
  features: Feature[];
  accentColor?: string;
}

export default function CollectionDetails({
  headline,
  headlineAccent,
  subtitle,
  specifications,
  features,
  accentColor = '#c9a84c',
}: CollectionDetailsProps) {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      id="collection-details"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.08]"
        style={{
          background: `radial-gradient(circle, ${accentColor}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.p
            className="text-[12px] sm:text-[13px] tracking-[0.5em] uppercase mb-4 font-bold"
            style={{ 
              color: accentColor,
              textShadow: `0 0 15px ${accentColor}50`,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {subtitle}
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-playfair italic text-white leading-[1.05]"
            style={{ letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {headline}
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc, ${accentColor}88)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >{headlineAccent}</span>
          </motion.h2>
        </div>

        {/* Specifications Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {specifications.map((spec, i) => (
            <motion.div
              key={spec.label}
              className="relative text-center p-6 sm:p-8 rounded-2xl"
              style={{
                background: `${accentColor}0a`,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: `1px solid ${accentColor}22`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
                <p
                  className="text-3xl sm:text-4xl md:text-5xl font-playfair italic tracking-tight font-bold"
                  style={{ 
                    color: 'rgba(255,255,255,0.98)',
                    textShadow: `0 0 15px ${accentColor}40`,
                  }}
                >
                  {spec.value}
                </p>
              <p
                className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase mt-2 font-medium"
                style={{ color: `${accentColor}99` }}
              >
                {spec.label}
              </p>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-2.5 right-2.5 w-6 h-px" style={{ backgroundColor: `${accentColor}33` }} />
                <div className="absolute top-2.5 right-2.5 w-px h-6" style={{ backgroundColor: `${accentColor}33` }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                viewport={{ once: true, margin: '-80px' }}
                className="group relative p-8 sm:p-10 rounded-2xl transition-all duration-500 cursor-default"
                style={{
                  background: `${accentColor}08`,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${accentColor}1a`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500"
                  style={{
                    backgroundColor: `${accentColor}1a`,
                  }}
                >
                  <Icon size={22} style={{ color: accentColor }} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed font-medium drop-shadow-sm">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-3 right-3 w-8 h-px" style={{ backgroundColor: `${accentColor}33` }} />
                  <div className="absolute top-3 right-3 w-px h-8" style={{ backgroundColor: `${accentColor}33` }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            id="collection-consultation-cta"
            className="group relative overflow-hidden text-black text-sm font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03] active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, ${accentColor}99)`,
              boxShadow: `0 0 40px ${accentColor}15`,
            }}
          >
            <span className="relative z-10">Book a Private Consultation</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
