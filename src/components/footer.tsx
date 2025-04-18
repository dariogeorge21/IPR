import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-8 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Jadek PC Solutions</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for all your computing needs. Quality PCs, expert advice, and exceptional service.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm hover:underline">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/?category=laptops" className="text-sm hover:underline">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href="/?category=desktops" className="text-sm hover:underline">
                  Desktops
                </Link>
              </li>
              <li>
                <Link href="/?category=all-in-ones" className="text-sm hover:underline">
                  All-in-Ones
                </Link>
              </li>
              <li>
                <Link href="/?category=accessories" className="text-sm hover:underline">
                  PC Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground">
              123 Tech Street<br />
              Silicon Valley, CA 94043<br />
              United States
            </address>
            <p className="text-sm text-muted-foreground">
              Email: info@jadekpc.com<br />
              Phone: (123) 456-7890
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jadek PC Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
