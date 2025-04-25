import { getRandomNumber } from '@/lib/utils';
import { PostData } from '@/types';
import { userInfo } from '.';
import gamestopPreview from '@/assets/images/gamestop_preview.jpg';
import accenturePreview from '@/assets/images/accenture_preview.jpg';
import sfPreview from '@/assets/images/sf_preview.jpg';
import talentikaPreview from '@/assets/images/talentika_preview.jpg';

import armoganPdf from '@/assets/PDF/Gamestop_armogan.pdf';
import gsDealsPdf from '@/assets/PDF/Gamestop_gsDeals.pdf';
import jobDeskPdf from '@/assets/PDF/JobDesk.pdf';

export const posts: PostData[] = [
  {
    description:
      'Just wrapped up Job Desk — a UX/UI case study aimed at helping small businesses and students find the perfect workspaces. 💼✨\n\nFrom research to high-fidelity prototypes, I led the design process to solve real pain points like affordability, choice, and clarity. This was my first time transforming a mobile-first concept into a fully responsive web experience. A fantastic hands-on summer project!',
    imageUrl:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Job Desk UX Case Study Screens',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2021-07-20T09:00:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    hasPdf: true,
    ctaUrl: jobDeskPdf,
    downloadUrl: jobDeskPdf,
    type: ['projects'],
    tags: [
      'ux',
      'ui',
      'case study',
      'responsive design',
      'student project',
      'figma',
      'user research',
      'prototyping',
      'interface design',
      'mobile first',
    ],
  },
  {
    description:
      'Excited to have contributed to Armogan — the modular framework that now powers GameStop’s web presence across 6+ countries. 🌍⚙️\n\nFrom messy, inconsistent pages to a unified, responsive, and high-performing ecosystem: 30% better conversion, +22% SEO, and -7% bounce rate. This was a huge milestone in scalable frontend architecture and modular design at an enterprise level.',
    imageUrl:
      'https://images.pexels.com/photos/6476267/pexels-photo-6476267.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Modular design components on web UI',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2022-04-04T12:30:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    hasPdf: true,
    ctaUrl: armoganPdf,
    downloadUrl: armoganPdf,
    type: ['projects'],
    tags: [
      'modular',
      'framework',
      'frontend',
      'architecture',
      'ux',
      'ui',
      'seo',
      'performance',
      'scalability',
      'gamestop',
    ],
  },
  {
    description:
      'Thrilled to have worked on the transformation of GameStop’s iconic flyer into the fully digital, responsive GS Deals platform! 📱🛒\n\nWe tackled serious UX issues like mobile readability, update latency, and lack of interactivity. With GS Deals, promotions are modular, dynamic, and fully linked to live data — giving customers a modern, seamless experience while improving engagement and reducing bounce rate by 18%.',
    imageUrl:
      'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Responsive UI for GS Deals interface',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2022-09-18T09:00:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    hasPdf: true,
    ctaUrl: gsDealsPdf,
    downloadUrl: gsDealsPdf,
    type: ['projects'],
    tags: [
      'gs deals',
      'gamestop',
      'ux',
      'mobile',
      'digital transformation',
      'ecommerce',
      'live data',
      'ui design',
      'conversion',
      'promotions',
    ],
  },
  {
    description:
      "Happy to share that I've started freelancing as a Frontend Developer & UX Designer! 🚀\n\nThis marks a new chapter where I get to build intuitive, responsive applications while partnering directly with clients. Excited to bring ideas to life with React, Next.js, and of course a lot of Figma magic!",
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-02-15T00:00:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    type: ['experience'],
    tags: [
      'freelance',
      'frontend',
      'ux',
      'react',
      'next.js',
      'figma',
      'tailwind',
      'typescript',
      'design systems',
      'web apps',
    ],
  },
  {
    description:
      'Kicking off a new chapter at Accenture Italia as a Frontend Engineer! 🏢✨\n\nI had the chance to collaborate on impactful projects for public administration, dive deep into Angular, and sharpen my skills in scalable architecture. Grateful for the experience and everyone I learned from.',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2023-11-13T00:00:00Z',
    imageAlt: 'Accenture logo',
    imageUrl: accenturePreview,
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    type: ['experience'],
    tags: [
      'accenture',
      'angular',
      'public sector',
      'scalable frontend',
      'typescript',
      'rxjs',
      'node.js',
      'scss',
      'storybook',
      'enterprise',
    ],
  },
  {
    description:
      'Excited to announce that I joined GameStop as a Frontend Developer & UX Designer! 🎮💻\n\nWorking on the European e-commerce revamp taught me a lot about cross-market UX, performance tuning, and the .NET ecosystem. Big challenges, bigger growth.',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2021-12-06T00:00:00Z',
    imageAlt: 'GameStop logo',
    imageUrl: gamestopPreview,
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    type: ['experience'],
    tags: [
      'gamestop',
      'ecommerce',
      'ux',
      'internationalization',
      'seo',
      'frontend',
      'performance',
      '.net',
      'figma',
      'growth',
    ],
  },
  {
    description:
      'Just started a new journey as Graphic Content Creator at Starting Finance! 📊✍️\n\nThis role combined my love for visual design with the challenge of simplifying financial content. I crafted digital assets, wrote posts, and played a key part in growing the LinkedIn presence of the brand.',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2021-02-02T00:00:00Z',
    imageAlt: 'Starting Finance logo',
    imageUrl: sfPreview,
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    type: ['experience'],
    tags: [
      'graphic design',
      'content creation',
      'linkedin',
      'canva',
      'photoshop',
      'html',
      'css',
      'finance',
      'visual storytelling',
      'social media',
    ],
  },
  {
    description:
      'Proud to share that I joined Talentika as a Short-Term Educator! 🧑‍🏫📘\n\nTeaching financial literacy and digital skills to young learners was such a rewarding experience. From personal finance to e-commerce — empowering the next generation one lesson at a time.',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2021-03-18T00:00:00Z',
    imageAlt: 'Talentika logo',
    imageUrl: talentikaPreview,
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    type: ['experience'],
    tags: [
      'education',
      'teaching',
      'financial literacy',
      'ecommerce',
      'workshops',
      'personal finance',
      'training',
      'youth',
      'learning',
      'coaching',
    ],
  },
];
