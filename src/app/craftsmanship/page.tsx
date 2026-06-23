'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Layers, Cpu, Wrench, Eye, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PILLARS = [
  {
    icon: Diamond,
    title: 'Material Selection',
    subtitle: 'Only the rarest endure',
    description:
      'Every AURON begins with the relentless pursuit of the perfect raw material. We source grade-5 titanium from aerospace suppliers, platinum from certified ethical mines in South Africa, and sapphire crystal grown under controlled laboratory conditions. Our metallurgists personally approve every alloy batch before it enters production.',
    stat: '47+',
    statLabel: 'Materials Tested Per Model',
  },
  {
    icon: Wrench,
    title: 'Hand Finishing',
    subtitle: 'Where machines defer to masters',
    description:
      'Each component passes through the hands of at least 12 specialist artisans before assembly. Anglage — the bevelling of every edge to a precise 45° angle — alone requires over 30 hours per movement. Our finishing team includes third-generation craftsmen who have dedicated their lives to a single discipline.',
    stat: '200+',
    statLabel: 'Hours of Hand Finishing',
  },
  {
    icon: Cpu,
    title: 'Movement Architecture',
    subtitle: 'Engineering at the microscopic scale',
    description:
      'Our in-house R&D team designs every caliber from first principles. Using electron microscopy and CNC tolerances of ±2 microns, we create movements that push the boundaries of mechanical possibility — from double-axis tourbillons to perpetual calendars driven by a single mainspring.',
    stat: '±2μm',
    statLabel: 'Manufacturing Tolerance',
  },
  {
    icon: Layers,
    title: 'Dial Artistry',
    subtitle: 'A canvas measured in microns',
    description:
      'Our dial atelier is one of fewer than ten in the world capable of Grand Feu enamel work at scale. Each enamel dial is fired multiple times at 850°C, with master enamellers carefully building up colour and texture through successive layers — a process that takes up to six weeks for a single dial.',
    stat: '6 Weeks',
    statLabel: 'Per Grand Feu Enamel Dial',
  },
  {
    icon: Eye,
    title: 'Quality Control',
    subtitle: 'No compromise at any step',
    description:
      'Before a watch leaves our atelier, it undergoes 72 hours of continuous timekeeping tests, pressure and water resistance validation, shock testing, and an aesthetic inspection under 40× magnification. Our rejection rate — the watches we disassemble and rebuild — exceeds 18% of production.',
    stat: '72h',
    statLabel: 'Continuous Testing Per Watch',
  },
  {
    icon: Zap,
    title: 'Innovation Lab',
    subtitle: 'Tomorrow\'s mastery, today',
    description:
      'Our research division operates independently from the production atelier, exploring silicon hairsprings, ceramic escapements, and magnetic bearings. Patents filed by our engineers now number over 140, each representing a breakthrough that will eventually find its way onto a collector\'s wrist.',
    stat: '140+',
    statLabel: 'Active Patents',
  },
];

const PROCESS_STEPS = [
  { num: '01', label: 'Design & Engineering', desc: '18–24 months of CAD modelling, prototype iteration, and movement simulation before a single piece of metal is cut.' },
  { num: '02', label: 'Material Sourcing', desc: 'A global network of certified suppliers provides only conflict-free, traceable raw materials — every batch is independently audited.' },
  { num: '03', label: 'Component Machining', desc: 'CNC machines with ±2-micron tolerance rough-cut components, which are then hand-transferred to finishing artisans.' },
  { num: '04', label: 'Hand Finishing', desc: 'Anglage, perlage, côtes de Genève — each surface treatment applied by a dedicated specialist over weeks of meticulous labour.' },
  { num: '05', label: 'Assembly', desc: 'A master watchmaker assembles each caliber in an air-filtered booth, handling components with anti-static forceps under magnification.' },
  { num: '06', label: 'Regulation & Testing', desc: '72 hours of timekeeping tests, shock, water, and magnetic resistance validation — followed by a final aesthetic review at 40× magnification.' },
];

export default function CraftsmanshipPage() {
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
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle at 60% 40%, #c5a059 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
            <motion.p
              className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-slate-primary)]/70 mb-5 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The AURON Philosophy
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl font-playfair italic text-white leading-[0.93] mb-8"
              style={{ letterSpacing: '-0.03em' }}
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              The art of<br />
              <span className="shimmer-text">obsession</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-white/50 max-w-lg mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Every AURON timepiece is the product of an uncompromising belief: that true mastery has no shortcut. We reject automation where human hands excel, and embrace technology only where it surpasses what is humanly possible.
            </motion.p>
          </div>
        </section>

        {/* Six Pillars */}
        <section className="py-24 sm:py-32" style={{ background: '#0a0a0a' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-slate-primary)]/70 mb-4 font-medium">Six Pillars</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair italic leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
                The foundations of<br /><span className="shimmer-text">our mastery</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    className="group glass-slate p-8 rounded-2xl hover:bg-[var(--color-slate-primary)]/[0.05] transition-all duration-500"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-slate-primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-slate-primary)]/20 transition-colors duration-500">
                      <Icon size={20} className="text-[var(--color-slate-primary)]" strokeWidth={1.5} />
                    </div>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--color-slate-primary)]/60 mb-2 font-semibold">{pillar.subtitle}</p>
                    <h3 className="text-xl font-medium text-white mb-4">{pillar.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed font-light mb-6">{pillar.description}</p>
                    <div className="border-t border-white/[0.06] pt-5">
                      <span className="text-3xl font-playfair italic text-white/90">{pillar.stat}</span>
                      <span className="block text-[9px] tracking-[0.25em] uppercase text-white/40 mt-1">{pillar.statLabel}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 sm:py-32" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-slate-primary)]/70 mb-4 font-medium">Our Process</p>
              <h2 className="text-4xl sm:text-5xl font-playfair italic" style={{ letterSpacing: '-0.03em' }}>
                From concept to<br /><span className="shimmer-text">collector</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-playfair italic text-[var(--color-slate-primary)]/20 leading-none">{step.num}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-slate-primary)]/20 to-transparent" />
                  </div>
                  <h4 className="text-base font-semibold text-white tracking-wide">{step.label}</h4>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
