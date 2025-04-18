export type Category = 
  | 'laptops'
  | 'desktops'
  | 'all-in-ones'
  | 'accessories'
  | 'student-laptops'
  | 'business-laptops'
  | 'gaming-laptops';

export type ProductType = 'laptop' | 'desktop' | 'all-in-one' | 'accessory';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  type: ProductType;
  categories: Category[];
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    graphics?: string;
    display?: string;
    operatingSystem?: string;
  };
  stock: number;
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Jadek ProBook X5",
    price: 1299.99,
    image: "/images/laptop1.png",
    description: "Powerful and lightweight laptop for professionals and creatives.",
    type: "laptop",
    categories: ["laptops", "business-laptops"],
    specs: {
      processor: "Intel Core i7-12700H",
      ram: "16GB DDR5",
      storage: "512GB NVMe SSD",
      graphics: "Intel Iris Xe Graphics",
      display: "15.6-inch 4K OLED (3840 x 2160)",
      operatingSystem: "Windows 11 Pro",
    },
    stock: 15,
    rating: 4.7
  },
  {
    id: "2",
    name: "Jadek GameMaster Pro",
    price: 1899.99,
    image: "/images/laptop2.png",
    description: "Ultimate gaming laptop with high-performance graphics and cooling.",
    type: "laptop",
    categories: ["laptops", "gaming-laptops"],
    specs: {
      processor: "AMD Ryzen 9 7950X",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      graphics: "NVIDIA GeForce RTX 4080 16GB",
      display: "17.3-inch QHD 240Hz (2560 x 1440)",
      operatingSystem: "Windows 11 Home",
    },
    stock: 8,
    rating: 4.9
  },
  {
    id: "3",
    name: "Jadek BusinessElite 450",
    price: 1099.99,
    image: "/images/laptop3.png",
    description: "Reliable business laptop with enhanced security features.",
    type: "laptop",
    categories: ["laptops", "business-laptops"],
    specs: {
      processor: "Intel Core i5-12500H",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      graphics: "Intel UHD Graphics",
      display: "14-inch FHD (1920 x 1080)",
      operatingSystem: "Windows 11 Pro",
    },
    stock: 22,
    rating: 4.5
  },
  {
    id: "4",
    name: "Jadek PowerTower 9000",
    price: 2499.99,
    image: "/images/desktop1.png",
    description: "High-performance desktop for professional workloads and content creation.",
    type: "desktop",
    categories: ["desktops"],
    specs: {
      processor: "Intel Core i9-13900K",
      ram: "64GB DDR5",
      storage: "2TB NVMe SSD + 4TB HDD",
      graphics: "NVIDIA RTX 4090 24GB",
      operatingSystem: "Windows 11 Pro",
    },
    stock: 5,
    rating: 4.8
  },
  {
    id: "5",
    name: "Jadek GamerX Extreme",
    price: 1999.99,
    image: "/images/desktop2.png",
    description: "Custom gaming desktop with RGB lighting and liquid cooling.",
    type: "desktop",
    categories: ["desktops"],
    specs: {
      processor: "AMD Ryzen 7 7800X3D",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD + 2TB HDD",
      graphics: "AMD Radeon RX 7900 XTX 24GB",
      operatingSystem: "Windows 11 Home",
    },
    stock: 7,
    rating: 4.9
  },
  {
    id: "6",
    name: "Jadek CompactPro Mini",
    price: 799.99,
    image: "/images/desktop3.png",
    description: "Space-saving mini desktop with surprising performance.",
    type: "desktop",
    categories: ["desktops"],
    specs: {
      processor: "Intel Core i5-12400",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      graphics: "Intel UHD Graphics 730",
      operatingSystem: "Windows 11 Home",
    },
    stock: 18,
    rating: 4.3
  },
  {
    id: "7",
    name: "Jadek StudentBook Air",
    price: 699.99,
    image: "/images/laptop4.png",
    description: "Affordable and lightweight laptop perfect for students.",
    type: "laptop",
    categories: ["laptops", "student-laptops"],
    specs: {
      processor: "Intel Core i5-1135G7",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      graphics: "Intel Iris Xe Graphics",
      display: "14-inch FHD (1920 x 1080)",
      operatingSystem: "Windows 11 Home",
    },
    stock: 25,
    rating: 4.4
  },
  {
    id: "8",
    name: "Jadek All-in-One 27",
    price: 1299.99,
    image: "/images/aio1.png",
    description: "Sleek all-in-one PC with stunning 27-inch display.",
    type: "all-in-one",
    categories: ["all-in-ones"],
    specs: {
      processor: "Intel Core i7-12700",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      graphics: "NVIDIA GeForce RTX 3060",
      display: "27-inch 4K UHD (3840 x 2160)",
      operatingSystem: "Windows 11 Home",
    },
    stock: 10,
    rating: 4.6
  },
  {
    id: "9",
    name: "Jadek All-in-One 24",
    price: 899.99,
    image: "/images/aio2.png",
    description: "Compact all-in-one PC perfect for home or office use.",
    type: "all-in-one",
    categories: ["all-in-ones"],
    specs: {
      processor: "Intel Core i5-12400",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      graphics: "Intel UHD Graphics 730",
      display: "24-inch FHD (1920 x 1080)",
      operatingSystem: "Windows 11 Home",
    },
    stock: 15,
    rating: 4.3
  },
  {
    id: "10",
    name: "Jadek Mechanical Gaming Keyboard",
    price: 129.99,
    image: "/images/accessory1.png",
    description: "RGB mechanical keyboard with customizable keys and macro support.",
    type: "accessory",
    categories: ["accessories"],
    specs: {},
    stock: 42,
    rating: 4.6
  },
  {
    id: "11",
    name: "Jadek Wireless Gaming Mouse",
    price: 79.99,
    image: "/images/accessory2.png",
    description: "High-precision wireless gaming mouse with customizable DPI.",
    type: "accessory",
    categories: ["accessories"],
    specs: {},
    stock: 38,
    rating: 4.7
  },
  {
    id: "12",
    name: "Jadek 4K Gaming Monitor",
    price: 399.99,
    image: "/images/accessory3.png",
    description: "27-inch 4K gaming monitor with 144Hz refresh rate and 1ms response time.",
    type: "accessory",
    categories: ["accessories"],
    specs: {
      display: "27-inch 4K UHD (3840 x 2160)",
    },
    stock: 12,
    rating: 4.8
  }
];

export const getProductsByCategory = (category: Category) => {
  return products.filter(product => product.categories.includes(category));
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
