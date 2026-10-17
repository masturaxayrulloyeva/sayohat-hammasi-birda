export type TourCategory = 'all' | 'tog' | 'tarix' | 'tabiat' | 'ziyorat' | 'oilaviy';

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  destination: string;
  region: string;
  category: TourCategory;
  durationDays: number;
  durationNights: number;
  pricePerPerson: number; // in UZS
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  featured?: boolean;
  included: {
    transport: boolean;
    transportType: string;
    hotel: boolean;
    hotelType: string;
    meals: boolean;
    mealsCount: string;
    guide: boolean;
    tickets: boolean;
  };
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  accommodationDetails: {
    name: string;
    type: string;
    amenities: string[];
  };
  departureDates: string[];
  groupSizeLimit: number;
}

export interface Guesthouse {
  id: string;
  name: string;
  location: string;
  region: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  hostName: string;
  phone: string;
  amenities: {
    hotWater: boolean;
    wifi: boolean;
    parking: boolean;
    homeMeal: boolean;
    familyRooms: boolean;
    mountainView: boolean;
  };
  description: string;
}

export interface CustomTourConfig {
  destination: string;
  region: string;
  days: number;
  transportType: 'afrosiyob' | 'standard_train' | 'minibus' | 'private_car';
  hotelType: 'standard_hotel' | 'guesthouse' | 'ecolodge';
  mealPlan: 'full_board' | 'half_board' | 'breakfast_only';
  guideIncluded: boolean;
  adultsCount: number;
  childrenCount: number;
  departureCity: string;
  date: string;
}

export interface BookingData {
  tourId: string;
  tourTitle: string;
  fullName: string;
  phone: string;
  telegramUsername?: string;
  city: string;
  travelDate: string;
  adults: number;
  children: number;
  totalPrice: number;
  discount: number;
  finalPrice: number;
  paymentMethod: 'click' | 'payme' | 'uzum' | 'cash';
  notes?: string;
}
