import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AURON | Luxury Exotic Timepieces',
  description:
    'Where precision engineering meets automotive artistry. AURON crafts luxury timepieces inspired by the world\'s most exotic machines.',
  keywords: ['luxury watches', 'exotic timepieces', 'AURON', 'automotive watches', 'haute horlogerie'],
  openGraph: {
    title: 'AURON | Luxury Exotic Timepieces',
    description: 'Where precision engineering meets automotive artistry.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  )
}
