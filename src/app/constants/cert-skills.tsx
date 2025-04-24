import { skillsType } from '@/types';

export const experiences = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Frontend Developer',
    company: 'Tech Company',
    duration: 'Jan 2020 - Present',
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML'],
    description:
      'Developed and maintained web applications using React and TypeScript. Collaborated with designers to implement user-friendly interfaces.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    title: 'UX Designer',
    company: 'Design Studio',
    duration: 'Jan 2018 - Dec 2019',
    skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping'],
    description:
      'Designed user interfaces and experiences for various web applications. Conducted user research and usability testing to improve product design.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    title: 'Backend Developer',
    company: 'Startup Inc.',
    duration: 'Jan 2016 - Dec 2017',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    description:
      'Developed RESTful APIs and backend services using Node.js and Express. Worked with databases like MongoDB and PostgreSQL.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    title: 'Web Developer',
    company: 'Freelance',
    duration: 'Jan 2015 - Dec 2015',
    skills: ['JavaScript', 'HTML', 'CSS'],
    description:
      'Worked on various freelance projects, developing websites and web applications using JavaScript, HTML, and CSS.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    title: 'UI Designer',
    company: 'Design Agency',
    duration: 'Jan 2014 - Dec 2014',
    skills: ['Figma', 'Adobe Photoshop', 'Sketch'],
    description:
      'Created user interfaces and visual designs for web applications. Collaborated with developers to ensure design feasibility.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    title: 'WordPress Developer',
    company: 'Web Solutions',
    duration: 'Jan 2013 - Dec 2013',
    skills: ['WordPress', 'PHP', 'HTML', 'CSS'],
    description:
      'Developed and maintained WordPress websites for various clients. Customized themes and plugins to meet client requirements.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg',
    title: 'Graphic Designer',
    company: 'Creative Studio',
    duration: 'Jan 2012 - Dec 2012',
    skills: ['Adobe Photoshop', 'Illustrator'],
    description:
      'Designed graphics and visual content for marketing materials. Collaborated with the marketing team to create engaging visuals.',
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
