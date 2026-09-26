export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  priceSGD: number;
  capacity: number;
  size: string;
  image: string;
  features: string[];
  description: string;
  amenities: string[];
  popularTag?: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  category: 'Comfort' | 'Tech & Connectivity' | 'Facilities' | 'Services';
  icon: string;
}

export interface BookingDetails {
  roomTypeId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Review {
  id: string;
  author: string;
  country: string;
  rating: number;
  date: string;
  text: string;
  podType: string;
}
