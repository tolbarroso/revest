import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBanner1 from '@/assets/hero-banner-1.jpg';
import revestLogo from '@/assets/revest-logo.png';

const heroSlides = [
  {
    id: 1,
    image: heroBanner1,
    title: "REVEST",
    subtitle: "Cada peça, uma armadura",
    description: "Para uma geração que não tem medo de mostrar em quem crê."
  },
  {
    id: 2,
    image: heroBanner1,
    title: "REVEST",
    subtitle: "Cada peça, uma armadura",
    description: "Designs únicos que expressam valores eternos no seu dia a dia."
  },
  {
    id: 3,
    image: heroBanner1,
    title: "REVEST",
    subtitle: "Cada peça, uma armadura",
    description: "Conecte sua fé ao seu estilo pessoal com nossa linha exclusiva."
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollToProducts = () => {
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay absolute inset-0"></div>
            
             <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
               <div className="max-w-4xl mx-auto">
                 <div className="mb-6">
                   <img 
                     src={revestLogo} 
                     alt="RECON" 
                     className="mx-auto h-20 md:h-28 object-contain filter brightness-0 invert"
                   />
                 </div>
                <h2 className="font-brand text-2xl md:text-3xl mb-6 text-white/90 font-semibold">
                  {slide.subtitle}
                </h2>
                <p className="font-body text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <Button
                  onClick={scrollToProducts}
                  variant="whatsapp"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Conheça Nossos Produtos
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 
                   bg-black/20 hover:bg-black/40 text-white p-3 rounded-full
                   transition-all duration-300"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 
                   bg-black/20 hover:bg-black/40 text-white p-3 rounded-full
                   transition-all duration-300"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};