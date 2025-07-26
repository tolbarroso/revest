import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const handleWhatsApp = () => {
    const message = `Olá! Tenho interesse no produto: ${product.name} - ${product.price}. Gostaria de mais informações.`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="font-brand text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        
        <p className="font-body text-muted-foreground mb-4 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-brand text-2xl font-bold text-accent">
            {product.price}
          </span>
          
          <Button
            onClick={handleWhatsApp}
            variant="whatsapp"
            className="flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};