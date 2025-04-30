import { getRandomNumber } from '@/lib/utils';
import { PostData } from '@/types';
import { userInfo } from '.';
import gamestopPreview from '@/assets/images/gamestop_preview.jpg';
import accenturePreview from '@/assets/images/accenture_preview.jpg';
import sfPreview from '@/assets/images/sf_preview.jpg';
import talentikaPreview from '@/assets/images/talentika_preview.jpg';
import armoganPreview from '@/assets/images/armogan_preview.jpg';
import dealsPreview from '@/assets/images/deals_preview.jpg';
import jobDeskPreview from '@/assets/images/jobdesk_preview.jpg';
import zeroToMasteryLogo from '@/assets/images/ztm_academy_logo.jpg';
import cambridgeLogo from '@/assets/images/cambridgeinternational_logo.jpg';
import freecodecampLogo from '@/assets/images/free_code_camp_logo.jpg';
import johnHopkinsLogo from '@/assets/images/john_hopkins_university_logo.jpg';
import NextJSEcommerceLogo from '@/assets/images/NextJSEcommerce_logo.png';
import portfolioPreview from '@/assets/images/portfolio_preview.jpg';
import propStorePreview from '@/assets/images/propstore_preview.jpg';

const armoganPdf = window.location.origin + '/assets/PDF/Gamestop_armogan.pdf';
const gsDealsPdf = window.location.origin + '/assets/PDF/Gamestop_gsDeals.pdf';
const jobDeskPdf = window.location.origin + '/assets/PDF/JobDesk.pdf';

