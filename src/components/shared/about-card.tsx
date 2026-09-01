import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';
import { userInfo } from '@/app/constants';

const AboutCard = ({
  isTruncated,
  maxWord = 20,
}: {
  isTruncated?: boolean;
  maxWord?: number;
}) => {
  return (
    <Card className="p-0 h-auto pb-8">
      <CardHeader>
        <Heading title="About me" />
        <Separator className="mt-0" />
      </CardHeader>
      <CardContent className="m-0">
        <p className="text-sm text-muted-foreground">
          {isTruncated ? (
            <>
              {userInfo.aboutPreview.split(' ').slice(0, maxWord).join(' ')}
              {'... '}
              <Link className="text-blue-600" to={'/profile'}>
                Read More
              </Link>
            </>
          ) : (
            <>
              <span role="img" aria-label="hand" className="text-2xl mr-2">
                👋🤖
              </span>
             <p className="my-4"> I’m Manuel La Porta, an Italian developer and UX designer living in Denmark. I originally studied finance, then somehow ended up teaching myself how to build digital products instead. It was not exactly the planned route, but it turns out I enjoy solving interface problems much more than staring at spreadsheets. </p>

<p className="my-4"> I like working somewhere between code, design and product thinking. I care about clean interfaces and solid engineering, but I’m usually more interested in whether something actually makes sense to the person using it. “Technically correct” is a surprisingly low bar for a good product. </p>

<p className="my-4"> I’m naturally curious, which means I have a bad habit of wanting to understand whatever sits on the other side of my comfort zone. These days that includes backend development and AI, mostly because I’d rather understand the whole problem than throw things over an imaginary frontend/backend wall and hope for the best. </p>

<p className="my-4"> Outside of work, I’m predictably a bit of a nerd: videogames, Dungeons & Dragons, board games, films, DJing, and occasionally opening Figma for fun, which I’m aware is not a particularly convincing definition of “switching off.” I like curious people, honest feedback, good ideas, and building things that feel useful rather than simply impressive. </p>
            </>
          )}
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
