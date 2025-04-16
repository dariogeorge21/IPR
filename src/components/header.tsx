import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold hover:underline">
                  Home
                </Link>
                <Link href="/products" className="text-lg font-semibold hover:underline">
                  All Products
                </Link>
                <Link href="/products?category=laptops" className="text-lg font-semibold hover:underline">
                  Laptops
                </Link>
                <Link href="/products?category=desktops" className="text-lg font-semibold hover:underline">
                  Desktops
                </Link>
                <Link href="/products?category=accessories" className="text-lg font-semibold hover:underline">
                  Accessories
                </Link>
                <Link href="/products?category=gaming" className="text-lg font-semibold hover:underline">
                  Gaming
                </Link>
                <Link href="/products?category=business" className="text-lg font-semibold hover:underline">
                  Business
                </Link>
                <Link href="/products?category=second-hand" className="text-lg font-semibold hover:underline">
                  Second Hand
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">TechStore</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:underline">
              All Products
            </Link>
            <Link href="/products?category=laptops" className="text-sm font-medium hover:underline">
              Laptops
            </Link>
            <Link href="/products?category=desktops" className="text-sm font-medium hover:underline">
              Desktops
            </Link>
            <Link href="/products?category=accessories" className="text-sm font-medium hover:underline">
              Accessories
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <form className="hidden md:flex relative w-full max-w-sm items-center">
            <Input
              type="search"
              placeholder="Search products..."
              className="pr-10"
            />
            <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
