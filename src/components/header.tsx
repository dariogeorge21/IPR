import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
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
                <Link href="/about" className="text-lg font-semibold hover:underline">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-semibold hover:underline">
                  Contact
                </Link>
                <Link href="/cart" className="text-lg font-semibold hover:underline">
                  Cart
                </Link>
                <div className="py-2">
                  <h3 className="font-bold mb-2">Categories</h3>
                  <div className="pl-2 flex flex-col gap-2">
                    <Link href="/?category=desktops" className="text-md hover:underline">
                      All Desktops
                    </Link>
                    <Link href="/?category=accessories" className="text-md hover:underline">
                      PC Accessories
                    </Link>
                  </div>
                </div>
                <div className="py-2">
                  <h3 className="font-bold mb-2">Desktop Types</h3>
                  <div className="pl-2 flex flex-col gap-2">
                    <Link href="/?category=student-desktops" className="text-md hover:underline">
                      Student Desktops
                    </Link>
                    <Link href="/?category=business-desktops" className="text-md hover:underline">
                      Business Desktops
                    </Link>
                    <Link href="/?category=gaming-desktops" className="text-md hover:underline">
                      Gaming Desktops
                    </Link>
                  </div>
                </div>
                <div className="py-2">
                  <h3 className="font-bold mb-2">Price Range</h3>
                  <div className="pl-2 flex flex-col gap-2">
                    <Link href="/?category=below-50k" className="text-md hover:underline">
                      Below ₹50,000
                    </Link>
                    <Link href="/?category=50k-75k" className="text-md hover:underline">
                      ₹50,000 - ₹75,000
                    </Link>
                    <Link href="/?category=75k-100k" className="text-md hover:underline">
                      ₹75,000 - ₹1,00,000
                    </Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">Jadek</span>
            <span className="text-lg hidden sm:inline">PC Solutions</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/?category=gaming-desktops" className="text-sm font-medium hover:underline">
              Gaming PCs
            </Link>
            <Link href="/?category=business-desktops" className="text-sm font-medium hover:underline">
              Business PCs
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline">
              Contact
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
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                0
              </span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
