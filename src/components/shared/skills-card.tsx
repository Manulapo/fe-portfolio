import { skills } from '@/app/constants';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';

const SkillsCard = () => {
  return (
    <Card className="p-0 h-auto pb-8">
      <CardHeader>
        <Heading title="Skills" />
        <Separator className="mt-4" />
      </CardHeader>
      <CardContent className="m-0">
        <div className="flex flex-col gap-2">
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

export default SkillsCard;