export const posts: PostData[] = [
  {
    description:
      '**Just launched my new portfolio** — designed not just to show what I can build, but **how I think about building it**. 🎯\n\n' +
      'I picked a **clean, LinkedIn-inspired template** for a very strategic reason: I want even the busiest HR team (or hiring manager scanning at 3 PM after back-to-back calls) to find exactly what they need — fast. 🚀\n\n' +
      "The truth is: **good design isn't about standing out at any cost**. It's about **standing out where it matters**.\n\n" +
      "This portfolio is a reflection of that — **clear, structured, and ready to grow with me**. It's not perfect, and that’s the point: it’s **real, it's live, and it's getting better every day**.",
    imageUrl: portfolioPreview,
    imageAlt: 'New portfolio website preview',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-04-25T00:00:00Z', // Today!
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    ctaUrl: 'https://your-portfolio-domain.com', // Your real portfolio URL
    type: ['projects'],
    tags: [
      'PortfolioLaunch',
      'WebDevelopment',
      'Next.js',
      'React',
      'Tailwind',
      'TypeScript',
      'PersonalBranding',
      'UIUX',
      'SelfTaught',
      'ShippingMindset',
    ],
  },
  {
    description:
      '**Officially wrapped up the Next.js Ecommerce 2025 certification.** 📜\n\n' +
      'It wasn’t just about watching lessons — it meant **building, breaking, rethinking, and rebuilding**.\n\n' +
      'From **frontend performance** to **database structure** and **payment flows**, the course pushed me to **connect the dots between good architecture and real user experience**.\n\n' +
      'The certificate is a milestone, but the **real achievement** was **learning how to ship smarter products, faster**.',
    imageUrl: NextJSEcommerceLogo,
    imageAlt: 'Udemy Certification Preview',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-04-21T00:00:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    hasCta: true,
    ctaUrl:
      'https://www.udemy.com/certificate/UC-c322727a-1d79-4214-ac6b-a7368e2939af/',
    type: ['certifications'],
    tags: [
      'Certification',
      'Next.js',
      'React',
      'TypeScript',
      'FullStack',
      'Udemy',
      'Ecommerce',
      'WebDevelopment',
      'ProfessionalGrowth',
      'LearningJourney',
    ],
  },
  {
    description:
      '**Crossed a major milestone recently**: completed the Next.js Ecommerce 2025 project — which I turned into **PropStore**, a **fully functional platform for cinema collectibles and prop replicas**. 🎬🛒\n\n' +
      "This was my **first full-stack project with Next.js**, and easily the **most complex app I've built solo**. I wanted to **challenge myself beyond frontend** — to handle **auth flows, payments, database modeling**, and everything in between.\n\n" +
      '**PropStore reflects my two passions**: **well-crafted code** and **great cinema**. A place that could (hypothetically) sell lightsabers, hoverboards, or One Rings — powered by a **real-world tech stack**.\n\n' +
      'Built with **Next.js 15, React 19, TypeScript, PostgreSQL, Prisma, Zod, Stripe, PayPal, NextAuth**, and more — including **admin dashboards, user profiles, review systems, analytics**, and **session management**.\n\n' +
      'It’s more than a course project — it’s a **personal challenge turned into a real portfolio build**. The kind of thing I’d want to work on... if it actually shipped physical DeLoreans.',
    imageUrl: propStorePreview,
    imageAlt: 'Next.js Ecommerce course preview',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-04-24T00:00:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    hasCta: true,
    ctaUrl: 'https://propstore.vercel.app/',
    type: ['projects'],
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'FullStack',
      'FirstFullStackProject',
      'PostgreSQL',
      'Prisma',
      'Stripe',
      'NextAuth',
      'MovieProps',
      'Cinema',
      'WebDevelopment',
      'Zod',
      'AdminDashboards',
      'Portfolio',
    ],
  },
  {
    description:
      '**Proud to have completed the Complete Angular Developer Bootcamp** with Zero To Mastery Academy! 🎯\n\n' +
      'This experience **strengthened my skills in Angular, TypeScript, RxJS**, and even introduced me to **Firebase and Tailwind CSS**. Excited to apply these best practices to **future scalable projects**!',
    imageUrl: zeroToMasteryLogo,
    imageAlt: 'Zero To Mastery Academy logo',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2024-02-03T00:00:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    hasCta: true,
    ctaUrl:
      'https://www.udemy.com/certificate/UC-d6d0a563-322f-4abf-bedf-0adae1e4ba2b/',
    type: ['certifications'],
    tags: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Firebase',
      'Tailwind',
      'Testing',
      'Frontend',
      'Bootcamp',
      'Web Development',
      'Zero To Mastery',
    ],
  },
  {
    description:
      '**Excited to share that I earned my certification** in Front End Development Libraries from freeCodeCamp! 🚀\n\n' +
      '**React, Bootstrap, Redux, and SASS** — building projects with these technologies taught me **practical, real-world frontend skills** I now apply daily.',
    imageUrl: freecodecampLogo,
    imageAlt: 'freeCodeCamp logo',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2023-07-19T00:00:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    hasCta: true,
    ctaUrl:
      'https://freecodecamp.org/certification/fccfb7b9870-474a-44a7-bd78-67520444e601/front-end-development-libraries',
    type: ['certifications'],
    tags: [
      'React',
      'Redux',
      'Bootstrap',
      'SASS',
      'Frontend',
      'Libraries',
      'freeCodeCamp',
      'Certification',
      'Web Development',
      'Projects',
    ],
  },
  {
    description:
      "**Thrilled to have completed** the 'HTML, CSS, and Javascript for Web Developers' course by John Hopkins University! 🏛️\n\n" +
      'It **reinforced my frontend fundamentals** and pushed me toward **building responsive, real-world websites** with modern practices.',
    imageUrl: johnHopkinsLogo,
    imageAlt: 'John Hopkins University logo',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2021-10-16T00:00:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    hasCta: true,
    ctaUrl: 'https://coursera.org/verify/AJ7MQYRH2UE7',
    type: ['certifications'],
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
      'John Hopkins',
      'Coursera',
      'Frontend',
      'Web Development',
      'Fundamentals',
      'Mobile-First',
    ],
  },
  {
    description:
      '**Proud to have earned the Google UX Design Certificate!** 🧠✨\n\n' +
      'From **user research** to **wireframing** and **usability testing**, this program gave me a **strong foundation in human-centered design principles** that I bring into every project today.',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
    imageAlt: 'Google logo',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2021-09-04T00:00:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    hasCta: true,
    ctaUrl:
      'https://www.credly.com/badges/746b9f7e-ffb6-460c-829e-979a2e583d1d/public_url',
    type: ['certifications'],
    tags: [
      'UX',
      'Google',
      'User Research',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
      'Human-Centered Design',
      'Accessibility',
      'UI/UX',
      'Design Thinking',
    ],
  },
  {
    description:
      '**Achieved the Certificate in Advanced English (CAE) C1** from Cambridge International Education! 📚🎓\n\n' +
      'This certification **strengthened my communication skills**, helping me **write, present, and collaborate confidently** in international environments.',
    imageUrl: cambridgeLogo,
    imageAlt: 'Cambridge International Education logo',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2021-06-06T00:00:00Z',
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    hasCta: false,
    ctaUrl: '',
    type: ['certifications'],
    tags: [
      'Cambridge',
      'English',
      'Communication',
      'Writing',
      'Speaking',
      'Advanced English',
      'C1',
      'Language Skills',
      'International Certification',
      'Education',
    ],
  },
  {
    description:
      '**Just wrapped up Job Desk** — a **UX/UI case study** aimed at helping small businesses and students find the perfect workspaces. 💼✨\n\n' +
      'From **research to high-fidelity prototypes**, I led the design process to solve real pain points like **affordability, choice, and clarity**. This was my **first time transforming a mobile-first concept into a fully responsive web experience**. A fantastic **hands-on summer project**!',
    imageUrl: jobDeskPreview,
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
      '**Excited to have contributed to Armogan** — the **modular framework** that now powers GameStop’s web presence across 6+ countries. 🌍⚙️\n\n' +
      'From **messy, inconsistent pages** to a **unified, responsive, and high-performing ecosystem**: 30% better conversion, +22% SEO, and -7% bounce rate. This was a **huge milestone in scalable frontend architecture** and **modular design** at an enterprise level.',
    imageUrl: armoganPreview,
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
      '**Thrilled to have worked on the transformation** of GameStop’s iconic flyer into the fully digital, responsive **GS Deals platform**! 📱🛒\n\n' +
      'We tackled serious UX issues like **mobile readability, update latency**, and **lack of interactivity**. With GS Deals, **promotions are modular, dynamic, and fully linked to live data** — giving customers a **modern, seamless experience** while **improving engagement** and **reducing bounce rate by 18%**.',
    imageUrl: dealsPreview,
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
      "**Happy to share that I've started freelancing** as a Frontend Developer & UX Designer! 🚀\n\n" +
      'This marks a new chapter where I get to **build intuitive, responsive applications** while **partnering directly with clients**. Excited to bring ideas to life with **React, Next.js**, and of course a lot of **Figma magic**!',
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
      '**Kicking off a new chapter** at Accenture Italia as a Frontend Engineer! 🏢✨\n\n' +
      'I had the chance to **collaborate on impactful projects** for public administration, **dive deep into Angular**, and **sharpen my skills in scalable architecture**. Grateful for the experience and everyone I learned from.',
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
      '**Excited to announce that I joined GameStop** as a Frontend Developer & UX Designer! 🎮💻\n\n' +
      'Working on the **European e-commerce revamp** taught me a lot about **cross-market UX, performance tuning**, and the **.NET ecosystem**. **Big challenges, bigger growth**.',
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
      '**Just started a new journey** as Graphic Content Creator at Starting Finance! 📊✍️\n\n' +
      'This role combined my **love for visual design** with the **challenge of simplifying financial content**. I **crafted digital assets**, wrote posts, and played a **key part in growing the LinkedIn presence** of the brand.',
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
      '**Proud to share that I joined Talentika** as a Short-Term Educator! 🧑‍🏫📘\n\n' +
      '**Teaching financial literacy and digital skills** to young learners was such a **rewarding experience**. From **personal finance to e-commerce euristicsa** — **empowering the next generation one lesson at a time**.',
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
