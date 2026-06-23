'use client';

import React from 'react';
import CollectionHero from '@/components/CollectionHero';
import CollectionDetails from '@/components/CollectionDetails';
import CollectionGallery from '@/components/CollectionGallery';
import { Star, Magnet, Rocket } from 'lucide-react';

const VIDEO = '/videos/stellar-horizon.mp4';
const ACCENT = '#9b8ec9';

const SPECS = [
  { value: '∞', label: 'Anti-Magnetic' },
  { value: 'Ti-6Al', label: 'Space-Grade Ti' },
  { value: '84h', label: 'Power Reserve' },
  { value: '41mm', label: 'Case Diameter' },
];

const FEATURES = [
  {
    icon: Star,
    title: 'Meteorite Dial',
    description:
      'The dial is crafted from a Gibeon meteorite — a 4-billion-year-old fragment of the cosmos, etched by nature with Widmanstätten patterns unique to each piece.',
  },
  {
    icon: Magnet,
    title: 'Anti-Magnetic Movement',
    description:
      'The Caliber STL-01 is protected by a soft-iron inner cage, resisting magnetic fields up to 15,000 Gauss — impervious to the electromagnetic forces of space.',
  },
  {
    icon: Rocket,
    title: 'Space-Grade Titanium',
    description:
      'Machined from Ti-6Al-4V alloy — the same material used in spacecraft hulls — offering extraordinary resistance to extreme temperatures and cosmic radiation.',
  },
];

export default function StellarHorizonPage() {
  return (
    <>
      <CollectionHero
        videoSrc={VIDEO}
        collectionName="Stellar Horizon"
        tagline="Space Collection"
        description="Forged from cosmic materials and engineered for the infinite. A timepiece for those who set their sights beyond the atmosphere."
        accentColor={ACCENT}
      />
      <CollectionDetails
        headline="Precision beyond"
        headlineAccent="the atmosphere"
        subtitle="Cosmic Engineering"
        specifications={SPECS}
        features={FEATURES}
        accentColor={ACCENT}
      />
      <CollectionGallery
        videoSrc={VIDEO}
        headline="Written in the stars"
        story="The Stellar Horizon collection draws inspiration from humanity's greatest frontier. Its meteorite dial — forged in the heart of an ancient asteroid — is a reminder that true luxury transcends our planet. Each of the 50 pieces in the collection carries a unique pattern, as individual as the stars themselves."
        accentColor={ACCENT}
      />
    </>
  );
}
