// Updated skill categories to include framework and devops
export interface Skill {
  name: string;
  icon: string;
  category: 'cloud' | 'language' | 'architecture' | 'tool' | 'framework' | 'devops';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface CodeExample {
  language: string;
  filename: string;
  code: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  codeExample: CodeExample;
}

export interface AboutContent {
  title: string;
  description: string;
  stats?: Stat[]; // Made optional to allow removing stats section
}

export interface ContactMethod {
  type: 'email' | 'linkedin' | 'github' | 'phone';
  icon: string;
  label: string;
  value: string;
  href: string;
}
