import { getRandomNumber } from "@/lib/utils";
import { PostData } from "@/types";

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
