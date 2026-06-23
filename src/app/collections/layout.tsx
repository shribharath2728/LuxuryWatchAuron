import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}
