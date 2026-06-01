export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Investment' | 'Advisory';
  description: string;
  image: string;
  images?: string[];
  floorPlans?: string[];
  location: string;
  status: 'Completed' | 'On Going';
  area: string;
  duration: string;
  highlights: string[];
}

export interface ServiceElement {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Investment' | 'Advisory';
  description: string;
  iconName: string;
  detailedPoints: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  text: string;
  avatarChar: string;
}


export interface QuickEstimateState {
  projectType: string;
  areaSqFt: number;
  location: string;
  materialQuality: 'Standard' | 'Premium' | 'Ultra-Luxury';
  includeLandScaping: boolean;
  includeInteriorHookup: boolean;
  timelineMonths: number;
}
