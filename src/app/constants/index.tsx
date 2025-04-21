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
import { PostData } from '@/types';

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

export const posts: PostData[] = [
  {
    description:
      'Exploring the new UI trends in modern applications i came across this amazing design. It helped me a lot in my recent project.',
    likes: 120,
    comments: 15,
    shares: 5,
    createdAt: '2025-04-20T14:30:00Z',
    author: {
      name: 'Alice Johnson',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      title: 'UI/UX Designer',
    },
  },
  {
    description: 'An in-depth guide to React Hooks without images.',
    likes: 90,
    comments: 12,
    shares: 3,
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
    likes: 250,
    comments: 40,
    shares: 12,
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
    likes: 95,
    comments: 20,
    shares: 8,
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
    likes: 180,
    comments: 25,
    shares: 10,
    createdAt: '2025-04-17T16:00:00Z',
    author: {
      name: 'David Kim',
      avatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
      title: 'Full Stack Developer',
    },
  },
  {
    description: 'Tips for optimizing web performance without visual aids.',
    likes: 75,
    comments: 9,
    shares: 2,
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
    likes: 210,
    comments: 35,
    shares: 15,
    createdAt: '2025-04-16T12:30:00Z',
    author: {
      name: 'Eva Martinez',
      avatarUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
      title: 'Web Designer',
    },
  },
];
