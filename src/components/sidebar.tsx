import React from "react";
import Link from "next/link";
import { Package, Cpu, GraduationCap, Briefcase, Gamepad2, IndianRupee } from "lucide-react";
import { Category } from "@/data/products";

interface SidebarProps {
  selectedCategory?: Category;
}

export function Sidebar({ selectedCategory }: SidebarProps) {
  const primaryCategories = [
    { id: "desktops", name: "All Desktops", icon: <Cpu className="h-4 w-4" /> },
  ];

  const useCaseCategories = [
    { id: "student-desktops", name: "Student Desktops", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "business-desktops", name: "Business Desktops", icon: <Briefcase className="h-4 w-4" /> },
    { id: "gaming-desktops", name: "Gaming Desktops", icon: <Gamepad2 className="h-4 w-4" /> },
  ];

  const priceRangeCategories = [
    { id: "below-50k", name: "Below ₹50,000", icon: <IndianRupee className="h-4 w-4" /> },
    { id: "50k-75k", name: "₹50,000 - ₹75,000", icon: <IndianRupee className="h-4 w-4" /> },
    { id: "75k-100k", name: "₹75,000 - ₹1,00,000", icon: <IndianRupee className="h-4 w-4" /> },
    { id: "100k-150k", name: "₹1,00,000 - ₹1,50,000", icon: <IndianRupee className="h-4 w-4" /> },
    { id: "150k-200k", name: "₹1,50,000 - ₹2,00,000", icon: <IndianRupee className="h-4 w-4" /> },
    { id: "200k-300k", name: "₹2,00,000 - ₹3,00,000", icon: <IndianRupee className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full space-y-6">
      <div>
        <h3 className="font-semibold mb-3 text-lg">Categories</h3>
        <div className="space-y-1">
          {primaryCategories.map((category) => (
            <Link
              key={category.id}
              href={`/?category=${category.id}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors ${
                selectedCategory === category.id ? "bg-muted font-medium" : ""
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-lg">Desktop Types</h3>
        <div className="space-y-1">
          {useCaseCategories.map((category) => (
            <Link
              key={category.id}
              href={`/?category=${category.id}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors ${
                selectedCategory === category.id ? "bg-muted font-medium" : ""
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-lg">Price Range</h3>
        <div className="space-y-1">
          {priceRangeCategories.map((category) => (
            <Link
              key={category.id}
              href={`/?category=${category.id}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors ${
                selectedCategory === category.id ? "bg-muted font-medium" : ""
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
