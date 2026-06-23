'use client';

import React from 'react';
import CollectionHero from '@/components/CollectionHero';
import CollectionDetails from '@/components/CollectionDetails';
import CollectionGallery from '@/components/CollectionGallery';
import { Gem, Brush, Clock } from 'lucide-react';

const VIDEO = '/videos/art-of-time.mp4';
const ACCENT = '#c9a84c';

const SPECS = [
  { value: '312', label: 'Components' },
  { value: '18K', label: 'Rose Gold' },
  { value: '80h', label: 'Power Reserve' },
  { value: '40mm', label: 'Case Diameter' },
];

const FEATURES = [
  {
    icon: Brush,
    title: 'Master Hand-Finishing',
    description:
      'Over 200 hours of hand-polishing, bevelling, and engraving by master artisans who have dedicated decades to perfecting their craft.',
  },
  {
    icon: Gem,
    title: 'Precious Materials',
    description:
      '18-karat rose gold case, hand-applied guilloché dial, and 62 individually set diamonds framing the aperture.',
  },
  {
    icon: Clock,
    title: 'In-House Caliber',
    description:
      'Entirely designed and assembled in-house, our Caliber ART-01 features a double barrel and silicon escapement for unrivaled accuracy.',
  },
];

export default function ArtOfTimePage() {
  return (
    <>
      <CollectionHero
        videoSrc={VIDEO}
        collectionName="The Art of Time"
        tagline="Craftsmanship Collection"
        description="Where centuries of horological mastery converge with contemporary artistry. Each timepiece is a canvas — every component, a brushstroke of precision."
        accentColor={ACCENT}
      />
      <CollectionDetails
        headline="Handcrafted to"
        headlineAccent="transcend time"
        subtitle="Master Artisanship"
        specifications={SPECS}
        features={FEATURES}
        accentColor={ACCENT}
      />
      <CollectionGallery
        videoSrc={VIDEO}
        headline="A story told in movements"
        story="The Art of Time collection pays homage to the grand tradition of haute horlogerie. From the first sketch to the final adjustment, every AURON masterpiece passes through the hands of over 40 artisans — each contributing their lifetime of expertise to a single, extraordinary creation."
        accentColor={ACCENT}
      />
    </>
  );
}
