import { getRandomNumber } from '@/lib/utils';
import { PostData } from '@/types';
import { userInfo } from '.';
import gamestopPreview from '@/assets/images/gamestop_preview.jpg';
import accenturePreview from '@/assets/images/accenture_preview.jpg';
import sfPreview from '@/assets/images/sf_preview.jpg';
import talentikaPreview from '@/assets/images/talentika_preview.jpg';

export const posts: PostData[] = [
  {
    description:
      "Happy to share that I've started freelancing as a Frontend Developer & UX Designer! 🚀\n\nThis marks a new chapter where I get to build intuitive, responsive applications while partnering directly with clients. Excited to bring ideas to life with React, Next.js, and of course a lot of Figma magic!",
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: "2025-02-15T00:00:00Z",
    
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    tags: ["experience"],
  },
  {
    description:
      "Kicking off a new chapter at Accenture Italia as a Frontend Engineer! 🏢✨\n\nI had the chance to collaborate on impactful projects for public administration, dive deep into Angular, and sharpen my skills in scalable architecture. Grateful for the experience and everyone I learned from.",
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: "2023-11-13T00:00:00Z",
    imageAlt: "Accenture logo",
    imageUrl: accenturePreview,
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    tags: ["experience"],
  },
  {
    description:
      "Excited to announce that I joined GameStop as a Frontend Developer & UX Designer! 🎮💻\n\nWorking on the European e-commerce revamp taught me a lot about cross-market UX, performance tuning, and the .NET ecosystem. Big challenges, bigger growth.",
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: "2021-12-06T00:00:00Z",
    imageAlt: "GameStop logo",
    imageUrl: gamestopPreview,
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    tags: ["experience"],
  },
  {
    description:
      "Just started a new journey as Graphic Content Creator at Starting Finance! 📊✍️\n\nThis role combined my love for visual design with the challenge of simplifying financial content. I crafted digital assets, wrote posts, and played a key part in growing the LinkedIn presence of the brand.",
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: "2021-02-02T00:00:00Z",
    imageAlt: "Starting Finance logo",
    imageUrl: sfPreview,
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    tags: ["experience"],
  },
  {
    description:
      "Proud to share that I joined Talentika as a Short-Term Educator! 🧑‍🏫📘\n\nTeaching financial literacy and digital skills to young learners was such a rewarding experience. From personal finance to e-commerce — empowering the next generation one lesson at a time.",
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: "2021-03-18T00:00:00Z",
    imageAlt: "Talentika logo",
    imageUrl: talentikaPreview,
    author: {
      name: userInfo.name,
      avatarUrl: userInfo.avatarImg,
      title: userInfo.title,
    },
    tags: ["experience"],
  },
];


// export const posts: PostData[] = [
//   {
//     description:
//       'Exploring the new UI trends in modern applications i came across this amazing design. It helped me a lot in my recent project.',
//     likes: getRandomNumber(80, 300),
//     comments: getRandomNumber(10, 95),
//     shares: getRandomNumber(1, 20),
//     createdAt: '2025-04-20T14:30:00Z',
//     author: {
//       name: 'Alice Johnson',
//       avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
//       title: 'UI/UX Designer',
//     },
//     tags: ['skills', 'projects'],
//   },
//   {
//     description: 'An in-depth guide to React Hooks without images.',
//     likes: getRandomNumber(80, 300),
//     comments: getRandomNumber(10, 95),
//     shares: getRandomNumber(1, 20),
//     createdAt: '2025-04-19T10:15:00Z',
//     author: {
//       name: 'Bob Smith',
//       avatarUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
//       title: 'Frontend Developer',
//     },
//     tags: ['skills'],
//   },
//   {
//     description: 'An in-depth guide to React Hooks.',
//     imageUrl:
//       'https://images.pexels.com/photos/31485509/pexels-photo-31485509/free-photo-of-vibrant-fashion-portrait-in-decorative-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
//     imageAlt: 'React Hooks code on a screen',
//     likes: getRandomNumber(80, 300),
//     comments: getRandomNumber(10, 95),
//     shares: getRandomNumber(1, 20),
//     createdAt: '2025-04-19T10:15:00Z',
//     author: {
//       name: 'Bob Smith',
//       avatarUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
//       title: 'Frontend Developer',
//     },
//     tags: ['experience'],
//   },
//   {
//     description: 'Tips for optimizing web performance.',
//     imageUrl:
//       'https://images.pexels.com/photos/31570554/pexels-photo-31570554/free-photo-of-elegant-floral-arrangement-in-antique-interior.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
//     imageAlt: 'Fast loading website',
//     likes: getRandomNumber(80, 300),
//     comments: getRandomNumber(10, 95),
//     shares: getRandomNumber(1, 20),
//     createdAt: '2025-04-18T08:45:00Z',
//     author: {
//       name: 'Carol Lee',
//       avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
//       title: 'Performance Engineer',
//     },
//     tags: ['projects', 'certifications'],
//   },
//   {
//     description: 'The future of JavaScript frameworks.',
//     imageUrl: 'https://images.pexels.com/photos/45678/pexels-photo-45678.jpeg',
//     imageAlt: 'JavaScript frameworks comparison',
//     likes: getRandomNumber(80, 300),
//     comments: getRandomNumber(10, 95),
//     shares: getRandomNumber(1, 20),
//     createdAt: '2025-04-17T16:00:00Z',
//     author: {
//       name: 'David Kim',
//       avatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
//       title: 'Full Stack Developer',
//     },
//     tags: ['experience', 'projects'],
//   },
//   {
//     description: 'Tips for optimizing web performance without visual aids.',
//     likes: getRandomNumber(80, 300),
//     comments: getRandomNumber(10, 95),
//     shares: getRandomNumber(1, 20),
//     createdAt: '2025-04-18T08:45:00Z',
//     author: {
//       name: 'Carol Lee',
//       avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
//       title: 'Performance Engineer',
//     },
//     tags: ['projects'],
//   },
//   {
//     description: 'Mastering responsive design techniques.',
//     imageUrl:
//       'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     imageAlt: 'Responsive design mockup',
//     likes: getRandomNumber(80, 300),
//     comments: getRandomNumber(10, 95),
//     shares: getRandomNumber(1, 20),
//     createdAt: '2025-04-16T12:30:00Z',
//     author: {
//       name: 'Eva Martinez',
//       avatarUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
//       title: 'Web Designer',
//     },
//     tags: ['skills'],
//   },
// ];
