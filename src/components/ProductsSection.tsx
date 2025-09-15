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
    baseName: "Camiseta Básica - Banquete",
    description:
      "Inspirada em Mateus 9:13, essa peça declara: “Misericórdia quero, e não sacrifício. Pois não vim chamar justos, mas pecadores.”",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camiseta Básica - Banquete (Off-white)",
        image: shirt1,
        color: "#e0dfd8",
        sizes: { P: false, M: true, G: true, GG: true, G1: false, G2: false },
      },
      {
        name: "Camiseta Básica - Banquete (Areia)",
        image: shirt2,
        color: "#d9c3a0",
        sizes: { P: false, M: false, G: true, GG: true, G1: false, G2: false },
      },
    ],
  },
  {
    id: 2,
    baseName: "Camiseta Oversized - Banquete",
    description:
      "Inspirada em Mateus 9:13, essa peça declara: “Misericórdia quero, e não sacrifício. Pois não vim chamar justos, mas pecadores.”",
    price: "R$ 120,00",
    variants: [
      {
        name: "Camiseta Oversized - Banquete (Areia)",
        image: shirt13,
        color: "#d9c3a0",
        sizes: { P: false, M: true, G: true, GG: false, G1: false, G2: false },
      },
      {
        name: "Camiseta Oversized - Banquete (Off-white)",
        image: shirt14,
        color: "#e0dfd8",
        sizes: { P: false, M: false, G: false, GG: false, G1: false, G2: false },
      },
    ],
  },
  {
    id: 3,
    baseName: "Camiseta Básica - Jesus is the way",
    description:
      "Essa peça carrega uma das declarações mais marcantes de Jesus: “Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.” (João 14:6)",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camiseta Básica - Jesus is the way (Preta)",
        image: shirt4,
        color: "#353535",
        sizes: { P: false, M: false, G: true, GG: true, G1: false, G2: false },
      },
      {
        name: "Camiseta Básica - Jesus is the way (Areia)",
        image: shirt3,
        color: "#d9c3a0",
        sizes: { P: false, M: false, G: false, GG: true, G1: false, G2: false },
      },
    ],
  },
  {
    id: 4,
    baseName: "Camiseta Oversized - Jesus is the way",
    description:
      "Essa peça carrega uma das declarações mais marcantes de Jesus: “Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.” (João 14:6)",
    price: "R$ 120,00",
    variants: [
      {
        name: "Camiseta Oversized - Jesus is the way (Preta)",
        image: shirt10,
        color: "#353535",
        sizes: { P: false, M: false, G: true, GG: false, G1: false, G2: false },
      },
      {
        name: "Camiseta Oversized - Jesus is the way (Areia)",
        image: shirt12,
        color: "#d9c3a0",
        sizes: { P: false, M: false, G: true, GG: false, G1: false, G2: false },
      },
    ],
  },
  {
    id: 5,
    baseName: "Camiseta Básica - Cordeiro",
    description:
      "Essa estampa nasce da visão gloriosa de Apocalipse 5:13: “Ao que está assentado no trono e ao Cordeiro sejam o louvor, a honra, a glória e o poder para todo o sempre.”",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camiseta Básica - Cordeiro (Areia)",
        image: shirt5,
        color: "#d9c3a0",
        sizes: { P: false, M: true, G: true, GG: false, G1: false, G2: false },
      },
      {
        name: "Camiseta Básica - Cordeiro (Preta)",
        image: shirt6,
        color: "#353535",
        sizes: { P: true, M: true, G: true, GG: false, G1: false, G2: false },
      },
    ],
  },
  {
    id: 6,
    baseName: "Camiseta Oversized - Cordeiro",
    description:
      "Essa estampa nasce da visão gloriosa de Apocalipse 5:13: “Ao que está assentado no trono e ao Cordeiro sejam o louvor, a honra, a glória e o poder para todo o sempre.”",
    price: "R$ 120,00",
    variants: [
      {
        name: "Camiseta Oversized - Cordeiro (Areia)",
        image: shirt9,
        color: "#d9c3a0",
        sizes: { P: false, M: true, G: false, GG: false, G1: false, G2: false },
      },
      {
        name: "Camiseta Oversized - Cordeiro (Preta)",
        image: shirt11,
        color: "#353535",
        sizes: { P: true, M: true, G: false, GG: false, G1: false, G2: false },
      },
    ],
  },
  {
    id: 7,
    baseName: "Camiseta Básica - Trindade",
    description:
      "O desenho traz em unidade o Pai, o Filho e o Espírito Santo, representando o mistério e a glória da Trindade.",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camiseta Básica - Trindade (Vermelha)",
        image: shirt8,
        color: "#94302f",
        sizes: { P: true, M: true, G: true, GG: false, G1: true, G2: true }, // falta confirmar
      },
      {
        name: "Camiseta Básica - Trindade (Preta)",
        image: shirt7,
        color: "#353535",
        sizes: { P: false, M: false, G: true, GG: false, G1: false, G2: false },
      },
    ],
  },
  {
    id: 8,
    baseName: "Camiseta Oversized - Trindade",
    description:
      "O desenho traz em unidade o Pai, o Filho e o Espírito Santo, representando o mistério e a glória da Trindade.",
    price: "R$ 120,00",
    variants: [
      {
        name: "Camiseta Oversized - Trindade (Preta)",
        image: shirt15,
        color: "#353535",
        sizes: { P: false, M: true, G: false, GG: false, G1: false, G2: false },
      },
      {
        name: "Camiseta Oversized - Trindade (Vermelha)",
        image: shirt16,
        color: "#94302f",
        sizes: { P: true, M: true, G: true, GG: true,}, // falta confirmar
      },
    ],
  },
];

export const ProductsSection = () => {
  const [selectedProducts, setSelectedProducts] = useState<
    { id: number; baseName: string; price: string; size: string }[]
  >([]);

  const handleSelect = (product: {
    id: number;
    baseName: string;
    price: string;
    size: string;
  }) => {
    setSelectedProducts((prev) => [...prev, product]);
  };

  const handleWhatsAppCheckout = () => {
    if (selectedProducts.length === 0) return;

    const productLines = selectedProducts.map(
      (p, index) =>
        `${index + 1}. ${p.baseName} - ${p.price} (Tamanho: ${p.size})`
    );

    const message = `Olá! Gostaria de comprar os seguintes produtos:\n\n${productLines.join(
      '\n'
    )}`;
    const url = `https://wa.me/5581999014848?text=${encodeURIComponent(
      message
    )}`;

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
            Cada peça é cuidadosamente desenvolvida para expressar sua fé com
            estilo contemporâneo. Descubra designs únicos que conectam propósito
            e moda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={`${product.id}-${product.baseName}`}
              product={product}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {selectedProducts.length > 0 && (
          <div className="mt-16 text-center flex flex-col items-center space-y-6">
            <div className="bg-white border border-muted p-6 rounded-lg max-w-xl w-full text-left shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Produtos Selecionados:
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                {selectedProducts.map((item, index) => (
                  <li
                    key={index}
                    className="border-b border-muted pb-2 flex justify-between items-center"
                  >
                    <span>
                      {index + 1}. <strong>{item.baseName}</strong> — {item.price} (Tamanho: {item.size})
                    </span>
                    <button
                      onClick={() =>
                        setSelectedProducts((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="text-red-500 font-bold ml-4 hover:text-red-700 transition"
                    >
                      ×
                    </button>
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
