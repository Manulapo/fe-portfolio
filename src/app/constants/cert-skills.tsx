import { CertificationData, skillsType } from '@/types';
import accentureLogo from '@/assets/images/accenture_logo.jpg';
import gamestopLogo from '@/assets/images/gamestop_logo.jpg';
import hococoLogo from '@/assets/images/hococo_logo.jpeg';
import startingFinanceLogo from '@/assets/images/starting_finance_logo.jpg';
import talentikaLogo from '@/assets/images/talentikaschool_logo.jpg';
import zeroToMasteryLogo from '@/assets/images/ztm_academy_logo.jpg';
import cambridgeLogo from '@/assets/images/cambridgeinternational_logo.jpg';
import freecodecampLogo from '@/assets/images/free_code_camp_logo.jpg';
import johnHopkinsLogo from '@/assets/images/john_hopkins_university_logo.jpg';
import laravelLogo from '@/assets/images/laravel_logo.jpeg';
import NextJSEcommerceLogo from '@/assets/images/NextJSEcommerce_logo.png';

export const experiences = [
  {
    icon: hococoLogo,
    title: 'Frontend Developer (Full-Stack & AI)',
    company: 'Hococo',
    duration: 'Jul 2025 - Present',
    skills: [
      'Vue 3',
      'TypeScript',
      'Laravel',
      'PostgreSQL',
      'Pinia',
      'AI Integration',
      'Playwright',
      'Capacitor',
      'Tailwind CSS',
      'REST APIs',
      'UI/UX',
    ],
    description:
      `Building web and mobile features for Hococo’s tenant relationship platform across both frontend and backend layers.
      Working with Vue 3, TypeScript, Laravel, PostgreSQL, and Capacitor while contributing to the migration from Vue Options API to the Composition API.
      Developed AI-powered product features integrating OpenAI, Claude, and Gemini with retrieval, conversation history, streaming responses, citations, guardrails, tool calling, and internal APIs.
      Also work with Laravel controllers, services, Eloquent models, migrations, validation, authentication and permissions, REST endpoints, Playwright testing, and end-to-end feature delivery from UX and logic definition through implementation and stakeholder demos.`,
  },

  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Frontend Developer & UX Designer',
    company: 'Freelance',
    duration: 'Feb 2025 - Present',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Figma',
    ],
    description:
      `Developing client-facing web products with a focus on responsive interfaces, UX, and full-stack implementation.
      Working across React, Next.js, TypeScript, backend integrations, data modelling, and API consumption while translating product requirements into usable and maintainable features.`,
  },

  {
    icon: accentureLogo,
    title: 'Frontend Engineer',
    company: 'Accenture Technology',
    duration: 'Nov 2023 - Feb 2025',
    skills: [
      'Angular',
      'TypeScript',
      'RxJS',
      'React',
      'Storybook',
      'REST APIs',
      'Figma',
      'CI/CD',
    ],
    description:
      `Developed national public-sector healthcare applications primarily with Angular, TypeScript, and RxJS, with additional experience on a React-based project.
      Integrated REST APIs from Swagger/OpenAPI specifications, collaborated closely with backend teams on data structures and API behaviour, and translated Figma designs into responsive and accessible interfaces.
      Contributed to reusable UI libraries documented in Storybook and worked with product managers, designers, backend engineers, and frontend developers throughout testing, code review, Git workflows, and CI/CD delivery.`,
  },

  {
    icon: gamestopLogo,
    title: 'Frontend Developer & UX Designer',
    company: 'GameStop',
    duration: 'Dec 2021 - Nov 2023',
    skills: [
      'JavaScript',
      'TypeScript',
      '.NET / ASP.NET',
      'PHP',
      'REST APIs',
      'Figma',
      'Google Analytics 4',
      'Google Tag Manager',
      'Microsoft Clarity',
      'SEO',
    ],
    description:
      `Contributed to the international redesign of GameStop’s e-commerce platform across six European markets.
      Designed and implemented UX/UI and frontend logic for the Italian market within a shared modular codebase supporting country-specific features and marketing needs.
      Built new customer-facing functionality including account features, promotional experiences, and the GS Deals digital flyer, while integrating APIs and supporting selected backend functionality through .NET and PHP.
      The redesign was followed by a 22% increase in SEO score, a 7% reduction in bounce rate, and a 30% increase in conversions.`,
  },

  {
    icon: startingFinanceLogo,
    title: 'Web Content Creator',
    company: 'Starting Finance',
    duration: 'Feb 2021 - Mar 2023',
    skills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Canva',
      'Financial Content',
      'Data Visualisation',
      'Social Media',
    ],
    description:
      `Created financial-news content, reports, infographics, and social-media assets for Starting Finance’s educational channels.
      Worked with financial topics and current market news to turn complex information into clear, visually engaging content for a broader audience.`,
  },

  {
    icon: talentikaLogo,
    title: 'Short-Term Educator',
    company: 'Talentika',
    duration: 'Mar 2021 - May 2021',
    skills: [
      'Financial Education',
      'Teaching',
      'Banking',
      'Financial Markets',
      'Communication',
    ],
    description:
      `Delivered short-form educational sessions on finance and economics, covering banking, financial markets, and personal finance through practical, accessible explanations.`,
  },
];

