'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, Check } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', interest: 'art-of-time', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', interest: 'art-of-time', message: '' });
    }, 4000);
  };

  return (
    <section
      className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden border-t border-[rgba(197,160,89,0.08)]"
      id="contact"
      style={{
        background: 'linear-gradient(180deg, var(--color-obsidian) 0%, #030604 100%)',
      }}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.07] blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--color-slate-primary), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Section Header (Left Column) */}
          <div className="text-left">
            <motion.p
              className="text-[10px] tracking-[0.45em] uppercase text-[var(--color-slate-primary)]/80 mb-4 font-semibold"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Private Advisory
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair italic text-white leading-[1.05]"
              style={{ letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Begin your
              <br />
              <span className="shimmer-text">journey</span>
            </motion.h2>
            <motion.p
              className="mt-6 text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Connect with our horological advisors to schedule a private viewing or custom customization. Our team is dedicated to providing an unparalleled experience.
            </motion.p>
          </div>

          {/* Form Panel (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-slate p-8 sm:p-12 rounded-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8 sm:gap-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        id="form-name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder=" "
                        className="w-full bg-transparent border-b border-white/10 hover:border-white/20 focus:border-[var(--color-slate-primary)] text-sm py-2 px-1 text-white outline-none transition-all duration-300 peer"
                      />
                      <label
                        htmlFor="form-name"
                        className="absolute left-1 top-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/30 pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-white/30 peer-focus:top-[-16px] peer-focus:text-[10px] peer-focus:text-[var(--color-slate-primary)] peer-[:not(:placeholder-shown)]:top-[-16px] peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[var(--color-slate-primary)]"
                      >
                        Your Name
                      </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        id="form-email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder=" "
                        className="w-full bg-transparent border-b border-white/10 hover:border-white/20 focus:border-[var(--color-slate-primary)] text-sm py-2 px-1 text-white outline-none transition-all duration-300 peer"
                      />
                      <label
                        htmlFor="form-email"
                        className="absolute left-1 top-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/30 pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-white/30 peer-focus:top-[-16px] peer-focus:text-[10px] peer-focus:text-[var(--color-slate-primary)] peer-[:not(:placeholder-shown)]:top-[-16px] peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[var(--color-slate-primary)]"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  {/* Preferred Collection */}
                  <div className="relative flex flex-col gap-2">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-white/45 font-medium">
                      Preferred Collection
                    </span>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full bg-black/40 border-b border-white/10 hover:border-white/20 focus:border-[var(--color-slate-primary)] text-sm py-3 px-2 text-white outline-none transition-all duration-300 rounded-lg cursor-pointer appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'calc(100% - 16px) center',
                      }}
                    >
                      <option value="art-of-time" className="bg-neutral-950 text-white">The Art of Time</option>
                      <option value="apex-tourbillon" className="bg-neutral-950 text-white">Apex Tourbillon</option>
                      <option value="phoenix-crest" className="bg-neutral-950 text-white">Phoenix Crest</option>
                      <option value="ocean-crest" className="bg-neutral-950 text-white">Ocean Crest</option>
                      <option value="stellar-horizon" className="bg-neutral-950 text-white">Stellar Horizon</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="form-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder=" "
                      className="w-full bg-transparent border-b border-white/10 hover:border-white/20 focus:border-[var(--color-slate-primary)] text-sm py-2 px-1 text-white outline-none transition-all duration-300 resize-none peer"
                    />
                    <label
                      htmlFor="form-message"
                      className="absolute left-1 top-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/30 pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-white/30 peer-focus:top-[-16px] peer-focus:text-[10px] peer-focus:text-[var(--color-slate-primary)] peer-[:not(:placeholder-shown)]:top-[-16px] peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[var(--color-slate-primary)]"
                    >
                      Tell us about your interests
                    </label>
                  </div>

                  {/* Submit button */}
                  <div className="flex justify-start mt-4">
                    <button
                      type="submit"
                      className="group relative overflow-hidden flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-black bg-gradient-to-r from-[var(--color-slate-primary)] to-[var(--color-steel-accent)] hover:from-[var(--color-slate-accent)] hover:to-[var(--color-slate-primary)] px-10 py-4.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-slate-primary)]/10 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Request Advisory</span>
                      <ArrowRight size={14} className="transition-transform duration-350 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="submitted"
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--color-slate-primary)]/10 flex items-center justify-center text-[var(--color-slate-primary)] mb-6 animate-pulse">
                    <Check size={26} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-playfair italic text-white mb-3">
                    Advisory Request Received
                  </h3>
                  <p className="text-xs text-white/40 font-light max-w-sm tracking-wide leading-relaxed">
                    Thank you, {form.name}. A dedicated advisor will reach out to you within 24 hours to schedule your session.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

