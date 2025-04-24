import { ChatData } from "@/types";

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
      { text: 'And let it flash', time: '09:13' },
      { text: "...ok boss, let's do the magic!", time: '09:18', isMine: true },
      { text: 'Let me know what you think', time: '09:19', isMine: true },
      {
        text: "Before was better, let's go with the first one!",
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
    user: 'HR Recruiter',
    userClaim: 'Talent Acquisition Expert',
    date: '2025-04-21',
    userAvatar:
      'https://media.npr.org/assets/img/2023/01/14/this-is-fine-7e5a97c2aa08a27b7b6c2ed91cd730086afb2b9c.jpg?s=1000',
    preview: 'We love your background!',
    messages: [
      {
        text: 'We’re really impressed with your background in Java.',
        time: '08:30',
      },
      {
        text: 'Oh... I actually work with JavaScript.',
        time: '08:31',
        isMine: true,
      },
      { text: 'Right, right! That is what i wrote 😄', time: '08:32' },
      {
        text: 'Yes, and I want also to add that i am proficient in HTML, as you might know also called Python in disguise.',
        time: '08:33',
        isMine: true,
      },
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
