import { Computer } from "@/types";

export const computers: Computer[] = [
  {
    id: "1",
    name: "TechPro UltraBook X5",
    price: 1299.99,
    image: "/images/laptop1.png",
    description: "Powerful and lightweight laptop for professionals and creatives.",
    type: "laptop",
    categories: ["laptops", "business"],
    specs: {
      processor: "Intel Core i7-12700H",
      ram: "16GB DDR5",
      storage: "512GB NVMe SSD",
      graphics: "Intel Iris Xe Graphics",
      display: "15.6-inch 4K OLED (3840 x 2160)",
      operatingSystem: "Windows 11 Pro",
      connectivity: ["Wi-Fi 6E", "Bluetooth 5.2", "Thunderbolt 4", "USB 3.2", "HDMI 2.1"],
      battery: "Up to 12 hours",
      dimensions: "13.3 x 9.1 x 0.6 inches",
      weight: "3.5 lbs",
      color: "Silver",
      warranty: "1 year limited warranty"
    },
    stock: 15,
    rating: 4.7,
    reviews: 128,
    featured: true
  },
  {
    id: "2",
    name: "GameMaster Pro X",
    price: 1899.99,
    image: "/images/laptop2.png",
    description: "Ultimate gaming laptop with high-performance graphics and cooling.",
    type: "laptop",
    categories: ["laptops", "gaming"],
    specs: {
      processor: "AMD Ryzen 9 7950X",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      graphics: "NVIDIA GeForce RTX 4080 16GB",
      display: "17.3-inch QHD 240Hz (2560 x 1440)",
      operatingSystem: "Windows 11 Home",
      connectivity: ["Wi-Fi 6E", "Bluetooth 5.3", "USB-C", "USB 3.2", "HDMI 2.1", "Ethernet"],
      battery: "Up to 5 hours gaming, 8 hours regular use",
      dimensions: "15.6 x 10.2 x 0.9 inches",
      weight: "5.7 lbs",
      color: "Black with RGB lighting",
      warranty: "2 year limited warranty"
    },
    stock: 8,
    rating: 4.9,
    reviews: 87,
    featured: true
  },
  {
    id: "3",
    name: "BusinessElite 450",
    price: 1099.99,
    image: "/images/laptop3.png",
    description: "Reliable business laptop with enhanced security features.",
    type: "laptop",
    categories: ["laptops", "business"],
    specs: {
      processor: "Intel Core i5-12500H",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      graphics: "Intel UHD Graphics",
      display: "14-inch FHD (1920 x 1080)",
      operatingSystem: "Windows 11 Pro",
      connectivity: ["Wi-Fi 6", "Bluetooth 5.1", "USB-C", "USB 3.1", "HDMI", "Ethernet"],
      battery: "Up to 14 hours",
      dimensions: "12.7 x 8.5 x 0.7 inches",
      weight: "3.1 lbs",
      color: "Matte Black",
      warranty: "3 year business warranty"
    },
    stock: 22,
    rating: 4.5,
    reviews: 64
  },
  {
    id: "4",
    name: "PowerTower 9000",
    price: 2499.99,
    image: "/images/desktop1.png",
    description: "High-performance desktop for professional workloads and content creation.",
    type: "desktop",
    categories: ["desktops", "business"],
    specs: {
      processor: "Intel Core i9-13900K",
      ram: "64GB DDR5",
      storage: "2TB NVMe SSD + 4TB HDD",
      graphics: "NVIDIA RTX 4090 24GB",
      operatingSystem: "Windows 11 Pro",
      connectivity: ["Wi-Fi 6E", "Bluetooth 5.2", "USB 3.2", "Thunderbolt 4", "HDMI 2.1", "DisplayPort 1.4"],
      dimensions: "18.2 x 8.3 x 19.5 inches",
      color: "Black",
      warranty: "3 year limited warranty"
    },
    stock: 5,
    rating: 4.8,
    reviews: 42,
    featured: true
  },
  {
    id: "5",
    name: "GamerX Extreme",
    price: 1999.99,
    image: "/images/desktop2.png",
    description: "Custom gaming desktop with RGB lighting and liquid cooling.",
    type: "desktop",
    categories: ["desktops", "gaming"],
    specs: {
      processor: "AMD Ryzen 7 7800X3D",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD + 2TB HDD",
      graphics: "AMD Radeon RX 7900 XTX 24GB",
      operatingSystem: "Windows 11 Home",
      connectivity: ["Wi-Fi 6", "Bluetooth 5.2", "USB 3.2", "HDMI 2.1", "DisplayPort 1.4"],
      dimensions: "20.5 x 9.1 x 20.9 inches",
      color: "Black with RGB",
      warranty: "2 year limited warranty"
    },
    stock: 7,
    rating: 4.9,
    reviews: 56
  },
  {
    id: "6",
    name: "CompactPro Mini",
    price: 799.99,
    image: "/images/desktop3.png",
    description: "Space-saving mini desktop with surprising performance.",
    type: "desktop",
    categories: ["desktops", "business"],
    specs: {
      processor: "Intel Core i5-12400",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      graphics: "Intel UHD Graphics 730",
      operatingSystem: "Windows 11 Home",
      connectivity: ["Wi-Fi 6", "Bluetooth 5.0", "USB 3.1", "HDMI", "DisplayPort"],
      dimensions: "7.7 x 7.7 x 2.6 inches",
      color: "Silver",
      warranty: "1 year limited warranty"
    },
    stock: 18,
    rating: 4.3,
    reviews: 29
  },
  {
    id: "7",
    name: "RefurbPro X1 Carbon",
    price: 699.99,
    image: "/images/laptop4.png",
    description: "Certified refurbished business laptop at an affordable price.",
    type: "laptop",
    categories: ["laptops", "business", "second-hand"],
    specs: {
      processor: "Intel Core i7-10510U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      graphics: "Intel UHD Graphics",
      display: "14-inch FHD (1920 x 1080)",
      operatingSystem: "Windows 10 Pro (Windows 11 Ready)",
      connectivity: ["Wi-Fi 6", "Bluetooth 5.0", "USB-C", "USB 3.0", "HDMI"],
      battery: "Up to 10 hours",
      dimensions: "12.7 x 8.5 x 0.6 inches",
      weight: "2.4 lbs",
      color: "Black",
      warranty: "90 day warranty"
    },
    stock: 3,
    rating: 4.2,
    reviews: 18
  },
  {
    id: "8",
    name: "4K Ultra Gaming Monitor",
    price: 499.99,
    image: "/images/accessory1.png",
    description: "Premium 4K gaming monitor with 144Hz refresh rate and 1ms response time.",
    type: "accessory",
    categories: ["accessories", "gaming"],
    specs: {
      display: "27-inch 4K UHD (3840 x 2160)",
      connectivity: ["DisplayPort 1.4", "HDMI 2.1", "USB 3.0 hub"],
      dimensions: "24.1 x 21.2 x 9.3 inches",
      weight: "12.1 lbs",
      color: "Black",
      warranty: "3 year limited warranty"
    },
    stock: 25,
    rating: 4.7,
    reviews: 93
  },
  {
    id: "9",
    name: "Mechanical Gaming Keyboard",
    price: 129.99,
    image: "/images/accessory2.png",
    description: "RGB mechanical keyboard with customizable keys and macro support.",
    type: "accessory",
    categories: ["accessories", "gaming"],
    specs: {
      connectivity: ["USB-C", "Bluetooth 5.0"],
      dimensions: "17.3 x 5.2 x 1.4 inches",
      weight: "2.1 lbs",
      color: "Black with RGB",
      warranty: "2 year limited warranty"
    },
    stock: 42,
    rating: 4.6,
    reviews: 127
  },
  {
    id: "10",
    name: "Wireless Office Mouse",
    price: 39.99,
    image: "/images/accessory3.png",
    description: "Ergonomic wireless mouse with long battery life for office use.",
    type: "accessory",
    categories: ["accessories", "business"],
    specs: {
      connectivity: ["2.4GHz wireless", "Bluetooth 4.0"],
      battery: "Up to 24 months",
      dimensions: "4.5 x 2.9 x 1.6 inches",
      weight: "0.3 lbs",
      color: "Gray",
      warranty: "1 year limited warranty"
    },
    stock: 67,
    rating: 4.4,
    reviews: 215
  },
  {
    id: "11",
    name: "BudgetBook Air",
    price: 599.99,
    image: "/images/laptop5.png",
    description: "Affordable and lightweight laptop for students and everyday use.",
    type: "laptop",
    categories: ["laptops"],
    specs: {
      processor: "AMD Ryzen 5 5500U",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      graphics: "AMD Radeon Graphics",
      display: "15.6-inch FHD (1920 x 1080)",
      operatingSystem: "Windows 11 Home",
      connectivity: ["Wi-Fi 5", "Bluetooth 4.2", "USB-C", "USB 3.0", "HDMI"],
      battery: "Up to 8 hours",
      dimensions: "14.1 x 9.2 x 0.7 inches",
      weight: "3.9 lbs",
      color: "Silver",
      warranty: "1 year limited warranty"
    },
    stock: 31,
    rating: 4.1,
    reviews: 76
  },
  {
    id: "12",
    name: "HomeOffice Desktop",
    price: 649.99,
    image: "/images/desktop4.png",
    description: "Reliable desktop computer for home office and everyday tasks.",
    type: "desktop",
    categories: ["desktops"],
    specs: {
      processor: "Intel Core i3-12100",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      graphics: "Intel UHD Graphics 730",
      operatingSystem: "Windows 11 Home",
      connectivity: ["Wi-Fi 5", "Bluetooth 4.2", "USB 3.0", "HDMI", "Ethernet"],
      dimensions: "15.4 x 7.1 x 14.2 inches",
      color: "Black",
      warranty: "1 year limited warranty"
    },
    stock: 14,
    rating: 4.0,
    reviews: 42
  }
];

export const getComputersByCategory = (category: string) => {
  return computers.filter(computer => computer.categories.includes(category as any));
};

export const getFeaturedComputers = () => {
  return computers.filter(computer => computer.featured);
};

export const getComputerById = (id: string) => {
  return computers.find(computer => computer.id === id);
};
