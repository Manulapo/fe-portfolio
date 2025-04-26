import { CertificationData, skillsType } from '@/types';
import accentureLogo from '@/assets/images/accenture_logo.jpg';
import gamestopLogo from '@/assets/images/gamestop_logo.jpg';
import startingFinanceLogo from '@/assets/images/starting_finance_logo.jpg';
import talentikaLogo from '@/assets/images/talentikaschool_logo.jpg';
import zeroToMasteryLogo from '@/assets/images/ztm_academy_logo.jpg';
import cambridgeLogo from '@/assets/images/cambridgeinternational_logo.jpg';
import freecodecampLogo from '@/assets/images/free_code_camp_logo.jpg';
import johnHopkinsLogo from '@/assets/images/john_hopkins_university_logo.jpg';
import NextJSEcommerceLogo from '@/assets/images/NextJSEcommerce_logo.png';

export const experiences = [
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
      'MongoDB',
      'Prisma',
      'Figma',
    ],
    description:
      'Developing a web application for a client in the e-commerce sector, focusing on creating a responsive and user-friendly interface. Collaborating with backend developers to integrate APIs and ensure seamless data flow. Implementing best practices in code quality and performance optimization.',
  },
  {
    icon: accentureLogo,
    title: 'Frontend Engineer',
    company: 'Accenture Italia',
    duration: 'Nov 2023 - Feb 2025',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'SCSS',
      'Rxjs',
      'StoryBook',
      'Node.js',
    ],
    description:
      'Designed, developed, and tested custom software solutions across multiple system components and applications, focusing on public administration projects. Collaborated with cross-functional teams to translate system requirements into effective design specifications and implement scalable solutions. Developed and integrated frontend components with backend services, ensuring smooth data flow and system stability. Led the implementation and integration of applications, providing primary support for production releases and ensuring compliance with programming standards and interface specifications.',
  },
  {
    icon: gamestopLogo,
    title: 'Frontend Developer & UX Designer',
    company: 'GameStop',
    duration: 'Dec 2021 - Nov 2023',
    skills: [
      'Bootstrap',
      'Javascript',
      'Figma',
      '.NET',
      'HTML',
      'CSS',
      'Google Tag Manager',
      'Google Analytics',
      'SEO',
    ],
    description:
      'Worked on the European Ecommerce renovation project, covering markets like Italy, Switzerland, Germany, Ireland, Austria, and Canada. Focused on frontend development, UX optimization, and SEO improvements within a .NET architecture environment. Collaborated with cross-functional teams to enhance website performance, ensure consistent UX across regions, and implement global site functionalities beyond the Italian business.',
  },
  {
    icon: startingFinanceLogo,
    title: 'Graphic Content Creator',
    company: 'Starting Finance',
    duration: 'Feb 2021 - Nov 2023',
    skills: [
      'Adobe Photoshop',
      'Canva',
      'HTML',
      'CSS',
      'Advertising',
      'Adobe Illustrator',
    ],
    description:
      'Managed the LinkedIn profile for Starting Finance, creating and revising financial news tailored to the platform’s audience. Developed visual content using Canva and designed website components with HTML & CSS to maintain brand consistency across digital platforms. Collaborated with the marketing team to enhance content engagement and deliver clear, audience-focused financial information.',
  },
  {
    icon: talentikaLogo,
    title: 'Short-Term Educator',
    company: 'Talentika',
    duration: 'Mar 2021 - May 2021',
    skills: ['Advertising', 'E-commerce', 'Financial Education', 'Teaching'],
    description:
      'Delivered courses on financial and economic topics, focusing on fundamental concepts in banking, financial markets, and personal finance. Developed and presented practical lessons to help students understand key financial principles and their real-world applications. Fostered an interactive learning environment to enhance student engagement and comprehension.',
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
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
  ],
  framework: [
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
  ],

  database: [
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'Prisma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
    },
    {
      name: 'Firebase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
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
