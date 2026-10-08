export interface EngineeringPillar {
  title: string;
  description: string;
  doodleTag: string;
}

export const engineeringPrinciples: EngineeringPillar[] = [
  {
    title: 'Easy to use',
    description: 'Complex software does not need to feel complicated. Clear information hierarchy and intuitive affordances come first.',
    doodleTag: 'zero clutter',
  },
  {
    title: 'Responsive & Resilient',
    description: 'Interfaces that adapt effortlessly across laptop screens, ship-bridge tablets, and mobile devices without clipping.',
    doodleTag: 'tested on screens',
  },
  {
    title: 'Maintainable & Type-Safe',
    description: 'Clean TypeScript contracts, component boundaries, and predictable state structures that another engineer can easily pick up.',
    doodleTag: 'clean code',
  },
  {
    title: 'Data-driven & Fast',
    description: 'Engineered to render hundreds of rows smoothly using memoization, virtualization, and minimal re-renders.',
    doodleTag: 'smooth 60fps',
  },
  {
    title: 'Consistent & Token-Based',
    description: 'Pixel-faithful translation of Figma design systems into consistent typography, spacing, and reusable tokens.',
    doodleTag: 'design-to-code',
  },
  {
    title: 'Practical & Grounded',
    description: 'Focused on solving real business and user problems rather than chasing shiny, fragile tech trends.',
    doodleTag: 'built for real work',
  },
];

export interface UICapability {
  title: string;
  description: string;
  badge: string;
}

export const uiCapabilities: UICapability[] = [
  {
    title: 'Complex Data Tables',
    description: 'Multi-column sorting, multi-facet filtering, sticky headers, batch actions, and expandable sub-rows.',
    badge: 'Enterprise Specialty',
  },
  {
    title: 'Data-Heavy Screens',
    description: 'Structuring dense industrial and operational metrics with high visual scannability and minimal cognitive load.',
    badge: 'UX Clarity',
  },
  {
    title: 'Hierarchical Trees',
    description: 'Equipment trees with deep parent-child relationships, lazy subtree loading, and breadcrumb tracking.',
    badge: 'ShipPro PMS',
  },
  {
    title: 'Advanced Search & Filters',
    description: 'Instant multi-predicate query builders, debounced text search, and persistent URL filter states.',
    badge: 'Interactive',
  },
  {
    title: 'Dynamic Form Workflows',
    description: 'Multi-step wizard forms, complex validation rules, array inputs, and error-tolerant drafting states.',
    badge: 'Form Engineering',
  },
  {
    title: 'Calendars & Timelines',
    description: 'Planned maintenance Gantt and calendar views for scheduling vessel maintenance windows and crew shifts.',
    badge: 'Visual Scheduling',
  },
  {
    title: 'Reusable Design Systems',
    description: 'Building accessible, composable UI building blocks with strict props, accessible ARIA roles, and high cohesion.',
    badge: 'Design System',
  },
  {
    title: 'Figma-to-Code Precision',
    description: 'Translating design intent into responsive, fluid web code with attention to micro-interactions and spacing.',
    badge: 'Fidelity',
  },
];
