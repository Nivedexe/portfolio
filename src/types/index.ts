export interface ProjectScreenshot {
  id: string;
  url: string;
  title: string;
  caption: string;
  tag?: string;
}

export interface ArchitectureStep {
  step: string;
  description: string;
  tech: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge?: string;
  featured?: boolean;
  category: 'Enterprise / Maritime' | 'Full-Stack Web App' | 'Business Application';
  isFullStack?: boolean;
  isAcademic?: boolean;
  confidential?: boolean;
  confidentialNotice?: string;
  role: string;
  duration: string;
  overview: string;
  problem: string;
  technologies: string[];
  keyContributions: string[];
  technicalHighlights: string[];
  challenges: string[];
  outcome: string[];
  screenshots: ProjectScreenshot[];
  video?: {
    url: string;
    poster: string;
    title: string;
    description: string;
  };
  architectureFlow?: ArchitectureStep[];
  featuresList?: string[];
  route: string;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  doodleAnnotation?: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  role: string;
  companyPlaceholder: string;
  context: string;
  isCurrent?: boolean;
  doodleNote?: string;
  highlights: string[];
  technologies: string[];
}

export interface PersonalConfig {
  name: string;
  title: string;
  subtitle: string;
  experienceYears: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  resumeDownloadName?: string;
  bioShort: string;
  bioExtended: string;
}
