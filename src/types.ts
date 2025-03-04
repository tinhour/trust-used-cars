export interface Car {
  id: string;
  title: string;
  price: number;
  year: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  location: string;
  imageUrl: string;
  description: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  tags: string[];
}