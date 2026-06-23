'use client';

import React from 'react';
import CollectionHero from '@/components/CollectionHero';
import CollectionDetails from '@/components/CollectionDetails';
import CollectionGallery from '@/components/CollectionGallery';
import { Orbit, Diamond, Sparkles } from 'lucide-react';

const VIDEO = '/videos/apex-tourbillon.mp4';
const ACCENT = '#c9a84c';

const SPECS = [
  { value: '468', label: 'Components' },
  { value: 'Pt950', label: 'Platinum Case' },
  { value: '96h', label: 'Power Reserve' },
  { value: '43mm', label: 'Case Diameter' },
];

const FEATURES = [
  {
    icon: Orbit,
    title: 'Flying Tourbillon',
    description:
      'The gravity-defying tourbillon cage rotates once every 60 seconds, counteracting positional errors with mesmerizing mechanical ballet.',
  },
  {
    icon: Diamond,
    title: 'Platinum Perfection',
    description:
      'Hewn from a single block of Pt950 platinum, the case undergoes 120 hours of machining and hand-finishing to achieve its mirror-like surface.',
  },
  {
    icon: Sparkles,
    title: 'Grand Feu Enamel',
    description:
      'The dial is fired at 850°C multiple times, each layer of Grand Feu enamel adding depth and luminosity that endures for centuries.',
  },
];

export default function ApexTourbillonPage() {
  return (
    <>
      <CollectionHero
        videoSrc={VIDEO}
        collectionName="Apex Tourbillon"
        tagline="The Pinnacle Collection"
        description="The most complex movement AURON has ever conceived, housed within a case of pure platinum. This is the zenith of mechanical watchmaking."
        accentColor={ACCENT}
      />
      <CollectionDetails
        headline="The absolute"
        headlineAccent="pinnacle"
        subtitle="Haute Horlogerie"
        specifications={SPECS}
        features={FEATURES}
        accentColor={ACCENT}
      />
      <CollectionGallery
        videoSrc={VIDEO}
        headline="Where gravity surrenders"
        story="The Apex Tourbillon represents the culmination of five years of development. Its flying tourbillon, visible through a sapphire aperture, is surrounded by a micro-rotor that powers twin barrels — delivering 96 hours of precision without compromise. Only 25 pieces will ever exist."
        accentColor={ACCENT}
      />
    </>
  );
}
