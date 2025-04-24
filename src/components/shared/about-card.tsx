import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibuLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.s.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus';

const AboutCard = ({
  isTruncated,
  maxWord = 10,
}: {
  isTruncated?: boolean;
  maxWord?: number;
}) => {
  return (
    <Card className="p-0 h-auto pb-8">
      <CardHeader>
        <Heading title="About me" />
        <Separator className="mt-1" />
      </CardHeader>
      <CardContent className="m-0">
        <p className="text-sm text-muted-foreground">
          {isTruncated ? (
            <>
              {text.split(' ').slice(0, maxWord).join(' ')}
              {'...'}
              <Link className="text-blue-600" to={'/profile'}>
                Read more
              </Link>
            </>
          ) : (
            text
          )}
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
