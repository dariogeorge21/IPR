import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProductById } from "@/data/products";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Star, Truck, ShieldCheck, ArrowLeft, Plus, Minus } from "lucide-react";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-8 md:py-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to products
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg border bg-muted/10">
              <PlaceholderImage 
                type={product.type} 
                className="h-full w-full"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold">{product.name}</h1>
                
                <div className="mt-4 text-2xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </div>
                
                <p className="mt-4 text-muted-foreground">
                  {product.description}
                </p>
                
                <Separator className="my-6" />
                
                {/* Quantity Selector */}
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none">
                      <Minus className="h-3 w-3" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <div className="h-8 w-12 flex items-center justify-center border-y">
                      1
                    </div>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none">
                      <Plus className="h-3 w-3" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Buy Now
                  </Button>
                </div>
                
                {/* Shipping & Returns */}
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Truck className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Free Shipping</h3>
                      <p className="text-sm text-muted-foreground">
                        Free standard shipping on orders over $99
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Warranty</h3>
                      <p className="text-sm text-muted-foreground">
                        1-year limited warranty included
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Specifications */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Specifications</h2>
            <div className="bg-muted/10 rounded-lg border p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {Object.entries(product.specs).map(([key, value]) => value && (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* This would typically be populated with actual related products */}
              <div className="aspect-square bg-muted/10 rounded-lg border flex items-center justify-center">
                <span className="text-muted-foreground">Related Product 1</span>
              </div>
              <div className="aspect-square bg-muted/10 rounded-lg border flex items-center justify-center">
                <span className="text-muted-foreground">Related Product 2</span>
              </div>
              <div className="aspect-square bg-muted/10 rounded-lg border flex items-center justify-center">
                <span className="text-muted-foreground">Related Product 3</span>
              </div>
              <div className="aspect-square bg-muted/10 rounded-lg border flex items-center justify-center">
                <span className="text-muted-foreground">Related Product 4</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
