import accentureLogo from '@/assets/images/accenture_logo.jpg';
import hococoLogo from '@/assets/images/hococo_logo.jpeg';
import gamestopLogo from '@/assets/images/gamestop_logo.jpg';
import { InspirationsData, TestimonialData } from '@/types';
import traversyMedia from '@/assets/images/traversyMedia.jpg';
import jeffreyWay from '@/assets/images/jeffreyWay.jpg';
import designCourse from '@/assets/images/designCourse.jpg';
import fireship from '@/assets/images/fireship.jpg';

export const testimonials: TestimonialData[] = [
  {
    name: 'Mike Theodorsson',
    role: 'Chief Technology Officer',
    company: 'Hococo',
    date: '2026-06-08',
    companyLogo: hococoLogo,
    text: `Manuel is stellar performer with ambitions to always improve and always find ways to contribute to the team's success. He has a keen eye for detail and always asks the right questions about both the product and the technical problems that lie in front of him. He's never been shy to tackle problems outside of his wheelhouse either, and he knows when to ask for help and when to delver deeper into the problems himself [...]`,
  },
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
    name: 'Jeffrey Way',
    company: '@jeffrey_way',
    avatarUrl: jeffreyWay,
    text: 'Jeffrey’s approach to teaching is like having a patient mentor who breaks down complex concepts into digestible pieces. His work on Laracasts has been instrumental in my understanding of not just Laravel, but web development as a whole.',
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
