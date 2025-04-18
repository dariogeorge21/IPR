import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { products, getProductsByCategory, Category } from "@/data/products";

interface HomePageProps {
  searchParams: {
    category?: Category;
  };
}

export default function Home({ searchParams }: HomePageProps) {
  const { category } = searchParams;

  // Filter products based on category
  const filteredProducts = category
    ? getProductsByCategory(category)
    : products;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">Jadek PC Solutions</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your trusted partner for high-quality computers, laptops, and accessories.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Shop Now</Button>
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">Learn More</Button>
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
                <Sidebar selectedCategory={category} />
              </div>

              {/* Main Content */}
              <div className="md:w-3/4 lg:w-4/5">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {category
                      ? `${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`
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
