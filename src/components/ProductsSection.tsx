import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import shirt1 from '@/assets/shirt-1.jpg';
import shirt2 from '@/assets/shirt-2.jpg';
import shirt3 from '@/assets/shirt-3.jpg';

const products = [
  {
    id: 1,
    name: "Camiseta Fé & Esperança",
    description: "Design minimalista com mensagem inspiradora. Tecido premium 100% algodão para máximo conforto no seu dia a dia.",
    image: shirt1,
    price: "R$ 79,90"
  },
  {
    id: 2,
    name: "Camiseta Cruz Moderna",
    description: "Estilo contemporâneo com símbolo da fé. Perfeita para expressar sua identidade cristã com elegância.",
    image: shirt2,
    price: "R$ 84,90"
  },
  {
    id: 3,
    name: "Camiseta Verso Bíblico",
    description: "Typography inspiradora com versículo bíblico. Uma forma única de carregar a Palavra com você.",
    image: shirt3,
    price: "R$ 89,90"
  },
  {
    id: 4,
    name: "Camiseta Graça Infinita",
    description: "Design exclusivo que celebra a graça divina. Qualidade superior e estilo atemporal.",
    image: shirt1,
    price: "R$ 79,90"
  },
  {
    id: 5,
    name: "Camiseta Luz do Mundo",
    description: "Mensagem poderosa em design moderno. Ideal para quem busca impactar através do estilo.",
    image: shirt2,
    price: "R$ 84,90"
  },
  {
    id: 6,
    name: "Camiseta Renovação",
    description: "Conceito de transformação em arte wearable. Expresse sua jornada de fé com autenticidade.",
    image: shirt3,
    price: "R$ 89,90"
  }
];

export const ProductsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-brand text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nossa Coleção
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada peça é cuidadosamente desenvolvida para expressar sua fé com estilo contemporâneo. 
            Descubra designs únicos que conectam propósito e moda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-brand max-w-2xl mx-auto">
            <h3 className="font-brand text-2xl font-semibold mb-4 text-foreground">
              Não encontrou o que procurava?
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Entre em contato conosco e descubra mais opções da nossa coleção completa.
            </p>
            <Button
              onClick={() => {
                const message = "Olá! Gostaria de conhecer toda a coleção REVEST e suas novidades.";
                window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
              }}
              variant="whatsapp"
              size="lg"
            >
              Ver Coleção Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};