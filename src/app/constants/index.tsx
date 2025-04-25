import chat from '@/assets/icons/chat.svg';
import home from '@/assets/icons/home.svg';
import job from '@/assets/icons/job.svg';
import notification from '@/assets/icons/notification.svg';
import people from '@/assets/icons/people.svg';
import publish from '@/assets/icons/publish.svg';
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

export const sitePages = [
  '/',
  '/projects',
  '/experience',
  '/certifications',
  '/network',
  '/chat',
  '/notification',
  '/profile',
];

export const userInfo = {
  name: 'Manuel La Porta',
  title: 'Frontend Developer & UX Designer',
  location: 'Copenaghen, Capital region, Denmark',
  avatarImg: 'https://github.com/shadcn.png',
  coverImg:
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZhdGUlMjBjb3ZlcnxlbnwwfHx8fDE2ODQ5NTY1NzE&ixlib=rb-4.0.3&q=80&w=1080',
  aboutPreview:
    'Frontend Engineer and UX Designer who recently relocated to Denmark.',
};

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

export const notificationFilter = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Jobs',
    value: 'job',
  },
  {
    name: 'My Posts',
    value: 'myPost',
  },
  {
    name: 'Mentions',
    value: 'mention',
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
  { icon: chat, path: '/chat', name: 'Chat' },
  { icon: publish, path: '/publish', name: 'Post' },
  { icon: job, path: '/experience', name: 'Experience' },
  { icon: notification, path: '/notification', name: 'Notification' },
  { icon: people, path: '/network', name: 'Network' },
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

export const dateTypes = [
  {
    name: 'Today',
    rank: 0,
  },
  {
    name: '3 days ago',
    rank: 1,
  },
  {
    name: '4 days ago',
    rank: 2,
  },
  {
    name: '8 days ago',
    rank: 3,
  },
  {
    name: '1 week ago',
    rank: 4,
  },
  {
    name: '2 weeks ago',
    rank: 5,
  },
  {
    name: '1 month ago',
    rank: 6,
  },
  {
    name: '3 months ago',
    rank: 7,
  },
  {
    name: '6 months ago',
    rank: 8,
  },
  {
    name: '1 year ago',
    rank: 9,
  },
];
