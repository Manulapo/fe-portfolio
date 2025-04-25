import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';
import { userInfo } from '@/app/constants';

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
        <Separator className="mt-0" />
      </CardHeader>
      <CardContent className="m-0">
        <p className="text-sm text-muted-foreground">
          {isTruncated ? (
            <>
              {userInfo.aboutPreview.split(' ').slice(0, maxWord).join(' ')}
              {'...'}
              <Link className="text-blue-600" to={'/profile'}>
                Read More
              </Link>
            </>
          ) : (
            // the output should be a string with html tags
            <>
              <span role="img" aria-label="hand" className="text-2xl mr-2">
                👋🤖
              </span>
              <p className="my-4">
                I’m Manuel La Porta, a Frontend Engineer and UX Designer who
                recently relocated to Denmark. I’m seeking a full-time position
                where I can bring both technical rigor and a genuine curiosity
                about people’s needs to every project.
              </p>

              <p className="my-4">
                I’ve spent the last few years balancing code quality with
                empathetic design. At Accenture Italia, I led frontend
                architecture for public-sector platforms, building scalable
                Angular components, setting up Storybook documentation, and
                collaborating with backend teams to streamline data flows. I
                won’t pretend it was always perfect—early on I learned that
                shipping quickly sometimes meant revisiting decisions—and I’ve
                grown to value iteration over perfection.
              </p>

              <p className="my-4">
                Before that, at GameStop, I worked on a six-market e-commerce
                revamp. I wrote .NET-based frontend code by day and ran
                usability tests by night, discovering that small UX tweaks often
                have the biggest impact. It taught me to challenge assumptions
                (even my own) and to ask “Why?” as often as “How?”
              </p>

              <p className="my-4">
                Since 2018, my freelance projects have pushed me to wear every
                hat: designer, developer, project manager, sometimes even
                customer support. That taught me accountability—I own my
                mistakes as much as my successes—and clear communication,
                especially when working remotely across time zones.
              </p>

              <p className="my-4">
                Right now, I’m digging into MongoDB and Prisma so I can better
                understand backend constraints—and build more holistic
                solutions. I’m drawn to teams that value open feedback, share
                knowledge freely, and care as much about users as they do about
                code metrics.
              </p>

              <p className="my-4">
                If you’re looking for someone who brings technical discipline, a
                designer’s empathy, and a willingness to admit what they don’t
                yet know, let’s talk. I’m ready to roll up my sleeves, learn
                from you, and help create products people love.
              </p>
            </>
          )}
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
