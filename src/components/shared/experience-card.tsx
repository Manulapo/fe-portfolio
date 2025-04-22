import { experiences } from '@/app/constants';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';

const ExperienceCard = () => {
  return (
    <Card className="p-0 h-auto">
      <CardHeader  >
        <Heading title="Experience" />
      </CardHeader>
      <CardContent className="h-auto pb-5">
        {experiences.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 mb-4">
            <Separator className="mt-1" />

            <div className="flex items-center gap-2">
              <img src={item.icon} alt={item.title} className="w-6 h-6 " />
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground font-semibold">
              {item.company}
            </p>
            <p className="text-sm text-muted-foreground">{item.duration}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
