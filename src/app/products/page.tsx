import React from "react";
import { Header } from "@/components/header";
import { CategorySidebar } from "@/components/category-sidebar";
import { ProductGrid } from "@/components/product-grid";
import { computers, getComputersByCategory } from "@/data/computers";
import { Separator } from "@/components/ui/separator";

interface ProductsPageProps {
  searchParams: {
    category?: string;
  };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = searchParams;
  
  // Filter products based on category
  const products = category 
    ? getComputersByCategory(category) 
    : computers;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4 lg:w-1/5">
            <CategorySidebar selectedCategory={category} />
          </div>
          
          <Separator orientation="vertical" className="hidden md:block" />
          
          {/* Main Content */}
          <div className="md:w-3/4 lg:w-4/5">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">
                {category 
                  ? `${category.charAt(0).toUpperCase() + category.slice(1)}` 
                  : 'All Products'}
              </h1>
              <p className="text-muted-foreground mt-2">
                {products.length} products found
              </p>
            </div>
            
            <ProductGrid products={products} />
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <div className="text-sm text-muted-foreground">
            © 2023 TechStore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
