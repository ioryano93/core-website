import { HeroContent, AboutContent, SkillCategory, Experience, ContactMethod, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const heroContent: HeroContent = {
  title: 'Principal/Lead Engineer',
  subtitle: 'Cloud-Native & Microservices Architect',
  highlight: 'Cloud-Native & Microservices',
  description: 'Results-driven Principal/Lead Engineer with 8+ years experience designing and architecting large-scale, cloud-native applications. Specializing in serverless architectures, microservices, and leading high-performing teams across AWS, Azure, and GCP.',
  codeExample: {
    language: 'typescript',
    filename: 'microservice.ts',
    code: `export class PaymentService {
  async processPayment(paymentData: PaymentRequest) {
    try {
      const validation = await this.validatePayment(paymentData);
      const result = await this.executePayment(validation);
      
      await this.publishEvent('payment.processed', {
        paymentId: result.id,
        amount: result.amount,
        status: 'success'
      });
      
      return { success: true, data: result };
    } catch (error) {
      await this.publishEvent('payment.failed', { error: error.message });
      throw error;
    }
  }
}`
  }
};

export const aboutContent: AboutContent = {
  title: 'About Me',
  description: 'A results-driven Principal/Lead Engineer with over 8 years of experience in designing, architecting, and leading the delivery of large-scale, cloud-native applications. I specialize in serverless and microservices architectures across AWS, Azure, and GCP. A proven leader in defining technical strategies, mentoring high-performing teams, and driving significant improvements in developer efficiency and system reliability through modern DevOps and testing practices.'
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Serverless',
    skills: [
      { name: 'AWS Lambda', icon: 'fab fa-aws', category: 'cloud' },
      { name: 'API Gateway', icon: 'fas fa-cloud', category: 'cloud' },
      { name: 'DynamoDB', icon: 'fas fa-database', category: 'cloud' },
      { name: 'ECS/Fargate', icon: 'fas fa-cube', category: 'cloud' },
      { name: 'CloudFormation', icon: 'fas fa-layer-group', category: 'cloud' },
      { name: 'EventBridge', icon: 'fas fa-server', category: 'cloud' },
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C# / .NET', icon: 'fab fa-microsoft', category: 'language' },
      { name: 'TypeScript', icon: 'fab fa-js-square', category: 'language' },
      { name: 'Node.js', icon: 'fab fa-node-js', category: 'language' },
      { name: 'Python', icon: 'fab fa-python', category: 'language' },
      { name: 'PHP', icon: 'fab fa-php', category: 'language' },
      { name: 'GoLang', icon: 'fab fa-golang', category: 'language' },
    ]
  },
  {
    title: 'Architecture & Design',
    skills: [
      { name: 'Microservices', icon: 'fas fa-sitemap', category: 'architecture' },
      { name: 'Event-Driven', icon: 'fas fa-bolt', category: 'architecture' },
      { name: 'Security', icon: 'fas fa-shield-alt', category: 'architecture' },
      { name: 'Scalability', icon: 'fas fa-chart-line', category: 'architecture' },
      { name: 'Payment Systems', icon: 'fas fa-credit-card', category: 'architecture' },
      { name: 'CI/CD Pipelines', icon: 'fas fa-sync-alt', category: 'architecture' },

      { name: 'Testing Strategies', icon: 'fas fa-vial', category: 'architecture' },

    ]
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Principal Software Engineer',
    company: 'Airtime',
    duration: 'March 2024 - Present',
    description: 'Leading the creation and enforcement of development standards and architecting new microservices blueprints. Driving efforts to strangle legacy monoliths by moving services from PHP to TypeScript microservices.',
    technologies: ['TypeScript', 'AWS', 'Microservices', 'CI/CD'],
    achievements: [
      'Reduced monolith size by 30% through microservices migration',
      'Accelerated time-to-market with new microservices blueprint',
      'Implemented comprehensive test strategies for safe CI/CD',
      'Drastically decreased production bugs'
    ]
  },
  {
    id: '2',
    title: 'Lead Software Engineer',
    company: 'WalkSafe',
    duration: 'September 2022 - March 2024',
    description: 'Led engineering team in establishing development standards and comprehensive testing suites. Architected event-driven backend system and developed payment system integration.',
    technologies: ['C#', 'GCPs', 'Event-Driven Architecture', 'Payment Systems', 'Testing'],
    achievements: [
      'Drastically reduced critical production bugs',
      'Significantly improved sprint velocity',
      'Architected event-driven backend system',
      'Developed payment system for WalkSafe Pro',
      'Led small engineering team'
    ]
  },
  {
    id: '3',
    title: 'Senior Software Engineer',
    company: 'Awaze',
    duration: 'December 2021 - September 2022',
    description: 'Architected scalable solutions and introduced new testing strategies enabling true CI/CD. Improved system efficiency and reduced operational costs.',
    technologies: ['Scalable Architecture', 'Testing', 'CI/CD', 'C#'],
    achievements: [
      'Architected scalable solutions',
      'Introduced testing strategies for true CI/CD',
      'Improved system efficiency',
      'Reduced operational costs'
    ]
  },
  {
    id: '4',
    title: 'Software Engineer',
    company: 'Cinch',
    duration: 'September 2020 - December 2021',
    description: 'Architected scalable serverless solutions and led observability practices. Successfully handled large company growth and reduced mean time to resolution.',
    technologies: ['Serverless', 'AWS', 'Observability', 'Scalability'],
    achievements: [
      'Architected scalable serverless solutions',
      'Led observability practices',
      'Handled large company growth',
      'Reduced mean time to resolution'
    ]
  },
  {
    id: '5',
    title: 'Software Engineer',
    company: 'Fanatics International',
    duration: 'June 2019 - September 2020',
    description: 'Designed and implemented payment systems for high-profile e-commerce stores. Utilized service queues and lambdas with GoLang for batch processing translations.',
    technologies: ['GoLang', 'AWS Lambda', 'E-commerce', 'Payment Systems', 'Service Queues'],
    achievements: [
      'Implemented payment systems for high-profile stores',
      'Processed high volume of daily transactions',
      'Reduced translation costs with GoLang lambdas',
      'Utilized service queues for batch processing'
    ]
  },
  {
    id: '6',
    title: 'Software Engineer',
    company: 'Graham & Brown',
    duration: 'May 2017 - June 2019',
    description: 'Created single order channel handling multiple communication methods including AS2, OAUTH, HTTPS, SFTP & FTP. Streamlined order processing from external customers.',
    technologies: ['C#', 'AS2', 'OAUTH', 'HTTPS', 'SFTP', 'FTP', 'Integration'],
    achievements: [
      'Created unified order channel',
      'Integrated multiple communication methods',
      'Streamlined order processing',
      'Improved customer integration'
    ]
  }
];

export const contactMethods: ContactMethod[] = [
  {
    type: 'email',
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'mail@ryanoxtoby.io',
    href: 'mailto:mail@ryanoxtoby.io'
  },
  {
    type: 'linkedin',
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ryanoxtoby',
    href: 'https://linkedin.com/in/ryanoxtoby'
  },
  {
    type: 'github',
    icon: 'fab fa-github',
    label: 'GitHub',
    value: 'github.com/ioryano93',
    href: 'https://github.com/ioryano93'
  }
];
