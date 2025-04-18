import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";

// Mock cart items
const cartItems = [
  {
    id: "1",
    name: "Jadek ProBook X5",
    price: 1299.99,
    quantity: 1,
    type: "laptop" as const,
  },
  {
    id: "10",
    name: "Jadek Mechanical Gaming Keyboard",
    price: 129.99,
    quantity: 2,
    type: "accessory" as const,
  }
];

export default function CartPage() {
  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 15.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            
            {cartItems.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-background rounded-lg border shadow-sm">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <div className="w-20 h-20 rounded-md overflow-hidden">
                              <PlaceholderImage type={item.type} className="h-full w-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium truncate">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">Unit Price: ${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Minus className="h-3 w-3" />
                                <span className="sr-only">Decrease quantity</span>
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Plus className="h-3 w-3" />
                                <span className="sr-only">Increase quantity</span>
                              </Button>
                            </div>
                            <div className="text-right min-w-[80px]">
                              <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                <X className="h-4 w-4" />
                                <span className="sr-only">Remove item</span>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-background rounded-lg border shadow-sm p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Order Summary</h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="pt-4 space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="promo-code" className="text-sm font-medium">
                          Promo Code
                        </label>
                        <div className="flex space-x-2">
                          <Input id="promo-code" placeholder="Enter code" />
                          <Button variant="outline">Apply</Button>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Proceed to Checkout
                      </Button>
                      <Link href="/" className="block text-center text-sm text-blue-600 hover:underline">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Looks like you haven't added any products to your cart yet.
                </p>
                <Link href="/">
                  <Button>Start Shopping</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
