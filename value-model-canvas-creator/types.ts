
import { SectionId } from './constants';

export interface CardData {
  id: string;
  content: string;
}

export type CanvasData = Record<SectionId, CardData[]>;

export interface VMCSection {
  id: SectionId;
  title: string;
  description: string;
  gridClasses: string; // Tailwind classes for grid positioning
  bgColor: string; // e.g., 'bg-blue-100'
  textColor: string; // e.g., 'text-blue-800'
  borderColor: string; // e.g., 'border-blue-300'
}
