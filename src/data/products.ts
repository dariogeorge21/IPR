export type Category =
  | 'desktops'
  | 'accessories'
  | 'gaming-desktops'
  | 'business-desktops'
  | 'student-desktops'
  | 'below-50k'
  | '50k-75k'
  | '75k-100k'
  | '100k-150k'
  | '150k-200k'
  | '200k-300k';

export type ProductType = 'desktop' | 'accessory';

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
    gpu?: string;
    ram?: string;
    storage?: string;
    motherboard?: string;
    psu?: string;
    cabinet?: string;
    cooling?: string;
    operatingSystem?: string;
  };
  stock: number;
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Jadek Spark 510",
    price: 50000,
    image: "/images/desktop1.png",
    description: "Entry-level desktop perfect for students and everyday computing tasks.",
    type: "desktop",
    categories: ["desktops", "student-desktops", "below-50k"],
    specs: {
      processor: "AMD Ryzen 5 5600G (with Vega Graphics)",
      gpu: "None (uses iGPU)",
      ram: "16GB DDR4 3200MHz",
      storage: "512GB NVMe SSD",
      motherboard: "B550M",
      psu: "450W Bronze",
      cabinet: "Minimal RGB Mid-Tower",
      operatingSystem: "Windows 11 Home",
    },
    stock: 15,
    rating: 4.5
  },
  {
    id: "2",
    name: "Jadek Coreblade 550",
    price: 55000,
    image: "/images/desktop2.png",
    description: "Balanced desktop for productivity and light gaming.",
    type: "desktop",
    categories: ["desktops", "student-desktops", "50k-75k"],
    specs: {
      processor: "Intel Core i3-12100F",
      gpu: "GTX 1650 4GB",
      ram: "16GB DDR4",
      storage: "512GB SSD + 1TB HDD",
      motherboard: "B660M",
      psu: "500W Bronze",
      cabinet: "Tempered Glass Side Panel",
      operatingSystem: "Windows 11 Home",
    },
    stock: 12,
    rating: 4.3
  },
  {
    id: "3",
    name: "Jadek Firebolt 560",
    price: 58000,
    image: "/images/desktop3.png",
    description: "Compact yet powerful desktop for gaming and content creation.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "50k-75k"],
    specs: {
      processor: "AMD Ryzen 5 5500",
      gpu: "Radeon RX 6500 XT 4GB",
      ram: "16GB DDR4",
      storage: "1TB NVMe SSD",
      motherboard: "B450M",
      psu: "550W Bronze",
      cabinet: "RGB Mesh Front Panel",
      operatingSystem: "Windows 11 Home",
    },
    stock: 8,
    rating: 4.4
  },
  {
    id: "4",
    name: "Jadek Ember 570",
    price: 60000,
    image: "/images/desktop4.png",
    description: "Sleek and efficient desktop for office and home use.",
    type: "desktop",
    categories: ["desktops", "business-desktops", "50k-75k"],
    specs: {
      processor: "Intel Core i3-13100F",
      gpu: "GTX 1650 Super",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      motherboard: "H610M",
      psu: "450W Bronze",
      cabinet: "Compact Mid-Tower",
      operatingSystem: "Windows 11 Pro",
    },
    stock: 10,
    rating: 4.2
  },
  {
    id: "5",
    name: "Jadek Venom 590",
    price: 68000,
    image: "/images/desktop5.png",
    description: "Powerful gaming desktop with vibrant RGB lighting.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "50k-75k"],
    specs: {
      processor: "AMD Ryzen 5 5600",
      gpu: "Radeon RX 6600",
      ram: "16GB DDR4",
      storage: "512GB SSD + 1TB HDD",
      motherboard: "B550M",
      psu: "550W Bronze",
      cabinet: "Full RGB Front",
      operatingSystem: "Windows 11 Home",
    },
    stock: 7,
    rating: 4.6
  },
  {
    id: "6",
    name: "Jadek Phantom 595",
    price: 69000,
    image: "/images/desktop6.png",
    description: "Stealthy gaming desktop with excellent cooling performance.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "50k-75k"],
    specs: {
      processor: "Intel Core i5-10400F",
      gpu: "GTX 1660 Super",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      motherboard: "B460M",
      psu: "550W",
      cabinet: "Black Steel Tower",
      operatingSystem: "Windows 11 Home",
    },
    stock: 9,
    rating: 4.5
  },
  {
    id: "7",
    name: "Jadek Nova 598",
    price: 70000,
    image: "/images/desktop7.png",
    description: "Balanced gaming desktop with premium components.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "50k-75k"],
    specs: {
      processor: "AMD Ryzen 5 5600",
      gpu: "GTX 1660 Ti",
      ram: "16GB DDR4",
      storage: "1TB NVMe SSD",
      motherboard: "B550",
      psu: "600W",
      cabinet: "RGB with tempered glass",
      operatingSystem: "Windows 11 Home",
    },
    stock: 6,
    rating: 4.7
  },
  {
    id: "8",
    name: "Jadek Storm 610",
    price: 85000,
    image: "/images/desktop8.png",
    description: "High-performance gaming desktop with ray-tracing capabilities.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "75k-100k"],
    specs: {
      processor: "Intel Core i5-12400F",
      gpu: "RTX 3060 12GB",
      ram: "16GB DDR4",
      storage: "1TB NVMe",
      motherboard: "B660M",
      psu: "600W Bronze",
      cabinet: "RGB Glass Tower",
      operatingSystem: "Windows 11 Home",
    },
    stock: 5,
    rating: 4.8
  },
  {
    id: "9",
    name: "Jadek Reaper 620",
    price: 88000,
    image: "/images/desktop9.png",
    description: "Powerful gaming desktop with AMD graphics for smooth gameplay.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "75k-100k"],
    specs: {
      processor: "AMD Ryzen 5 5600",
      gpu: "RX 6700 XT",
      ram: "16GB DDR4",
      storage: "512GB SSD + 1TB HDD",
      motherboard: "B550M",
      psu: "650W Bronze",
      cabinet: "High Airflow ATX",
      operatingSystem: "Windows 11 Home",
    },
    stock: 4,
    rating: 4.7
  },
  {
    id: "10",
    name: "Jadek Shadow 630",
    price: 95000,
    image: "/images/desktop10.png",
    description: "Sleek gaming desktop with powerful RTX graphics.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "75k-100k"],
    specs: {
      processor: "Intel Core i5-13400F",
      gpu: "RTX 3060 Ti",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      motherboard: "B760M",
      psu: "650W Gold",
      cabinet: "Minimalist RGB Tower",
      operatingSystem: "Windows 11 Home",
    },
    stock: 7,
    rating: 4.6
  },
  {
    id: "11",
    name: "Jadek Blitz 640",
    price: 98000,
    image: "/images/desktop11.png",
    description: "Powerful workstation with ample RAM for multitasking.",
    type: "desktop",
    categories: ["desktops", "business-desktops", "75k-100k"],
    specs: {
      processor: "Ryzen 7 5700X",
      gpu: "RTX 3060",
      ram: "32GB DDR4",
      storage: "1TB NVMe",
      motherboard: "B550",
      psu: "650W Bronze",
      cabinet: "Premium RGB Chassis",
      operatingSystem: "Windows 11 Pro",
    },
    stock: 8,
    rating: 4.5
  },
  {
    id: "12",
    name: "Jadek Ghost 650",
    price: 100000,
    image: "/images/desktop12.png",
    description: "Premium gaming desktop with high-end AMD graphics.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "75k-100k"],
    specs: {
      processor: "Intel i5-12400",
      gpu: "RX 6750 XT",
      ram: "16GB DDR4",
      storage: "1TB NVMe Gen4",
      motherboard: "B660",
      psu: "750W",
      cabinet: "Gaming Tower",
      operatingSystem: "Windows 11 Home",
    },
    stock: 5,
    rating: 4.8
  },
  {
    id: "13",
    name: "Jadek Vulcan 710",
    price: 125000,
    image: "/images/desktop13.png",
    description: "High-end gaming desktop with latest-gen components.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "100k-150k"],
    specs: {
      processor: "Ryzen 5 7600X",
      gpu: "RTX 4070",
      ram: "32GB DDR5",
      storage: "1TB NVMe",
      motherboard: "B650",
      psu: "650W Gold",
      cabinet: "Mesh RGB",
      operatingSystem: "Windows 11 Home",
    },
    stock: 4,
    rating: 4.9
  },
  {
    id: "14",
    name: "Jadek NovaX 720",
    price: 140000,
    image: "/images/desktop14.png",
    description: "Premium gaming desktop with AMD graphics for enthusiasts.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "100k-150k"],
    specs: {
      processor: "Intel Core i5-13600KF",
      gpu: "RX 7800 XT",
      ram: "32GB DDR5",
      storage: "2TB SSD",
      motherboard: "Z690",
      psu: "750W Gold",
      cabinet: "ATX Full Tower",
      operatingSystem: "Windows 11 Home",
    },
    stock: 3,
    rating: 4.8
  },
  {
    id: "15",
    name: "Jadek Phoenix 730",
    price: 145000,
    image: "/images/desktop15.png",
    description: "High-performance gaming desktop with RTX 4070 Super.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "100k-150k"],
    specs: {
      processor: "Ryzen 7 7700",
      gpu: "RTX 4070 Super",
      ram: "32GB DDR5",
      storage: "1TB Gen4 SSD",
      motherboard: "B650E",
      psu: "750W Gold",
      cabinet: "High-End RGB",
      operatingSystem: "Windows 11 Home",
    },
    stock: 2,
    rating: 4.9
  },
  {
    id: "16",
    name: "Jadek Orion 810",
    price: 210000,
    image: "/images/desktop16.png",
    description: "Enthusiast-grade gaming desktop with RTX 4080 for ultimate performance.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "200k-300k"],
    specs: {
      processor: "Intel Core i7-13700KF",
      gpu: "RTX 4080",
      ram: "32GB DDR5",
      storage: "2TB NVMe",
      motherboard: "Z790",
      psu: "850W Gold",
      cabinet: "Full ATX RGB",
      operatingSystem: "Windows 11 Home",
    },
    stock: 2,
    rating: 5.0
  },
  {
    id: "17",
    name: "Jadek Titan 820",
    price: 225000,
    image: "/images/desktop17.png",
    description: "Premium gaming desktop with RTX 4080 Super for enthusiasts.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "200k-300k"],
    specs: {
      processor: "Ryzen 9 7900",
      gpu: "RTX 4080 Super",
      ram: "32GB DDR5",
      storage: "2TB NVMe",
      motherboard: "X670",
      psu: "850W Gold",
      cabinet: "Premium airflow case",
      operatingSystem: "Windows 11 Home",
    },
    stock: 1,
    rating: 5.0
  },
  {
    id: "18",
    name: "Jadek Apex 910",
    price: 295000,
    image: "/images/desktop18.png",
    description: "Ultimate gaming desktop with RTX 4090 for uncompromising performance.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "200k-300k"],
    specs: {
      processor: "Intel Core i9-14900KF",
      gpu: "RTX 4090",
      ram: "64GB DDR5",
      storage: "2TB NVMe Gen4",
      motherboard: "Z790 DDR5",
      psu: "1000W Platinum",
      cooling: "360mm AIO",
      cabinet: "Premium Full Tower",
      operatingSystem: "Windows 11 Pro",
    },
    stock: 1,
    rating: 5.0
  },
  {
    id: "19",
    name: "Jadek Galaxy 920",
    price: 300000,
    image: "/images/desktop19.png",
    description: "Flagship gaming desktop with liquid cooling and top-tier components.",
    type: "desktop",
    categories: ["desktops", "gaming-desktops", "200k-300k"],
    specs: {
      processor: "Ryzen 9 7950X",
      gpu: "RTX 4090",
      ram: "64GB DDR5",
      storage: "2TB NVMe + 2TB SATA SSD",
      motherboard: "X670E",
      psu: "1000W",
      cooling: "AIO 360mm",
      cabinet: "Liquid-cooled showcase",
      operatingSystem: "Windows 11 Pro",
    },
    stock: 1,
    rating: 5.0
  },

];

export const getProductsByCategory = (category: Category) => {
  return products.filter(product => product.categories.includes(category));
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
