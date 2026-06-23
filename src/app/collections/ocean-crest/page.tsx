'use client';

import React from 'react';
import CollectionHero from '@/components/CollectionHero';
import CollectionDetails from '@/components/CollectionDetails';
import CollectionGallery from '@/components/CollectionGallery';
import { Waves, Compass, Anchor } from 'lucide-react';

const VIDEO = '/videos/ocean-crest.mp4';
const ACCENT = '#4a9ec9';

const SPECS = [
  { value: '300m', label: 'Water Resistance' },
  { value: 'Ti', label: 'Grade 5 Titanium' },
  { value: '68h', label: 'Power Reserve' },
  { value: '42mm', label: 'Case Diameter' },
];

const FEATURES = [
  {
    icon: Waves,
    title: 'Deep-Sea Engineering',
    description:
      'Triple-sealed crown system and helium escape valve rated to 300 metres — tested in pressure chambers that simulate the crushing depths of the ocean floor.',
  },
  {
    icon: Compass,
    title: 'Ceramic Bezel',
    description:
      'Unidirectional rotating bezel in scratch-proof ceramic with Super-LumiNova® markers, ensuring legibility even in the darkest underwater conditions.',
  },
  {
    icon: Anchor,
    title: 'Marine-Grade Titanium',
    description:
      'Grade 5 titanium case and bracelet, chosen for its exceptional corrosion resistance in saltwater and its remarkable strength-to-weight ratio.',
  },
];

export default function OceanCrestPage() {
  return (
    <>
      <CollectionHero
        videoSrc={VIDEO}
        collectionName="Ocean Crest"
        tagline="Dive Collection"
        description="Engineered for the abyss, refined for the surface. A timepiece that conquers the deepest frontiers while maintaining effortless elegance."
        accentColor={ACCENT}
      />
      <CollectionDetails
        headline="Mastery of"
        headlineAccent="the depths"
        subtitle="Marine Engineering"
        specifications={SPECS}
        features={FEATURES}
        accentColor={ACCENT}
      />
      <CollectionGallery
        videoSrc={VIDEO}
        headline="Where light fades, precision endures"
        story="The Ocean Crest was born from a collaboration with deep-sea explorers and marine engineers. Every component has been designed to withstand the immense pressures found at 300 metres below the surface, while its luminous dial guides the way back through the darkness."
        accentColor={ACCENT}
      />
    </>
  );
}
