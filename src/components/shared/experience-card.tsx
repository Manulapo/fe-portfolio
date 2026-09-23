import { experiences } from '@/app/constants/cert-skills';
import { Loader } from 'lucide-react';
import { Suspense } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';

const ExperienceCard = () => {
  return (
    <Card className="p-0 h-auto">
      <CardHeader>
        <Heading title="Experience"  />
      </CardHeader>
      <CardContent className="h-auto pb-5">
        {experiences.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 mb-4">
            <Separator className="mt-1" />

            <div className="flex items-center gap-2 my-2 overflow-hidden">
              <Suspense
                fallback={<Loader className="animate-spin text-gray-500" />}
              >
                <img src={item.icon} alt={item.title} className="w-15 h-15 rounded-lg p-1" />
              </Suspense>
              <div className="flex justify-between items-start w-full">
              <div className="flex flex-col">
                <p className="text-xs text-gray-500">
                {item.duration}
                </p>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {item.company}
                </p>
              </div>
              </div>
            </div>
            <p className="text-muted-foreground break-words whitespace-pre-line pl-4 py-4">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs"
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
