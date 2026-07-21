export type ActiveTab = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'faq' | 'contact' | 'order-form';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  items: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'equipment' | 'customers';
  imageUrl: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MedicineSearchItem {
  id: string;
  name: string;
  category: string;
  description: string;
  priceEstimate?: string;
  availability: 'In Stock' | 'Available on Demand' | 'Out of Stock';
}
