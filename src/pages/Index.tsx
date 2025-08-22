import { HeroCarousel } from '@/components/HeroCarousel';
import { BrandSection } from '@/components/BrandSection';
import { ProductsSection } from '@/components/ProductsSection';
import { LojaIgrejaCTA } from '@/components/LojaIgrejaCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <BrandSection />
      <ProductsSection />
      <LojaIgrejaCTA />
      <Footer />
    </div>
  );
};

export default Index;
