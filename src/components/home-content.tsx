'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { products, getProductsByCategory, Category } from "@/data/products";

export function HomeContent({ categoryParam }: { categoryParam?: string }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    // Convert to Category type if valid
    const validCategories: Category[] = [
      'desktops', 'gaming-desktops', 'business-desktops', 'student-desktops',
      'below-50k', '50k-75k', '75k-100k', '100k-150k', '150k-200k', '200k-300k'
    ];
    
    const category = categoryParam && validCategories.includes(categoryParam as Category) 
      ? categoryParam as Category 
      : undefined;
    
    // Filter products based on category
    const filtered = category 
      ? getProductsByCategory(category) 
      : products;
      
    setFilteredProducts(filtered);
  }, [categoryParam]);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">Build Your Dream PC</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Jadek PC Solutions offers custom-built desktops for gaming, business, and everyday use.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/?category=gaming-desktops">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Gaming PCs</Button>
                </Link>
                <Link href="/?category=business-desktops">
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">Business PCs</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar - Hidden on mobile, shown on md and up */}
              <div className="hidden md:block md:w-1/4 lg:w-1/5">
                <Sidebar selectedCategory={categoryParam as Category | undefined} />
              </div>
              
              {/* Main Content */}
              <div className="md:w-3/4 lg:w-4/5">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {categoryParam 
                      ? `${categoryParam.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}` 
                      : 'All Products'}
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    {filteredProducts.length} products found
                  </p>
                </div>
                
                <ProductGrid products={filteredProducts} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
