import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';

const AboutCard = () => {
  return (
    <Card className="p-0 h-auto pb-8">
      <CardHeader>
        <Heading title="About me" />
        <Separator className='mt-4' />   
      </CardHeader>
      <CardContent className="m-0">
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
          maiores nulla. Dicta necessitatibus ipsam earum saepe porro veritatis
          accusantium dolores voluptates, excepturi eos laudantium modi quasi,
          possimus ullam animi dignissimos voluptatibus eligendi placeat quaerat
          molestias officiis? Perferendis asperiores iste doloribus culpa
          reiciendis dolorum repellat ad, quasi odit quod? Quae, optio?
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
