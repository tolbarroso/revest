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

const validCoupons = ["LIPIE5","ALEGRIA5","ANDERSON5"];

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
        sizes: { P: true, M: true, G: true, GG: true, G1: true, G2: true },
      },
      {
        name: "Camiseta Básica - Banquete (Areia)",
        image: shirt2,
        color: "#d9c3a0",
        sizes: { P: true, M: true, G: true, GG: true, G1: true, G2: true },
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
        sizes: { P: true, M: true, G: true, GG: true},
      },
      {
        name: "Camiseta Oversized - Banquete (Off-white)",
        image: shirt14,
        color: "#e0dfd8",
        sizes: { P: true, M: true, G: true, GG: true},
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
        sizes: { P: true, M: true, G: true, GG: true, G1: true, G2: true },
      },
      {
        name: "Camiseta Básica - Jesus is the way (Areia)",
        image: shirt3,
        color: "#d9c3a0",
        sizes: { P: true, M: true, G: true, GG: true, G1: true, G2: true },
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
        sizes: { P: true, M: true, G: true, GG: true},
      },
      {
        name: "Camiseta Oversized - Jesus is the way (Areia)",
        image: shirt12,
        color: "#d9c3a0",
        sizes: { P: true, M: true, G: true, GG: true},
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
        sizes: { P: true, M: true, G: true, GG: true, G1: true, G2: true },
      },
      {
        name: "Camiseta Básica - Cordeiro (Preta)",
        image: shirt6,
        color: "#353535",
        sizes: { P: true, M: true, G: true, GG: true, G1: true, G2: true },
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
        sizes: { P: true, M: true, G: true, GG: true},
      },
      {
        name: "Camiseta Oversized - Cordeiro (Preta)",
        image: shirt11,
        color: "#353535",
        sizes: { P: true, M: true, G: true, GG: true},
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
        sizes: { P: true, M: true, G: true, GG: true, G1: true, G2: true }, // falta confirmar
      },
      {
        name: "Camiseta Básica - Trindade (Preta)",
        image: shirt7,
        color: "#353535",
        sizes: { P: true, M: true, G: true, GG: true, G1: true, G2: true },
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
        sizes: { P: true, M: true, G: true, GG: true},
      },
      {
        name: "Camiseta Oversized - Trindade (Vermelha)",
        image: shirt16,
        color: "#94302f",
        sizes: { P: true, M: true, G: true, GG: true},
      },
    ],
  },
];

export const ProductsSection = () => {
  const [selectedProducts, setSelectedProducts] = useState<
    { id: number; baseName: string; price: string; size: string; numericPrice: number }[]
  >([]);
  
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState("");

  const handleSelect = (product: {
    id: number;
    baseName: string;
    price: string;
    size: string;
  }) => {
    const numericPrice = parseFloat(product.price.replace("R$ ", "").replace(",", "."));
    setSelectedProducts((prev) => [...prev, { ...product, numericPrice }]);
  };

  // cálculo do subtotal, desconto e total
  const subtotal = selectedProducts.reduce((acc, p) => acc + p.numericPrice, 0);

  let discount = 0;
  if (appliedCoupon === "ALEGRIA5" || appliedCoupon === "LIPIE5" || appliedCoupon === "ANDERSON5") {
    discount = subtotal * 0.05; // 5% de desconto
  }

  const total = subtotal - discount;

  const handleWhatsAppCheckout = () => {
    if (selectedProducts.length === 0) return;

    const productLines = selectedProducts.map(
      (p, index) =>
        `${index + 1}. ${p.baseName} - R$ ${p.numericPrice.toFixed(2).replace(".", ",")} (Tamanho: ${p.size})`
    );

    const couponText = appliedCoupon
      ? `\n\nCupom aplicado: ${appliedCoupon} (-R$ ${discount.toFixed(2).replace(".", ",")})`
      : "";

    const totalText = `\n\nTotal: R$ ${total.toFixed(2).replace(".", ",")}`;

    const message = `Olá! Gostaria de comprar os seguintes produtos:\n\n${productLines.join(
      '\n'
    )}${couponText}${totalText}`;
    
    const url = `https://wa.me/5581999014848?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleApplyCoupon = () => {
    if (validCoupons.includes(couponInput.toUpperCase())) {
      setAppliedCoupon(couponInput.toUpperCase());
      setCouponError("");
    } else {
      setAppliedCoupon(null);
      setCouponError("Cupom inválido");
    }
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
                      {index + 1}. <strong>{item.baseName}</strong> — R$ {item.numericPrice.toFixed(2).replace(".", ",")} (Tamanho: {item.size})
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

              {/* Subtotal, desconto e total */}
              <div className="mt-4">
                <p className="font-semibold">Subtotal: R$ {subtotal.toFixed(2).replace(".", ",")}</p>
                {discount > 0 && (
                  <p className="text-green-600 font-semibold">Desconto: -R$ {discount.toFixed(2).replace(".", ",")}</p>
                )}
                <p className="font-bold text-lg">Total: R$ {total.toFixed(2).replace(".", ",")}</p>
              </div>
            </div>

            {/* Área de Cupom */}
            <div className="w-full max-w-md text-left">
              <label className="block mb-2 text-sm font-medium text-foreground">
                Tem um cupom de desconto?
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Digite seu cupom"
                  className="flex-1 border border-muted rounded-md px-3 py-2"
                />
                <Button onClick={handleApplyCoupon}>Aplicar</Button>
              </div>
              {couponError && (
                <p className="text-red-500 text-sm mt-2">{couponError}</p>
              )}
              {appliedCoupon && (
                <p className="text-green-600 text-sm mt-2">
                  Cupom <strong>{appliedCoupon}</strong> aplicado com sucesso!
                </p>
              )}
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
              onClick={() => {
                setSelectedProducts([]);
                setAppliedCoupon(null);
                setCouponInput("");
                setCouponError("");
              }}
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