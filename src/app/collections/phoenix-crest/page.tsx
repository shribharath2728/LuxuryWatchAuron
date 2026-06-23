'use client';

import React from 'react';
import CollectionHero from '@/components/CollectionHero';
import CollectionDetails from '@/components/CollectionDetails';
import CollectionGallery from '@/components/CollectionGallery';
import { Flame, Gauge, Shield } from 'lucide-react';

const VIDEO = '/videos/phoenix-crest.mp4';
const ACCENT = '#e87040';

const SPECS = [
  { value: '284', label: 'Components' },
  { value: 'FC', label: 'Forged Carbon' },
  { value: '72h', label: 'Power Reserve' },
  { value: '44mm', label: 'Case Diameter' },
];

const FEATURES = [
  {
    icon: Flame,
    title: 'Forged Carbon Construction',
    description:
      'The case is forged under extreme heat and pressure, creating a material 40% lighter than titanium with the resilience to withstand any challenge.',
  },
  {
    icon: Gauge,
    title: 'Racing Chronograph',
    description:
      'Split-second chronograph with flyback function, accurate to 1/100th of a second — born from the exact demands of the pit lane.',
  },
  {
    icon: Shield,
    title: 'Anti-Shock System',
    description:
      'Proprietary shock absorption system protects the movement up to 5,000 Gs — the same forces experienced in a Formula 1 car.',
  },
];

export default function PhoenixCrestPage() {
  return (
    <>
      <CollectionHero
        videoSrc={VIDEO}
        collectionName="Phoenix Crest"
        tagline="Motorsport Collection"
        description="Forged in the crucible of competition. The Phoenix Crest rises from the fire of motorsport heritage, reborn as an instrument of precision."
        accentColor={ACCENT}
      />
      <CollectionDetails
        headline="Forged in"
        headlineAccent="fire & carbon"
        subtitle="Racing Heritage"
        specifications={SPECS}
        features={FEATURES}
        accentColor={ACCENT}
      />
      <CollectionGallery
        videoSrc={VIDEO}
        headline="Born on the circuit"
        story="Every Phoenix Crest is tested under the brutal conditions of endurance racing before it ever reaches a collector's wrist. The forged carbon case echoes the monocoques of the world's fastest machines, while the flyback chronograph captures tenths of seconds with surgical precision."
        accentColor={ACCENT}
      />
    </>
  );
}