export const skills: Record<skillsType, Record<string, string>[]> = {
  language: [
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'PHP',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
  ],

  frontend: [
    {
      name: 'Vue 3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
  ],

  backend: [
    {
      name: 'Laravel',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
  ],

  database: [
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
  ],

  tooling: [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
  ],

  design: [
    {
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    },
    {
      name: 'Photoshop',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
    },
  ],
};

export const certifications: CertificationData[] = [
  {
    title: 'Laravel From Scratch',
    organization: 'Laracasts',
    issueDate: 'Jul 2026',
    skills: [
      'Laravel',
      'PHP',
      'Backend Development',
      'APIs',
      'Full-Stack Development',
    ],
    description:
      'A practical introduction to Laravel, covering backend application structure, data, APIs, and the framework concepts used in day-to-day development.',
    logoUrl: laravelLogo,
  },
  {
    title: 'Next.js Ecommerce 2025 certification',
    organization: 'Udemy',
    issueDate: 'Apr 2025',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-c322727a-1d79-4214-ac6b-a7368e2939af/',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Zod',
      'Authentication',
      'Payments Integration',
      'FullStack Development',
      'Ecommerce Architecture',
    ],
    description:
      'Beyond the lectures, this certification was about applying real-world full-stack concepts — from performance to database design. Building, breaking, and rebuilding a modern ecommerce platform made the learning stick in a way no tutorial alone could.',
    logoUrl: NextJSEcommerceLogo,
  },
  {
    title: 'Complete Angular Developer Bootcamp',
    organization: 'Zero To Mastery Academy',
    issueDate: 'Feb 2024',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-d6d0a563-322f-4abf-bedf-0adae1e4ba2b/',
    skills: [
      'AngularJS',
      'TypeScript',
      'RxJS',
      'Firebase',
      'Tailwind',
      'Testing',
    ],
    description:
      'Comprehensive program covering Angular, TypeScript, reactive programming, and building real-world apps with modern UI libraries.',
    logoUrl: zeroToMasteryLogo,
  },
  {
    title: 'Front End Development Libraries',
    organization: 'freeCodeCamp',
    issueDate: 'July 2023',
    credentialUrl:
      'https://freecodecamp.org/certification/fccfb7b9870-474a-44a7-bd78-67520444e601/front-end-development-libraries',
    credentialId: 'fccfb7b9870-474a-44a7-bd78-67520444e601-fecd',
    skills: ['React', 'Bootstrap', 'jQuery', 'SASS', 'Redux'],
    description:
      'Hands-on projects focusing on frontend libraries like React, Bootstrap, and SASS, with practical certification challenges.',
    logoUrl: freecodecampLogo,
  },
  {
    title: 'HTML, CSS, and Javascript for Web Developers',
    organization: 'John Hopkins University',
    issueDate: 'Nov 2021',
    credentialUrl: 'https://coursera.org/verify/AJ7MQYRH2UE7',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    description:
      'Foundational course introducing the core building blocks of modern web development and mobile-friendly design.',
    logoUrl: johnHopkinsLogo,
  },
  {
    title: 'Google UX Design Certificate',
    organization: 'Google',
    issueDate: 'Sep 2021',
    credentialUrl:
      'https://www.credly.com/badges/746b9f7e-ffb6-460c-829e-979a2e583d1d/public_url',
    skills: ['UX Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    description:
      'Practical program covering the full UX design process, from user research and wireframes to usability testing and prototyping.',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
  },
  {
    title: 'Certificate in Advanced English (CAE) C1',
    organization: 'Cambridge International Education',
    issueDate: 'Jun 2021',
    credentialUrl: '',
    skills: ['Advanced English', 'Communication', 'Writing Skills'],
    description:
      'International certification validating advanced English proficiency (C1 level) for professional and academic settings.',
    logoUrl: cambridgeLogo,
  },
];
