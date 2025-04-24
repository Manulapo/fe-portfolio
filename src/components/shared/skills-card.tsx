import { skills } from '@/app/constants/cert-skills';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';

const SkillsCard = () => {
  return (
    <Card className="p-0 h-auto pb-8">
      <CardHeader>
        <Heading title="Skills" />
        <Separator className="mt-1" />
      </CardHeader>
      <CardContent className="m-0">
        <div className="flex">
          <ul className="text-sm text-muted-foreground list-none flex gap-1 flex-wrap">
            {skills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-2 border-1 rounded-full p-1 px-2 w-max">
                <img src={skill.icon} alt={skill.name} className=" rounded-full w-4 h-4" />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsCard;
