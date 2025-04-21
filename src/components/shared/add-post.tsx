import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import AvatarIcon from './Avatar';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { addPostLinks } from '../../app/constants/index';

const AddPost = () => {
  const isMobile = useIsMobile();
  return (
    <Card className="py-4 px-0 md:px-2 h-max">
      <CardContent className="flex flex-col justify-center md:items-center gap-2 px-0 md:px-2 overflow-x-hidden md:overflow-auto">
        {!isMobile && (
          <div className="flex items-center justify-between gap-4 px-2 w-full h-full">
            <AvatarIcon className="md:w-12 md:h-12 w-8 h-8" />
            <Input
              className="w-[90%] rounded-full h-max p-4 shadow-none border-2 border-gray-300"
              placeholder="Let's stay in touch!"
            />
          </div>
        )}
        <div className="flex items-center justify-start w-full md:gap-2 flex-nowrap overflow-auto">
          {addPostLinks.map((link) => (
            <Button
              className="flex items-center justify-start gap-2 py-5 px-2 flex-1 group"
              variant={'ghost'}
              asChild
            >
              <Link to={link.link}>
                {link.icon}
                <span className=" text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100">
                  {link.name}
                </span>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AddPost;
