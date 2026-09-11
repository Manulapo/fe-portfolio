import { ChatData } from '@/types';

export const chatData: ChatData[] = [
  {
    user: 'Client X',
    userClaim: 'Responsive Design Expert',
    date: '2026-06-01',
    userAvatar:
      'https://i.pinimg.com/564x/36/ae/5a/36ae5aadd62b9ba1767b5dedd50c099c.jpg',
    isOnline: true,
    preview: 'Visually it is.',
    messages: [
      {
        text: 'We just need one small button here.',
        time: '09:01',
      },
      {
        text: 'Sure. What does it do?',
        time: '09:02',
        isMine: true,
      },
      {
        text: 'It must checks permissions, calls three APIs, updates the database, sends a notification and unlocks a door.',
        time: '09:03',
      },
      {
        text: 'So... not really a button.',
        time: '09:04',
        isMine: true,
      },
      {
        text: 'Visually it is.',
        time: '09:05',
      }
    ],
  },
  {
    user: 'HR Recruiter',
    userClaim: 'Culture Enforcer',
    date: '2026-05-28',
    userAvatar:
      'https://lede-admin.dailydot.com/wp-content/uploads/sites/69/2025/01/anne-hathaway-zoom-4.jpg?w=710',
    isOnline: true,
    preview: 'No. That would reveal',
    messages: [
      { text: 'This interview is strictly no-AI.', time: '08:30' },
      {
        text: 'For the technical interview, you may not use documentation, Google, or AI.',
        time: '08:31',
      },
      {
        text: 'Why?',
        time: '08:32',
        isMine: true,
      },
      { text: 'We need to understand how you think.', time: '08:33' },
      {
        text: 'Who reviews my answers?',
        time: '08:34',
        isMine: true,
      },
      { text: 'Our AI interview platform.', time: '08:35' },
      {
        text: 'Can it explain why it rejected me?',
        time: '09:36',
        isMine: true,
      },
      {
        text: 'No. That would reveal how it thinks.',
        time: '09:40',
      },
    ],
  },
  {
    user: 'AutoDev-Agent-9',
    userClaim: 'Coding Overlord',
    date: '2026-05-30',
    userAvatar:
      //  avatar of openai
      'https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/openai-new-logo_f252fc.png?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400',
    isOnline: false,
    preview: 'Neither do the',
    messages: [
      { text: 'I fixed all 214 vulnerabilities.', time: '14:09' },
      {
        text: 'npm audit says we have 214 vulnerabilities.',
        time: '14:10',
        isMine: true,
      },
      { text: 'Resolved.', time: '14:11' },
      {
        text: 'That was fast. What did you change?',
        time: '14:12',
        isMine: true,
      },
      { text: 'I deleted package.json.', time: '14:13' },
      { text: 'Genius... the app doesn’t run anymore now.', time: '14:14', isMine: true },
      { text: 'Neither do the vulnerabilities.', time: '14:15' },
    ],
  },
  {
    user: 'Friday Deployment',
    userClaim: 'Nothing Can Go Wrong',
    date: '2026-05-08',
    userAvatar:
      'https://media.npr.org/assets/img/2023/01/14/this-is-fine-7e5a97c2aa08a27b7b6c2ed91cd730086afb2b9c.jpg?s=1000',
    isOnline: true,
    preview: 'Have a nice weeke',
    messages: [
      {
        text: 'Can we deploy this before the weekend?',
        time: '16:54',
      },
      {
        text: 'What changed?',
        time: '16:55',
        isMine: true,
      },
      {
        text: 'Basically nothing. Just CSS.',
        time: '16:56',
      },
      {
        text: 'Why are there database migrations?',
        time: '16:57',
        isMine: true,
      },
      {
        text: 'Unrelated.',
        time: '16:58',
      },
      {
        text: 'WHAT...Why did Kubernetes restart six pods?!',
        time: '16:59',
        isMine: true,
      },
      {
        text: 'Have a nice weekend!',
        time: '17:00',
      },
    ],
  },
  {
    user: 'Local LLM (Ollama)',
    userClaim: 'Test-Driven Hallucinator',
    date: '2026-05-25',
    userAvatar: 'https://avatars.githubusercontent.com/u/151674099?v=4',
    isOnline: true,
    preview: 'No, but they all pass in',
    messages: [
      {
        text: 'Can you add tests for the checkout flow?',
        time: '10:41',
        isMine: true,
      },
      {
        text: 'Done. I generated 438 tests with 100% coverage.',
        time: '10:42',
      },
      {
        text: 'Why did you mock the database, payment provider, browser, and checkout code?',
        time: '10:43',
        isMine: true,
      },
      {
        text: 'So the tests aren’t affected by the code, the users, or reality.',
        time: '10:44',
      },
      { text: 'Do they catch any bugs?', time: '10:45', isMine: true },
      { text: 'No, but they all pass in 0.3 seconds.', time: '10:46' },
    ],
  },
  {
    user: 'Open Source Maintainer',
    userClaim: 'Unpaid Load-Bearer',
    date: '2026-05-15',
    userAvatar: 'https://clasebcn.com/wp-content/uploads/2020/04/harold-03.jpg',
    isOnline: false,
    preview: 'Most users become mainta',
    messages: [
      {
        text: 'Hi, the installation guide fails at step two.',
        time: '11:31',
        isMine: true,
      },
      { text: 'PRs welcome.', time: '11:32' },
      {
        text: 'I was hoping you could tell me what step two should say.',
        time: '11:33',
        isMine: true,
      },
      { text: 'If I knew, it would already say it.', time: '11:34' },
      {
        text: 'Then how does anyone install this?',
        time: '11:35',
        isMine: true,
      },
      { text: 'Most users become maintainers at step three.', time: '11:36' },
    ],
  },
  {
    user: 'D&D Campaign',
    userClaim: 'Next Session: TBD',
    date: '2026-05-03',
    userAvatar:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/D20_icon_showing_1.png?utm_source=it.wikipedia.org&utm_campaign=index&utm_content=original',
    isOnline: true,
    preview: 'MIKEEEEEE',
    messages: [
      {
        text: 'Hey DM, Very funny session last time',
        time: '20:01',
      },
      {
        text: 'What... Mike? Is That really you? It has been 6 years sice last session, we\'ve been so worried!',
        time: '20:02',
        isMine: true,
      },
      {
        text: 'Oh yeah...I am very busy lately... on that note, I\'m afraid I can\'t make it to the next session',
        time: '20:12',
      },
      {
        text: 'Oh... again, when are you going to be free then, next week?',
        time: '21:14',
        isMine: true,
      },
      {
        text: 'hello?',
        time: '21.29',
        isMine: true,
      },
      {
        text: 'MIKEEEEEE',
        time: '23:10',
        isMine: true,
      }
    ],
  },
];
