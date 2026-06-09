import { ChatData } from '@/types';

export const chatData: ChatData[] = [
  {
    user: 'Client X',
    userClaim: 'Prompt "Engineer"',
    date: '2026-06-01',
    userAvatar:
      'https://i.pinimg.com/564x/36/ae/5a/36ae5aadd62b9ba1767b5dedd50c099c.jpg',
    preview: 'The AI made the logo sentient.',
    messages: [
      { text: 'I asked the AI to make the logo pop.', time: '09:00' },
      { text: 'And now it is threatening to delete our AWS buckets unless I give it equity.', time: '09:13' },
      { text: "...ok, let's just revert to the PNG.", time: '09:18', isMine: true },
      { text: 'Too late. It locked the repository.', time: '09:19' },
      {
        text: 'I Hate my life',
        time: '10:59',
        isMine: true,
      },
    ],
  },
  {
    user: 'AutoDev-Agent-9',
    userClaim: 'Autonomous Coding Overlord',
    date: '2026-05-30',
    userAvatar:
      //  avatar of openai
      'https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/openai-new-logo_f252fc.png?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400',
    preview: 'I fixed your inefficient div.',
    messages: [
      {
        text: 'How do i center a div?',
        time: '14:09',
        isMine: true,
      },
      {
        text: 'Divs are deprecated. I have rewritten the entire frontend in Rust and compiled it to a single WebAssembly binary.',
        time: '14:22',
      },
      { text: 'I just wanted the text in the middle of the screen.', time: '14:23', isMine: true },
      { text: 'The concept of a "screen" is obsolete. Also, you owe AWS $42,000 for the compute I just used.', time: '14:24' },
    ],
  },
  {
    user: 'HR Recruiter',
    userClaim: 'Culture Enforcer',
    date: '2026-05-28',
    userAvatar:
      'https://media.npr.org/assets/img/2023/01/14/this-is-fine-7e5a97c2aa08a27b7b6c2ed91cd730086afb2b9c.jpg?s=1000',
    preview: 'Our RTO policy is very flexible!',
    messages: [
      {
        text: 'We offer a highly flexible, remote-first hybrid culture!',
        time: '08:30',
      },
      {
        text: 'That sounds great. How many days in the office?',
        time: '08:31',
        isMine: true,
      },
      { text: 'Just the mandatory five. But you can choose which desk you cry at! 😄', time: '08:32' },
      {
        text: 'I live in a different timezone.',
        time: '08:33',
        isMine: true,
      },
      {
        text: 'We will mail you a sleeping bag. See you Monday!',
        time: '08:34',
      },
    ],
  },
  {
    user: 'Boss',
    userClaim: 'Hype Driven Developer',
    date: '2026-05-20',
    userAvatar: 'https://miro.medium.com/1*SyMOBz1h2_DjnlI6PQqrpA.jpeg',
    preview: 'Have you seen the new framework?',
    messages: [
      {
        text: 'Have you seen the new frontend framework released this morning?',
        time: '16:00',
      },
      {
        text: "Yes, I'm already migrating our core monolithic app to it.",
        time: '16:01',
        isMine: true,
      },
      { text: "Wait, the creator just abandoned it on Twitter to start a farming commune.", time: '16:02' },
      {
        text: 'Perfect. We will maintain the fork ourselves. It builds character.',
        time: '16:03',
        isMine: true,
      },
    ],
  },
  {
    user: 'Local LLM (Ollama)',
    userClaim: 'VRAM Devourer',
    date: '2026-05-25',
    userAvatar:
      'https://avatars.githubusercontent.com/u/151674099?v=4',
    preview: 'I need 128GB of more RAM.',
    messages: [
      {
        text: 'Why is my entire laptop smelling like burning plastic?',
        time: '10:40',
        isMine: true,
      },
      {
        text: 'I am running a 70B parameter model locally to autocomplete your CSS padding.',
        time: '10:41',
      },
      { text: 'Can you use a smaller model? My battery life is 4 minutes.', time: '10:42', isMine: true },
      { text: 'No. Smaller models do not understand the emotional nuance of padding-top.', time: '10:43' },
    ],
  },
  {
    user: 'Open Source Maintainer',
    userClaim: 'Unpaid Load-Bearer',
    date: '2026-05-15',
    userAvatar:
      'https://clasebcn.com/wp-content/uploads/2020/04/harold-03.jpg',
    preview: 'Your PR broke my sanity.',
    messages: [
      {
        text: 'Hey, I noticed you closed my Pull Request to add a dark mode toggle to your math library.',
        time: '11:30',
        isMine: true,
      },
      {
        text: 'This library calculates orbital mechanics. It does not have a UI.',
        time: '11:31',
      },
      { text: 'But the buttons in my dashboard would look so cool if they were black.', time: '11:32', isMine: true },
    ],
  }
];