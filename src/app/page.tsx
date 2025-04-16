import Link from "next/link";
import { Header } from "@/components/header";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { getFeaturedComputers } from "@/data/computers";

export default function Home() {
  const featuredProducts = getFeaturedComputers();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to TechStore</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your one-stop shop for high-quality computers, laptops, and accessories.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/products">
                  <Button size="lg">Shop Now</Button>
                </Link>
                <Link href="/products?category=gaming">
                  <Button variant="outline" size="lg">Gaming PCs</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-between w-full">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
                  <p className="text-muted-foreground">
                    Check out our most popular computers and accessories.
                  </p>
                </div>
                <Link href="/products">
                  <Button variant="ghost">View All</Button>
                </Link>
              </div>
              <ProductGrid products={featuredProducts} />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Browse by Category</h2>
                <p className="text-muted-foreground">
                  Find exactly what you need from our wide range of products.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
                <Link href="/products?category=laptops">
                  <div className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border hover:border-primary transition-colors">
                    <span className="text-4xl mb-2">💻</span>
                    <span className="font-medium">Laptops</span>
                  </div>
                </Link>
                <Link href="/products?category=desktops">
                  <div className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border hover:border-primary transition-colors">
                    <span className="text-4xl mb-2">🖥️</span>
                    <span className="font-medium">Desktops</span>
                  </div>
                </Link>
                <Link href="/products?category=accessories">
                  <div className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border hover:border-primary transition-colors">
                    <span className="text-4xl mb-2">🖱️</span>
                    <span className="font-medium">Accessories</span>
                  </div>
                </Link>
                <Link href="/products?category=gaming">
                  <div className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border hover:border-primary transition-colors">
                    <span className="text-4xl mb-2">🎮</span>
                    <span className="font-medium">Gaming</span>
                  </div>
                </Link>
                <Link href="/products?category=business">
                  <div className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border hover:border-primary transition-colors">
                    <span className="text-4xl mb-2">💼</span>
                    <span className="font-medium">Business</span>
                  </div>
                </Link>
                <Link href="/products?category=second-hand">
                  <div className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border hover:border-primary transition-colors">
                    <span className="text-4xl mb-2">♻️</span>
                    <span className="font-medium">Second Hand</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
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
