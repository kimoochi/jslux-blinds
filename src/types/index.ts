export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  fallbackImage: string;
  badge: string | null;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  review: string;
  product: string;
}

export interface GalleryItem {
  src: string;
  fallback: string;
  alt: string;
  label: string;
  location?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  roomType: string;
  windowSize: string;
  message: string;
}
