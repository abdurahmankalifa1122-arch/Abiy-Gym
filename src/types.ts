export interface ServiceProgram {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  equipment: string[];
  targetAudience: string;
  image: string;
  isEditable?: boolean;
}

export interface MembershipPlan {
  id: string;
  title: string;
  duration: string;
  priceDisplay: string; // e.g. "Price: Contact Gym"
  subtext: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  isEditable?: boolean;
}

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  experience: string;
  image: string;
  isEditablePlaceholder: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'weights' | 'machines' | 'cardio' | 'male-training';
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  duration: string;
  rating: number;
  isEditablePlaceholder: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
