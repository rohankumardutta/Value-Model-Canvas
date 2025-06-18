
import { VMCSection } from './types';

export enum SectionId {
  KEY_PARTNERS = 'keyPartners',
  KEY_ACTIVITIES = 'keyActivities',
  KEY_RESOURCES = 'keyResources',
  VALUE_PROPOSITIONS = 'valuePropositions',
  CUSTOMER_RELATIONSHIPS = 'customerRelationships',
  CHANNELS = 'channels',
  CUSTOMER_SEGMENTS = 'customerSegments',
  COST_STRUCTURE = 'costStructure',
  REVENUE_STREAMS = 'revenueStreams',
}

export const VMC_SECTIONS: VMCSection[] = [
  {
    id: SectionId.KEY_PARTNERS,
    title: 'Key Partners',
    description: 'Who are our key partners and suppliers?',
    gridClasses: 'col-span-12 md:col-span-6 lg:col-span-2 lg:row-span-2',
    bgColor: 'bg-red-100',
    textColor: 'text-red-800',
    borderColor: 'border-red-300',
  },
  {
    id: SectionId.KEY_ACTIVITIES,
    title: 'Key Activities',
    description: 'What key activities do our value propositions require?',
    gridClasses: 'col-span-12 md:col-span-6 lg:col-span-2',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-800',
    borderColor: 'border-orange-300',
  },
  {
    id: SectionId.KEY_RESOURCES,
    title: 'Key Resources',
    description: 'What key resources do our value propositions require?',
    gridClasses: 'col-span-12 md:col-span-6 lg:col-span-2',
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-800',
    borderColor: 'border-amber-300',
  },
  {
    id: SectionId.VALUE_PROPOSITIONS,
    title: 'Value Propositions',
    description: 'What value do we deliver to the customer?',
    gridClasses: 'col-span-12 md:col-span-12 lg:col-span-2 lg:row-span-2',
    bgColor: 'bg-lime-100',
    textColor: 'text-lime-800',
    borderColor: 'border-lime-300',
  },
  {
    id: SectionId.CUSTOMER_RELATIONSHIPS,
    title: 'Customer Relationships',
    description: 'What type of relationship does each customer segment expect?',
    gridClasses: 'col-span-12 md:col-span-6 lg:col-span-2',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    borderColor: 'border-green-300',
  },
  {
    id: SectionId.CHANNELS,
    title: 'Channels',
    description: 'Through which channels do our customer segments want to be reached?',
    gridClasses: 'col-span-12 md:col-span-6 lg:col-span-2',
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-800',
    borderColor: 'border-emerald-300',
  },
  {
    id: SectionId.CUSTOMER_SEGMENTS,
    title: 'Customer Segments',
    description: 'For whom are we creating value?',
    gridClasses: 'col-span-12 md:col-span-12 lg:col-span-2 lg:row-span-2',
    bgColor: 'bg-teal-100',
    textColor: 'text-teal-800',
    borderColor: 'border-teal-300',
  },
  {
    id: SectionId.COST_STRUCTURE,
    title: 'Cost Structure',
    description: 'What are the most important costs inherent in our business model?',
    gridClasses: 'col-span-12 lg:col-span-6',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-800',
    borderColor: 'border-purple-300',
  },
  {
    id: SectionId.REVENUE_STREAMS,
    title: 'Revenue Streams',
    description: 'For what value are our customers willing to pay?',
    gridClasses: 'col-span-12 lg:col-span-6',
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-800',
    borderColor: 'border-pink-300',
  },
];

// This defines the order for display, especially on smaller screens
export const SECTION_DISPLAY_ORDER: SectionId[] = [
  SectionId.KEY_PARTNERS,
  SectionId.KEY_ACTIVITIES,
  SectionId.KEY_RESOURCES,
  SectionId.VALUE_PROPOSITIONS,
  SectionId.CUSTOMER_RELATIONSHIPS,
  SectionId.CHANNELS,
  SectionId.CUSTOMER_SEGMENTS,
  SectionId.COST_STRUCTURE,
  SectionId.REVENUE_STREAMS,
];

export const INITIAL_EMPTY_CANVAS_DATA: () => Record<SectionId, []> = () => {
  const data: Record<SectionId, []> = {} as Record<SectionId, []>;
  for (const sectionId in SectionId) {
      data[sectionId as SectionId] = [];
  }
  return data;
};

