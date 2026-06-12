export interface FabricProduct {
  id: string;
  name: string;
  koreanName: string;
  heroImages: string[];
  swatchImages: string[];
}

export interface FabricCategory {
  id: string;
  name: string;
  koreanName: string;
  description: string;
  thumbnail: string;
  products: FabricProduct[];
}

export interface FabricsData {
  fabrics: FabricCategory[];
}
