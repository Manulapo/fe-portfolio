import { ChatData } from '@/types';

export const chatData: ChatData[] = [
  {
    user: 'Client X',
    userClaim: 'Responsive Design Expert',
    date: '2026-06-01',
    userAvatar:
      'https://i.pinimg.com/564x/36/ae/5a/36ae5aadd62b9ba1767b5dedd50c099c.jpg',
    isOnline: true,
    preview: 'Make it responsive without changing anything.',
    messages: [
      {
        text: 'Can you make the website exactly like the screenshot i sent you?',
        time: '09:01',
      },
      {
        text: 'Sure. What should happen on mobile?',
        time: '09:02',
        isMine: true,
      },
      { text: 'The same thing, just smaller.', time: '09:03' },
      {
        text: 'Then the text will be unreadable.',
        time: '09:04',
        isMine: true,
      },
      { text: 'Okay, make the text bigger.', time: '09:05' },
      { text: 'That changes the layout.', time: '09:06', isMine: true },
      {
        text: 'Why can’t you make it responsive without letting it respond?',
        time: '09:07',
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
    preview: 'I fixed all 214 vulnerabilities.',
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
    user: 'HR Recruiter',
    userClaim: 'Culture Enforcer',
    date: '2026-05-28',
    userAvatar:
      'https://media.npr.org/assets/img/2023/01/14/this-is-fine-7e5a97c2aa08a27b7b6c2ed91cd730086afb2b9c.jpg?s=1000',
    isOnline: true,
    preview: 'This interview is strictly no-AI.',
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
    user: 'Boss',
    userClaim: 'Scope Creep Evangelist',
    date: '2026-05-20',
    userAvatar: 'https://miro.medium.com/1*SyMOBz1h2_DjnlI6PQqrpA.jpeg',
    isOnline: false,
    preview: 'Just one tiny frontend change.',
    messages: [
      {
        text: 'We need one tiny change: add a button.',
        time: '16:01',
      },
      {
        text: 'Done.',
        time: '16:02',
        isMine: true,
      },
      {
        text: 'Great. When clicked, it should handle subscriptions, invoices, refunds, and VAT across 27 countries.',
        time: '16:03',
      },
      {
        text: 'That isn’t a button. That’s a whole finance department.',
        time: '16:04',
        isMine: true,
      },
      { text: 'Oh perfect. Make it reusable then!', time: '16:05' },
    ],
  },
  {
    user: 'Local LLM (Ollama)',
    userClaim: 'Test-Driven Hallucinator',
    date: '2026-05-25',
    userAvatar: 'https://avatars.githubusercontent.com/u/151674099?v=4',
    isOnline: true,
    preview: 'I generated 438 unit tests.',
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
    preview: 'Most users become maintainers.',
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
];
