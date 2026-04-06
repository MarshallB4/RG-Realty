export interface Listing {
  id: number;
  price: number;
  address: string;
  city: string;
  province: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: 'House' | 'Condo' | 'Townhouse';
  featured?: boolean;
}

export interface MarketDataPoint {
  month: string;
  year: number;
  sales: number;
  newListings: number;
  inventory: number;
  benchmarkPrice: number;
  averagePrice: number;
  daysOnMarket: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  longDescription: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}