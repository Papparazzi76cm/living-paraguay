
export type Page = 'home' | 'permits' | 'housing' | 'schools' | 'neighborhoods' | 'taxation' | 'social-security' | 'faq' | 'contact';

export interface NavLink {
  name: string;
  page: Page;
}

export interface Property {
  id: number;
  image: string;
  price: number;
  operation: 'Alquiler' | 'Venta';
  type: 'Casa' | 'Departamento' | 'Terreno';
  title: string;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  city: 'Asunción' | 'Encarnación' | 'Ciudad del Este';
}

export interface School {
    id: number;
    image: string;
    name: string;
    location: string;
    languages: string[];
    levels: string[];
    ranking: number;
    city: 'Asunción' | 'Encarnación' | 'Ciudad del Este';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CostOfLiving {
    city: string;
    rent: number;
    food: number;
    transport: number;
    utilities: number;
}

export interface Neighborhood {
    id: number;
    name: string;
    image: string;
    description: string;
    tags: string[];
}

export interface Message {
    sender: 'user' | 'bot';
    text: string;
}
