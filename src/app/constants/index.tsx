import {
  AwardIcon,
  Briefcase,
  MessageSquareMore,
  PictureInPicture,
  Repeat2,
  Send,
  TargetIcon,
  ThumbsUp,
} from 'lucide-react';
import home from '@/assets/icons/home.svg';
import job from '@/assets/icons/job.svg';
import notification from '@/assets/icons/notification.svg';
import people from '@/assets/icons/people.svg';
import publish from '@/assets/icons/publish.svg';
import chat from '@/assets/icons/chat.svg';
import chevron from '@/assets/icons/chevronUp.svg';
import options from '@/assets/icons/dots.svg';
import newPost from '@/assets/icons/new_post.svg';

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

export const chatIcons = [
  { icon: options, alt: 'options' },
  { icon: newPost, alt: 'newPost' },
  { icon: chevron, alt: 'chevron' },
];
