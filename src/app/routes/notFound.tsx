import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { sitePages } from '../constants';

const NotFound = () => {
  const selectRandomPage = () => {
    return sitePages[Math.floor(Math.random() * sitePages.length)];
  };

  return (
    <div className="container mx-auto flex flex-col gap-6 max-w-xl">
      <Card className="w-full flex flex-col gap-4 p-6 text-center shadow-none rounded-xl">
        <h1 className="text-2xl font-bold">404 – This page doesn’t exist.</h1>
        <p className="text-muted-foreground">
          Maybe the route is wrong, maybe I forgot to build this page. Either
          way, you're a bit lost.
        </p>
        <div className="flex justify-center gap-3 pt-4">
          <Link to="/">
            <Button
              className={cn(
                'flex items-center justify-center gap-2 py-2 cursor-pointer rounded-full font-semibold text-white bg-blue-500 hover:bg-blue-700',
              )}
            >
              Take me home
            </Button>
          </Link>
          <Link to={selectRandomPage()}>
            <Button
              className={cn(
                'flex items-center justify-center gap-2 py-2 cursor-pointer rounded-full font-semibold bg-transparent border-1 text-gray-500 border-gray-300 hover:bg-gray-200 hover:text-gray-800',
              )}
              variant="outline"
            >
              Let's random things
            </Button>
          </Link>
        </div>
      </Card>

      <Card className="w-full p-4 text-sm text-muted-foreground shadow-none rounded-xl text-center">
        <p>
          Or go chat with me, check out my experience, or just click around —
          it’s not a maze... probably.
        </p>
      </Card>
    </div>
  );
};

export default NotFound;
