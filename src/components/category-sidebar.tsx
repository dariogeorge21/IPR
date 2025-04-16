import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

interface CategorySidebarProps {
  selectedCategory?: string;
}

export function CategorySidebar({ selectedCategory }: CategorySidebarProps) {
  const categories = [
    { id: "laptops", name: "Laptops" },
    { id: "desktops", name: "Desktops" },
    { id: "accessories", name: "Accessories" },
    { id: "gaming", name: "Gaming Computers" },
    { id: "business", name: "Business Computers" },
    { id: "second-hand", name: "Second Hand" },
  ];

  const priceRanges = [
    { id: "under-500", name: "Under $500" },
    { id: "500-1000", name: "$500 - $1000" },
    { id: "1000-1500", name: "$1000 - $1500" },
    { id: "1500-2000", name: "$1500 - $2000" },
    { id: "over-2000", name: "Over $2000" },
  ];

  const computerTypes = [
    { id: "laptop", name: "Laptops" },
    { id: "desktop", name: "Desktops" },
    { id: "accessory", name: "Accessories" },
  ];

  return (
    <div className="w-full space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox 
                id={`category-${category.id}`} 
                checked={selectedCategory === category.id}
              />
              <label
                htmlFor={`category-${category.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <Link 
                  href={`/products?category=${category.id}`}
                  className={selectedCategory === category.id ? "font-bold" : ""}
                >
                  {category.name}
                </Link>
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center space-x-2">
              <Checkbox id={`price-${range.id}`} />
              <label
                htmlFor={`price-${range.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {range.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="font-semibold mb-3">Computer Type</h3>
        <div className="space-y-2">
          {computerTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox id={`type-${type.id}`} />
              <label
                htmlFor={`type-${type.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {type.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
