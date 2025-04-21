import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

const skills = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
];

const ProfileCard = () => {
  return (
    <Card className="p-0 h-auto">
      <CardHeader className="p-0 pb-2 rounded-tl-sm rounded-tr-sm bg-amber-500 h-25 relative">
        <div className="absolute left-3 bottom-[-35px] border-2 border-white rounded-full bg-white ">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="h-auto pb-5">
        <CardTitle className="font-semibold pt-8 flex flex-col gap-1">
          <h1 className="text-xl">Manuel La Porta</h1>
          <p className="text-muted-foreground font-normal">
            Frontend Developer & UX Designer
          </p>
          <p className="text-muted-foreground text-xs font-medium">
            Copenaghen, Regione Capitale della Danimarca
          </p>
        </CardTitle>
        <Separator className="my-4" />
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <Separator className="my-4" />
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-lg font-semibold">Skills</h2>
          <ul className="text-sm text-muted-foreground list-none flex flex-col gap-1">
            {skills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-2">
                <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
