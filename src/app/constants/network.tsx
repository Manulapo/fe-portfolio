import accentureLogo from '@/assets/images/accenture_logo.jpg';
import gamestopLogo from '@/assets/images/gamestop_logo.jpg';
import { InspirationsData, TestimonialData } from '@/types';
import traversyMedia from '@/assets/images/traversyMedia.jpg';
import jherr from '@/assets/images/jherr.jpg';
import designCourse from '@/assets/images/designCourse.jpg';
import fireship from '@/assets/images/fireship.jpg';

export const testimonials: TestimonialData[] = [
  {
    name: 'Francesco Malagisi',
    role: 'Business Architecture Manager',
    company: 'Accenture',
    date: '2025-01-31',
    companyLogo: accentureLogo,
    text: `Manuel consistently demonstrated strong technical skills and a deep understanding of frontend development, particularly with Angular and TypeScript. He played a crucial role in connecting backend logic, business needs, and frontend usability — always with precision and professionalism.`,
  },
  {
    name: 'Davide Soldano',
    role: 'E-commerce & CRM Manager',
    company: 'GameStop',
    date: '2023-11-14',
    companyLogo: gamestopLogo,
    text: `Manuel is a fantastic developer and a brilliant UX designer.
  He never stops at obstacles and is able to manage projects of great complexity with a variety of stakeholders involved.
  A great loyal teammate who was great to work with.`,
  },
];

export const inspirations: InspirationsData[] = [
  {
    name: 'Brad Traversy',
    company: '@TraversyMedia',
    avatarUrl: traversyMedia,
    text: 'Brad’s tutorials were my go-to when I needed to build confidence early on. Clear, direct, and always project-focused — the kind of teaching that actually sticks.',
  },
  {
    name: 'Jack Herrington',
    company: '@Jherr',
    avatarUrl: jherr,
    text: 'You don’t just learn how to code — you learn how to think. Jack has this way of making even advanced topics feel grounded in reality.',
  },
  {
    name: 'Gary Simon',
    company: '@DesignCourse',
    avatarUrl: designCourse,
    text: 'The thing i love the most about him is that he makes design choices so obvious and accessible to anyone. He bridges the gap between aesthetics and structure in a way most devs really need.',
  },
  {
    name: 'Fireship',
    company: '@Fireship',
    avatarUrl: fireship,
    text: 'Funny, sharp, and somehow always ahead of the curve. A must-follow for any developer to learn and stay updated.',
  },
];
