import React from "react";
import Link from "next/link";
import { Computer } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Computer;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <PlaceholderImage 
            type={product.type} 
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className="font-semibold truncate">{product.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm">{product.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>
          <p className="font-medium">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
