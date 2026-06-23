import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ShowcaseSection from '@/components/ShowcaseSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <ShowcaseSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
