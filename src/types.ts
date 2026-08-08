export interface ProjectImage {
  url: string;
  caption: string;
}

export type ProjectCategory = 'Architectural Modeling' | 'Point Cloud to BIM' | 'Custom Revit Families' | 'MEP Systems' | 'Clash Detection' | 'Documentation';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory | ProjectCategory[];
  thumbnail: string;
  images: ProjectImage[];
  shortDesc: string;
  fullDesc: string;
  lod: string; // e.g., 'LOD 350', 'LOD 400'
  softwareUsed: string[];
  clientRegion: string;
  completionDate: string;
  areaSqFt?: string;
  keyFeatures: string[];
  externalUrl?: string;
}

export interface Review {
  id: string;
  clientName: string;
  clientCountry: string;
  clientAvatar?: string;
  platform: 'Fiverr' | 'Upwork';
  rating: number;
  date: string;
  comment: string;
  projectType: string;
  orderValue?: string;
  verified: boolean;
}

export interface JourneyExperience {
  id: string;
  title: string;
  company: string;
  employmentType: 'Full-time' | 'Freelance / Contract' | 'Part-time';
  period: string;
  location: string;
  summary: string;
  areasOfExpertise: string[];
  responsibilities: string[];
  software: string[];
  keyProjects: string[];
  highlights: string[];
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  sublabel?: string;
}

export type ViewTab = 'home' | 'projects' | 'journey' | 'testimonials' | 'about';
