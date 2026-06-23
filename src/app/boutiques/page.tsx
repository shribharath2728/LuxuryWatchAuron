'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const BOUTIQUES = [
  {
    city: 'Mumbai',
    country: 'India',
    region: 'Asia Pacific',
    address: 'The Oberoi, Nariman Point, Mumbai 400 021',
    phone: '+91 22 6632 5757',
    email: 'mumbai@auron.com',
    hours: 'Mon–Sat 10:00–19:00 · Sun 11:00–17:00',
    flagship: true,
  },
  {
    city: 'New Delhi',
    country: 'India',
    region: 'Asia Pacific',
    address: 'The Leela Palace, Diplomatic Enclave, Chanakyapuri, New Delhi 110 023',
    phone: '+91 11 3933 1234',
    email: 'delhi@auron.com',
    hours: 'Mon–Sat 10:00–19:00 · Sun 11:00–17:00',
    flagship: false,
  },
  {
    city: 'Geneva',
    country: 'Switzerland',
    region: 'Europe',
    address: '48 Rue du Rhône, 1204 Geneva',
    phone: '+41 22 318 44 00',
    email: 'geneva@auron.com',
    hours: 'Mon–Fri 10:00–18:30 · Sat 10:00–17:00',
    flagship: true,
  },
  {
    city: 'Paris',
    country: 'France',
    region: 'Europe',
    address: '16 Place Vendôme, 75001 Paris',
    phone: '+33 1 55 04 30 30',
    email: 'paris@auron.com',
    hours: 'Mon–Sat 10:00–19:00',
    flagship: false,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    address: '26 Old Bond Street, Mayfair, London W1S 4AH',
    phone: '+44 20 7493 1100',
    email: 'london@auron.com',
    hours: 'Mon–Sat 10:00–18:00 · Sun 12:00–17:00',
    flagship: false,
  },
  {
    city: 'New York',
    country: 'United States',
    region: 'Americas',
    address: '645 Fifth Avenue, New York, NY 10022',
    phone: '+1 212 755 6688',
    email: 'newyork@auron.com',
    hours: 'Mon–Sat 10:00–18:00 · Sun 12:00–17:00',
    flagship: true,
  },
  {
    city: 'Dubai',
    country: 'UAE',
    region: 'Middle East',
    address: 'The Dubai Mall, Ground Floor, Financial Centre Road, Dubai',
    phone: '+971 4 330 8800',
    email: 'dubai@auron.com',
    hours: 'Sun–Thu 10:00–22:00 · Fri–Sat 10:00–24:00',
    flagship: false,
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    region: 'Asia Pacific',
    address: '6-15-1 Minami-Aoyama, Minato, Tokyo 107-0062',
    phone: '+81 3 5778 7700',
    email: 'tokyo@auron.com',
    hours: 'Daily 11:00–19:00',
    flagship: false,
  },
];

const REGIONS = ['All', 'Asia Pacific', 'Europe', 'Americas', 'Middle East'];

export default function BoutiquesPage() {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filtered = selectedRegion === 'All'
    ? BOUTIQUES
    : BOUTIQUES.filter((b) => b.region === selectedRegion);

  return (
    <>
      <Navigation />
      <main className="bg-[#050505] text-white min-h-screen">

        {/* Hero */}
        <section
          className="relative pt-40 pb-24 sm:pt-52 sm:pb-28 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #000 0%, #080808 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #c5a059 0%, transparent 65%)' }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
            <motion.p
              className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-slate-primary)]/70 mb-5 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Global Presence
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl font-playfair italic text-white leading-[0.93] mb-8"
              style={{ letterSpacing: '-0.03em' }}
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              Find your<br />
              <span className="shimmer-text">boutique</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-white/50 max-w-lg mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Eight curated locations worldwide — each one a sanctuary of horological excellence, staffed by specialist advisors dedicated to helping you find your perfect timepiece.
            </motion.p>
          </div>
        </section>

        {/* Private Viewing CTA Banner */}
        <section
          className="py-10 border-y border-[rgba(197,160,89,0.1)]"
          style={{ background: 'rgba(197,160,89,0.03)' }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-sm font-medium text-white mb-1">Prefer a private viewing?</p>
              <p className="text-xs text-white/50 font-light">Our advisors will arrange an exclusive appointment, tailored entirely to you.</p>
            </div>
            <Link
              href="mailto:camry2801006@gmail.com"
              className="flex-shrink-0 text-xs font-semibold tracking-[0.25em] uppercase text-black bg-gradient-to-r from-[var(--color-slate-primary)] to-[var(--color-steel-accent)] px-8 py-3.5 rounded-full hover:scale-[1.02] transition-transform duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-20 sm:py-28" style={{ background: '#0a0a0a' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8">

            {/* Region Filter */}
            <div className="flex flex-wrap gap-3 mb-14">
              {REGIONS.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`text-[10px] tracking-[0.25em] uppercase font-semibold px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    selectedRegion === region
                      ? 'border-[var(--color-slate-primary)] text-[var(--color-slate-primary)] bg-[var(--color-slate-primary)]/10'
                      : 'border-white/10 text-white/50 hover:border-white/25 hover:text-white/80'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Boutique Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((boutique, i) => (
                  <motion.div
                    key={boutique.city}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="group glass-slate rounded-2xl p-8 hover:bg-[var(--color-slate-primary)]/[0.04] transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-medium text-white">{boutique.city}</h3>
                          {boutique.flagship && (
                            <span className="text-[8px] tracking-[0.2em] uppercase font-bold text-black bg-[var(--color-slate-primary)] px-2 py-0.5 rounded-full">
                              Flagship
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[var(--color-slate-primary)]/70 tracking-wide">{boutique.country} · {boutique.region}</p>
                      </div>
                      <MapPin size={16} className="text-[var(--color-slate-primary)]/40 flex-shrink-0 mt-1" />
                    </div>

                    <div className="flex flex-col gap-3 text-sm text-white/55 font-light">
                      <div className="flex items-start gap-3">
                        <MapPin size={13} className="text-[var(--color-slate-primary)]/50 mt-0.5 flex-shrink-0" />
                        <span>{boutique.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={13} className="text-[var(--color-slate-primary)]/50 flex-shrink-0" />
                        <a href={`tel:${boutique.phone}`} className="hover:text-white transition-colors">{boutique.phone}</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={13} className="text-[var(--color-slate-primary)]/50 flex-shrink-0" />
                        <a href={`mailto:${boutique.email}`} className="hover:text-white transition-colors">{boutique.email}</a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={13} className="text-[var(--color-slate-primary)]/50 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{boutique.hours}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/[0.06]">
                      <Link
                        href="mailto:camry2801006@gmail.com"
                        className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[var(--color-slate-primary)] hover:text-white transition-colors duration-200"
                      >
                        Book a Private Appointment →
                      </Link>
                    </div>
                  </motion.div>
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
