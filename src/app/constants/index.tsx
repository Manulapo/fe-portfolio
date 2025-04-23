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

export const userInfo = {
  name: 'Manuel La Porta',
  title: 'Frontend Develope & UX Designer',
  avatarImg: 'https://github.com/shadcn.png',
};

export const chatData: ChatData[] = [
  {
    user: 'Client X',
    userClaim: 'Visionary Entrepreneur',
    date: '2025-04-22',
    userAvatar:
      'https://i.pinimg.com/564x/36/ae/5a/36ae5aadd62b9ba1767b5dedd50c099c.jpg',
    preview: 'Can you make the logo bigger?',
    messages: [
      { text: 'Can you make the logo bigger?', time: '09:00' },
      { text: 'And let it flash... maybe', time: '09:13' },
      { text: "...ok boss, let's do the magic!", time: '09:18', isMine: true },
      { text: 'Let me know what you think', time: '09:19', isMine: true },
      {
        text: "No ok, before was better, let's go with the first one!",
        time: '09:29',
      },
    ],
  },
  {
    user: 'CSS Engine',
    userClaim: 'Layout Whisperer',
    date: '2025-04-20',
    userAvatar:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    preview: 'How do i center a div?',
    messages: [
      {
        text: 'How do i center a div?',
        time: '14:09',
        isMine: true,
      },
      {
        text: "You said 'center'… Do you mean horizontally, vertically, or spiritually?",
        time: '14:22',
      },
      { text: 'Just horizontally, please.', time: '14:23', isMine: true },
      { text: 'Done. But it only works in Safari.', time: '14:24' },
    ],
  },
  {
    user: 'JavaScript',
    userClaim: 'The Dynamic One',
    date: '2025-04-18',
    userAvatar:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    preview: 'null == undefined?',
    messages: [
      {
        text: 'You wrote `null == undefined`. Want them to be equal today?',
        time: '10:40',
      },
      { text: 'Yes, please.', time: '10:41', isMine: true },
      { text: 'Okay. But tomorrow I might change my mind.', time: '10:42' },
    ],
  },
  {
    user: 'Dev Colleague',
    userClaim: 'Early Adopter',
    date: '2025-04-17',
    userAvatar: 'https://clasebcn.com/wp-content/uploads/2020/04/harold-03.jpg',
    preview: 'Have you seen the new framework?',
    messages: [
      {
        text: 'Have you seen the new frontend framework released yesterday?',
        time: '16:00',
      },
      {
        text: "Yes, I've already integrated it in production.",
        time: '16:01',
        isMine: true,
      },
      { text: "But it's still in alpha!", time: '16:02' },
      {
        text: 'Exactly, Perfect for production!',
        time: '16:03',
        isMine: true,
      },
    ],
  },
  {
    user: 'Job Interviewer',
    userClaim: 'Tech Recruiter',
    date: '2025-04-15',
    userAvatar:
      'https://www.nbc.com/sites/nbcblog/files/2022/07/the-office-how-to-watch.jpg',
    preview: 'Explain == vs ===?',
    messages: [
      {
        text: 'Can you explain the difference between `==` and `===` in JavaScript?',
        time: '11:30',
      },
      {
        text: '`==` is like a blind date: might work. `===` is like marriage: must work.',
        time: '11:31',
        isMine: true,
      },
      { text: 'Hired.', time: '11:32' },
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
    tags: ['skills', 'projects'],
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
    tags: ['skills'],
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
    tags: ['experience'],
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
    tags: ['projects', 'certifications'],
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
    tags: ['experience', 'projects'],
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
    tags: ['projects'],
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
    tags: ['skills'],
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
    name: 'Certifications',
    filter: 'certifications',
  },
  {
    name: 'Skills',
    filter: 'skills',
  },
];
