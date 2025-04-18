import React from "react";
import { Product } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Star } from "lucide-react";
import { Cpu } from "lucide-react";
import { HardDrive } from "lucide-react";
import { Server } from "lucide-react";
import { Zap } from "lucide-react";
import { Box } from "lucide-react";

// Custom icons for GPU and Memory since they might not be available
const Gpu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="6" width="16" height="12" rx="2" />
    <path d="M7 12h10" />
    <path d="M10 9v6" />
    <path d="M14 9v6" />
  </svg>
);

const Memory = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 19v-3" />
    <path d="M10 19v-3" />
    <path d="M14 19v-3" />
    <path d="M18 19v-3" />
    <rect x="4" y="4" width="16" height="12" rx="2" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
  </svg>
);

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Format price with Indian Rupee symbol and commas
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-square overflow-hidden bg-[#e6f7ef] flex items-center justify-center">
        <PlaceholderImage
          type={product.type}
          className="h-24 w-24 object-cover"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <div className="space-y-2">
          <h3 className="font-semibold truncate">{product.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm">{product.rating.toFixed(1)}</span>
          </div>

          {product.type === 'desktop' && (
            <div className="space-y-1 text-xs text-muted-foreground">
              {product.specs.processor && (
                <div className="flex items-center gap-1">
                  <Cpu className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{product.specs.processor}</span>
                </div>
              )}
              {product.specs.gpu && (
                <div className="flex items-center gap-1">
                  <Gpu className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{product.specs.gpu}</span>
                </div>
              )}
              {product.specs.ram && (
                <div className="flex items-center gap-1">
                  <Memory className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{product.specs.ram}</span>
                </div>
              )}
              {product.specs.storage && (
                <div className="flex items-center gap-1">
                  <HardDrive className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{product.specs.storage}</span>
                </div>
              )}
              {product.specs.motherboard && (
                <div className="flex items-center gap-1">
                  <Server className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{product.specs.motherboard}</span>
                </div>
              )}
              {product.specs.psu && (
                <div className="flex items-center gap-1">
                  <Zap className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{product.specs.psu}</span>
                </div>
              )}
              {product.specs.cabinet && (
                <div className="flex items-center gap-1">
                  <Box className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{product.specs.cabinet}</span>
                </div>
              )}
              {product.specs.cooling && (
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 flex-shrink-0 flex items-center justify-center">❄️</span>
                  <span className="truncate">{product.specs.cooling}</span>
                </div>
              )}
              {product.specs.operatingSystem && (
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 flex-shrink-0 flex items-center justify-center">🪟</span>
                  <span className="truncate">{product.specs.operatingSystem}</span>
                </div>
              )}
            </div>
          )}

          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
          <p className="font-medium text-lg text-blue-600">{formatPrice(product.price)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
