import React from 'react';
import { Product } from '../types/api';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <Card className="group hover:scale-105 transition-all duration-300 theme-shadow animate-theme-switch overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-card-foreground line-clamp-2 text-sm">
            {product.title}
          </h3>
          
          <p className="text-xs text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            
            <div className="flex items-center gap-1 text-xs">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-muted-foreground">
                {product.rating.rate} ({product.rating.count})
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2 hover:scale-105 transition-transform"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;