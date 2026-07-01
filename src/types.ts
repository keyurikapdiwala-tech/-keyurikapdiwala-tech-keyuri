export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // reference to Lucide icon name
}

export interface PricingItem {
  name: string;
  price: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  rating: number;
  review: string;
  date: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}
