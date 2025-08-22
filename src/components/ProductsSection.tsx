import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import shirt1 from '@/assets/camisa-1.png';
import shirt2 from '@/assets/camisa-2.png';
import shirt3 from '@/assets/camisa-3.png';
import shirt4 from '@/assets/camisa-4.png';
import shirt5 from '@/assets/camisa-5.png';
import shirt6 from '@/assets/camisa-6.png';
import shirt7 from '@/assets/camisa-7.png';
import shirt8 from '@/assets/camisa-8.png';
import shirt9 from '@/assets/camisa-9.png';
import shirt10 from '@/assets/camisa-10.png';
import shirt11 from '@/assets/camisa-11.png';
import shirt12 from '@/assets/camisa-12.png';
import shirt13 from '@/assets/camisa-13.png';
import shirt14 from '@/assets/camisa-14.png';
import shirt15 from '@/assets/camisa-15.png';
import shirt16 from '@/assets/camisa-16.png';

const products = [
  {
    id: 1,
    name: "Camiseta Básica Off White - Banquete",
    description: "Inspirada em Mateus 9:13, essa peça declara: “Misericórdia quero, e não sacrifício. Pois não vim chamar justos, mas pecadores.”",
    image: shirt1,
    price: "R$ 60,00"
  },
  {
    id: 2,
    name: "Camiseta Oversized Off White - Banquete",
    description: "Inspirada em Mateus 9:13, essa peça declara: “Misericórdia quero, e não sacrifício. Pois não vim chamar justos, mas pecadores.”",
    image: shirt14,
    price: "R$ 100,00"
  },
  {
    id: 3,
    name: "Camiseta Básica Areia - Banquete",
    description: "Inspirada em Mateus 9:13, essa peça declara: “Misericórdia quero, e não sacrifício. Pois não vim chamar justos, mas pecadores.”",
    image: shirt2,
    price: "R$ 60,00"
  },
  {
    id: 4,
    name: "Camiseta Oversized Areia - Banquete",
    description: "Inspirada em Mateus 9:13, essa peça declara: “Misericórdia quero, e não sacrifício. Pois não vim chamar justos, mas pecadores.”",
    image: shirt13,
    price: "R$ 100,00"
  },
  {
    id: 5,
    name: "Camiseta Básica Areia - Jesus is the way",
    description: "Essa peça carrega uma das declarações mais marcantes de Jesus: “Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.” (João 14:6)",
    image: shirt3,
    price: "R$ 60,00"
  },
  {
    id: 6,
    name: "Camiseta Oversized Areia - Jesus is the way",
    description: "Essa peça carrega uma das declarações mais marcantes de Jesus: “Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.” (João 14:6)",
    image: shirt12,
    price: "R$ 100,00"
  },
  {
    id: 7,
    name: "Camiseta Básica Preta - Jesus is the way",
    description: "Essa peça carrega uma das declarações mais marcantes de Jesus: “Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.” (João 14:6)",
    image: shirt4,
    price: "R$ 60,00"
  },
  {
    id: 8,
    name: "Camiseta Oversized Preta - Jesus is the way",
    description: "Essa peça carrega uma das declarações mais marcantes de Jesus: “Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.” (João 14:6)",
    image: shirt10,
    price: "R$ 100,00"
  },
  {
    id: 9,
    name: "Camiseta Básica Areia - Cordeiro",
    description: "Essa estampa nasce da visão gloriosa de Apocalipse 5:13: “Ao que está assentado no trono e ao Cordeiro sejam o louvor, a honra, a glória e o poder para todo o sempre.”",
    image: shirt5,
    price: "R$ 60,00"
  },
  {
    id: 10,
    name: "Camiseta Oversized Areia - Cordeiro",
    description: "Essa estampa nasce da visão gloriosa de Apocalipse 5:13: “Ao que está assentado no trono e ao Cordeiro sejam o louvor, a honra, a glória e o poder para todo o sempre.”",
    image: shirt9,
    price: "R$ 100,00"
  },
  {
    id: 11,
    name: "Camiseta Básica Preta - Cordeiro",
    description: "Essa estampa nasce da visão gloriosa de Apocalipse 5:13: “Ao que está assentado no trono e ao Cordeiro sejam o louvor, a honra, a glória e o poder para todo o sempre.”",
    image: shirt6,
    price: "R$ 60,00"
  },
  {
    id: 12,
    name: "Camiseta Oversized Preta - Cordeiro",
    description: "Essa estampa nasce da visão gloriosa de Apocalipse 5:13: “Ao que está assentado no trono e ao Cordeiro sejam o louvor, a honra, a glória e o poder para todo o sempre.”",
    image: shirt11,
    price: "R$ 100,00"
  },
  {
    id: 13,
    name: "Camiseta Básica Preta - Trindade",
    description: "O desenho traz em unidade o Pai, o Filho e o Espírito Santo, representando o mistério e a glória da Trindade.",
    image: shirt7,
    price: "R$ 60,00"
  },
  {
    id: 14,
    name: "Camiseta Oversized Preta - Trindade",
    description: "O desenho traz em unidade o Pai, o Filho e o Espírito Santo, representando o mistério e a glória da Trindade.",
    image: shirt15,
    price: "R$ 100,00"
  },
  {
    id: 15,
    name: "Camiseta Básica Bordô - Trindade",
    description: "O desenho traz em unidade o Pai, o Filho e o Espírito Santo, representando o mistério e a glória da Trindade.",
    image: shirt8,
    price: "R$ 60,00"
  },
  {
    id: 16,
    name: "Camiseta Oversized Bordô - Trindade",
    description: "O desenho traz em unidade o Pai, o Filho e o Espírito Santo, representando o mistério e a glória da Trindade.",
    image: shirt16,
    price: "R$ 100,00"
  }
];

export const ProductsSection = () => {
  const [selectedProducts, setSelectedProducts] = useState<
    { id: number; name: string; price: string; size: string }[]
  >([]);

  const handleSelect = (product: { id: number; name: string; price: string; size: string }) => {
    setSelectedProducts((prev) => [...prev, product]); // permite múltiplos iguais
  };

  const handleWhatsAppCheckout = () => {
    if (selectedProducts.length === 0) return;

    const productLines = selectedProducts.map(
      (p, index) => `${index + 1}. ${p.name} - ${p.price} (Tamanho: ${p.size})`
    );

    const message = `Olá! Gostaria de comprar os seguintes produtos:\n\n${productLines.join('\n')}`;
    const url = `https://wa.me/5581999014848?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <section className="products-section py-20 px-4 bg-background">
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
            <ProductCard key={`${product.id}-${product.name}`} product={product} onSelect={handleSelect} />
          ))}
        </div>

        {selectedProducts.length > 0 && (
          <div className="mt-16 text-center flex flex-col items-center space-y-6">
            <div className="bg-white border border-muted p-6 rounded-lg max-w-xl w-full text-left shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Produtos Selecionados:</h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                {selectedProducts.map((item, index) => (
                  <li key={index} className="border-b border-muted pb-2">
                    {index + 1}. <strong>{item.name}</strong> — {item.price} (Tamanho: {item.size})
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={handleWhatsAppCheckout}
              variant="whatsapp"
              size="lg"
              className="px-10 py-4 text-lg"
            >
              Comprar Produtos Selecionados ({selectedProducts.length})
            </Button>

            <button
              onClick={() => setSelectedProducts([])}
              className="text-sm text-accent border border-accent bg-white px-4 py-2 rounded-md hover:bg-accent hover:text-white transition"
            >
              Cancelar minhas compras
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
