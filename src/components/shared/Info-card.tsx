import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';

const experiencea = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Frontend Developer',
    company: 'Tech Company',
    duration: 'Jan 2020 - Present',
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML'],
    description:
      'Developed and maintained web applications using React and TypeScript. Collaborated with designers to implement user-friendly interfaces.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    title: 'UX Designer',
    company: 'Design Studio',
    duration: 'Jan 2018 - Dec 2019',
    skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping'],
    description:
      'Designed user interfaces and experiences for various web applications. Conducted user research and usability testing to improve product design.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    title: 'Backend Developer',
    company: 'Startup Inc.',
    duration: 'Jan 2016 - Dec 2017',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    description:
      'Developed RESTful APIs and backend services using Node.js and Express. Worked with databases like MongoDB and PostgreSQL.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    title: 'Web Developer',
    company: 'Freelance',
    duration: 'Jan 2015 - Dec 2015',
    skills: ['JavaScript', 'HTML', 'CSS'],
    description:
      'Worked on various freelance projects, developing websites and web applications using JavaScript, HTML, and CSS.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    title: 'UI Designer',
    company: 'Design Agency',
    duration: 'Jan 2014 - Dec 2014',
    skills: ['Figma', 'Adobe Photoshop', 'Sketch'],
    description:
      'Created user interfaces and visual designs for web applications. Collaborated with developers to ensure design feasibility.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    title: 'WordPress Developer',
    company: 'Web Solutions',
    duration: 'Jan 2013 - Dec 2013',
    skills: ['WordPress', 'PHP', 'HTML', 'CSS'],
    description:
      'Developed and maintained WordPress websites for various clients. Customized themes and plugins to meet client requirements.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg',
    title: 'Graphic Designer',
    company: 'Creative Studio',
    duration: 'Jan 2012 - Dec 2012',
    skills: ['Adobe Photoshop', 'Illustrator'],
    description:
      'Designed graphics and visual content for marketing materials. Collaborated with the marketing team to create engaging visuals.',
  },
];

const InfoCard = () => {
  return (
    <Card className="p-0 h-auto">
      <CardHeader className="">
        <Heading title="About me" />
      </CardHeader>
      <Separator className="my-2" />
      <CardContent className="h-auto pb-5">
        <p className="text-sm text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod rerum exercitationem harum illum suscipit. Recusandae suscipit quo deleniti, praesentium atque explicabo cumque pariatur ad sunt porro laudantium minus ducimus aliquam veritatis, voluptas, ab eum quaerat nisi a animi qui omnis. Optio mollitia aliquam odio vero quae blanditiis vel in, ex non quas ipsa? Quaerat dolore natus ipsam pariatur explicabo debitis modi placeat eveniet error commodi in blanditiis earum voluptatem, quisquam quidem tenetur corporis sequi iure necessitatibus accusantium, ut enim. Ad, provident deleniti non sit fugiat iusto fugit eos velit quod rem animi est voluptates nihil corporis consequuntur dolore? Iure, optio vitae. Delectus, dicta consequuntur nesciunt esse excepturi ratione accusantium aut quasi ducimus autem dolore perspiciatis nostrum voluptatum adipisci fugiat necessitatibus est voluptas a magnam sed asperiores? Beatae similique ut repudiandae impedit nulla laborum autem voluptatem sunt doloribus iste et voluptates laudantium deleniti ad illo eligendi explicabo aperiam neque, labore temporibus!
        </p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
