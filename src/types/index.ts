export type Category = 
  | 'laptops'
  | 'desktops'
  | 'accessories'
  | 'gaming'
  | 'business'
  | 'second-hand';

export type ComputerType = 'laptop' | 'desktop' | 'accessory';

export interface Computer {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  type: ComputerType;
  categories: Category[];
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    graphics?: string;
    display?: string;
    operatingSystem?: string;
    connectivity?: string[];
    battery?: string;
    dimensions?: string;
    weight?: string;
    color?: string;
    warranty?: string;
  };
  stock: number;
  rating: number;
  reviews: number;
  featured?: boolean;
}
