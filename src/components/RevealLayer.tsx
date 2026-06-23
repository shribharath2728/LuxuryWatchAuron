'use client';

import React, { useEffect, useRef } from 'react';

interface RevealLayerProps {
  videoSrc: string;
  cursorX: number;
  cursorY: number;
  spotlightR?: number;
}

export default function RevealLayer({
  videoSrc,
  cursorX,
  cursorY,
  spotlightR = 260,
}: RevealLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty('--x', `${cursorX}px`);
    container.style.setProperty('--y', `${cursorY}px`);
    container.style.setProperty('--r', `${spotlightR}px`);
  }, [cursorX, cursorY, spotlightR]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
      style={{
        maskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y), black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y), black 30%, transparent 100%)',
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
          filter: 'contrast(1.1) saturate(1.3)',
        }}
      />
    </div>
  );
}
