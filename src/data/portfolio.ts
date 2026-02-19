import { HeroContent, AboutContent, SkillCategory, Experience, ContactMethod, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const heroContent: HeroContent = {
  title: 'Principal Software Engineer',
  subtitle: 'Cloud-Native & Search',
  highlight: 'Cloud-Native & Search',
  description: 'Principal Software Engineer comfortable across the full lifecycle — whether that\'s greenfield builds on AWS, modernising legacy systems, or putting engineering standards and culture in place. Happiest when solving hard architectural problems, helping other engineers grow, and investing in the wider engineering organisation beyond just the code.',
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
  description: 'Principal Software Engineer comfortable across the full lifecycle — whether that\'s greenfield builds on AWS, modernising legacy systems, or putting engineering standards and culture in place. Happiest when solving hard architectural problems, helping other engineers grow, and investing in the wider engineering organisation beyond just the code.'
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
      { name: 'CDK', icon: 'fas fa-toolbox', category: 'cloud' },
      { name: 'EventBridge', icon: 'fas fa-server', category: 'cloud' },
      { name: 'OpenSearch', icon: 'fas fa-search', category: 'cloud' },
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
    description: 'Defined and enforced development standards and architected a reusable microservices blueprint. Led transformation of legacy systems, strangling a PHP monolith by migrating services to TypeScript microservices on AWS.',
    technologies: ['TypeScript', 'AWS', 'OpenSearch', 'Microservices', 'CI/CD', 'AWS Glue'],
    achievements: [
      'Defined and enforced development standards and architected a reusable microservices blueprint',
      'Led transformation of legacy systems, strangling a PHP monolith by migrating services to TypeScript microservices on AWS (Lambda, API Gateway, DynamoDB)',
      'Implemented OpenSearch for product search fuzzy matching in front of a third-party pricing API',
      'Designed comprehensive test strategies enabling safe continuous delivery',
      'Architected data processing pipelines using AWS Glue across millions of user records',
      'Awarded Colleague of the Year 2025, voted for by peers across the organisation',
      'Established monthly brown bag sessions with rotating presenters and launched an annual company hackathon'
    ]
  },
  {
    id: '2',
    title: 'Senior Software Engineer',
    company: 'WalkSafe',
    duration: 'September 2022 - March 2024',
    description: 'Led engineering team in establishing development standards and comprehensive testing suites. Architected event-driven C#/.NET backend system and developed payment system integration.',
    technologies: ['C#', '.NET', 'Event-Driven Architecture', 'Payment Systems', 'Testing'],
    achievements: [
      'Reduced critical production bugs through improved testing and development standards',
      'Improved sprint velocity through better engineering practices',
      'Architected event-driven C#/.NET backend system',
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
