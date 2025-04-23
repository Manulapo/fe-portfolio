import {
  AwardIcon,
  Briefcase,
  GithubIcon,
  Linkedin,
  Mail,
  MessageSquareMore,
  Navigation2,
  Phone,
  PictureInPicture,
  Repeat2,
  Send,
  TargetIcon,
  ThumbsUp,
  User,
} from 'lucide-react';
import home from '@/assets/icons/home.svg';
import job from '@/assets/icons/job.svg';
import notification from '@/assets/icons/notification.svg';
import people from '@/assets/icons/people.svg';
import publish from '@/assets/icons/publish.svg';
import chat from '@/assets/icons/chat.svg';
import { ChatData, PostData } from '@/types';
import { getRandomNumber } from '@/lib/utils';

export const chatData: ChatData[] = [
  {
    user: 'Alice Johnson',
    userClaim: 'UI/UX Designer',
    date: '2025-04-21T09:15:00Z',
    userAvatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    preview: 'Hey, are you available for a quick chat?',
    messages: [
      { text: 'Hey, are you available for a quick chat?', time: '09:15' },
      { text: "Let me know when you're free.", time: '09:16' },
    ],
  },
  {
    user: 'Carol Lee',
    userClaim: 'Performance Engineer',
    date: '2025-04-20T15:45:00Z',
    userAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    preview: "Don't forget our meeting at 3 PM.",
    messages: [
      { text: "Don't forget our meeting at 3 PM.", time: '15:45' },
      { text: "I'll be there on time.", time: '15:46' },
    ],
  },
  {
    user: 'David Kim',
    userClaim: 'Full Stack Developer',
    date: '2025-04-20T17:30:00Z',
    userAvatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    preview: 'Could you review my pull request?',
    messages: [
      { text: 'Could you review my pull request?', time: '17:30' },
      { text: "I'll take a look shortly.", time: '17:32' },
    ],
  },
  {
    user: 'Eva Martinez',
    userClaim: 'Web Designer',
    date: '2025-04-21T08:05:00Z',
    userAvatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    preview: "I'm out of the office today.",
    messages: [
      { text: "I'm out of the office today.", time: '08:05' },
      { text: "Let's connect tomorrow.", time: '08:07' },
      {
        text: 'Sure, sounds good!',
        time: '08:08',
      },
      {
        text: 'I will be available at 10 AM.',
        time: '08:09',
      },
    ],
  },
];

export const contactInfo = [
  {
    title: 'Email',
    description: '',
    value: 'manulaporta98@gmail.com',
    icon: Mail,
    link: 'mailto:manulaporta98@gmail.com',
  },
  {
    title: 'Phone',
    description: '',
    value: '+45 52 65 23 63',
    icon: Phone,
    link: 'tel:+4552652363',
  },
  {
    title: 'LinkedIn',
    description: '(the real one)',
    value: 'linkedin.com/in/manulaporta',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/manulaporta',
  },
  {
    title: 'GitHub',
    description: '',
    value: 'github.com/Manulapo',
    icon: GithubIcon,
    link: 'https://github.com/Manulapo',
  },
  {
    title: 'Location',
    description: '',
    value: 'Taastrup, 2630 Denmark',
    icon: Navigation2,
    link: '',
  },
  {
    title: 'Birthday',
    description: '',
    value: 'May, 6 1998',
    icon: User,
    link: '',
  },
];

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

export const skills = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
];

export const addPostLinks = [
  {
    name: 'Projects',
    icon: <PictureInPicture className="size-5 text-amber-500" />,
    link: '/projects',
  },
  {
    name: 'Experience',
    icon: <Briefcase className="size-5 text-green-700" />,
    link: '/experience',
  },
  {
    name: 'Certifications',
    icon: <AwardIcon className="size-5 text-blue-500" />,
    link: '/certifications',
  },
  {
    name: 'skills',
    icon: <TargetIcon className="size-5 text-red-500" />,
    link: '/skills',
  },
];

export const postFooterLinks = [
  {
    name: 'Like',
    icon: <ThumbsUp className="size-5" />,
    link: '/projects',
  },
  {
    name: 'Comment',
    icon: <MessageSquareMore className="size-5" />,
    link: '/experience',
  },
  {
    name: 'Share',
    icon: <Repeat2 className="size-5" />,
    link: '/certifications',
  },
  {
    name: 'Send',
    icon: <Send className="size-5" />,
    link: '/skills',
  },
];

export const navbarIcons = [
  { icon: home, path: '/', name: 'Home' },
  { icon: people, path: '/people', name: 'Network' },
  { icon: chat, path: '/chat', name: 'Chat' },
  { icon: publish, path: '/publish', name: 'Post' },
  { icon: job, path: '/experience', name: 'Experience' },
  { icon: notification, path: '/notification', name: 'Notification' },
];

export const posts: PostData[] = [
  {
    description:
      'Exploring the new UI trends in modern applications i came across this amazing design. It helped me a lot in my recent project.',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-04-20T14:30:00Z',
    author: {
      name: 'Alice Johnson',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      title: 'UI/UX Designer',
    },
  },
  {
    description: 'An in-depth guide to React Hooks without images.',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-04-19T10:15:00Z',
    author: {
      name: 'Bob Smith',
      avatarUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
      title: 'Frontend Developer',
    },
  },
  {
    description: 'An in-depth guide to React Hooks.',
    imageUrl:
      'https://images.pexels.com/photos/31485509/pexels-photo-31485509/free-photo-of-vibrant-fashion-portrait-in-decorative-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    imageAlt: 'React Hooks code on a screen',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-04-19T10:15:00Z',
    author: {
      name: 'Bob Smith',
      avatarUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
      title: 'Frontend Developer',
    },
  },
  {
    description: 'Tips for optimizing web performance.',
    imageUrl:
      'https://images.pexels.com/photos/31570554/pexels-photo-31570554/free-photo-of-elegant-floral-arrangement-in-antique-interior.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    imageAlt: 'Fast loading website',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-04-18T08:45:00Z',
    author: {
      name: 'Carol Lee',
      avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      title: 'Performance Engineer',
    },
  },
  {
    description: 'The future of JavaScript frameworks.',
    imageUrl: 'https://images.pexels.com/photos/45678/pexels-photo-45678.jpeg',
    imageAlt: 'JavaScript frameworks comparison',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-04-17T16:00:00Z',
    author: {
      name: 'David Kim',
      avatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
      title: 'Full Stack Developer',
    },
  },
  {
    description: 'Tips for optimizing web performance without visual aids.',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-04-18T08:45:00Z',
    author: {
      name: 'Carol Lee',
      avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      title: 'Performance Engineer',
    },
  },
  {
    description: 'Mastering responsive design techniques.',
    imageUrl:
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Responsive design mockup',
    likes: getRandomNumber(80, 300),
    comments: getRandomNumber(10, 95),
    shares: getRandomNumber(1, 20),
    createdAt: '2025-04-16T12:30:00Z',
    author: {
      name: 'Eva Martinez',
      avatarUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
      title: 'Web Designer',
    },
  },
];

export const postFilters = [
  {
    name: 'All Posts',
    filter: 'all',
  },
  {
    name: 'Projects',
    filter: 'projects',
  },
  {
    name: 'Experience',
    filter: 'experience',
  },
  {
    name: 'Skills',
    filter: 'skills',
  },
];
