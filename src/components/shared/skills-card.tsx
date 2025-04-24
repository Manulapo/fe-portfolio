import { skills } from '@/app/constants/cert-skills';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';
import { skillsType } from '@/types';

const SkillsCard = () => {

  return (
    <Card className="p-0 h-auto pb-4">
      <CardHeader>
        <Heading title="Skills" />
        <Separator className="mt-0" />
      </CardHeader>
      <CardContent className="m-0">
        <div className="flex">
          <ul className="text-sm text-muted-foreground list-none">
            {Object.keys(skills).map((key, i) => (
              <div className="mb-2 flex gap-1 flex-wrap" key={i}>
                <h3 className="text-sm font-semibold text-gray-900 capitalize w-full">
                  {key}
                </h3>
                {skills[key as skillsType].map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 border-1 rounded-full p-1 px-2 transition-all ease-in-out w-max hover:border-gray-300 hover:text-gray-700 hover:shadow-sm"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className=" rounded-full w-4 h-4"
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsCard;
