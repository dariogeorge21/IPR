import React from "react";
import Link from "next/link";
import { Laptop, Monitor, Package, Cpu, GraduationCap, Briefcase, Gamepad2 } from "lucide-react";
import { Category } from "@/data/products";

interface SidebarProps {
  selectedCategory?: Category;
}

export function Sidebar({ selectedCategory }: SidebarProps) {
  const primaryCategories = [
    { id: "laptops", name: "Laptops", icon: <Laptop className="h-4 w-4" /> },
    { id: "desktops", name: "Desktops", icon: <Cpu className="h-4 w-4" /> },
    { id: "all-in-ones", name: "All-in-Ones", icon: <Monitor className="h-4 w-4" /> },
    { id: "accessories", name: "PC Accessories", icon: <Package className="h-4 w-4" /> },
  ];

  const useCaseCategories = [
    { id: "student-laptops", name: "Student Laptops", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "business-laptops", name: "Business Laptops", icon: <Briefcase className="h-4 w-4" /> },
    { id: "gaming-laptops", name: "Gaming Laptops", icon: <Gamepad2 className="h-4 w-4" /> },
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
        <h3 className="font-semibold mb-3 text-lg">Use Cases</h3>
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
    </div>
  );
}
